# Chapter 4 - The First Coat of Paint

## Personal Reasoning

Before anything on a webpage looks good, the browser needs clear instructions on **how things should appear**. CSS is how we give those instructions. Learning CSS early prevents messy styling, confusion, and frustration later as projects grow.

## Overall Learning

* What CSS is and why it exists
* How to link external CSS files
* CSS syntax and selectors
* Cascade and specificity
* Basic CSS properties
* Simple CSS file organization and best practices

## Explanation

### What CSS Is

CSS means *Cascading Style Sheets*. CSS describes how HTML elements are presented on the page(layout, colors, spacing). To put it simply, if you're building a house, HTML is like the **structure and rooms** while CSS is like the **paint and decorations** that make the house look good.

---

## Linking External CSS

One way to style your HTML document is to put your CSS code in a separate file. Every CSS file name should end with `.css` to let the IDE (code editor) and browser know that it is a CSS file.
You can link a CSS style sheet to your HTML by adding a `link` tag in the `head` section of your HTML, with the correct CSS file path.
Follow the instructions below to link your first CSS style sheet to your already existing HTML file.

* Inside your root folder, create a folder named 'styles' 
* Inside the newly created styles folder, create a new file named 'base.css'.
* Link your newly created file to your HTML by inserting the following code into your HTML:

```html
<head>
  <link rel="stylesheet" href="styles/base.css">
</head>
```

Your HTML will now apply all the styles in your `base.css` file. You can use the same CSS file for multiple HTML pages and you can also link multiple CSS files to a single HTML page. We will soon be adding some code into your new CSS file! Before that, let's talk about syntax.

---

## CSS syntax

CSS follows a simple structure:

```css
selector {
  property: value;
}
```

Example:

```css
body {
    background-color: red;
}
```

* `body` is the selector
* `background-color` is the property
* `red` is the value

The same structure applies whenever you're styling elements. Now add the above code to your `base.css` to style your HTML page.

---

## CSS Selectors

CSS selectors are used to specify or select which HTML elements you want to style. For example, we may want to select every div element on the page or we may want to select a specific paragraph on a page.

Selectors generally target an attribute value, such as an id or class value, or target the type of element, such as `<h1>` or `<p>`.
Selectors are followed with curly brackets, `{}`. The styles to be applied to the selected element are then written within the curly braces.

We're going to look at some basic selectors:

**Element selector**

Here, you select the element you want to style using the element's name. When you use this type of selector, all elements with the same name are going to be selected and styled:

```css
p {
  color: blue;
}
```

This will change the color of all p tags in the page to blue.

**Class selector**

In HTML you can give an element a special name which you can use to identify it. This name can then be used to select, style and manipulate the element. When giving a special name to an element, you either give it a class or an id.

An element can have more than one class name and different elements can have the same class name. A class name cannot start with a number.

A class selector selects all elements that have the same class name.
When trying to select an element by its class, you use `.` followed by the class name.

```html
<p class="intro">Hello</p>
<h3 class="intro">Hello</h3>
```

```css
.intro {
  color: green;
}
```

Now, the `h3` and `p` tags will have a text color of green.

Since different elements can have the same class name, you can choose to select only a type of element with a given class name. Let's modify the previous example.

```css
p.intro {
  color: green;
}
```

Now, only p elements with class name of `intro` are going to have a text color of green.

**ID selector**
An id selector styles the element with the specified ID. 
IDs are unique and so each ID should appear only once in the HTML. This means that you cannot use the same id for more than one element. Just like classnames, an id cannot start with a number. When trying to select an element by its id, you use `#` followed by the id.

```html
<p id="hero-text">Hello</p>
```

```css
#hero-text {
  font-size: 20px;
}
```

**The Universal Selector**
The universal selector (`*`) selects all HTML elements on the page.

The code below applies the styles to every element on the page, centering all text and giving them a color of blue:

```css
* {
  text-align: center;
  color: blue;
}
```

You can style different HTML elements together by using the syntax below:

```css
h1, section, div{
  text-align: center;
  color: blue;
}
```

All h1, section and div elements will have the above styles applied to them.

---

## Cascade and Specificity

**Cascade** means that if two rules are applied to the same element, the one that is written last will be applied to that element. It is like paint layers. If you paint a wall red then paint over it with blue, the wall looks blue.

**Specificity** means some selectors are stronger than others.

Here is a brief on how browsers decide which style to use when there is a conflict:

