# Chapter 10 — Forms (HTML Only)

**Goal of This Chapter:**  
Learn how HTML forms work and build a proper contact form inside your portfolio.

We are focusing on structure only.  
No CSS.  
No JavaScript.

---

## Table of Contents

1. Prerequisites
2. Part 1 — What a Form Is
3. Part 2 — The `<form>` Element
4. Part 3 — `<label>` and Why It Matters
5. Part 4 — `<input>` Types
6. Part 5 — Required Fields & Placeholders
7. Applying This to the Portfolio
8. Project Milestone — Contact Form Markup
9. Completed Code

---

## 1. Prerequisites

From Chapter 9, your page structure should look like this (simplified):

```html
<body>

  <a href="#main">Skip to main content</a>

  <header id="top">
    <nav>
      <ul>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="main">
    <section aria-labelledby="hero-title">
      <!-- Hero content -->
    </section>
  </main>

  <footer>
    <p>© 2025 John Doe</p>
  </footer>

</body>
```

We will now add a new section inside `<main>`.

---

## Part 1 — What a Form Is

A form allows users to send data.

Examples:

- Contact forms
- Login forms
- Search bars
- Newsletter signups

Forms collect input.

Then send it somewhere.

Right now, we are only building the structure.

---

## Part 2 — The `<form>` Element

The basic structure:

```
<form action="#" method="post">
</form>
```

- `action` → where the data goes
- `method` → how the data is sent

For now:

```
action="#"
```

means “do nothing yet.”

We are focusing on markup.

---

## Part 3 — `<label>` and Why It Matters

Every input should have a label.

Example:

```
<label for="email">Email</label>
<input id="email" name="email" type="email">
```

Important rule:

**The `for` value must match the input `id`.**

This connects them.

Why this matters:

- Clicking the label focuses the input.
- Screen readers announce it correctly.
- Accessibility improves.

**Never leave inputs unlabeled.**

---

## Part 4 — `<input>` Types

Different types of input exist.

### Text

```
<input type="text">
```

Used for names and general text.

### Email

```
<input type="email">
```

Browsers validate format automatically.

### Submit Button

```
<button type="submit">Send</button>
```

This submits the form.

Notice:

We use `<button>` here.

Why?

Because this is an action.

In Chapter 4, we learned:

- `<a>` → navigation
- `<button>` → action

**Submitting a form is an action.**

---

## Part 5 — Required Fields & Placeholders

### Required

```
<input type="text" required>
```

The browser prevents submission if empty.

### Placeholder

```
<input type="text" placeholder="Enter your name">
```

This gives users a hint.

Important:

**Placeholder is not a replacement for a label.**

Always use labels.

---

## Part 6 — Apply This to the Portfolio

We now create a Contact section.

Add this inside `<main>`, below your Hero section:

```
<section id="contact" aria-labelledby="contact-title">
  <h2 id="contact-title">Get in Touch</h2>

  <form action="#" method="post">

    <p>
      <label for="name">Name</label><br>
      <input id="name" name="name" type="text" required placeholder="Your full name">
    </p>

    <p>
      <label for="email">Email</label><br>
      <input id="email" name="email" type="email" required placeholder="your@email.com">
    </p>

    <p>
      <label for="message">Message</label><br>
      <textarea id="message" name="message" rows="5" required placeholder="Write your message here"></textarea>
    </p>

    <button type="submit">Send Message</button>

  </form>
</section>
```

Important additions:

- `id="contact"` allows navigation from your menu.
- `<h2>` gives this section hierarchy under `<h1>`.
- Each input has a matching label.
- Required fields enforce validation.

### Why `<textarea>`?

`<textarea>` is used for longer text.

Unlike `<input>`, it has opening and closing tags.

Example:

```
<textarea></textarea>
```

It allows multi-line content.

---

## Project Milestone — Contact Form Markup

You now have:

- Semantic page structure
- Navigation
- Hero section
- Contact section
- Properly labeled inputs
- Required fields
- Correct submit button

Your portfolio is now interactive at a structural level.

No backend yet.

But the foundation is correct.

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

    <a href="#main">Skip to main content</a>

    <header id="top">
      <nav>
        <ul>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main id="main">

      <section aria-labelledby="hero-title">
        <h1 id="hero-title">John Doe</h1>
        <p class="subtitle"><strong>Full-Stack Developer</strong></p>
        <p>
          I build <em>clean</em>, modern, and user-focused web experiences
          with a strong focus on <mark>performance and accessibility</mark>.
        </p>
        <p><small>Currently available for freelance projects.</small></p>
        <a href="#contact">Contact Me</a>

        <figure>
          <img src="assets/profile.jpg" alt="Portrait of John Doe smiling and facing forward">
          <figcaption>John Doe — Full-Stack Developer</figcaption>
        </figure>
      </section>

      <section id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Get in Touch</h2>

        <form action="#" method="post">

          <p>
            <label for="name">Name</label><br>
            <input id="name" name="name" type="text" required placeholder="Your full name">
          </p>

          <p>
            <label for="email">Email</label><br>
            <input id="email" name="email" type="email" required placeholder="your@email.com">
          </p>

          <p>
            <label for="message">Message</label><br>
            <textarea id="message" name="message" rows="5" required placeholder="Write your message here"></textarea>
          </p>

          <button type="submit">Send Message</button>

        </form>
      </section>

    </main>

    <footer>
      <p>© 2025 John Doe</p>
    </footer>

  </body>
</html>
```

---

## Next Chapter:

Tables — understanding structured data in HTML.

**We are approaching the end of Book 1's core structure.**

---

*We are now close to completing Book 1's foundation.*

**Ready for Chapter 11 (Tables)?**