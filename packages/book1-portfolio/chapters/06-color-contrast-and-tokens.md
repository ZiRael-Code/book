### Lesson goal

By the end of this chapter, you will understand how color works in CSS, how to use CSS variables as design tokens, and how to apply color in a way that is consistent, readable, and accessible.

---

## Why color matters

Color is one of the first things people notice on a website.

Good color combination improves readability and makes the site more appealing. While the opposite could make text hard to read, make your website feel less professional and confuse users.

When designing your website, don't just choose random colors, you should follow a consistent system.

---

## How CSS applies color

CSS controls color using properties like: color, background-color, border-color, e.t.c

Example:

```css
p {
  color: #111827;
}
```

* `color` controls text color
* `background-color` controls the surface behind the content, i.e: the background.
* `border-color` as the name implies, this controls the color of your border

---

## The problem with hard coded colors

Take this piece of code for example

```css
button {
  background-color: #2563eb;
}
```

There's nothing inherently wrong with defining your colors this way in your stylesheet. But it becomes a problem when your website grows and becomes really large. It then becomes hard to update later and creates inconsistencies. Imagine you have a file with 800 lines of code and you're asked to change one color from #000 to #fff and now you have to go through 500 lines of code and change all instances of that color(and probably do  the same for other files too)...that's a lot of work!
This is where CSS variables come in.

---

## CSS variables as design tokens

CSS variables allow you to store values and reuse them.

They are usually defined on the `:root` element.

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

Instead of naming colors after how they look, we name them after what they mean.

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
Remeber:

* Primary is for main actions
* Success is for positive feedback
* Danger is for errors
* Warn is for caution
* Text is for readable content like p tags and header tags
* Background is for background(surfaces)

---

## Applying tokens to components

Like we showed you earlier, this is the syntax for using css variables:

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

This way, if your brand color changes later, you can update it one place.

---

## Color contrast

Contrast is the difference between text color and background color. Low contrast makes text hard to read while high contrast improves accessibility.

Example of poor contrast:

* Light gray text on white background

Example of good contrast:

* Dark text on light background

It is really important to  understand contrast as it directly affects usability.

---

## Checking contrast ratios

There are tools that measure contrast using WCAG standards but the general rule is that normal text should have a contrast ratio of at least 4.5:1 and large text can be slightly lower

You should always check contrast for in body text, buttons, links, call to action sections

---

## Hover and disabled states

Color can also be used to communicate state.

### Hover state

Hover state is an event that is registered when the cursor is directly on an element. Hover states give feedback.

```css
.button-primary:hover {
  background-color: #1d4ed8;
}
```

When you hover over the button above, its color will change to the specified color. For most cases, hover colors should stay within the same color family.

---

### Disabled state

Disabled states are very useful when building websites, it lets the user know that a request is being processed and helps prevent double submissions. Disabled elements should look inactive but still readable. For example, below is a sample code that shows the disabled state for a button that has been clicked

```css
.button-primary:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}
```

When showing disabled state, it is good practice to combine color with opacity or cursor changes. This makes for good UX

---