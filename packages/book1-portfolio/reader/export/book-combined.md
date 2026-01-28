# HTML/CSS & Tailwind: A Beginner's Journey

**Beginner's Journey**

---

## Table of Contents

0. 0. Read Me First — How to Use This Book
1. Chapter 1 — The First Words: Introduction to HTML
2. Chapter 1.5 — Links vs Buttons (Tiny but Critical)
3. Chapter 2 — Building Blocks: Structuring Content
4. Chapter 3 — The Architectural Plan: Semantic HTML
5. ##Lesson goal
6. ##Lesson goal
7. ##Lesson goal
8. ##Lesson goal
9. ##Lesson goal
10. ##Lesson goal
11. ##Lesson goal
12. ##Lesson goal
13. ##Lesson goal
14. ##Lesson goal
15. ##Lesson goal
16. 
17. Chapter X — <Title>

---

# 0. Read Me First — How to Use This Book

## Personal Reasoning
You’ll learn by building.

This book is not meant to be read like a story. It is meant to be followed, applied with your editor open and ensure your browser running. Every chapter teaches one idea and applies it immediately to a real project.

By the end of the book, you will not just understand HTML, CSS, and Tailwind — you will have a complete, working portfolio site that you built step by step.

Each chapter moves the project forward. Nothing here is theoretical for long.

---

## Overall Learning
By the end of this chapter, you will understand:

- How the project is structured
- How to work through chapters in order
- What “Section Done” means at the end of each chapter
- How to use the keyboard to test accessibility
- How to verify your work before moving on

---

## Explanation
This book follows a simple rule: **build first, decorate later**.

You will start with plain HTML.  
Then you will add structure.  
Then styling.  
Then layout and responsiveness.

Every chapter assumes you have completed the previous one. Skipping chapters will leave gaps in your understanding and in your code.

At the end of each chapter, you will see a few consistent sections:

- **Section Done** — what should now exist or be visible
- **Keyboard Walkthrough** — how to test your page without a mouse
- **Contrast Check** — whether the page is readable
- **Ship Note** — what to verify and commit

These sections exist to help you slow down and confirm your progress.

---

## Code Walkthrough
We begin by setting up the project files.

Create a new folder for the project and add an `index.html` file at the root.

```text
project/
├── index.html
├── assets/
└── styles/
```
project/

Inside the `styles` folder, create a `base.css` file. This file will hold global styles later.

Link the CSS file in your HTML by adding.

```html
<link rel="stylesheet" href="styles/base.css"/>
```

Add a favicon file inside the `assets` folder and link it in the `<head>`.

```html
<link rel="icon" href="assets/favicon.ico"/>
```

Next, include the font links for Inter and Roboto Mono in the `<head>` of your HTML file.

```html
<link rel="preconnect" href="https://fonts.googleapis.com"   />

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />


<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Roboto+Mono&display=swap"
  rel="stylesheet"
/>
```

At this stage, we are only preparing the foundation of the project. No layout or styling is expected yet.

---

## Project Milestone
You now have a basic project structure in place.


You should have:
- An `index.html` file
- An `assets` folder for images and icons
- A `styles` folder with a `base.css` file
- Font links included in the document
- A favicon linked in the `<head>`


This is the starting point for everything that follows.

---

## Section Done
You should be able to open `index.html` in the browser without errors.

Note that page may look empty or plain. That is expected.

What matters is that the file loads correctly and the structure is ready.

---

## Keyboard Walkthrough
Press the `Tab` key after the page loads.

At this stage, nothing may receive focus. That is fine.  
There are no interactive elements yet.

This walkthrough will become more meaningful in later chapters.

---

## Contrast Check
There is no styling yet, but the page should still be readable.

If text is invisible or the page fails to load, something is wrong with the setup.

---

## Ship Note
Before moving on:
- Confirm `index.html` opens without errors
- Confirm `base.css` is linked correctly
- Confirm font links are present in the `<head>`

---

# Chapter 1 — The First Words: Introduction to HTML

## Personal Reasoning
When you first open a website, the first thing you notice is how it looks. You see text, images, buttons, and layout structure. But the browser does not see any of that. The Browser only reads instructions and arrangements.

HTML is another way we speak to the browser.

If we use the right words, the browser builds and shows the page we want.
If we use the wrong ones, the browser becomes confused,
and our page becomes harder and confusing to read, harder to navigate, and confusing to maintain.
Before we touch colors or layout, we need to learn how to speak with the browser clearly.

This chapter is about learning that language.

## Overall Learning
- What HTML is
- Tag anatomy
- Boilerplate: `<!doctype>`, `<html>`, `<head>`, `<body>`
- `<title>` and `<meta>`
- Headings `<h1>`–`<h6>`
- Paragraphs `<p>`

## Explanation
**What is HTML?**  
HTML stands for **HyperText Markup Language**. HTML is a widely used language that **describes what things are** on a page so the browser knows how to present them. HTML is very close to us as human beings: each human has a head (`<head>`) and a body (`<body>`). The head holds important information about a person, just like the `<head>` in HTML holds important information about a web page, such as its `<title>`.

**Is HTML a programming language?**\
**NO.** HTML is not a programming language. It does not run logic or perform calculations.

### What a tag is (Tag Anatomy)
HTML uses tags to label and structure content on a webpage. A tag is written using angle brackets and usually comes in a pair: an opening tag and a closing tag. The opening tag marks where an element will begins, and the closing tag marks where it ends.

The content placed between the opening and closing tags is affected by that tag and determines how the browser displays or understands the content.

**Example of a tag:**
```html
<p>This is a paragraph.</p>
```

- `<p>` is the **opening tag**
- `</p>` is the **closing tag**
- Everything between them is the **content**

To define a tag, you start with an opening angle bracket, write the tag name, then close the bracket. After that comes the content. To end the tag, you open another angle bracket, add a forward slash, write the same tag name, and then close the bracket. When you do this, you have created a complete HTML tag.\
This is called **tag anatomy**: opening tag, content, closing tag. This is how HTML groups and defines meaning.



### The HTML Boilerplate
The first thing we do in an HTML file is define the boilerplate. An HTML boilerplate is the basic structure of an HTML document. It defines how a webpage is structured before any content is added and saves you from rewriting the same code every time you create a new HTML file.

Here is the smallest valid HTML document:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>My Portfolio</title>
    <meta charset="UTF-8" />
  </head>
  <body>
  </body>
</html>
```

Each part has a job:

- `<!doctype html>` tells the browser what type of document this is
- `<html>` wrap the entire page together
- `<head>` contains information about the page
- `<body>` contains all content and structure that the user will see

### The `<title>` and `<meta>`
Inside the `<head>` tag, we add information about the page.

- `<title>` apply the content of the tag as the name of the page shown in the browser tab
- `<meta charset="UTF-8">` tells the browser how to read and interpret the webpage characters correctly

These do not appear on the page, but they are essential for the browser.

### Headings `<h1>`–`<h6>`

HTML headings are used to define the structure and importance level of content on a webpage. There are six heading levels, from `<h1>` to `<h6>`, where `<h1>` represents the most important heading and `<h6>` represents the least important.

Headings are used to label sections of a page and help both users and browsers understand how content is organized. `<h1>` is mostly used for the main title of the page, while lower-level headings (`<h2>`–`<h6>`) are used for subheadings within the sections of the page.

#### Example usage

```html
<h1>Hello World</h1> 
```

### Paragraphs `<p>`

The `<p>` tag is used to define paragraph for a text in HTML. It represents a block of normal un-styled text and automatically starts on a new line, with space added before and after it which means any tag content that comes after it starts on a new line.

Paragraphs are used for writing sentences, descriptions, and longer pieces of text on a webpage.

#### Example usage

```html
<p>This is a paragraph of text.</p>

<p>Paragraphs are used to display readable content on a webpage.</p>
```
 
## Code Walkthrough
At this point we can create our first real content which is a hero section with your name and tagline.

Open `index.html` and place this inside the `<body>`:

```html
<h1>Jane Doe</h1>
<p>Frontend Developer</p>
```

Your full file should now look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>My Portfolio</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Danny Paul</h1>
    <p>Web Developer</p>
  </body>
</html>
```


The `<h1>` makes your name the main heading.  
The `<p>` makes your tagline a paragraph.  
This is a raw, unstyled hero section.


