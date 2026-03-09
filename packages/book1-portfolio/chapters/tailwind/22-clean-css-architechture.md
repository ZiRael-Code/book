# Chapter 22 — Tailwind + Custom CSS Together

**Goal of This Chapter:**

Learn how to combine Tailwind utilities with small amounts of custom CSS responsibly.

Tailwind is fast.

Custom CSS is precise.

We use both intelligently.

---

## Table of Contents

1. Prerequisites
2. Part 1 — The "All or Nothing" Myth
3. Part 2 — What Tailwind Is Best At
4. Part 3 — What Custom CSS Is Still Better At
5. Part 4 — Creating a Small Custom Layer
6. Refactoring the Hero Section
7. Keeping a Brand Shadow in CSS
8. Project Milestone — Balanced System
9. Completed Code

---

## 1. Prerequisites

From Chapter 21:

- Tailwind is installed
- Tokens are mapped into config
- Header has been refactored

Your site now mixes:

- Old CSS (base.css)
- New Tailwind utilities

Now we cleanly separate responsibility.

---

## Part 1 — The "All or Nothing" Myth

Some developers say:

**"Delete all CSS. Only use Tailwind."**

That is not realistic.

Professional systems:

- Use Tailwind for layout
- Use custom CSS for brand-specific details
- Keep design tokens centralized

We follow that pattern.

---

## Part 2 — What Tailwind Is Best At

Tailwind excels at:

- Layout (flex, grid)
- Spacing (padding, margin)
- Typography sizing
- Responsive breakpoints
- State styles (hover, focus)

Example (Hero container):

```
<section class="py-16 bg-bg">
```

That replaces:

```
.hero {
  padding: 60px 0;
}
```

Clear and fast.

---

## Part 3 — What Custom CSS Is Still Better At

Tailwind becomes messy when:

- Complex shadows are repeated
- Rare animation patterns exist
- Masking or clip-path is needed
- Very specific brand styling is reused

Example from earlier CSS:

```
--shadow-soft: 0 8px 18px rgba(15, 23, 42, 0.06);
```

We do not want to rewrite this everywhere using inline utility values.

So we keep it in CSS.

---

## Part 4 — Creating a Small Custom Layer

Inside `styles/input.css`, below Tailwind imports:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom brand layer */
@layer components {
  .brand-shadow {
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.06);
  }
}
```

Now you can write:

```
<div class="brand-shadow rounded-lg">
```

You combine:

- Tailwind layout
- Custom reusable design token

Clean and intentional.

---

## Refactoring the Hero Section

The hero lives inside the `<header>`, right below the nav bar.

Keep that structure as you convert.

The hero has two sides: content on the left, profile photo on the right.

```
<!-- This goes inside <header>, below the nav div -->

<section class="max-w-5xl mx-auto px-6 pt-10 pb-0
                grid grid-cols-2 items-center gap-16"
         aria-labelledby="hero-title">

  <div>
    <h1 id="hero-title"
        class="text-5xl font-bold leading-tight tracking-tight mb-3">
      Hello,<br />I'm John Doe
    </h1>

    <p class="text-muted max-w-prose mb-5">
      Full-Stack Developer with a passion for clean design and elegant code
    </p>

    <a href="#projects"
       class="inline-flex items-center gap-2
              bg-primary text-white text-sm font-semibold
              px-5 py-3 rounded-md
              hover:bg-primary-dark transition">
      View My Work
      <img src="assets/icons/arrow-right.svg" alt="" width="16" height="16" />
    </a>

    <!-- Stats -->
    <div class="mt-6">
      <ul class="bg-card border border-line rounded-md
                 grid grid-cols-3 text-center
                 px-4 py-3 gap-2 max-w-md brand-shadow">
        <li>
          <p class="text-xl font-bold text-text">15</p>
          <p class="text-xs text-muted">Experience</p>
        </li>
        <li>
          <p class="text-xl font-bold text-text">100+</p>
          <p class="text-xs text-muted">Projects Completed</p>
        </li>
        <li>
          <p class="text-xl font-bold text-text">52</p>
          <p class="text-xs text-muted">Happy Clients</p>
        </li>
      </ul>
    </div>
  </div>

  <figure class="rounded-lg overflow-hidden brand-shadow justify-self-end max-w-sm">
    <img
      src="assets/images/profile.jpg"
      alt="Portrait of John Doe"
      width="442"
      height="537"
      class="w-full h-auto object-cover"
    />
  </figure>

</section>
```

What we used:

- `grid grid-cols-2 items-center gap-16` → two-column hero layout (Chapter 19)
- `leading-tight tracking-tight` → typography refinement (Chapter 15)
- `grid grid-cols-3` → stats row (Chapter 19)
- `brand-shadow` → custom CSS layer (Chapter 22)
- `rounded-lg overflow-hidden` → hero photo treatment (Chapter 14 tokens)

The stats block is important — it communicates experience at a glance.

Don't skip it.

---

## Keeping a Brand Shadow in CSS

Let's say project cards need the same subtle shadow everywhere.

Instead of repeating:

```
shadow-[0_8px_18px_rgba(15,23,42,0.06)]
```

We use:

```
<div class="bg-white rounded-lg brand-shadow">
```

That is cleaner.

Utilities for layout.

CSS for brand specifics.

---

## When to Choose Utility vs Custom

Use Tailwind when:

- You need spacing
- You need layout
- You need responsive tweaks
- You need hover/focus state

Use custom CSS when:

- Style is reused often and long
- It's brand-specific
- It would clutter class attributes

Balance keeps code readable.

---

## Project Milestone — Balanced System

You now have:

- Header in Tailwind
- Hero in Tailwind
- Custom brand shadow in CSS
- Token system preserved
- Responsive utilities active

You are not dependent on one system.

You control both.

That is professional flexibility.

---

## Completed Code

### input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .brand-shadow {
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.06);
  }

  .skip-link {
    position: absolute;
    left: -999px;
    top: 12px;
    background: #0f172a;
    color: white;
    padding: 10px 12px;
    border-radius: 10px;
    z-index: 999;
  }

  .skip-link:focus {
    left: 12px;
  }
}
```

---

### Next Chapter:

Rapid Prototyping with Tailwind.

We master responsive prefixes and interactive states.

---

You now understand not just how to use Tailwind —

but how to integrate it intelligently.

**Ready for Chapter 23?**