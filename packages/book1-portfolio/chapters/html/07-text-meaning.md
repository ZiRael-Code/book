# Chapter 7 - Typography

## Personal Reasoning

Typography shapes how users perceive content, affects readability, and influences the overall feel of a website.. Using CSS variables for font families ensures consistency and simplifies updates, while variable fonts can improve performance and flexibility.

## Overall Learning

* Difference between typefaces and fonts
* Serif vs. sans serif fonts and their usage
* Choosing fonts intentionally for body, headings, and technical content
* Using Google Fonts and preconnect for performance
* Applying `font-family`, `font-size`, `font-weight`, `line-height`, and `text-align`
* Using monospaced fonts for numbers with `font-variant-numeric: tabular-nums`
* Best practices for font loading and fallbacks

---

## Why typography matters

Typography is the art of arranging text on a webpage to make it legible and visually appealing. Just like body language affects how people understand you, fonts affect how users understand what they are reading. Different fonts create different feelings. Some fonts feel serious, friendly, technical or even playful. Choosing the right font is very important when building any application.

---

## Typefaces vs fonts

A typeface is the overall design of the letters, while a font is a specific version of that typeface.

For example: `Inter` is a typeface, `Inter Regular 400` is a font and `Inter Bold 700` is another font. In everyday CSS work, people often say “font” when they mean “typeface”, and that is fine.


## The two main types of typefaces

Most fonts you use on the web fall into two categories: Serif and sans serif fonts


### Serif fonts

Serif fonts usually have small strokes at the ends of letters. They usually feel traditional, formal, and serious. Serif fonts are often used for articles, books, editorial writing, and long-form reading.
Some examples are: Times New Roman, Georgia and Merriweather

---

### Sans serif fonts

Sans serif fonts do not have extra strokes and they usually feel more modern than serif fonts. Common uses are: Websites, Apps, Dashboards and Interfaces
Some examples are: Inter, Arial, Helvetica and Roboto

For most modern web interfaces, sans serif fonts are the best default choice.

---

## Choosing fonts for this project

This project uses two fonts: Inter and Roboto Mono.

### Inter

Inter is a modern sans serif typeface designed for screens. It is usually used for body text, headings and UI labels. It is readable, neutral, and works well across devices.

---

### Roboto Mono

Roboto Mono is a monospaced typeface which means that each character takes the same width. It is used for code, numbers, technical content and statistics. Using a monospaced font for data improves clarity and alignment.

---

## Using Google Fonts

Google Fonts is a great platform to explore and use web fonts. You can visit https://fonts.google.com. There you can browse fonts, see how they look in paragraphs, compare styles and copy the HTML link to include them in your project

---

## Adding fonts to your HTML

You can add fonts to your HTML using one of these 2 methods:

* Using an online font
* Hosting custom fonts with `@font-face`

To add an online font like Google fonts to your project, you can use the `<link>` tag and then add the embed code to the href atrribute of the `link` tag. The embed code will be provided by the online service.

Example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
```

This makes the fonts available to your CSS.

Example:

```css
  h1 {
    font-family: 'Roboto Mono';
  }
```

Using online fonts is easier to set up, while performance depends on factors like caching, hosting strategy, and how the fonts are loaded.

---

## Performance and font loading

Fonts are external resources, so how you load them matters. Let's cover a few ways you can help to improve font performance.

---

### Preconnect

Preconnect allows the browser to prepare early and it improves loading speed.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

### Font display swap

`font-display: swap` ensures text appears immediately. If the custom font is not ready, the browser uses a fallback font and swaps later. This prevents invisible text and improves user experience.

```css
@font-face {
  font-family: 'Inter';
  font-display: swap;
}
```
This tells the browser to show fallback text immediately and replace it once the custom font finishes loading.
---

## Applying fonts with font family

Fonts are applied using `font-family`.

```css
body {
  font-family: "Inter", system-ui, sans-serif;
}
```

When writing your font-family, use quotes for font names with multiple words, and always include fallback fonts.

---

## Font size

Font size controls how large text appears. You can use px, em, or rem as units. In most modern projects, rem is preferred because it scales consistently with user settings.

```css
p {
  font-size: 16px;
}
```
CSS clamp() creates fluid typography by defining a minimum size, a preferred responsive size, and a maximum size. This allows text to scale smoothly without media queries. It uses the syntax `font-size: clamp(min, preferred, max)` such as `clamp(1rem, 2.5vw, 2rem)`, to ensure text remains legible on small screens and balanced on large screens. 

Here are some things to remember when choosing font size:

* Body text should usually be 16px or larger
* Headings should clearly scale above body text
* Avoid very small text

---

## Font weight

Font weight controls boldness. You can use font weight to show importance when writing.

```css
h1 {
  font-weight: 700;
}
```

Some common weights are:

* 400 - normal
* 500 - medium
* 600 - semibold
* 700 - bold

Not all fonts support every font weight. If a requested weight is unavailable, the browser will approximate it, which may affect appearance.
---

## Line height

Line height controls spacing between lines of text. Good line height makes paragraphs easier to read and prevents visual clutter.  

```css
p {
  line-height: 1.6;
}
```

---

## Text alignment

Text alignment controls horizontal flow.

```css
p {
  text-align: left;
}
```

**Here are a few good practices you should keep in mind:**

* Avoid centering long paragraphs
* Left-aligned text is the easiest to read for left-to-right languages.
* Use center alignment sparingly for headings or short labels

---

## Aligning numbers with tabular numerals

Sometimes when writing numbers in tables or dashboards, they can appear uneven. In such cases, we can use font-variant-numeric: tabular-nums to ensure consistent alignment.

```css
.stats {
  font-variant-numeric: tabular-nums;
}
```

## Code Walkthrough

**CSS Variables**

```css
:root {
  --font-body: 'Inter', system-ui, sans-serif;
  --font-heading: 'Inter', system-ui, sans-serif;
  --font-mono: 'Roboto Mono', monospace;
}
```

* `--font-body` for normal text, `--font-heading` for headings, `--font-mono` for numbers/code.

**Hero Section**

```css
.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
}

.hero p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
}
```

* Uses `clamp()` to scale fonts responsively.

**Stats Section**

```css
.stats {
  font-family: var(--font-mono);
  font-size: 1.5rem;
}
```

* Monospaced font ensures numbers align evenly for readability.

**Body and Headings**

```css
body {
  font-family: var(--font-body);
}

h1, h2, h3 {
  font-family: var(--font-heading);
  margin-top: 0;
}
```

* Consistent font-family and spacing for a clean layout.


## Project Milestone

* Google Fonts loaded for Inter and Roboto Mono
* CSS variables defined for body, heading, and monospaced fonts
* Hero section uses scalable `clamp()` font sizes
* Numeric stats use monospaced font for alignment
* Font-family applied consistently across headings, body, and special sections

## Ship Note

Open the page and verify that:

* Headings and body text use Inter and scale correctly across screen sizes
* Numeric stats display evenly aligned numbers using Roboto Mono
* Fonts load quickly without invisible text (preconnect active)