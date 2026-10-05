# Lesson 14 — JavaScript String Methods

## 📌 Overview

In this lesson, I learned important JavaScript String methods.

String methods are very useful for:

* User input
* Form validation
* Search
* Data cleaning
* API data
* Email processing
* Username processing
* Backend and frontend development

---

## 🎯 Learning Goals

After completing this lesson, I can:

* Convert strings to uppercase
* Convert strings to lowercase
* Remove extra spaces
* Search inside strings
* Check how a string starts
* Check how a string ends
* Extract part of a string
* Replace text
* Convert a string into an array
* Check string length

---

## 1. `toUpperCase()`

Converts a string into uppercase letters.

```javascript
const name = "Mehedi";

console.log(name.toUpperCase());
```

Output:

```text
MEHEDI
```

---

## 2. `toLowerCase()`

Converts a string into lowercase letters.

```javascript
const country = "JAPAN";

console.log(country.toLowerCase());
```

Output:

```text
japan
```

---

## 3. `trim()`

Removes extra spaces from the beginning and end of a string.

```javascript
const username = "   Mehedi   ";

console.log(username.trim());
```

Output:

```text
Mehedi
```

## Real-world use

`trim()` is commonly useful when cleaning user input.

---

## 4. `includes()`

Checks whether a string contains specific text.

```javascript
const skill = "Python Backend Developer";

console.log(skill.includes("Python"));
```

Output:

```text
true
```

Example:

```javascript
console.log(skill.includes("JavaScript"));
```

Output:

```text
false
```

---

## 5. `startsWith()`

Checks whether a string starts with specific text.

```javascript
const job = "Python Backend Developer";

console.log(job.startsWith("Python"));
```

Output:

```text
true
```

---

## 6. `endsWith()`

Checks whether a string ends with specific text.

```javascript
const job = "Python Backend Developer";

console.log(job.endsWith("Developer"));
```

Output:

```text
true
```

---

## 7. `slice()`

Extracts part of a string.

```javascript
const language = "JavaScript";

console.log(language.slice(0, 4));
```

Output:

```text
Java
```

Another example:

```javascript
console.log(language.slice(4));
```

Output:

```text
Script
```

Remember:

```text
slice(start, end)
```

The `end` position is not included.

---

## 8. `replace()`

Replaces one piece of text with another.

```javascript
const sentence = "I am learning Java.";

console.log(sentence.replace("Java", "JavaScript"));
```

Output:

```text
I am learning JavaScript.
```

---

## 9. `split()`

Converts a String into an Array.

```javascript
const skills = "Python,SQL,Django,JavaScript";

const skillList = skills.split(",");

console.log(skillList);
```

Output:

```text
["Python", "SQL", "Django", "JavaScript"]
```

This is very useful when working with data.

---

## 10. `length`

Returns the number of characters.

```javascript
const message = "Hello Mehedi";

console.log(message.length);
```

---

## 🔥 Real-World Example

```javascript
const fullName = "  Mehedi Lipu  ";

const cleanName = fullName.trim();

console.log(cleanName.toUpperCase());
```

Output:

```text
MEHEDI LIPU
```

Here we used:

```text
trim()
↓
toUpperCase()
```

---

## 💼 Developer Example

```javascript
const userSkill = "Python";

if (userSkill.toLowerCase() === "python") {
    console.log("Python skill found!");
}
```

This allows us to handle:

```text
Python
python
PYTHON
PyThOn
```

more safely when comparing case-insensitive input.

---

## 🧩 Practice Problems

## Problem 1

Create:

```javascript
const name = "mehedi";
```

Convert it to uppercase.

Expected:

```text
MEHEDI
```

---

## Problem 2

Create:

```javascript
const country = "   Japan   ";
```

Remove the extra spaces.

Expected:

```text
Japan
```

---

## Problem 3

Create:

```javascript
const skill = "Python Backend Developer";
```

Check whether it contains:

```text
Backend
```

---

## Problem 4

Create:

```javascript
const email = "MEHEDI@GMAIL.COM";
```

Convert it to lowercase.

Expected:

```text
mehedi@gmail.com
```

---

## Problem 5

Create:

```javascript
const language = "JavaScript";
```

Use `slice()` to get:

```text
Java
```

---

## Problem 6

Create:

```javascript
const sentence = "I am learning Java.";
```

Replace:

```text
Java
```

with:

```text
JavaScript
```

---

## Problem 7

Create:

```javascript
const skills = "Python,SQL,Django,Docker";
```

Convert it into an array using `split()`.

Expected:

```text
["Python", "SQL", "Django", "Docker"]
```

---

## Problem 8 — Challenge 🔥

Create:

```javascript
const job = "   Python Backend Developer   ";
```

Do all three:

1. Remove spaces
2. Convert to uppercase
3. Check whether it contains `BACKEND`

Expected result:

```text
PYTHON BACKEND DEVELOPER
true
```

---

## 🧠 Quick Revision

```javascript
text.toUpperCase();
text.toLowerCase();
text.trim();
text.includes("Python");
text.startsWith("Python");
text.endsWith("Developer");
text.slice(0, 4);
text.replace("Java", "JavaScript");
text.split(",");
text.length;
```

---

## 🚀 Run the Lesson

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-14
node script.js
```

---

## 📂 Folder Structure

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
├── lesson-10/
├── lesson-11/
├── lesson-12/
├── lesson-13/
│
└── lesson-14/
    ├── script.js
    └── README.md
```

---

## ✅ Lesson 14 Complete

In this lesson, I learned:

* String methods
* `toUpperCase()`
* `toLowerCase()`
* `trim()`
* `includes()`
* `startsWith()`
* `endsWith()`
* `slice()`
* `replace()`
* `split()`
* `length`
* String processing with conditions
* Real-world user input cleaning
