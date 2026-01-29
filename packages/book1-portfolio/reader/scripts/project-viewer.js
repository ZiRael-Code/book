export async function renderProjectPage({ htmlPath, cssPath }) {
    const projectView = document.getElementById('project-code');

    try {
        const html = await fetch(htmlPath).then(r => r.text());
        const css = cssPath ? await fetch(cssPath).then(r => r.text()) : '';

        const baseDir = htmlPath.substring(0, htmlPath.lastIndexOf('/') + 1);

        const processedHtml = await processHtmlAssets(html, baseDir);

        const bodyMatch = processedHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        const body = bodyMatch ? bodyMatch[1] : processedHtml;

        const doc = `
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>${css}</style>
</head>
<body>
${body}
</body>
</html>
        `;

        projectView.innerHTML = `
            <iframe
                class="w-full h-[100vh] border border-slate-200 rounded-lg bg-white"
                srcdoc="${escapeHTML(doc)}"
                sandbox="allow-scripts"
            ></iframe>
        `;
    } catch (err) {
        projectView.innerHTML = `
            <div class="p-6 border border-red-300 rounded bg-white">
                <p class="text-red-600 font-semibold">Failed to load project</p>
                <pre class="text-sm mt-2">${err.message}</pre>
            </div>
        `;
    }
}

async function processHtmlAssets(html, baseDir) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const images = doc.querySelectorAll('img');
    for (const img of images) {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('data:') && !src.startsWith('http')) {
            try {
                const fullPath = src.startsWith('/') ? src : `${baseDir}${src}`;
                const blob = await fetch(fullPath).then(r => r.blob());
                const dataUrl = await blobToDataURL(blob);
                img.src = dataUrl;
            } catch (e) {
                console.warn(`Failed to load image: ${src}`, e);
            }
        }
    }

    const links = doc.querySelectorAll('link[rel*="icon"], link[rel*="apple-touch-icon"]');
    for (const link of links) {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('data:') && !href.startsWith('http')) {
            try {
                const fullPath = href.startsWith('/') ? href : `${baseDir}${href}`;
                const blob = await fetch(fullPath).then(r => r.blob());
                const dataUrl = await blobToDataURL(blob);
                link.href = dataUrl;
            } catch (e) {
                console.warn(`Failed to load icon: ${href}`, e);
            }
        }
    }

    const elementsWithBg = doc.querySelectorAll('[style*="background-image"]');
    for (const el of elementsWithBg) {
        const style = el.getAttribute('style');
        const bgMatch = style.match(/background-image:\s*url\(['"]?([^'")]+)['"]?\)/i);
        if (bgMatch) {
            const bgUrl = bgMatch[1];
            if (!bgUrl.startsWith('data:') && !bgUrl.startsWith('http')) {
                try {
                    const fullPath = bgUrl.startsWith('/') ? bgUrl : `${baseDir}${bgUrl}`;
                    const blob = await fetch(fullPath).then(r => r.blob());
                    const dataUrl = await blobToDataURL(blob);
                    el.style.backgroundImage = `url("${dataUrl}")`;
                } catch (e) {
                    console.warn(`Failed to load background image: ${bgUrl}`, e);
                }
            }
        }
    }

    return doc.documentElement.innerHTML;
}

function blobToDataURL(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

function escapeHTML(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}