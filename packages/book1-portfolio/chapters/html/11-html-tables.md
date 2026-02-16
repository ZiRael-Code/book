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

- Semantic structure (`header`, `main`, `section`, `footer`)
- Hero section
- Contact form

We will now add a new section inside `<main>` for structured data.

---

# Part 1 — When to Use Tables

Tables are for structured data.

Use tables when:

- Comparing items
- Displaying structured information
- Showing rows and columns of data

Do NOT use tables for layout.

Modern layout is handled by CSS.
Tables are for data only.

---

# Part 2 — Basic Table Structure

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

Let's break this down.

- `<table>` → wraps the entire table
- `<tr>` → table row
- `<th>` → table header cell
- `<td>` → table data cell

Rows contain cells.

Cells live inside rows.

---

## Part 3 — `<thead>` and `<tbody>`

For better structure, we separate:

- Table head
- Table body

Structure:

```
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

- Improves accessibility
- Improves readability
- Makes large tables easier to manage

---

## Part 4 — `<th>` vs `<td>`

- `<th>` → header cell
- `<td>` → data cell

`<th>` is used for column or row labels.

Screen readers treat `<th>` differently.

It communicates structure.

**Never replace `<th>` with `<td>` for headers.**

---

## Part 5 — `<caption>`

`<caption>` describes the table.

It must be placed directly inside `<table>`, at the top.

Example:

```
<table>
  <caption>Technical Skills Overview</caption>
  ...
</table>
```

This improves:

- Accessibility
- Context
- Clarity

Users immediately understand what the table represents.

---

## Part 6 — Apply This to the Portfolio

We will now add a Skills section with a table.

Inside `<main>`, add this **ABOVE** the contact section:

```
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
```

Save.

Refresh your browser.

You now see a structured table.

It may look plain.
**That is correct.**

Structure first.

Design later.

---

## Why This Matters

Without tables:

- Data becomes messy paragraphs.
- Comparisons become unclear.
- Structure becomes confusing.

With tables:

- Data is aligned.
- Relationships are clear.
- Accessibility improves.

**Tables are powerful when used correctly.**

---

## Project Milestone — Simple Data Table

You now have:

- Navigation
- Hero section
- Skills table
- Contact form
- Footer

Your portfolio now contains:

- Structured navigation
- Meaningful content
- Data representation
- Interactive form

**Book 1 HTML foundation is complete.**

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

## End of Book 1 HTML Foundation

The learner can now:

- Write structured HTML
- Use semantic layout elements
- Build navigation
- Structure content meaningfully
- Create forms
- Create data tables

**Foundation complete.**

---

**Ready to outline Book 2 — Intermediate & Advanced HTML?**