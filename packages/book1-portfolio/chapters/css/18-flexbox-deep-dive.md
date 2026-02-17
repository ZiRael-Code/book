# Chapter 18 — Flexbox Deep Dive (Columns, Cards & Control)

**Goal of This Chapter:**

Use Flexbox to build real layout sections like About, Skills, and structured content blocks.

We move from simple alignment into intentional layout design.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Flex Direction Revisited
3. Part 2 — `flex-wrap` and Responsive Stacking
4. Part 3 — Equal-Height Cards
5. Part 4 — Building a Two-Column Layout
6. Part 5 — Improving the Skills Section
7. Applying Flexbox to the Portfolio
8. Project Milestone — Two-Column About + Clean Skills
9. Completed Code

---

## 1. Prerequisites

From Chapter 17:

- navigation is aligned
- layout already uses Flexbox
- forms stack predictably

Flexbox is no longer new.

Now we use it intentionally.

---

### Friction Moment — "I Can Center Things, But Layout Still Feels Hard"

Most learners stop at:

`justify-content: center;`

That's only the surface.

Flexbox is a layout engine — not a centering trick.

**This chapter unlocks real structure.**

---

## Part 1 — Flex Direction Revisited

By default:

```
display: flex;
flex-direction: row;
```

This lays items horizontally.

Switching to column:

```
flex-direction: column;
```

Stacks items vertically.

The key idea:

**Flexbox always works along a main axis.**

You choose the direction.

Everything else responds.

---

### Concept Anchor — Conveyor Belt

Imagine a conveyor belt:

- row = items move sideways
- column = items move downward

Flexbox arranges items along that belt.

---

### Micro Recap

- row → horizontal
- column → vertical

---

## Part 2 — `flex-wrap` and Responsive Stacking

Default behavior:

```
flex-wrap: nowrap;
```

Everything stays on one line.

When space runs out — overflow happens.

Enable wrapping:

```
flex-wrap: wrap;
```

Now items can move to the next line naturally.

Perfect for:

- cards
- tag lists
- responsive blocks

---

### Friction Moment — "Why Did My Layout Suddenly Overflow?"

That's `nowrap` doing its job.

Flexbox won't wrap unless you allow it.

---

### Micro Recap

Use `flex-wrap: wrap` for responsive layouts.

---

## Part 3 — Equal-Height Cards

Flexbox automatically stretches items to the same height.

Default:

```
align-items: stretch;
```

That's why columns line up nicely.

If one column has more text, the other grows to match height.

This creates clean card layouts with zero hacks.

---

### Why This Is Powerful

Old CSS required:

- floats
- hacks
- fake equal heights

Flexbox does it naturally.

---

### Micro Recap

Flexbox keeps columns balanced by default.

---

## Part 4 — Building a Two-Column Layout

Let's create a real About section.

HTML:

```html
<section class="section" id="about" aria-labelledby="about-title">
  <h2 id="about-title">About Me</h2>

  <div class="about-layout">
    <div class="about-text">
      <p>Short bio content goes here.</p>
    </div>

    <div class="about-skills">
      <p>Highlight strengths here.</p>
    </div>
  </div>
</section>
```

CSS:

```css
.about-layout {
  display: flex;
  gap: 40px;
}

.about-text,
.about-skills {
  flex: 1;
}
```

What happened:

- two columns created
- equal width
- equal height
- consistent spacing

No math.

No hacks.

Just Flexbox.

---

### Concept Anchor — Split Screen

Think of your screen split down the middle.

Flexbox does exactly that — but responsively.

---

### Micro Recap

`flex: 1` gives equal space to each column.

---

## Part 5 — Improving the Skills Section

Earlier, your Skills section was centered content only.

Now we prepare it for layout growth.

Add:

```css
#skills {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

This:

- stacks content vertically
- centers it cleanly
- prepares for card layouts

---

## Preparing for Card Layouts (Before Grid)

Example HTML:

```html
<div class="skills-row">
  <div class="skill-card">HTML</div>
  <div class="skill-card">CSS</div>
  <div class="skill-card">JavaScript</div>
</div>
```

CSS:

```css
.skills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.skill-card {
  flex: 1 1 200px;
  padding: 20px;
  background: white;
  border: 1px solid var(--color-line);
  border-radius: 8px;
}
```

The magic line:

`flex: 1 1 200px;`

Means:

- grow when space allows
- shrink when needed
- start around 200px

Result:

Responsive cards without media queries.

---

### Friction Moment — "Why Does It Resize Automatically?"

Because Flexbox distributes space dynamically.

**That's the whole point.**

---

## Improving the Contact Layout

Current contact section stacks everything.

Let's structure it.

HTML:

```html
<div class="contact-layout">
  <div class="contact-info">
    <p>Email info</p>
  </div>

  <div class="contact-form">
    <form>...</form>
  </div>
</div>
```

CSS:

```css
.contact-layout {
  display: flex;
  gap: 40px;
}

.contact-info,
.contact-form {
  flex: 1;
}
```

Now:

- info sits beside form
- layout feels professional
- spacing is consistent

---

### Micro Recap

Flexbox is now shaping whole sections — not just centering buttons.

---

## Project Milestone — Two-Column About + Clean Skills

You now have:

- balanced About section
- flexible Skills layout
- responsive card foundations
- structured Contact layout

**Your site feels designed, not stacked.**

---

## Completed Code (Flex Layout Additions)

```css
.about-layout {
  display: flex;
  gap: 40px;
}

.about-text,
.about-skills {
  flex: 1;
}

.contact-layout {
  display: flex;
  gap: 40px;
}

.contact-info,
.contact-form {
  flex: 1;
}

.skills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.skill-card {
  flex: 1 1 200px;
  padding: 20px;
  background: white;
  border: 1px solid var(--color-line);
  border-radius: 8px;
}
```

---

## Final Reflection

Flexbox isn't about centering.

**It's about flow, balance, and adaptability.**

Once you think in flexible containers instead of fixed pixels, layouts become simple.

---

### Next Chapter:

The Mosaic — CSS Grid.

We move from one-dimensional flow to two-dimensional layout systems.

---

**Flexbox now works for you instead of against you.**

**Ready to level up with Grid in Chapter 19?**