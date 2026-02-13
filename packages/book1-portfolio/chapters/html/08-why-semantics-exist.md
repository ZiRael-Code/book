# Chapter 8 - Positioning and Flex

## Personal Reasoning

Understanding element positioning is key for controlling layout and layering. Normal flow keeps things predictable, but `position` allows intentional overlap, fixed headers, and sticky elements. Flexbox introduces a flexible, responsive way to organize content.

## Overall Learning

* Default normal flow stacks block elements vertically and inline elements horizontally.
* `position` values (`static`, `relative`, `absolute`, `fixed`, `sticky`) let you step out of normal flow and control placement.
* `z-index` manages stacking order but only works on positioned elements and within the same stacking context.
* Flexbox makes parent-child layout easier and responsive by treating the parent as a flexible container.

---

## How elements are placed by default

Before we move things around, we need to understand what the browser does by default.

Every element on a page follows something called **normal flow**. In normal flow, elements are positioned in the order they appear in the HTML source code, following the default behavior of each element's display type. This means that block elements stack vertically and inline elements flow horizontally. Think of normal flow like furniture being placed automatically in a room, one item after another.

---

## When and why to break normal flow

Sometimes we may want to design something that doesn't follow the default layout, like a badge on top of a card or a sticky sidebar. CSS allows you to break normal flow using the `position` property.

---

## The position property

Every element has a position value which can be static, relative, absolute, fixed, or sticky.

---

## Static positioning

Static elements follow normal flow and cannot be moved using top, left, right, or bottom.

```css
.box {
  position: static;
}
```

Most elements you write are static unless you say otherwise.

---

## Relative positioning

Relative positioning moves an element **relative to its original position**.  When you apply top, right, bottom, or left properties to a relatively positioned element, it moves relative to where it would have been placed in the default static flow. The surrounding elements act as if the element is still in its original location, leaving a gap where it was initially placed. The moved element may overlap other elements. Think of it as nudging furniture without changing the room layout.

```css
.box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

---

## Absolute positioning

The CSS property `position: absolute` removes an element from the normal document flow and positions it relative to its nearest positioned ancestor, i.e., The element is positioned relative to its nearest positioned ancestor. This is the closest ancestor whose position value is anything other than static (relative, absolute, fixed, or sticky). If no such ancestor exists, the element is positioned relative to the viewport. It does not take up space in the layout.

```css
.badge {
  position: absolute;
  top: 8px;
  right: 8px;
}
```

---

## Fixed positioning

Fixed elements are positioned relative to the viewport. They stay in place when scrolling and are removed from normal flow.

```css
.header {
  position: fixed;
  top: 0;
}
```

---

## Sticky positioning

Sticky is a mix of relative and fixed. It allows an element to scroll normally with the page until it hits a specified point, then it "sticks" in place. The element then behaves like a position: fixed element. 

```css
.sidebar {
  position: sticky;
  top: 16px;
}
```

**N.B:** Sticky positioning only works when there is enough scrolling space and when none of the parent containers have overflow: hidden, scroll, or auto that would block the sticky behavior.

---

## Z index

When elements overlap, the browser decides which one appears on top. This is controlled by `z-index`. When elements overlap, stacking order is controlled by z-index. If two positioned elements overlap and one has a higher z-index value, that element will appear on top.

```css
.modal {
  z-index: 10;
}
```
---

## Things to note when using z index

* **Position:** z-index only works on elements whose position is not static.
* **Value:** You assign an integer value (positive, negative, or zero) to the z-index property. Without a specified z-index, elements stack based on their order in the HTML document.
* **Stacking Context:** Think of a stacking context like a container that limits how high its children can stack. A stacking context is created by certain properties such as position with z-index, opacity, transform, or filter. z-index values are only compared within the same stacking context. If a parent element sits below another element, everything inside that parent is also below it, no matter how high the child’s z index is. So a child with a very high z index cannot rise above an unrelated element if its parent is already underneath. The parent sets the ceiling.

---

## Introduction to Flexbox

Flexbox is short for Flexible Box Layout. Flexbox is a layout model used to arrange the items in a container in either a row or column. Flexbox is useful because it makes it easier to create flexible, responsive layouts. A flexbox consists of a flex container and one or more flex items.
A Flex Container is a parent element, where the display property is set to flex or inline-flex while a flex item is the direct child of the flex container.

---

## Creating a flex container

To use Flexbox, you define a flex container. This changes how its direct children behave.

```css
.container {
  display: flex;
}
```
In the next chapter, we'll learn more about flexbox, how to create flex items and how to align them.

---

### Code Walkthrough

**Sticky Navbar**

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-bg);
}
```

* Adds background color to the navbar and ensures it stays at the top during scroll.

**Flexbox Inner Layout**

```css
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
}
```

* This flex container aligns children horizontally with spacing between them and adds appropriate padding and centers the content using margin.

**Logo & Nav Items**

```css
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
}
```

* Logo uses Flex to align image and text; nav links are evenly spaced.

**Contact Button**

```css
.contact-btn {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
}
```

* The contact button here is styled for emphasis and visually separated from navigation links.

### Project Milestone

* Navbar is sticky using `position: sticky` with a high `z-index`.
* Inner navbar layout uses Flexbox to align logo, navigation links, and contact button horizontally.
* Elements inside `.navbar-inner` are evenly spaced with `justify-content: space-between`.
* Contact button styled to stand out using primary color and rounded corners.

### Ship Note

Open the page and confirm that:

* Logo, navigation links, and contact button are horizontally aligned and evenly spaced.
* Contact button stands out with correct colors and rounded shape.
* Navbar is neatly styled using the concepts taught