## Project Milestone
You should now have:

- An `index.html` file
- A valid HTML boilerplate
- A hero section made of:
    - Your name in an `<h1>`
    - Your tagline in a `<p>`

## Section Done
When you open `index.html` in the browser, you should see your name and tagline stacked vertically with no styling.


## Keyboard Walkthrough
Press the `Tab` key. Nothing should receive focus yet, because we have not added links or buttons.


## Contrast Check
The text should be easy to read against the background. We have not added colors yet, but nothing should feel hard to see.



## Ship Note
Before moving on, make sure your page loads without errors and that your name is inside an `<h1>` and your tagline is inside a `<p>`.

---

# Chapter 1.5 — Links vs Buttons (Tiny but Critical)

## Personal Reasoning
The fastest ways to spot a beginner developed website is how links and buttons are being used.
Everything is clickable, but not for the right reasons.

The main purpose of links is to move between pages, while the main purpose of buttons is to submit forms or perform actions. Sometimes beginners make a ``<div>`` clickable just because it is easy to style or it looks like a button. Visually it may look fine, but the browser does not care how it looks — it cares what it means.

If this mix-up is not corrected while the project is still simple developer would suffer accessibility, usability, and clarity issues. \
So we are fixing this now, while the project is still simple.

## Overall Learning
- Navigation uses `<a>`
- Actions use `<button>`
- When to use each correctly
- Accessible text patterns for both

## Explanation
HTML gives us different elements for different purposes. Knowing the purpose of these elements puts you in a position to write clean and understandable code. Two of the most commonly confused elements are links and buttons.

A **link** is used for navigation.  
Its job is to take the user **somewhere else** like navigate within pages, etc.

A **button** is used for actions.  
Its job is to **do something** on the current page like submit form, perform actions, etc.

These are not visual choices. They are meaningful choices to the browser and the user.

### Links `<a>`
A link in HTML is created using the `<a>` tag. The `href` is a link attribute direct the browser on where the link should go.
The value in the href can either be a link from the internet or a path on your project directory.

```html
<a href="/about.html">About Me</a>
```

When the browser sees this, it understands:
- This is navigation
- Activating it will change location
- It should be focusable by default

Links should only be used when clicking them moves the user from one to another page or section.

### Buttons `<button>`
A button is created using the `<button>` tag.

```html
<button>Submit</button>
```

A button does not have a href attribute therefore by default does not go anywhere.  
It is meant to trigger an action, usually with JavaScript or inside a form.

Buttons are used for:
- Submitting forms
- Opening menus
- Triggering UI changes

They are not meant for navigation.

### Why this distinction matters
Screen readers announce links and buttons differently.  
Keyboards interact with them differently.  
Browsers treat them differently.\
Users interact with them differently


If you use the wrong element, you break expectations for users who rely on those behaviors.



## Code Walkthrough
## Code Walkthrough
In our project, the hero section needs a clear and descriptive way for a user to move forward. For example, a link like “View My Work” should take the user to another part of the page or to another page entirely.

This is not a trigger action that changes data or submits anything.  
It is just a navigation.


```html
<a href="#projects">View My Work</a>
```

This tells the browser engine that:
- This is navigation
- It points to the Projects section
- It should behave like a link

In future chapters we will use the `<button>` element when we build forms and interactive features for our project.

## Project Milestone
Your hero section now has a call-to-action that is semantically correct.

The page still looks simple, but the meaning is right:
- Navigation uses `<a>`
- Actions are reserved for `<button>`

## Section Done
You should now have a clickable view-my-work link in your hero section that uses an `<a>` tag instead of a button or clickable text.

## Keyboard Walkthrough
Press the `Tab` key until the view-my-work is focused.

You should see it receive focus automatically.  
Press `Enter` to activate it and confirm it navigates correctly.

## Contrast Check
Even without final styling, the link text should be clearly visible and readable.


## Ship Note
Before moving on:
- Confirm the hero Section uses `<a>`, not `<button>`
- Confirm it has an `href`


---

# Chapter 2 — Building Blocks: Structuring Content

## Personal Reasoning
Once we can place a text on a page, the next step is learning how to group and organize it.

Developing a website is not just about placing words on a screen. A page is made up of different parts that belong together.
For example: 
- Images usually exist to support or explain a nearby text.
- Navigation links are mostly related to each other and should be grouped together.
- Lists are used when we want to show a set of related items.

When these parts are not structured correctly, the page becomes harder to understand — not only for users, but for the developer and browser.

The purpose of this chapter is to turn loose content into clear building blocks.

## Overall Learning
- Nesting rules
- Block vs inline elements
- Links `<a>`
- Images `<img>`
- Lists `<ul>`, `<ol>`, `<li>`
- Emphasis `<strong>` and `<em>`
- Alt text rules (meaningful vs decorative)
- Inline SVG basics with `aria-hidden`

## Explanation

### Nesting rules
HTML nesting describes how HTML elements are placed inside other HTML elements to show that they belong together.

In HTML, content is rarely alone. Most of the time, one piece of content is part of a bigger piece. Nesting is how we express that relationship.

For example, a paragraph may contain highlighted text. The highlighted text belongs to the paragraph, so it is placed inside it.
```html
<p>This is an <strong>important</strong> text.</p>
```

The `<strong>` tag is nested inside the `<p>` tag. This is a valid syntax because highlight belongs inside text.

Good nesting practice keeps HTML readable and predictable.

### Block vs inline elements
HTML elements fall into two categories: **block** and **inline**.

**Block elements**: Block are elements used for structuring the main content of a web-page. Identifying a block element is easy as they are know for taking a full widght of the page. they are known for stretching out to the left and right as far as they can.

**Block element would always:**
- Start on a new line
- Take up the full width available

Examples include `<p>`,`<div>`, `<ul>`, `<figure>`, and `<section>` etc.

**Inline elements:** Inline elements are HTML elements that live inside text.
They do not create a new line on the page.

When the browser reads an inline element, it treats it as part of the current line, not as a new block of content.

**Inline element would always:**
- Do not start on a new line
- Do not stretch across the page
- Do not group other elements

Examples include `<a>`, `<strong>`, and `<em>`.

Understanding this helps you predict layout behavior even before styling.

### Links `<a>`
A link is an HTML element that allows the user to move from one place to another.

- When the browser sees a link, it understands:
- the user can activate this text
- activating it will change location

A link is written using the `<a>` tag and must have a href.

```html
<a href="#projects">View Projects</a>
```

Links can appear inside paragraphs, lists, or navigation areas. Their purpose is always navigation.

### Images `<img>`

Image elements in HTML are used to support or explain text or a caption. Images are important for visualization in a web page.
Images in HTML are added using the <img> tag.
Unlike most HTML elements, <img> does not have a closing tag.

That is because an image does not wrap content.
Instead, all the information about the image is provided through attributes.

An attribute is extra information added inside an HTML tag to describe it.

Here is a basic image example:
```html
<img src="headshot.jpg" alt="Portrait of Danny Paul" />
```
In this example that:
- src tells the browser where the image file is located
- alt provides a text description of the image

The `alt` attribute is required and serves as text when the image cannot be seen.

### Alt text rules
What is the alt attribute?

The alt attribute stands for alternative text.

It is used when:
- the image fails to load
- the user cannot see the image
- a screen reader is reading the page aloud

When the browser cannot display the image, it uses the alt text instead.
This means the image still has meaning, even when it is not visible.

The alt attribute is written inside the <img> tag, alongside src.

##### Decorative images
If an image is purely decorative and adds no meaning, the alt attribute should be empty:

```html 
<img src="divider.svg" alt="" />
```


### Lists `<ul>`, `<ol>`, `<li>`

Lists are used in HTML when we want to represent a ** set or a collection of related items**.

When items belong together, HTML provides list elements to group them instead of writing each item separately or with a comma.

A list in HTML is made up of three parts:
- the list container
- the list items
- the relationship between them

---

### Unordered lists `<ul>`

An unordered list is used when the **order of the items does not matter**.

For example, take a navigation links or a set of menu options, these do not need to be read in a specific sequence.

```html
<ul>
  <li>Home</li>
  <li>Projects</li>
  <li>Contact</li>
</ul>
```

