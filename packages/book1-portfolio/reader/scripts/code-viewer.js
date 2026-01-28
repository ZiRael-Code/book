// packages/book1-portfolio/reader/scripts/code-viewer.js

import {escapeHtml, escapeAttr, decodeHtml} from './utils.js';

export function updateCodeLink(chapter) {
    const codeLink = document.getElementById('view-code-btn');
    if (codeLink && chapter.codePath) {
        codeLink.href = '#';
        codeLink.onclick = (e) => {
            e.preventDefault();
            showCodeForChapter(chapter);
        };
        codeLink.style.display = 'inline-flex';
    } else if (codeLink) {
        codeLink.style.display = 'none';
    }
}

export async function showCodeForChapter(chapter) {
    try {
        window.currentChapter = chapter;

        let htmlCode = '';
        let cssCode = '';
        let jsCode = '';

        let htmlFile = '';
        let cssFile = '';
        let jsFile = '';

        const htmlFiles = ['introduction.html', 'hero.html', 'index.html', 'main.html', 'intro-to-tailwind.html'];
        for (const file of htmlFiles) {
            const filePath = `${chapter.codePath}/${file}`;
            try {
                const response = await fetch(filePath);
                if (response.ok) {
                    htmlCode = await response.text();
                    htmlFile = file;
                    break;
                }
            } catch (error) {
            }
        }

        let cssFiles = ['header.css', 'hero.css', 'style.css', 'styles.css', 'main.css', 'input.js'];
        for (const file of cssFiles) {
            const filePath = `${chapter.codePath}/${file}`;
            try {
                const response = await fetch(filePath);
                if (response.ok) {
                    cssCode = await response.text();
                    cssFile = file;
                    break;
                } else {
                    cssFiles = null;
                }
            } catch (error) {
            }
        }

        let jsFiles = ['script.js', 'main.js', 'app.js', 'index.js', 'chapter.js', 'tailwind.config.js'];
        for (const file of jsFiles) {
            const filePath = `${chapter.codePath}/${file}`;
            try {
                const response = await fetch(filePath);
                if (response.ok) {
                    jsCode = await response.text();
                    jsFile = file;
                    break;
                } else {
                    jsFiles = null;
                }
            } catch (error) {
            }
        }

        let plus = `+ ${cssFile}`;
        let plusJs = `+ ${jsFile}`;

        if (htmlCode) {
            showCodeModal(`${chapter.title} (${htmlFile} ${cssFiles !== null ? plus : ""} ${jsFiles !== null ? plusJs : ""})`, htmlCode, cssCode, jsCode, chapter.codePath);
        } else {
            showCodeDirectory(chapter);
        }

    } catch (error) {
        console.error('Error loading code:', error);
        alert(`Cannot load code for "${chapter.title}". Error: ${error.message}`);
    }
}

function showCodeModal(title, htmlCode, cssCode, jsCode, codePath) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';

    const bodyMatch = htmlCode.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : htmlCode;

    const currentUrl = new URL(window.location.href);
    const currentPath = currentUrl.pathname;

    const basePathMatch = currentPath.match(/(.*book1-portfolio)/);
    const basePath = basePathMatch ? basePathMatch[1] : '';

    console.log('Current URL:', currentUrl.href);
    console.log('Current path:', currentPath);
    console.log('Base path:', basePath);

    const fullBasePath = basePath ? `${currentUrl.origin}${basePath}` : currentUrl.origin;

    console.log('Full base path for assets:', fullBasePath);

    bodyContent = bodyContent.replace(/(src|href)=["']([^"']*)["']/gi, (match, attr, path) => {
        if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('#') || path.startsWith('mailto:')) {
            return match;
        }

        let newPath = path;

        if (path.startsWith('../../assets/')) {
            newPath = `${fullBasePath}/assets/${path.substring(13)}`;
        } else if (path.startsWith('../../')) {
            newPath = `${fullBasePath}/${path.substring(6)}`;
        }

        console.log(`Path conversion: ${path} -> ${newPath}`);
        return `${attr}="${newPath}"`;
    });

    const previewHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="${fullBasePath}/">
    <style>
        ${cssCode || ''}
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: #f8fafc; 
            min-height: 100vh;
            padding: 20px;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    ${bodyContent}
    
    <script> 
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                console.log('Image loaded:', img.src, 'complete:', img.complete, 
                           'naturalWidth:', img.naturalWidth, 'naturalHeight:', img.naturalHeight);
                
                if (img.naturalWidth === 0) {
                    console.warn('Image might have loading issues:', img.src);
                    
                    img.onerror = function() {
                        const originalSrc = this.src;
                        console.log('Image failed to load, trying again:', originalSrc);
                        this.src = originalSrc + '?retry=' + Date.now();
                    };
                }
            });
        });
        
        ${jsCode || ''}
    </script>
</body>
</html>`;

    const encodedPreview = previewHtml.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    modal.innerHTML = `
