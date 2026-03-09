# Chapter 21 — A New Language (Utility-First CSS with Tailwind)

**Goal of This Chapter:**

Understand why Tailwind exists, set it up properly, and refactor one section of our portfolio using utilities.

You already understand CSS.

Now you learn how to move faster.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Why Tailwind Exists
3. Part 2 — Installing Tailwind
4. Part 3 — Understanding Preflight
5. Part 4 — Mapping Our Design Tokens
6. Part 5 — Utility-First Thinking
7. Refactoring the Header with Tailwind
8. Project Milestone — First Tailwind Section
9. Completed Code

---

## 1. Prerequisites

From:

- HTML Chapters 1–11 → You built the portfolio structure.
- CSS Chapters 12–20 → You designed it completely using custom CSS.

Now we do something important:

We do not delete everything.

We transition gradually.

---

## Part 1 — Why Tailwind Exists

Traditional CSS:

- Write class
- Write CSS rule
- Jump between files

Tailwind:

- Write styles directly in class attribute
- Use small, reusable utility classes
- No context switching

Example:

Traditional CSS:

```
.button {
  padding: 12px 18px;
  background: var(--color-primary);
  border-radius: 8px;
}
```

Tailwind equivalent:

```
<button class="px-4 py-3 bg-blue-500 rounded-lg">
```

It looks different.

But it's the same CSS principles.

Tailwind is not magic.

It is pre-written utility classes.

---

## Part 2 — Installing Tailwind

Inside your project root:

```
book1-portfolio/
```

Install via npm:

```
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

This creates:

```
tailwind.config.js
```

### Create Tailwind Entry File

Inside `styles/`, create:

```
input.css
```

Add:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Build Output File

Run:

```
npx tailwindcss -i ./styles/input.css -o ./styles/tailwind.css --watch
```

Now Tailwind compiles into:

```
styles/tailwind.css
```

### Link Tailwind in HTML

In `<head>`, remove your old CSS link:

```
<!-- <link rel="stylesheet" href="styles/base.css"> -->
```

Replace with:

```
<link rel="stylesheet" href="styles/tailwind.css">
```

Now Tailwind controls styling.

---

## Part 3 — Understanding Preflight

Tailwind includes a reset called **Preflight**.

It:

- removes default margins
- normalizes font sizing
- sets sensible defaults

It replaces our earlier reset from Chapter 12.

You do not need `* { box-sizing: border-box; }` anymore.

Tailwind handles it.

---

## Part 4 — Mapping Our Design Tokens

From Chapter 14, we created tokens like:

- `--color-primary`
- `--color-bg`
- `--color-text`

Now we map them into Tailwind.

Open `tailwind.config.js`.

Update:

```
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2f7cf6",
        "primary-dark": "#1f5fd1",
        bg: "#f8fafc",
        text: "#0f172a",
        muted: "#6b7280",
        line: "#e5e7eb"
      },
      borderRadius: {
        lg: "18px",
        md: "14px",
        sm: "12px"
      }
    }
  },
  plugins: []
}
```

Now we can write:

```
class="bg-primary text-white rounded-lg"
```

This matches our previous CSS system.

We did not lose design identity.

We translated it.

---

## Part 5 — Utility-First Thinking

Instead of:

```
.hero {
  padding: 60px 0;
}
```

We write:

```
<section class="py-16">
```

Instead of:

```
.container {
  max-width: 1100px;
  margin: 0 auto;
}
```

We write:

```
<div class="max-w-6xl mx-auto px-6">
```

Everything becomes composable.

---

## Refactoring the Header with Tailwind

Here's where things get interesting.

In the real portfolio, the `<header>` contains two things — the nav bar and the hero section.

They live together inside one `<header>` element.

Keep that structure.

Just replace the CSS classes with Tailwind utilities.

The nav bar inner row has three parts: the brand on the left, the nav links in the middle, and a Contact button on the right.

```
<header id="top" class="pt-4">

  <div class="max-w-5xl mx-auto px-6 flex items-center justify-between">

    <a href="#top" class="flex items-center gap-2 font-bold text-lg">
      <img src="assets/icons/logo-mark.svg" alt="" width="24" height="24" />
      <span>John Doe</span>
    </a>

    <nav aria-label="Primary navigation">
      <ul class="flex items-center gap-6 text-sm text-text">
        <li><a href="#top" class="opacity-90 hover:opacity-100">Home</a></li>
        <li><a href="#about" class="opacity-90 hover:opacity-100">About</a></li>
        <li><a href="#projects" class="opacity-90 hover:opacity-100">Projects</a></li>
        <li><a href="#blog" class="opacity-90 hover:opacity-100">Blog</a></li>
      </ul>
    </nav>

    <a href="#contact"
       class="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-primary-dark transition">
      Contact
    </a>

  </div>

  <!-- Hero lives here — see Chapter 22 -->

</header>
```

Notice:

- `flex items-center justify-between` → from Chapter 17 (Flexbox)
- `rounded-full` → pill button from our CSS token system
- `opacity-90 hover:opacity-100` → replaces our earlier `nav a` opacity rule
- the nav links are: Home, About, Projects, Blog — matching the real portfolio

The Contact link is a pill-shaped button, not a plain link — that's intentional.

It's the primary call-to-action in the nav.

---

## Project Milestone — First Tailwind Section

You now have:

- Tailwind installed
- Tokens mapped into config
- Header fully rewritten in utilities
- Layout preserved
- Navigation structure preserved
- Primary CTA preserved as a button-like link

This confirms 1:1 mapping.

We did not redesign.

We translated.

---

## Completed Files

### tailwind.config.js

```
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2f7cf6",
        "primary-dark": "#1f5fd1",
        bg: "#ffffff",
        text: "#0f172a",
        muted: "#6b7280",
        line: "#e5e7eb",
        panel: "#e6e6e6",
        card: "#ffffff",
      },
      borderRadius: {
        lg: "18px",
        md: "14px",
        sm: "12px",
      },
      screens: {
        md: "768px",
        lg: "980px",
      },
      maxWidth: {
        container: "1120px",
      },
    },
  },
  plugins: [],
}
```

### input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### Next Chapter:

Tailwind + Custom CSS Together.

We learn when not to use utilities.

---

You are now officially bilingual:

Custom CSS

Utility-first CSS

**Ready for Chapter 22?**