In this example:
- `<ul>` defines the list itself
- `<li>` defines each individual item of the list
- The browser understands these items belong together as a group

Unordered lists are commonly used for:
- navigation menus
- feature lists
- groups of links

---

### Ordered lists `<ol>`

An ordered list is used when the **order of the items matters**.

This is useful for steps, instructions, or rankings.

```html
<ol>
  <li>Plan the layout</li>
  <li>Build the structure</li>
  <li>Test the page</li>
</ol>
```

Here:
- The browser understands the sequence is important
- Screen readers announce the position of each item

---

### List items `<li>`

The `<li>` element represents **one item in a list**.

A list item must always live **inside** a `<ul>` or `<ol>`.

This is correct:

```html
<ul>
  <li>About</li>
</ul>
```

This is incorrect:

```html
<li>About</li>
```

Without a list container, the item has no meaning.

---

### Lists are block elements

Lists are **block-level elements**.

This means:
- they start on a new line
- they take up the full available width
- they group related content together

Because of this, lists are important for representing navigation and grouped content.

---


### Emphasis `<strong>` and `<em>`
Html provides the `<strong>` tag to indicate importance in a web-page.

Example code is:
```html
<strong>Important:</strong> Save your work.
```

We also  have the `<em>` tag to indicate emphasis.

```html
<em>This matters.</em>
```

These tags communicate meaning, not appearance to the webpage, the reader, and the user.

---

### Inline SVG and `aria-hidden`

SVGs can be written directly inside HTML. When this is done, they are called **inline SVGs**.

Inline SVGs are commonly used for **icons**, such as arrows, menu icons, or decorative symbols.

```html
<svg viewBox="0 0 24 24">
  <!-- icon path goes here -->
</svg>
```

If an SVG is **decorative** and does not convey information, it should be hidden from assistive technology like screen readers, voice over etc.

This is done using the `aria-hidden` attribute.

```html
<svg aria-hidden="true" viewBox="0 0 24 24">
  <!-- icon path -->
</svg>
```

Setting `aria-hidden="true"` tells screen readers to ignore the SVG.

This prevents decorative icons from being announced as content and keeps the page easier to understand for users who rely on assistive technology.

## Code Walkthrough
Now we take what we’ve learned and apply it directly to the page.

First, we add a headshot to the hero section. The image and its description belong together, so we wrap them in a `<figure>` and `<figcaption>`.

```html
<figure>
  <img src="headshot.jpg" alt="Portrait of Danny Paul" />
  <figcaption>Frontend Developer</figcaption>
</figure>
```

Using `<figure>` makes it clear that the image and caption are one piece of content, not separate elements placed next to each other.

Next, we add a simple list that will later become the site’s navigation.

```html
<ul>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
```

At this stage, the list is only a placeholder. The goal is structure, not styling.

## Project Milestone
Your page now contains more than just text. It includes:
- An image paired with descriptive text
- A grouped set of navigation links
- Clear structure that reflects how the content is meant to be understood

The page may still look plain, but the meaning is becoming clearer.

## Section Done
You should now see a headshot with a caption and a simple list of navigation links on the page.

## Keyboard Walkthrough
Press `Tab` and move through the links in the list.

Each link should receive focus one after the other, showing that the list is navigable using the keyboard.

## Contrast Check
Make sure the text around the image and the navigation links is easy to read.

If anything feels unclear or crowded, make a note. We will address visual refinement later.

## Ship Note
Before moving on:
- Check that the image has an appropriate `alt` description
- Check that the navigation links are grouped inside a list


---

# Chapter 3 — The Architectural Plan: Semantic HTML

## Personal Reasoning
A pile becomes a house with a plan.

So far, we have been placing content on the page and learning the building blocks: headings, paragraphs, links, lists, images, and grouping. The page is valid, but it still reads like a pile of parts.

This chapter is where we stop thinking in loose elements and start thinking in page roles.

Semantic HTML helps the browser, assistive technology, and search engines understand what each part of the page is meant to be. We are not changing the look yet — we are giving the page a clear structure that can be styled later.

## Overall Learning
- Why semantic HTML matters
- How semantics improve accessibility and SEO
- Core semantic tags:
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
  - `<article>`, `<aside>`
- Add a skip link pointing to `#main`
- Add meta description & Open Graph placeholders
- Apply semantic structure to the full portfolio page

## Explanation
Semantic HTML uses elements that describe **what content is**, not how it looks.

A `<div>` can group things, but it does not tell the browser what that group represents. Semantic tags do.

These tags create landmarks:

- `<header>`: the top of the page, usually identity + intro content
- `<nav>`: a group of navigation links
- `<main>`: the primary content of the page (one per page)
- `<section>`: a themed group of content
- `<footer>`: closing or supporting content

Two more tags we will use in a simple way:

- `<article>`: a self-contained block that could stand on its own (perfect for project cards)
- `<aside>`: supporting content that is related, but not the main flow (we will keep this as a placeholder for now)

None of these tags magically “style” your page. They only give it meaning.

### Why semantics matter
Without semantics, assistive technology has to guess what each block is.

With semantics:
- screen readers can jump to navigation or main content quickly
- keyboard users can skip repeated content
- search engines can better understand page structure

A readable page becomes an understandable page.

### Skip links
A skip link is a simple link at the top of the page that jumps the user directly into the main content.

```html
<a href="#main">Skip to main content</a>
```

This matters because navigation appears at the top of almost every page. Keyboard users should not be forced to tab through it every time.

### Meta description & Open Graph placeholders
Metadata lives in the `<head>`. It does not show on the page, but it helps browsers, search engines, and social previews.

```html
<meta name="description" content="Personal developer portfolio website" />
<meta property="og:title" content="Developer Portfolio" />
<meta property="og:description" content="A personal portfolio showcasing projects and skills" />
```

We are not perfecting these yet. We are simply putting placeholders in the right place.

## Code Walkthrough
This chapter is a refactor + assembly chapter.

We are not learning new “content” ideas. We are taking what we already built and arranging it into a full portfolio structure, with proper landmarks and named sections.

### 1) Add head metadata placeholders
Inside your `<head>`, add:

```html
<meta name="description" content="Personal developer portfolio website" />
<meta property="og:title" content="Developer Portfolio" />
<meta property="og:description" content="A personal portfolio showcasing projects and skills" />
```

### 2) Add the skip link
The first focusable thing in the `<body>` should be the skip link:

```html
<a href="#main">Skip to main content</a>
```

### 3) Create the top landmarks: header + nav
We now label the top of the page as a `<header>`.

Inside it, we place:
- your identity (name/logo)
- a `<nav>` containing your navigation links
- your hero content

Your navigation list from earlier chapters does not change — we only wrap it with `<nav>`.

### 4) Create the main content landmark
Now we introduce `<main id="main">` as the destination for the skip link.

```html
<main id="main">
</main>
```

Everything that represents the main page content goes inside `main`.

### 5) Add the portfolio sections (full page outline)
Inside `<main>`, create the major sections from the portfolio:

- About
- Skills & Technologies
- Featured Projects
- Contact

Each section gets:
- a heading
- one short placeholder paragraph (so it’s visible and testable)
- simple, semantic grouping

We are not styling these yet. We are laying the structure cleanly.

### 6) Use `<article>` for project cards
A project card is an element used to display information concisely. That is what `<article>` is for.

We will create a few project placeholders using `<article>`.

### 7) Add the footer
The footer closes the page.

```html
<footer>
  <p>© 2025 John Doe</p>
</footer>
```

## Project Milestone
By the end of this chapter, your portfolio page has a complete HTML structure.

You should have:
- a skip link that jumps to the main content
- a semantic header area (site identity + hero)
- navigation grouped inside `<nav>`
- a main landmark containing the full set of portfolio sections:
  - About
  - Skills & Technologies
  - Featured Projects
  - Contact
- project blocks represented as `<article>` elements
- meta placeholders in the `<head>`
- a footer closing the document

The page will still look plain. That is fine. The structure is now correct.

## Section Done
When you open the page, you should be able to scroll and clearly see each major section heading on the screen:

- About Me
- Skills & Technologies
- Featured Projects
- Get in Touch

The page now reads like a real website outline instead of scattered elements.

