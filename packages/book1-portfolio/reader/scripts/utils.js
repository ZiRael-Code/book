// packages/book1-portfolio/reader/scripts/utils.js
export function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

export function escapeAttr(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

export function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

export function getCurrentChapterIndex(chapterId, chapters) {
    return chapters.findIndex(c => c.id === chapterId);
}