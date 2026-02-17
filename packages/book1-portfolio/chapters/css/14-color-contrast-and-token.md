# Chapter 14 — Color, Contrast & Tokens

**Goal of This Chapter:**  
Create a consistent color system using CSS variables and apply accessible contrast to your portfolio.

This is where your site starts to feel intentional.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Why Random Colors Fail
3. Part 2 — Design Tokens with `:root`
4. Part 3 — Semantic Color Naming
5. Part 4 — Hover, Focus & Disabled States
6. Part 5 — Contrast Basics (Beginner-Friendly WCAG Intro)
7. Applying the Palette to Our Portfolio
8. Project Milestone — Hero & CTA Styled
9. Completed Code

---

## 1. Prerequisites

From Chapter 13, your site now has:

- Generous spacing
- Clean layout
- Structured sections
- Styled form and table

But colors are still basic.

We now systemize color.

---

# Part 1 — Why Random Colors Fail

Many beginners do this:

```css
color: blue;
background: red;
border: green;
```

This creates chaos.

Professional design systems use tokens.

Tokens create:

- Consistency
- Scalability
- Easier maintenance

We define colors once.

We reuse them everywhere.

---

## Part 2 — Design Tokens with :root

Open base.css.

Update your :root section:

```
:root {
  --color-bg: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #6b7280;
  --color-line: #e5e7eb;

  --color-primary: #2f7cf6;
  --color-primary-dark: #1f5fd1;

  --color-panel: #f3f4f6;
}

```

Now instead of hardcoding values, we reference variables.

Example:

```
body {
  background: var(--color-bg);
  color: var(--color-text);
}

```

This makes your design flexible.

---

## Part 3 — Semantic Color Naming

Notice we did not name colors:

- --blue
- --dark-blue

We named them:

- --color-primary
- --color-muted

Why?

Because if branding changes later, we update one place.

The meaning stays.

The value changes.

That is system thinking.

---

## Part 4 — Hover, Focus & Disabled States

Buttons should not stay static.

From Chapter 12, we styled:

```
button {
  background: #2f7cf6;
}

```

Now update it:

```
button {
  padding: 10px 16px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover {
  background: var(--color-primary-dark);
}

```

Now the button responds visually.

### Focus States (Important for Accessibility)

From HTML Chapter 10, we built a form.

Improve focus:

```
input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(47, 124, 246, 0.2);
}

```

This helps keyboard users.

**Never remove focus without replacing it.**

---

## Part 5 — Contrast Basics (Beginner-Friendly)

Contrast means:

**Text must be readable against its background.**

Bad example:

Light gray text on white background.

Good rule:

- Dark text on light background.
- Light text on dark background.

Our combination:

- Background → light
- Text → near-black

This ensures readability.

For primary button:

- Blue background
- White text

This passes basic accessibility guidelines.

---

## Applying the Palette to Our Portfolio

Now we update key areas.

### Style Navigation

```
nav a {
  color: var(--color-text);
  opacity: 0.85;
  transition: opacity 0.2s ease;
}

nav a:hover {
  opacity: 1;
}

```

### Style Section Background Panels

Example for Skills section:

```
#skills {
  background: var(--color-panel);
}

```

This creates visual separation.

### Improve Table Header

```
th {
  background: var(--color-panel);
}

```

### Style Links Globally

```
a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

```

This keeps links consistent.

---

## Project Milestone — Hero & CTA Styled

You now have:

- A reusable color system
- Primary brand color
- Hover states
- Focus states
- Section separation
- Consistent link styling

Your portfolio now feels cohesive.

Not random.

Intentional.

---

## Completed Code (Color Additions)

```
:root {
  --color-bg: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #6b7280;
  --color-line: #e5e7eb;

  --color-primary: #2f7cf6;
  --color-primary-dark: #1f5fd1;

  --color-panel: #f3f4f6;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  padding: 10px 16px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover {
  background: var(--color-primary-dark);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(47, 124, 246, 0.2);
}

#skills {
  background: var(--color-panel);
}

th {
  background: var(--color-panel);
}

```

---

### Next Chapter:

The Voice of the Page — Typography.

We now control how the page speaks.

---

Your portfolio now has structure, spacing, and identity.

**Ready for Chapter 15?**