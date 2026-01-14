### Lesson goal

By the end of this chapter, you will understand what utility-first CSS is, why Tailwind exists, and how to configure it to reflect your brand design system.

---

## Why utility-first CSS exists

Traditional CSS encourages writing custom class names and styling them in separate files. This works, but it often leads to: bloated stylesheets, inconsistent spacing and colors  constant context switching between HTML and CSS and naming fatigue

Utility-first CSS solves these issues.
Instead of writing new CSS for every component, you compose designs directly in your markup using small, single-purpose classes.
Tailwind only changes how you apply CSS.

---

## What “utility-first” means

Each class does one thing.

Examples:

* `p-4` → padding
* `text-center` → text alignment
* `bg-blue-500` → background color
* `rounded-lg` → border radius

You build components by combining utilities, not by inventing new class names.

---

## Tailwind setup overview

A basic Tailwind setup includes:

* Tailwind itself
* A config file
* Preflight (its base reset)

Once installed, Tailwind scans your files and generates only the CSS you actually use.
This keeps output CSS extremely small.

---

## Preflight reset

Tailwind includes a modern CSS reset called Preflight. It normalizes browser inconsistencies, sets sensible defaults and removes opinionated styles without killing accessibility

Examples:

* Headings don’t come with random margins
* Buttons inherit font styles
* Box-sizing defaults to `border-box`

This creates a clean baseline for layout and typography.

---

## Design tokens in Tailwind

Instead of using random utility colors, you can define semantic tokens in `tailwind.config.js`.

```js
theme: {
  extend: {
    colors: {
      primary: "#2563eb",
      success: "#16a34a",
      danger: "#dc2626",
      warn: "#f59e0b",
      text: "#0f172a",
      bg: "#ffffff",
    }
  }
}
```

Now your classes become:

* `bg-primary`
* `text-danger`
* `text-text`

This keeps meaning consistent across the app.

---

## Spacing scale

Tailwind uses a spacing scale (`1`, `2`, `4`, `6`, `8`, etc.)

You can customize it to match your layout rhythm.

```js
spacing: {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
}
```

This enforces **visual consistency** and prevents random spacing decisions.

---

## Border radius tokens

Just like spacing, radius should be intentional.

```js
borderRadius: {
  sm: "4px",
  md: "8px",
  lg: "12px",
}
```

---