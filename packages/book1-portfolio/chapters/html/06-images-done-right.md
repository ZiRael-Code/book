# Chapter 6 — Images Done Right

**Goal of This Chapter:**  
Understand how images work in HTML, use `alt` properly, and structure your Hero image using `<figure>` and `<figcaption>`.

---

## Table of Contents

1. Prerequisites
2. Part 1 — The `<img>` Element
3. Part 2 — The `alt` Attribute (Deep Explanation)
4. Part 3 — Decorative vs Meaningful Images
5. Part 4 — Introducing `<figure>` and `<figcaption>`
6. Applying This to Your Portfolio
7. Project Milestone — Hero Image Structured Properly
8. Completed Code

---

## 1. Prerequisites

From Chapter 5, your page should look like this:

```html
<body>
  <div>
    <ul>
      <li><a href="#top">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <div>
    <h1 id="hero-title">John Doe</h1>
    <p class="subtitle">Full-Stack Developer</p>
    <p>I build clean, modern, and user-focused web experiences.</p>

    <a href="#contact">Contact Me</a>

    <img src="assets/profile.jpg" alt="Portrait of John Doe">
  </div>
</body>
```

**We will now improve how this image is structured.**

---

## Part 1 — The `<img>` Element

The image element looks like this:

```
<img src="path-to-image" alt="description">
```

Important things to remember:

- `<img>` is a **void element**.
- It does NOT have a closing tag.
- It **must** have `src`.
- It **must** have `alt`.

If `src` is wrong, the image breaks.

If `alt` is missing, accessibility breaks.

### What `src` Does

`src` means **source**.

Example:

```html
<img src="assets/profile.jpg" alt="Portrait of John Doe">
```

The browser looks inside the `assets/` folder.

If the file name is wrong — even one letter — the image will not load.

**File paths must match exactly.**

---

## Part 2 — The `alt` Attribute (Deep Explanation)

This is where beginners often misunderstand things.

`alt` is **not** decoration.

It is **alternative text**.

It serves three major purposes:

1. Screen readers read it aloud.
2. It appears if the image fails to load.
3. Search engines use it to understand the image.

Imagine a blind user visiting your portfolio.

They cannot see your image.

Instead, their screen reader says:

**“Portrait of John Doe.”**

That is what `alt` does.

### Bad `alt` Examples

```
<img src="profile.jpg" alt="image">
<img src="profile.jpg" alt="photo">
<img src="profile.jpg" alt="">
```

These provide no useful information.

### Good `alt` Example

```
<img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
```

It is short.

It is clear.

It describes what matters.

---

## Part 3 — Decorative vs Meaningful Images

Not all images are equal.

There are two types:

### 1. Meaningful Images

These **add content** to the page.

Example:

- Profile photo
- Project screenshot
- Product image

These must have **descriptive `alt`**.

### 2. Decorative Images

These exist **only for design**.

Example:

- Background patterns
- Decorative icons
- Visual shapes

For decorative images:

```
<img src="icon.svg" alt="">
```

Empty `alt` tells screen readers:

**“Skip this.”**

This prevents unnecessary noise.

---

## Part 4 — Introducing `<figure>` and `<figcaption>`

Right now, your image is floating alone.

We can structure it better.

HTML provides:

- `<figure>`
- `<figcaption>`

These are used when:

- An image stands as its own content block
- The image may need a caption

Structure:

```
<figure>
  <img src="assets/profile.jpg" alt="Portrait of John Doe">
  <figcaption>John Doe — Full-Stack Developer</figcaption>
</figure>
```

`<figure>` groups the image and caption.

`<figcaption>` describes or labels the figure.

This creates **better structure**.

### Why This Matters

Without structure:

- The image is just floating content.
- There is no relationship between image and description.

With `<figure>`:

- The browser understands they belong together.
- Screen readers understand the relationship.
- Your HTML becomes more professional.

---

## Part 5 — Apply This to Your Portfolio

Now update your Hero section.

Replace this:

```
<img src="assets/profile.jpg" alt="Portrait of John Doe">
```

With this:

```
<figure>
  <img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
  <figcaption>John Doe — Full-Stack Developer</figcaption>
</figure>
```

Your full `<body>` should now look like this:

```
<body>
  <div>
    <ul>
      <li><a href="#top">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

  <div>
    <h1 id="hero-title">John Doe</h1>
    <p class="subtitle">Full-Stack Developer</p>
    <p>I build clean, modern, and user-focused web experiences.</p>

    <a href="#contact">Contact Me</a>

    <figure>
      <img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
      <figcaption>John Doe — Full-Stack Developer</figcaption>
    </figure>
  </div>
</body>
```

Save.

Refresh your browser.

Visually, it may look similar.

**Structurally, it is stronger.**

---

## Project Milestone — Hero Image Structured Properly

You now have:

- Proper `src` usage
- Proper `alt` usage
- Understanding of decorative vs meaningful images
- A structured `<figure>` element

Your Hero section now contains:

- Identity
- Description
- Call-To-Action
- Structured image with caption

**This is real semantic progress.**

---

## Completed Code

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John Doe — Developer Portfolio</title>
  </head>

  <body>
    <div>
      <ul>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

    <div>
      <h1 id="hero-title">John Doe</h1>
      <p class="subtitle">Full-Stack Developer</p>
      <p>I build clean, modern, and user-focused web experiences.</p>

      <a href="#contact">Contact Me</a>

      <figure>
        <img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
        <figcaption>John Doe — Full-Stack Developer</figcaption>
      </figure>
    </div>
  </body>
</html>
```

---

### Next Chapter:

Text Meaning (not styling).

We will learn semantic text elements like:

- `<strong>`
- `<em>`
- `<mark>`
- `<small>`

**We are gradually moving from structure to meaning.**

---

*We are building this the right way.*

**Ready for Chapter 7?**
