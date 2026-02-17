# Chapter 15 — The Voice of the Page (Typography)

**Goal of This Chapter:**

Control how your portfolio reads by improving font choice, sizing, spacing, and hierarchy.

Typography is not decoration.

It is communication.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Why Typography Matters
3. Part 2 — Choosing Fonts (Inter & Roboto Mono)
4. Part 3 — Font Properties Explained
5. Part 4 — Responsive Type with `clamp()`
6. Part 5 — Aligning Numbers (Tabular Figures)
7. Applying Typography to Our Portfolio
8. Project Milestone — Clear Visual Hierarchy
9. Completed Code

---

## 1. Prerequisites

From Chapter 14, your site now has:

- color tokens
- hover and focus states
- section backgrounds
- structured spacing

But all text is still using the browser's default font.

Now we give your page a voice.

---

### Friction Moment — "It Works Fine With the Default Font"

Yes — it works.

But default fonts are like speaking in a monotone.

Nothing is wrong.

Nothing is memorable either.

Typography is what turns content into design.

---

## Part 1 — Why Typography Matters

Back in HTML Chapter 1, you learned structure:

- `<h1>` for main titles
- `<h2>` for sections
- `<p>` for content

CSS now gives those roles visual meaning.

Good typography creates:

- clear hierarchy
- comfortable reading
- professional polish

Bad typography causes:

- eye strain
- confusion
- amateur feel

Typography guides the reader's attention.

---

### Concept Anchor — A Voice in Writing

Think about reading a book.

Some words feel loud.

Some feel quiet.

Some feel important.

Typography is the voice of your page.

---

## Part 2 — Choosing Fonts (Inter & Roboto Mono)

We'll use two fonts:

**Inter**

→ clean, modern, highly readable for UI and content

**Roboto Mono**

→ perfect for numbers, code-like data, and stats

This pairing is common in modern products.

---

### Step 1 — Add Google Fonts

Inside your `<head>`:

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet">
```

`display=swap` improves loading performance.

### Step 2 — Apply the Base Font

In base.css:

```
body {
  margin: 0;
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}
```

The increased line height makes paragraphs easier to read.

---

## Part 3 — Font Properties Explained

### Font Weight

```
h1 {
  font-weight: 700;
}
```

Heavier weight = stronger visual importance.

### Font Size

Avoid hardcoding everywhere early.

We'll use fluid sizing soon.

### Letter Spacing (Tracking)

Large titles benefit from slight tightening:

```
h1 {
  letter-spacing: -0.02em;
}
```

This prevents wide-looking text.

### Muted Text

From Chapter 14:

```
p {
  color: var(--color-muted);
}
```

Use muted tones for secondary content.

---

### Micro Recap

Typography uses:

- size
- weight
- spacing
- color

to guide the reader.

---

## Part 4 — Responsive Type with `clamp()`

Fixed font sizes break on small screens.

Instead of:

```
h1 {
  font-size: 56px;
}
```

Use:

```
h1 {
  font-size: clamp(32px, 5vw, 56px);
}
```

Meaning:

- minimum size: 32px
- grows with viewport width
- maximum size: 56px

Your text now scales smoothly.

---

### Friction Moment — "Why Not Just Media Queries?"

You can.

But `clamp()` is simpler and more fluid.

Modern CSS favors this approach.

---

## Part 5 — Aligning Numbers (Tabular Figures)

From Chapter 11, you built a table.

By default, numbers have uneven width.

This causes messy columns.

Fix it:

```
table {
  font-variant-numeric: tabular-nums;
}
```

Now all numbers line up cleanly.

This is a subtle professional touch.

---

## Applying Typography to Our Portfolio

Now we improve specific areas.

### Hero Title

```
#hero-title {
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}
```

Large, bold, and responsive.

### Section Headings

```
h2 {
  font-size: 28px;
  font-weight: 600;
}
```

Clear but not overpowering.

### Body Text

```
p {
  font-size: 15px;
}
```

Comfortable for reading.

### Table Text

```
th {
  font-weight: 600;
  font-size: 14px;
}

td {
  font-size: 14px;
}
```

Keeps data compact and clean.

### Optional — Numeric Emphasis

For stats later:

```
.stat-number {
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
}
```

This makes numbers feel structured and precise.

---

## Project Milestone — Clear Visual Hierarchy

You now have:

- intentional font pairing
- responsive hero text
- readable paragraphs
- clean section titles
- professional tables

**Your portfolio now communicates clearly.**

No more default browser look.

---

## Completed Code (Typography Additions)

```
body {
  margin: 0;
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

#hero-title {
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

h2 {
  font-size: 28px;
  font-weight: 600;
}

p {
  font-size: 15px;
}

table {
  font-variant-numeric: tabular-nums;
}

th {
  font-weight: 600;
  font-size: 14px;
}

td {
  font-size: 14px;
}
```

---

## Final Reflection

Typography isn't about making things pretty.

**It's about making information easy to absorb.**

When text feels right, users trust the product.

---

### Next Chapter:

Breaking the Default Flow — Positioning.

We'll move from appearance into real layout control.

---

**Your portfolio now has structure, color, spacing, and voice.**

**Ready to push into advanced layout in Chapter 16?**