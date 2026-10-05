# 🟨 JavaScript Lesson 11 — Function Parameters & Return

This lesson focuses on JavaScript Function Parameters, Arguments, and Return Values.

In Lesson 10, we learned how to create and call functions.

In this lesson, we will learn how to send data into a function and get a result back.

---

## 📚 Topics Covered

* Function parameters
* Function arguments
* One parameter
* Multiple parameters
* `return`
* Returning String
* Returning Number
* `return` with calculations
* `return` with `if / else`
* Functions with Arrays
* Real-life examples

---

## 1️⃣ What is a Parameter?

A parameter is a variable written inside the function parentheses.

Example:

```javascript
function greetUser(name) {
    return `Hello ${name}!`;
}
```

Here:

```text
name → parameter
```

The parameter receives a value when the function is called.

---

## 2️⃣ What is an Argument?

An argument is the actual value we send to the function.

```javascript
greetUser("Mehedi");
```

Here:

```text
name → parameter
"Mehedi" → argument
```

### Easy Rule

```text
Parameter → Function-এর ভিতরের variable

Argument → Function call করার সময় পাঠানো value
```

---

## 3️⃣ One Parameter

```javascript
function greetUser(name) {
    return `Hello ${name}!`;
}

console.log(greetUser("Mehedi"));
```

Output:

```text
Hello Mehedi!
```

We can reuse the same function:

```javascript
console.log(greetUser("Lipu"));
console.log(greetUser("Hasan"));
```

Output:

```text
Hello Lipu!
Hello Hasan!
```

---

## 4️⃣ Two Parameters

A function can receive multiple parameters.

```javascript
function add(a, b) {
    return a + b;
}
```

Call:

```javascript
console.log(add(10, 20));
```

Output:

```text
30
```

Here:

```text
a → 10
b → 20
```

---

## 5️⃣ Multiple Parameters

Example:

```javascript
function introduce(name, age, country) {
    return `${name} is ${age} years old and lives in ${country}.`;
}
```

Call:

```javascript
console.log(
    introduce("Mehedi", 30, "Japan")
);
```

Output:

```text
Mehedi is 30 years old and lives in Japan.
```

---

## 6️⃣ `return`

The `return` keyword sends a value back from a function.

Example:

```javascript
function multiply(a, b) {
    return a * b;
}
```

Call:

```javascript
const result = multiply(10, 5);

console.log(result);
```

Output:

```text
50
```

---

## 🧠 `console.log()` vs `return`

This is very important.

### `console.log()`

```javascript
function add(a, b) {
    console.log(a + b);
}
```

It displays the result.

### `return`

```javascript
function add(a, b) {
    return a + b;
}
```

It sends the result back.

Then we can store the result:

```javascript
const result = add(10, 20);

console.log(result);
```

### Easy Rules

```text
console.log() → Show result

return → Send result back
```

---

## 7️⃣ Return a String

A function can return a String.

```javascript
function getMessage(name) {
    return `Welcome ${name}!`;
}

const message = getMessage("Mehedi");

console.log(message);
```

Output:

```text
Welcome Mehedi!
```

---

## 8️⃣ Return a Number

A function can return a Number.

```javascript
function square(number) {
    return number * number;
}

console.log(square(5));
```

Output:

```text
25
```

Another example:

```javascript
console.log(square(10));
```

Output:

```text
100
```

---

## 9️⃣ Real-Life Salary Example

Suppose monthly salary is ¥300,000.

We can calculate yearly salary using a function:

```javascript
function calculateYearlySalary(monthlySalary) {
    return monthlySalary * 12;
}
```

Call:

```javascript
const yearlySalary = calculateYearlySalary(300000);

console.log(yearlySalary);
```

Output:

```text
3600000
```

The same function can calculate different salaries:

```javascript
console.log(calculateYearlySalary(250000));
console.log(calculateYearlySalary(300000));
console.log(calculateYearlySalary(350000));
```

Output:

```text
3000000
3600000
4200000
```

---

## 🔟 Condition + Return

A function can use `if / else` and return different values.

```javascript
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}
```

Call:

```javascript
console.log(checkAge(30));
console.log(checkAge(15));
```

Output:

```text
Adult
Not Adult
```

---

## 1️⃣1️⃣ Score Example

We can create a function that returns a grade.

```javascript
function getGrade(score) {
    if (score >= 90) {
        return "A+";
    } else if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else {
        return "Fail";
    }
}
```

Call:

```javascript
console.log(getGrade(85));
```

