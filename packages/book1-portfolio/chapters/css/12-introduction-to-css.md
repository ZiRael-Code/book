# Chapter 12 — The First Coat of Paint (Intro to CSS)

**Goal of This Chapter:**

Understand what CSS is, connect it to your HTML portfolio, and apply your first clean visual design.

Up to now, we built structure.

Now we give that structure a visual identity.

---

## Table of Contents

1. Prerequisites
2. Part 1 — What CSS Really Is
3. Part 2 — Connecting CSS to HTML
4. Part 3 — CSS Selectors (Targeting Elements)
5. Part 4 — The Cascade & Specificity (Without Fear)
6. Part 5 — Creating CSS Architecture
7. Applying Our First Styles
8. Project Milestone — Base Design Applied
9. Completed Code

---

## 1. Prerequisites

Before starting CSS, your portfolio should include:

From HTML structure chapters:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<footer>`

From earlier work:

- a working contact form
- a skills table

If those exist, you're ready to paint.

---

### Friction Moment — "My Page Works But Looks Ugly"

This is normal.

Raw HTML is meant to be readable — not beautiful.

Every real website looks plain before CSS.

**Design always comes after structure.**

---

## Part 1 — What CSS Really Is

CSS stands for **Cascading Style Sheets**.

HTML answers:

> What is this content?

CSS answers:

> How should this content look?

HTML creates structure.

CSS controls presentation.

Example:

HTML:

```
<h1>John Doe</h1>
```

CSS:

```
h1 {
  color: blue;
}
```

The text stays an `<h1>`.

Only the appearance changes.

---

### Concept Anchor — Skeleton vs Clothing

HTML is the skeleton.

CSS is the clothing.

You don't change bones to change outfits.

---

### Micro Recap

HTML = meaning

CSS = visuals

---

## Part 2 — Connecting CSS to HTML

Professional projects use **external CSS files**.

Never style everything inline.

### Step 1 — Create a Styles Folder

Inside your project:

```
book1-portfolio/
  styles/
```

Inside `styles/`, create:

```
base.css
```

### Step 2 — Link It in `<head>`

Open your HTML file.

Add inside `<head>`:

```
<link rel="stylesheet" href="styles/base.css">
```

Place it below your `<title>`.

Save.

Refresh.

**Nothing changes yet.**

That means it's connected correctly.

---

### Micro Recap

HTML now knows where your CSS lives.

---

## Part 3 — CSS Selectors (Targeting Elements)

Selectors tell CSS what to style.

### Element Selector

Targets all elements of that type:

```
body {
  background: #f8fafc;
}
```

This styles the whole page.

### Class Selector

Targets elements with a class:

HTML:

```
<p class="subtitle">Full-Stack Developer</p>
```

CSS:

```
.subtitle {
  color: #6b7280;
}
```

### ID Selector

Targets one specific element:

HTML:

```
<h1 id="hero-title">John Doe</h1>
```

CSS:

```
#hero-title {
  font-size: 48px;
}
```

### Best Practice

Use classes for styling.

IDs are strong and better for structure and scripting.

---

### Micro Recap

- `element` → all of that tag
- `.class` → grouped styling
- `#id` → one unique element

---

## Part 4 — The Cascade & Specificity (Without Fear)

CSS rules can conflict.

When they do:

- More specific selector wins
- If equal, later rule wins

Example:

```
p {
  color: black;
}

.subtitle {
  color: gray;
}
```

The `subtitle` becomes gray.

Because class > element.

### Avoid `!important`

Never write:

```
color: red !important;
```

If you need it, your CSS structure is wrong.

**Good CSS doesn't fight itself.**

---

### Concept Anchor — Court System

Specific selectors are like higher courts.

They overrule lower ones.

---

### Micro Recap

Specificity controls which style wins.

---

## Part 5 — Creating CSS Architecture

Real projects start with base styles.

Open `base.css` and add:

```
:root {
  --color-bg: #f8fafc;
  --color-text: #0f172a;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.5;
}
```

What this does:

- `:root` stores design variables
- `*` fixes box sizing globally
- `body` sets base typography and colors

This is a professional starting point.

---

## Applying Our First Styles

Now we improve key parts of the page.

### Navigation (from HTML Lists)

Add:

```
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: inherit;
}
```

This:

- removes bullets
- places links in a row
- keeps colors consistent

### Main Layout

```
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}
```

This centers your content.

### Footer

```
footer {
  text-align: center;
  padding: 20px;
  background: #111827;
  color: white;
}
```

### Form Styling

```
input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font: inherit;
}

button {
  padding: 10px 16px;
  background: #2f7cf6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
```

Your form now looks clean and usable.

---

### Friction Moment — "Wow, Small CSS Changed Everything"

**Exactly.**

Good design is mostly small, intentional rules.

---

## Project Milestone — Base Design Applied

You now have:

- a real color system
- readable typography
- centered layout
- styled navigation
- clean forms
- a strong footer

**Your portfolio finally looks like a website.**

---

## Completed Code (`base.css`)

```
:root {
  --color-bg: #f8fafc;
  --color-text: #0f172a;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.5;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: inherit;
}

main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font: inherit;
}

button {
  padding: 10px 16px;
  background: #2f7cf6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 20px;
  background: #111827;
  color: white;
}
```

---

## Final Reflection

CSS didn't change **what** your site is.

It changed **how** your site feels.

Structure first.

Style second.

**That order is what professionals follow.**

---

### Next Chapter:

The Laws of Space — mastering the Box Model.

This is where spacing becomes intentional and predictable.

**You've officially crossed from raw HTML into real web design.**

**Ready for Chapter 13?**