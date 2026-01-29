export async function generateAndDownloadPDF() {
    let originalText = null;
    let pdfBtn = null;

    try {
        console.log('📚 Generating PDF...');

        pdfBtn = document.getElementById('export-pdf-btn');
        originalText = pdfBtn.innerHTML;

        pdfBtn.innerHTML = `
            <svg class="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Generating...</span>
        `;
        pdfBtn.disabled = true;

        const response = await fetch('http://localhost:3000/api/generate-pdf', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/pdf'
            }
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Server error response:', errorText);
            throw new Error(`Server returned ${response.status}: ${errorText}`);
        }

        const blob = await response.blob();
        console.log('PDF blob size:', blob.size);

        if (blob.size === 0) {
            throw new Error('PDF is empty');
        }

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'HTML-CSS-Tailwind-Book.pdf';
        document.body.appendChild(a);
        a.click();

        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 100);

        console.log('✅ PDF downloaded successfully!');

    } catch (error) {
        console.error('❌ PDF generation error:', error);
        alert(`Failed to generate PDF: ${error.message}\n\nCheck console for details.`);
    } finally {
        if (pdfBtn && originalText) {
            pdfBtn.innerHTML = originalText;
            pdfBtn.disabled = false;
        }
    }
}