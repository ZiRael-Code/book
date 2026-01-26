### Lesson goal

By the end of this chapter, you will understand how to design and build layouts that adapt smoothly across screen sizes, using a mobile-first approach and content-driven breakpoints.

---

## Responsive design

Responsive design entails taking all screen sizes into consideration when designing a layout. Most people think of it as making things smaller for mobile, but it's really about letting your layout respond to the available space.
A responsive interface should look appealing and readable on all screen sizes including: Phones, Tablets, Laptops, Large desktop and ultrawide screens

---

## Mobile-first thinking

Mobile-first means designing for the smallest screen first, then adjusting the existing layout to fit larger screens. This means that default styles target mobile devices and then media queries are used to enhance the layout for larger screens. 
Media queries will be explained later on in this chapter.

---

## The viewport meta tag

The viewport is the visible area of a user's web page, it varies with device size.
The viewport meta tag is an HTML snippet placed in the `<head>` of a webpage, it controls how a site renders on different screen sizes. It tells the browser to match the page's width to the device's actual width (width=device-width) and set the initial zoom level (e.g., initial-scale=1.0), preventing mobile browsers from zooming out to render desktop-sized pages, ensuring content looks good on phones. 
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

The above code sets the display of the selcted element to `grid` when the screen size is at least 768px.

---

## Content-driven breakpoints

Things to check when choosing breakpoints:

* Is the layout starting to look too small for the content?
* Is the line length uncomfortable
* Do components need more space to look “okay”?

If your answers to the above questions are “yes”, then you probably need to add a breakpoint

---

## Responsive images

An image is considered responsive if it  adjusts to fit the screen size. You can easily make an image reponsive by setting the width to a percentage of the available container or space and setting the height to auto.

```css
  .responsive-img {
    width: 100%;
    height: auto;
  }
```

In the above example, the image will always take up 100% of it's container's size. 
If you set an element's height to auto, whenever screen size changes, the height of the element is recalculated by the browser so that its aspect-ratio is maintained

You can also give an image a `max-width` property so that it doesn't get bigger than the specified size
Example:
```css
  @media (min-width: 768px) {
  .rresponsive-img {
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

Lazy loading defers image loading until they enter the viewport. It helps with faster initial load, reduced data usage anf better performance on mobile

```html
<img src="photo.jpg" loading="lazy" alt="" />
```


---