# Chapter 23 — Rapid Prototyping with Tailwind

**Goal of This Chapter:**

Use Tailwind's responsive prefixes and state utilities to polish interactions and finish visual refinement.

You already understand CSS.

Now you move quickly without breaking structure.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Responsive Prefixes (`sm:`, `md:`, `lg:`)
3. Part 2 — State Utilities (`hover:`, `focus:`, `focus-visible:`)
4. Part 3 — Interactive Polish for Buttons
5. Part 4 — Improving Project Cards
6. Part 5 — Polishing Social Icons
7. Project Milestone — Interaction Complete
8. Completed Code

---

## 1. Prerequisites

From Chapter 22:

- Header uses Tailwind
- Hero uses Tailwind
- Brand shadow remains in custom CSS
- Tokens are mapped into config

Now we enhance interactions.

---

## Part 1 — Responsive Prefixes

From CSS Chapter 20, we used media queries.

In Tailwind, we use prefixes.

Example:

```
text-3xl md:text-5xl
```

Meaning:

- Default → small screens
- On medium screens and above → larger size

Common breakpoints:

- `sm:` → 640px
- `md:` → 768px
- `lg:` → 1024px
- `xl:` → 1280px

We stay mobile-first.

Always write base class first.

Then add enhancements.

---

## Part 2 — State Utilities

Instead of writing CSS like:

```
button:hover {
  background: #1f5fd1;
}

```

We write:

```
class="bg-primary hover:bg-primary-dark"
```

Other useful states:

- `focus:`
- `focus-visible:`
- `active:`
- `disabled:`
- `group-hover:`

These let us control behavior inline.

---

## Part 3 — Interactive Polish for Buttons

Update Hero CTA:

```
<a href="#projects"
   class="inline-flex items-center gap-2
          bg-primary text-white
          px-6 py-3 rounded-full
          font-semibold
          transition
          hover:bg-primary-dark
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
          focus-visible:ring-offset-2">
  View My Work
</a>

```

What we added:

- `transition` → smooth hover
- `focus-visible:ring-2` → accessible keyboard focus
- `ring-offset-2` → separation from background

This replaces our earlier CSS focus styles from Chapter 14.

---

## Part 4 — Improving Project Cards

From HTML Chapter 11, project cards contain:

- Image
- Title
- Description
- Buttons

Refactor card container:

```
<article class="bg-white rounded-lg brand-shadow
                overflow-hidden
                transition
                hover:-translate-y-1
                hover:shadow-lg">

```

What this does:

- `hover:-translate-y-1` → subtle lift
- `hover:shadow-lg` → deeper shadow
- `transition` → smooth animation

This adds motion without JavaScript.

---

## Responsive Grid Enhancement

In Chapter 19 we used Grid.

Now in Tailwind:

```
<div class="grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3">

```

Meaning:

- 1 column on small screens
- 2 columns on small tablets
- 3 columns on desktops

Cleaner than writing media queries manually.

---

## Part 5 — Polishing Social Icons

From HTML Chapter 10 (Contact section):

```
<a href="#" aria-label="Twitter"
   class="w-9 h-9
          flex items-center justify-center
          rounded-full
          border border-line
          bg-white
          transition
          hover:bg-primary
          hover:text-white">
  <img src="..." alt="">
</a>

```

This creates:

- Circular icon
- Hover color inversion
- Smooth transition

Accessible and clear.

---

## Improving Form Inputs

From HTML Chapter 10:

```
<input type="email"
       class="w-full px-4 py-3
              border border-line
              rounded-md
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary
              transition">

```

This replaces earlier CSS input focus rules.

Tailwind keeps logic consistent.

---

## Project Milestone — Interaction Complete

You now have:

- Responsive typography via prefixes
- Interactive buttons
- Lift-on-hover project cards
- Responsive grid using utilities
- Accessible focus states
- Polished social icons

Your portfolio now feels modern.

Not static.

Interactive.

---

## Completed Example Snippets

### Responsive Grid

```
<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
```

### CTA Button

```
class="bg-primary text-white px-6 py-3 rounded-full
       hover:bg-primary-dark transition
       focus-visible:ring-2 focus-visible:ring-primary"
```

### Project Card

```
class="bg-white rounded-lg brand-shadow
       transition hover:-translate-y-1 hover:shadow-lg"
```

---

### Next Chapter:

Accessibility, SEO & Ship.

We prepare this portfolio for the real world.

---

You now move quickly without losing structure.

**Ready for the final chapter?**