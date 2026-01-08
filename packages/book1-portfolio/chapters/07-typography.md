### Lesson goal

By the end of this chapter, you will understand how typography works on the web, how to choose fonts intentionally, and how to apply them in a way that feels clear, consistent, and appropriate for the message you are sending.

---

## Why typography matters

Typography is the voice of the page. Just like body language affects how people understand you, fonts affect how users understand what they are reading. Different fonts create different feelings. Some fonts feel serious, friendly, technical or even playful. Choosing the right font is very important when building any application.

---

## Typefaces vs fonts

A typeface is the overall design of the letters, while a font is a specific version of that typeface.

For example: `Inter` is a typeface, `Inter Regular 400` is a font and `Inter Bold 700` is another font. In everyday CSS work, people often say “font” when they mean “typeface”, and that is fine.


## The two main types of typefaces

Most fonts you use on the web fall into two categories: Serif and Sans Serif fonts


### Serif fonts

Serif fonts usually have small strokes at the ends of letters. They usually feel traditional, formal and serious. Serif fonts are usualy used for articles, books, editorial writing and long form reading
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

One way to add fonts to your HTML is by using the link tag. Google Fonts provides a `<link>` tag.

Example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
```

This makes the fonts available to your CSS.

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

`font-display: swap` ensures text appears immediately.

If the custom font is not ready, the browser uses a fallback font and swaps later.

This prevents invisible text and improves user experience.

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

Font size controls how large text appears. You can use `px`, `em` or `rem` as your unit when writing your font size.

```css
p {
  font-size: 16px;
}
```

Some things to remember whn choosing font size:

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

**A few good practices:**

* Left aligned text is the easiest to read
* Avoid centering long paragraphs
* Use center alignment sparingly for headings or short labels

---

## Aligning numbers with tabular numerals

Sometimes when writing numbers in tables or when writing statistics in dashboards, , they can appear uneven. In such cases, we can use `font-variant-numeric: tabular-nums` to ensure they appear even, like below:

```css
.stats {
  font-variant-numeric: tabular-nums;
}
```