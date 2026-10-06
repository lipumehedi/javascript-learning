# Lesson 15 — JavaScript DOM Introduction

## 📌 Overview

In this lesson, I learned the basics of the JavaScript DOM.

DOM stands for:

**Document Object Model**

The DOM allows JavaScript to access and modify HTML elements in a web page.

---

## 🎯 Learning Goals

After completing this lesson, I can:

* Understand the DOM
* Access HTML elements
* Use `document`
* Use `getElementById()`
* Use `querySelector()`
* Change text using `textContent`
* Change HTML using `innerHTML`
* Connect JavaScript with HTML

---

## 📁 Project Structure

```text
lesson-15/
├── index.html
├── script.js
└── README.md
```

---

## 1. What is DOM?

DOM means:

**Document Object Model**

The browser converts an HTML document into a structure that JavaScript can access and modify.

Basic flow:

```text
HTML
 ↓
Browser
 ↓
DOM
 ↓
JavaScript
 ↓
HTML Changes
```

---

## 2. `document`

The `document` object represents the web page.

```javascript
console.log(document);
```

This allows JavaScript to work with the HTML page.

---

## 3. `getElementById()`

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```javascript
const title = document.getElementById("title");

console.log(title);
```

This selects the element with the ID `title`.

---

## 4. `textContent`

`textContent` changes the text inside an element.

```javascript
const title = document.getElementById("title");

title.textContent = "Hello Mehedi!";
```

The browser will display:

```text
Hello Mehedi!
```

---

## 5. `querySelector()`

`querySelector()` selects an HTML element using CSS selectors.

### ID

```javascript
document.querySelector("#title");
```

### Class

```javascript
document.querySelector(".box");
```

### Tag

```javascript
document.querySelector("h1");
```

Remember:

```text
# → ID
. → Class
h1 → HTML tag
```

---

## 6. `innerHTML`

`innerHTML` allows HTML content to be inserted.

```javascript
const message = document.querySelector("#message");

message.innerHTML = "<strong>Hello Mehedi!</strong>";
```

The text will appear bold.

---

## 7. `textContent` vs `innerHTML`

### textContent

```javascript
element.textContent = "Hello";
```

Used for plain text.

### innerHTML

```javascript
element.innerHTML = "<strong>Hello</strong>";
```

Can insert HTML.

---

## 💼 Real-World Example

HTML:

```html
<h1 id="name">Name</h1>

<p id="skill">Skill</p>

<p id="country">Country</p>
```

JavaScript:

```javascript
document.querySelector("#name").textContent = "Mehedi";

document.querySelector("#skill").textContent =
    "Python Backend Developer";

document.querySelector("#country").textContent =
    "Japan";
```

This is the basic idea behind dynamic web pages.

---

## 🧩 Practice Problems

## Problem 1

Change:

```html
<h1 id="title">My Website</h1>
```

to:

```text
My Portfolio
```

---

## Problem 2

Change a paragraph to:

```text
My Skill: Python
```

---

## Problem 3

Change a button text to:

```text
Start Learning
```

---

## Problem 4

Use `querySelector()` to select an `<h1>`.

Change its text to:

```text
JavaScript Developer
```

---

# 🔥 Challenge

Create a developer profile with:

```text
Name: Mehedi
Skill: Python Backend Developer
Country: Japan
Button: Start Coding
```

Use JavaScript DOM methods to update all values.

---

## ▶️ Run the Project

Open:

```text
index.html
```

Use VS Code Live Server to open the page in a browser.

Unlike previous Node.js lessons, this lesson uses the browser because the `document` object belongs to the browser DOM.

---

## ✅ Lesson 15 Complete

Topics completed:

* DOM
* `document`
* `getElementById()`
* `querySelector()`
* `textContent`
* `innerHTML`
* HTML + JavaScript connection
