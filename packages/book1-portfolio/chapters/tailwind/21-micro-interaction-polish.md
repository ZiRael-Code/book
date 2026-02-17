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

- Removes default margins
- Normalizes font sizing
- Sets sensible defaults

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

From HTML Chapter 9, header looked like:

```
<header id="top">
  <nav>
    <ul>
      <li><a href="#top">Home</a></li>
      ...
    </ul>
  </nav>
</header>

```

Now rewrite it using Tailwind:

```
<header id="top" class="sticky top-0 bg-bg border-b border-line z-10">
  <div class="max-w-6xl mx-auto px-6 py-4">
    <nav>
      <ul class="flex justify-center items-center gap-6 text-sm">
        <li><a href="#top" class="text-text hover:opacity-100 opacity-80">Home</a></li>
        <li><a href="#about" class="text-text hover:opacity-100 opacity-80">About</a></li>
        <li><a href="#projects" class="text-text hover:opacity-100 opacity-80">Projects</a></li>
        <li><a href="#skills" class="text-text hover:opacity-100 opacity-80">Skills</a></li>
        <li><a href="#contact" class="text-text hover:opacity-100 opacity-80">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

```

Notice:

- `flex` → from Chapter 17
- `sticky` → from Chapter 16
- `max-w-6xl mx-auto` → from Chapter 13
- `border-line` → from Chapter 14 tokens

Tailwind is not new knowledge.

It is compressed CSS knowledge.

---

## Project Milestone — First Tailwind Section

You now have:

- Tailwind installed
- Tokens mapped into config
- Header fully rewritten in utilities
- Sticky nav preserved
- Layout preserved

This confirms 1:1 mapping.

We did not redesign.

We translated.

---

## Completed Files

### input.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

### tailwind.config.js

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
      }
    }
  },
  plugins: []
}

```

---

### Next Chapter:

Tailwind + Custom CSS Together.

We learn when NOT to use utilities.

---

You are now officially bilingual:

Custom CSS

Utility CSS

**Ready for Chapter 22?**