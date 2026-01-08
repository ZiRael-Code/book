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
            path: `/chapters/00-read-me-first.md`,
            codePath: "../code/00-read-me-first/",
            time: "10 min",
            subtitle: "Welcome to your learning journey. Let's start by understanding how this book works."
        },
        {
            id: "project-setup",
            title: "Project Setup & Tools",
            order: 1,
            path: "/chapters/01-project-setup.md",
            codePath: "../code/01-project-setup/",
            time: "15 min",
            subtitle: "Set up your development environment and tools"
        },
        {
            id: "html-header",
            title: "Building HTML Header",
            order: 2,
            path: "/chapters/02-html-header.md",
            codePath: "../code/02-html-header/",
            time: "20 min",
            subtitle: "Create the header section of your portfolio"
        },
        {
            id: "hero-section",
            title: "Creating a Hero Section",
            order: 3,
            path: "/chapters/03-hero-section.md",
            codePath: "../code/03-hero-section/",
            time: "25 min",
            subtitle: "Create the hero section of your portfolio"
        },
        {
            id: "the-first-coat-of-paint",
            title: "The First Coat Of Paint",
            order: 4,
            path: "/chapters/04-The-First-Coat-of-Paint-Intro-to-CSS.md",
            codePath: "../code/03-hero-section/",
            time: "25 min",
            subtitle: "Introduction to CSS"
        },
        {
            id: "The-laws-of-Space",
            title: "The Laws of Space: The CSS Box Model",
            order: 5,
            path: "/chapters/05-The-CSS-Box-Model.md",
            codePath: "../code/03-hero-section/",
            time: "25 min",
            subtitle: "The CSS Box Model"
        },
        {
            id: "color-contrast-and-tokens",
            title: "Color, Contrast and Tokens",
            order: 6,
            path: "/chapters/06-color-contrast-and-tokens.md",
            codePath: "../code/03-hero-section/",
            time: "25 min",
            subtitle: "Choosing colors"
        },
        {
            id: "typography",
            title: "Typography",
            order: 7,
            path: "/chapters/07-typography.md",
            codePath: "../code/03-hero-section/",
            time: "25 min",
            subtitle: "Choosing fonts"
        },
        {
            id: "positioning-and-flex",
            title: "Positioning and Flex",
            order: 8,
            path: "/chapters/08-positioning-and-flex.md",
            codePath: "../code/03-hero-section/",
            time: "25 min",
            subtitle: "Flex Layout"
        },
        {
            id: "deep-dive-flex",
            title: "Deep Dive into Flexbox",
            order: 9,
            path: "/chapters/09-deep-dive-flexbox.md",
            codePath: "../code/03-hero-section/",
            time: "25 min",
            subtitle: "Learn to style using flexbox"
        },
    ]
};