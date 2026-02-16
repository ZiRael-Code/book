# Chapter 9 — The Architectural Plan

**Goal of This Chapter:**  
Replace generic containers with semantic layout elements and build a full HTML portfolio skeleton.

This is a structural transformation chapter.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Page Landmarks
3. Part 2 — `<header>` and `<nav>`
4. Part 3 — `<main>` and `<section>`
5. Part 4 — `<footer>`
6. Part 5 — The Skip Link
7. Part 6 — Metadata Basics
8. Project Milestone — Full Portfolio Skeleton
9. Completed Code

---

## 1. Prerequisites

Your current structure still uses `<div>` for layout.

We are now upgrading that structure.

---

# Part 1 — Page Landmarks

Modern HTML provides landmark elements.

They define major areas of a page:

- `<header>` — introductory content
- `<nav>` — navigation links
- `<main>` — primary content
- `<section>` — grouped content areas
- `<footer>` — closing or supplemental content

These elements improve:

- accessibility
- SEO
- structure clarity

We are moving from grouping to architecture.

---

# Part 2 — `<header>` and `<nav>`

## `<header>`

Represents introductory content.

It often contains:

- logo
- site title
- navigation

It does NOT mean “top of page only.”
It means “introductory content for a section or page.”

---

## `<nav>`

Represents a navigation section.

Used for:

- primary menus
- secondary menus
- table of contents

Now let’s replace our navigation `<div>`.

Replace this:

```html
<div>
  <ul>
    <li><a href="#top">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</div>
```
With this:

```html
<header id="top">
  <nav>
    <ul>
      <li><a href="#top">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

Now navigation is clearly identified.

---

## Part 3 — `<main>` and `<section>`

### `<main>`

Represents the primary content of the page.

There should only be one `<main>` per page.

It does not include navigation, header, or footer.

### `<section>`

Represents a thematic grouping of content.

Each section should have a heading.

We now wrap our Hero content inside `<main>` and `<section>`.

Replace your Hero `<div>` with:

```
<main id="main">
  <section aria-labelledby="hero-title">
    <h1 id="hero-title">John Doe</h1>

    <p class="subtitle">
      <strong>Full-Stack Developer</strong>
    </p>

    <p>
      I build <em>clean</em>, modern, and user-focused web experiences
      with a strong focus on <mark>performance and accessibility</mark>.
    </p>

    <p>
      <small>Currently available for freelance projects.</small>
    </p>

    <a href="#contact">Contact Me</a>

    <figure>
      <img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
      <figcaption>John Doe — Full-Stack Developer</figcaption>
    </figure>
  </section>
</main>
```

Now:

- `<main>` defines primary content.
- `<section>` groups the Hero.
- `aria-labelledby` connects the section to its heading.

This improves accessibility.

---

## Part 4 — `<footer>`

The footer represents closing content.

Common uses:

- copyright
- contact info
- legal notes

Add this below `<main>`:

```
<footer>
  <p>© 2025 John Doe</p>
</footer>
```

Simple.

Clear.

Structured.

---

## Part 5 — The Skip Link

A skip link improves accessibility.

It allows keyboard users to skip navigation.

Add this directly inside `<body>`, above `<header>`:

```
<a href="#main">Skip to main content</a>
```

This allows users to jump directly to `<main>`.

Small addition.

Huge accessibility improvement.

---

## Part 6 — Metadata Basics

In earlier chapters, we included:

```
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>John Doe — Developer Portfolio</title>
```

These are foundational metadata elements.

They:

- define encoding
- control responsive scaling
- set browser tab title

Metadata lives inside `<head>`.

It never appears visually.

---

## Project Milestone — Full Portfolio Skeleton

You now have:

- Skip link
- Semantic `<header>`
- Proper `<nav>`
- One `<main>`
- A structured `<section>`
- A `<footer>`

Your page now has real architectural meaning.

**This is professional HTML structure.**

---

## Completed Code

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John Doe — Developer Portfolio</title>
  </head>

  <body>

    <a href="#main">Skip to main content</a>

    <header id="top">
      <nav>
        <ul>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main id="main">
      <section aria-labelledby="hero-title">
        <h1 id="hero-title">John Doe</h1>

        <p class="subtitle">
          <strong>Full-Stack Developer</strong>
        </p>

        <p>
          I build <em>clean</em>, modern, and user-focused web experiences
          with a strong focus on <mark>performance and accessibility</mark>.
        </p>

        <p>
          <small>Currently available for freelance projects.</small>
        </p>

        <a href="#contact">Contact Me</a>

        <figure>
          <img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
          <figcaption>John Doe — Full-Stack Developer</figcaption>
        </figure>
      </section>
    </main>

    <footer>
      <p>© 2025 John Doe</p>
    </footer>

  </body>
</html>
```

---

## Next Chapter:

Forms — building a proper contact form inside the Contact section.

**Your portfolio now has a real semantic skeleton.**

---

*This is the turning point of Book 1.*

**Ready for Chapter 10 (Forms)?**