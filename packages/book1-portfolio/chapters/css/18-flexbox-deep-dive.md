# Chapter 18 — Flexbox Deep Dive (Columns, Cards & Control)

**Goal of This Chapter:**

Use Flexbox to build real layout sections like About, Skills, and structured content blocks.

We move from alignment to layout design.

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

- Navigation is aligned.
- Layout uses Flexbox correctly.
- Forms stack predictably.

Now we improve major sections.

---

## Part 1 — Flex Direction Revisited

Default:

```
display: flex;
flex-direction: row;

```

Row → horizontal layout.

Column:

```
flex-direction: column;
```

Switching direction changes main axis.

Understanding this is critical.

---

## Part 2 — flex-wrap and Responsive Stacking

By default:

```
flex-wrap: nowrap;
```

Items stay on one line.

To allow wrapping:

```
flex-wrap: wrap;
```

This is useful for:

- Cards
- Tag lists
- Skills

---

## Part 3 — Equal-Height Cards

Flexbox naturally stretches items to equal height when:

```
align-items: stretch;
```

This is default behavior.

If two columns have different content lengths,

Flexbox can keep them visually balanced.

We will use this for About section.

---

## Part 4 — Building a Two-Column Layout

Let's improve the About section.

If you do not yet have one, create:

```
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

Now style it.

Add:

```
.about-layout {
  display: flex;
  gap: 40px;
}

.about-text,
.about-skills {
  flex: 1;
}

```

What this does:

- Creates two equal columns
- Maintains equal height
- Adds consistent spacing

---

## Part 5 — Improving the Skills Section

From HTML Chapter 11, we built a skills table.

Now imagine converting skills into card blocks later.

For now, we improve structure.

Add:

```
#skills {
  display: flex;
  flex-direction: column;
  align-items: center;
}

```

This centers content inside section.

---

## Improving Card Patterns (Preparation for Grid Later)

If you create skill cards like:

```
<div class="skill-card">HTML</div>
<div class="skill-card">CSS</div>

```

You could use:

```
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

Explanation of:

```
flex: 1 1 200px;
```

Means:

- Grow if space allows
- Shrink if needed
- Start at 200px width

This creates responsive behavior without media queries.

---

## Improving Contact Layout

From HTML Chapter 10, we built:

```
<section id="contact">
  <h2>Get in Touch</h2>
  <form>...</form>
</section>

```

Now we split into two columns:

```
<div class="contact-layout">
  <div class="contact-info">
    <p>Email info</p>
  </div>
  <div class="contact-form">
    <form>...</form>
  </div>
</div>

```

Style:

```
.contact-layout {
  display: flex;
  gap: 40px;
}

.contact-info,
.contact-form {
  flex: 1;
}

```

Now contact section feels structured.

---

## Project Milestone — Two-Column About + Clean Skills

You now have:

- Two-column About section
- Structured Skills section
- Responsive card foundation
- Balanced contact layout

Flexbox now controls layout, not just alignment.

Your portfolio feels designed.

---

## Completed Code (Flex Layout Additions)

```
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

### Next Chapter:

The Mosaic — CSS Grid.

We move from one-dimensional layout to two-dimensional layout.

---

Flexbox now works for you instead of against you.

**Ready for Chapter 19?**