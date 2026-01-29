import { CONFIG } from './config.js';
import { initializeTOC } from './toc.js';
import { loadChapter } from './chapter-loader.js';
import { setupNavigationEvents } from './navigation.js';

import {renderProjectPage} from './project-viewer.js';

function setupCodeExamples() {
    const codeLink = document.getElementById('code-examples-link');
    if (!codeLink) return;

    codeLink.addEventListener('click', (e) => {
        e.preventDefault();
        //
        const chapterView = document.getElementById('chapter-viewer');
        const projectView = document.getElementById('project-code');

        if (chapterView) chapterView.classList.add('hidden');
        if (projectView) projectView.classList.remove('hidden');
        projectView.classList.add('visible');

        // 👇 YOU decide the paths. No guessing.
        renderProjectPage({
            htmlPath: '../code/03.00-architectural-plan-semantic/hero.html',
            cssPath: '../code/03.00-architectural-plan-semantic/hero.css'
        });
    });
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

