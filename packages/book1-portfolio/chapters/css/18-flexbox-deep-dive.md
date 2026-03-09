# Chapter 18 — Flexbox Deep Dive (Columns, Cards & Control)

**Goal of This Chapter:**

Use Flexbox to build real layout sections like About, Skills, and structured content blocks.

We move from simple alignment into intentional layout design.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Flex Direction Revisited
3. Part 2 — `flex-wrap` and Responsive Stacking
4. Part 3 — Equal-Height Cards
5. Part 4 — Building a Two-Column Layout
6. Part 5 — Building the Skills Section
7. Applying Flexbox to the Portfolio
8. Project Milestone — Two-Column About + Clean Skills
9. Completed Code

---

## 1. Prerequisites

From Chapter 17:

- navigation is aligned
- layout already uses Flexbox
- forms stack predictably

Flexbox is no longer new.

Now we use it intentionally.

---

### Friction Moment — "I Can Center Things, But Layout Still Feels Hard"

Most learners stop at:

`justify-content: center;`

That's only the surface.

Flexbox is a layout engine — not a centering trick.

**This chapter unlocks real structure.**

---

## Part 1 — Flex Direction Revisited

By default:

```
display: flex;
flex-direction: row;
```

This lays items horizontally.

Switching to column:

```
flex-direction: column;
```

Stacks items vertically.

The key idea:

**Flexbox always works along a main axis.**

You choose the direction.

Everything else responds.

---

### Concept Anchor — Conveyor Belt

Imagine a conveyor belt:

- row = items move sideways
- column = items move downward

Flexbox arranges items along that belt.

---

### Micro Recap

- row → horizontal
- column → vertical

---

## Part 2 — `flex-wrap` and Responsive Stacking

Default behavior:

```
flex-wrap: nowrap;
```

Everything stays on one line.

When space runs out — overflow happens.

Enable wrapping:

```
flex-wrap: wrap;
```

Now items can move to the next line naturally.

Perfect for:

- cards
- tag lists
- responsive blocks

---

### Friction Moment — "Why Did My Layout Suddenly Overflow?"

That's `nowrap` doing its job.

Flexbox won't wrap unless you allow it.

---

### Micro Recap

Use `flex-wrap: wrap` for responsive layouts.

---

## Part 3 — Equal-Height Cards

Flexbox automatically stretches items to the same height.

Default:

```
align-items: stretch;
```

That's why columns line up nicely.

If one column has more text, the other grows to match height.

This creates clean card layouts with zero hacks.

---

### Why This Is Powerful

Old CSS required:

- floats
- hacks
- fake equal heights

Flexbox does it naturally.

---

### Micro Recap

Flexbox keeps columns balanced by default.

---

## Part 4 — Building a Two-Column Layout

Let's create a real About section that matches where our portfolio is heading.

HTML:

```
<section class="section" id="about" aria-labelledby="about-title">
    <div class="panel panel--about">
        <div class="about-inner">
            <h2 id="about-title">About Me</h2>

            <p>
                Hi! I'm John, a passionate developer who loves crafting beautiful and
                functional web experiences.
            </p>

            <p>
                I specialize in building modern web applications with a focus on user
                experience, clean architecture, and scalable solutions.
            </p>

            <a href="../assets/docs/john-doe-cv.pdf">Download My CV</a>
        </div>
    </div>
</section>
```

CSS:

```
.panel {
    border-radius: 18px;
    padding: 46px;
}

.panel--about {
    background: #e6e6e6;
}

.about-inner {
    max-width: 82ch;
    margin: 0 auto;
}
```

What happened:

- the About section is wrapped in a panel — a styled container
- content is centered with a max character width for readability
- no two-column split here — About is a focused, single-column reading block

That's intentional. Not every section needs two columns.

Good layout means knowing when columns help and when they don't.

---

## Part 5 — Building the Skills Section

The Skills section uses a grid of cards — not a table, and not a flex row.

Each card represents a category:

- Frontend
- Backend
- Tools
- Design

Here are the first two cards to get you started:

