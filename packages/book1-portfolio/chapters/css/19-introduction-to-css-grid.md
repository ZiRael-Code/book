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

From Chapter 18, your portfolio now has:

- an About section with a styled panel
- a Skills section using a card grid
- a Contact section with a two-column layout

One major section is still missing.

**Projects.**

We haven't added it to the HTML yet.

That changes now — and Grid is exactly the right tool for it.

---

We're going to build the Projects section from scratch here.

This is where HTML structure and CSS Grid meet directly.

Start by adding this section inside `<main>`, **between Skills and Contact**:

```html
<section id="projects" class="section" aria-labelledby="projects-title">
  <h2 id="projects-title">Featured Projects</h2>
  <p>A selection of projects that showcase my skills and passion for building great software.</p>

  <div class="projects-grid">

    <article class="project-card" aria-labelledby="p1-title">
      <figure>
        <img
          src="assets/images/projects/project-01.jpg"
          alt="E-Commerce Platform screenshot"
          width="401"
          height="215"
        />
      </figure>

      <h3 id="p1-title">E-Commerce Platform</h3>
      <p>A full-featured online shopping platform with cart management and payment integration.</p>

      <ul aria-label="Tools used">
        <li><span>React</span></li>
        <li><span>Node.js</span></li>
        <li><span>PostgreSQL</span></li>
      </ul>

      <div>
        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
        <a href="#" target="_blank" rel="noreferrer">View Code</a>
      </div>
    </article>

    <article class="project-card" aria-labelledby="p2-title">
      <figure>
        <img
          src="assets/images/projects/project-02.jpg"
          alt="Task Manager Pro screenshot"
          width="401"
          height="215"
        />
      </figure>

      <h3 id="p2-title">Task Manager Pro</h3>
      <p>Collaborative task management app with real-time updates and productivity analytics.</p>

      <ul aria-label="Tools used">
        <li><span>React</span></li>
        <li><span>MongoDB</span></li>
        <li><span>Docker</span></li>
      </ul>

      <div>
        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
        <a href="#" target="_blank" rel="noreferrer">View Code</a>
      </div>
    </article>

    <article class="project-card" aria-labelledby="p3-title">
      <figure>
        <img
          src="assets/images/projects/project-03.jpg"
          alt="Weather Dashboard screenshot"
          width="401"
          height="215"
        />
      </figure>

      <h3 id="p3-title">Weather Dashboard</h3>
      <p>Beautiful weather app with forecasts, location tracking, and interactive visualizations.</p>

      <ul aria-label="Tools used">
        <li><span>TypeScript</span></li>
        <li><span>REST APIs</span></li>
        <li><span>Figma</span></li>
      </ul>

      <div>
        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
        <a href="#" target="_blank" rel="noreferrer">View Code</a>
      </div>
    </article>

  </div>
</section>
```

## Applying This to the Portfolio

Here's something worth saying honestly.

Tables are a core part of HTML — and you now understand them properly.

But for this specific portfolio, the Skills section won't use a table.

It will use card-based layout — a more visual, modern approach that fits the design better. You'll build those cards once we get into CSS Grid.

So right now, treat the table above as a standalone exercise, not a portfolio addition.

Build it, study it, and understand the relationships between `thead`, `tbody`, `th`, and `td`.

That knowledge will carry into real projects constantly. Admin dashboards, pricing comparisons, analytics reports — tables show up everywhere professionally.

You're learning the tool. The portfolio will use a different tool for this particular section.

That said, don't delete the table exercise from your file. Keep it commented out or in a practice file. You'll want to reference it.

---

## Now we have real content to lay out.

## Part 1 — Why Grid Exists

Flexbox works in one dimension.

Grid works in two dimensions.

Flexbox:

- Row or column

Grid:

- Rows and columns

For layouts like:

- project card galleries
- dashboards
- image mosaics

Grid is usually clearer and easier to reason about.

---

## Part 2 — display: grid

To activate Grid:

```
.projects-grid {
  display: grid;
}
```

Nothing changes yet.

Grid needs columns.

---

## Part 3 — Defining Columns

Here's the simplest version of a multi-column grid:

```
.projects-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 22px;
}
```

That creates three equal columns.

But we're going to write this more cleanly next.

---

## Part 4 — repeat() and minmax()

Hardcoding columns works, but it's repetitive.

Instead of:

```
grid-template-columns: 1fr 1fr 1fr;
```

Use:

```
grid-template-columns: repeat(3, 1fr);
```

Same result. Less clutter.

Now one important upgrade:

Use `minmax(0, 1fr)` instead of plain `1fr`.

Why?

Because it prevents weird overflow issues when content gets long.

So our final column rule becomes:

```
grid-template-columns: repeat(3, minmax(0, 1fr));
```

This keeps the grid stable even when a card has longer text.

---

## Part 5 — gap in Grid

Grid spacing is clean:

```
gap: 22px;
```

This controls spacing between:

- columns
- rows

No margin hacks.

No "last-child" fixes.

Just spacing.

---

## Improving Project Cards

Each card has four parts: an image, a title, a description, and action links.

Let's make sure the image fills the card cleanly:

```
.project-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
}

.project-card figure {
  margin: 0;
  background: #9ca3af;
  height: 170px;
}

.project-card figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card h3 {
  font-size: 14px;
  margin: 14px 16px 6px;
}

.project-card p {
  font-size: 12px;
  color: #6b7280;
  margin: 0 16px 12px;
}

.project-card ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 16px 14px;
  list-style: none;
}

.project-card ul li span {
  font-size: 11px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  padding: 6px 10px;
  border-radius: 999px;
  display: inline-block;
}

.project-card > div {
  display: flex;
  gap: 10px;
  padding: 0 16px 16px;
}
```

`object-fit: cover` keeps the image cropped nicely regardless of the original file dimensions.

`overflow: hidden` on the card means the image corners respect the card's border radius.

---

## Optional: Span a Card Across Two Columns

If you want one project to stand out visually:

```
.project-card:first-child {
  grid-column: span 2;
}
```

This makes the first card twice as wide.

Use this sparingly — it works best when the first project is your strongest piece.

---

## Building the Projects Grid

The final grid rule for the portfolio:

```
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
```

Three equal columns. Clean gaps. No extra math.

On smaller screens (which we handle in Chapter 20), this will collapse to two columns, then one.

---

## Project Milestone — Structured Projects Layout

You now have:

- a real Projects section (not placeholders)
- a true Grid layout system
- clean spacing with `gap`
- cards with properly cropped images and consistent structure

**Your Projects section now feels modern and intentional.**

Grid handles architecture.

Flexbox handles alignment.

Use each tool for what it was built for.

---

## Completed Code

```
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;
}

.project-card figure {
  margin: 0;
  background: #9ca3af;
  height: 170px;
}

.project-card figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-card h3 {
  font-size: 14px;
  margin: 14px 16px 6px;
}

.project-card p {
  font-size: 12px;
  color: #6b7280;
  margin: 0 16px 12px;
}

.project-card ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 16px 14px;
  list-style: none;
}

.project-card ul li span {
  font-size: 11px;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  padding: 6px 10px;
  border-radius: 999px;
  display: inline-block;
}

.project-card > div {
  display: flex;
  gap: 10px;
  padding: 0 16px 16px;
}
```

---

### Next Chapter:

Responsive Design — Making the entire site adapt across devices.

We now refine everything for mobile and tablet.

---

**Your layout system is now powerful.**

**Ready for Chapter 20?**