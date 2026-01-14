# Chapter 1 — The First Words: Introduction to HTML

## Personal Reasoning
When you first open a website, the first thing you notice is how it looks. You see text, images, buttons, and layout structure. But the browser does not see any of that. The Browser only reads instructions and arrangements.

HTML is another way we speak to the browser.

If we use the right words, the browser builds and shows the page we want.
If we use the wrong ones, the browser becomes confused,
and our page becomes harder and confusing to read, harder to navigate, and confusing to maintain.
Before we touch colors or layout, we need to learn how to speak with the browser clearly.

This chapter is about learning that language.

## Overall Learning
- What HTML is
- Tag anatomy
- Boilerplate: `<!doctype>`, `<html>`, `<head>`, `<body>`
- `<title>` and `<meta>`
- Headings `<h1>`–`<h6>`
- Paragraphs `<p>`

## Explanation
**What is HTML?**  
HTML stands for **HyperText Markup Language**. HTML is a widely used language that **describes what things are** on a page so the browser knows how to present them. HTML is very close to us as human beings: each human has a head (`<head>`) and a body (`<body>`). The head holds important information about a person, just like the `<head>` in HTML holds important information about a web page, such as its `<title>`.

**Is HTML a programming language?**\
**NO.** HTML is not a programming language. It does not run logic or perform calculations.

### What a tag is (Tag Anatomy)
HTML uses tags to label and structure content. A tag has an opening and a closing.

**Example of a tag:**
```html
<p>This is a paragraph.</p>
```

- `<p>` is the **opening tag**
- `</p>` is the **closing tag**
- Everything between them is the **content**

To define a tag, you start with an opening angle bracket, write the tag name, then close the bracket. After that comes the content. To end the tag, you open another angle bracket, add a forward slash, write the same tag name, and then close the bracket. When you do this, you have created a complete HTML tag.\
This is called **tag anatomy**: opening tag, content, closing tag. This is how HTML groups and defines meaning.



### The HTML Boilerplate
The first thing we do in an HTML file is define the boilerplate. An HTML boilerplate is the basic structure of an HTML document. It defines how a webpage is structured before any content is added and saves you from rewriting the same code every time you create a new HTML file.

Here is the smallest valid HTML document:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>My Portfolio</title>
    <meta charset="UTF-8" />
  </head>
  <body>
  </body>
</html>
```

Each part has a job:

- `<!doctype html>` tells the browser what type of document this is
- `<html>` wrap the entire page together
- `<head>` contains information about the page
- `<body>` contains all content and structure that the user will see

### The `<title>` and `<meta>`
Inside the `<head>` tag, we add information about the page.

- `<title>` apply the content of the tag as the name of the page shown in the browser tab
- `<meta charset="UTF-8">` tells the browser how to read and interpret the webpage characters correctly

These do not appear on the page, but they are essential for the browser.

### Headings `<h1>`–`<h6>`

HTML headings are used to define the structure and importance level of content on a webpage. There are six heading levels, from `<h1>` to `<h6>`, where `<h1>` represents the most important heading and `<h6>` represents the least important.

Headings are used to label sections of a page and help both users and browsers understand how content is organized. `<h1>` is mostly used for the main title of the page, while lower-level headings (`<h2>`–`<h6>`) are used for subheadings within the sections of the page.

#### Example usage

```html
<h1>Hello World</h1> 
```

### Paragraphs `<p>`

The `<p>` tag is used to define paragraph for a text in HTML. It represents a block of normal un-styled text and automatically starts on a new line, with space added before and after it which means any tag content that comes after it starts on a new line.

Paragraphs are used for writing sentences, descriptions, and longer pieces of text on a webpage.

#### Example usage

```html
<p>This is a paragraph of text.</p>

<p>Paragraphs are used to display readable content on a webpage.</p>
```
 
## Code Walkthrough
At this point we can create our first real content which is a hero section with your name and tagline.

Open `index.html` and place this inside the `<body>`:

```html
<h1>Jane Doe</h1>
<p>Frontend Developer</p>
```

Your full file should now look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>My Portfolio</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>Danny Paul</h1>
    <p>Web Developer</p>
  </body>
</html>
```


The `<h1>` makes your name the main heading.  
The `<p>` makes your tagline a paragraph.  
This is a raw, unstyled hero section.


## Project Milestone
You should now have:

- An `index.html` file
- A valid HTML boilerplate
- A hero section made of:
    - Your name in an `<h1>`
    - Your tagline in a `<p>`

## Section Done
When you open `index.html` in the browser, you should see your name and tagline stacked vertically with no styling.


## Keyboard Walkthrough
Press the `Tab` key. Nothing should receive focus yet, because we have not added links or buttons.


## Contrast Check
The text should be easy to read against the background. We have not added colors yet, but nothing should feel hard to see.



## Ship Note
Before moving on, make sure your page loads without errors and that your name is inside an `<h1>` and your tagline is inside a `<p>`.