import { CONFIG } from './config.js';
import { initializeTOC } from './toc.js';
import { loadChapter } from './chapter-loader.js';
import { setupNavigationEvents } from './navigation.js';

function setupCodeExamples() {
    const codeLink = document.getElementById('code-examples-link');
    if (codeLink) {
        codeLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Code examples feature coming soon!');
        });
    }
}

function updateProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = `${CONFIG.book.progress}%`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing reader...');


    initializeTOC(CONFIG.chapters);
    setupCodeExamples();
    updateProgressBar();
    setupNavigationEvents(CONFIG.chapters, loadChapter);




    if (CONFIG.chapters.length > 0) {
        loadChapter(CONFIG.chapters[0].id, CONFIG.chapters);
    }
});

