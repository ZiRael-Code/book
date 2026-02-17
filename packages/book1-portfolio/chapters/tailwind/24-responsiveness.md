# Chapter 24 — Accessibility, SEO & Ship

**Goal of This Chapter:**

Make your portfolio accessible, discoverable, performant, and ready for real-world deployment.

A real developer ships responsibly.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Accessibility Check (Keyboard & Screen Readers)
3. Part 2 — Semantic Structure Review
4. Part 3 — Contrast & Visual Clarity
5. Part 4 — SEO Essentials
6. Part 5 — Performance Basics
7. Part 6 — Preparing for Deployment
8. Project Milestone — Portfolio Complete
9. Final Checklist

---

## 1. Prerequisites

From previous chapters:

- Full semantic HTML structure (Ch. 9)
- Accessible form markup (Ch. 10)
- Proper alt text for images (Ch. 6)
- Clean spacing and contrast (CSS Ch. 13–14)
- Responsive layout (Ch. 20)
- Tailwind interactions (Ch. 23)

Now we audit everything.

---

## Part 1 — Accessibility Check

### Keyboard Navigation Test

Press:

**Tab**

You should be able to:

- Navigate nav links
- Activate buttons
- Reach form fields
- See visible focus states

If focus is invisible, fix it.

Example:

```
class="focus-visible:ring-2 focus-visible:ring-primary"
```

**Never remove focus outlines without replacement.**

### Skip Link (HTML Chapter 9)

Ensure this exists at the top of `<body>`:

```
<a href="#main" class="skip-link">Skip to main content</a>
```

This helps screen reader and keyboard users.

### Form Labels (HTML Chapter 10)

Ensure every input has:

```
<label for="email">Email</label>
<input id="email" type="email">

```

**Do not rely on placeholder as label.**

---

## Part 2 — Semantic Structure Review

Your page should include:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<footer>`

Do not use unnecessary `<div>` where semantic tags exist.

**Screen readers rely on structure.**

---

## Part 3 — Contrast & Visual Clarity

From CSS Chapter 14:

- Dark text on light background
- White text on primary button
- Hover states clearly visible

Quick manual test:

- Lower screen brightness
- Step back slightly

Can you still read everything?

If not, adjust contrast.

---

## Part 4 — SEO Essentials

Inside `<head>` ensure:

```
<title>John Doe — Developer Portfolio</title>

<meta name="description" content="Full-stack developer portfolio showcasing projects and skills.">

<meta property="og:title" content="John Doe — Developer Portfolio">
<meta property="og:description" content="A portfolio showcasing projects and technical expertise.">

```

Why this matters:

- Title appears in search results.
- Description influences click-through.
- Open Graph controls social previews.

### Heading Hierarchy

Ensure:

- One `<h1>`
- Section headings use `<h2>`
- Nested headings use `<h3>`

**Do not skip levels randomly.**

---

## Part 5 — Performance Basics

### Image Optimization

Compress images before uploading.

Use modern formats when possible.

Add:

```
loading="lazy"
```

For non-critical images.

### Avoid Layout Shift (CLS)

If images do not have dimensions,

layout jumps when they load.

Fix by adding:

```
<img src="..." width="400" height="250" alt="">
```

This prevents unexpected shifting.

### Font Optimization

Already added:

```
<link rel="preconnect" href="https://fonts.googleapis.com">
```

This improves loading speed.

Keep only needed font weights.

---

## Part 6 — Preparing for Deployment

Choose one:

- GitHub Pages
- Netlify
- Vercel

Steps:

1. Push project to GitHub
2. Connect repository to hosting platform
3. Deploy
4. Receive public URL

Test on:

- Mobile device
- Tablet
- Desktop
- Another browser

Fix small issues before sharing.

---

## Project Milestone — Portfolio Complete

You now have:

- Semantic HTML foundation
- Structured CSS system
- Tailwind-powered layout
- Responsive behavior
- Accessible interactions
- SEO-ready metadata
- Deployable project

This is not a tutorial artifact.

**This is a real portfolio.**

---

## Final Checklist

Before calling it finished:

- ☐ One `<h1>` only
- ☐ All images have meaningful `alt`
- ☐ All inputs have labels
- ☐ Keyboard navigation works
- ☐ Contrast is readable
- ☐ Responsive on mobile
- ☐ Title and meta description added
- ☐ Images optimized
- ☐ Deployed to a live URL

---

## End of Book 1

You started with:

Plain HTML structure.

You now have:

A professional, accessible, responsive developer portfolio.

You understand:

- HTML
- CSS
- Flexbox
- Grid
- Responsive design
- Tailwind
- Accessibility
- Deployment basics

Book 2 will go deeper.

But this foundation is real.

You did not memorize.

**You built.**

---

**Book 1 is now complete.**