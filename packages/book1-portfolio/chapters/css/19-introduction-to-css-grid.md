# Chapter 19 — The Mosaic (Introduction to CSS Grid)

**Goal of This Chapter:**

Learn how CSS Grid works and use it to build a structured Projects layout.

Flexbox handles alignment.

Grid handles layout architecture.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Why Grid Exists
3. Part 2 — `display: grid`
4. Part 3 — Defining Columns
5. Part 4 — `repeat()` and `minmax()`
6. Part 5 — `gap` in Grid
7. Building the Projects Grid
8. Project Milestone — Structured Projects Layout
9. Completed Code

---

## 1. Prerequisites

From Chapter 18:

- About section uses Flexbox
- Contact layout uses Flexbox
- Skills use wrapping layout

Now we focus on Projects.

From HTML Chapter 11, you should have something like:

```
<section class="section" id="projects" aria-labelledby="projects-title">
  <h2 id="projects-title">Projects</h2>

  <div class="projects-grid">
    <article class="project-card">...</article>
    <article class="project-card">...</article>
    <article class="project-card">...</article>
  </div>
</section>

```

We now control that grid.

---

## Part 1 — Why Grid Exists

Flexbox works in one dimension.

Grid works in two dimensions.

Flexbox:

- Row OR column

Grid:

- Rows AND columns

For layouts like:

- Portfolio project cards
- Dashboards
- Galleries

Grid is clearer.

---

## Part 2 — display: grid

To activate grid:

```
.projects-grid {
  display: grid;
}

```

Nothing changes visually yet.

Grid needs columns.

---

## Part 3 — Defining Columns

Add:

```
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}

```

Explanation:

- 3 equal columns
- `1fr` = one fraction of available space

This creates a 3-column layout.

---

## Part 4 — repeat() and minmax()

Hardcoding columns is inflexible.

Instead of:

```
grid-template-columns: 1fr 1fr 1fr;
```

Use:

```
grid-template-columns: repeat(3, 1fr);
```

Cleaner.

Now improve flexibility:

```
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

Explanation:

- Minimum width: 250px
- Maximum: stretch to available space
- `auto-fit` automatically adjusts number of columns

This makes layout responsive without media queries.

---

## Part 5 — gap in Grid

Just like Flexbox:

```
gap: 24px;
```

Controls spacing between rows and columns.

No margin hacks required.

---

## Improving Project Cards

From earlier chapters, you may already have:

```
.project-card {
  background: white;
  border: 1px solid var(--color-line);
  border-radius: 8px;
  padding: 16px;
}

```

Now ensure images scale properly:

```
.project-card img {
  width: 100%;
  height: auto;
  display: block;
}

```

This references HTML Chapter 6 (image handling).

---

## Optional: Create a Featured Layout

If you want the first project to span full width:

```
.project-card:first-child {
  grid-column: span 2;
}

```

This creates a "featured project" effect.

Grid allows easy spanning.

---

## Building the Projects Grid

Final recommended grid rule:

```
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

```

This:

- Automatically adapts
- Maintains clean spacing
- Avoids media queries
- Scales down to one column on small screens

---

## Project Milestone — Structured Projects Layout

You now have:

- True grid-based layout
- Responsive behavior without breakpoints
- Clean card spacing
- Controlled image scaling

Your Projects section now feels modern.

Grid handles architecture.

Flexbox handles alignment.

Use each tool correctly.

---

## Completed Code (Grid Additions)

```
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.project-card img {
  width: 100%;
  height: auto;
  display: block;
}

```

---

### Next Chapter:

Responsive Design — Making the entire site adapt across devices.

We now refine everything for mobile and tablet.

---

Your layout system is now powerful.

**Ready for Chapter 20?**