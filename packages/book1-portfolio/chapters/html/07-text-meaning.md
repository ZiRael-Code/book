# Chapter 7 — Text Meaning: Strong, Emphasis, Mark, and Small


**Goal of This Chapter:**  
Understand semantic text elements and use them to improve meaning and readability in your portfolio content.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Meaning vs Appearance
3. Part 2 — `<strong>`
4. Part 3 — `<em>`
5. Part 4 — `<mark>`
6. Part 5 — `<small>`
7. Applying This to the Portfolio
8. Project Milestone — Readable Content Sections
9. Completed Code

---

## 1. Prerequisites

From Chapter 6, your Hero section should look like this:

```html
<div>
  <h1 id="hero-title">John Doe</h1>
  <p class="subtitle">Full-Stack Developer</p>
  <p>I build clean, modern, and user-focused web experiences.</p>

  <a href="#contact">Contact Me</a>

  <figure>
    <img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
    <figcaption>John Doe — Full-Stack Developer</figcaption>
  </figure>
</div>
```


**We will now improve the meaning of the text inside this section.**

---

## Part 1 — Meaning vs Appearance

Important concept:

**HTML is about meaning.**

It is *not* about visual styling.

Beginners often think:

- `<strong>` = bold
- `<em>` = italic

That is **not** the real purpose.

These elements communicate **emphasis** and **importance**.

Browsers display them visually by default.

But their real role is **semantic**.

- Screen readers interpret them differently.
- Search engines understand them differently.

**Meaning comes first.**
**Style comes later.**

---

## Part 2 — `<strong>`

`<strong>` indicates **strong importance**.

Example:

```
<p>I am a <strong>Full-Stack Developer</strong>.</p>
```

This tells:

- screen readers: *emphasize this strongly*
- search engines: this phrase matters

It is not just bold text.

It is **important text**.

Use `<strong>` when the content is critical.

**Do not overuse it.**

---

## Part 3 — `<em>`

`<em>` indicates **emphasis**.

Example:

```
<p>I focus on <em>clean architecture</em> and performance.</p>
```

This suggests verbal emphasis.

Screen readers change tone when reading it.

It is lighter than `<strong>`.

Think of:

- `<strong>` → **importance**
- `<em>` → *emphasis*

---

## Part 4 — `<mark>`

`<mark>` highlights text as **relevant**.

Example:

```
<p>I specialize in <mark>accessible web design</mark>.</p>
```

This visually highlights content.

Semantically, it means:

**“This is especially relevant in this context.”**

Use it carefully.
**Do not highlight everything.**

---

## Part 5 — `<small>`

`<small>` represents **side notes** or **fine print**.

Example:

```
<p><small>Available for freelance projects worldwide.</small></p>
```

It is *not* just smaller text.

It represents:

- disclaimers
- secondary information
- supporting notes

---

## Applying This to the Portfolio

We now improve your Hero description.

Update your Hero section to:

```
<div>
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
</div>
```

- Save.

- Refresh your browser.

- Visually, you will notice small changes.

**Structurally and semantically, the page is now stronger.**

---

## Why This Matters

Without semantic text elements:

- Everything is just plain paragraphs.
- Important phrases get lost.
- Accessibility is weaker.

With semantic text:

- Content hierarchy becomes clearer.
- Screen readers communicate emphasis.
- Search engines understand key phrases.

**We are building not just pages.**
**We are building meaningful documents.**

---

## Project Milestone — Readable Content Sections

You now have:

- Structured navigation
- A grouped Hero section
- Proper image handling
- Semantic text emphasis

Your Hero section now communicates:

- Identity
- Role
- Specialization
- Availability
- Call-to-action
- Visual identity

**This is no longer a basic page.**
**It is becoming a real portfolio foundation.**

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
    </div>
  </body>
</html>
```

---

### Next Chapter:

Why Semantics Exist.

**We move from small semantic elements to full page architecture.**

---

*We are now ready to transition from raw structure into semantic layout thinking.*

**Ready for Chapter 8?**