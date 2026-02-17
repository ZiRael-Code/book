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

**We will now introduce navigation above the Hero.**

---

### Friction Moment — "Why Not Just Stack Links?"

Most beginners naturally write:

```html
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

```

It works visually.

**But structurally, it's wrong.**

Those links belong to a group.

HTML has a way to represent groups.

That way is **lists**.

---

## Part 1 — Why Lists Exist

Lists represent **related items**.

They are used for:

- navigation menus
- feature highlights
- steps and instructions
- collections of links
- grouped data

**Anytime multiple things belong together, a list is the correct tool.**

Navigation menus are not random links.

They are a set of related destinations.

**So they should always be built as lists.**

---

### Concept Anchor — Think of a Grocery List

You don't write groceries scattered across a page.

You group them.

```
Milk
Eggs
Bread

```

That's a list.

Navigation is the same idea — just with links.

---

### Why This Matters

Screen readers understand lists as groups.

Search engines understand structure.

Developers understand intent.

Random links = chaos.

Lists = meaning.

---

### Micro Recap

Use lists when:

- items belong together
- content is grouped
- structure matters

---

## Part 2 — Unordered Lists (`<ul>`)

Use `<ul>` when **order does not matter**.

Structure:

```html
<ul>
  <li>Item One</li>
  <li>Item Two</li>
</ul>

```

`<ul>` means unordered list.
`<li>` means list item.

Browsers add bullet points by default.

---

### Common Beginner Confusion

**"Why are there ugly dots?"**

Those dots are not a mistake.

They are default styling.

Later, CSS will remove or redesign them.

For now, they confirm your list is working.

---

### Micro Recap

Use `<ul>` for:

- menus
- groups of equal items
- collections

---

## Part 3 — Ordered Lists (`<ol>`)

Use `<ol>` when **sequence matters**.

Structure:

```html
<ol>
  <li>Step One</li>
  <li>Step Two</li>
</ol>

```

This creates numbers.

Use it for:

- instructions
- rankings
- step-by-step flows

Navigation does not need numbers.

So we use `<ul>` for menus.

---

### Micro Recap

- `<ol>` = order matters
- `<ul>` = order doesn't matter

---

## Part 4 — The `<li>` Element

`<li>` always lives inside:

- `<ul>`
- `<ol>`

**This is invalid:**

```html
<li>Home</li>
```

**This is correct:**

```html
<ul>
  <li>Home</li>
</ul>

```

**HTML has rules.**

Following them keeps structure predictable.

---

### Friction Moment — "But the Browser Shows It Anyway"

Sometimes browsers try to fix bad HTML.

**That doesn't mean it's correct.**

Professional developers don't rely on browser guesses.

---

### Micro Recap

`<li>` must always sit inside a list.

---

## Part 5 — Real Navigation Structure

Navigation is:

- a group
- of links

So we combine:

- `<ul>`
- `<li>`
- `<a>`

Example:

```html
<ul>
  <li><a href="#top">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

```

Each destination becomes:

- one list item
- containing one link

This creates a proper navigation group.

---

### Why This Matters in Real Projects

Frameworks, screen readers, and CSS all expect navigation to be lists.

**This is industry standard.**

---

### Apply This to Your Portfolio

Add navigation above your Hero:

```html
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

Refresh.

You'll see:

- a vertical bullet menu
- then your Hero content

It looks plain.

**That's good.**

Structure first.

Style later.

---

### Real Developer Scenario

When designers hand off layouts, navigation is almost always a list.

If you build it wrong now, everything later becomes harder.

---

### Micro Recap

You now have:

- structured navigation
- grouped links
- clean hierarchy

---

## Project Milestone — Navigation Appears

Your portfolio now contains:

- a navigation area
- a Hero section

**Two clear page regions.**

You are officially building layout architecture.

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
      <p class="subtitle">Full-Stack Developer</p>
      <p>I build clean, modern, and user-focused web experiences.</p>

      <a href="#contact">Contact Me</a>

      <img src="assets/profile.jpg" alt="Portrait of John Doe">
    </div>
  </body>
</html>

```

---

## Final Reflection

Lists are not just for bullets.

They are how HTML understands grouped content.

Once you start using them correctly, your pages become clearer — to browsers, to users, and to other developers.

---

### Next Chapter:

Images Done Right.

We'll refine how images should be used properly and professionally.

**Your portfolio skeleton is now taking real shape.**