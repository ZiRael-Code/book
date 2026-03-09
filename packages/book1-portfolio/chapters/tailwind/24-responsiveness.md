# Chapter 24 — Building the Page (Part 1)

**Goal of This Chapter:**

Build the About and Skills sections of your portfolio using everything you've learned so far.

Two sections. Done properly. Nothing rushed.

---

## Table of Contents

1. Prerequisites
2. Part 1 — Where We Are in the Page
3. Part 2 — Building the About Section
4. Part 3 — Building the Skills Section
5. Part 4 — The Skills Exercise
6. Project Milestone — About & Skills Complete
7. Completed Code

---

## 1. Prerequisites

From Chapters 21–23:

- Header with brand, nav, and Contact pill button ✓
- Hero with heading, description, CTA, stats, and photo ✓
- Responsive prefixes understood ✓
- Interaction patterns understood ✓

Now we build downward.

---

## Part 2 — Where We Are in the Page

Your page currently has a header containing the nav and hero.

Below that, `<main>` is empty.

We are about to fill it — section by section.

The order matches the final portfolio:

- About ← this chapter
- Skills ← this chapter
- Projects ← Chapter 25
- Contact ← Chapter 26
- Footer ← Chapter 26

---

## Part 3 — Building the About Section

The About section is a full-width panel with a grey background, readable text, and a CV download button.

It does not use two columns.

The content is centered and focused — a single reading block.

That is intentional.

Not every section needs columns.

Good layout means knowing when simplicity is the right choice.

Add this inside `<main>` as the first section:

```
<section id="about" class="py-14" aria-labelledby="about-title">
  <div class="max-w-5xl mx-auto px-6">
    <div class="bg-panel rounded-lg p-12">
      <div class="max-w-prose mx-auto">

        <h2 id="about-title"
            class="text-2xl font-bold mb-4">
          About Me
        </h2>

        <p class="text-sm text-gray-800 mb-3">
          Hi! I'm John, a passionate developer who loves crafting beautiful
          and functional web experiences. I discovered my love for coding
          during college and haven't looked back since.
        </p>

        <p class="text-sm text-gray-800 mb-3">
          I specialize in building modern web applications with a focus on
          user experience, clean architecture, and scalable solutions.
          Whether it's creating responsive interfaces or designing robust
          backend systems, I approach every project with attention to detail
          and a commitment to quality.
        </p>

        <p class="text-sm text-gray-800 mb-6">
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open source, or enjoying a good cup of coffee
          while sketching out my next project idea.
        </p>

        <a href="assets/docs/john-doe-cv.pdf"
           class="inline-flex items-center gap-2
                  bg-text text-white text-sm font-semibold
                  px-5 py-3 rounded-md
                  hover:opacity-90 transition">
          Download My CV
          <img src="assets/icons/arrow-right.svg" alt="" width="16" height="16" />
        </a>

      </div>
    </div>
  </div>
</section>
```

What's happening:

- `bg-panel` → the #e6e6e6 grey token from your config
- `rounded-lg` → 18px radius from your config
- `max-w-prose mx-auto` → centers text at a comfortable reading width — roughly 65 characters per line
- `bg-text` on the button → the near-black dark button style from the CSS version

Save. Refresh.

You should see a clean grey card with your bio and a dark download button.

---

### Friction Moment — "Should I Use `max-w-prose` or `max-w-5xl`?"

Both are in use here — and that's intentional.

`max-w-5xl` on the outer wrapper keeps the section from stretching too wide on large monitors.

`max-w-prose` on the inner text block keeps the lines from becoming too long to read comfortably.

Two widths. Two jobs.

---

## Part 4 — Building the Skills Section

The Skills section uses a 2-column grid of cards.

Each card represents one category.

Each card contains a heading and a row of pill tags.

Add this below the About section:

```
<section id="skills" class="py-14" aria-labelledby="skills-title">
  <div class="max-w-5xl mx-auto px-6">

    <h2 id="skills-title"
        class="text-2xl font-bold text-center mb-5">
      Skills & Technologies
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">

      <article class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-labelledby="skills-frontend-title">
        <header class="flex items-center gap-3 mb-3">
          <img src="assets/icons/skills-frontend.svg" alt="" width="44" height="44"
               class="p-1 bg-primary rounded-md" />
          <h3 id="skills-frontend-title"
              class="text-sm font-semibold">Frontend</h3>
        </header>
        <ul class="flex flex-wrap gap-2 list-none p-0">
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">React</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">TypeScript</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Tailwind CSS</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Next.js</li>
        </ul>
      </article>

      <article class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-labelledby="skills-backend-title">
        <header class="flex items-center gap-3 mb-3">
          <img src="assets/icons/skills-backend.svg" alt="" width="44" height="44"
               class="p-1 bg-primary rounded-md" />
          <h3 id="skills-backend-title"
              class="text-sm font-semibold">Backend</h3>
        </header>
        <ul class="flex flex-wrap gap-2 list-none p-0">
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Node.js</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">PostgreSQL</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">MongoDB</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">REST APIs</li>
        </ul>
      </article>

      <!-- Your turn — add Tools and Design cards here -->
      <!-- Tools: GitHub, Docker, VS Code, Figma -->
      <!-- Design: UI/UX, Prototyping, Responsive Design -->

    </div>
  </div>
</section>
```

Two cards are shown in full.

Two more remain.

---

## Part 5 — The Skills Exercise

Before reading the answer below, try building the Tools and Design cards yourself.

You have everything you need.

The structure is identical.