## Keyboard Walkthrough
1. Press `Tab` once when the page loads.
2. The skip link should receive focus first.
3. Press `Enter`. The page should jump to the main content.
4. Continue tabbing through your navigation links.

You are confirming that:
- the skip link works
- the navigation is keyboard reachable
- the page has a clear focus flow

## Contrast Check
No styling has been applied yet, but text should still be readable.

If anything is hard to read at this stage, it usually means:
- the browser is zoomed unusually
- a custom stylesheet is interfering
- or content is missing and the page feels empty

We will handle visual polish later.

## Ship Note
Before moving on:
- Confirm there is only one `<main>`
- Confirm the skip link points to `#main`
- Confirm the nav links are inside `<nav>`
- Confirm each portfolio section exists as a `<section>` with an `id`


---

### Lesson goal
By the end of this chapter, you'll understand basic CSS concepts like linking external stylesheets, CSS selectors, Cascade and Specificity and recommended practices

### What CSS Is

CSS means *Cascading Style Sheets*. CSS describes how HTML elements are structured on the page. To put it simply, if you're building a house, HTML is like the **structure and rooms** while CSS is like the **paint and decorations** that make the house look good.

---

## Linking External CSS
One way to style your HTML document is to put your CSS code in a separate file. Every CSS file name should end with `.css` to let the IDE and browser know that it is a CSS file.
You can connect a CSS stylesheet to your HTML by adding a `link` tag in the `head` section with the correct CSS file path. 
Follow the instructions below to link your first CSS style sheet to your already existing html file.

* Create a folder named `styles' 
* Inside the newly created styles folder, create a new file named 'base.css'.
* Link your newly created file to your HTML by inserting the following code into your HTML:

```html
<head>
  <link rel="stylesheet" href="styles/base.css">
</head>
```

Your HTML will now apply all the styles in your `base.css` file. You can link multiple HTML pages to a single CSS file and vice versa. We will soon  be adding some code into your new CSS file! Before that, let's talk about syntax.

---

## CSS syntax 

CSS follows a simple structure:

```css
selector {
  property: value;
}
```

Example:

```css
body{
    background-color: red;
}
```

* `body` is the selector
* `background-color` is the property
* `red` is the value

The same structure applies whenever you're styling elements.Now add the above code to your `base.css` to style your HTML page.

---

## CSS Selectors

CSS selectors are used to specify which HTML elements you want to style. For example, we may want to select every div element on the page or we may want to select a specific paragraph on a page.

Selectors generally target an attribute value, such as an id or class value, or target the type of element, such as ```<h1>``` or ```<p>```.
Selectors are followed with curly brackets, {}, the styles to be applied to the selected element are then written within the curly braces. 

CSS selectors are divided into five:

* Simple selectors (select elements based on name, id, class)
* Combinator selectors (select elements based on a specific relationship between them)
* Pseudo-class selectors (select elements based on a certain state)
* Pseudo-elements selectors (select and style a part of an element)
* Attribute selectors (select elements based on an attribute or attribute value)

We're going to look at some basic selectors:

**Element selector**

Here, you select the element you want to style using the element's name. When you use this type of selector, all elements with the same name are going to be selected and styled:

```css
p {
  color: blue;
}
```

This will make all p tags have a text color of blue.

**Class selector**

A class selector styles all elements that have the same class name. When trying to select an element by its class, you use `.` followed by the class name. An HTML element can have more than one class name. A class name cannot start with a number

```html
<p class="intro">Hello</p>
<h3 class="intro">Hello</h3>
```

```css
.intro {
  color: green;
}
```
Now, the `h3` and `p` tags will have text color of green.

Since different elements can have the same class name, you can choose to select only a type of element with a given class name. Let's modify the previous example.

```css
p.intro {
  color: green;
}
```
Now, only p elements with class name of `intro` is going to have a text color of green.


**ID selector**
An id selector styles the element wiith the specified ID. IDs are unique and so each ID should appear only once in the HTML. This means that you cannot use the same id for more than one element. Justlike classnames, an id cannot start with a number. When trying to select an element by its id, you use `#` followed by the id.

```html
<p id="main">Hello</p>
```

```css
#main {
  font-size: 20px;
}
```

**The Universal Selector**
The universal selector (*) selects all HTML elements on the page.

When you write the code below, every text element on the page will be aligned center and will have a color of blue: 

```css
* {
  text-align: center;
  color: blue;
}
```

You can style different HTML elements together by using the syntax below:

```css
h1, section, div{
  text-align: center;
  color: blue;
}
```

All h1, section and div tags will have the above styles applied to them.

---

## Cascade and Specificity

**Cascade** means that if two rules are applied to the same element, the one that is written last will be applied to that element. It is like paint layers. If you paint a wall red then paint over it with blue, the wall looks blue.

**Specificity** means some selectors are stronger than others.

Here is a brief on how browsers decide which style to use when there is a conflict:

* Inline styles (applied right on an element in the HTMLcode) are the strongest.
* An ID selector is stronger than a class selector.
* A class selector is stronger than a simple element selector.

For example, if a paragraph has both a class and an ID, and both apply different colors, the ID’s color will win because ID selectors have higher importance.

**FAQ  
What if I define a classs selector before an ID selctor?
Order only matters when specificity is the same, in otherwords,. So if a class selector is defined before an element slector, the ID selector will be applied. Specificity beats order.**

---

## Essential CSS Properties

Here are some basic properties you will use all the time:

**color**
This changes text color:

```css
body {
  color: charcoal;
}
```

**background-color**
This changes the background behind an element:

```css
body {
  background-color: offwhite;
}
```

**font-size**
This defines the size of a text

These property names and values tell the browser exactly how things should look.

---

# CSS Architecture

As your styles grow, organizing them helps keep things clean.

**styles/base.css**
This file should contain default looks for the whole site. Think of this as the paint primer and basic tone for all rooms.

Examples:

```css
body {
  background-color: offwhite;
  color: charcoal;
}

h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```

**styles/components.css**
This file contains styles for different components in the page such as buttons. It is like decorating rooms. It styles specific parts like buttons and cards.

Example:

```css
.button {
  padding: 8px 12px;
  border-radius: 4px;
}
```

**styles/utilities.css**
This file has small reusable helpers. These are like common patterns you might use across many pages.

Example:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

---

## Good Practices

Do not use `!important` unless you absolutely have to. It forces a style to take precedence even if it should not. It is like shouting louder than everyone else to get attention. You want your code to work clearly without shouting.

Keep your selectors simple and your files organized so that you always know where a style is coming from.

---


---

### Lesson goal

By the end of this chapter, you will understand how elements are displayed on a page and how CSS controls space using the box model.

---

## How elements appear on a page

Before we discuss spacing or the box model, we need to understand how elements are placed on the page in the first place. CSS determines this using a property called `display`.

Every HTML element has a default display behavior. This behavior controls:

* Whether the element starts on a new line
* Whether it can have width and height
* How it interacts with surrounding elements

---


## Common display values

### Block elements

Block elements start on a new line and take up the full width available.

Examples :

* `div`
* `p`
* `section`
* `header`

```css
div {
  display: block;
}
```

Block elements respect width, height, margin, and padding.

---

### Inline elements

Inline elements do not start on a new line and only occupy the horizontal space required by their content

Examples:

* `span`
* `a`
* `strong`

```css
span {
  display: inline;
}
```

Inline elements ignore width and height, they only respect horizontal padding and margin.

---

### Inline-block elements

Inline-block elements combine the flow behavior of inline elements with the layout properties of block elements.
* Flow: Like inline elements, they do not start on a new line and sit in line with other content (text, other inline elements, or other inline-block elements).
* Layout Properties: You can apply width, height, margin-top, and margin-bottom properties to them, just like block elements.
* Spacing: They respect padding and margins on all four sides (top, bottom, left, and right), offering greater control over spacing within a line. 

```css
button {
  display: inline-block;
}
```

This display type is usually most useful for buttons and small layout components.

---

### None

```css
.hidden {
  display: none;
}
```

The above CSS code hides an element completely by removing it from the layout and it does not take up space.

---

## The CSS Box Model

Now that we know how elements are displayed, we can look at how CSS measures and spaces them.

On a web page, every element is placed inside a box forming the CSS box model.

Think of HTML as building rooms in a house. CSS decides how big each room is and how far apart the rooms are.

