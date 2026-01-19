// packages/book1-portfolio/reader/scripts/config.js
export const CONFIG = {
    book: {
        title: "HTML/CSS Book",
        subtitle: "Beginner's Journey",
        progress: 33
    },
    chapters: [
        {
            id: "read-me-first",
            title: "Read Me First",
            order: 0,
            path: "../chapters/00-read-me-first.md",
            codePath: "../code/00-read-me-first/",
            time: "10 min",
            subtitle: "Welcome to your learning journey. Let's start by understanding how this book works."
        },
        {
            id: "introduction-to-html",
            title: "Introduction to HTML",
            order: 1,
            path: "../chapters/01-introduction-to-html.md",
            codePath: "../code/01-introduction-to-html/",
            time: "15 min",
            subtitle: "Introduction to HTML"
        },
        {
            id: "link-vs-button",
            title: "Link VS Button",
            order: 2,
            path: "../chapters/02-link-vs-button.md",
            codePath: "../code/02-link-vs-button/",
            time: "20 min",
            subtitle: "Links vs Buttons (tiny but critical)"
        },
        {
            id: "structuring-content",
            title: "tructuring Content",
            order: 3,
            path: "../chapters/03-structuring-content.md",
            codePath: "../code/03-structuring-content/",
            time: "25 min",
            subtitle: "Structuring your content"
        },
        {
            id: "architectural-plan",
            title: "Semantic HTML",
            order: 4,
            path: "../chapters/04-architectural-plan-semantic.md",
            codePath: "../code/04-architectural-plan-semantic/",
            time: "35 min",
            subtitle: "Semantic HTML"
        }
    ]
};