# HTML/CSS & Tailwind: A Beginner's Journey

**Beginner's Journey**

---

## Table of Contents

0. Read Me First
1. 
2. 
3. 
4. The First Coat of Paint: Intro to CSS

---

# Read Me First

Welcome to your journey into web development! This book is designed for **absolute beginners** with no prior experience.

## How This Book Works

Each chapter follows this structure:

1. **Concept Explanation** - Learn the theory
2. **Code Examples** - See it in action
3. **Hands-on Practice** - Try it yourself
4. **Code Review** - Compare with solution

## What You'll Need

- A computer (Windows, Mac, or Linux)
- A modern web browser (Chrome, Firefox, or Edge)
- A text editor (VS Code recommended)
- Internet connection (for some tools)

## Learning Approach

We believe in **learning by doing**. You'll write code from Chapter 1 onward. Don't worry about memorizing everything—focus on understanding concepts.

> **Remember:** Every expert was once a beginner. Take your time, and don't hesitate to revisit chapters.

## Getting Help

If you get stuck:
1. Check the code examples in the `/code/` folder
2. Use the browser's developer tools (F12)
3. Take a break and come back fresh

Ready to begin? Let's start with setting up your development environment in the next chapter!

---




## Section Done
✅ You've built the project setup with proper HTML structure and CSS styling.

## Keyboard Walkthrough
- Press `Tab` to navigate through navigation links
- Press `Enter` to activate buttons
- Use arrow keys for dropdown menus (if any)

## Contrast Check
- Text color (#4b5563) on white background: ✅ Good contrast (7:1 ratio)
- Button color (#2563eb) on white: ✅ Good contrast
- Hover states maintain accessibility

## Ship Note
**What to check before moving on:**
1. All links work correctly
2. Button has proper hover state
3. Navigation is keyboard accessible
4. Code is validated with HTML/CSS validators

---

**Ready for the next section? Let's build the header section!**

---









## Section Done
✅ You've built the portfolio header with proper HTML structure and CSS styling.

## Keyboard Walkthrough
- Press `Tab` to navigate through navigation links
- Press `Enter` to activate buttons
- Use arrow keys for dropdown menus (if any)

## Contrast Check
- Text color (#4b5563) on white background: ✅ Good contrast (7:1 ratio)
- Button color (#2563eb) on white: ✅ Good contrast
- Hover states maintain accessibility

## Ship Note
**What to check before moving on:**
1. All links work correctly
2. Button has proper hover state
3. Navigation is keyboard accessible
4. Code is validated with HTML/CSS validators

---

**Ready for the next section? Let's build the hero section!**

---






## Section Done
✅ You've built the portfolio next with proper HTML structure and CSS styling.

## Keyboard Walkthrough
- Press `Tab` to navigate through navigation links
- Press `Enter` to activate buttons
- Use arrow keys for dropdown menus (if any)

## Contrast Check
- Text color (#4b5563) on white background: ✅ Good contrast (7:1 ratio)
- Button color (#2563eb) on white: ✅ Good contrast
- Hover states maintain accessibility

## Ship Note
**What to check before moving on:**
1. All links work correctly
2. Button has proper hover state
3. Navigation is keyboard accessible
4. Code is validated with HTML/CSS validators

---

**Ready for the next section? Let's build the next section!**

---

# The First Coat of Paint: Intro to CSS

# Introduction to CSS

## What CSS Is

CSS means *Cascading Style Sheets*. CSS describes how HTML elements are structured on the page. To put it simply, When you build a house with HTML, HTML is like the **structure and rooms**. CSS is like the **paint and decorations** that make the house look good.

---

## Linking External CSS
One way to style your HTML document is to put CSS in a separate file. That file ends in `.css`.
You can connect an CSS stylesheet to your HTML with a `link` tag in the `head` section. Create a folder named `styles' and inside that folder, create a new file named 'base.css'.

Example:

```html
<head>
  <link rel="stylesheet" href="styles/base.css">
</head>
```

Your HTML will now apply all the styles in your 'base.css' file. You can link multiple HTML pages to a single CSS file and vice versa.

---

## CSS Selectors

CSS selectors tell the browser which HTML elements you want to style. For example, we may want to select every div element on the page and, or we may want to select only one specific paragraph on a page.

Selectors generally target an attribute value, such as an id or class value, or target the type of element, such as ```<h1>``` or ```<p>```.

Selectors are followed with curly brackets, {}, the styles to be applied to the selected element are then written within the curly braces. 
We can divide CSS selectors into five categories:

Simple selectors (select elements based on name, id, class)
Combinator selectors (select elements based on a specific relationship between them)
Pseudo-class selectors (select elements based on a certain state)
Pseudo-elements selectors (select and style a part of an element)
Attribute selectors (select elements based on an attribute or attribute value)


We're going to look at some of the most basic selectors:

**Element selector**
This selects all elemnts of the same kind:

```css
p {
  color: blue;
}
```

This will make all p tags have a text color of blue.

**Class selector**
A class selector styles all elements that have the same class name.

```html
<p class="intro">Hello</p>
<h3 class="intro">Hello</h3>
```

```css
.intro {
  color: green;
}
```

The `.` means this is a class selector.

**ID selector**
An id selector styles the element wiith the specified ID. IDs are unique. Each ID should appear only once in the HTML.

```html
<p id="main">Hello</p>
```

```css
#main {
  font-size: 20px;
}
```

The `#` means this is an ID selector.

---

## The Cascade and Specificity

**Cascade** means that if two rules could apply to the same element, the one that is written last will be applied to that element. It is like paint layers. If you paint a wall red then paint over it with blue, the wall looks blue.

**Specificity** means some selectors are stronger than others.
Here is a brief on how browsers decide which style to use when there is a conflict:

* Inline styles (applied right on an element) are the strongest.
* An ID selector is stronger than a class selector.
* A class selector is stronger than a simple element selector.

For example, if a paragraph has both a class and an ID, and both have different colors, the ID’s color will win because ID selectors have higher importance.

---

## Essential CSS Properties

Here are some basic properties you will use all the time:

**color**
This changes text color:

```css
body {
  color: charcoal;
}
```

**background-color**
This changes the background behind an element:

```css
body {
  background-color: offwhite;
}
```

**font-size**
This defines the size of a text

These property names and values tell the browser exactly how things should look.

---

# CSS Architecture

As your styles grow, organizing them helps keep things clean.

**styles/base.css**
This file should contain default looks for the whole site. Think of this as the paint primer and basic tone for all rooms.

Examples:

```css
body {
  background-color: offwhite;
  color: charcoal;
}

h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```

**styles/components.css**
This file is like decorating rooms. It styles specific parts like buttons and cards.

Example:

```css
.button {
  padding: 8px 12px;
  border-radius: 4px;
}
```

**styles/utilities.css**
This file has small reusable helpers. These are like common patterns you might use across many pages.

Example:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

---

## Good Practices

Do not use `!important` unless you absolutely have to. It forces a style to win even if it should not. It is like shouting louder than everyone else to get attention. You want your code to work clearly without shouting.

Keep your selectors simple and your files organized so that you always know where a style is coming from.

---

## Project Milestone Instructions

Your goal is:

* Create a file called `base.css`
* Set the **background color to off white**
* Set the **text color to charcoal**

Your CSS will look like this:

```css
body {
  background-color: offwhite;
  color: charcoal;
}
```

Once this file is linked to your HTML page, your website will have your chosen design applied correctly.

---

---