```
<section id="skills" class="section" aria-labelledby="skills-title">
  <h2 id="skills-title">Skills & Technologies</h2>

  <div class="skills-grid">

    <article class="skill-card" aria-labelledby="skills-frontend-title">
      <header>
        <h3 id="skills-frontend-title">Frontend</h3>
      </header>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Next.js</li>
      </ul>
    </article>

    <article class="skill-card" aria-labelledby="skills-backend-title">
      <header>
        <h3 id="skills-backend-title">Backend</h3>
      </header>
      <ul>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>REST APIs</li>
      </ul>
    </article>

    <!-- Your turn — add Tools and Design cards here -->

  </div>
</section>
```

Two more cards remain: Tools and Design.

Try building them yourself before looking at the answer below.

You already have everything you need — the pattern is identical.

Tools contains:

- GitHub
- Docker
- VS Code
- Figma

Design contains:

- UI/UX
- Prototyping
- Responsive Design

### Exercise Answer

```
<article class="skill-card" aria-labelledby="skills-tools-title">
  <header>
    <h3 id="skills-tools-title">Tools</h3>
  </header>
  <ul>
    <li>GitHub</li>
    <li>Docker</li>
    <li>VS Code</li>
    <li>Figma</li>
  </ul>
</article>

<article class="skill-card" aria-labelledby="skills-design-title">
  <header>
    <h3 id="skills-design-title">Design</h3>
  </header>
  <ul>
    <li>UI/UX</li>
    <li>Prototyping</li>
    <li>Responsive Design</li>
  </ul>
</article>
```

If yours matched — you're thinking like a developer.

Patterns in HTML are meant to be repeated.

Once you've seen one card, you've seen all of them.

The CSS stays exactly the same — nothing new needed.

The grid handles the layout automatically as you add more cards.

---

## Improving the Contact Layout

The contact section uses a two-column layout: info on the left, form on the right.

Let's structure it.

HTML:

```
<section id="contact" class="section" aria-labelledby="contact-title">
    <div class="contact-grid">
        <div class="contact-left">
            <h2 id="contact-title">Get in Touch</h2>

            <section class="contact-info" aria-label="Contact information">
                <p class="contact-email">
                    <a href="mailto:johndoe@email.com">Johndoe@email.com</a>
                </p>
            </section>
        </div>

        <section class="contact-form" aria-label="Contact form">
            <form action="#" method="post">
                <p>
                    <label for="name">Name</label><br />
                    <input id="name" name="name" type="text" autocomplete="name" />
                </p>

                <p>
                    <label for="email">Email</label><br />
                    <input id="email" name="email" type="email" autocomplete="email" />
                </p>

                <p>
                    <label for="message">Message</label><br />
                    <textarea id="message" name="message" rows="6"></textarea>
                </p>

                <button type="submit">Send Message</button>
            </form>
        </section>
    </div>
</section>
```

CSS:

```
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    align-items: center;
    gap: 36px;
}

.contact-form {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 18px;
}
```

Notice this uses CSS Grid, not Flexbox — two defined columns with specific proportions.

The form gets slightly more space (1.1fr) because it contains more content.

---

### Micro Recap

Flexbox is now shaping whole sections — not just centering buttons.

---

## Project Milestone — Two-Column About + Clean Skills

You now have:

- balanced About section
- flexible Skills layout
- responsive card foundations
- structured Contact layout

**Your site feels designed, not stacked.**

---

## Completed Code (Flex Layout Additions)

```
.panel {
    border-radius: 18px;
    padding: 46px;
}

.panel--about {
    background: #e6e6e6;
}

.about-inner {
    max-width: 82ch;
    margin: 0 auto;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    max-width: 920px;
    margin: 0 auto;
}

.skill-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 18px;
}

.skill-card header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
}

.skill-card ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-card li {
    font-size: 11px;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    padding: 6px 10px;
    border-radius: 999px;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    align-items: center;
    gap: 36px;
}

.contact-form {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    padding: 18px;
}
```

---

## Final Reflection

Flexbox isn't about centering.

**It's about flow, balance, and adaptability.**

Once you think in flexible containers instead of fixed pixels, layouts become simple.

---

### Next Chapter:

The Mosaic — CSS Grid.

We move from one-dimensional flow to two-dimensional layout systems.

---

**Flexbox now works for you instead of against you.**

**Ready to level up with Grid in Chapter 19?**