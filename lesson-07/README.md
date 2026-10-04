# 📘 Lesson 07 — JavaScript `while` Loop

## 🎯 Learning Goals

In this lesson, I learned:

* What a `while` loop is
* How to repeat code using `while`
* How conditions control a loop
* Increment using `i++`
* Decrement using `i--`
* Using `if` inside a `while` loop
* Finding even and odd numbers
* Creating multiplication tables
* Difference between `for` and `while` loops
* How to avoid infinite loops

---

## 1. What is a `while` Loop?

A `while` loop repeats a block of code while a condition is `true`.

### Basic Structure

```javascript
while (condition) {
    // code
}
```

---

## 2. Simple Example

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

### Output

```text
1
2
3
4
5
```

The loop works like this:

```text
Start
  ↓
Check condition
  ↓
Run code
  ↓
Update value
  ↓
Check condition again
  ↓
Stop when condition becomes false
```

---

## 3. Print 1 to 10

```javascript
let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}
```

Output:

```text
1
2
3
4
5
6
7
8
9
10
```

---

## 4. Print 10 to 1

```javascript
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
```

Output:

```text
10
9
8
7
6
5
4
3
2
1
```

---

## 5. Even Numbers

```javascript
let i = 1;

while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }

    i++;
}
```

Output:

```text
2
4
6
8
10
```

---

## 6. Odd Numbers

```javascript
let i = 1;

while (i <= 10) {
    if (i % 2 !== 0) {
        console.log(i);
    }

    i++;
}
```

Output:

```text
1
3
5
7
9
```

---

## 7. Multiplication Table

Example: 5 multiplication table.

```javascript
const number = 5;
let i = 1;

while (i <= 10) {
    console.log(`${number} × ${i} = ${number * i}`);
    i++;
}
```

Output:

```text
5 × 1 = 5
5 × 2 = 10
5 × 3 = 15
5 × 4 = 20
5 × 5 = 25
5 × 6 = 30
5 × 7 = 35
5 × 8 = 40
5 × 9 = 45
5 × 10 = 50
```

---

## ⚠️ Important: Infinite Loop

Always remember to update the loop variable.

### ❌ Wrong

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
}
```

Here, `i` never changes, so the condition always remains `true`.

### ✅ Correct

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

## 🔄 `for` vs `while`

### `for` Loop

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### `while` Loop

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

Both produce:

```text
1
2
3
4
5
```

### Easy Rule

```text
for   → when the number of repetitions is mostly known
while → when repetition depends mainly on a condition
```

---

## 📝 Practice

### Practice 1

Print numbers from 1 to 20 using a `while` loop.

### Practice 2

Print even numbers from 1 to 20.

### Practice 3

Print odd numbers from 1 to 20.

### Practice 4

Create the multiplication table of 7.

### Practice 5 ⭐

Print the square of numbers from 1 to 10.

Expected output:

```text
1 × 1 = 1
2 × 2 = 4
3 × 3 = 9
4 × 4 = 16
5 × 5 = 25
6 × 6 = 36
7 × 7 = 49
8 × 8 = 64
9 × 9 = 81
10 × 10 = 100
```

Solution:

```javascript
let i = 1;

while (i <= 10) {
    console.log(`${i} × ${i} = ${i * i}`);
    i++;
}
```

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-07
```

Run the JavaScript file:

```bash
node script.js
```

---

## 📁 Folder Structure

```text
lesson-07/
├── script.js
└── README.md
```

---

## 🧠 Key Takeaways

* `while` repeats code while a condition is `true`.
* The condition is checked before each iteration.
* `i++` increases a value by 1.
* `i--` decreases a value by 1.
* `%` can be used to find even and odd numbers.
* Always update the loop variable to avoid an infinite loop.
* `for` and `while` can often solve the same problems.

---
