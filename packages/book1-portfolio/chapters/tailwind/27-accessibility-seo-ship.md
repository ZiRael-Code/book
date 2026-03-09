# Chapter 27 — Accessibility, SEO & Ship

**Goal of This Chapter:**

Audit your portfolio for accessibility, add SEO metadata, optimize performance, and deploy it to a live URL.

A real developer ships responsibly.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Accessibility Check
3. Part 2 — Semantic Structure Review
4. Part 3 — Contrast & Visual Clarity
5. Part 4 — SEO Essentials
6. Part 5 — Performance Basics
7. Part 6 — Preparing for Deployment
8. Project Milestone — Portfolio Complete
9. Final Checklist

---

## 1. Prerequisites

Your portfolio is fully built across Chapters 21–26.

Every section exists. Every interaction works. The site is responsive.

Now we check the things that matter beyond appearance.

---

## Part 1 — Accessibility Check

### Keyboard Navigation Test

Close your mouse.

Press Tab.

Move through the entire page.

You should be able to:

- reach every nav link
- activate the Contact button
- tab through all form fields
- see a visible focus ring on every interactive element

If anything is invisible or unreachable — it needs fixing.

The `focus-visible:ring-2` patterns you added throughout Chapters 23–26 handle most of this already.

---

### Skip Link

Ensure this exists at the very top of `<body>`, before the header:

```
<a href="#main" class="skip-link">Skip to main content</a>
```

The `.skip-link` styling lives in `@layer components` inside `input.css` — set up in Chapter 22. No extra work needed here.

Tab to it on the page. It should appear. Tab again. It should disappear.

That's correct behavior.

---

### Form Labels

Every input in the contact form has a visible label connected by `for` and `id`.

From Chapter 26:

```
<label for="name" class="text-xs font-semibold block mb-1">Name</label>
<input id="name" name="name" type="text" ... />
```

The `for` matches the `id`.

Screen readers connect them automatically.

Do not rely on `placeholder` text as a label replacement.

Placeholders disappear when typing starts.

Labels stay.

---

### Image Alt Text

Every meaningful image has a descriptive `alt` attribute.

Every decorative image has an empty `alt=""`.

Go through your portfolio and confirm:

- Profile photo → descriptive alt ✓
- Project screenshots → descriptive alt ✓
- Icons used as decoration → `alt=""` ✓

---

## Part 2 — Semantic Structure Review

Your page should include these elements in order:

```
<body>
  <a class="skip-link" href="#main">...</a>

  <header>
    <!-- nav + hero -->
  </header>

  <main id="main">
    <!-- about, skills, projects, contact -->
  </main>

  <footer>
    <!-- copyright -->
  </footer>
</body>
```

No unnecessary `<div>` where a semantic element exists.

Headings follow a clean hierarchy:

- One `<h1>` → hero title
- `<h2>` → each section title
- `<h3>` → card titles and sub-headings within sections

Do not skip heading levels.

Screen readers use this hierarchy to navigate.

---

## Part 3 — Contrast & Visual Clarity

Your token system was designed with contrast in mind:

