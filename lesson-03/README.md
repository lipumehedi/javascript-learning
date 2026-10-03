# 🟨 JavaScript Lesson 03 — Data Types

This lesson introduces the basic data types used in JavaScript.

## 📚 Topics Covered

* String
* Number
* Boolean
* `undefined`
* `null`
* `typeof`
* Data type checking
* Python vs JavaScript data types

---

## 🔤 1. String

A String is used to store text.

```javascript
const name = "Mehedi";
const country = "Japan";

console.log(name);
console.log(country);
```

Output:

```text
Mehedi
Japan
```

---

## 🔢 2. Number

JavaScript uses the `Number` type for integers and decimal numbers.

```javascript
const age = 30;
const salary = 300000;
const height = 5.8;

console.log(age);
console.log(salary);
console.log(height);
```

Unlike Python, JavaScript does not normally separate integers and floating-point values into `int` and `float` types.

---

## ✅ 3. Boolean

Boolean has only two values:

```text
true
false
```

Example:

```javascript
const isLearning = true;
const isSleeping = false;

console.log(isLearning);
console.log(isSleeping);
```

---

## ❓ 4. Undefined

A variable can have the value `undefined` when it has been declared but no value has been assigned.

```javascript
let job;

console.log(job);
```

Output:

```text
undefined
```

---

## 🚫 5. Null

`null` represents an intentionally empty value.

```javascript
let phone = null;

console.log(phone);
```

Output:

```text
null
```

### Easy Difference

```text
undefined → value has not been assigned
null      → intentionally empty
```

---

## 🔍 6. `typeof`

The `typeof` operator is used to check the type of a value.

```javascript
const name = "Mehedi";
const age = 30;
const isLearning = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLearning);
```

Output:

```text
string
number
boolean
```

---

## 🧪 Complete Example

```javascript
const name = "Mehedi";
const age = 30;
const salary = 300000;
const isDeveloper = true;
let job;
let phone = null;

console.log(name);
console.log(age);
console.log(salary);
console.log(isDeveloper);
console.log(job);
console.log(phone);

console.log(typeof name);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof isDeveloper);
console.log(typeof job);
console.log(typeof phone);
```

---

## 🐍 Python vs JavaScript

| Python              | JavaScript  |
| ------------------- | ----------- |
| `str`               | `string`    |
| `int`               | `number`    |
| `float`             | `number`    |
| `bool`              | `boolean`   |
| `None`              | `null`      |
| Unassigned variable | `undefined` |

---

## ⚠️ Important Note About `null`

JavaScript returns:

```javascript
typeof null
```

as:

```text
object
```

This is a historical behavior of JavaScript.

For now, simply remember that `null` means an intentionally empty value.

---

## 🏆 Practice Challenge

Create variables for:

```javascript
const name = "Your Name";
const age = 30;
const country = "Japan";
const salary = 300000;
const isLearning = true;
let job;
let phone = null;
```

Then:

1. Print all values.
2. Use `typeof` on all variables.
3. Check which variables are `string`, `number`, and `boolean`.
4. Check the difference between `undefined` and `null`.

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-03
```

Run:

```bash
node script.js
```

---

## 📂 Project Structure

```text
lesson-03/
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

* [x] Understand String
* [x] Understand Number
* [x] Understand Boolean
* [x] Understand `undefined`
* [x] Understand `null`
* [x] Learn `typeof`
* [x] Practice data type checking
* [x] Compare Python and JavaScript data types

---
