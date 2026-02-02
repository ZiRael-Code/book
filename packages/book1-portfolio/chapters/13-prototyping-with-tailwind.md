# Chapter 13 - Prototyping with Tailwind

## Personal Reasoning

At this point, writing raw CSS for every interaction and breakpoint slows you down. Tailwind’s variant modifiers exist to remove that friction. Instead of switching between HTML, CSS files, and media queries, you stay in one place and describe when a style applies directly next to what it does. Learning this early prevents bloated stylesheets and over-engineered component logic later.

---

# Overall Learning

By the end of this chapter, you should understand:

* What variant modifiers are and why Tailwind uses them

* How responsive variants replace traditional media queries

* How state-based variants handle interaction and accessibility

* How theme, environment, and structural variants work

* How modifiers can be stacked for precise control

* What Tailwind does not handle

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
<div class="p-4 md:p-8 lg:p-12"></div>
```

Meaning:

* "Default (p-4 in this case) applies to all screens, but will be overridden at medium (md) and large (lg) screens."
* `md:p-8` applies at medium screens
* `lg:p-12` applies at large screens


### 2. State variants

These apply styles based on interaction or state.

Examples:
* `hover:bg-gray-100` → When the user hovers over this element, apply the specified background color.
* `focus-visible:outline` → When the element receives keyboard focus, apply an outline.
* `disabled:opacity-50` → When this element has a disabled state, apply the specified opacity. 

### 3. Theme and environment variants

These depend on user or system settings.

Examples:
* `dark:bg-black` → When dark mode is active, apply a black background.
* `motion-safe:animate-spin` → Apply the animation only if the user has not requested reduced motion.

### 4. Structural variants

These depend on the element’s position or relationship.

* `first:mt-0` → If this element is the first child inside its parent, remove the top margin
* `last:border-none` → If this element is the last child inside its parent, remove the border
* `group-hover:opacity-100` → When a parent element with the class group is hovered, apply full opacity to this child

---

## Stacking states and responsiveness

You can combine modifiers like so:

```html
<button class="bg-primary hover:bg-primary/90 md:hover:bg-primary">
```

This allows precise control without writing custom selectors.

---

N.B: Tailwind does not handle time-based or scroll-based animations. These should be handled in JavaScript and will be covered later.

---

## Code Walkthrough

**Responsive Container**

```html
<div class="bg-white dark:bg-gray-800 p-4 md:p-8 lg:p-12 rounded-lg shadow">
```

`p-4 md:p-8 lg:p-12` demonstrates responsive padding

`dark:bg-gray-800` responds to system theme

**Accessible Button States**
```html
<button
  class="bg-blue-600 text-white px-5 py-3 rounded-lg
         hover:bg-blue-700
         focus-visible:outline
         focus-visible:outline-2
         focus-visible:outline-offset-2
         focus-visible:outline-blue-600">Hover or focus me</button>
```

Hover styles are visual feedback

`focus-visible` ensures keyboard users are not ignored

**Group Hover Interaction**

```html
<div class="group">
  <span class="group-hover:text-blue-600">...</span>
</div>
```

Parent controls child behavior, it eliminates descendant selectors, it keeps component logic readable

**Structural Variants in Lists**

```html
<li class="p-4 first:pt-2">...</li>
<li class="p-4 last:pb-2 last:border-none">...</li>
```

This adjusts spacing only where needed and avoids extra wrapper elements or special classes

## Project Milestone

* You should now be able to:

* Use responsive variants confidently

* Apply interaction and accessibility states

* React to system preferences like dark mode

* Control layout edges using structural modifiers

## Ship Note

Load the page, resize the browser, toggle dark mode, and interact with elements using both mouse and keyboard.
If styles change exactly when you expect them to without custom CSS, the modifier system is working as intended.