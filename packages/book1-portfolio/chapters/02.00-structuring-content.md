# Chapter 2 — Building Blocks: Structuring Content

## Personal Reasoning
Once we can place a text on a page, the next step is learning how to group and organize it.

Developing a website is not just about placing words on a screen. A page is made up of different parts that belong together.
For example: 
- Images usually exist to support or explain a nearby text.
- Navigation links are mostly related to each other and should be grouped together.
- Lists are used when we want to show a set of related items.

When these parts are not structured correctly, the page becomes harder to understand — not only for users, but for the developer and browser.

The purpose of this chapter is to turn loose content into clear building blocks.

## Overall Learning
- Nesting rules
- Block vs inline elements
- Links `<a>`
- Images `<img>`
- Lists `<ul>`, `<ol>`, `<li>`
- Emphasis `<strong>` and `<em>`
- Alt text rules (meaningful vs decorative)
- Inline SVG basics with `aria-hidden`

## Explanation

### Nesting rules
HTML nesting describes how HTML elements are placed inside other HTML elements to show that they belong together.

In HTML, content is rarely alone. Most of the time, one piece of content is part of a bigger piece. Nesting is how we express that relationship.

For example, a paragraph may contain highlighted text. The highlighted text belongs to the paragraph, so it is placed inside it.
```html
<p>This is an <strong>important</strong> text.</p>
```

The `<strong>` tag is nested inside the `<p>` tag. This is a valid syntax because highlight belongs inside text.

Good nesting practice keeps HTML readable and predictable.

### Block vs inline elements
HTML elements fall into two categories: **block** and **inline**.

**Block elements**: Block are elements used for structuring the main content of a web-page. Identifying a block element is easy as they are know for taking a full widght of the page. they are known for stretching out to the left and right as far as they can.

**Block element would always:**
- Start on a new line
- Take up the full width available

Examples include `<p>`,`<div>`, `<ul>`, `<figure>`, and `<section>` etc.

**Inline elements:** Inline elements are HTML elements that live inside text.
They do not create a new line on the page.

When the browser reads an inline element, it treats it as part of the current line, not as a new block of content.

**Inline element would always:**
- Do not start on a new line
- Do not stretch across the page
- Do not group other elements

Examples include `<a>`, `<strong>`, and `<em>`.

Understanding this helps you predict layout behavior even before styling.

### Links `<a>`
A link is an HTML element that allows the user to move from one place to another.

- When the browser sees a link, it understands:
- the user can activate this text
- activating it will change location

A link is written using the `<a>` tag and must have a href.

```html
<a href="#projects">View Projects</a>
```

Links can appear inside paragraphs, lists, or navigation areas. Their purpose is always navigation.

### Images `<img>`

Image elements in HTML are used to support or explain text or a caption. Images are important for visualization in a web page.
Images in HTML are added using the <img> tag.
Unlike most HTML elements, <img> does not have a closing tag.

That is because an image does not wrap content.
Instead, all the information about the image is provided through attributes.

An attribute is extra information added inside an HTML tag to describe it.

Here is a basic image example:
```html
<img src="headshot.jpg" alt="Portrait of Danny Paul" />
```
In this example that:
- src tells the browser where the image file is located
- alt provides a text description of the image

The `alt` attribute is required and serves as text when the image cannot be seen.

### Alt text rules
What is the alt attribute?

The alt attribute stands for alternative text.

It is used when:
- the image fails to load
- the user cannot see the image
- a screen reader is reading the page aloud

When the browser cannot display the image, it uses the alt text instead.
This means the image still has meaning, even when it is not visible.

The alt attribute is written inside the <img> tag, alongside src.

##### Decorative images
If an image is purely decorative and adds no meaning, the alt attribute should be empty:

```html 
<img src="divider.svg" alt="" />
```


### Lists `<ul>`, `<ol>`, `<li>`

Lists are used in HTML when we want to represent a ** set or a collection of related items**.

