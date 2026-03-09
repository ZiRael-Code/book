# Chapter 25 — Building the Page (Part 2)

**Goal of This Chapter:**

Build the Projects section in full — 6 cards, a responsive grid, and hover interactions.

---

## Table of Contents

1. Prerequisites
2. Part 1 — The Projects Section Structure
3. Part 2 — Building a Project Card
4. Part 3 — The Card Exercise
5. Part 4 — Adding Hover Interactions
6. Project Milestone — Projects Section Complete
7. Completed Code

---

## 1. Prerequisites

From Chapter 24, your `<main>` now has:

- About section ✓
- Skills section ✓

Add the Projects section below Skills.

---

## Part 2 — The Projects Section Structure

The section has a title, a subtitle, and a grid.

The grid holds 6 cards — 3 columns on desktop, 2 on tablet, 1 on mobile.

Start with the wrapper:

```
<section id="projects" class="py-14" aria-labelledby="projects-title">
  <div class="max-w-5xl mx-auto px-6">

    <h2 id="projects-title"
        class="text-2xl font-bold text-center mb-2">
      Featured Projects
    </h2>

    <p class="text-center text-sm text-muted mb-6 max-w-lg mx-auto">
      A selection of projects that showcase my skills and passion for
      building great software
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <!-- Cards go here -->

    </div>
  </div>
</section>
```

The grid is already responsive:

- 1 column on phones
- 2 columns on tablets
- 3 columns on desktop

No media queries. Just prefixes.

---

## Part 3 — Building a Project Card

Each card has four parts:

- an image at the top
- a title and description
- a row of tool tags
- two action buttons

Here is the first card in full:

```
<article class="bg-card border border-line rounded-md overflow-hidden brand-shadow"
         aria-labelledby="p1-title">

  <figure class="m-0 bg-gray-400 h-44">
    <img src="assets/images/projects/project-01.jpg"
         alt="E-Commerce Platform screenshot"
         width="401" height="215"
         class="w-full h-full object-cover" />
  </figure>

  <h3 id="p1-title"
      class="text-sm font-semibold mx-4 mt-3 mb-1">
    E-Commerce Platform
  </h3>

  <p class="text-xs text-muted mx-4 mb-3">
    A full-featured online shopping platform with cart management
    and payment integration.
  </p>

  <ul class="flex flex-wrap gap-2 px-4 pb-3 list-none p-0 mx-4">
    <li><span class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">GitHub</span></li>
    <li><span class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Docker</span></li>
    <li><span class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Figma</span></li>
  </ul>

  <div class="flex gap-2 px-4 pb-4">
    <a href="#" target="_blank" rel="noreferrer"
       class="inline-flex items-center gap-1 text-xs font-semibold
              bg-primary text-white px-4 py-2 rounded-full
              hover:bg-primary-dark transition">
      Live Demo
      <img src="assets/icons/arrow-right.svg" alt="" width="14" height="14" />
    </a>
    <a href="#" target="_blank" rel="noreferrer"
       class="inline-flex items-center gap-1 text-xs font-semibold
              bg-text text-white px-4 py-2 rounded-full
              hover:opacity-90 transition">
      View Code
      <img src="assets/icons/github.svg" alt="" width="14" height="14" />
    </a>
  </div>

</article>
```

A few things worth noting:

- `overflow-hidden` on the article means the image corners respect the card's `rounded-md`
- `object-cover` on the image keeps it cropped cleanly regardless of the original file dimensions
- `h-44` gives the image area a fixed height so all cards look consistent
- The Live Demo button uses `bg-primary`, the View Code button uses `bg-text` — matching the CSS version exactly

---

## Part 4 — The Card Exercise

Here is the second card to get you started on the pattern:

```
<article class="bg-card border border-line rounded-md overflow-hidden brand-shadow"
         aria-labelledby="p2-title">

  <figure class="m-0 bg-gray-400 h-44">
    <img src="assets/images/projects/project-02.jpg"
         alt="Task Manager Pro screenshot"
         width="401" height="215"
         class="w-full h-full object-cover" />
  </figure>

  <h3 id="p2-title"
      class="text-sm font-semibold mx-4 mt-3 mb-1">
    Task Manager Pro
  </h3>

  <p class="text-xs text-muted mx-4 mb-3">
    Collaborative task management app with real-time updates,
    team features, and productivity analytics.
  </p>

  <ul class="flex flex-wrap gap-2 px-4 pb-3 list-none p-0 mx-4">
    <li><span class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">GitHub</span></li>
    <li><span class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Docker</span></li>
    <li><span class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Figma</span></li>
  </ul>

  <div class="flex gap-2 px-4 pb-4">
    <a href="#" target="_blank" rel="noreferrer"
       class="inline-flex items-center gap-1 text-xs font-semibold
              bg-primary text-white px-4 py-2 rounded-full
              hover:bg-primary-dark transition">
      Live Demo
      <img src="assets/icons/arrow-right.svg" alt="" width="14" height="14" />
    </a>
    <a href="#" target="_blank" rel="noreferrer"
       class="inline-flex items-center gap-1 text-xs font-semibold
              bg-text text-white px-4 py-2 rounded-full
              hover:opacity-90 transition">
      View Code
      <img src="assets/icons/github.svg" alt="" width="14" height="14" />
    </a>
  </div>

</article>
```

