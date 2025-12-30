// packages/book1-portfolio/reader/scripts/markdown.js
export function markdownToHTML(markdown) {
    if (window.marked) {
        let html = window.marked.parse(markdown);

        html = html
            .replace(/<h1>/g, '<h1 class="text-3xl font-bold mt-8 mb-4 text-slate-900">')
            .replace(/<h2>/g, '<h2 class="text-2xl font-semibold mt-6 mb-3 text-slate-800">')
            .replace(/<h3>/g, '<h3 class="text-xl font-semibold mt-4 mb-2 text-slate-700">')
            .replace(/<p>/g, '<p class="mt-4 mb-4 text-slate-700 leading-relaxed">')
            .replace(/<strong>/g, '<strong class="font-semibold text-slate-900">')
            .replace(/<em>/g, '<em class="italic text-slate-700">')
            .replace(/<code>/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800">')
            .replace(/<pre>/g, '<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono mt-4 mb-4">')
            .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">')
            .replace(/<ul>/g, '<ul class="list-disc pl-6 my-4">')
            .replace(/<ol>/g, '<ol class="list-decimal pl-6 my-4">')
            .replace(/<li>/g, '<li class="my-1 text-slate-700">');

        return html;
    }

    let result = markdown
        .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4 text-slate-900">$1</h1>')
        .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mt-6 mb-3 text-slate-800">$1</h2>')
        .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-4 mb-2 text-slate-700">$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic text-slate-700">$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-800">$1</code>')
        .replace(/^> (.*$)/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">$1</blockquote>')
        .replace(/^\s*-\s+(.*$)/gm, '<li class="my-1 text-slate-700">$1</li>')
        .replace(/^\s*\d+\.\s+(.*$)/gm, '<li class="my-1 text-slate-700">$1</li>');


    const paragraphs = result.split(/\n\s*\n/);
    result = paragraphs.map(p => {
        p = p.trim();
        if (!p) return '';
        if (!p.startsWith('<')) {
            return `<p class="mt-4 mb-4 text-slate-700 leading-relaxed">${p}</p>`;
        }
        return p;
    }).join('\n');

    return result;
}