When items belong together, HTML provides list elements to group them instead of writing each item separately or with a comma.

A list in HTML is made up of three parts:
- the list container
- the list items
- the relationship between them

---

### Unordered lists `<ul>`

An unordered list is used when the **order of the items does not matter**.

For example, take a navigation links or a set of menu options, these do not need to be read in a specific sequence.

```html
<ul>
  <li>Home</li>
  <li>Projects</li>
  <li>Contact</li>
</ul>
```

In this example:
- `<ul>` defines the list itself
- `<li>` defines each individual item of the list
- The browser understands these items belong together as a group

Unordered lists are commonly used for:
- navigation menus
- feature lists
- groups of links

---

### Ordered lists `<ol>`

An ordered list is used when the **order of the items matters**.

This is useful for steps, instructions, or rankings.

```html
<ol>
  <li>Plan the layout</li>
  <li>Build the structure</li>
  <li>Test the page</li>
</ol>
```

Here:
- The browser understands the sequence is important
- Screen readers announce the position of each item

---

### List items `<li>`

The `<li>` element represents **one item in a list**.

A list item must always live **inside** a `<ul>` or `<ol>`.

This is correct:

```html
<ul>
  <li>About</li>
</ul>
```

This is incorrect:

```html
<li>About</li>
```

Without a list container, the item has no meaning.

---

### Lists are block elements

Lists are **block-level elements**.

This means:
- they start on a new line
- they take up the full available width
- they group related content together

Because of this, lists are important for representing navigation and grouped content.

---


### Emphasis `<strong>` and `<em>`
Html provides the `<strong>` tag to indicate importance in a web-page.

Example code is:
```html
<strong>Important:</strong> Save your work.
```

We also  have the `<em>` tag to indicate emphasis.

```html
<em>This matters.</em>
```

These tags communicate meaning, not appearance to the webpage, the reader, and the user.

---

### Inline SVG and `aria-hidden`

SVGs can be written directly inside HTML. When this is done, they are called **inline SVGs**.

Inline SVGs are commonly used for **icons**, such as arrows, menu icons, or decorative symbols.

```html
<svg viewBox="0 0 24 24">
  <!-- icon path goes here -->
</svg>
```

If an SVG is **decorative** and does not convey information, it should be hidden from assistive technology like screen readers, voice over etc.

This is done using the `aria-hidden` attribute.

```html
<svg aria-hidden="true" viewBox="0 0 24 24">
  <!-- icon path -->
</svg>
```

Setting `aria-hidden="true"` tells screen readers to ignore the SVG.

This prevents decorative icons from being announced as content and keeps the page easier to understand for users who rely on assistive technology.

## Code Walkthrough
Now we take what we’ve learned and apply it directly to the page.

First, we add a headshot to the hero section. The image and its description belong together, so we wrap them in a `<figure>` and `<figcaption>`.

```html
<figure>
  <img src="headshot.jpg" alt="Portrait of Danny Paul" />
  <figcaption>Frontend Developer</figcaption>
</figure>
```

Using `<figure>` makes it clear that the image and caption are one piece of content, not separate elements placed next to each other.

Next, we add a simple list that will later become the site’s navigation.

```html
<ul>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
```

At this stage, the list is only a placeholder. The goal is structure, not styling.

## Project Milestone
Your page now contains more than just text. It includes:
- An image paired with descriptive text
- A grouped set of navigation links
- Clear structure that reflects how the content is meant to be understood

The page may still look plain, but the meaning is becoming clearer.

## Section Done
You should now see a headshot with a caption and a simple list of navigation links on the page.

## Keyboard Walkthrough
Press `Tab` and move through the links in the list.

Each link should receive focus one after the other, showing that the list is navigable using the keyboard.

## Contrast Check
Make sure the text around the image and the navigation links is easy to read.

If anything feels unclear or crowded, make a note. We will address visual refinement later.

## Ship Note
Before moving on:
- Check that the image has an appropriate `alt` description
- Check that the navigation links are grouped inside a list
