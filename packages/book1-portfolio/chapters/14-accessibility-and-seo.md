### Lesson goal

By the end of this chapter, you will understand how to prepare a website for real users and real environments by making it accessible, discoverable, and ready to ship.

---

## Building for everyone

Like we mentioned in previous chapters, finished websites should work for different people and different devices.

Accessibility, SEO, and performance are very important parts of every website and we're going to be discussing them in this chapter.

---

## Accessibility basics

Accessibility means people can use your site regardless of how they interact with it.

Some users use a mouse.
Some use a keyboard.
Some use screen readers.

Your job is to support all of them.

---

## Keyboard-only usability

Every interactive element must be usable with a keyboard alone.

You should be able to tab through links and buttons, activate buttons with Enter or Space and clearly see which element is focused. If you cannot use your site without a mouse, it is not accessible.

---

## Logical focus order

Focus should move in a predictable order.

Usually this means:

* Top to bottom
* Left to right
* Or following the visual layout

Avoid jumping focus around the page. If you have a good HTML structure, then usually you should already have good focus order.

---

## Visible focus styles

Focused elements must be clearly visible.

Never remove focus outlines unless you replace them with something equally clear.

```css
:focus-visible {
  outline: 2px solid blue;
}
```

This helps keyboard users know where they are on the page.

---

## Color contrast (WCAG)

Text must be readable.

Low contrast makes content hard or impossible to read for many users.

* Light text on light backgrounds is bad
* Dark text on dark backgrounds is bad

Use contrast checkers to ensure your text meets WCAG guidelines.

---

## ARIA landmarks

ARIA landmarks are accessibility features added to HTML elements to define major sections p\of a webpage. They help screen readers and keyboard users understand page structure.

You can achieve ARIA landmarks with semantic HTML5 tags like: header, banner, nav, main, footer; or ARIA attributes like: `role="banner"` on elements.

When you use proper HTML elements, ARIA is often unnecessary.
Use ARIA only when native HTML cannot express the meaning.

---

## SEO essentials

SEO means Search Engine Optimization. It is the practice of improving a website's visibility in organic(unpaid) search engine results in order to attract more users. Search engines read the structure of a webpage (HTML), so good SEO starts with good HTML.

---

## Meta description

The meta description explains your page to search engines and users.

```html
<meta name="description" content="A beginner-friendly guide to HTML, CSS, and modern frontend development.">
```

This text often appears in search results.

---

## Open Graph tags

Open Graph(OG) tags control how your site appears when shared. They define title, description and image. This matters for links shared on social platforms.

---

## Performance fundamentals

Fast sites feel better and rank better. Performance is part of user experience (UX).

---

## Image optimization

Images should be properly sized, compressed and not larger than needed. Large images slow pages down. Image optimization in CSS can be achieved by implementing responsive scaling, responsive background images, lazy loading, etc.
Lazy loading means deferring the loading of images that aren't yet showing on the screen until the user scrolls near them, which helps reduce initial page load. You can implement this by using the `loading="lazy"` HTML attribute.

---

## Font performance

Fonts can block rendering if handled poorly.

Use:

* preconnect for font providers
* font-display: swap to avoid invisible text

This ensures text appears quickly.

---

## Avoiding layout shift

Layout shift happens when content jumps after loading. A great example is ads pushing down content in a website after loading

Common causes are:

* Images without width and height
* Fonts loading late
* Ads or embeds pushing content

Always reserve space for content before it loads.

---

## Build artifacts

Shipping a site means preparing files beyond HTML and CSS.

---

## Sitemap

A sitemap helps search engines understand your site structure. It lists all important pages in one place.

---

## Favicons

Favicons help users recognize your site in tabs and bookmarks. They also show completeness and professionalism.

---