This system is called the **CSS Box Model**.

---

## The four parts of the box

Each element’s box is made up of four layers: content, padding, border and margin.

### Content

This is the actual content of the element which could be text, images, or even child elements.

```css
p {
  width: 300px;
}
```

The width applies only to the content area by default.

---

### Padding

CSS Padding creates space inside the element, around the content.

```css
p {
  padding: 16px;
}
```

### Border

The border wraps around the padding and content.

```css
p {
  border: 1px solid #ccc;
}
```

Borders help visualize structure, but should not be overused.

---

### Margin

Margin creates space outside the element.

```css
p {
  margin: 24px;
}
```

Margins control how far elements are from each other.

---

## How CSS calculates width and height

CSS calculates width as follows:

* padding + border + width = real width of an element
* padding + border + height = real height of an element

Example:

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

The final size is larger than 200px because of the border size and padding.

---

## Box Sizing

This is where box-sizing comes in. Box-sizing defines how to calculate the width and height of an element: should the calculation include padding and borders, or not.

```css
* {
  box-sizing: border-box;
}
```

When you use box sizing with the value of border-box, width and height include padding and border and the element's size appears exactly as expected. It is good practice to set this rule at the start of every project.

---

## Inspecting spacing with DevTools

You can use the chrome devtools to inspect your page or element and visualize the box model.

To inspect an element on chrome, right click the element and click on Inspect. Then under the styles tab, scroll down till you can see the box model diagram. It shows the content size, padding, border, margin. This will help you understand spacing issues and also help with ddebugging when you're out in the wild.

---

## Width and height best practices

```css
.card {
  width: 300px;
  height: 200px;
}
```

It is recommended to avoid fixed heights when possible. This is because the screen size can change and you always want your content to grow/shrink according to screen size.

---

## Logical properties for modern CSS

Instead of left and right, modern CSS uses logical directions.

### Horizontal spacing

```css
section {
  margin-inline: 32px;
}
```

### Vertical spacing

```css
section {
  padding-block: 48px;
}
```

---

## Visual debugging with Pesticide

There is a Chrome extension called **Pesticide** that outlines every element on the page.

It helps you:

* See how elements are stacked
* Understand spacing and alignment
* Visually grasp the box model

This tool is especially useful when learning how layout and spacing really work.

---

---

### Lesson goal

By the end of this chapter, you will understand how color works in CSS, how to use CSS variables as design tokens, and how to apply color in a way that is consistent, readable, and accessible.

---

## Why color matters

Color is one of the first things people notice on a website.

Good color combinations improve readability and make the site more visually appealing. On the other hand, poor color choices could make text hard to read, make your website feel less professional, and confuse users.

When designing your website, you shouldn't choose random colors, try to follow a consistent system.

---

## How CSS applies color

CSS controls color using properties like color, background-color, border-color, etc.

Example:

```css
p {
  color: #111827;
}
```

* `color` controls the text color
* `background-color` controls the surface behind the content, i.e., the background
* `border-color` as the name implies, controls the color of your border

---

## The problem with hard-coded colors

Take this piece of code, for example:

```css
button {
  background-color: #2563eb;
}
```

There's nothing inherently wrong with defining your colors this way in your stylesheet. However, it becomes a problem when your website grows and becomes really large. It then becomes hard to update later and creates inconsistencies. Imagine you have a file with 800 lines of code and you're asked to change text color from black to green and now you have to go through all those lines of code and change all instances of that color, and probably do  the same for other files too. That's a lot of work!
This is where CSS variables come in.

---

## CSS variables as design tokens

CSS variables allow you to store values and reuse them.

They are usually defined on the `:root` element.

```css
:root {
  --color-primary: #2563eb;
}
```

Now you can reuse them anywhere using the syntax below

```css
button {
  background-color: var(--color-primary);
}
```

This turns colors into design tokens. A token is a named value that represents a design decision.

---

## Semantic color tokens

Instead of naming colors after how they look, we name them after what they mean.

```css
:root {
  --color-primary: #2563eb;
  --color-success: #16a34a;
  --color-danger: #dc2626;
  --color-warn: #f59e0b;
  --color-text: #111827;
  --color-bg: #ffffff;
}
```

This makes your CSS easier to understand.
Remember:

* Primary is for main actions
* Success is for positive feedback
* Danger is for errors
* Warn is for caution
* Text is for readable content like p tags and header tags
* Background is for backgrounds (surfaces)

---

## Applying tokens to components

Like we showed you earlier, this is the syntax for using CSS variables:

```css
body {
  color: var(--color-text);
  background-color: var(--color-bg);
}
```

```css
.button-primary {
  background-color: var(--color-primary);
  color: white;
}
```

This way, if your brand color changes later, you can update it in one place.

---

## Color contrast

Contrast is the difference between text color and background color. Low contrast makes text hard to read, while high contrast improves accessibility.

Example of poor contrast:

* Light gray text on a white background

Example of good contrast:

* Dark text on a light background

It is really important to  understand contrast, as it directly affects usability.

---

## Checking contrast ratios

There are tools that measure contrast using WCAG standards, but the general rule is that normal text should have a contrast ratio of at least 4.5:1, and large text can be slightly lower.

You should always check contrast in body text, buttons, links, call-to-action sections.

---

## Hover and disabled states

Color can also be used to communicate state.

### Hover state

Hover state is an event that is registered when the cursor is directly on an element. Hover states give feedback.

```css
.button-primary:hover {
  background-color: #1d4ed8;
}
```

When you hover over the button above, its color will change to the specified color. For most cases, hover colors should stay within the same color family.

---

### Disabled state

Disabled states are very useful when building websites, as they let the user know that a request is being processed and help prevent double submissions. Disabled elements should look inactive but still be readable. For example, below is a sample code that shows the disabled state for a button that has been clicked:

```css
.button-primary:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}
```

When showing a disabled state, it is good practice to combine color with opacity or cursor changes. This makes for good UX.

---

---

### Lesson goal

By the end of this chapter, you will understand how typography works on the web, how to choose fonts intentionally, and how to apply them in a way that feels clear, consistent, and appropriate for the message you are sending.

---

## Why typography matters

Typography is the art of arranging text on a webpage to makeit legible and visually appealing. Just like body language affects how people understand you, fonts affect how users understand what they are reading. Different fonts create different feelings. Some fonts feel serious, friendly, technical or even playful. Choosing the right font is very important when building any application.

---

## Typefaces vs fonts

A typeface is the overall design of the letters, while a font is a specific version of that typeface.

For example: `Inter` is a typeface, `Inter Regular 400` is a font and `Inter Bold 700` is another font. In everyday CSS work, people often say “font” when they mean “typeface”, and that is fine.


## The two main types of typefaces

Most fonts you use on the web fall into two categories: Serif and Sans Serif fonts


### Serif fonts

Serif fonts usually have small strokes at the ends of letters. They usually feel traditional, formal and serious. Serif fonts are usualy used for articles, books, editorial writing and long form reading
Some examples are: Times New Roman, Georgia and Merriweather

---

### Sans serif fonts

Sans serif fonts do not have extra strokes and they usually feel more modern than serif fonts. Common uses are: Websites, Apps, Dashboards and Interfaces
Some examples are: Inter, Arial, Helvetica and Roboto

For most modern web interfaces, sans serif fonts are the best default choice.

---

## Choosing fonts for this project

This project uses two fonts: Inter and Roboto Mono.

### Inter

Inter is a modern sans serif typeface designed for screens. It is usually used for body text, headings and UI labels. It is readable, neutral, and works well across devices.

---

### Roboto Mono

Roboto Mono is a monospaced typeface which means that each character takes the same width. It is used for code, numbers, technical content and statistics. Using a monospaced font for data improves clarity and alignment.

---

## Using Google Fonts

Google Fonts is a great platform to explore and use web fonts. You can visit https://fonts.google.com. There you can browse fonts, see how they look in paragraphs, compare styles and copy the HTML link to include them in your project

---

## Adding fonts to your HTML

You can addfonts to your aHTML using one of these 2 methods:

* Using an online font
* Hosting custom fonts with `@font-face`

To add an online font like Google fonts to your project, you can use the `<link>` tag and then add the embed code to the href atrribute fo the `link` tag. The embed code will be provided by the online service.

