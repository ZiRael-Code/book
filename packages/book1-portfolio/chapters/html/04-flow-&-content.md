# Chapter 4 — Links vs Buttons (Navigation vs Actions)

**Goal of This Chapter:**

Understand the real difference between links and buttons, why meaning matters in HTML, and properly structure the Hero Call-To-Action.

---

## Table of Contents

1. Part 1 — What Is a Link?
2. Part 2 — What Is a Button?
3. Part 3 — Accessibility & Meaning
4. Part 4 — Fixing Our Hero CTA
5. Project Milestone — Proper CTA
6. Completed Code

---

### Friction Moment — "They Look the Same, So Aren't They the Same?"

Most beginners think:

**"If I style a link to look like a button, why not just use a button?"**

Visually, they can look identical.

Structurally, they are completely different.

**And that difference matters more than you think.**

---

## Part 1 — What Is a Link?

A link uses the `<a>` element.

```
<a href="destination">Text</a>
```

**A link is for navigation.**

It moves the user:

- to another page
- to another section
- to an external website

Examples:

```
<a href="about.html">About Me</a>
<a href="#contact">Contact Section</a>
<a href="https://github.com">GitHub</a>

```

**If clicking it changes the page or location, it is a link.**

---

### Concept Anchor — Think of Links as Doors

A link is a doorway.

You walk through it and end up somewhere else.

It doesn't perform work.

It changes your location.

---

### Micro Recap

Links:

- move users
- connect pages
- create navigation

---

## Part 2 — What Is a Button?

A button uses the `<button>` element.

```
<button>Click Me</button>
```

**A button is for actions.**

It:

- submits forms
- triggers JavaScript
- performs interactions

A button does **not** navigate by default.

It does something.

---

### Common Beginner Mistake

Using buttons for navigation:

```
<button>Contact Me</button>
```

If it takes you somewhere else, it is not a button's job.

**That is navigation.**

---

### Rule to Remember

- **If it moves the user somewhere → use `<a>`**
- **If it does something on the page → use `<button>`**

---

### Why This Matters

Using the wrong element:

- breaks accessibility
- confuses screen readers
- causes unexpected behavior
- creates technical debt

**HTML is about meaning first — not looks.**

---

### Micro Recap

Buttons:

- perform actions
- do not navigate

---

## Part 3 — Accessibility & Meaning

Assistive technologies announce elements differently.

- `<a>` is announced as **"link"**
- `<button>` is announced as **"button"**

When you misuse them:

- users lose context
- navigation becomes confusing
- interfaces become harder to use

**HTML communicates with machines as much as humans.**

Structure is a language.

---

### Real Developer Scenario

In professional projects, accessibility audits fail most often because:

- buttons were used as links
- links were used as buttons

**This small mistake becomes a big problem.**

---

## Part 4 — Fixing Our Hero CTA

In Chapter 3, we had:

```
<p>
  Want to work together?
  <a href="#contact">Contact Me</a>
</p>

```

This was already correct.

It navigates to a section.

**Now we improve the structure.**

We separate the Call-To-Action visually and structurally.

Update your Hero section:

```
<body>
  <div>
    <h1 id="hero-title">John Doe</h1>
    <p class="subtitle">Full-Stack Developer</p>
    <p>I build clean, modern, and user-focused web experiences.</p>

    <a href="#contact">Contact Me</a>

    <img src="assets/profile.jpg" alt="Portrait of John Doe">
  </div>
</body>

```

Notice:

- the link stands alone
- it becomes a clear action point
- it is still a link — not a button

Later, CSS will style it to look like a button.

**Structurally, it remains correct.**

---

### Why We Don't Use `<button>` Here

If we wrote:

```
<button>Contact Me</button>
```

It would:

- not navigate
- require JavaScript
- misrepresent its purpose

**We don't add behavior prematurely.**

**We respect structure first.**

---

### Concept Anchor — Meaning Before Makeup

HTML is the skeleton.

CSS is the outfit.

**Never dress the wrong skeleton.**

---

## Project Milestone — Proper CTA

You now have:

- a correct navigation link
- clear link vs button understanding
- a well-structured Hero Call-To-Action

Your Hero section now contains:

- identity
- description
- action
- image

**This is real page composition.**

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
      <h1 id="hero-title">John Doe</h1>
      <p class="subtitle">Full-Stack Developer</p>
      <p>I build clean, modern, and user-focused web experiences.</p>

      <a href="#contact">Contact Me</a>

      <img src="assets/profile.jpg" alt="Portrait of John Doe">
    </div>
  </body>
</html>

```

---

## Final Reflection

If you remember only one thing from this chapter:

**Navigation is not an action.

Actions are not navigation.**

**Meaning always comes first in HTML.**

---

### Next Chapter:

Lists & Grouped Content.

We begin building real navigation structure and organized content.