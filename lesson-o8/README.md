# 📘 Lesson 08 — JavaScript Arrays

## 🎯 Learning Goals

In this lesson, I learned:

* What an Array is
* How to create an Array
* Array indexes
* Accessing Array elements
* Changing Array values
* Array `length`
* Using `for` loops with Arrays
* Using `while` loops with Arrays
* Basic user input with Arrays
* Solving simple Array problems

---

## 1. What is an Array?

An Array is used to store multiple values in a single variable.

Example:

```javascript
const skills = ["Python", "SQL", "Django", "JavaScript"];

console.log(skills);
```

Output:

```text
[ 'Python', 'SQL', 'Django', 'JavaScript' ]
```

Instead of creating separate variables:

```javascript
const skill1 = "Python";
const skill2 = "SQL";
const skill3 = "Django";
const skill4 = "JavaScript";
```

We can use one Array:

```javascript
const skills = ["Python", "SQL", "Django", "JavaScript"];
```

---

## 2. Array Index

JavaScript Array indexes start from `0`.

```text
Index:    0        1       2          3
          ↓        ↓       ↓          ↓
        Python    SQL    Django   JavaScript
```

Example:

```javascript
const skills = ["Python", "SQL", "Django", "JavaScript"];

console.log(skills[0]);
console.log(skills[1]);
console.log(skills[2]);
console.log(skills[3]);
```

Output:

```text
Python
SQL
Django
JavaScript
```

### Important

```text
First element → index 0
Second element → index 1
Third element → index 2
```

---

## 3. Changing an Array Value

Array values can be changed by using their index.

```javascript
const skills = ["Python", "SQL", "Django"];

skills[2] = "JavaScript";

console.log(skills);
```

Output:

```text
[ 'Python', 'SQL', 'JavaScript' ]
```

---

## 4. Array Length

The `.length` property tells us how many elements are inside an Array.

```javascript
const skills = ["Python", "SQL", "Django", "JavaScript"];

console.log(skills.length);
```

Output:

```text
4
```

---

## 5. Using `for` Loop with an Array

```javascript
const skills = ["Python", "SQL", "Django", "JavaScript"];

for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}
```

Output:

```text
Python
SQL
Django
JavaScript
```

The loop uses the index to access each Array element.

---

## 6. Using `while` Loop with an Array

```javascript
const skills = ["Python", "SQL", "Django", "JavaScript"];

let i = 0;

while (i < skills.length) {
    console.log(skills[i]);
    i++;
}
```

Output:

```text
Python
SQL
Django
JavaScript
```

---

## 7. Beginner-Friendly User Input

Node.js provides the `readline` module for getting input from the terminal.

Example:

```javascript
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your skill: ", (skill) => {
    const skills = [skill];

    console.log("Your skill:", skills[0]);

    rl.close();
});
```

Run:

```bash
node script.js
```

Example:

```text
Enter your skill: Python
Your skill: Python
```

---

## 8. Array with Multiple Values

An Array can store different values.

```javascript
const person = ["Mehedi", 30, "Japan", true];

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(person[3]);
```

Output:

```text
Mehedi
30
Japan
true
```

---

## 📝 Practice

### Practice 1

Create an Array containing 5 programming languages.

Example:

```javascript
const languages = ["Python", "JavaScript", "Java", "C++", "PHP"];
```

Print the first language.

---

### Practice 2

Create an Array containing 5 countries.

Print the third country.

---

### Practice 3

Create an Array containing your IT skills.

Use a `for` loop to print every skill.

---

### Practice 4

Create an Array:

```javascript
const numbers = [10, 20, 30, 40, 50];
```

Use a `while` loop to print every number.

---

### Practice 5 ⭐

Create an Array:

```javascript
const numbers = [10, 20, 30, 40, 50];
```

Use a loop to calculate the total.

Expected output:

```text
Total: 150
```

Hint:

```javascript
let total = 0;
```

Then add each Array element to `total`.

---

### Practice 6 ⭐⭐

Create an Array:

```javascript
const scores = [80, 65, 90, 75, 95];
```

Use a loop to print only scores greater than or equal to `80`.

Expected output:

```text
80
90
95
```

---

## 🧠 Key Takeaways

* An Array stores multiple values.
* Array indexes start from `0`.
* Use `array[index]` to access an element.
* `.length` gives the number of elements.
* Arrays can be changed using their index.
* `for` loops can be used to process Arrays.
* `while` loops can also be used with Arrays.
* `readline` can be used for beginner-friendly terminal input.

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-08
```

Run:

```bash
node script.js
```

---

## 📁 Folder Structure

```text
lesson-08/
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
