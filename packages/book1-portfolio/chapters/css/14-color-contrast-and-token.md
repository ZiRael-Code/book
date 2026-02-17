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

- generous spacing
- clean layout
- structured sections
- styled form and table

But colors are still basic.

Right now, your site works.

It doesn't yet feel designed.

That changes here.

---

### Friction Moment — "Why Does My Site Look Messy Even Though It Works?"

Most beginners reach this point and think:

**"I followed all the steps… why does it still feel amateur?"**

The answer is almost always color chaos.

Random colors break visual harmony.

Systems create professionalism.

---

## Part 1 — Why Random Colors Fail

Beginners often write CSS like this:

```
{
  color: blue;
  background: red;
  border: green;
}
```

Nothing is connected.

Every decision is isolated.

This causes:

- inconsistency
- visual noise
- painful redesigns later

Professional interfaces use **design tokens**.

Tokens are shared values used everywhere.

Change once.

Update everywhere.

---

### Concept Anchor — Paint Buckets vs Paint Splashes

Random colors are like splashing paint.

Design systems are like labeled paint buckets:

- Primary
- Text
- Background
- Accent

You always know which bucket to use.

---

### Micro Recap

Random colors = chaos

Color systems = control

---

## Part 2 — Design Tokens with `:root`

CSS variables live inside `:root`.

Open base.css.

Add:

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

Now instead of hardcoding colors, you reference tokens:

```
body {
  background: var(--color-bg);
  color: var(--color-text);
}
```

Your design is now centralized.

---

### Why This Matters

When you redesign later:

Change values once.

The whole site updates.

That's real-world CSS architecture.

---

### Micro Recap

Design tokens:

- live in `:root`
- are reused everywhere
- make redesign painless

---

## Part 3 — Semantic Color Naming

Notice what we didn't do:

❌ `--blue`

❌ `--dark-blue`

We did:

✅ `--color-primary`

✅ `--color-muted`

Why?

Because color meaning matters more than color value.

If branding changes:

- primary might become green
- muted might become brown

The names still make sense.

This is how real design systems work.

---

### Concept Anchor — Job Titles vs Names

You don't call someone "Bob" in code.

You call them "manager."

The person can change.

The role stays.

Color tokens work the same way.

---

## Part 4 — Hover, Focus & Disabled States

Interactive elements must respond.

From earlier chapters, you had:

```
button {
  background: #2f7cf6;
}
```

Now upgrade it:

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

Now buttons feel alive.

---

### Focus States (Accessibility Critical)

Forms must show focus.

Add:

```
input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(47, 124, 246, 0.2);
}
```

**Never remove focus without replacing it.**

Keyboard users rely on it.

---

### Micro Recap

Good UI always includes:

- hover feedback
- focus visibility

---

## Part 5 — Contrast Basics (Beginner Friendly)

Contrast = readability.

Bad contrast:

- light text on light background
- dark text on dark background

Good contrast:

- dark text on light background
- light text on dark background

Your system uses:

- light background
- near-black text
- strong primary color

This passes basic accessibility expectations.

---

### Real Developer Rule

If you have to squint — contrast is bad.

---

## Applying the Palette to Our Portfolio

Now let's spread tokens across the site.

### Navigation Links

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

### Section Panels

```
#skills {
  background: var(--color-panel);
}
```

Creates visual grouping.

### Table Headers

```
th {
  background: var(--color-panel);
}
```

Improves data clarity.

### Global Links

```
a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

Consistency everywhere.

---

## Project Milestone — Hero & CTA Styled

You now have:

- a real color system
- consistent branding
- interactive feedback
- accessible focus states
- visual hierarchy

Your site finally feels designed.

Not random.

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

## Final Reflection

Color isn't decoration.

**It's a system.**

Once you stop choosing colors randomly and start designing with tokens, everything becomes cleaner and easier.

---

### Next Chapter:

The Voice of the Page — Typography.

We'll control rhythm, hierarchy, and readability next.

Your portfolio now has:

- structure ✔
- spacing ✔
- color identity ✔

Typography is the final polish.

---

**Ready for Chapter 15?**