Example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
```

This makes the fonts available to your CSS.

Example:

```css
  h1{
    font-family: 'Roboto Mono';
  }
```

Using online fonts is easier and generally provides better performance than hosting your fonts yourself.

---

## Performance and font loading

Fonts are external resources, so how you load them matters. Let's cover a few ways you can help to improve font performance.

---

### Preconnect

Preconnect allows the browser to prepare early and it improves loading speed.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

### Font display swap

`font-display: swap` ensures text appears immediately. If the custom font is not ready, the browser uses a fallback font and swaps later. This prevents invisible text and improves user experience.

---

## Applying fonts with font family

Fonts are applied using `font-family`.

```css
body {
  font-family: "Inter", system-ui, sans-serif;
}
```

When writing your font-family, use quotes for font names with multiple words, and always include fallback fonts.

---

## Font size

Font size controls how large text appears. You can use `px`, `em` or `rem` as your unit when writing your font size.

```css
p {
  font-size: 16px;
}
```

Here are some things to remember whn choosing font size:

* Body text should usually be 16px or larger
* Headings should clearly scale above body text
* Avoid very small text

---

## Font weight

Font weight controls boldness. You can use font weight to show importance when writing.

```css
h1 {
  font-weight: 700;
}
```

Some common weights are:

* 400 - normal
* 500 - medium
* 600 - semibold
* 700 - bold

---

## Line height

Line height controls spacing between lines of text. Good line height makes paragraphs easier to read and prevents visual clutter.  

```css
p {
  line-height: 1.6;
}
```

---

## Text alignment

Text alignment controls horizontal flow.

```css
p {
  text-align: left;
}
```

**Here are a few good practices you should keep in mind:**

* Avoid centering long paragraphs
* Left aligned text is the easiest to read
* Use center alignment sparingly for headings or short labels

---

## Aligning numbers with tabular numerals

Sometimes when writing numbers in tables or when writing statistics in dashboards, , they can appear uneven. In such cases, we can use `font-variant-numeric: tabular-nums` to ensure they appear even, like below:

```css
.stats {
  font-variant-numeric: tabular-nums;
}
```

---

### Lesson goal

By the end of this chapter, you will understand how elements are positioned on a page, how to step outside the normal flow when needed, and how to use Flexbox to create your first flexible layouts.

---

## How elements are placed by default

Before we move things around, we need to understand what the browser does by default.

Every element on a page follows something called **normal flow**. In normal flow, elements are positioned in the order they appear in the HTML source code, following the default behavior of each element's display type. This means that block elements stack vertically and inline elements flow horizontally. Think of normal flow like furniture being placed automatically in a room, one item after another.

---

## When and why to break normal flow

Sometimes we may may want to design something that doesn't follow the default layout like a badge on top of a card or a sticky sidebar. CSS allows you to break normal flow using the `position` property.

---

## The position property

Every element has a position value which can either be static, relative, absolute or fixed.

---

## Static positioning

Static elements follow normal flow and cannot be moved using top, left, right, or bottom

```css
.box {
  position: static;
}
```

Most elements you write are static unless you say otherwise.

---

## Relative positioning

Relative positioning moves an element **relative to its original position**.  When you apply top, right, bottom, or left properties to a relatively positioned element, it moves relative to where it would have been placed in the default static flow. The surrounding elements act as if the element is still in its original location, leaving a gap where it was initially placed. The moved element may overlap other elements. Think of it as nudging furniture without changing the room layout.

```css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

---

## Absolute positioning

The CSS property `position: absolute` removes an element from the normal document flow and positions it relative to its nearest positioned ancestor, i.e., The element's position is determined by its closest ancestor whose position property is anything other than static (i.e., relative, absolute, fixed, or sticky). If no ancestor is positioned, it uses the viewport. It does not take up space in the layout

```css
.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}
```

---

## Fixed positioning

Fixed elements are positioned relative to the viewport. They stay in place when scrolling and are removed from normal flow.

```css
.header {
  position: fixed;
  top: 0;
}
```

---

## Sticky positioning

Sticky is a mix of relative and fixed. It allows an element to scroll normally with the page until it hits a specified point, then it "sticks" in place. The element then behaves like a position: fixed element. 

```css
.sidebar {
  position: sticky;
  top: 16px;
}
```

**N.B:** Sticky only works when there is enough scrolling space.

---

## Z index

When elements overlap, the browser decides which one appears on top. This is controlled by `z-index`. If box A is stacked on top of Box B in the normal flow but Box B has a higher z-index value, Box B is going to appear on top instead 

```css
.modal {
  z-index: 10;
}
```
---

## Things to note when using z index

* **Position:** z index only works when the element has a position other than static. 
* **Value:** You assign an integer value (positive, negative, or zero) to the z index property. Without a specified z xindex, elements stack in the order they appear in the HTML document. 
* **Stacking Context:** Think of a stacking context like a container that limits how high its children can stack. z index values are only compared between elements inside the same container. If a parent element sits below another element, everything inside that parent is also below it, no matter how high the child’s z index is. So a child with a very high z index cannot rise above an unrelated element if its parent is already underneath. The parent sets the ceiling.

---

## Introduction to Flexbox

Flexbox is short for flexible Box Layout. Flexbox is a layout model used to arrange the items in a container in either a row or column. Flexbox is great because it also implements responsive design. A flexbox consists of a flex container and one or more flex items.
A Flex Container is a parent element, where the display property is set to flex or inline-flex while a flex item is the direct child of the flex container.

---

## Creating a flex container

To use Flexbox, you define a flex container. This changes how its direct children behave.

```css
.container {
  display: flex;
}
```
In the next chapter, we'll learn more about flexbox, how to create flex items and how to align them

---

---

### Lesson goal

By the end of this chapter, you will understand Flexbox deeply enough to build clean rows and columns, align content confidently, and create layouts that adapt naturally without hacks.

---

## Flexbox intro recap

Flexbox exists to solve one problem: arranging items in a line. That line can run horizontally or vertically, but it is always one main direction at a time.

---

## The flex container and flex items

Like we learned in the previous chapter, flexbox starts with a container whose display is set to flex, then the direct children of the flex container then become flex items.

```css
.container {
  display: flex;
}
```

---

## Main axis and cross axis

Flexbox layout is based on two axes.

* **Main axis** is the direction items flow
* **Cross axis** is perpendicular to the main axis

By default the main axis runs left to right and the cross axis runs top to bottom.But you can set the direction of the main axis using flex direction.

---

## Flex direction

`flex-direction` defines the main axis.

```css
.container {
  flex-direction: row;
}
```

The value for `flex-direction` can either be row (default) or column.
If you switch to column, the axes swap roles.

---

## Justify content

`justify-content` controls spacing along the main axis.

```css
.container {
  justify-content: space-between;
}
```

Some common values for justify content are:

* flex-start
* center
* space-between (aligns the flex items from edge to edge within the container and puts even space between them)
* space-around(distributes the space in the container evenly between the flex items)
* space-evenly

---

## Align items

`align-items` controls alignment along the cross axis.

```css
.container {
  align-items: center;
}
```

Some common values are:

* stretch
* center
* flex-start
* flex-end

Setting the value to stretch ensures that flex items will automatically stretch vertically to match the height of the tallest item in the row

---

## Gap

`gap` controls spacing (distance) between flex items, replacing the need for margins

```css
.container {
  gap: 16px;
}
```
---

## Wrapping items

By default, flex items try to stay on one line. If you want your flex trend to break into a new line when space runs out, you can use flex-wrap. This is essential for responsive designs as your layout will now adjust to screen sizes 

```css
.container {
  flex-wrap: wrap;
}
```

---

Let's look at 3 more core CSS Flexbox properties. Read through it slowly and carefully so as to really understnad it.

## Flex grow, shrink and basis
`flex-grow` determines how much an item expands to fill extra space. A higher number means it grows faster. The default is 0 and when it's set to 0, it won't grow more than its `flex-basis`.

`flex-shrink` dictates how much an item shrinks when space is limited (relative to others). A higher number means it shrinks more and the default is 1.

`flex-basis` sets the item's initial size of the flex item before growing or shrinking.
The shorthand syntax is: `flex: <grow> <shrink> <basis>.` The values for flex-grow and flex-shrink don't take any unit

