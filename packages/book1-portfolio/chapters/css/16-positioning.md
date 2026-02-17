# Chapter 16 — Breaking the Default Flow (Positioning)

**Goal of This Chapter:**  
Understand how CSS positioning works and use it carefully to enhance layout.

We are not abandoning natural flow.  
We are learning when to override it.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Revisiting Normal Flow
3. Part 2 — `position: static`
4. Part 3 — `relative` and `absolute`
5. Part 4 — `fixed` and `sticky`
6. Part 5 — z-index (Without Chaos)
7. Applying Sticky Navigation
8. Project Milestone — Controlled Layout
9. Completed Code

---

## 1. Prerequisites

From Chapter 15, your site now has:

- Clean typography
- Color system
- Structured spacing
- Styled navigation and form

Everything still flows vertically.

That is normal flow.

---

# Part 1 — Revisiting Normal Flow

From HTML Chapter 3:

Block elements stack vertically.

Example:

```html
<header></header>
<main></main>
<footer></footer>
```
By default:

- They appear one after another.
- Width stretches full container.
- Height grows based on content.

CSS positioning allows us to modify this behavior.

---

## Part 2 — position: static

Every element is static by default.

```
position: static;

```

Static means:

- Follow normal flow.
- Cannot use top, left, right, bottom.

Most elements remain static.

We only change positioning when necessary.

---

## Part 3 — relative and absolute

### position: relative

Relative keeps the element in flow.

But allows offset:

```
.box {
  position: relative;
  top: 10px;
}

```

The element moves visually.

But its original space is preserved.

Think of it as “nudging.”

### position: absolute

Absolute removes element from normal flow.

It positions relative to the nearest positioned ancestor.

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

Important:

Absolute elements do not reserve space.

They float.

Use carefully.

---

## Part 4 — fixed and sticky

### position: fixed

Fixed attaches to viewport.

Example:

```
.fixed-banner {
  position: fixed;
  bottom: 0;
  left: 0;
}

```

It stays visible during scroll.

Use sparingly.

### position: sticky

Sticky is powerful.

It behaves like static until scroll threshold.

Then it sticks.

Example:

```
header {
  position: sticky;
  top: 0;
}

```

It sticks to the top when scrolling.

This is perfect for navigation.

---

## Part 5 — z-index (Without Chaos)

When elements overlap:

z-index controls stacking order.

```
header {
  z-index: 100;
}

```

Rules:

- Only works on positioned elements.
- Higher number = appears on top.

Avoid random high values.

Keep numbers small and intentional.

---

## Applying Sticky Navigation

Now we improve our portfolio.

From HTML Chapter 9, we have:

```
<header id="top">
```

Update your CSS:

```
header {
  position: sticky;
  top: 0;
  background: var(--color-bg);
  padding: 16px 0;
  z-index: 10;
}

```

Why background?

Without it, content underneath may show through.

### Add Subtle Separation

```
header {
  border-bottom: 1px solid var(--color-line);
}

```

Now the header feels anchored.

---

## Improving Skip Link (HTML Chapter 9)

We previously created a skip link.

Let's improve it.

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

Now it appears when focused.

This improves accessibility without affecting layout.

---

## Project Milestone — Controlled Layout

You now have:

- Sticky navigation
- Visible focusable skip link
- Proper stacking order
- Controlled use of positioning

You did not break layout.

You enhanced it.

That is responsible positioning.

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

### Next Chapter:

Flexbox Fundamentals.

We now align navigation and layout properly.

---

Your layout now behaves with intention.

**Ready for Chapter 17?**

