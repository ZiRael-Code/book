### Lesson goal

By the end of this chapter, you will understand how elements are displayed on a page and how CSS controls space using the box model.

---

## How elements appear on a page

Before we discuss spacing or the box model, we need to understand how elements are placed on the page in the first place. CSS determines this using a property called `display`.

Every HTML element has a default display behavior. This behavior controls:

* Whether the element starts on a new line
* Whether it can have width and height
* How it interacts with surrounding elements

---


## Common display values

### Block elements

Block elements start on a new line and take up the full width available.

Examples :

* `div`
* `p`
* `section`
* `header`

```css
div {
  display: block;
}
```

Block elements respect width, height, margin, and padding.

---

### Inline elements

Inline elements do not start on a new line and only occupy the horizontal space required by their content

Examples:

* `span`
* `a`
* `strong`

```css
span {
  display: inline;
}
```

Inline elements ignore width and height, they only respect horizontal padding and margin.

---

### Inline-block elements

Inline-block elements combine the flow behavior of inline elements with the layout properties of block elements.
* Flow: Like inline elements, they do not start on a new line and sit in line with other content (text, other inline elements, or other inline-block elements).
* Layout Properties: You can apply width, height, margin-top, and margin-bottom properties to them, just like block elements.
* Spacing: They respect padding and margins on all four sides (top, bottom, left, and right), offering greater control over spacing within a line. 

```css
button {
  display: inline-block;
}
```

This display type is usually most useful for buttons and small layout components.

---

### None

```css
.hidden {
  display: none;
}
```

The above CSS code hides an element completely by removing it from the layout and it does not take up space.

---

## The CSS Box Model

Now that we know how elements are displayed, we can look at **how CSS measures and spaces them**.

On a web page, nothing floats freely.
Every element is placed inside a box.

Think of HTML as building rooms in a house.
CSS decides how big each room is and how far apart the rooms are.

This system is called the **CSS Box Model**.

---

## The four parts of the box

Each element’s box is made up of four layers, starting from the inside.

---

### Content

This is the actual content of the element.
Text, images, or child elements live here.

```css
p {
  width: 300px;
}
```

The width applies only to the content area by default.

---

### Padding

CSS Padding creates space **inside** the element, around the content.

```css
p {
  padding: 16px;
}
```

### Border

The border wraps around the padding and content.

```css
p {
  border: 1px solid #ccc;
}
```

Borders help visualize structure, but should not be overused.

---

### Margin

Margin creates space **outside** the element.

```css
p {
  margin: 24px;
}
```

Margins control how far elements are from each other.

---

## How CSS calculates width and height

CSS calculates width as follows:

* padding + border + width = real width of an element
* padding + border + height = real height of an element

Example:

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

The final size is larger than 200px because of the border size.

---

## Box Sizing

This is where box-sizing comes in. Box-sizing defines how to calculate the width and height of an element: should the calculation include padding and borders, or not.

```css
* {
  box-sizing: border-box;
}
```

When you use box sizing with the value of border-box, width includes padding and border and the element's size appears exactly as expected. It is good practice to set this rule at the start of every proect.
---

## Inspecting spacing with DevTools

You can use the chrome devtools to inspect your page or element and visualize the box model.

To inspect an element on chrome, right click the element and click on Inspect. Then under the styles tab, scroll down till you can see the box model diagram. It shows the content size, padding, border, margin. This will help you understand spacing issues and also help with ddebugging when you're out in the wild.

---

## Width and height best practices

```css
.card {
  width: 300px;
  height: 200px;
}
```

It is recommended to avoid fixed heights when possible. This is because the screen size can change and you always want your content to grow/shrink according to screen size.

---

## Logical properties for modern CSS

Instead of left and right, modern CSS uses logical directions.

### Horizontal spacing

```css
section {
  margin-inline: 32px;
}
```

### Vertical spacing

```css
section {
  padding-block: 48px;
}
```

---

## Visual debugging with Pesticide

There is a Chrome extension called **Pesticide** that outlines every element on the page.

It helps you:

* See how elements are stacked
* Understand spacing and alignment
* Visually grasp the box model

This tool is especially useful when learning how layout and spacing really work.

---