<div class="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
    <div class="flex justify-between items-center border-b border-slate-200 px-6 py-4">
        <div>
            <h3 class="text-lg font-semibold text-slate-900">${title} - Code & Preview</h3>
            <p class="text-sm text-slate-600 mt-1">View the code and see it in action</p>
        </div>
        <button class="text-slate-500 hover:text-slate-700 p-1" onclick="this.closest('.fixed').remove()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
    </div>

    <div class="border-b border-slate-200 px-6">
        <div class="flex space-x-1">
            <button class="tab-button active px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600" data-tab="preview">
                👁️ Live Preview
            </button>
            <button class="tab-button px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900" data-tab="html">
                📄 HTML Code
            </button>
            <button class="tab-button px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900" data-tab="css">
                🎨 CSS Code
            </button>
            <button class="tab-button px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900" data-tab="js">
                🧠 JS Code
            </button>
        </div>
    </div>

    <div class="flex-1 overflow-hidden flex">
        <div class="tab-content flex-1 p-6 overflow-auto bg-gray-50" data-tab="preview">
            <div class="bg-white rounded-lg shadow-sm border border-slate-200 p-6 h-full">
                <div class="mb-4">
                    <h4 class="font-semibold text-slate-900">Live Preview</h4>
                    <p class="text-sm text-slate-600">This is how the code renders in a browser:</p>
                </div>
                <div class="border border-slate-300 rounded-lg overflow-hidden bg-white" style="height: 700px;">
                    <iframe 
                        srcdoc="${encodedPreview}"
                        class="w-full h-full border-0"
                        sandbox="allow-scripts allow-same-origin"
                        title="Code Preview"
                    ></iframe>
                </div>
            </div>
        </div>

        <div class="tab-content hidden flex-1 p-0 overflow-hidden" data-tab="html">
            <div class="h-full flex flex-col">
                <div class="px-6 py-4 border-b border-slate-200">
                    <h4 class="font-semibold text-slate-900">HTML Code</h4>
                    <p class="text-sm text-slate-600">The structure of the component</p>
                </div>
                <div class="flex-1 overflow-auto p-6">
                    <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono h-full"><code class="language-html">${escapeHtml(htmlCode)}</code></pre>
                </div>
                <div class="px-6 py-4 border-t border-slate-200">
                    <button class="copy-code-btn px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm" data-code="${escapeAttr(htmlCode)}">
                        📋 Copy HTML Code
                    </button>
                </div>
            </div>
        </div>

        <div class="tab-content hidden flex-1 p-0 overflow-hidden" data-tab="css">
            <div class="h-full flex flex-col">
                <div class="px-6 py-4 border-b border-slate-200">
                    <h4 class="font-semibold text-slate-900">CSS Code</h4>
                    <p class="text-sm text-slate-600">Styles for the component</p>
                </div>
                <div class="flex-1 overflow-auto p-6">
                    <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono h-full"><code class="language-css">${escapeHtml(cssCode || '/* No CSS file found for this chapter */')}</code></pre>
                </div>
                <div class="px-6 py-4 border-t border-slate-200">
                    <button class="copy-code-btn px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm" data-code="${escapeAttr(cssCode || '')}">
                        📋 Copy CSS Code
                    </button>
                </div>
            </div>
        </div>

        <div class="tab-content hidden flex-1 p-0 overflow-hidden" data-tab="js">
            <div class="h-full flex flex-col">
                <div class="px-6 py-4 border-b border-slate-200">
                    <h4 class="font-semibold text-slate-900">JS Code</h4>
                    <p class="text-sm text-slate-600">Behavior for the component</p>
                </div>
                <div class="flex-1 overflow-auto p-6">
                    <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono h-full"><code class="language-js">${escapeHtml(jsCode || '/* No JS file found for this chapter */')}</code></pre>
                </div>
                <div class="px-6 py-4 border-t border-slate-200">
                    <button class="copy-code-btn px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm" data-code="${escapeAttr(jsCode || '')}">
                        📋 Copy JS Code
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>`;

    document.body.appendChild(modal);

    modal.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function () {
            modal.querySelectorAll('.tab-button').forEach(btn => {
                btn.classList.remove('active', 'text-blue-600', 'border-b-2', 'border-blue-600');
                btn.classList.add('text-slate-600');
            });
            this.classList.add('active', 'text-blue-600', 'border-b-2', 'border-blue-600');
            this.classList.remove('text-slate-600');

            modal.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
            });
            const tab = this.dataset.tab;
            const tabContent = modal.querySelector(`.tab-content[data-tab="${tab}"]`);
            if (tabContent) {
                tabContent.classList.remove('hidden');
            }
        });
    });

    modal.querySelectorAll('.copy-code-btn').forEach(button => {
        button.addEventListener('click', function () {
            const code = this.dataset.code;
            navigator.clipboard.writeText(decodeHtml(code)).then(() => {
                const originalText = this.textContent;
                this.textContent = '✅ Copied!';
                this.classList.add('bg-green-600', 'hover:bg-green-700');
                this.classList.remove('bg-blue-600', 'hover:bg-blue-700');
                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('bg-green-600', 'hover:bg-green-700');
                    this.classList.add('bg-blue-600', 'hover:bg-blue-700');
                }, 2000);
            });
        });
    });

    setTimeout(() => {
        const iframe = modal.querySelector('iframe');
        if (iframe) {
            iframe.onload = function () {
                console.log('Iframe loaded - check Network tab for image requests');
                console.log('Base path used:', fullBasePath);
            };
        }
    }, 100);
}


function showCodeDirectory(chapter) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div class="flex justify-between items-center border-b border-slate-200 px-6 py-4">
                <h3 class="text-lg font-semibold text-slate-900">${chapter.title} - Code Files</h3>
                <button class="text-slate-500 hover:text-slate-700" onclick="this.closest('.fixed').remove()">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="p-6">
                <p class="text-slate-600 mb-4">No code files found in: ${chapter.codePath}</p>
                <div class="bg-gray-50 p-4 rounded-lg">
                    <p class="text-sm text-slate-700 mb-2">Expected files at:</p>
                    <code class="text-sm bg-gray-100 px-2 py-1 rounded">${chapter.codePath}/</code>
                </div>
            </div>
        </div>
`;
    document.body.appendChild(modal);
}