- `text` (#0f172a) on `bg` (#ffffff) → strong contrast ✓
- white text on `primary` (#2f7cf6) → passes AA ✓
- `muted` (#6b7280) on white → passes AA for large text ✓

Quick manual check:

Reduce your screen brightness.

Step back slightly.

Can you still read everything comfortably?

If anything feels strained — the contrast needs attention.

---

## Part 4 — SEO Essentials

Inside `<head>`, ensure all of these exist:

```
<title>John Doe — Developer Portfolio</title>

<meta name="description"
      content="Full-stack developer portfolio showcasing projects, skills, and experience.">

<meta property="og:title" content="John Doe — Developer Portfolio">
<meta property="og:description"
      content="A portfolio showcasing projects and technical expertise.">
```

Why each one matters:

- `<title>` → appears in browser tabs and search results
- `meta description` → the text shown below your link in search results
- `og:title` and `og:description` → controls how your link appears when shared on social media

These were introduced in the HTML boilerplate back in Chapter 1.

Now you understand why they were always there.

---

### Heading Hierarchy for SEO

Search engines read headings as signals about page content.

One `<h1>` tells them what the page is about.

`<h2>` tells them what each section covers.

Your portfolio already follows this structure correctly.

---

## Part 5 — Performance Basics

### Lazy Loading Images

For images that are not immediately visible on page load, add:

```
loading="lazy"
```

Example — project card images:

```
<img src="assets/images/projects/project-01.jpg"
     alt="E-Commerce Platform screenshot"
     width="401" height="215"
     loading="lazy"
     class="w-full h-full object-cover" />
```

The hero photo and anything above the fold should not be lazy loaded — the browser needs those immediately.

---

### Declare Image Dimensions

Every `<img>` in your portfolio already has `width` and `height` attributes.

This is important.

When dimensions are declared, the browser reserves space for the image before it loads.

Without them, the layout jumps when images arrive — this is called **Cumulative Layout Shift** and it hurts both user experience and search ranking.

---

### Font Preconnect

Already in your `<head>` from the beginning:

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

This tells the browser to start the connection to Google Fonts early — before it even needs the font files.

Small optimization. Real impact on perceived load speed.

---

## Part 6 — Preparing for Deployment

### Build Tailwind for Production

Before deploying, run the production build:

```
npx tailwindcss -i ./styles/input.css -o ./styles/tailwind.css --minify
```

The `--minify` flag removes whitespace and compresses the output file.

Your CSS goes from potentially hundreds of kilobytes to a few kilobytes.

This is important for real-world performance.

---

### Choose a Hosting Platform

Three good options for a static site like this:

- **GitHub Pages** — free, connected to your GitHub repository, good for portfolios
- **Netlify** — free tier, drag and drop deployment, automatic rebuilds on push
- **Vercel** — free tier, fastest deployment, excellent developer experience

All three work identically for a static HTML/CSS site.

---

### Deployment Steps (Netlify as example)

1. Create an account at **netlify.com**
2. Drag your project folder into the Netlify dashboard
3. Netlify gives you a public URL immediately
4. Test on mobile, tablet, and desktop
5. Fix any last issues
6. Share the URL

---

### Test Before Sharing

Before sending your portfolio URL to anyone:

- Open it on your phone
- Open it on a tablet if available
- Try it in Chrome, Firefox, and Safari
- Tab through the entire page with your keyboard

Fix anything that looks off.

This is the difference between a portfolio that impresses and one that doesn't.

---

## Project Milestone — Portfolio Complete

You now have:

- a fully accessible portfolio ✓
- proper semantic HTML structure ✓
- SEO metadata in place ✓
- optimised images with lazy loading ✓
- a production-minified CSS file ✓
- a live deployment ✓

---

## Final Checklist

Before calling it finished:

- ☐ One `<h1>` only
- ☐ All images have meaningful `alt`
- ☐ All inputs have connected labels
- ☐ Skip link works on keyboard tab
- ☐ Focus rings visible throughout
- ☐ Contrast passes on all text
- ☐ Responsive on mobile, tablet, desktop
- ☐ Title and meta description in `<head>`
- ☐ Project images have `loading="lazy"`
- ☐ Tailwind built with `--minify`
- ☐ Deployed to a live URL
- ☐ Tested in multiple browsers

---

## End of Book 1

You started with a blank HTML file.

You now have a professional, accessible, responsive developer portfolio — built twice. Once in pure CSS. Once in Tailwind.

You understand:

- HTML structure and semantics
- CSS fundamentals, spacing, color, typography
- Flexbox and Grid
- Responsive design
- Tailwind utility-first CSS
- Accessibility and keyboard navigation
- SEO basics
- Deployment

You didn't memorize any of this.

**You built it.**

That's the difference.

---

**Book 1 is complete.**