### Lesson goal
By the end of this chapter, you'll understand basic CSS concepts like linking external stylesheets, CSS selectors, Cascade and Specificity and recommended practices

### What CSS Is

CSS means *Cascading Style Sheets*. CSS describes how HTML elements are structured on the page. To put it simply, if you're building a house, HTML is like the **structure and rooms** while CSS is like the **paint and decorations** that make the house look good.

---

## Linking External CSS
One way to style your HTML document is to put your CSS code in a separate file. Every CSS file name should end with `.css` to let the IDE and browser know that it is a CSS file.
You can connect a CSS stylesheet to your HTML by adding a `link` tag in the `head` section with the correct CSS file path. 
Follow the instructions below to link your first CSS style sheet to your already existing html file.

* Create a folder named `styles' 
* Inside the newly created styles folder, create a new file named 'base.css'.
* Link your newly created file to your HTML by inserting the following code into your HTML:

```html
<head>
  <link rel="stylesheet" href="styles/base.css">
</head>
```

Your HTML will now apply all the styles in your `base.css` file. You can link multiple HTML pages to a single CSS file and vice versa. We will soon  be adding some code into your new CSS file! Before that, let's talk about syntax.

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
body{
    background-color: red;
}
```

* `body` is the selector
* `background-color` is the property
* `red` is the value

The same structure applies whenever you're styling elements.Now add the above code to your `base.css` to style your HTML page.

---

## CSS Selectors

CSS selectors are used to specify which HTML elements you want to style. For example, we may want to select every div element on the page or we may want to select a specific paragraph on a page.

Selectors generally target an attribute value, such as an id or class value, or target the type of element, such as ```<h1>``` or ```<p>```.
Selectors are followed with curly brackets, {}, the styles to be applied to the selected element are then written within the curly braces. 

CSS selectors are divided into five:

* Simple selectors (select elements based on name, id, class)
* Combinator selectors (select elements based on a specific relationship between them)
* Pseudo-class selectors (select elements based on a certain state)
* Pseudo-elements selectors (select and style a part of an element)
* Attribute selectors (select elements based on an attribute or attribute value)

We're going to look at some basic selectors:

**Element selector**

Here, you select the element you want to style using the element's name. When you use this type of selector, all elements with the same name are going to be selected and styled:

```css
p {
  color: blue;
}
```

This will make all p tags have a text color of blue.

**Class selector**

A class selector styles all elements that have the same class name. When trying to select an element by its class, you use `.` followed by the class name. An HTML element can have more than one class name. A class name cannot start with a number

```html
<p class="intro">Hello</p>
<h3 class="intro">Hello</h3>
```

```css
.intro {
  color: green;
}
```
Now, the `h3` and `p` tags will have text color of green.

Since different elements can have the same class name, you can choose to select only a type of element with a given class name. Let's modify the previous example.

```css
p.intro {
  color: green;
}
```
Now, only p elements with class name of `intro` is going to have a text color of green.


**ID selector**
An id selector styles the element wiith the specified ID. IDs are unique and so each ID should appear only once in the HTML. This means that you cannot use the same id for more than one element. Justlike classnames, an id cannot start with a number. When trying to select an element by its id, you use `#` followed by the id.

```html
<p id="main">Hello</p>
```

```css
#main {
  font-size: 20px;
}
```

**The Universal Selector**
The universal selector (*) selects all HTML elements on the page.

When you write the code below, every text element on the page will be aligned center and will have a color of blue: 

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

All h1, section and div tags will have the above styles applied to them.

---

## Cascade and Specificity

**Cascade** means that if two rules are applied to the same element, the one that is written last will be applied to that element. It is like paint layers. If you paint a wall red then paint over it with blue, the wall looks blue.

**Specificity** means some selectors are stronger than others.

Here is a brief on how browsers decide which style to use when there is a conflict:

* Inline styles (applied right on an element in the HTMLcode) are the strongest.
* An ID selector is stronger than a class selector.
* A class selector is stronger than a simple element selector.

For example, if a paragraph has both a class and an ID, and both apply different colors, the ID’s color will win because ID selectors have higher importance.

**FAQ  
What if I define a classs selector before an ID selctor?
Order only matters when specificity is the same, in otherwords,. So if a class selector is defined before an element slector, the ID selector will be applied. Specificity beats order.**

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

Do not use `!important` unless you absolutely have to. It forces a style to take precedence even if it should not. It is like shouting louder than everyone else to get attention. You want your code to work clearly without shouting.

Keep your selectors simple and your files organized so that you always know where a style is coming from.

---
