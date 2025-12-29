import { CONFIG } from '../config/reader.config.js';

export function renderTOC() {
    const tocList = document.getElementById('toc-list');
    if (!tocList) return;

    tocList.innerHTML = '';

    CONFIG.chapters.forEach((chapter, index) => {
        const chapterElement = document.createElement('a');
        chapterElement.href = `#${chapter.id}`;
        chapterElement.className = 'nav-item';
        if (index === 0) chapterElement.classList.add('active');

        chapterElement.innerHTML = `
            <div class="w-6 h-6 rounded-full ${index === 0 ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-slate-600'} flex items-center justify-center text-sm font-medium">${chapter.order}</div>
            <span>${chapter.title}</span>
        `;

        chapterElement.addEventListener('click', async (e) => {
            e.preventDefault();
            await loadChapter(chapter.id);
        });

        tocList.appendChild(chapterElement);
    });
}

// Also update progress
export function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = `${CONFIG.book.progress}%`;
    }
}