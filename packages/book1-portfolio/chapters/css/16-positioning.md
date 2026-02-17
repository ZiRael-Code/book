# Chapter 16 — Breaking the Default Flow (Positioning)

**Goal of This Chapter:**

Understand how CSS positioning works and use it carefully to enhance layout.

We are not abandoning natural flow.

We are learning when — and why — to override it.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Revisiting Normal Flow
3. Part 2 — `position: static`
4. Part 3 — `relative` and `absolute`
5. Part 4 — `fixed` and `sticky`
6. Part 5 — `z-index` (Without Chaos)
7. Applying Sticky Navigation
8. Project Milestone — Controlled Layout
9. Completed Code

---

## 1. Prerequisites

By now your site includes:

- clean typography
- consistent spacing
- a color system
- structured layout
- styled navigation and form

Everything still stacks vertically.

That's called **normal document flow**.

And it's still your default.

---

### Friction Moment — "Why Not Position Everything?"

Because normal flow already solves 80% of layout problems.

Positioning is a tool — not a replacement for layout systems.

When beginners discover `position`, they try to use it everywhere.

That's how layouts break.

**Professionals override flow only when necessary.**

---

## Part 1 — Revisiting Normal Flow

From early HTML chapters:

Block elements naturally stack:

```
<header></header>
<main></main>
<footer></footer>
```

By default:

- elements appear top to bottom
- widths stretch to container
- heights grow with content

This behavior is predictable.

And predictability is good.

**Positioning lets us bend the rules — not destroy them.**

---

### Concept Anchor — Gravity

Normal flow is gravity.

Everything falls into place naturally.

Positioning is lifting something and placing it deliberately.

Do it rarely.

Do it intentionally.

---

## Part 2 — `position: static`

Every element starts as:

```
position: static;
```

Static means:

- follows normal flow
- ignores top, left, right, bottom

**Most of your layout should remain static forever.**

That's not limitation.

That's good architecture.

---

### Micro Recap

Static = default flow

---

## Part 3 — `relative` and `absolute`

These two work together.

### `position: relative`

Relative keeps the element in normal flow.

But allows visual offset.

Example:

```
.box {
  position: relative;
  top: 10px;
}
```

The element moves down visually.

But its original space remains.

Think of it as nudging — not relocating.

### `position: absolute`

Absolute removes the element from normal flow.

It positions itself relative to the **nearest positioned ancestor**.

Example:

```
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

The child now floats inside the parent.

Important:

Absolute elements:

- don't reserve space
- overlap content if not careful

**Use them sparingly.**

---

### Common Beginner Mistake

Using absolute for layout instead of flexbox or grid.

That leads to fragile designs.

---

### Micro Recap

- Relative = nudge in place
- Absolute = remove from flow and float

---

## Part 4 — `fixed` and `sticky`

### `position: fixed`

Fixed sticks to the viewport.

Example:

```
.banner {
  position: fixed;
  bottom: 0;
  left: 0;
}
```

It stays visible while scrolling.

Great for:

- chat widgets
- alerts
- floating buttons

**Use sparingly.**

### `position: sticky`

Sticky is smarter.

It behaves like static until a scroll point.

Then it sticks.

Example:

```
header {
  position: sticky;
  top: 0;
}
```

This makes headers stay visible when scrolling.

Perfect for navigation bars.

---

### Concept Anchor — Sticky Notes

It scrolls like paper.

Until it hits the top.

Then it sticks like a note.

---

### Micro Recap

- Fixed = always attached to viewport
- Sticky = flows, then sticks

---

## Part 5 — `z-index` (Without Chaos)

When elements overlap, stacking matters.

Example:

```
header {
  z-index: 10;
}
```

Rules:

- only works on positioned elements
- higher number sits on top

**Keep numbers small.**

Avoid 9999 culture.

Structure beats magic numbers.

---

### Friction Moment — "Why Isn't z-index Working?"

Because the element isn't positioned.

Add `position: relative`, `absolute`, `fixed`, or `sticky`.

Then `z-index` works.

---

## Applying Sticky Navigation

Now we enhance our portfolio navigation.

From earlier chapters:

```
<header id="top">
```

Add this to your CSS:

```
header {
  position: sticky;
  top: 0;
  background: var(--color-bg);
  padding: 16px 0;
  z-index: 10;
}
```

Now the header stays visible during scroll.

### Add Visual Separation

```
header {
  border-bottom: 1px solid var(--color-line);
}
```

This subtly anchors the nav.

---

## Improving the Skip Link

Earlier we created a skip link for accessibility.

Let's make it usable but invisible until focused.

Add:

```
.skip-link {
  position: absolute;
  left: -999px;
  top: 10px;
  background: var(--color-text);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
}

.skip-link:focus {
  left: 10px;
}
```

Now:

- it's hidden visually
- appears when tabbed to
- helps keyboard users

This is professional accessibility behavior.

---

## Project Milestone — Controlled Layout

You now used positioning responsibly:

- sticky navigation for usability
- no broken normal flow
- proper stacking order
- improved accessibility

**You didn't fight the browser.**

**You worked with it.**

---

## Completed Code (Positioning Additions)

```
header {
  position: sticky;
  top: 0;
  background: var(--color-bg);
  padding: 16px 0;
  border-bottom: 1px solid var(--color-line);
  z-index: 10;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: 10px;
  background: var(--color-text);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
}

.skip-link:focus {
  left: 10px;
}
```

---

## Final Reflection

Positioning is not a layout system.

**It's a precision tool.**

Use it when flow can't solve the problem.

Avoid it when flow already works.

That's how clean layouts are built.

---

### Next Chapter:

Flexbox Fundamentals.

Now we'll align content naturally — without hacks.

---

**Your site now behaves intentionally instead of accidentally.**

**Ready for Chapter 17?**