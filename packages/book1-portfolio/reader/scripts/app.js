import { CONFIG } from '../config/reader.config.js';
import { renderTOC } from './toc.js';

function markdownToHTML(markdown) {
    return markdown
        .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>')
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-4 mb-2">$1</h3>')
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        .replace(/`(.*?)`/gim, '<code class="bg-gray-100 px-1 py-0.5 rounded">$1</code>')
        .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">$1</blockquote>')
        .replace(/\n\s*\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

async function loadChapter(chapterId) {
    const chapter = CONFIG.chapters.find(c => c.id === chapterId);
    if (!chapter) return;

    try {
        const response = await fetch(chapter.path);
        if (!response.ok) throw new Error('Failed to load chapter');

        const markdown = await response.text();

        document.getElementById('chapter-title').textContent = chapter.title;

        const contentDiv = document.getElementById('chapter-content');
        contentDiv.innerHTML = `<div class="prose prose-lg max-w-none">${markdownToHTML(markdown)}</div>`;

        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            const span = item.querySelector('span');
            if (span && span.textContent === chapter.title) {
                item.classList.add('active');
                const circle = item.querySelector('div');
                if (circle) {
                    circle.className = 'w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium';
                }
            }
        });

        const currentIndex = CONFIG.chapters.findIndex(c => c.id === chapterId);
        const totalChapters = CONFIG.chapters.length;
        const infoElement = document.querySelector('.border-t + .flex .text-sm');
        if (infoElement) {
            infoElement.textContent = `Chapter ${currentIndex} of ${totalChapters - 1} • ${chapter.time}`;
        }

        updateNavigation(currentIndex);

    } catch (error) {
        console.error('Error loading chapter:', error);
        document.getElementById('chapter-content').innerHTML = `
            <div class="p-8 text-center">
                <h3 class="text-xl font-semibold text-red-600">Error loading chapter</h3>
                <p class="mt-2 text-gray-600">${error.message}</p>
            </div>
        `;
    }
}

function updateNavigation(currentIndex) {
    const prevBtn = document.querySelector('button:contains("← Previous")');
    const nextBtn = document.querySelector('footer button:contains("Next Chapter →")');
    const headerNextBtn = document.querySelector('header button:contains("Next Chapter →")');

    if (prevBtn) {
        if (currentIndex > 0) {
            prevBtn.disabled = false;
            prevBtn.onclick = () => loadChapter(CONFIG.chapters[currentIndex - 1].id);
        } else {
            prevBtn.disabled = true;
        }
    }

    if (nextBtn && headerNextBtn) {
        if (currentIndex < CONFIG.chapters.length - 1) {
            nextBtn.disabled = false;
            headerNextBtn.disabled = false;
            const nextChapter = CONFIG.chapters[currentIndex + 1];
            nextBtn.onclick = () => loadChapter(nextChapter.id);
            headerNextBtn.onclick = () => loadChapter(nextChapter.id);
        } else {
            nextBtn.disabled = true;
            headerNextBtn.disabled = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const firstChapter = CONFIG.chapters[0];
    if (firstChapter) {
        await loadChapter(firstChapter.id);
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', async (e) => {
            e.preventDefault();
            const span = item.querySelector('span');
            if (span) {
                const chapter = CONFIG.chapters.find(c => c.title === span.textContent);
                if (chapter) {
                    await loadChapter(chapter.id);
                }
            }
        });
    });
});