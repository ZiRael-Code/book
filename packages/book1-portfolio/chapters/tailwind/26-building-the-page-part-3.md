# Chapter 26 — Building the Page (Part 3)

**Goal of This Chapter:**

Build the Contact section and footer, handle mobile responsiveness across the full site, and complete the portfolio.

After this chapter, the site is done.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Building the Contact Section
3. Part 2 — Building the Footer
4. Part 3 — Responsive Behavior Across the Full Site
5. Project Milestone — Portfolio Complete
6. Completed Code

---

## 1. Prerequisites

From Chapters 24 and 25:

- About section ✓
- Skills section ✓
- Projects section ✓

One section left.

Then the footer.

Then we make the whole thing work on every screen.

---

## Part 2 — Building the Contact Section

The Contact section has two columns.

The left side has the heading, email address, and social icons.

The right side has the form.

On mobile they stack vertically.

Add this below the Projects section:

```
<section id="contact" class="py-14" aria-labelledby="contact-title">
  <div class="max-w-5xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-9 items-center">

      <div>
        <h2 id="contact-title"
            class="text-3xl font-bold mb-3">
          Get in Touch
        </h2>

        <div aria-label="Contact information">

          <p class="flex items-center gap-2 text-sm font-semibold text-text mb-4">
            <img src="assets/icons/mail.svg" alt="" width="18" height="18" />
            <a href="mailto:johndoe@email.com"
               class="hover:underline">
              Johndoe@email.com
            </a>
          </p>

          <h3 class="text-sm font-semibold mb-2">Follow Me</h3>

          <ul class="flex gap-3 list-none p-0" aria-label="Social links">
            <li>
              <a href="#" aria-label="Twitter"
                 class="w-9 h-9 flex items-center justify-center
                        rounded-full border border-line bg-card
                        brand-shadow transition
                        hover:bg-primary hover:border-primary">
                <img src="assets/icons/twitter.svg" alt="" width="20" height="20" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram"
                 class="w-9 h-9 flex items-center justify-center
                        rounded-full border border-line bg-card
                        brand-shadow transition
                        hover:bg-primary hover:border-primary">
                <img src="assets/icons/instagram.svg" alt="" width="20" height="20" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn"
                 class="w-9 h-9 flex items-center justify-center
                        rounded-full border border-line bg-card
                        brand-shadow transition
                        hover:bg-primary hover:border-primary">
                <img src="assets/icons/linkedin.svg" alt="" width="20" height="20" />
              </a>
            </li>
          </ul>

        </div>
      </div>

      <section class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-label="Contact form">
        <form action="#" method="post">

          <p class="mb-3">
            <label for="name"
                   class="text-xs font-semibold text-text block mb-1">
              Name
            </label>
            <input id="name" name="name" type="text" autocomplete="name"
                   class="w-full px-3 py-2 border border-line rounded-md
                          text-sm font-sans
                          focus-visible:outline-none
                          focus-visible:border-primary
                          focus-visible:ring-4
                          focus-visible:ring-blue-100
                          transition" />
          </p>

          <p class="mb-3">
            <label for="email"
                   class="text-xs font-semibold text-text block mb-1">
              Email
            </label>
            <input id="email" name="email" type="email" autocomplete="email"
                   class="w-full px-3 py-2 border border-line rounded-md
                          text-sm font-sans
                          focus-visible:outline-none
                          focus-visible:border-primary
                          focus-visible:ring-4
                          focus-visible:ring-blue-100
                          transition" />
          </p>

          <p class="mb-3">
            <label for="message"
                   class="text-xs font-semibold text-text block mb-1">
              Message
            </label>
            <textarea id="message" name="message" rows="6"
                      class="w-full px-3 py-2 border border-line rounded-md
                             text-sm font-sans
                             focus-visible:outline-none
                             focus-visible:border-primary
                             focus-visible:ring-4
                             focus-visible:ring-blue-100
                             transition resize-none"></textarea>
          </p>

          <button type="submit"
                  class="w-full mt-1 py-3 rounded-md
                         bg-text text-white text-sm font-bold
                         hover:opacity-90 transition cursor-pointer">
            Send Message
          </button>

        </form>
      </section>

    </div>
  </div>
</section>
```

