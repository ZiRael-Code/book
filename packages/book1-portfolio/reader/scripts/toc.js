// packages/book1-portfolio/reader/scripts/toc.js
export function initializeTOC(chapters) {
    const tocList = document.getElementById('toc-list');
    if (!tocList) return;

    tocList.innerHTML = '';

    chapters.forEach((chapter, index) => {
        const item = document.createElement('a');
        item.href = '#';
        item.className = 'nav-item';
        if (index === 0) item.classList.add('active');

        item.innerHTML = `
            <div class="w-6 h-6 rounded-full ${index === 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-slate-600'} 
                        flex items-center justify-center text-sm font-medium">
                ${chapter.order}
            </div>
            <span>${chapter.title}</span>
        `;

        tocList.appendChild(item);
    });
}

export function updateTOCActive(chapter, chapters) {
    document.querySelectorAll('.nav-item').forEach(item => {
        const span = item.querySelector('span');
        if (span && span.textContent === chapter.title) {
            item.classList.add('active');
            const circle = item.querySelector('div');
            if (circle) {
                circle.className = 'w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium';
            }
        } else {
            item.classList.remove('active');
            const circle = item.querySelector('div');
            if (circle) {
                circle.className = 'w-6 h-6 rounded-full bg-gray-100 text-slate-600 flex items-center justify-center text-sm font-medium';
            }
        }
    });
}