Output:

```text
A
```

---

## 1️⃣2️⃣ Function + Array

We can pass an Array to a function.

```javascript
function getFirstSkill(skills) {
    return skills[0];
}
```

Create an Array:

```javascript
const skills = ["Python", "SQL", "Django"];
```

Call:

```javascript
console.log(getFirstSkill(skills));
```

Output:

```text
Python
```

---

## 1️⃣3️⃣ Array Length with Function

We can return the number of items in an Array.

```javascript
function countSkills(skills) {
    return skills.length;
}
```

Example:

```javascript
const skills = ["Python", "SQL", "Django"];

console.log(countSkills(skills));
```

Output:

```text
3
```

---

## 💻 Complete Practice

Create `script.js`:

```javascript
function greetUser(name) {
    return `Hello ${name}!`;
}

console.log(greetUser("Mehedi"));


function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));


function multiply(a, b) {
    return a * b;
}

console.log("Multiplication:", multiply(10, 5));


function calculateYearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

console.log(
    "Yearly Salary:",
    calculateYearlySalary(300000)
);


function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}

console.log(checkAge(30));
console.log(checkAge(15));


function getGrade(score) {
    if (score >= 90) {
        return "A+";
    } else if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else {
        return "Fail";
    }
}

console.log("Grade:", getGrade(85));


function getFirstSkill(skills) {
    return skills[0];
}

const skills = ["Python", "SQL", "Django"];

console.log(
    "First skill:",
    getFirstSkill(skills)
);


function countSkills(skills) {
    return skills.length;
}

console.log(
    "Total skills:",
    countSkills(skills)
);
```

---

## 🏆 Practice Challenges

## Challenge 1 — Greeting

Create:

```javascript
greetUser(name)
```

For:

```javascript
greetUser("Mehedi")
```

Expected:

```text
Hello Mehedi!
```

---

## Challenge 2 — Addition

Create:

```javascript
add(a, b)
```

Example:

```javascript
console.log(add(20, 30));
```

Expected:

```text
50
```

---

## Challenge 3 — Subtraction

Create:

```javascript
subtract(a, b)
```

Example:

```javascript
console.log(subtract(50, 20));
```

Expected:

```text
30
```

---

## Challenge 4 — Square

Create:

```javascript
square(number)
```

Example:

```javascript
console.log(square(5));
```

Expected:

```text
25
```

---

## Challenge 5 — Salary

Create:

```javascript
calculateYearlySalary(monthlySalary)
```

Example:

```javascript
console.log(
    calculateYearlySalary(300000)
);
```

Expected:

```text
3600000
```

---

## Challenge 6 — Age Check

Create:

```javascript
checkAge(age)
```

Rules:

```text
18 or above → Adult
Below 18    → Not Adult
```

---

## Challenge 7 — Grade

Create:

```javascript
getGrade(score)
```

Rules:

```text
90+     → A+
80–89   → A
70–79   → B
60–69   → C
Below60 → Fail
```

---

## Challenge 8 — Array

Create:

```javascript
getFirstSkill(skills)
```

Example:

```javascript
const skills = [
    "Python",
    "SQL",
    "Django"
];

console.log(
    getFirstSkill(skills)
);
```

Expected:

```text
Python
```

---

## 📂 Project Structure

```text
javascript-learning/
│
├── lesson-01/
├── lesson-02/
├── lesson-03/
├── lesson-04/
├── lesson-05/
├── lesson-06/
├── lesson-07/
├── lesson-08/
├── lesson-09/
│
└── lesson-10/
└── lesson-11/
    ├── script.js
    └── README.md
```

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-11
```

Run:

```bash
node script.js
```

---

## 🛠️ Technologies

* JavaScript
* Node.js
* VS Code
* Git
* GitHub

---

## 🧠 Easy Memory

```text
Function
   ↓
Parameter
   ↓
Argument
   ↓
Function does work
   ↓
return
   ↓
Result
```

Example:

```javascript
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);
```

Think:

```text
a = 10
b = 20

10 + 20
   ↓
  30
   ↓
return
   ↓
result = 30
```

---

## ✅ Learning Checklist

* [ ] Understand parameter
* [ ] Understand argument
* [ ] Use one parameter
* [ ] Use multiple parameters
* [ ] Understand `return`
* [ ] Return String
* [ ] Return Number
* [ ] Use calculations with `return`
* [ ] Use `if / else` with `return`
* [ ] Use Functions with Arrays
* [ ] Complete all challenges

---
