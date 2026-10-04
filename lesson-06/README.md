# 📘 Lesson 06 — JavaScript `for` Loop

## 🎯 Learning Goals

In this lesson, I learned:

* What a `for` loop is
* How to repeat code using a `for` loop
* `start`, `condition`, and `update`
* Increment (`i++`)
* Decrement (`i--`)
* Using `if` inside a `for` loop
* Finding even and odd numbers
* Creating multiplication tables
* Solving simple programming problems with loops

---

## 1. What is a `for` Loop?

A `for` loop is used to repeat a block of code multiple times.

### Example

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### Output

```text
0
1
2
3
4
```

---

## 2. `for` Loop Structure

```javascript
for (start; condition; update) {
    // code
}
```

Example:

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Three important parts

```text
Start → Condition → Update
```

* `let i = 1` → starting value
* `i <= 10` → condition
* `i++` → increase by 1

---

## 3. Print 1 to 10

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
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
for (let i = 10; i >= 1; i--) {
    console.log(i);
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
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
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
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
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

for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
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

## 8. Real-Life Example

```javascript
for (let day = 1; day <= 5; day++) {
    console.log(`Day ${day}: JavaScript practice`);
}
```

Output:

```text
Day 1: JavaScript practice
Day 2: JavaScript practice
Day 3: JavaScript practice
Day 4: JavaScript practice
Day 5: JavaScript practice
```

---

## 🧠 Easy Way to Remember

Think about a `for` loop like this:

```text
START
  ↓
CHECK CONDITION
  ↓
RUN CODE
  ↓
UPDATE
  ↓
CHECK CONDITION AGAIN
```

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Remember:

```text
Start → Condition → Update
```

---

## 📝 Practice

### Practice 1

Print numbers from 1 to 20.

### Practice 2

Print even numbers from 1 to 20.

### Practice 3

Print odd numbers from 1 to 20.

### Practice 4

Create the multiplication table of 7.

### Practice 5

Print the square of numbers from 1 to 10.

Expected output:

```text
1 × 1 = 1
2 × 2 = 4
3 × 3 = 9
...
10 × 10 = 100
```

Solution:

```javascript
for (let i = 1; i <= 10; i++) {
    console.log(`${i} × ${i} = ${i * i}`);
}
```

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-06
```

Run the JavaScript file:

```bash
node script.js
```

---

## 📁 Folder Structure

```text
lesson-06/
├── script.js
└── README.md
```

---

## 🔑 Key Takeaways

* `for` loop repeats code.
* `i++` increases the value by 1.
* `i--` decreases the value by 1.
* `%` can be used to find even and odd numbers.
* `for` loops are useful for repetitive tasks.
* Loops are an important foundation for JavaScript programming.

---

## 🚀 Git Commands

From the main repository:

```bash
cd ~/javascript-learning
git status
git add lesson-06/
git commit -m "Lesson 06: Learn JavaScript for loop"
git push
```
