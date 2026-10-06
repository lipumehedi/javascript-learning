# Lesson 16 — JavaScript DOM Manipulation

## 📌 Overview

In Lesson 15, I learned how to select HTML elements using JavaScript.

In Lesson 16, I learned how to manipulate those HTML elements dynamically.

DOM manipulation allows JavaScript to change a web page after it has loaded.

---

## 🎯 Learning Goals

After completing this lesson, I can:

- Change HTML text
- Change HTML content
- Change CSS styles
- Add CSS classes
- Remove CSS classes
- Toggle CSS classes
- Add HTML attributes
- Read HTML attributes
- Create new HTML elements
- Add elements to the page
- Remove elements from the page
- Generate dynamic HTML using JavaScript

---

# 📁 Project Structure

```text
lesson-16/
├── index.html
├── script.js
└── README.md
```

---

# 1. Change Text

```javascript
const title = document.querySelector("#title");

title.textContent = "Hello Mehedi!";
```

`textContent` changes the text inside an HTML element.

---

# 2. Change HTML

```javascript
const message = document.querySelector("#message");

message.innerHTML = "<strong>Hello!</strong>";
```

`innerHTML` allows HTML tags to be inserted.

---

# 3. Change CSS Style

JavaScript can directly change an element's style.

```javascript
title.style.fontSize = "32px";
title.style.padding = "20px";
```

Another example:

```javascript
button.style.fontSize = "18px";
```

---

# 4. `classList.add()`

Adds a CSS class.

```javascript
title.classList.add("active");
```

---

# 5. `classList.remove()`

Removes a CSS class.

```javascript
title.classList.remove("active");
```

---

# 6. `classList.toggle()`

Toggles a class.

```javascript
title.classList.toggle("active");
```

If the class does not exist, it is added.

If the class already exists, it is removed.

---

# 7. `setAttribute()`

Adds or changes an HTML attribute.

```javascript
button.setAttribute(
    "title",
    "Start Learning"
);
```

---

# 8. `getAttribute()`

Reads an attribute.

```javascript
const title = button.getAttribute("title");

console.log(title);
```

---

# 9. `createElement()`

Creates a new HTML element.

```javascript
const newSkill = document.createElement("li");
```

---

# 10. `appendChild()`

Adds a new element to another element.

```javascript
newSkill.textContent = "Django";

skillList.appendChild(newSkill);
```

---

# 11. `remove()`

Removes an element.

```javascript
const firstSkill = skillList.querySelector("li");

firstSkill.remove();
```

---

# 💼 Real-World Example

Create a list dynamically:

```javascript
const skills = [
    "Python",
    "Django",
    "SQL",
    "Docker"
];

const skillList = document.querySelector("#skillList");

for (let i = 0; i < skills.length; i++) {

    const skillItem = document.createElement("li");

    skillItem.textContent = skills[i];

    skillList.appendChild(skillItem);
}
```

This is a basic example of generating dynamic content with JavaScript.

---

# 🧠 Important DOM Methods

| Method | Purpose |
|---|---|
| `textContent` | Change text |
| `innerHTML` | Change HTML |
| `style` | Change CSS |
| `classList.add()` | Add class |
| `classList.remove()` | Remove class |
| `classList.toggle()` | Add/remove class |
| `setAttribute()` | Set attribute |
| `getAttribute()` | Get attribute |
| `createElement()` | Create element |
| `appendChild()` | Add element |
| `remove()` | Remove element |

---

# 🧩 Practice Problems

## Problem 1

Change an `<h1>` text to:

```text
Python Backend Developer
```

---

## Problem 2

Change a paragraph font size to:

```text
24px
```

---

## Problem 3

Set a button title:

```text
Click to Start
```

---

## Problem 4

Create a new `<li>` containing:

```text
PostgreSQL
```

Add it to a skill list.

---

## Problem 5

Remove an existing `<li>`.

---

# 🔥 Challenge — Dynamic Skill List

HTML:

```html
<h2>My Skills</h2>

<ul id="skills"></ul>
```

JavaScript:

```javascript
const skills = [
    "Python",
    "Django",
    "PostgreSQL",
    "JavaScript",
    "Docker"
];
```

Use JavaScript to dynamically create and display all skills.

Expected:

```text
My Skills

Python
Django
PostgreSQL
JavaScript
Docker
```

---

# ▶️ Run the Project

Open:

```text
lesson-16/index.html
```

Use:

**Right Click → Open with Live Server**

Use browser DevTools:

```text
F12 → Console
```

to inspect JavaScript output.

---

# 🔧 Git Commands

Go to the repository:

```bash
cd ~/javascript-learning
```

Check status:

```bash
git status
```

Add Lesson 16:

```bash
git add lesson-16/
```

Commit:

```bash
git commit -m "Lesson 16: Learn JavaScript DOM manipulation"
```

Push:

```bash
git push
```

Check final status:

```bash
git status
```

Expected:

```text
nothing to commit, working tree clean
```

---

# ✅ Lesson 16 Complete

Topics completed:

- `textContent`
- `innerHTML`
- `style`
- `classList.add()`
- `classList.remove()`
- `classList.toggle()`
- `setAttribute()`
- `getAttribute()`
- `createElement()`
- `appendChild()`
- `remove()`
- Dynamic HTML
