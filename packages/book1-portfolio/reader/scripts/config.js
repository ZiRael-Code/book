// packages/book1-portfolio/reader/scripts/config.js
export const CONFIG = {
    book: {
        title: "HTML/CSS Book",
        subtitle: "Beginner's Journey",
        progress: 33
    },
    chapters: [
        {
            id: "readme",
            title: "Read Me First",
            order: 0,
            path: "../chapters/00.00-readme.md",
            codePath: "../code/00.00-readme/",
            time: "10 min",
            subtitle: "Welcome to your learning journey. Let's start by understanding how this book works."
        },

        {
            id: "the-first-words",
            title: "The First Words",
            order: 1,
            path: "../chapters/html/01.00-the-first-words.md",
            codePath: "../code/html/01.00-the-first-words/",
            time: "15 min",
            subtitle: "Getting started with HTML"
        },
        {
            id: "attributes",
            title: "Attributes",
            order: 2,
            path: "../chapters/html/02.00-attributes.md",
            codePath: "../code/html/02.00-attributes/",
            time: "15 min",
            subtitle: "Understanding HTML attributes"
        },
        {
            id: "block-vs-inline",
            title: "Block vs Inline",
            order: 3,
            path: "../chapters/html/03.00-block-vs-inline.md",
            codePath: "../code/html/03.00-block-vs-inline/",
            time: "15 min",
            subtitle: "Understanding element display types"
        },
        {
            id: "flow-and-content",
            title: "Flow & Content",
            order: 4,
            path: "../chapters/html/04-flow-&-content.md",
            codePath: "../code/html/04-flow-&-content/",
            time: "20 min",
            subtitle: "Document flow and content organization"
        },
        {
            id: "lists-and-grouped-content",
            title: "Lists & Grouped Content",
            order: 5,
            path: "../chapters/html/05-lists-&-grouped-content.md",
            codePath: "../code/html/05-lists-&-grouped-content/",
            time: "20 min",
            subtitle: "Organizing content with lists"
        },
        {
            id: "images-done-right",
            title: "Images Done Right",
            order: 6,
            path: "../chapters/html/06-images-done-right.md",
            codePath: "../code/html/06-images-done-right/",
            time: "20 min",
            subtitle: "Proper image implementation"
        },
        {
            id: "text-meaning",
            title: "Text Meaning",
            order: 7,
            path: "../chapters/html/07-text-meaning.md",
            codePath: "../code/html/07-text-meaning/",
            time: "15 min",
            subtitle: "Semantic text elements"
        },
        {
            id: "why-semantics-exist",
            title: "Why Semantics Exist",
            order: 8,
            path: "../chapters/html/08-why-semantics-exist.md",
            codePath: "../code/html/08-why-semantics-exist/",
            time: "20 min",
            subtitle: "The importance of semantic HTML"
        },
        {
            id: "the-architectural-plan",
            title: "The Architectural Plan",
            order: 9,
            path: "../chapters/html/09-the-architectural-plan.md",
            codePath: "../code/html/09-the-architectural-plan/",
            time: "25 min",
            subtitle: "Structuring your HTML documents"
        },
        {
            id: "html-form",
            title: "HTML Form",
            order: 10,
            path: "../chapters/html/10-html-form.md",
            codePath: "../code/html/10-html-form/",
            time: "25 min",
            subtitle: "Building forms"
        },
        {
            id: "html-tables",
            title: "HTML Tables",
            order: 11,
            path: "../chapters/html/11-html-tables.md",
            codePath: "../code/html/11-html-tables/",
            time: "20 min",
            subtitle: "Creating and styling tables"
        },

        // CSS Chapters
        {
            id: "introduction-to-css",
            title: "Introduction to CSS",
            order: 12,
            path: "../chapters/css/12-introduction-to-css.md",
            codePath: "../code/css/12-introduction-to-css/",
            time: "25 min",
            subtitle: "Getting started with CSS"
        },
        {
            id: "css-box-model",
            title: "CSS Box Model",
            order: 13,
            path: "../chapters/css/13-css-box-model.md",
            codePath: "../code/css/13-css-box-model/",
            time: "25 min",
            subtitle: "Understanding the CSS box model"
        },
        {
            id: "color-contrast-and-token",
            title: "Color, Contrast and Tokens",
            order: 14,
            path: "../chapters/css/14-color-contrast-and-token.md",
            codePath: "../code/css/14-color-contrast-and-token/",
            time: "25 min",
            subtitle: "Working with colors and design tokens"
        },
        {
            id: "typography",
            title: "Typography",
            order: 15,
            path: "../chapters/css/15-typography.md",
            codePath: "../code/css/15-typography/",
            time: "25 min",
            subtitle: "Mastering web typography"
        },
        {
            id: "positioning",
            title: "Positioning",
            order: 16,
            path: "../chapters/css/16-positioning.md",
            codePath: "../code/css/16-positioning/",
            time: "25 min",
            subtitle: "CSS positioning techniques"
        },
        {
            id: "flexbox-fundamentals",
            title: "Flexbox Fundamentals",
            order: 17,
            path: "../chapters/css/17-flexbox-fundamentals.md",
            codePath: "../code/css/17-flexbox-fundamentals/",
            time: "25 min",
            subtitle: "Introduction to Flexbox"
        },
        {
            id: "flexbox-deep-dive",
            title: "Flexbox Deep Dive",
            order: 18,
            path: "../chapters/css/18-flexbox-deep-dive.md",
            codePath: "../code/css/18-flexbox-deep-dive/",
            time: "25 min",
            subtitle: "Advanced Flexbox concepts"
        },
        {
            id: "introduction-to-css-grid",
            title: "Introduction to CSS Grid",
            order: 19,
            path: "../chapters/css/19-introduction-to-css-grid.md",
            codePath: "../code/css/19-introduction-to-css-grid/",
            time: "25 min",
            subtitle: "Getting started with CSS Grid"
        },
        {
            id: "responsive-design",
            title: "Responsive Design",
            order: 20,
            path: "../chapters/css/20-responsive-design.md",
            codePath: "../code/css/20-responsive-design/",
            time: "25 min",
            subtitle: "Creating responsive layouts"
        },

        // Tailwind Chapters
        {
            id: "micro-interaction-polish",
            title: "Micro Interaction Polish",
            order: 21,
            path: "../chapters/tailwind/21-micro-interaction-polish.md",
            codePath: "../code/tailwind/21-micro-interaction-polish/",
            time: "25 min",
            subtitle: "Adding polish with micro-interactions"
        },
        {
            id: "clean-css-architecture",
            title: "Clean CSS Architecture",
            order: 22,
            path: "../chapters/tailwind/22-clean-css-architechture.md",
            codePath: "../code/tailwind/22-clean-css-architechture/",
            time: "25 min",
            subtitle: "Organizing your CSS"
        },
        {
            id: "utility-first-css",
            title: "Utility First CSS",
            order: 23,
            path: "../chapters/tailwind/23-utility-first-css.md",
            codePath: "../code/tailwind/23-utility-first-css/",
            time: "25 min",
            subtitle: "Understanding utility-first approach"
        },
        {
            id: "tailwind-responsiveness",
            title: "Responsiveness with Tailwind",
            order: 24,
            path: "../chapters/tailwind/24-responsiveness.md",
            codePath: "../code/tailwind/24-responsiveness/",
            time: "25 min",
            subtitle: "Building responsive designs with Tailwind"
        },
        {
            id: "tailwind-building-page-2",
            title: "Building the Page (Part 3)",
            order: 25,
            path: "../chapters/tailwind/25-building-the-page-part-2.md",
            codePath: "../code/tailwind/25-building-the-page-part-2/",
            time: "25 min",
            subtitle: "Building responsive designs with Tailwind"
        },
        {
            id: "tailwind-building-page3",
            title: "Building the Page (Part 3)",
            order: 26,
            path: "25-building-the-page-part-3.md",
            codePath: "../code/tailwind/24-responsiveness/",
            time: "25 min",
            subtitle: "Building responsive designs with Tailwind"
        },
        {
            id: "tailwind-accessibility-seo",
            title: "RAccessibility, SEO & Ship",
            order: 27,
            path: "../chapters/tailwind/24-accessibility-seo-ship.md",
            codePath: "../code/tailwind/24-responsiveness/",
            time: "25 min",
            subtitle: "Building responsive designs with Tailwind"
        }
    ]
};