A few things worth noting:

- `grid grid-cols-1 md:grid-cols-2` → stacks on mobile, two columns from 768px up
- `resize-none` on the textarea → prevents the user from dragging it out of the layout
- `focus-visible:ring-blue-100` → soft glow, not a harsh ring — from the pattern in Chapter 23
- Social icons fill with `bg-primary` on hover — the circle color inverts to brand blue

---

## Part 3 — Building the Footer

Simple. Clean. Blue background, white text, centered.

Add this directly after the closing `</main>` tag:

```
<footer class="bg-primary text-white text-center py-4 mt-10">
  <p class="text-sm">© 2025 John Doe</p>
</footer>
```

- `bg-primary` → brand blue token
- `mt-10` → breathing space between Contact and footer

That's it.

---

## Part 4 — Responsive Behavior Across the Full Site

Most of the responsiveness is already handled by the grid prefixes in each section.

But a few things need attention specifically on small screens.

### Hero stacks on mobile

The hero uses `lg:grid-cols-2`. Below that breakpoint it's already one column. But the hero content should center on mobile.

Go back to your hero section from Chapter 22 and update the content wrapper:

```
<div class="text-center lg:text-left">
  <h1 id="hero-title" ...>
  ...
</div>
```

Text centers on mobile. Left-aligns on desktop.

### Hero photo order on mobile

On mobile the photo currently appears below the text, which is correct. No change needed.

### About panel padding on mobile

The about panel has `p-12` — generous on desktop but tight on mobile. Make it adaptive:

```
<div class="bg-panel rounded-lg p-6 md:p-12">
```

Less padding on small screens. Full padding from 768px up.

### Contact section centers on mobile

On mobile the contact section stacks to one column. The heading and info sit above the form. That's already handled by `grid-cols-1`.

But the left column text looks better centered on mobile:

```
<div class="text-center md:text-left">
  <h2 id="contact-title" ...>
  ...
</div>
```

And social icons should center too:

```
<ul class="flex justify-center md:justify-start gap-3 list-none p-0">
```

### Nav hamburger on mobile

The hamburger menu behavior — hiding the nav links and showing a three-line icon — requires the custom CSS from Chapter 22.

Make sure your `input.css``@layer components` block includes:

```
@media (max-width: 560px) {
  .main-nav {
    display: none;
  }

  .header-inner > .btn {
    width: 42px;
    height: 42px;
    padding: 0;
    border-radius: 12px;
    background: transparent;
    box-shadow: none;
    font-size: 0;
    line-height: 0;
    position: relative;
  }

  .header-inner > .btn::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 18px;
    height: 2px;
    background: #111827;
    transform: translate(-50%, -50%);
    box-shadow: 0 -6px 0 #111827, 0 6px 0 #111827;
    border-radius: 2px;
  }
}
```

This was already set in Chapter 22. If it's there, nothing needs to change.

---

### Final Resize Test

Once everything is built, do this:

Open your portfolio in the browser.

Drag the window from full width all the way down to phone size.

At each stage ask:

- Does the layout stack cleanly?
- Is anything overflowing?
- Does text remain readable?
- Do the grids respond correctly?

If something breaks — it's almost always a missing responsive prefix or a fixed width that should be `max-w-` instead.

---

## Project Milestone — Portfolio Complete

Your portfolio now has every section:

- sticky nav with brand, links, and Contact pill button ✓
- hero with heading, description, CTA, stats, and photo ✓
- about panel with bio and CV download ✓
- skills grid with 4 category cards ✓
- projects grid with 6 cards and hover interactions ✓
- contact section with email, social icons, and form ✓
- footer with brand color ✓
- responsive on all screen sizes ✓
- accessible focus states throughout ✓

This is the same portfolio you built in the HTML and CSS chapters.

Same design. Same structure. Same responsiveness.

Built with Tailwind.

---

## Completed Code

### Contact Section

