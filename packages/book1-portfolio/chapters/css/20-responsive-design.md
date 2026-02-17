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

- Projects use Grid with `auto-fit`
- Flexbox controls About and Contact
- Typography uses `clamp()`

You already did part of the work.

Now we refine it.

---

## Part 1 — Mobile-First Thinking

Mobile-first means:

- Write base styles for small screens.
- Add enhancements for larger screens.

Not the other way around.

Why?

Because small screens are stricter.

They force clarity.

---

## Part 2 — The Viewport Meta Tag

From HTML Chapter 1, ensure this exists in `<head>`:

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without it:

- Mobile devices zoom out.
- Layout looks tiny.

This tag tells the browser:

**"Match layout to device width."**

---

## Part 3 — Media Queries

Media queries apply styles conditionally.

Example:

```
@media (min-width: 768px) {
  body {
    background: white;
  }
}

```

This means:

Apply styles only if screen is 768px or wider.

---

## Part 4 — Content-Driven Breakpoints

Do not choose breakpoints randomly.

Resize your browser slowly.

When layout starts to feel cramped —

that is your breakpoint.

Common starting points:

- 640px (small tablets)
- 768px (tablets)
- 1024px (small laptops)

But always trust layout, not numbers.

---

## Part 5 — Responsive Images

From HTML Chapter 6, we used:

```
<img src="profile.jpg" alt="Portrait of John Doe">
```

Improve it:

```
<img
  src="profile.jpg"
  alt="Portrait of John Doe"
  loading="lazy">

```

`loading="lazy"` improves performance.

If using multiple sizes:

```
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w"
  sizes="(max-width: 600px) 100vw, 50vw"
  alt="Project preview">

```

This allows the browser to choose correct image size.

For now, `max-width: 100%` in CSS is enough for most cases.

---

## Making the Portfolio Fully Responsive

Now we refine layout.

### Step 1 — Stack About Section on Small Screens

Currently:

```
.about-layout {
  display: flex;
  gap: 40px;
}

```

Add:

```
@media (max-width: 768px) {
  .about-layout {
    flex-direction: column;
  }
}

```

Now columns stack vertically on tablets and phones.

### Step 2 — Stack Contact Section

```
@media (max-width: 768px) {
  .contact-layout {
    flex-direction: column;
  }
}

```

### Step 3 — Adjust Navigation Wrapping

```
@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }
}

```

This prevents overflow.

### Step 4 — Improve Hero Spacing

```
@media (max-width: 600px) {
  #hero-title {
    text-align: center;
  }

  section[aria-labelledby="hero-title"] {
    align-items: center;
  }
}

```

Now hero looks balanced on mobile.

### Step 5 — Grid Already Helps

Because we used:

```
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
```

Projects automatically collapse to:

- 2 columns
- then 1 column

No extra media query required.

That is modern CSS working properly.

---

## Project Milestone — Fully Adaptive Site

You now have:

- Mobile-first base styles
- Responsive typography
- Grid that adapts automatically
- Flex layouts that stack on smaller screens
- Navigation that wraps cleanly

Your portfolio now works on:

- Phones
- Tablets
- Laptops
- Large monitors

That is professional behavior.

---

## Completed Code (Responsive Additions)

```
@media (max-width: 768px) {
  .about-layout {
    flex-direction: column;
  }

  .contact-layout {
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }

  #hero-title {
    text-align: center;
  }

  section[aria-labelledby="hero-title"] {
    align-items: center;
  }
}

```

You have now completed:

Structure → Identity → Layout → Responsiveness.

Custom CSS portion of Book 1 is complete.

---

### Next:

We enter Tailwind.

A new language built on everything you now understand.

---

Your portfolio is now structurally and visually complete using pure CSS.

**Ready for Chapter 21 (Tailwind Begins)?**