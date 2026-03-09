# Chapter 23 — Rapid Prototyping with Tailwind

**Goal of This Chapter:**

Learn Tailwind's responsive prefixes and state utilities, then use them to polish the interactive parts of your portfolio.

You already know how to build with Tailwind.

Now you learn how to move fast and feel confident doing it.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Responsive Prefixes
3. Part 2 — State Utilities
4. Part 3 — Polishing the CTA Button
5. Part 4 — Polishing Form Inputs
6. Part 5 — Polishing Social Icon Links
7. Project Milestone — Interactions Complete
8. Completed Code

---

## 1. Prerequisites

From Chapter 22:

- Header and nav use Tailwind
- Hero (inside the header) uses Tailwind — including stats and photo
- Brand shadow and skip link live in `@layer components`
- Token system is mapped into config

The structure is there.

Now we sharpen the interactions before building the remaining sections.

---

## Part 1 — Responsive Prefixes

From CSS Chapter 20, you wrote media queries like this:

```
@media (max-width: 980px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

In Tailwind, responsive prefixes replace that entirely:

```
class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

Reading left to right:

- default → 1 column on small screens
- `md:` → 2 columns at 768px and above
- `lg:` → 3 columns at 980px and above

The breakpoints `md` and `lg` are already mapped to 768px and 980px in your `tailwind.config.js` from Chapter 21.

Always write the smallest screen first.

Then layer enhancements on top.

That is mobile-first — the same principle from CSS Chapter 20, just written differently.

---

### Concept Anchor — Stacking Outfits

Think of it like layering clothing.

You start with a base.

Then add things as the weather (screen size) allows.

You never start with the winter coat.

---

### Micro Recap

- Write base styles first
- Add `md:` and `lg:` prefixes for larger screens
- Breakpoints are defined in your config

---

## Part 2 — State Utilities

From CSS Chapter 14, you wrote hover rules like this:

```
button:hover {
  background: #1f5fd1;
}
```

In Tailwind, that becomes:

```
class="bg-primary hover:bg-primary-dark"
```

Other states you'll use frequently:

- `hover:` — mouse over
- `focus-visible:` — keyboard focus only (not mouse click)
- `active:` — while being clicked
- `transition` — smooth animation between states

The `transition` utility is important.

Without it, state changes are instant and feel harsh.

With it, they feel polished.

---

### Why `focus-visible:` and not `focus:`

`focus:` triggers on both mouse click and keyboard tab.

`focus-visible:` triggers only on keyboard navigation.

This means:

- keyboard users always see a clear focus ring
- mouse users don't see unnecessary outlines

That's the professional behavior.

---

### Micro Recap

- State utilities apply styles conditionally
- Always add `transition` alongside hover/focus states
- Prefer `focus-visible:` over `focus:` for interactive elements

---

## Part 3 — Polishing the CTA Button

From Chapter 22, your hero CTA looks like this:

```
<a href="#projects"
   class="inline-flex items-center gap-2
          bg-primary text-white text-sm font-semibold
          px-5 py-3 rounded-md
          hover:bg-primary-dark transition">
  View My Work
  <img src="assets/icons/arrow-right.svg" alt="" width="16" height="16" />
</a>
```

Now add keyboard focus support:

```
<a href="#projects"
   class="inline-flex items-center gap-2
          bg-primary text-white text-sm font-semibold
          px-5 py-3 rounded-md
          hover:bg-primary-dark transition
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
          focus-visible:ring-offset-2">
  View My Work
  <img src="assets/icons/arrow-right.svg" alt="" width="16" height="16" />
</a>
```

What was added:

- `focus-visible:outline-none` → removes the default browser outline
- `focus-visible:ring-2` → adds a clean custom ring instead
- `focus-visible:ring-primary` → ring uses your brand color
- `focus-visible:ring-offset-2` → small gap between element and ring

This replaces the focus CSS from Chapter 14 — same behavior, written inline.

---

### Micro Recap

Good buttons always have:

- hover color change
- smooth transition
- visible keyboard focus

---

## Part 4 — Polishing Form Inputs

From Chapter 22, your contact form inputs will use this pattern:

```
<input type="text"
       class="w-full px-3 py-2 mt-2
              border border-line rounded-md
              text-sm font-sans
              focus-visible:outline-none
              focus-visible:border-primary
              focus-visible:ring-4
              focus-visible:ring-blue-100
              transition" />
```

What each part does:

- `border border-line` → subtle grey border at rest
- `focus-visible:border-primary` → border turns blue on focus
- `focus-visible:ring-4 focus-visible:ring-blue-100` → soft blue glow around the field
- `transition` → smooth color change

This replaces the `input:focus` rules from CSS Chapter 14.

Same visual result.

---

### Friction Moment — "Why `ring-blue-100` and not `ring-primary`?"

`ring-primary` would give a solid blue ring.

`ring-blue-100` is a very light blue — almost transparent.

Combined with `ring-4` it creates a soft glow effect rather than a harsh outline.

That subtle difference is what makes forms feel professional.

---

## Part 5 — Polishing Social Icon Links

In the Contact section, each social icon is a circular link.

Here's the pattern:

```
<a href="#" aria-label="Twitter"
   class="w-9 h-9 flex items-center justify-center
          rounded-full border border-line bg-card
          brand-shadow transition
          hover:bg-primary hover:border-primary">
  <img src="assets/icons/twitter.svg" alt="" width="20" height="20" />
</a>
```

What this creates:

- `w-9 h-9` → fixed square, which `rounded-full` turns into a circle
- `flex items-center justify-content` → centers the icon inside
- `brand-shadow` → subtle depth
- `hover:bg-primary hover:border-primary` → the circle fills with brand blue on hover
- `transition` → smooth fill animation

The icon stays white against the blue background naturally because SVG icons in this portfolio are designed for it.

---

## Project Milestone — Interactions Complete

You now understand:

- how to write responsive layouts with prefixes
- how to handle hover and focus states inline
- how to make buttons, inputs, and icons feel alive

These patterns repeat across every section you build next.

You won't need to relearn them.

You'll just apply them.

---

## Completed Code

No new HTML sections were added this chapter.

The patterns you learned here are applied starting in Chapter 24.

Keep your `input.css` and `tailwind.config.js` from Chapter 22.

They are correct as-is.

---

### Next Chapter:

Building the Page — Part 1.

We build the About and Skills sections in full.

---

**The tools are sharp. Time to build.**

**Ready for Chapter 24?**