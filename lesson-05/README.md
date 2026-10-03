# 🟨 JavaScript Lesson 05 — if / else

This lesson introduces conditional statements in JavaScript.

Conditional statements allow a program to make decisions based on conditions.

## 📚 Topics Covered

* `if`
* `else`
* `else if`
* Conditions
* Comparison operators with conditions
* `&&` AND
* `||` OR
* `!` NOT
* Real-life decision making

---

## 🔹 1. `if`

The `if` statement runs code when a condition is `true`.

```javascript
const age = 30;

if (age >= 18) {
    console.log("You are an adult.");
}
```

Output:

```text
You are an adult.
```

---

## 🔹 2. `if` Structure

```javascript
if (condition) {
    // code runs when condition is true
}
```

Example:

```javascript
const age = 15;

if (age >= 18) {
    console.log("Adult");
}
```

Because `15 >= 18` is `false`, the message is not printed.

---

## 🔹 3. `else`

`else` runs when the `if` condition is false.

```javascript
const age = 15;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not an adult");
}
```

Output:

```text
Not an adult
```

---

## 🔹 4. `if + else`

```javascript
const password = "12345";

if (password === "12345") {
    console.log("Login successful");
} else {
    console.log("Wrong password");
}
```

Output:

```text
Login successful
```

---

## 🔹 5. `else if`

`else if` is used when we need to check multiple conditions.

```javascript
const age = 30;

if (age < 18) {
    console.log("Child");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}
```

Output:

```text
Adult
```

---

## 🔹 6. Multiple Conditions

```javascript
const score = 85;

if (score >= 90) {
    console.log("Grade A+");
} else if (score >= 80) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

Output:

```text
Grade A
```

---

## 🔹 7. Comparison Operators with `if`

```javascript
const salary = 350000;

if (salary >= 300000) {
    console.log("Salary is 300,000 or more.");
} else {
    console.log("Salary is less than 300,000.");
}
```

---

## 🔹 8. Boolean with `if`

A Boolean can be used directly as a condition.

```javascript
const isLearning = true;

if (isLearning) {
    console.log("Keep learning!");
} else {
    console.log("Start learning!");
}
```

Output:

```text
Keep learning!
```

---

## 🔹 9. AND Operator `&&`

Both conditions must be true.

```javascript
const age = 30;
const hasLicense = true;

if (age >= 18 && hasLicense === true) {
    console.log("You can drive.");
} else {
    console.log("You cannot drive.");
}
```

Output:

```text
You can drive.
```

---

## 🔹 10. OR Operator `||`

At least one condition must be true.

```javascript
const isStudent = false;
const isEmployee = true;

if (isStudent || isEmployee) {
    console.log("You have an active status.");
}
```

Output:

```text
You have an active status.
```

---

## 🔹 11. NOT Operator `!`

The `!` operator reverses a Boolean value.

```javascript
const isWorking = false;

if (!isWorking) {
    console.log("You are not working.");
}
```

Output:

```text
You are not working.
```

---

## 🧠 Easy Rules

```text
if       → if a condition is true
else     → when the condition is false
else if  → check another condition
&&       → AND
||       → OR
!        → NOT
```

---

## 💻 Complete Practice

```javascript
const age = 30;
const country = "Japan";
const isLearning = true;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are not an adult.");
}

if (country === "Japan") {
    console.log("You live in Japan.");
} else {
    console.log("You do not live in Japan.");
}

if (isLearning) {
    console.log("You are learning JavaScript.");
} else {
    console.log("You are not learning JavaScript.");
}
```

Expected output:

```text
You are an adult.
You live in Japan.
You are learning JavaScript.
```

---

## 🏆 Practice Challenge 1 — Salary

Create:

```javascript
const monthlySalary = 300000;
```

Rules:

```text
300000 or more → Good salary
Below 300000   → Keep improving
```

Use `if / else`.

---

## 🏆 Practice Challenge 2 — Grade

Create:

```javascript
const score = 75;
```

Rules:

```text
90+       → A+
80–89     → A
70–79     → B
60–69     → C
Below 60  → Fail
```

Use `if / else if / else`.

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-05
```

Run:

```bash
node script.js
```

---

## 📂 Project Structure

```text
lesson-05/
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

* [x] `if`
* [x] `else`
* [x] `else if`
* [x] Conditions
* [x] Comparison operators
* [x] `&&`
* [x] `||`
* [x] `!`
* [x] Boolean conditions
* [x] Real-life decision making

---