```
<section id="contact" class="py-14" aria-labelledby="contact-title">
  <div class="max-w-5xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-9 items-center">

      <div class="text-center md:text-left">
        <h2 id="contact-title" class="text-3xl font-bold mb-3">Get in Touch</h2>
        <p class="flex items-center justify-center md:justify-start gap-2 text-sm font-semibold mb-4">
          <img src="assets/icons/mail.svg" alt="" width="18" height="18" />
          <a href="mailto:johndoe@email.com" class="hover:underline">Johndoe@email.com</a>
        </p>
        <h3 class="text-sm font-semibold mb-2">Follow Me</h3>
        <ul class="flex justify-center md:justify-start gap-3 list-none p-0">
          <li>
            <a href="#" aria-label="Twitter"
               class="w-9 h-9 flex items-center justify-center rounded-full
                      border border-line bg-card brand-shadow transition
                      hover:bg-primary hover:border-primary">
              <img src="assets/icons/twitter.svg" alt="" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram"
               class="w-9 h-9 flex items-center justify-center rounded-full
                      border border-line bg-card brand-shadow transition
                      hover:bg-primary hover:border-primary">
              <img src="assets/icons/instagram.svg" alt="" width="20" height="20" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="LinkedIn"
               class="w-9 h-9 flex items-center justify-center rounded-full
                      border border-line bg-card brand-shadow transition
                      hover:bg-primary hover:border-primary">
              <img src="assets/icons/linkedin.svg" alt="" width="20" height="20" />
            </a>
          </li>
        </ul>
      </div>

      <section class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-label="Contact form">
        <form action="#" method="post">
          <p class="mb-3">
            <label for="name" class="text-xs font-semibold block mb-1">Name</label>
            <input id="name" name="name" type="text" autocomplete="name"
                   class="w-full px-3 py-2 border border-line rounded-md text-sm
                          focus-visible:outline-none focus-visible:border-primary
                          focus-visible:ring-4 focus-visible:ring-blue-100 transition" />
          </p>
          <p class="mb-3">
            <label for="email" class="text-xs font-semibold block mb-1">Email</label>
            <input id="email" name="email" type="email" autocomplete="email"
                   class="w-full px-3 py-2 border border-line rounded-md text-sm
                          focus-visible:outline-none focus-visible:border-primary
                          focus-visible:ring-4 focus-visible:ring-blue-100 transition" />
          </p>
          <p class="mb-3">
            <label for="message" class="text-xs font-semibold block mb-1">Message</label>
            <textarea id="message" name="message" rows="6"
                      class="w-full px-3 py-2 border border-line rounded-md text-sm
                             focus-visible:outline-none focus-visible:border-primary
                             focus-visible:ring-4 focus-visible:ring-blue-100
                             transition resize-none"></textarea>
          </p>
          <button type="submit"
                  class="w-full mt-1 py-3 rounded-md bg-text text-white
                         text-sm font-bold hover:opacity-90 transition cursor-pointer">
            Send Message
          </button>
        </form>
      </section>

    </div>
  </div>
</section>
```

### Footer

```
<footer class="bg-primary text-white text-center py-4 mt-10">
  <p class="text-sm">© 2025 John Doe</p>
</footer>
```

### Final input.css

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {

  .brand-shadow {
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.06);
  }

  .skip-link {
    position: absolute;
    left: -999px;
    top: 12px;
    background: #0f172a;
    color: white;
    padding: 10px 12px;
    border-radius: 10px;
    z-index: 999;
  }

  .skip-link:focus {
    left: 12px;
  }

  @media (max-width: 560px) {
    .main-nav {
      display: none;
    }

    .header-inner > .btn {
      width: 42px;
      height: 42px;
      padding: 0;
      border-radius: 12px;
      background: transparent;
      box-shadow: none;
      font-size: 0;
      line-height: 0;
      position: relative;
    }

    .header-inner > .btn::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 18px;
      height: 2px;
      background: #111827;
      transform: translate(-50%, -50%);
      box-shadow: 0 -6px 0 #111827, 0 6px 0 #111827;
      border-radius: 2px;
    }
  }

}
```

---

### Next Chapter:

Accessibility, SEO & Ship.

The portfolio is complete. Now we make sure it's ready for the real world.

---

**The site is built. Now we make it bulletproof.**

**Ready for Chapter 27?**