```css
.card{
  flex: 1 1 auto;
}
```

---
<!-- 
## Summary

* **display: flex**
  Turns an element into a flex container and enables Flexbox layout for its direct children.

* **flex-direction**
  Defines the main axis direction.

  * `row` (default): left → right
  * `column`: top → bottom
    Changing this also changes how other properties behave.

* **justify-content**
  Controls alignment and spacing **along the main axis**.
  Common values:

  * `flex-start` – items pack at the start
  * `center` – items center
  * `space-between` – space only between items
  * `space-around` – equal space around items
  * `space-evenly` – equal space everywhere

* **align-items**
  Controls alignment **along the cross axis**.
  Common values:

  * `stretch` (default) – items stretch to fill container
  * `center` – items center
  * `flex-start` – align to start
  * `flex-end` – align to end

* **gap**
  Controls spacing between flex items without using margins.
  Applies consistently in both directions.

* **flex-wrap**
  Determines whether items stay on one line or wrap onto new lines.

  * `nowrap` (default) – single line
  * `wrap` – items move to next line when space runs out

* **align-items: stretch**
  Makes flex items equal height by stretching them to match the tallest item in the row.

* **flex-grow**
  Controls how much an item expands when extra space is available.
  Higher value = grows more relative to others.

* **flex-shrink**
  Controls how much an item shrinks when space is limited.
  Higher value = shrinks more.

* **flex-basis**
  Sets the item’s starting size before grow/shrink happens.

* **flex (shorthand)**
  Combines grow, shrink, and basis in one declaration.

  ```css
  flex: 1 1 auto;
  ```

--- -->

---

### Lesson goal

By the end of this chapter, you will understand how CSS Grid works, how to think in two dimensions, and how to build deliberate layouts made of rows and columns.

---

## Why CSS Grid exists

Flexbox is great for laying things out in a line(one dimension) but CSS Grid is built for laying things out in **two directions at once**.

Analogy:

---

## Creating a grid container

Grid starts the same way Flexbox does, by creating a container.

```css
.container {
  display: grid;
}
```

Once an element becomes a grid container, its direct children become grid items.

---

## Grid rows and columns

Grid layouts are defined by rows and columns. Grid items are then placed in these rows and columns. Columns run left to right while rows run top to bottom. You can decide how many of each you want.

---

## Defining columns

`grid-template-columns` defines the structure of your grid.

```css
.grid {
  grid-template-columns: 1fr 1fr 1fr;
}
```

The `fr` unit means a fraction of the available space. This creates three equal columns.

---

## Defining rows

Rows can be defined the same way.

```css
.grid {
  grid-template-rows: auto auto;
}
```

Most of the time, rows can be left to auto size based on content, i.e., the number of rows will be determined by the size of the grid items.

---

## Spacing with grid gap

Grid spacing is controlled with `gap`.

```css
.grid {
  gap: 24px;
}
```

The above code leaves a space of 24px between the rows and columns. It replaces the need for margins between grid items.

---

## Auto fit and minmax for responsive grids

One of the most powerful Grid patterns is auto fit with minmax.

```css
.grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

What this means:

* Create as many columns as will fit
* Each column is at least 250px wide
* Columns can grow to fill available space up to 1fr

This is perfect for card layouts.

---

## When to use Grid instead of Flexbox

Grid is the perfect solution when your layout has both rows and columns. Use Flexbox when layout is just one direction

---

---

### Lesson goal

By the end of this chapter, you will understand how to design and build layouts that adapt smoothly across screen sizes, using a mobile-first approach and content-driven breakpoints.

---

## Responsive design

Responsive design entails taking all screen sizes into consideration when designing a layout. Most people think of it as making things smaller for mobile, but it's really about letting your layout respond to the available space.
A responsive interface should look appealing and readable on all screen sizes including: Phones, Tablets, Laptops, Large desktop and ultrawide screens

---

## Mobile-first thinking

Mobile-first means designing for the smallest screen first, then adjusting the existing layout to fit larger screens. This means that default styles target mobile devices and then media queries are used to enhance the layout for larger screens. 
Media queries will be explained later on in this chapter.

---

## The viewport meta tag

The viewport is the visible area of a user's web page, it varies with device size.
The viewport meta tag is an HTML snippet placed in the `<head>` of a webpage, it controls how a site renders on different screen sizes. It tells the browser to match the page's width to the device's actual width (width=device-width) and set the initial zoom level (e.g., initial-scale=1.0), preventing mobile browsers from zooming out to render desktop-sized pages, ensuring content looks good on phones. 
Without the viewport meta tag, mobile browsers render pages at desktop widths and scale them down.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

The above code tells the browser to match the layout width to the device width and render at a 1:1 scale.
This tag is mandatory for responsive layouts.

---

## Media queries

Media queries allow CSS to change based on screen characteristics like width 
```css
@media (min-width: 768px) {
  .layout {
    display: grid;
  }
}
```

The above code sets the display of the selcted element to `grid` when the screen size is at least 768px.

---

## Content-driven breakpoints

Things to check when choosing breakpoints:

* Is the layout starting to look too small for the content?
* Is the line length uncomfortable
* Do components need more space to look “okay”?

If your answers to the above questions are “yes”, then you probably need to add a breakpoint

---

## Responsive images

An image is considered responsive if it  adjusts to fit the screen size. You can easily make an image reponsive by setting the width to a percentage of the available container or space and setting the height to auto.

```css
  .responsive-img {
    width: 100%;
    height: auto;
  }
```

In the above example, the image will always take up 100% of it's container's size. 
If you set an element's height to auto, whenever screen size changes, the height of the element is recalculated by the browser so that its aspect-ratio is maintained

You can also give an image a `max-width` property so that it doesn't get bigger than the specified size
Example:
```css
  @media (min-width: 768px) {
  .rresponsive-img {
    max-width: 500px;
  }
}
```
In the above example, the image will never grow beyond 500px for screen sizes of 768px and above

### srcset

srcset allows the browser to choose the best image based on screen size and resolution.

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w"
  alt=""
/>
```
* `src="image-800.jpg"`: This attribute specifies the default image source that will be used by browsers that do not support the srcset attribute, or as a fallback.
* `srcset="image-400.jpg 400w, image-800.jpg 800w"`: This attribute provides a list of alternative image files and their intrinsic widths (indicated by the w descriptor) to the browser.
* `image-400.jpg 400w`: A version of the image that is 400 pixels wide.
* `image-800.jpg 800w`: A version of the image that is 800 pixels wide.
The browser uses this list to select the most appropriate image based on the user's screen size and device pixel ratio (DPR).

### sizes

This tells the browser how much screen space the image will occupy.

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w"
  sizes="(min-width: 768px) 50vw, 100vw"
  alt=""
/>
```


---

### picture element

The `<picture>` element allows different images for different conditions.

```html
<picture>
  <source media="(min-width: 1024px)" srcset="hero-large.jpg" />
  <img src="hero-mobile.jpg" alt="" />
</picture>
```

---

## Lazy loading images

Lazy loading defers image loading until they enter the viewport. It helps with faster initial load, reduced data usage anf better performance on mobile

```html
<img src="photo.jpg" loading="lazy" alt="" />
```


---

---

### Lesson goal

By the end of this chapter, you will understand what utility-first CSS is, why Tailwind exists, and how to configure it to reflect your brand design system.

---


## What utility class means

A class is a `utility class` if that class does only one thing.

Examples:

* `p-4` → padding
* `text-center` → text alignment
* `bg-blue-500` → background color of blue
* `rounded-lg` → border radius

You build components by combining utilities, not by creating new class names. The difference between this and traditional CSS classes is that a CSS class can handle different things at the same time.
For Example:

```CSS
.hero-heading {
    text-align: center;
    font-size: 20px;
    margin-bottom: 2px;
}
```
You can see that the above css class `.hero-heading` is applying multiple styles at once as opposed to utility classes.

---

## Why utility-first CSS exists

Traditional CSS encourages writing custom class names and styling them in separate files. This works, but it often leads to bloated stylesheets, inconsistent spacing and colors, naming fatigue and constant context switching between HTML and CSS. 
Utility-first CSS solves these issues. So, instead of writing new CSS for every component, you can add utility classes to elements and that way, you can make changes safely without worrying about accidentally breaking another page that's using the same CSS.


---

## Tailwind setup overview

A basic Tailwind setup includes:

* Tailwind itself
* A config file
* Preflight (its base reset)

Once installed, Tailwind scans your files and generates only the CSS you actually use.
This keeps output CSS extremely small.

---

## Preflight reset

Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system.

Here are some of the styles applied by preflight reset:

* Border styles are reset
* Headings are unstyled
* Lists are unstyled
* Images are block-level
* Images are constrained

This creates a clean baseline for layout and typography.

---

## Design tokens in Tailwind

Instead of using random utility colors, you can define semantic tokens in `tailwind.config.js`(just like CSS variables discussed in earlier chapters).

```js
theme: {
  extend: {
    colors: {
      primary: "#2563eb",
      success: "#16a34a",
      danger: "#dc2626",
      warn: "#f59e0b",
      text: "#0f172a",
      bg: "#ffffff",
    }
  }
}
```

You can then use them like so:

* `bg-primary`
* `text-danger`
* `text-text`

---

## Spacing scale

Tailwind uses a spacing scale (listed below) but you can customize it to match your layout.

```js
spacing: {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
}
```

Example:
```HTML
  <p className="text-md text-text">This wil have a text-size of 16px and a color of #0f172a</p>
