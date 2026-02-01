# Chapter 10 - CSS Grid

## Personal Reasoning

CSS Grid lets you control layout in two dimensions at once, giving more deliberate control over rows and columns than Flexbox. Using `grid-template-columns`, `grid-template-rows`, and `gap` lets items align cleanly, while `repeat(auto-fit, minmax())` makes layouts responsive without media queries for cards or complex sections.

## Overall Learning

* Grid containers turn direct children into grid items.
* `grid-template-columns` and `grid-template-rows` define structure; `fr` units divide space proportionally.
* `gap` replaces margins for consistent spacing between items.
* `repeat(auto-fit, minmax())` creates responsive grids that adapt to screen width.
* Use Grid for multi-row and column layouts, Flexbox for single-axis arrangements.

---

## Why CSS Grid exists

Flexbox is great for laying things out in a line (one dimension), while CSS Grid is built for laying things out in two directions at once.

---

## Creating a grid container

CSS Grid starts the same way Flexbox does, by creating a container.

```css
.container {
  display: grid;
}
```

Once an element becomes a grid container, its direct children become grid items.

---

## Grid rows and columns

Grid layouts are defined by rows and columns, and grid items are placed within this structure. Columns run left to right while rows run top to bottom. You can decide how many of each you want.

---

## Defining columns

`grid-template-columns` defines the structure of your grid.

```css
.grid {
  grid-template-columns: 1fr 1fr 1fr;
}
```

The `fr` unit means a fraction of the available space. This creates three equal columns.

---

## Defining rows

Rows can be defined the same way.

```css
.grid {
  grid-template-rows: auto auto;
}
```

Most of the time, rows can be left to auto size based on content, i.e., the number of rows will be created automatically based on how many grid items need to be placed.

---

## Spacing with grid gap

Grid spacing is controlled with `gap`.

```css
.grid {
  gap: 24px;
}
```

The above code leaves a space of 24px between the rows and columns. It reduces the need for margins between grid items by providing consistent spacing within the grid.

---

## Auto-fit and minmax for responsive grids

One of the most powerful Grid patterns is auto fit with minmax.

```css
.grid {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

What this means:

* Create as many columns as will fit
* Each column is at least 250px wide
* Columns can grow to fill available space up to 1fr

This is perfect for card layouts.
`auto-fit` collapses empty columns so items stretch to fill available space. A related value, auto-fill, keeps empty columns even if no items occupy them.

---

## When to use Grid instead of Flexbox

Grid is the perfect solution when your layout has both rows and columns. Use Flexbox when the layout flows in just one direction.

---

### Project Milestone

* Featured Projects section uses CSS Grid to display project cards in rows and columns.
* Grid gap ensures consistent spacing between cards.
* Contact section uses a two-column grid for form and contact info.
* Grid layouts adapt naturally to smaller screens and can be further refined with responsive breakpoints.

### Code Walkthrough

**Projects Grid**

```css
#projects > div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
```

* Three equal columns; cards automatically adjust their width while spacing is controlled by the grid gap.

**Contact Section Grid**

```css
#contact > div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
```

* Two-column layout: form on one side, info on the other.


### Ship Note

* Featured Projects section displays cards in a clean, responsive grid.
* Contact section aligns form and contact info side by side, collapsing on smaller screens.
* Grid gaps maintain consistent spacing.