* Inline styles (applied right on an element in the HTML code) are the strongest.
* An ID selector is stronger than a class selector.
* A class selector is stronger than a simple element selector.

For example, if a paragraph has both a class and an ID, and both apply different colors, the ID’s color will win because ID selectors have higher importance.

**FAQ**

What if I define a class selector before an ID selector?

Order only matters when specificity is the same. So if a class selector is defined after an ID selector, the ID selector will be applied. Specificity beats order.

---

## Essential CSS Properties

Here are some basic properties you will use all the time:

**color**
This changes text color. 

You can define colors in several ways:

* **Color names** – like `red`, `blue`, or `green` (limited predefined options).
* **Hex codes** – like `#ff0000` for red; a six-digit code representing red, green, and blue values.
* **RGB values** – like `rgb(255, 0, 0)`; specify red, green, and blue components from 0–255.
* **HSL values** – like `hsl(0, 100%, 50%)`; define color by hue, saturation, and lightness.
* **RGBA / HSLA** – like `rgba(255, 0, 0, 0.5)`; same as RGB/HSL but includes transparency.

Each method lets you control color precision and opacity in different ways. You can find any of the codes or values for a color by simply googling it.


```css
body {
  color: #36454F;
}
```

**background-color**
This changes the background behind an element:

```css
body {
  background-color: #fAf9f6;
}
```

**font-size**
This defines the size of text. You can use different units when defining font size like px, rem or em.

```css
body {
  font-size: 16px;
}
```

These property names and values tell the browser exactly how things should look.

---

# CSS Architecture

As your styles grow, organizing them helps keep things clean.

**styles/base.css**
This file should contain default looks for the whole site. Think of this as the paint primer and basic tone for all rooms.

```css
body {
  background-color: #fAf9f6;
  color: #36454F;
}

h1, h2, h3 {
  font-family: Arial, sans-serif;
}
```

**styles/components.css**
This file contains styles for different components in the page such as buttons. It is like decorating rooms. It styles specific parts like buttons and cards.

Example:

```css
.button {
  padding: 8px 12px;
  border-radius: 4px;
}
```

**styles/utilities.css**
This file has small reusable helpers. These are like common patterns you might use across many pages.

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```
If you have different css files for the same HTML file, you can simply link them all by adding link tags in the `head` section of your HTML page for each of the files

```html
<head>
  <link rel="stylesheet" href="styles/base.css">
  <link rel="stylesheet" href="styles/components.css">
  <link rel="stylesheet" href="styles/utilities.css">
</head>
```

---

## Good Practices

Keep your selectors simple and your files organized so that you always know where a style is coming from.

Do not use `!important` unless you absolutely have to. It forces a style to take precedence even if it should not. It is like shouting louder than everyone else to get attention. You want your code to work clearly without shouting.
Valid use cases include:

* Overriding Third-Party or Inline Styles: This is the most common and accepted use case. When working with third-party libraries, frameworks (like Bootstrap), or a Content Management System (CMS) where you cannot edit the original CSS files or inline styles added by JavaScript, !important provides a way to enforce your own styles.

* Debugging: Developers can temporarily use !important to quickly check if a style is being applied or if the issue is a specificity conflict. Once the problem is identified, the !important tag should be removed and the issue resolved using proper CSS structure.

* Utility/Helper Classes: For highly specific, unchangeable styles that need to be applied regardless of context (e.g., a .force-red class that always makes text red), !important can be used to ensure the style always wins.

* Handling User Preferences: You can use !important within a media query like @media (prefers-reduced-motion: reduce) to disable animations or transitions for users who have motion sensitivity settings enabled on their devices, ensuring their preferences are respected.


## Code Walkthrough

```css
body {
  background-color: #fAf9f6;
  color: #36454F;
}
```

* `body` selector targets the entire webpage’s body element.
* `background-color: #fAf9f6;` sets a very light, off-white background for the page.
* `color: #36454F;` sets the default text color to a dark gray-blue for readability.

This code establishes the base colors for the whole site, affecting background and text unless overridden by more specific selectors.

## Project Milestone

You should now have:

* A linked external CSS file
* Basic styles applied to your page
* An understanding of selectors and how conflicts are resolved

## Ship Note

Open your page in the browser and confirm that the background color change is applied. If it is, your CSS is correctly linked and working.
Note that the background color applied is a close shade to white and so it may be hard to distinguish at first.
