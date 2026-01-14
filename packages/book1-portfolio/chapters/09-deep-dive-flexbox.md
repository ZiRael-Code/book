### Lesson goal

By the end of this chapter, you will understand Flexbox deeply enough to build clean rows and columns, align content confidently, and create layouts that adapt naturally without hacks.

---

## Flexbox intro recap

Flexbox exists to solve one problem: arranging items in a line. That line can run horizontally or vertically, but it is always one main direction at a time.

---

## The flex container and flex items

Like we learned in the previous chapter, flexbox starts with a container whose display is set to flex, then the direct children of the flex container then become flex items.

```css
.container {
  display: flex;
}
```

---

## Main axis and cross axis

Flexbox layout is based on two axes.

* **Main axis** is the direction items flow
* **Cross axis** is perpendicular to the main axis

By default the main axis runs left to right and the cross axis runs top to bottom.But you can set the direction of the main axis using flex direction.

---

## Flex direction

`flex-direction` defines the main axis.

```css
.container {
  flex-direction: row;
}
```

The value for `flex-direction` can either be row (default) or column.
If you switch to column, the axes swap roles.

---

## Justify content

`justify-content` controls spacing along the main axis.

```css
.container {
  justify-content: space-between;
}
```

Some common values for justify content are:

* flex-start
* center
* space-between (aligns the flex items from edge to edge within the container and puts even space between them)
* space-around(distributes the space in the container evenly between the flex items)
* space-evenly

---

## Align items

`align-items` controls alignment along the cross axis.

```css
.container {
  align-items: center;
}
```

Some common values are:

* stretch
* center
* flex-start
* flex-end

Setting the value to stretch ensures that flex items will automatically stretch vertically to match the height of the tallest item in the row

---

## Gap

`gap` controls spacing (distance) between flex items, replacing the need for margins

```css
.container {
  gap: 16px;
}
```
---

## Wrapping items

By default, flex items try to stay on one line. If you want your flex trend to break into a new line when space runs out, you can use flex-wrap. This is essential for responsive designs as your layout will now adjust to screen sizes 

```css
.container {
  flex-wrap: wrap;
}
```

---

Let's look at 3 more core CSS Flexbox properties. Read through it slowly and carefully so as to really understnad it.

## Flex grow, shrink and basis
`flex-grow` determines how much an item expands to fill extra space. A higher number means it grows faster. The default is 0 and when it's set to 0, it won't grow more than its `flex-basis`.

`flex-shrink` dictates how much an item shrinks when space is limited (relative to others). A higher number means it shrinks more and the default is 1.

`flex-basis` sets the item's initial size of the flex item before growing or shrinking.
The shorthand syntax is: `flex: <grow> <shrink> <basis>.` The values for flex-grow and flex-shrink don't take any unit

```css
.card{
  flex: 1 1 auto;
}
```

---
<!-- 
## Summary

* **display: flex**
  Turns an element into a flex container and enables Flexbox layout for its direct children.

* **flex-direction**
  Defines the main axis direction.

  * `row` (default): left → right
  * `column`: top → bottom
    Changing this also changes how other properties behave.

* **justify-content**
  Controls alignment and spacing **along the main axis**.
  Common values:

  * `flex-start` – items pack at the start
  * `center` – items center
  * `space-between` – space only between items
  * `space-around` – equal space around items
  * `space-evenly` – equal space everywhere

* **align-items**
  Controls alignment **along the cross axis**.
  Common values:

  * `stretch` (default) – items stretch to fill container
  * `center` – items center
  * `flex-start` – align to start
  * `flex-end` – align to end

* **gap**
  Controls spacing between flex items without using margins.
  Applies consistently in both directions.

* **flex-wrap**
  Determines whether items stay on one line or wrap onto new lines.

  * `nowrap` (default) – single line
  * `wrap` – items move to next line when space runs out

* **align-items: stretch**
  Makes flex items equal height by stretching them to match the tallest item in the row.

* **flex-grow**
  Controls how much an item expands when extra space is available.
  Higher value = grows more relative to others.

* **flex-shrink**
  Controls how much an item shrinks when space is limited.
  Higher value = shrinks more.

* **flex-basis**
  Sets the item’s starting size before grow/shrink happens.

* **flex (shorthand)**
  Combines grow, shrink, and basis in one declaration.

  ```css
  flex: 1 1 auto;
  ```

--- -->