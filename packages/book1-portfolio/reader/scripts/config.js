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
            codePath: "../code/01-project-setup/",
            time: "15 min",
            subtitle: "Introduction to HTML"
        },
        {
            id: "html-header",
            title: "Building HTML Header",
            order: 2,
            path: "../chapters/02-html-header.md",
            codePath: "../code/02-html-header/",
            time: "20 min",
            subtitle: "Create the header section of your portfolio"
        },
        {
            id: "hero-section",
            title: "Creating a Hero Section",
            order: 3,
            path: "../chapters/03-hero-section.md",
            codePath: "../code/03-hero-section/",
            time: "25 min",
            subtitle: "Create the hero section of your portfolio"
        }
    ]
};