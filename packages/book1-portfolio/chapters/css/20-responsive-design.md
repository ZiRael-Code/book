# Chapter 20 — One Size Fits All (Responsive Design)

**Goal of This Chapter:**

Make the entire portfolio responsive using mobile-first thinking and clean media queries.

A site that works only on desktop is unfinished.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Mobile-First Thinking
3. Part 2 — The Viewport Meta Tag
4. Part 3 — Media Queries
5. Part 4 — Content-Driven Breakpoints
6. Part 5 — Responsive Images
7. Making the Portfolio Fully Responsive
8. Project Milestone — Fully Adaptive Site
9. Completed Code

---

## 1. Prerequisites

From Chapter 19:

- Projects use Grid (3-column layout)
- About, Skills, and Contact sections are already styled
- Typography uses `clamp()` for fluid sizing

You already did part of the work.

Now we make sure it survives real screen sizes.

---

## Part 1 — Mobile-First Thinking

Mobile-first means:

- Write base styles for small screens.
- Add enhancements for larger screens.

Not the other way around.

Why?

Because small screens are strict.

They force you to simplify and prioritize.

If it reads well on a phone, it usually reads well everywhere.

---

## Part 2 — The Viewport Meta Tag

From HTML Chapter 1, ensure this exists in `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Without it:

- mobile browsers zoom out
- layouts look tiny
- text becomes unreadable

This tag tells the browser:

**"Match layout to the device width."**

---

## Part 3 — Media Queries

Media queries let you apply CSS only when a condition is true.

Example:

```
@media (min-width: 768px) {
  body {
    background: white;
  }
}
```

Meaning:

Only apply this if the screen is 768px or wider.

For responsiveness, we mostly use `max-width`:

**"When the screen gets small, change the layout."**

---

## Part 4 — Content-Driven Breakpoints

Do not choose breakpoints randomly.

Open your portfolio.

Resize the browser slowly.

When a section starts to feel cramped — that's your breakpoint.

In this portfolio, we'll use:

- **980px** for mid-sized screens where 3-column Projects gets tight
- **560px** for mobile where most layouts should stack

These numbers are not magic.

They're based on when your content needs help.

---

## Part 5 — Responsive Images

From HTML Chapter 6, we already handled images structurally.

For responsiveness, the main idea is simple:

**images should never overflow their container**

In most cases:

```
img {
  max-width: 100%;
  height: auto;
}
```

And for performance, you can also add:

```
<img src="profile.jpg" alt="Portrait of John Doe" loading="lazy">
```

`loading="lazy"` tells the browser:

**"Only load this image when the user is close to it."**

---

## Making the Portfolio Fully Responsive

### Step 1 — Stack the Contact Section on Small Screens

The contact section uses a two-column grid:

```
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 36px;
}
```

On smaller screens, that needs to collapse:

```
@media (max-width: 560px) {
  .contact-grid {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 18px;
  }
}
```

This prevents:

- squeezed form fields
- awkward column compression
- tiny, unreadable spacing

### Step 2 — Collapse the Skills Grid

On small screens, two-column skill cards are too tight:

```
@media (max-width: 560px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
```

Now each skill card gets full width.

Cleaner and easier to read.

### Step 3 — Adjust the Projects Grid

On mid-sized screens, three columns becomes cramped:

```
@media (max-width: 980px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
```

So the Projects grid becomes:

- 3 columns on desktop
- 2 columns on tablets / small laptops
- 1 column on phones

### Step 4 — Navigation Wrapping

On mobile, nav links often overflow.

Fix it:

```
@media (max-width: 560px) {
  .nav-list {
    flex-wrap: wrap;
    gap: 14px;
  }
}
```

Now the menu wraps naturally.

### Step 5 — Hero Text Alignment

On desktop, left-aligned hero text feels strong.

On mobile, it can feel unbalanced.

Center it:

```
@media (max-width: 560px) {
  .hero-content {
    text-align: center;
  }
}
```

This makes the hero feel intentional, not cramped.

### Step 6 — About Panel Padding

The about panel has generous padding on desktop.

On mobile, reduce it:

```
@media (max-width: 560px) {
  .panel {
    padding: 26px;
  }
}
```

This keeps the panel comfortable without wasting space.

---

## Project Milestone — Fully Adaptive Site

You now have:

- a Projects grid that scales down cleanly
- a Contact section that stacks properly
- Skills cards that remain readable
- navigation that wraps instead of breaking
- hero content that feels balanced on mobile
- panels with mobile-friendly padding

Your portfolio now works on:

- phones
- tablets
- laptops
- large monitors

**That's what "finished" looks like.**

---

## Completed Code (Responsive Additions)

```
@media (max-width: 980px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .contact-grid {
    grid-template-columns: 1fr;
    align-items: start;
    gap: 18px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .nav-list {
    flex-wrap: wrap;
    gap: 14px;
  }

  .hero-content {
    text-align: center;
  }

  .panel {
    padding: 26px;
  }
}
```

---

## Final Reflection

Responsive design isn't "make it smaller."

**It's "make it readable."**

When your layout adapts without stress, users feel it immediately.

---

### Next

We enter Tailwind.

A new language built on everything you now understand.

---

**Your portfolio is now structurally and visually complete using pure CSS.**

**Ready for Chapter 21 (Tailwind Begins)?**