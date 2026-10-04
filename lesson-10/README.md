# 🟨 JavaScript Lesson 10 — Functions

This lesson introduces JavaScript Functions.

Functions are one of the most important concepts in JavaScript because they allow us to organize code, reuse code, and perform specific tasks.

---

## 📚 Topics Covered

* What is a function?
* Creating a function
* Calling a function
* Function parameters
* Multiple parameters
* `return`
* Function results
* Functions with `if / else`
* Functions with Arrays
* Real-life examples

---

# 1️⃣ What is a Function?

A function is a reusable block of code that performs a specific task.

Instead of writing the same code again and again, we can put the code inside a function and call it whenever we need it.

Example:

```javascript
function greet() {
    console.log("Hello Mehedi!");
}
```

To run the function:

```javascript
greet();
```

Output:

```text
Hello Mehedi!
```

---

# 2️⃣ Creating a Function

Basic syntax:

```javascript
function functionName() {
    // code
}
```

Example:

```javascript
function greet() {
    console.log("Hello!");
}
```

Here:

```text
function → tells JavaScript we are creating a function

greet → function name

() → parameters go here

{} → function body
```

---

# 3️⃣ Calling a Function

Creating a function does not automatically run it.

We need to call the function.

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

Output:

```text
Hello!
```

The line:

```javascript
greet();
```

is called a function call.

---

# 4️⃣ Function with a Parameter

A parameter allows us to send information into a function.

```javascript
function greetUser(name) {
    console.log(`Hello ${name}!`);
}

greetUser("Mehedi");
```

Output:

```text
Hello Mehedi!
```

Another example:

```javascript
greetUser("Lipu");
```

Output:

```text
Hello Lipu!
```

The function can therefore work with different values.

---

# 5️⃣ Function with Two Parameters

A function can have multiple parameters.

```javascript
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
```

Output:

```text
30
```

Another example:

```javascript
add(100, 200);
```

Output:

```text
300
```

Here:

```text
a → first value
b → second value
```

---

# 6️⃣ `return`

`return` sends a value back from the function.

Example:

```javascript
function multiply(a, b) {
    return a * b;
}
```

Now we can store the result:

```javascript
const result = multiply(10, 5);

console.log(result);
```

Output:

```text
50
```

### Important Difference

`console.log()`:

```javascript
function add(a, b) {
    console.log(a + b);
}
```

This prints the result.

`return`:

```javascript
function add(a, b) {
    return a + b;
}
```

This sends the result back so we can use it later.

For example:

```javascript
const result = add(10, 20);

console.log(result);
```

---

# 🧠 Easy Way to Remember

```text
console.log()
→ Show something on the screen

return
→ Send something back from the function
```

---

# 7️⃣ Real-Life Salary Example

Suppose monthly salary is ¥300,000.

We can create a function:

```javascript
function calculateYearlySalary(monthlySalary) {
    return monthlySalary * 12;
}
```

Call it:

```javascript
const yearlySalary = calculateYearlySalary(300000);

console.log(yearlySalary);
```

Output:

```text
3600000
```

The function can be reused:

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

# 8️⃣ Function with `if / else`

Functions can also contain conditions.

```javascript
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}
```

Use it:

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

# 9️⃣ Function with Array

We can send an Array into a function.

```javascript
function showSkills(skills) {
    for (let i = 0; i < skills.length; i++) {
        console.log(skills[i]);
    }
}
```

Create an Array:

```javascript
const skills = ["Python", "SQL", "Django", "JavaScript"];
```

Call the function:

```javascript
showSkills(skills);
```

Output:

```text
Python
SQL
Django
JavaScript
```

---

# 🔟 Why Functions Are Important

Without functions:

```javascript
console.log("Hello Mehedi");
console.log("Hello Lipu");
console.log("Hello Hasan");
```

With a function:

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Mehedi");
greet("Lipu");
greet("Hasan");
```

Functions make code:

* Reusable
* Cleaner
* Easier to understand
* Easier to maintain
* Easier to test

---

# 💻 Complete Practice

Create `script.js`:

```javascript
// Basic Function
function greet() {
    console.log("Hello Mehedi!");
}

greet();


// Function with Parameter
function greetUser(name) {
    console.log(`Hello ${name}!`);
}

greetUser("Mehedi");
greetUser("Lipu");


// Addition
function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// Return
function multiply(a, b) {
    return a * b;
}

const result = multiply(10, 5);

console.log("Multiplication:", result);


// Salary
function calculateYearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

console.log(
    "Yearly Salary:",
    calculateYearlySalary(300000)
);


// Age Check
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}

console.log(checkAge(30));
console.log(checkAge(15));


// Array
function showSkills(skills) {
    for (let i = 0; i < skills.length; i++) {
        console.log(skills[i]);
    }
}

const skills = ["Python", "SQL", "Django", "JavaScript"];

showSkills(skills);
```

---

# 🏆 Practice Challenges

## Challenge 1 — Greeting Function

Create a function called:

```javascript
greetUser()
```

It should receive a name and print:

```text
Hello Mehedi!
```

---

## Challenge 2 — Addition Function

Create:

```javascript
add(a, b)
```

It should return the sum.

Example:

```javascript
const result = add(20, 30);

console.log(result);
```

Expected:

```text
50
```

---

## Challenge 3 — Square Function

Create:

```javascript
square(number)
```

It should return the square of a number.

Example:

```javascript
console.log(square(5));
```

Expected:

```text
25
```

---

## Challenge 4 — Salary Function

Create:

```javascript
calculateYearlySalary(monthlySalary)
```

For:

```javascript
calculateYearlySalary(300000)
```

Expected:

```text
3600000
```

---

## Challenge 5 — Age Check

Create:

```javascript
checkAge(age)
```

Rules:

```text
18 or above → "Adult"
Below 18   → "Not Adult"
```

---

## Challenge 6 — Array Function

Create:

```javascript
showSkills(skills)
```

Print every skill using a `for` loop.

Example:

```javascript
const skills = ["Python", "SQL", "Django"];

showSkills(skills);
```

Expected:

```text
Python
SQL
Django
```

---

# 📂 Project Structure

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
    ├── script.js
    └── README.md
```

---

# ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-10
```

Run:

```bash
node script.js
```

---

# 🛠️ Technologies

* JavaScript
* Node.js
* VS Code
* Git
* GitHub

---

# ✅ Learning Checklist

* [ ] Understand functions
* [ ] Create a function
* [ ] Call a function
* [ ] Use parameters
* [ ] Use multiple parameters
* [ ] Understand `return`
* [ ] Use functions with `if / else`
* [ ] Use functions with Arrays
* [ ] Create reusable functions

---