The only things that change are:

- the icon `src`
- the `aria-labelledby` id
- the `h3` text
- the list items

Give it a proper attempt.

### Exercise Answer

```
      <article class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-labelledby="skills-tools-title">
        <header class="flex items-center gap-3 mb-3">
          <img src="assets/icons/skills-tools.svg" alt="" width="44" height="44"
               class="p-1 bg-primary rounded-md" />
          <h3 id="skills-tools-title"
              class="text-sm font-semibold">Tools</h3>
        </header>
        <ul class="flex flex-wrap gap-2 list-none p-0">
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">GitHub</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Docker</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">VS Code</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Figma</li>
        </ul>
      </article>

      <article class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-labelledby="skills-design-title">
        <header class="flex items-center gap-3 mb-3">
          <img src="assets/icons/skills-design.svg" alt="" width="44" height="44"
               class="p-1 bg-primary rounded-md" />
          <h3 id="skills-design-title"
              class="text-sm font-semibold">Design</h3>
        </header>
        <ul class="flex flex-wrap gap-2 list-none p-0">
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">UI/UX</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Prototyping</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Responsive Design</li>
        </ul>
      </article>
```

If yours matched — you're thinking in patterns now.

That's exactly how real development works.

You see a component once, understand its structure, and reproduce it confidently.

---

## Project Milestone — About & Skills Complete

Your page now has:

- a full-width About panel with bio and CV download ✓
- a 2-column Skills grid with 4 category cards ✓
- pill tags for each technology ✓
- responsive stacking on small screens ✓

Save. Refresh. Resize the browser.

Watch the Skills grid go from two columns to one.

That's responsive design working without a single media query written by hand.

---

## Completed Code

### About Section

```
<section id="about" class="py-14" aria-labelledby="about-title">
  <div class="max-w-5xl mx-auto px-6">
    <div class="bg-panel rounded-lg p-12">
      <div class="max-w-prose mx-auto">
        <h2 id="about-title" class="text-2xl font-bold mb-4">About Me</h2>
        <p class="text-sm text-gray-800 mb-3">
          Hi! I'm John, a passionate developer who loves crafting beautiful
          and functional web experiences.
        </p>
        <p class="text-sm text-gray-800 mb-3">
          I specialize in building modern web applications with a focus on
          user experience, clean architecture, and scalable solutions.
        </p>
        <p class="text-sm text-gray-800 mb-6">
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open source, or enjoying a good cup of coffee.
        </p>
        <a href="assets/docs/john-doe-cv.pdf"
           class="inline-flex items-center gap-2 bg-text text-white
                  text-sm font-semibold px-5 py-3 rounded-md
                  hover:opacity-90 transition">
          Download My CV
          <img src="assets/icons/arrow-right.svg" alt="" width="16" height="16" />
        </a>
      </div>
    </div>
  </div>
</section>
```

### Skills Section

```
<section id="skills" class="py-14" aria-labelledby="skills-title">
  <div class="max-w-5xl mx-auto px-6">
    <h2 id="skills-title" class="text-2xl font-bold text-center mb-5">
      Skills & Technologies
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">

      <article class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-labelledby="skills-frontend-title">
        <header class="flex items-center gap-3 mb-3">
          <img src="assets/icons/skills-frontend.svg" alt="" width="44" height="44"
               class="p-1 bg-primary rounded-md" />
          <h3 id="skills-frontend-title" class="text-sm font-semibold">Frontend</h3>
        </header>
        <ul class="flex flex-wrap gap-2 list-none p-0">
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">React</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">TypeScript</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Tailwind CSS</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Next.js</li>
        </ul>
      </article>

      <article class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-labelledby="skills-backend-title">
        <header class="flex items-center gap-3 mb-3">
          <img src="assets/icons/skills-backend.svg" alt="" width="44" height="44"
               class="p-1 bg-primary rounded-md" />
          <h3 id="skills-backend-title" class="text-sm font-semibold">Backend</h3>
        </header>
        <ul class="flex flex-wrap gap-2 list-none p-0">
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Node.js</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">PostgreSQL</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">MongoDB</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">REST APIs</li>
        </ul>
      </article>

      <article class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-labelledby="skills-tools-title">
        <header class="flex items-center gap-3 mb-3">
          <img src="assets/icons/skills-tools.svg" alt="" width="44" height="44"
               class="p-1 bg-primary rounded-md" />
          <h3 id="skills-tools-title" class="text-sm font-semibold">Tools</h3>
        </header>
        <ul class="flex flex-wrap gap-2 list-none p-0">
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">GitHub</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Docker</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">VS Code</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Figma</li>
        </ul>
      </article>

      <article class="bg-card border border-line rounded-md p-4 brand-shadow"
               aria-labelledby="skills-design-title">
        <header class="flex items-center gap-3 mb-3">
          <img src="assets/icons/skills-design.svg" alt="" width="44" height="44"
               class="p-1 bg-primary rounded-md" />
          <h3 id="skills-design-title" class="text-sm font-semibold">Design</h3>
        </header>
        <ul class="flex flex-wrap gap-2 list-none p-0">
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">UI/UX</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Prototyping</li>
          <li class="text-xs bg-gray-100 border border-line px-3 py-1 rounded-full">Responsive Design</li>
        </ul>
      </article>

    </div>
  </div>
</section>
```

---

### Next Chapter:

Building the Page — Part 2.

We build the Projects section with 6 cards, hover interactions, and a responsive grid.

---

**Two sections down. Two to go.**

**Ready for Chapter 25?**