### Lesson goal

By the end of this chapter, you will understand how elements are positioned on a page, how to step outside the normal flow when needed, and how to use Flexbox to create your first flexible layouts.

---

## How elements are placed by default

Before we move things around, we need to understand what the browser does by default.

Every element on a page follows something called **normal flow**. In normal flow, elements are positioned in the order they appear in the HTML source code, following the default behavior of each element's display type. This means that block elements stack vertically and inline elements flow horizontally. Think of normal flow like furniture being placed automatically in a room, one item after another.

---

## When and why to break normal flow

Sometimes we may may want to design something that doesn't follow the default layout like a badge on top of a card or a sticky sidebar. CSS allows you to break normal flow using the `position` property.

---

## The position property

Every element has a position value which can either be static, relative, absolute or fixed.

---

## Static positioning

Static elements follow normal flow and cannot be moved using top, left, right, or bottom

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

The CSS property `position: absolute` removes an element from the normal document flow and positions it relative to its nearest positioned ancestor, i.e., The element's position is determined by its closest ancestor whose position property is anything other than static (i.e., relative, absolute, fixed, or sticky). If no ancestor is positioned, it uses the viewport. It does not take up space in the layout

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

**N.B:** Sticky only works when there is enough scrolling space.

---

## Z index

When elements overlap, the browser decides which one appears on top. This is controlled by `z-index`. If box A is stacked on top of Box B in the normal flow but Box B has a higher z-index value, Box B is going to appear on top instead 

```css
.modal {
  z-index: 10;
}
```
---

## Things to note when using z index

* **Position:** z index only works when the element has a position other than static. 
* **Value:** You assign an integer value (positive, negative, or zero) to the z index property. Without a specified z xindex, elements stack in the order they appear in the HTML document. 
* **Stacking Context:** Think of a stacking context like a container that limits how high its children can stack. z index values are only compared between elements inside the same container. If a parent element sits below another element, everything inside that parent is also below it, no matter how high the child’s z index is. So a child with a very high z index cannot rise above an unrelated element if its parent is already underneath. The parent sets the ceiling.

---

## Introduction to Flexbox

Flexbox is short for flexible Box Layout. Flexbox is a layout model used to arrange the items in a container in either a row or column. Flexbox is great because it also implements responsive design. A flexbox consists of a flex container and one or more flex items.
A Flex Container is a parent element, where the display property is set to flex or inline-flex while a flex item is the direct child of the flex container.

---

## Creating a flex container

To use Flexbox, you define a flex container. This changes how its direct children behave.

```css
.container {
  display: flex;
}
```
In the next chapter, we'll learn more about flexbox, how to create flex items and how to align them

---