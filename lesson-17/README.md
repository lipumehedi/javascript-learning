# JavaScript Lesson 17 — Events

## 📚 Overview

In this lesson, I learned how JavaScript responds to user actions using Events.

Events are one of the most important parts of interactive web development.

Examples:

- Button click
- User typing
- Keyboard input
- User interaction with web pages

---

## 🎯 Topics Covered

- `addEventListener()`
- `click` event
- `input` event
- `keydown` event
- Event function
- `event` object
- `event.key`
- Input `.value`
- Button click counter
- Real-time input handling

---

## 🧠 What is an Event?

An event is an action that happens in a webpage.

Examples:

```text
Button Click
User Typing
Keyboard Press
Mouse Movement
Form Submit
```

JavaScript can detect these actions and execute code.

---

## 🔹 addEventListener()

Basic syntax:

```javascript
element.addEventListener("event", function () {
    // code
});
```

Example:

```javascript
button.addEventListener("click", function () {
    console.log("Button clicked!");
});
```

---

## 🔹 Click Event

```javascript
button.addEventListener("click", function () {
    console.log("Clicked!");
});
```

The function runs whenever the button is clicked.

---

## 🔹 Input Event

```javascript
nameInput.addEventListener("input", function () {
    console.log(nameInput.value);
});
```

The `input` event runs whenever the user changes the input value.

---

## 🔹 Keyboard Event

```javascript
keyboardInput.addEventListener("keydown", function (event) {
    console.log(event.key);
});
```

`event.key` tells us which keyboard key was pressed.

---

## 🧪 Practice

### Practice 1

Create a button that displays:

```text
Hello Mehedi!
```

when clicked.

### Practice 2

Create a click counter:

```text
Clicked: 1
Clicked: 2
Clicked: 3
```

### Practice 3

Create an input field that displays the user's name in real time.

### Practice 4

Display the keyboard key pressed by the user.

---

## 🔥 Challenge

Create a small skill input system.

User enters:

```text
Python
```

Then clicking the button should display:

```text
Skill added: Python
```

---

## ▶️ How to Run

Open `index.html` using VS Code Live Server.

Then open:

```text
F12 → Console
```

---

## 📁 Folder Structure

```text
lesson-17/
├── index.html
├── script.js
└── README.md
```

---

## 🚀 What I Learned

I learned how JavaScript detects user actions and responds to them using event listeners.

This is an important foundation for building interactive websites and web applications.