```

---

## Border radius tokens

You can also customize your boder-radius tokens in the same way. The default values are listed below. You can choose to customize these values according to what you're building.

```js
borderRadius: {
  sm: "4px",
  md: "8px",
  lg: "12px",
}
```

## Tailwind + CSS Together - When to Use Tailwind and Custom CSS

Tailwind is powerful, but it is not a replacement for CSS. While Tailwind can handle the vast majority of styling needs, you may occasionally need to write raw CSS for highly specific, complex, or unusual design requirements that may not be easily achieved with just Tailwind.
That being said, Tailwind is best used for layout, typography, spacing and responsive design. You can use CSS in your project if there's need for complex animations, complex shadows, highly unique designs, masks and advanced visuals ( mask images, custom gradients, clip paths)

---

---

### Lesson goal

By the end of this chapter, you will be able to prototype responsive, interactive interfaces quickly using Tailwind’s modifier system.

---

## Variant Modifiers

A variant Modifier tells Tailwind: “Only apply this utility under a certain condition”. That condition could be screen size, user interaction, color scheme, state of the element, etc.

---

## Types of variant modifiers in Tailwind

### 1. Responsive variants

These apply styles at certain screen sizes, they are Tailwind alternatives to CSS media queries.

Common responsive variants are:
* `sm:` small screens
* `md:` medium screens
* `lg:` large screens
* `xl:` extra large screens

Tailwind uses mobile-first responsive variants.

```html
<div class="p-4 md:p-8 lg:p-12">
```

Meaning:

* Default (p-4 in this case) applies to mobile
* `md:p-8` applies at medium screens
* `lg:p-12` applies at large screens


### 2. State variants

These apply styles based on interaction or state.

Examples:
* `hover:bg-gray-100` -> When the user hovers over this element, apply the specified background color
* `focus-visible:outline` -> When the element receives keyboard focus, apply an outline.
* `disabled:opacity-50` -> When this element has a disabled state, apply the specified opacity 

### 3. Theme and environment variants

These depend on user or system settings.

Examples:
* `dark:bg-black` -> When dark mode is active, apply a black background.
* `motion-safe:animate-spin` -> If the user prefers reduced motion, the animation will not run.

### 4. Structural variants

These depend on the element’s position or relationship.

* `first:mt-0` -> If this element is the first child inside its parent, remove the top margin
* `last:border-none` -> If this element is the last child inside its parent, remove the border
* `group-hover:opacity-100` -> When a parent element with the class group is hovered, apply full opacity to this child

---

## Stacking states and responsiveness

You can combine modifiers.

```html
<button class="bg-primary hover:bg-primary/90 md:hover:bg-primary">
```

This allows precise control without writing custom selectors.

---

N/B: Tailwind does not handle time-based or scroll-based animations. These should be handled in JavaScript and will be covered later.

---

---

### Lesson goal

By the end of this chapter, you will understand how to prepare a website for real users and real environments by making it accessible, discoverable, and ready to ship.

---

## Building for everyone

Like we mentioned in previous chapters, finished websites should work for different people and different devices.

Accessibility, SEO, and performance are very important parts of every website and we're going to be discssuing them in this chapter.

---

## Accessibility basics

Accessibility means people can use your site regardless of how they interact with it.

Some users use a mouse.
Some use a keyboard.
Some use screen readers.

Your job is to support all of them.

---

## Keyboard-only usability

Every interactive element must be usable with a keyboard alone.

You should be able to tab through links and buttons, activate buttons with Enter or Space and clearly see which element is focused. If you cannot use your site without a mouse, it is not accessible.

---

## Logical focus order

Focus should move in a predictable order.

Usually this means:

* Top to bottom
* Left to right
* Or following the visual layout

Avoid jumping focus around the page. If you have a good HTML structure, then usually you should already have good focus order.

---

## Visible focus styles

Focused elements must be clearly visible.

Never remove focus outlines unless you replace them with something equally clear.

```css
:focus-visible {
  outline: 2px solid blue;
}
```

This helps keyboard users know where they are on the page.

---

## Color contrast (WCAG)

Text must be readable.

Low contrast makes content hard or impossible to read for many users.

* Light text on light backgrounds is bad
* Dark text on dark backgrounds is bad

Use contrast checkers to ensure your text meets WCAG guidelines.

---

## ARIA landmarks

ARIA landmarks are accessibility features added to HTML elements to define major sections pf a webpage. They help screen readers and keyboard users understand page structure.

You can achieve ARIA landmarks with semantic HTML5 tags like: header, banner, nav, main, footer; or ARIA attributes like: `role="banner" on elements.

When you use proper HTML elements, ARIA is often unnecessary.
Use ARIA only when native HTML cannot express the meaning.

---

## SEO essentials

SEO means Search Engine Optimization. It is the practice of improving a website's visibility in organic(unpaid) search engine results in order to attract more users. Search engines read the structure of a webpage(HTML) so, good SEO starts with good HTML.

---

## Meta description

The meta description explains your page to search engines and users.

```html
<meta name="description" content="A beginner-friendly guide to HTML, CSS, and modern frontend development.">
```

This text often appears in search results.

---

## Open Graph tags

Open Graph(OG) tags control how your site appears when shared. They define title, description and image. This matters for links shared on social platforms.

---

## Performance fundamentals

Fast sites feel better and rank better. Performance is part of user experience (UX).

---

## Image optimization

Images should be properly sized, compressed and not larger than needed. Large images slow pages down. Image optmization in CSS can be achieved by implementing responsive scaling, responsive bckground images, lazy loading, etc.

Lazy loading means deferring the loading of images that aren't yet showing on the screen until the user scrolls near them, which helps reduce initial pqge load. You can implement this by using the `loading="lazy"`HTML attribute.

---

## Font performance

Fonts can block rendering if handled poorly.

Use:

* preconnect for font providers
* font-display: swap to avoid invisible text

This ensures text appears quickly.

---

## Avoiding layout shift

Layout shift happens when content jumps after loading. A great example is ads pushing down content in a website after loading

Common causes are:

* Images without width and height
* Fonts loading late
* Ads or embeds pushing content

Always reserve space for content before it loads.

---

## Build artifacts

Shipping a site means preparing files beyond HTML and CSS.

---

## Sitemap

A sitemap helps search engines understand your site structure. It lists all important pages in one place.

---

## Favicons

Favicons help users recognize your site in tabs and bookmarks. They also show completeness and professionalism.

---


---



---

# Chapter X — <Title>

## Personal Reasoning
(Why this topic exists. Write like a developer talking to another developer.)

## Overall Learning
- Bullet list of what the reader will be able to do

## Explanation
(The actual teaching. Step-by-step, with reasoning, with why's.)

## Code Walkthrough
(Explain the important lines, not every line.)

## Project Milestone
(Describe what the site looks like now.)

## Section Done
(What should now be visible or working.)

## Keyboard Walkthrough
(What a real person should press and what they should notice.)

## Contrast Check
(Describe whether the page is readable and what feels off.)

## Ship Note
(What to commit and what to verify before moving on.)


---

