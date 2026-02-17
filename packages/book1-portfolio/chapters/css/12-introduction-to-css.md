# Chapter 12 — The First Coat of Paint (Intro to CSS)

**Goal of This Chapter:**  
Understand what CSS is, connect it to your HTML portfolio, and apply your first clean visual design.

In HTML Chapters 1–11, we built structure.  
Now we give it visual identity.

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

From HTML Chapter 9, your structure should include:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<footer>`

From Chapter 10:
- A working contact form.

From Chapter 11:
- A skills table.

If those are complete, you are ready.

---

# Part 1 — What CSS Really Is

CSS stands for **Cascading Style Sheets**.

HTML answers:
> What is this?

CSS answers:
> How should it look?

HTML provides structure.
CSS provides presentation.

Example:

HTML:
```html
<h1>John Doe</h1>
```

CSS:

```
h1 {
  color: blue;
}

```

CSS does not change meaning.

It changes appearance.

---

## Part 2 — Connecting CSS to HTML

We never write CSS inside HTML for real projects.

We use an external stylesheet.

### Step 1 — Create Folder

Inside your project:

```
book1-portfolio/
  styles/

```

Inside styles, create:

```
base.css
```

### Step 2 — Link CSS in <head>

Open your HTML file.

Inside <head>, add:

```
<link rel="stylesheet" href="styles/base.css">
```

Place it below your `<title>`.

Now your HTML is connected to CSS.

Save.

Refresh.

Nothing changes yet.

That is correct.

---

## Part 3 — CSS Selectors (Targeting Elements)

A selector tells CSS which element to style.

### Element Selector

Targets all elements of a type.

```
body {
  background: #f8fafc;
}

```

This styles the entire page background.

### Class Selector

Targets elements with a class.

HTML (from Chapter 7):

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

Targets a specific element.

HTML (from Chapter 9):

```
<h1 id="hero-title">John Doe</h1>
```

CSS:

```
#hero-title {
  font-size: 48px;
}

```

We prefer classes over IDs for styling.

IDs are stronger in specificity.

---

## Part 4 — The Cascade & Specificity (Without Fear)

CSS stands for Cascading Style Sheets.

If two rules conflict:

The more specific rule wins.

If equal specificity, the later rule wins.

Example:

```
p {
  color: black;
}

.subtitle {
  color: gray;
}

```

The paragraph with class subtitle becomes gray.

Why?

Class selector is more specific than element selector.

### Avoid !important

Do not write:

```
color: red !important;
```

If you need !important, your structure is wrong.

We build clean CSS.

Not forceful CSS.

---

## Part 5 — Creating CSS Architecture

We are building a real project.

So we structure CSS properly.

Inside base.css, start with:

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

Explanation:

- `:root` holds design variables.
- `*` applies box-sizing globally.
- `body` sets base typography and background.

We are starting small.

We will expand later.

### Applying Our First Styles

Now improve structure from HTML Chapters 5 and 9.

#### Style Navigation (HTML Chapter 5)

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

This removes bullets and aligns links horizontally.

#### Style Main Layout (HTML Chapter 9)

Add:

```
main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

```

This centers content.

#### Style Footer (HTML Chapter 9)

```
footer {
  text-align: center;
  padding: 20px;
  background: #111827;
  color: white;
}

```

#### Improve Form (HTML Chapter 10)

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

Now your form looks structured.

---

## Project Milestone — Base Design Applied

You now have:

- Background color
- Base typography
- Centered layout
- Styled navigation
- Styled form
- Styled footer

Your site no longer looks like plain HTML.

This is your first visual layer.

---

## Completed Code (base.css)

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

### Next Chapter:

The Laws of Space — mastering the Box Model.

This is where spacing becomes intentional.

---

We are officially inside CSS territory now.

**Ready for Chapter 13 (Box Model)?**