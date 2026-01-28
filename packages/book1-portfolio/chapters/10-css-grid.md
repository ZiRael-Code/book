### Lesson goal

By the end of this chapter, you will understand how CSS Grid works, how to think in two dimensions, and how to build deliberate layouts made of rows and columns.

---

## Why CSS Grid exists

Flexbox is great for laying things out in a line(one dimension) but CSS Grid is built for laying things out in **two directions at once**.

Analogy:

---

## Creating a grid container

Grid starts the same way Flexbox does, by creating a container.

```css
.container {
  display: grid;
}
```

Once an element becomes a grid container, its direct children become grid items.

---

## Grid rows and columns

Grid layouts are defined by rows and columns. Grid items are then placed in these rows and columns. Columns run left to right while rows run top to bottom. You can decide how many of each you want.

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

Most of the time, rows can be left to auto size based on content, i.e., the number of rows will be determined by the size of the grid items.

---

## Spacing with grid gap

Grid spacing is controlled with `gap`.

```css
.grid {
  gap: 24px;
}
```

The above code leaves a space of 24px between the rows and columns. It replaces the need for margins between grid items.

---

## Auto fit and minmax for responsive grids

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

---

## When to use Grid instead of Flexbox

Grid is the perfect solution when your layout has both rows and columns. Use Flexbox when layout is just one direction

---