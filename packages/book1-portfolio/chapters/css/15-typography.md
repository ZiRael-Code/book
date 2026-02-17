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

- Color tokens
- Hover and focus states
- Section backgrounds
- Structured spacing

But typography is still default system font.

We improve that now.

---

# Part 1 — Why Typography Matters

In HTML Chapter 1, we learned:

- `<h1>` defines the main title.
- `<h2>` defines section headings.
- Paragraphs hold body content.

Now we visually separate them.

Good typography creates:

- Hierarchy
- Readability
- Professional polish

Bad typography creates:

- Visual confusion
- Fatigue
- Weak design

---

# Part 2 — Choosing Fonts (Inter & Roboto Mono)

We use:

- **Inter** → clean, modern, readable
- **Roboto Mono** → for numeric data and stats

---

## Step 1 — Add Google Fonts

In your HTML `<head>`, add:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet">
```

display=swap ensures performance.

---

## Step 2 — Apply in CSS

Update body in base.css:

```
body {
  margin: 0;
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

```

Line height increased slightly for readability.

---

## Part 3 — Font Properties Explained

### Font Weight

```
h1 {
  font-weight: 700;
}

```

Heavier weight → stronger emphasis.

### Font Size

Instead of fixed sizes everywhere:

```
h1 {
  font-size: 48px;
}

```

We move toward scalable thinking soon.

### Letter Spacing

For large titles:

```
h1 {
  letter-spacing: -0.02em;
}

```

This tightens large text slightly.

### Muted Text

From Chapter 14:

```
p {
  color: var(--color-muted);
}

```

Use muted color for secondary information.

---

## Part 4 — Responsive Type with clamp()

Hardcoded font sizes break on small screens.

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

Explanation:

- Minimum: 32px
- Scales with viewport width
- Maximum: 56px

This creates fluid typography.

---

## Part 5 — Aligning Numbers (Tabular Figures)

From HTML Chapter 11, we built a table.

When numbers align unevenly, it looks messy.

Add:

```
table {
  font-variant-numeric: tabular-nums;
}

```

This makes numbers align evenly.

You can also apply it to stats in Hero section later.

---

## Applying Typography to Our Portfolio

### Improve Hero Title

Add:

```
#hero-title {
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

```

### Improve Section Headings

```
h2 {
  font-size: 28px;
  font-weight: 600;
}

```

### Improve Body Text

```
p {
  font-size: 15px;
}

```

### Improve Table Text

```
th {
  font-weight: 600;
  font-size: 14px;
}

td {
  font-size: 14px;
}

```

### Apply Mono to Numbers (Optional Enhancement)

If you later create stats (from HTML Hero improvements), apply:

```
.stat-number {
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
}

```

This makes numbers feel structured.

---

## Project Milestone — Clear Visual Hierarchy

You now have:

- Professional font pairing
- Responsive hero title
- Improved paragraph readability
- Clear section heading structure
- Better table readability

Your portfolio now speaks clearly.

Typography is no longer default.

It is deliberate.

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

### Next Chapter:

Breaking the Default Flow — Positioning.

We now move from appearance to layout control.

---

Your portfolio now has structure, spacing, color, and voice.

**Ready for Chapter 16?**