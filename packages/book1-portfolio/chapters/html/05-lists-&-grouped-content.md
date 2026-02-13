# Chapter 5 — Lists & Grouped Content

**Goal of This Chapter:**  
Understand how lists work in HTML and use them to build a real navigation structure for your portfolio.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Why Lists Exist
3. Part 2 — Unordered Lists (`<ul>`)
4. Part 3 — Ordered Lists (`<ol>`)
5. Part 4 — List Items (`<li>`)
6. Part 5 — Real Navigation Structure
7. Project Milestone — Navigation Appears
8. Completed Code

---

## 1. Prerequisites

From Chapter 4, your Hero section should look like this:

```html
<body>
  <div>
    <h1 id="hero-title">John Doe</h1>
    <p class="subtitle">Full-Stack Developer</p>
    <p>I build clean, modern, and user-focused web experiences.</p>

    <a href="#contact">Contact Me</a>

    <img src="assets/profile.jpg" alt="Portrait of John Doe">
  </div>
</body>
```

# Chapter 5 — Lists & Navigation: Grouping Links

**We will now introduce navigation above the Hero.**

---

## Part 1 — Why Lists Exist

Lists represent **grouped items**.

They are used for:

- navigation menus
- feature lists
- steps
- collections of links
- grouped data

If you have multiple related items, **use a list**.

Navigation menus are not random links.

They are **grouped links**.

Therefore, they should use a list.

---

## Part 2 — Unordered Lists (`<ul>`)

An unordered list is used when **order does not matter**.

Structure:

```
<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>
```

`<ul>` means “unordered list.”
`<li>` means “list item.”

The browser displays bullet points by default.

---

## Part 3 — Ordered Lists (`<ol>`)

An ordered list is used when **sequence matters**.

Structure:

```
<ol>
  <li>Step One</li>
  <li>Step Two</li>
</ol>
```

This produces numbered items.

Use `<ol>` when:

- order is important
- ranking matters
- steps must follow sequence

Navigation does NOT need numbers.

So we use `<ul>`.

---

## Part 4 — The `<li>` Element

`<li>` must live inside:

- `<ul>`
- `<ol>`

You cannot place `<li>` directly inside `<body>`.

Incorrect:

```
<li>Home</li>
```

Correct:

```
<ul>
  <li>Home</li>
</ul>
```

** HTML has structural rules.

Follow them. **

---

## Part 5 — Real Navigation Structure

Navigation menus are **collections of links**.

So we combine:

- `<ul>`
- `<li>`
- `<a>`

Example:

```
<ul>
  <li><a href="#top">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
```

Each list item contains a link.

This creates a **structured navigation group**.

---

## Apply This to Your Portfolio

We will now add navigation **above** your Hero section.

Update your `<body>` to:

```
<body>
  <div>
    <ul>
      <li><a href="#top">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <div>
    <h1 id="hero-title">John Doe</h1>
    <p class="subtitle">Full-Stack Developer</p>
    <p>I build clean, modern, and user-focused web experiences.</p>

    <a href="#contact">Contact Me</a>

    <img src="assets/profile.jpg" alt="Portrait of John Doe">
  </div>
</body>
```

Save.

Refresh your browser.

You will see:

- A vertical bullet list
- Then your Hero section

It is not styled yet.

**That is correct.**

Structure comes first.

---

## Why This Matters

Without lists:

- Navigation is just random links.
- Structure becomes unclear.
- Accessibility suffers.

With lists:

- Screen readers recognize grouped navigation.
- Structure becomes predictable.
- The document gains hierarchy.

**We are preparing for semantic structure in later chapters.**

---

## Project Milestone — Navigation Appears

You now have:

- A structured navigation list
- Proper `<ul>` and `<li>` usage
- Links grouped correctly
- A Hero section below navigation

Your portfolio now has **two major areas**:

- Navigation
- Hero

**It is beginning to resemble a real website layout.**

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
    <div>
      <ul>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div>
      <h1 id="hero-title">John Doe</h1>
      <p class="subtitle">Full-Stack Developer</p>
      <p>I build clean, modern, and user-focused web experiences.</p>

      <a href="#contact">Contact Me</a>

      <img src="assets/profile.jpg" alt="Portrait of John Doe">
    </div>
  </body>
</html>
```

---

### Next Chapter:

Images Done Right.

**We’ll refine how images should be handled properly.**

---

*We are slowly shaping the real portfolio skeleton now.*

**Ready for Chapter 6?**