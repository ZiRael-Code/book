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

**We will now add a new section inside `<main>`.**

---

### Friction Moment — "Forms Look Complicated"

Most beginners see forms and think:

**"This is where things get hard."**

In reality, forms are just structured groups of inputs.

Once you understand the pieces, they're simple.

---

## Part 1 — What a Form Is

A form is how users **send data**.

Common examples:

- contact pages
- login screens
- search boxes
- newsletter signups

Forms don't do anything magical.

They simply collect information and send it somewhere.

**Right now, we're building structure only.**

---

### Concept Anchor — Think of a Paper Form

```html
Name: ______
Email: ______
Message: ______

```

HTML forms are just the digital version of this.

---

## Part 2 — The `<form>` Element

Basic structure:

```html
<form action="#" method="post">
</form>

```

- `action` = destination for data
- `method` = how it's sent

For now:

`action="#"` means "nowhere yet."

We'll connect it later.

---

### Micro Recap

`<form>` wraps all inputs.

---

## Part 3 — `<label>` and Why It Matters

**Every input needs a label.**

Example:

```html
<label for="email">Email</label>
<input id="email" name="email" type="email">

```

Important rule:

**The `for` value must match the input `id`.**

This creates a connection.

---

### Why This Matters

Labels:

- improve accessibility
- allow clicking text to focus fields
- help screen readers

**Inputs without labels are bad HTML.**

---

### Common Beginner Mistake

Using `placeholder` text instead of labels.

Placeholders disappear.

Labels don't.

Always use both when helpful.

---

## Part 4 — `<input>` Types

HTML gives us different input types for different data.

### Text Input

```html
<input type="text">
```

Used for names and general text.

### Email Input

```html
<input type="email">
```

Browsers validate format automatically.

### Submit Button

```
<button type="submit">Send</button>
```

This submits the form.

Why a button?

Because submission is an action.

Links navigate.

Buttons act.

---

### Micro Recap

- `text` → names
- `email` → email addresses
- `button` → submit

---

## Part 5 — Required Fields & Placeholders

### Required Fields

```html
<input type="text" required>
```

The browser prevents empty submission.

### Placeholders

```html
<input type="text" placeholder="Your name">
```

These give hints.

**But never replace labels.**

---

### Friction Moment — "But It Still Submits Without Required"

Some browsers allow bypassing.

That's okay.

HTML validation is a helper — not security.

**Real validation happens on servers.**

---

## Applying This to the Portfolio

**Now we add a Contact section.**

Insert this below your Hero section inside `<main>`:

```html
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

### Why `<textarea>`?

Use it for longer text.

Unlike `<input>`, it has opening and closing tags.

It supports multi-line content.

---

### Micro Recap

Your form now has:

- proper labels
- multiple input types
- required validation
- a submit button

---

## Project Milestone — Contact Form Markup

You now added:

- a semantic Contact section
- structured form wrapper
- accessible labels
- meaningful inputs

**Your page now collects information correctly (structurally).**

Behavior will come later.

---

## Completed Code

```html
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

## Final Reflection

**Forms aren't scary.**

They're just structured data collectors.

Once you respect labels and meaning, everything else becomes easy.

---

### Next Chapter:

Tables — understanding structured data in HTML.

We'll learn how browsers organize rows, columns, and headers.

**You're now building real web documents — not just pages.**