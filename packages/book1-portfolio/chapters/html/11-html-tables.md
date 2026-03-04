# Chapter 11 — Tables (HTML Fundamentals)

**Goal of This Chapter:**

Understand how HTML tables work and add structured data to your portfolio.

Tables are for data — not layout.

---

## Table of Contents

1. Prerequisites
2. Part 1 — When to Use Tables
3. Part 2 — Basic Table Structure
4. Part 3 — `<thead>` and `<tbody>`
5. Part 4 — `<th>` vs `<td>`
6. Part 5 — `<caption>`
7. Applying This to the Portfolio
8. Project Milestone — Simple Data Table
9. Completed Code

---

## 1. Prerequisites

From Chapter 10, your portfolio includes:

- semantic structure (`header`, `main`, `section`, `footer`)
- a Hero section
- a Contact form

**We will now add one more section inside `<main>` for structured data.**

---

### Friction Moment — "Tables Feel Like Old-School HTML"

A lot of beginners hear "tables" and think:

**"Isn't that what people used in 2004 to build layouts?"**

Yes… and that's why tables have a bad reputation.

**But tables themselves aren't bad.**

**Using tables for layout is bad.**

Using tables for data is exactly what they're for.

---

## Part 1 — When to Use Tables

Tables are for **structured data**.

Use tables when you're working with:

- comparisons
- rows and columns
- repeated patterns of information

Examples:

- skills and experience
- pricing plans
- schedules
- feature comparisons

Do **not** use tables to position elements on a page.

Modern layout is handled by CSS.

**Tables are for data only.**

---

### Concept Anchor — Spreadsheet Thinking

If the information makes sense in Excel,

it probably makes sense as an HTML table.

Rows. Columns. Headings.

That's the mental model.

---

### Micro Recap

Tables are for:

- data relationships
- structured comparisons
- row/column information

---

## Part 2 — Basic Table Structure

Basic structure:

```html
<table>
  <tr>
    <th>Header</th>
    <th>Header</th>
  </tr>
  <tr>
    <td>Data</td>
    <td>Data</td>
  </tr>
</table>

```

Let's break it down:

- `<table>` wraps the entire table
- `<tr>` means **table row**
- `<th>` means **header cell**
- `<td>` means **data cell**

Rows contain cells.

Cells live inside rows.

---

### Common Beginner Mistake

Putting table cells directly inside `<table>` without a row:

```html
<table>
  <td>HTML</td>
</table>

```

That's invalid structure.

**Cells must always be inside `<tr>`.**

---

### Micro Recap

- `<table>` → contains rows
- `<tr>` → contains cells
- `<th>` and `<td>` → the cells themselves

---

## Part 3 — `<thead>` and `<tbody>`

For better structure, we split the table into parts:

- `<thead>` for headings
- `<tbody>` for the main data

Structure:

```html
<table>
  <thead>
    <tr>
      <th>Skill</th>
      <th>Experience</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>HTML</td>
      <td>3 Years</td>
    </tr>
  </tbody>
</table>

```

Why this matters:

- improves accessibility
- improves readability
- helps with large tables later
- makes styling cleaner when you eventually add CSS

---

### Friction Moment — "But It Works Without Thead/Tbody"

True.

The browser can still draw it.

**But structure is about clarity, not just "it renders."**

When you write semantic markup, you future-proof your code.

---

### Micro Recap

- `<thead>` = heading rows
- `<tbody>` = data rows

---

## Part 4 — `<th>` vs `<td>`

- `<th>` is a **header cell**
- `<td>` is a **data cell**

Headers describe what the column or row means.

Screen readers use headers to understand context.

**That means `<th>` is not optional.**

Never use `<td>` where a header should be.

---

### Real Developer Scenario

In real apps (admin dashboards, reports, analytics pages),

accessible tables matter a lot.

If the table isn't structured properly, users who rely on assistive tech basically get a wall of numbers.

---

### Micro Recap

- `<th>` labels.
- `<td>` fills in the data.

---

## Part 5 — `<caption>`

`<caption>` names the table.

It must be the **first element** inside `<table>`.

Example:

```html
<table>
  <caption>Technical Skills Overview</caption>
  ...
</table>

```

This improves:

- accessibility context
- clarity for readers
- meaning for search engines

Think of it like the title of a chart.

---

### Micro Recap

A good table has:

- headers
- a caption
- a clean structure

---

## Applying This to the Portfolio

Here's something worth saying honestly.

Tables are a core part of HTML — and you now understand them properly.

But for this specific portfolio, the Skills section won't use a table.

It will use card-based layout — a more visual, modern approach that fits the design better. You'll build those cards once we get into CSS Grid.

So right now, treat the table above as a standalone exercise, not a portfolio addition.

Build it, study it, and understand the relationships between `thead`, `tbody`, `th`, and `td`.

That knowledge will carry into real projects constantly. Admin dashboards, pricing comparisons, analytics reports — tables show up everywhere professionally.

You're learning the tool. The portfolio will use a different tool for this particular section.

That said, don't delete the table exercise from your file. Keep it commented out or in a practice file. You'll want to reference it.

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
        </figure>
    </section>

    <section id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Get in Touch</h2>

        <form action="#" method="post">

            <p>
                <label for="name">Name</label><br>
                <input id="name" name="name" type="text" autocomplete="name" />
            </p>

            <p>
                <label for="email">Email</label><br>
                <input id="email" name="email" type="email" autocomplete="email" />
            </p>

            <p>
                <label for="message">Message</label><br>
                <textarea id="message" name="message" rows="6"></textarea>
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

Save.

Refresh.

It will look plain.

**That's correct.**

We're building the skeleton.

---

### Friction Moment — "The Table Looks Ugly"

Right now it looks like a default browser table.

That's fine.

What matters is:

- the data is structured
- the relationships are clear
- the markup is correct

**Design comes later.**

---

## Project Milestone — Simple Data Table

You now have:

- navigation
- a Hero section
- a Skills table
- a Contact form
- a footer

Your portfolio now supports:

- content structure
- data structure
- interactive structure

**That's a strong foundation.**

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
          <li><a href="#skills">Skills</a></li>
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

      <section id="skills" aria-labelledby="skills-title">
        <h2 id="skills-title">Skills Overview</h2>

        <table>
          <caption>Technical Skills and Experience</caption>

          <thead>
            <tr>
              <th>Technology</th>
              <th>Experience</th>
              <th>Level</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>HTML</td>
              <td>3 Years</td>
              <td>Advanced</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>3 Years</td>
              <td>Advanced</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>2 Years</td>
              <td>Intermediate</td>
            </tr>
            <tr>
              <td>React</td>
              <td>2 Years</td>
              <td>Intermediate</td>
            </tr>
          </tbody>
        </table>
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

At this point, the learner can:

- write structured HTML
- use semantic layout elements
- build navigation and sections
- create accessible forms
- present structured data with tables

**This is a real foundation — not copy/paste knowledge.**

---
