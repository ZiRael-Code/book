# Chapter 6 - Color Contrast and Tokens

## Personal Reasoning

Color sets the tone for a website and directly affects readability, accessibility, and user perception. Using CSS variables instead of hard-coded values gives flexibility, consistency, and easier maintenance as projects scale. Understanding hover and disabled states also improves UX by visually communicating interactivity.

## Overall Learning

* How CSS handles color (color, background-color, border-color)

* The pitfalls of hard-coded colors

* CSS variables as design tokens for maintainable, reusable colors

* Semantic naming for color tokens (--color-primary, --color-success, etc.)

* Applying tokens to components

* Ensuring sufficient color contrast for accessibility

* Styling hover and disabled states for better UX

## Why color matters

Color is one of the first things people notice on a website.

Good color combinations improve readability and make the site more visually appealing. On the other hand, poor color choices could make text hard to read, make your website feel less professional, and confuse users.

When designing your website, you shouldn’t choose random colors; instead, follow a consistent system.

---

## How CSS applies color

CSS controls color using properties like `color`, `background-color`, `border-color`, etc.

Example:

```css
p {
  color: #111827;
}
```

* `color` controls the text color
* `background-color` controls the surface behind the content, i.e., the background
* `border-color` as the name implies, controls the color of your border

---

## The problem with hard-coded colors

Take this piece of code, for example:

```css
button {
  background-color: #2563eb;
}
```

There's nothing inherently wrong with defining your colors this way in your stylesheet. However, it becomes a problem when your website grows and becomes really large. It then becomes hard to update later and creates inconsistencies. Imagine you have a file with 800 lines of code and you're asked to change text color from black to gray and now you have to go through all those lines of code and change all instances of that color. That's a lot of work!
This is where CSS variables come in.

---

## CSS variables as design tokens

CSS variables allow you to store values and reuse them.
Design tokens also make accessibility improvements easier, since contrast fixes can be applied globally by adjusting token values instead of individual components. They are usually defined on the `:root` element.

```css
:root {
  --color-primary: #2563eb;
}
```

Now you can reuse them anywhere using the syntax below

```css
button {
  background-color: var(--color-primary);
}
```

This turns colors into design tokens. A token is a named value that represents a design decision.

---

## Semantic color tokens

Instead of naming colors after how they look, we name them after what they represent in the interface. This allows the actual color values to change without breaking meaning or intent.

```css
:root {
  --color-primary: #2563eb;
  --color-success: #16a34a;
  --color-danger: #dc2626;
  --color-warn: #f59e0b;
  --color-text: #111827;
  --color-bg: #ffffff;
}
```

This makes your CSS easier to understand.
Remember:

* Primary is for main actions
* Success is for positive feedback
* Danger is for errors
* Warn is for caution
* Text is for readable content like p tags and header tags
* Background is for backgrounds (surfaces)

---

## Applying tokens to components

Like we showed you earlier, this is the syntax for using CSS variables:

```css
body {
  color: var(--color-text);
  background-color: var(--color-bg);
}
```

```css
.button-primary {
  background-color: var(--color-primary);
  color: white;
}
```

This way, if your brand color changes later, you can update it in one place.

---

## Color contrast

Contrast is the difference between text color and background color. Low contrast makes text hard to read, while high contrast improves accessibility.

Example of poor contrast:

* Light gray text on a white background

Example of good contrast:

* Dark text on a light background

It is really important to understand contrast, as it directly affects usability.

---

## Checking contrast ratios

According to WCAG guidelines, normal text should have a contrast ratio of at least 4.5:1, while large text (18px or larger, or 14px bold) must have a minimum ratio of 3:1.

You should always check contrast in body text, buttons, links, call-to-action sections.

---

## Hover and disabled states

Color can also be used to communicate state.

### Hover state

A hover state occurs when the cursor is placed over an element. Hover styles provide visual feedback that the element is interactive.

```css
.button-primary:hover {
  background-color: var(--color-primary-hover);
}
```

When you hover over the button above, its color will change to the specified color. For most cases, hover colors should stay within the same color family.

---

### Disabled state

Disabled states are used to indicate that an action is currently unavailable. This may be because a requirement has not been met or an action is temporarily blocked. Disabled elements should look inactive but still be readable. For example, below is a sample code that shows the disabled state for a button that has been clicked:

```css
.button-primary:disabled {
  background-color: #94a3b8;
  color: #1f2933;
  cursor: not-allowed;
  opacity: 0.7;
}
```

Disabled elements should maintain sufficient contrast so their text remains readable.
When showing a disabled state, it is good practice to combine color with opacity or cursor changes. This makes for good UX.

---
## Code Walkthrough

* Defined root variables for background and text colors:

```css
:root {
  --color-bg: #fAf9f6;
  --color-bg-primary: #2E7EF7;
  --color-text: #36454F;
  --color-text-secondary: #fAf9f6;
  --color-primary-hover: #1d4ed8;
}
```

* Hero background uses `--color-bg`

```css
.hero{
  background-color: var(--color-bg);
}
```

* Primary button uses `--color-bg-primary` with text `--color-text-secondary`
```css
.hero-btn {
  background-color: var(--color-bg-primary);
  color: var(--color-text-secondary);
}
```

This ensures colors are centralized and easy to update.

## Project Milestone

* Defined CSS variables for primary, text, and background colors
* Applied variables consistently to the hero section and buttons
* Ensured contrast and readability are maintained

## Ship Note

Open the page in a browser. Confirm that:

* Hero section has the background color from `--color-bg`
* Button displays `--color-bg-primary` and `--color-text-secondary`
* Text is readable against the background, maintaining good contrast
