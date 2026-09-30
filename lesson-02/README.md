# 🟨 JavaScript Lesson 02 — Variables

This lesson introduces JavaScript variables using `let` and `const`.

## 📚 Topics Covered

* What is a variable?
* `let`
* `const`
* Changing variable values
* String variables
* Number variables
* Boolean variables
* Template literals
* `${variable}` syntax
* `console.log()`

---

## 🧠 What is a Variable?

A variable is a container used to store data.

### Python

```python
name = "Mehedi"
age = 30
```

### JavaScript

```javascript
let name = "Mehedi";
let age = 30;
```

---

## 🔹 `let`

Use `let` when the value may change later.

```javascript
let age = 30;

console.log(age);

age = 31;

console.log(age);
```

Output:

```text
30
31
```

---

## 🔹 `const`

Use `const` when the value should not be reassigned.

```javascript
const country = "Japan";

console.log(country);
```

A `const` variable cannot be reassigned:

```javascript
const country = "Japan";

country = "Bangladesh";
```

This will produce an error.

---

## ⚖️ `let` vs `const`

| Keyword | Can the value be reassigned? |
| ------- | ---------------------------- |
| `let`   | ✅ Yes                        |
| `const` | ❌ No                         |

### Easy Rule

```text
let   → value can change
const → value should not change
```

---

## 🔤 String Variable

```javascript
const name = "Mehedi";

console.log(name);
```

---

## 🔢 Number Variable

```javascript
let age = 30;

console.log(age);
```

---

## ✅ Boolean Variable

```javascript
let isLearning = true;

console.log(isLearning);
```

---

## 🧩 Template Literals

Template literals use backticks.

```javascript
const name = "Mehedi";
const age = 30;

console.log(`My name is ${name}`);
console.log(`I am ${age} years old`);
```

Output:

```text
My name is Mehedi
I am 30 years old
```

`${variable}` allows us to insert a variable inside a string.

---

## 💻 Practice Project

```javascript
const name = "Mehedi";
let age = 30;
const country = "Japan";
let skill = "Python";

console.log(`My name is ${name}`);
console.log(`I am ${age} years old`);
console.log(`I live in ${country}`);
console.log(`My main skill is ${skill}`);

skill = "Python + JavaScript";

console.log(`Now I am learning ${skill}`);
```

### Expected Output

```text
My name is Mehedi
I am 30 years old
I live in Japan
My main skill is Python
Now I am learning Python + JavaScript
```

---

## 🏆 Practice Challenge

Create these variables:

```javascript
const university = "Your University";
let experience = 3;
let isDeveloper = false;
```

Then print them using `console.log()`.

Example:

```javascript
console.log(`University: ${university}`);
console.log(`Experience: ${experience} years`);
console.log(`Developer: ${isDeveloper}`);
```

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-02
```

Run the JavaScript file:

```bash
node script.js
```

---

## 📂 Project Structure

```text
lesson-02/
│
├── script.js
└── README.md
```

---

## 🛠️ Technologies

* JavaScript
* Node.js
* VS Code
* Git
* GitHub

---

## ✅ Learning Checklist

* [x] Understand variables
* [x] Learn `let`
* [x] Learn `const`
* [x] Understand reassignment
* [x] Learn String variables
* [x] Learn Number variables
* [x] Learn Boolean variables
* [x] Learn template literals
* [x] Learn `${variable}`
* [x] Practice `console.log()`

---
