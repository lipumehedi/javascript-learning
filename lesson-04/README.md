# 🟨 JavaScript Lesson 04 — Operators & Comparisons

This lesson introduces JavaScript operators used for calculations and comparisons.

## 📚 Topics Covered

* Arithmetic operators
* Addition `+`
* Subtraction `-`
* Multiplication `*`
* Division `/`
* Remainder `%`
* String concatenation
* Comparison operators
* `>`
* `<`
* `>=`
* `<=`
* `==`
* `===`
* `!=`
* `!==`

---

## ➕ 1. Addition

```javascript
const a = 10;
const b = 5;

console.log(a + b);
```

Output:

```text
15
```

---

## ➖ 2. Subtraction

```javascript
console.log(a - b);
```

Output:

```text
5
```

---

## ✖️ 3. Multiplication

```javascript
console.log(a * b);
```

Output:

```text
50
```

---

## ➗ 4. Division

```javascript
console.log(a / b);
```

Output:

```text
2
```

---

## `%` 5. Remainder

The `%` operator returns the remainder after division.

```javascript
console.log(10 % 3);
```

Output:

```text
1
```

---

## 🔤 6. String Concatenation

The `+` operator can also join strings.

```javascript
const firstName = "Mehedi";
const lastName = "Lipu";

console.log(firstName + " " + lastName);
```

Output:

```text
Mehedi Lipu
```

Template literal:

```javascript
console.log(`${firstName} ${lastName}`);
```

---

## 🔍 7. Comparison Operators

Comparison operators return `true` or `false`.

### Greater Than

```javascript
console.log(10 > 5);
```

Output:

```text
true
```

### Less Than

```javascript
console.log(10 < 5);
```

Output:

```text
false
```

### Greater Than or Equal

```javascript
console.log(10 >= 10);
```

Output:

```text
true
```

### Less Than or Equal

```javascript
console.log(5 <= 10);
```

Output:

```text
true
```

---

## ⚖️ 8. `==` vs `===`

### `==`

Checks values and may perform type conversion.

```javascript
console.log(5 == "5");
```

Output:

```text
true
```

### `===`

Checks both value and type.

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

### Easy Rule

```text
==  → value comparison
=== → value + type comparison
```

In modern JavaScript, `===` is generally preferred.

---

## ❌ 9. `!=` vs `!==`

### `!=`

```javascript
console.log(5 != 3);
```

Output:

```text
true
```

### `!==`

```javascript
console.log(5 !== "5");
```

Output:

```text
true
```

### Easy Rules

```text
!=  → not equal
!== → not equal + type check
```

---

## 💻 Complete Practice

```javascript
const a = 20;
const b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

console.log("a is greater than b:", a > b);
console.log("a is less than b:", a < b);
console.log("a is equal to b:", a === b);
console.log("a is not equal to b:", a !== b);
```

---

## 💰 Real-Life Salary Example

```javascript
const monthlySalary = 300000;
const months = 12;

const yearlySalary = monthlySalary * months;

console.log(`Yearly salary: ${yearlySalary}`);

console.log(yearlySalary >= 3000000);
```

Output:

```text
Yearly salary: 3600000
true
```

---

## 🏆 Practice Challenge

Create a salary calculation using:

```javascript
const monthlySalary = 300000;
const months = 12;
```

Calculate the yearly salary.

Then check:

```text
Is the yearly salary greater than or equal to 3,000,000?
```

Use a comparison operator to get `true` or `false`.

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-04
```

Run:

```bash
node script.js
```

---

## 📂 Project Structure

```text
lesson-04/
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

* [x] Addition
* [x] Subtraction
* [x] Multiplication
* [x] Division
* [x] Remainder
* [x] String concatenation
* [x] Comparison operators
* [x] `==`
* [x] `===`
* [x] `!=`
* [x] `!==`
* [x] `true` and `false`

---
