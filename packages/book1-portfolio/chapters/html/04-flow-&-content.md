**We are going to improve this.**

---

# Part 1 — What Is a Link?

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

# Part 2 — What Is a Button?

A button uses the `<button>` element.

```
<button>Click Me</button>
```

**A button is for actions.**

It:

- submits a form
- triggers JavaScript
- performs something interactive

A button does **NOT** navigate by default.

It performs an action.

### The Common Mistake

Many beginners use buttons for navigation.

Example (wrong approach):

```
<button>Contact Me</button>
```

If it goes to another page, that is navigation.

**Navigation should use `<a>`.**

### Rule to Remember

- **If it moves the user somewhere → use `<a>`**
- **If it does something on the page → use `<button>`**

This matters for:

- accessibility
- screen readers
- keyboard navigation
- browser behavior

**Meaning in HTML is important.**

---

# Part 3 — Accessibility & Meaning

Screen readers announce elements differently.

- `<a>` is announced as **"link"**.
- `<button>` is announced as **"button"**.

If you misuse them:

- users get confused
- accessibility breaks
- structure loses clarity

**HTML is not just visual.**

It communicates meaning to machines.

---

# Part 4 — Fixing Our Hero CTA

In Chapter 3, we wrote:

```
<p>
  Want to work together?
  <a href="#contact">Contact Me</a>
</p>
```

This is **correct** because:

- It navigates to a section on the same page.
- It is not submitting anything.
- It is not performing JavaScript.

**Now we improve it slightly.**

We separate the CTA visually in structure.

Update your Hero section to:

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

- The link is no longer inside a paragraph.
- It stands alone.
- It becomes a clear **Call-To-Action**.

Later, CSS will style it like a button.

But structurally, it remains a link.

**That is correct HTML thinking.**

### Why We Don't Use `<button>` Here

If we wrote:

```
<button>Contact Me</button>
```

It would:

- not navigate anywhere
- require JavaScript to work
- misrepresent its purpose

**We do not add behavior prematurely.**
**We respect structure first.**

---

# Project Milestone — Proper CTA

You now have:

- A correct navigation link
- A clear understanding of link vs button
- A properly structured Hero Call-To-Action

Your portfolio now has:

- Identity
- Description
- Call-To-Action
- Image

**This is beginning to look like a real Hero section.**

---

# Completed Code

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

### Next Chapter:

Lists & Grouped Content.

**We begin building real navigation structure.**

---

*We are now moving from basic structure to real page composition.*

**Ready for Chapter 5?**