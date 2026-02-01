### Lesson goal

By the end of this chapter, you will understand what utility-first CSS is, why Tailwind exists, and how to configure it to reflect your brand design system.

---


## What utility class means

A class is a utility class if it applies a single visual style or property.

Examples:

* `p-4` → padding
* `text-center` → text alignment
* `bg-blue-500` → background color of blue
* `rounded-lg` → border radius

You build components by combining utilities, not by creating new class names. The difference between this and traditional CSS classes is that a CSS class can handle different things at the same time.
For Example:

```CSS
.hero-heading {
    text-align: center;
    font-size: 20px;
    margin-bottom: 2px;
}
```
You can see that the above css class `.hero-heading` is applying multiple styles at once as opposed to utility classes.

---

## Why utility-first CSS exists

Traditional CSS encourages writing custom class names and styling them in separate files. This works, but it often leads to bloated stylesheets, inconsistent spacing and colors, naming fatigue and constant context switching between HTML and CSS. 
Utility-first CSS solves these issues. So, instead of writing new CSS for every component, you can add utility classes to elements and that way, you can make changes safely without worrying about accidentally breaking another page that's using the same CSS.


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

Preflight is a set of base styles for Tailwind projects that are designed to smooth over cross-browser inconsistencies and make it easier for you to work within the constraints of your design system.

Here are some of the styles applied by preflight reset:

* Border styles are reset
* Headings are unstyled
* Lists are unstyled
* Images are block-level
* Images are constrained

This creates a clean baseline for layout and typography.

---

## Design tokens in Tailwind

"Instead of using random utility colors, you can define semantic tokens in tailwind.config.js (just like CSS variables discussed in earlier chapters)."

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

You can then use them like so:

* `bg-primary`
* `text-danger`
* `text-text`

---

## Spacing scale

Tailwind uses a spacing scale (listed below) but you can customize it to match your layout.

```js
spacing: {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
}
```

Example:
```HTML
  <p className="text-md text-text">"This paragraph uses the text-md utility and the text-text color token."</p>
```

---

## Border radius tokens

You can also customize your border-radius tokens in the same way. The default values are listed below. You can choose to customize these values according to what you're building.

```js
borderRadius: {
  sm: "4px",
  md: "8px",
  lg: "12px",
}
```

## Tailwind + CSS Together - When to Use Tailwind and Custom CSS

Tailwind is powerful, but it is not a replacement for CSS. While Tailwind can handle the vast majority of styling needs, you may occasionally need to write raw CSS for highly specific, complex, or unusual design requirements that may not be easily achieved with just Tailwind.
That being said, Tailwind is best used for layout, typography, spacing and responsive design. You can use CSS in your project if there's need for complex animations, complex shadows, highly unique designs, mask images, custom gradients, clip paths, and other advanced visual effects.

---