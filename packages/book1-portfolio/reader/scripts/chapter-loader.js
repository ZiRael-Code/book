import { markdownToHTML } from './markdown.js';
import { updateTOCActive } from './toc.js';
import { updateNavigation } from './navigation.js';
import { updateCodeLink } from './code-viewer.js';

export async function loadChapter(chapterId, chapters) {
    const chapter = chapters.find(c => c.id === chapterId);
    if (!chapter) {
        console.error('Chapter not found:', chapterId);
        return;
    }

    try {
        const response = await fetch(chapter.path);
        if (!response.ok) throw new Error(`Failed to load: ${response.status}`);

        const markdown = await response.text();

        document.getElementById('chapter-title').textContent = chapter.title;
        document.getElementById('chapter-subtitle').textContent = chapter.subtitle || '';

        const html = markdownToHTML(markdown);
        document.getElementById('chapter-content').innerHTML = `
            <div class="max-w-3xl mx-auto">
                ${html}
            </div>
        `;

        updateTOCActive(chapter, chapters);
        updateNavigation(chapter, chapters, loadChapter);
        updateCodeLink(chapter);

        const currentIndex = chapters.findIndex(c => c.id === chapterId);
        const totalChapters = chapters.length;
        document.getElementById('chapter-info').textContent =
            `Chapter ${currentIndex} of ${totalChapters - 1} • Estimated time: ${chapter.time}`;

    } catch (error) {
        console.error('Error loading chapter:', error);
        document.getElementById('chapter-content').innerHTML = `
            <div class="p-8 text-center">
                <h3 class="text-xl font-semibold text-red-600">Error loading chapter</h3>
                <p class="mt-2 text-gray-600">${error.message}</p>
                <p class="mt-4 text-sm">Check the console for details.</p>
            </div>
        `;
    }
}