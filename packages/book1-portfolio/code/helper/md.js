// packages/book1-portfolio/reader/scripts/markdown-converter.js

/**
 * HTML to Markdown converter – FIXED: handles code, links, inline code correctly
 */
export function htmlToMarkdown(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const body = doc.body;

    function processNode(node) {
        let markdown = '';

        for (let child of node.childNodes) {
            if (child.nodeType === Node.TEXT_NODE) {
                let text = child.textContent;
                if (text.trim()) {
                    markdown += text;
                }
                continue;
            }

            if (child.nodeType === Node.ELEMENT_NODE) {
                const tag = child.tagName.toLowerCase();

                // SKIP recursion for pre and code inside pre - they need raw textContent
                const skipRecursion = tag === 'pre' || (tag === 'code' && child.parentNode.tagName === 'PRE');
                let inner = '';
                if (!skipRecursion) {
                    inner = processNode(child);
                }

                switch (tag) {
                    // Headers
                    case 'h1': markdown += `\n# ${inner.trim()}\n\n`; break;
                    case 'h2': markdown += `\n## ${inner.trim()}\n\n`; break;
                    case 'h3': markdown += `\n### ${inner.trim()}\n\n`; break;
                    case 'h4': markdown += `\n#### ${inner.trim()}\n\n`; break;
                    case 'h5': markdown += `\n##### ${inner.trim()}\n\n`; break;
                    case 'h6': markdown += `\n###### ${inner.trim()}\n\n`; break;

                    // Paragraph – split, trim lines, join with newline
                    case 'p':
                        let pLines = inner.split('\n').map(l => l.trim()).join('\n');
                        if (pLines) {
                            markdown += `${pLines}\n\n`;
                        }
                        break;

                    // Bold
                    case 'strong':
                    case 'b':
                        markdown += `**${inner.trim()}**`;
                        break;

                    // Italic
                    case 'em':
                    case 'i':
                        markdown += `*${inner.trim()}*`;
                        break;

                    // INLINE CODE - use raw textContent, NOT inner
                    case 'code':
                        if (child.parentNode.tagName !== 'PRE') {
                            const codeText = child.textContent; // preserves < and >
                            markdown += `\`${codeText}\``;
                        }
                        break;

                    // CODE BLOCK - use raw textContent, skip recursion
                    case 'pre':
                        let code = child.textContent;
                        code = code.replace(/^\n+/, '').replace(/\n+$/, '');
                        markdown += `\`\`\`\n${code}\n\`\`\`\n\n`;
                        break;

                    // Blockquote – split, trim, add '> '
                    case 'blockquote':
                        let bqLines = inner.trim().split('\n').map(l => `> ${l.trim()}`).join('\n');
                        markdown += `${bqLines}\n\n`;
                        break;

                    // Unordered list
                    case 'ul':
                        child.querySelectorAll(':scope > li').forEach(li => {
                            let liContent = processNode(li).trim();
                            let liLines = liContent.split('\n').map(l => l.trim()).join('\n  ');
                            markdown += `- ${liLines}\n`;
                        });
                        markdown += '\n';
                        break;

                    // Ordered list
                    case 'ol':
                        child.querySelectorAll(':scope > li').forEach((li, i) => {
                            let liContent = processNode(li).trim();
                            let liLines = liContent.split('\n').map(l => l.trim()).join('\n  ');
                            markdown += `${i + 1}. ${liLines}\n`;
                        });
                        markdown += '\n';
                        break;

                    // List item
                    case 'li':
                        markdown += inner;
                        break;

                    // Link
                    case 'a':
                        const href = child.getAttribute('href') || '';
                        markdown += `[${inner.trim()}](${href})`;
                        break;

                    // Image
                    case 'img':
                        const src = child.getAttribute('src') || '';
                        const alt = child.getAttribute('alt') || '';
                        markdown += `![${alt}](${src})`;
                        break;

                    // Horizontal rule
                    case 'hr':
                        markdown += `---\n\n`;
                        break;

                    // Line break – markdown soft break
                    case 'br':
                        markdown += '  \n';
                        break;

                    // Default – pass through
                    default:
                        markdown += inner;
                        break;
                }
            }
        }
        return markdown;
    }

    const markdown = processNode(body);

    // Final cleanup
    return markdown
        .replace(/\n{3,}/g, '\n\n')
        .replace(/[ \t]+\n/g, '\n')
        .trim();
}

/**
 * Save HTML as Markdown file
 */
export function saveHtmlAsMarkdown(htmlContent, filename = 'output.md') {
    const markdown = htmlToMarkdown(htmlContent);

    // Copy to clipboard
    navigator.clipboard.writeText(markdown);

    // Uncomment to also download file
    // const blob = new Blob([markdown], { type: 'text/markdown' });
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.download = filename.endsWith('.md') ? filename : `${filename}.md`;
    // a.href = url;
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
    // URL.revokeObjectURL(url);

    return markdown;
}