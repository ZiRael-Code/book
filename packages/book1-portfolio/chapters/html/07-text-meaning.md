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

### Friction Moment — "Why Not Just Make It Bold in CSS?"

Most beginners think:

**"If I can bold this later with CSS, why use special tags now?"**

Because bold is visual.

HTML is semantic.

One is makeup.

The other is meaning.

---

## Part 1 — Meaning vs Appearance

HTML is about **meaning first**.

Not about how things look.

Yes, browsers show:

- `<strong>` as bold
- `<em>` as italic

But that is just default styling.

Their real job is to communicate **importance** and **emphasis**.

To:

- screen readers
- search engines
- accessibility tools

**Meaning comes before style.**

---

### Concept Anchor — Voice vs Highlighter

Imagine reading out loud.

- `<strong>` is when your voice becomes firm
- `<em>` is when you stress a word

It's about tone — not typography.

---

### Micro Recap

HTML elements describe **what** something is, not how it looks.

---

## Part 2 — `<strong>`

`<strong>` signals **strong importance**.

Example:

```html
<p>I am a <strong>Full-Stack Developer</strong>.</p>
```

This tells assistive tech:

**"This phrase matters."**

Use it for:

- roles
- warnings
- key facts

Don't use it everywhere.

**When everything is important, nothing is.**

---

### Common Beginner Mistake

Wrapping entire paragraphs in `<strong>`.

That defeats its purpose.

---

### Micro Recap

`<strong>` = critical importance

---

## Part 3 — `<em>`

`<em>` adds **emphasis**.

Example:

```html
<p>I focus on <em>clean architecture</em> and performance.</p>
```

It represents natural speech stress.

Lighter than `<strong>`.

Think:

- `<strong>` → importance
- `<em>` → emphasis

---

### Micro Recap

`<em>` highlights what you'd stress when speaking.

---

## Part 4 — `<mark>`

`<mark>` highlights content as **especially relevant**.

Example:

```html
<p>I specialize in <mark>accessible web design</mark>.</p>
```

It means:

**"This part deserves attention in this context."**

Use sparingly.

Overuse turns pages into noise.

---

### Concept Anchor — Digital Highlighter

`<mark>` is literally a highlighter pen.

You don't highlight entire textbooks.

You highlight what matters.

---

## Part 5 — `<small>`

`<small>` represents **side information**.

Example:

```html
<p><small>Currently available for freelance projects.</small></p>
```

It communicates:

- fine print
- notes
- secondary details

Not just smaller text — **secondary meaning**.

---

### Micro Recap

`<small>` = supporting information

---

## Applying This to the Portfolio

Now we upgrade your Hero content.

Replace it with:

```html
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

Save.

Refresh.

Small visual changes.

**Big semantic improvements.**

---

### Why This Matters in the Real World

Accessibility audits care about this.

SEO cares about this.

Professional codebases expect this.

**Semantic HTML is what separates beginners from developers.**

---

### Micro Recap

You now used:

- `<strong>` for importance
- `<em>` for emphasis
- `<mark>` for relevance
- `<small>` for secondary info

---

## Project Milestone — Readable Content Sections

Your Hero section now communicates:

- who you are
- what you do
- what you focus on
- your availability
- a clear call-to-action

**This is structured content — not just text.**

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

## Final Reflection

You're no longer just placing words on a page.

**You're giving them meaning.**

That's what the web is built on.

---

### Next Chapter:

Why Semantics Exist.

We'll zoom out from small elements to full page structure.

**You're about to level up.**