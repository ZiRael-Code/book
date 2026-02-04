const express = require('express');
const cors = require('cors');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve files from the correct location
app.use(express.static(path.join(__dirname, 'packages/book1-portfolio')));

app.post('/api/generate-pdf', (req, res) => {
    console.log('📦 Generating PDF via API...');

    // Path to build script
    const buildScriptPath = path.join(__dirname, 'packages/book1-portfolio/reader/scripts/build-pdf.js');
    console.log('Build script path:', buildScriptPath);

    exec(`node "${buildScriptPath}"`, (error, stdout, stderr) => {
        if (error) {
            console.error('❌ PDF generation error:', error);
            console.error('stderr:', stderr);
            return res.status(500).json({
                error: 'PDF generation failed',
                details: error.message,
                stderr: stderr
            });
        }

        console.log('Build output:', stdout);

        // Try two possible PDF locations
        const pdfPath1 = path.join(__dirname, 'packages/book1-portfolio/reader/export/book.pdf');
        const pdfPath2 = path.join(__dirname, 'packages/book1-portfolio/export/book.pdf');

        let pdfPath = null;
        if (fs.existsSync(pdfPath1)) {
            pdfPath = pdfPath1;
            console.log('Found PDF at:', pdfPath1);
        } else if (fs.existsSync(pdfPath2)) {
            pdfPath = pdfPath2;
            console.log('Found PDF at:', pdfPath2);
        }

        if (pdfPath) {
            console.log('📄 Sending PDF to client...');
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="HTML-CSS-Tailwind-Book.pdf"');
            res.sendFile(pdfPath);
        } else {
            console.error('❌ PDF not found at either location');
            console.error('Tried:', pdfPath1);
            console.error('Tried:', pdfPath2);
            res.status(404).json({
                error: 'PDF file not found',
                triedPaths: [pdfPath1, pdfPath2]
            });
        }
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📚 Reader: http://localhost:${PORT}/reader/index.html`);
    console.log(`📄 PDF: POST http://localhost:${PORT}/api/generate-pdf`);
});