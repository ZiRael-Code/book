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

Up to now, your layout has relied on generic `<div>` containers.

Everything worked visually.

**Now we're upgrading the page into a real document.**

---

### Friction Moment — "But Divs Were Fine…"

Yes — they were fine for learning grouping.

But real websites are not piles of boxes.

They are structured documents with meaning.

**This chapter is where you stop writing beginner HTML and start writing professional HTML.**

---

## Part 1 — Page Landmarks

Modern HTML includes landmark elements that describe major regions of a page:

- `<header>` — introductory content
- `<nav>` — navigation links
- `<main>` — primary content
- `<section>` — grouped thematic content
- `<footer>` — closing or supplemental content

These landmarks improve:

- accessibility navigation
- search engine understanding
- code clarity
- long-term maintainability

**We are moving from grouping to architecture.**

---

### Concept Anchor — Blueprint vs Cardboard Boxes

Before, you stacked boxes.

Now, you're laying out rooms.

One approach works temporarily.

**The other scales forever.**

---

## Part 2 — `<header>` and `<nav>`

### `<header>`

`<header>` represents introductory content for a page or section.

It often includes:

- branding
- titles
- navigation

It doesn't just mean "top of the page."

It means **"this introduces what follows."**

---

### `<nav>`

`<nav>` clearly identifies navigation regions.

Use it for:

- main menus
- secondary menus
- tables of contents

**Now let's replace our generic navigation container.**

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

Now assistive technologies and browsers know:

**"This area is navigation."**

---

### Micro Recap

- `<header>` introduces content.
- `<nav>` defines navigation.

---

## Part 3 — `<main>` and `<section>`

### `<main>`

`<main>` holds the **primary content** of the page.

Rules:

- Only one per page
- No navigation inside it
- No footer inside it

It represents **what the page is actually about**.

---

### `<section>`

`<section>` groups related content around a theme.

Each section should have a heading.

**We'll now wrap the Hero content properly.**

Replace your Hero `<div>` with:

```html
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

**Why `aria-labelledby`?**

It connects the section to its heading for screen readers.

This creates clearer document hierarchy.

---

### Why This Matters

Your content now has:

- a main purpose
- a clear section theme
- accessible relationships

**This is how modern sites are structured.**

---

## Part 4 — `<footer>`

`<footer>` represents closing or supplemental content.

Common uses:

- copyright
- legal text
- extra links

Add below `<main>`:

```html
<footer>
  <p>© 2025 John Doe</p>
</footer>

```

Simple.

Meaningful.

---

## Part 5 — The Skip Link

Skip links improve keyboard accessibility.

Add this at the top of `<body>`:

```html
<a href="#main">Skip to main content</a>
```

This lets users jump past navigation straight to content.

Small detail.

**Huge usability win.**

---

### Real Developer Scenario

Many government and enterprise sites require skip links by law.

**Now you know why.**

---

## Part 6 — Metadata Basics

Inside `<head>` we already have:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>John Doe — Developer Portfolio</title>

```

These ensure:

- correct character rendering
- responsive scaling
- meaningful browser titles

Metadata never appears visually — but affects everything.

---

## Project Milestone — Full Portfolio Skeleton

You now have:

- accessibility skip link
- semantic header + nav
- a single main content region
- a structured section
- a footer

**Your page is now a real HTML document — not just a layout.**

This is the foundation used by professional sites.

---

## Completed Code

```html
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

## Final Reflection

**You've just crossed a major line.**

You're no longer arranging content.

**You're designing document architecture.**

This is what separates HTML beginners from real front-end developers.

---

### Next Chapter:

Forms — building a proper contact section.

**Your semantic skeleton is ready to receive real interaction.**

*This is the turning point of Book 1.*