const fs = require('fs').promises;
const path = require('path');

async function buildPDF() {
    console.log('📚 Building PDF from chapters...\n');

    const chaptersDir = path.join(__dirname, '..', 'chapters');
    const exportDir = path.join(__dirname, '..', 'export');

    await fs.mkdir(exportDir, { recursive: true });

    try {
        const files = await fs.readdir(chaptersDir);

        const chapterFiles = files
            .filter(f => f.endsWith('.md'))
            .sort();

        console.log(`Found ${chapterFiles.length} chapters:`);

        let fullBook = '';

        fullBook += '# HTML/CSS & Tailwind: A Beginner\'s Journey\n\n';
        fullBook += '**Beginner\'s Journey**\n\n';
        fullBook += '---\n\n';

        fullBook += '## Table of Contents\n\n';
        for (let i = 0; i < chapterFiles.length; i++) {
            const file = chapterFiles[i];
            const filePath = path.join(chaptersDir, file);
            const content = await fs.readFile(filePath, 'utf-8');
            const firstLine = content.split('\n')[0];
            const title = firstLine.replace('# ', '').trim();
            console.log(`  ${i}. ${title}`);
            fullBook += `${i}. ${title}\n`;
        }
        fullBook += '\n---\n\n';

        for (const file of chapterFiles) {
            const filePath = path.join(chaptersDir, file);
            const content = await fs.readFile(filePath, 'utf-8');
            fullBook += content + '\n\n---\n\n';
        }

        const combinedPath = path.join(exportDir, 'book-combined.md');
        await fs.writeFile(combinedPath, fullBook);
        console.log(`✓ Created combined markdown: ${combinedPath}`);

        try {
            const mdToPdf = require('md-to-pdf');

            const pdf = await mdToPdf({ content: fullBook }, {
                dest: path.join(exportDir, 'book.pdf'),
                stylesheet: path.join(__dirname, 'pdf-styles.css')
            });

            console.log('✅ PDF generated successfully!');
            console.log(`📄 Location: ${path.join(exportDir, 'book.pdf')}`);

        } catch (pdfError) {
            console.log('⚠️ md-to-pdf not available. Creating only markdown file.');
            console.log('To get PDF generation, run: npm install md-to-pdf');
        }

    } catch (error) {
        console.error('❌ Error:', error.message);

        const errorContent = `# Error Generating PDF\n\nCould not read chapters from: ${chaptersDir}\n\nError: ${error.message}`;
        await fs.writeFile(path.join(exportDir, 'book.pdf'), errorContent);
        console.log('Created placeholder PDF with error message.');
    }

    console.log('\n📖 To view the reader:');
    console.log('1. Run: npm run dev');
    console.log('2. Open: http://localhost:8080');
    console.log('3. Click "Export PDF" in the sidebar');
}

buildPDF().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});