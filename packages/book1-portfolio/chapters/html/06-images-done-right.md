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

    <img src="assets/profile.jpg" alt="Portrait of John Doe">
  </div>
</body>

```

**We will now improve how this image is structured.**

---

### Friction Moment — "It Shows Up, So Isn't It Fine?"

Most beginners stop here.

The image loads.

The page looks okay.

So they move on.

But HTML isn't just about showing things.

**It's about meaning, structure, and accessibility.**

Images deserve the same care as text.

---

## Part 1 — The `<img>` Element

The image element looks like this:

```
<img src="path-to-image" alt="description">
```

Important rules:

- `<img>` is a **void element** (no closing tag)
- `src` is **required**
- `alt` is **required**

If `src` breaks, the image disappears.

If `alt` is missing, accessibility breaks.

**Both matter.**

---

### Concept Anchor — Think of `src` as the Address

Just like a house needs the correct address to be found,

an image needs the correct file path.

One wrong letter and the browser gets lost.

---

### Micro Recap

Every image needs:

- a valid `src`
- a meaningful `alt`

---

## Part 2 — The `alt` Attribute (Deep Explanation)

`alt` is **not decoration**.

It is **replacement content**.

It steps in when the image can't.

It serves three big roles:

1. Screen readers read it aloud
2. It shows if the image fails
3. Search engines understand the image

Imagine someone who cannot see your page.

Their experience becomes:

**"Portrait of John Doe smiling and facing forward."**

That sentence replaces the photo.

---

### Common Beginner Mistakes

```
<img alt="image">
<img alt="photo">
<img alt="">

```

These communicate nothing.

They defeat the purpose.

---

### Good `alt` Text

```
<img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
```

Short.

Clear.

Meaningful.

---

### Why This Matters

Accessibility is not optional.

Good developers write good `alt`.

Bad `alt` breaks real user experiences.

---

### Micro Recap

`alt` should:

- describe what matters
- replace the image meaningfully

---

## Part 3 — Decorative vs Meaningful Images

Not all images need the same treatment.

There are **two categories**.

### Meaningful Images

These **add information**.

Examples:

- profile photos
- screenshots
- product images

They must have **descriptive `alt`**.

### Decorative Images

These are **purely visual**.

Examples:

- background shapes
- flourishes
- visual noise

For these:

```
<img src="icon.svg" alt="">
```

Empty `alt` tells assistive tech to ignore it.

---

### Concept Anchor — Content vs Wallpaper

Meaningful images are like words in a sentence.

Decorative images are like wallpaper.

One communicates.

The other decorates.

---

### Micro Recap

- meaningful → describe it
- decorative → empty `alt`

---

## Part 4 — Introducing `<figure>` and `<figcaption>`

Right now your image floats alone.

HTML gives us a better structure.

Enter:

- `<figure>`
- `<figcaption>`

Use them when:

- an image stands as content
- it may have a label or description

Structure:

```
<figure>
  <img src="assets/profile.jpg" alt="Portrait of John Doe">
  <figcaption>John Doe — Full-Stack Developer</figcaption>
</figure>

```

Now the browser knows:

**"These belong together."**

---

### Why This Matters

With structure:

- screen readers connect image + caption
- layout becomes easier later
- HTML becomes more semantic

**This is professional-level markup.**

---

### Micro Recap

- `<figure>` groups visual content.
- `<figcaption>` labels it.

---

## Part 5 — Apply This to Your Portfolio

Replace:

```
<img src="assets/profile.jpg" alt="Portrait of John Doe">
```

With:

```
<figure>
  <img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
  <figcaption>John Doe — Full-Stack Developer</figcaption>
</figure>

```

Your full `<body>` should now be:

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

Refresh.

It may look similar.

**But structurally, it's far stronger.**

---

### Real Developer Scenario

When content editors add captions or SEO teams review accessibility,

this structure saves hours of fixes.

**This is why professionals do it early.**

---

## Project Milestone — Hero Image Structured Properly

You now have:

- correct `src` paths
- meaningful `alt` text
- decorative vs content understanding
- a structured image block

Your Hero section is now:

- readable
- accessible
- semantic

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

## Final Reflection

Images are not just visuals.

**They are content.**

When you treat them with structure and meaning, your site becomes more usable for everyone.

---

### Next Chapter:

Text Meaning (not styling).

We'll explore semantic text elements like:

- `<strong>`
- `<em>`
- `<mark>`
- `<small>`

**We're moving deeper into real HTML semantics.**