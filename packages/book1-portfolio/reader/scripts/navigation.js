// packages/book1-portfolio/reader/scripts/navigation.js
export function updateNavigation(chapter, chapters, loadChapterFunc) {
    const currentIndex = chapters.findIndex(c => c.id === chapter.id);

    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
        if (currentIndex > 0) {
            prevBtn.disabled = false;
            prevBtn.onclick = () => loadChapterFunc(chapters[currentIndex - 1].id, chapters);
        } else {
            prevBtn.disabled = true;
            prevBtn.onclick = null;
        }
    }

    const nextBtn = document.getElementById('next-btn');
    const headerNextBtn = document.getElementById('header-next-btn');

    if (nextBtn && currentIndex < chapters.length - 1) {
        nextBtn.disabled = false;
        nextBtn.onclick = () => loadChapterFunc(chapters[currentIndex + 1].id, chapters);
    } else if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.onclick = null;
    }

    if (headerNextBtn && currentIndex < chapters.length - 1) {
        headerNextBtn.disabled = false;
        headerNextBtn.onclick = () => loadChapterFunc(chapters[currentIndex + 1].id, chapters);
    } else if (headerNextBtn) {
        headerNextBtn.disabled = true;
        headerNextBtn.onclick = null;
    }
}

export function setupNavigationEvents(chapters, loadChapterFunc) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const span = item.querySelector('span');
            if (span) {
                const chapter = chapters.find(c => c.title === span.textContent);
                if (chapter) {
                    loadChapterFunc(chapter.id, chapters);
                }
            }
        });
    });
}