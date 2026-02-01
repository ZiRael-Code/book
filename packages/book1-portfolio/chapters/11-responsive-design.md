# Chapter 11 - Responsive Design

## Personal Reasoning

Responsive design ensures a website works on any screen size, not just shrinking layouts for mobile. Mobile-first thinking simplifies CSS by styling small screens first, then enhancing for larger screens. Properly handling images and layouts prevents broken designs and improves user experience.

## Overall Learning

* The viewport meta tag controls how a page scales on different devices.
* Media queries adjust styles based on screen width or characteristics.
* Content-driven breakpoints help determine when layout changes are needed.
* Images can be responsive using `width: 100%; height: auto;`, `max-width`, `srcset`, `<picture>`, and lazy loading.
* Lazy loading improves performance by deferring offscreen images.

---

## Responsive design

Responsive design entails taking all screen sizes into consideration when designing a layout. Most people think of it as making things smaller for mobile, but it's really about letting your layout respond to the available space.
A responsive interface should look appealing and readable on all screen sizes including: phones, tablets, laptops, large desktop and ultrawide screens

---

## Mobile-first thinking

Mobile-first means designing for the smallest screen first, then adjusting the existing layout to fit larger screens. This means that default styles target mobile devices and then media queries are used to enhance the layout for larger screens. 
Media queries will be explained later on in this chapter.

---

## The viewport meta tag

The viewport is the visible area of a user's web page and it varies with device size.
The viewport meta tag is placed in the <head> of a webpage and controls how a site renders on different screen sizes by matching the layout width to the device width and setting the initial zoom level. 
Without the viewport meta tag, mobile browsers render pages at desktop widths and scale them down.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

The above code tells the browser to match the layout width to the device width and render at a 1:1 scale.
This tag is mandatory for responsive layouts.

---

## Media queries

Media queries allow CSS to change based on screen characteristics like width 
```css
@media (min-width: 768px) {
  .layout {
    display: grid;
  }
}
```

The above code sets the display of the selected element to grid when the screen size is at least 768px.

---

## Content-driven breakpoints

Things to check when choosing breakpoints:

* Is the layout starting to look too small for the content?
* Is the line length uncomfortable?
* Do components need more space to look “okay”?

If your answers to the above questions are “yes”, then you probably need to add a breakpoint

---

## Responsive images

An image is considered responsive if it adjusts to fit the screen size. You can easily make an image reponsive by setting the width to a percentage of the available container or space and setting the height to auto.

```css
  .responsive-img {
    width: 100%;
    height: auto;
  }
```

In the above example, the image will always take up 100% of its container's size. 
When height is set to auto, the browser automatically calculates the height based on the image’s intrinsic aspect ratio as its width changes.

You can also give an image a `max-width` property so that it doesn't get bigger than the specified size
Example:
```css
  @media (min-width: 768px) {
  .responsive-img {
    max-width: 500px;
  }
}
```
In the above example, the image will never grow beyond 500px for screen sizes of 768px and above

### srcset

srcset allows the browser to choose the best image based on screen size and resolution.

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w"
  alt=""
/>
```
* `src="image-800.jpg"`: This attribute specifies the default image source that will be used by browsers that do not support the srcset attribute, or as a fallback.
* `srcset="image-400.jpg 400w, image-800.jpg 800w"`: This attribute provides a list of alternative image files and their intrinsic widths (indicated by the w descriptor) to the browser.
* `image-400.jpg 400w`: A version of the image that is 400 pixels wide.
* `image-800.jpg 800w`: A version of the image that is 800 pixels wide.
The browser uses this list to select the most appropriate image based on the user's screen size and device pixel ratio (DPR).

### sizes

This tells the browser how much screen space the image will occupy.

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w"
  sizes="(min-width: 768px) 50vw, 100vw"
  alt=""
/>
```

When using srcset with width descriptors (w), the sizes attribute tells the browser how much space the image will occupy in the layout, allowing it to choose the most appropriate image.

---

### picture element

The `<picture>` element allows different images for different conditions.

```html
<picture>
  <source media="(min-width: 1024px)" srcset="hero-large.jpg" />
  <img src="hero-mobile.jpg" alt="" />
</picture>
```

---

## Lazy loading images

Lazy loading defers image loading until they enter the viewport. It helps with faster initial load, reduced data usage and better performance on mobile

```html
<img src="photo.jpg" loading="lazy" alt="" />
```

---

## Code Walkthrough

**Viewport Meta Tag**

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

* Ensures the page scales correctly on all devices.

**Media Queries for Layout**

```css
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; text-align: center; }
  #projects > div { grid-template-columns: repeat(2, 1fr); }
  #contact > div { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  #projects > div { grid-template-columns: 1fr; }
  #projects, #contact { padding: 3rem 1.5rem; }
}
```

* Adjusts hero, projects, and contact layouts for smaller screens.

**Responsive Images**

```css
.hero figure img,
#projects img {
  width: 100%;
  height: auto;
  max-width: 420px;
}
```

* Images resize while maintaining aspect ratio.

**Hamburger Navigation**

```css
@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav { display: none; position: absolute; width: 100%; top: 100%; }
  .nav-toggle:checked + .hamburger + .nav { display: block; }
}
```

* Toggles mobile menu visibility using a checkbox input.
While mobile-first design typically uses min-width media queries, max-width queries are also valid and sometimes clearer for adapting existing layouts. The key principle is prioritizing small screens, not the query syntax itself.

**Lazy Loading Images**

```html
<img src="photo.jpg" loading="lazy" alt="">
```

* Improves performance by loading images only when they enter the viewport.

---

## Project Milestone

* Navbar now collapses into a hamburger menu on mobile screens.
* Hero section, stats, and project grids adjust for tablets and smaller devices.
* Images across hero, projects, and about sections scale proportionally.
* Contact section stacks on narrow screens for better readability.

---
## Ship Note

* Portfolio now adapts seamlessly to mobile, tablet, and desktop.
* Project grids, hero section, and stats resize dynamically.
* Hamburger menu ensures accessible navigation on small screens.
* Images scale correctly and load efficiently with lazy loading.
