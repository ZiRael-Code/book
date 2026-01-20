# Chapter 3 — The Architectural Plan: Semantic HTML

## Personal Reasoning
A pile becomes a house with a plan.

You can stack bricks anywhere, but without structure, it is just a pile.  
The same thing happens with HTML.

So far, we have written valid HTML. The browser can render it, and users can read it.  
But the page still does not explain *what each part is for*.

This chapter is about giving the page a plan.

Semantic HTML helps the browser, assistive technology, and search engines understand the role of each part of the page. We are no longer just placing content — we are describing meaning.

---

## Overall Learning
By the end of this chapter, you will understand:

- Why semantic HTML matters
- How semantics improve accessibility and SEO
- The purpose of core semantic tags:
    - `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
    - `<article>`, `<aside>`
- How to add a skip link pointing to `#main`
- Where meta description and Open Graph placeholders live
- How to apply semantic structure to the portfolio page

---

## Explanation
Semantic HTML uses elements that describe **what content is**, not how it looks.

A `<div>` only groups content.  
A semantic element explains the role of that content.

For example:
- A `<header>` represents introductory content
- A `<nav>` represents navigation
- `<main>` represents the primary content of the page
- `<footer>` represents closing or supporting information

These elements do not change appearance by default.  
They change **meaning**.

This meaning is used by:
- Screen readers to navigate the page
- Search engines to understand structure
- Browsers to create landmarks

---

### Core semantic elements

`<header>`  
Used for introductory content. This often includes a name, title, or navigation.

`<nav>`  
Used to group navigation links. It tells the browser, “these links help users move around the site.”

`<main>`  
Represents the main content of the page. There should only be one `<main>` element per page.

`<section>`  
Used to group related content under a common theme.

`<footer>`  
Used for closing content such as contact details, copyright, or secondary links.

`<article>`  
Represents a self-contained piece of content that could stand on its own.

`<aside>`  
Used for content related to the main content but not part of it, such as side notes or supplementary information.

---

### Why semantics matter

Without semantics, assistive technology has to guess.

With semantics:
- Screen readers can jump directly to navigation or main content
- Keyboard users can skip repeated sections
- Search engines better understand page hierarchy

Semantic HTML turns a readable page into an understandable one.

---

### Skip links

A skip link allows keyboard and screen reader users to bypass repeated content, such as navigation.

It is placed at the top of the page and points to the main content.

```html
<a href="#main">Skip to main content</a>
```

This link becomes visible when focused and improves accessibility without changing layout.

---

### Metadata placeholders

Metadata lives inside the `<head>` element.

Even if we do not fill these values yet, we prepare space for them.

```html
<meta name="description" content="Personal portfolio website" />

<meta property="og:title" content="Developer Portfolio" />
<meta property="og:description" content="A personal portfolio showcasing projects and skills" />
```

These help with search previews and social sharing later.

---

## Code Walkthrough
We now apply semantic structure to our existing page.

First, we add a skip link at the top of the page.

```html
<a href="#main">Skip to main content</a>
```

Next, we wrap the hero content inside a `<section>` and place it inside a `<header>`.

```html
<header>
  <section>
    <h1>Jane Doe</h1>
    <p>Frontend Developer</p>
  </section>
</header>
```

Then, we add a `<nav>` for navigation links.

```html
<nav>
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

We introduce `<main>` as the container for the page’s primary content.

```html
<main id="main">
</main>
```

Inside `<main>`, we add empty sections for future content.

```html
<section id="about"></section>
<section id="projects"></section>
<section id="contact"></section>
```

Finally, we add a basic `<footer>`.

```html
<footer>
  <p>© Jane Doe</p>
</footer>
```

At this stage, the sections may be empty. That is intentional.  
We are defining structure before filling in content.

---

## Project Milestone
Your page now has a clear semantic layout.

You have:
- A structured header and navigation
- A main content area with defined sections
- A footer ready for supporting information
- Accessibility improvements through skip links
- Metadata placeholders prepared for future use

The page now has a plan.

---

## Section Done
Your HTML document is no longer a flat list of elements.

It now clearly communicates:
- what is navigation
- what is main content
- how the page is organized

---

## Keyboard Walkthrough
Press the `Tab` key when the page loads.

The skip link should receive focus first.  
Press `Enter` to jump directly to the main content.

Continue tabbing to move through navigation links and sections.

---

## Contrast Check
At this stage, styling is minimal.

Make sure text remains readable and that focus indicators are visible when navigating with the keyboard.

We will refine visuals in later chapters.

---

## Ship Note
Before moving on:
- Confirm there is only one `<main>` element
- Confirm the skip link points to `#main`
- Confirm semantic elements wrap the correct content
- Commit your work with a message like:

