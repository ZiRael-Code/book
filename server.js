const express = require('express');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve static files from reader directory
app.use('/reader', express.static(path.join(__dirname, 'packages/book1-portfolio/reader')));
app.use(express.static('public'));

// API endpoint to generate PDF
app.post('/api/generate-pdf', async (req, res) => {
    try {
        console.log('📦 Generating PDF via API...');

        // Path to your existing buildPDF script
        const buildScriptPath = path.join(__dirname, 'packages/book1-portfolio/reader/scripts/build-pdf.js');

        // Run the build script
        exec(`node "${buildScriptPath}"`, (error, stdout, stderr) => {
            if (error) {
                console.error('❌ PDF generation error:', error);
                return res.status(500).json({ error: 'PDF generation failed' });
            }

            console.log(stdout);

            // Read the generated PDF file
            const pdfPath = path.join(__dirname, 'packages/book1-portfolio/export/book.pdf');

            if (fs.existsSync(pdfPath)) {
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename="HTML-CSS-Tailwind-Book.pdf"');
                res.sendFile(pdfPath);
            } else {
                res.status(404).json({ error: 'PDF file not found' });
            }
        });

    } catch (error) {
        console.error('❌ Server error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Fallback route for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'packages/book1-portfolio/reader/index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📚 Reader available at http://localhost:${PORT}/reader/index.html`);
});