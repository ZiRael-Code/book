# Chapter 17 — Flexbox Fundamentals (Mastering the Row)

**Goal of This Chapter:**  
Understand how Flexbox works and use it to align navigation and layout elements cleanly.

Flexbox is not magic.  
It is controlled alignment.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Why Flexbox Exists
3. Part 2 — Main Axis vs Cross Axis
4. Part 3 — `display: flex`
5. Part 4 — `justify-content`
6. Part 5 — `align-items`
7. Part 6 — `gap`
8. Applying Flexbox to Navigation
9. Improving Layout Structure
10. Project Milestone — Clean Horizontal Alignment
11. Completed Code

---

## 1. Prerequisites

From Chapter 16, your navigation is sticky.

But alignment may still feel basic.

From HTML Chapter 5:

```html
<nav>
  <ul>
    <li><a href="#top">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

```

We now control alignment precisely.

---

## Part 1 — Why Flexbox Exists

Before Flexbox:

Layout was difficult.

Flexbox solves:

- Horizontal alignment
- Vertical centering
- Equal spacing
- Dynamic distribution

It works in one dimension at a time.

Row or column.

---

## Part 2 — Main Axis vs Cross Axis

When you apply:

```
display: flex;
```

Two axes are created:

- Main axis → default horizontal
- Cross axis → vertical

If `flex-direction: row;`

Main axis = left to right.

If `flex-direction: column;`

Main axis = top to bottom.

Everything else builds from this concept.

---

## Part 3 — display: flex

Apply to a parent container.

Example:

```
nav ul {
  display: flex;
}

```

This makes children (li) line up horizontally.

By default:

- Items shrink to content size.
- They align at start.

---

## Part 4 — justify-content

Controls alignment along main axis.

Examples:

```
justify-content: flex-start;
justify-content: center;
justify-content: space-between;
justify-content: space-around;

```

If main axis is horizontal:

It controls left-right distribution.

---

## Part 5 — align-items

Controls cross axis alignment.

Examples:

```
align-items: center;
align-items: flex-start;
align-items: flex-end;

```

If main axis is horizontal:

Cross axis is vertical.

`align-items: center;` vertically centers items.

---

## Part 6 — gap

Flexbox supports spacing between items.

Instead of margin:

```
gap: 20px;
```

Cleaner.

More consistent.

---

## Applying Flexbox to Navigation

We previously styled nav list in Chapter 12.

Now refine it.

Update:

```
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

```

Now navigation:

- Is horizontal
- Is centered
- Has consistent spacing

---

## Improving Header Layout

From HTML Chapter 9:

```
<header id="top">
  <nav>...</nav>
</header>

```

We want header content centered.

Update:

```
header {
  display: flex;
  justify-content: center;
}

```

This centers the nav inside the header.

---

## Applying Flexbox to Form Layout (HTML Chapter 10)

We keep inputs stacked.

But align button cleanly.

Example:

```
form {
  display: flex;
  flex-direction: column;
}

```

This ensures predictable stacking.

---

## Example: Centering Hero Content

From HTML Chapter 9, hero section lives inside <section>.

We can center text block:

```
section[aria-labelledby="hero-title"] {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

```

We are not overcomplicating layout yet.

Just controlling alignment.

---

## Project Milestone — Clean Horizontal Alignment

You now have:

- Horizontally aligned navigation
- Controlled header layout
- Structured form stacking
- Intentional spacing using gap

Flexbox gives control without hacks.

You did not use floats.

You did not use margins for layout.

You used modern CSS.

---

## Completed Code (Flexbox Additions)

```
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
}

header {
  display: flex;
  justify-content: center;
}

form {
  display: flex;
  flex-direction: column;
}

```

---

### Next Chapter:

Flexbox Deep Dive.

We build two-column layouts and equal-height cards.

---

Navigation now feels intentional.

**Ready for Chapter 18?**