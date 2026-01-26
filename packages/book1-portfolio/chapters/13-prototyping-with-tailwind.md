### Lesson goal

By the end of this chapter, you will be able to prototype responsive, interactive interfaces quickly using Tailwind’s modifier system.

---

## Variant Modifiers

A variant Modifier tells Tailwind: “Only apply this utility under a certain condition”. That condition could be screen size, user interaction, color scheme, state of the element, etc.

---

## Types of variant modifiers in Tailwind

### 1. Responsive variants

These apply styles at certain screen sizes, they are Tailwind alternatives to CSS media queries.

Common responsive variants are:
* `sm:` small screens
* `md:` medium screens
* `lg:` large screens
* `xl:` extra large screens

Tailwind uses mobile-first responsive variants.

```html
<div class="p-4 md:p-8 lg:p-12">
```

Meaning:

* Default (p-4 in this case) applies to mobile
* `md:p-8` applies at medium screens
* `lg:p-12` applies at large screens


### 2. State variants

These apply styles based on interaction or state.

Examples:
* `hover:bg-gray-100` -> When the user hovers over this element, apply the specified background color
* `focus-visible:outline` -> When the element receives keyboard focus, apply an outline.
* `disabled:opacity-50` -> When this element has a disabled state, apply the specified opacity 

### 3. Theme and environment variants

These depend on user or system settings.

Examples:
* `dark:bg-black` -> When dark mode is active, apply a black background.
* `motion-safe:animate-spin` -> If the user prefers reduced motion, the animation will not run.

### 4. Structural variants

These depend on the element’s position or relationship.

* `first:mt-0` -> If this element is the first child inside its parent, remove the top margin
* `last:border-none` -> If this element is the last child inside its parent, remove the border
* `group-hover:opacity-100` -> When a parent element with the class group is hovered, apply full opacity to this child

---

## Stacking states and responsiveness

You can combine modifiers.

```html
<button class="bg-primary hover:bg-primary/90 md:hover:bg-primary">
```

This allows precise control without writing custom selectors.

---

N/B: Tailwind does not handle time-based or scroll-based animations. These should be handled in JavaScript and will be covered later.

---