Now build cards 3 through 6 yourself.

The details for each:

**Card 3 — Weather Dashboard**

- Image: `project-03.jpg`
- Alt: `Weather Dashboard screenshot`
- Description: `Beautiful weather app with forecasts, location tracking, and interactive visualizations.`

Cards 4, 5, 6 repeat the same titles and descriptions as cards 1, 2, 3 — just with images `project-04.jpg`, `project-05.jpg`, `project-06.jpg`.

The real portfolio does this to fill the grid while the developer replaces them with real projects later. It's a placeholder pattern you'll see in professional work constantly.

### Exercise Answer

Cards 3–6 follow the exact same structure as cards 1 and 2. The only things that change per card are:

- `id` on the article (`p3-title`, `p4-title`, etc.)
- `id` on the `<h3>` (matching)
- `src` on the image
- `alt` on the image
- The title text
- The description text

If your six cards are in the grid and the images load — you did it correctly.

---

## Part 5 — Adding Hover Interactions

Now add the lift effect to every card.

Find the `<article>` opening tag on each card and add:

```
<article class="bg-card border border-line rounded-md overflow-hidden
                brand-shadow transition
                hover:-translate-y-1 hover:shadow-lg" ...>
```

What this does:

- `transition` → animates all property changes smoothly
- `hover:-translate-y-1` → the card lifts 4px upward when hovered
- `hover:shadow-lg` → the shadow deepens as the card lifts

The combined effect makes each card feel physical — like picking something up off a surface.

This adds motion without a single line of JavaScript.

---

### Micro Recap

The lift effect needs three utilities together:

- `transition` — without this, the movement is instant and harsh
- `hover:-translate-y-1` — the lift
- `hover:shadow-lg` — the shadow that makes the lift believable

Remove any one of them and the effect breaks.

---

## Project Milestone — Projects Section Complete

Your page now has:

- a Projects section with a title and subtitle ✓
- a 3-column responsive grid ✓
- 6 project cards with images, descriptions, tags, and buttons ✓
- hover lift interaction on every card ✓

Resize the browser.

Watch the grid go from 3 columns to 2 to 1.

That is responsive design working exactly as designed.

---

## Completed Code

### Projects Section

```
<section id="projects" class="py-14" aria-labelledby="projects-title">
  <div class="max-w-5xl mx-auto px-6">

    <h2 id="projects-title" class="text-2xl font-bold text-center mb-2">
      Featured Projects
    </h2>
    <p class="text-center text-sm text-muted mb-6 max-w-lg mx-auto">
      A selection of projects that showcase my skills and passion for
      building great software
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      <article class="bg-card border border-line rounded-md overflow-hidden
                      brand-shadow transition hover:-translate-y-1 hover:shadow-lg"
               aria-labelledby="p1-title">
        <figure class="m-0 bg-gray-400 h-44">
          <img src="assets/images/projects/project-01.jpg"
               alt="E-Commerce Platform screenshot"
               width="401" height="215"
               class="w-full h-full object-cover" />
        </figure>
        <h3 id="p1-title" class="text-sm font-semibold mx-4 mt-3 mb-1">E-Commerce Platform</h3>
        <p class="text-xs text-muted mx-4 mb-3">A full-featured online shopping platform with cart management and payment integration.</p>
        <ul class="flex flex-wrap gap-2 px-4 pb-3 list-none p-0 mx-4">
          <li><span class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">GitHub</span></li>
          <li><span class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Docker</span></li>
          <li><span class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Figma</span></li>
        </ul>
        <div class="flex gap-2 px-4 pb-4">
          <a href="#" target="_blank" rel="noreferrer"
             class="inline-flex items-center gap-1 text-xs font-semibold bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition">
            Live Demo <img src="assets/icons/arrow-right.svg" alt="" width="14" height="14" />
          </a>
          <a href="#" target="_blank" rel="noreferrer"
             class="inline-flex items-center gap-1 text-xs font-semibold bg-text text-white px-4 py-2 rounded-full hover:opacity-90 transition">
            View Code <img src="assets/icons/github.svg" alt="" width="14" height="14" />
          </a>
        </div>
      </article>

      <!-- Cards 2–6 follow the same structure -->

    </div>
  </div>
</section>
```

---

### Next Chapter:

Building the Page — Part 3.

We build the Contact section, the footer, and handle all responsive behavior across the complete site.

---

**Three sections down. One to go.**

**Ready for Chapter 26?**