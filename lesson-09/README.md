# 🟨 JavaScript Lesson 09 — Array Methods

This lesson introduces useful JavaScript Array methods for adding, removing, searching, and copying items.

---

## 📚 Topics Covered

* `push()`
* `pop()`
* `unshift()`
* `shift()`
* `includes()`
* `indexOf()`
* `slice()`
* Array manipulation
* Array with conditions
* Array with loops

---

# 1️⃣ `push()` — Add Item at the End

`push()` adds a new item to the end of an Array.

```javascript
const skills = ["Python", "SQL"];

skills.push("Django");

console.log(skills);
```

Output:

```text
["Python", "SQL", "Django"]
```

### Easy Rule

```text
push() → Add at the END
```

---

# 2️⃣ `pop()` — Remove Item from the End

`pop()` removes the last item from an Array.

```javascript
const skills = ["Python", "SQL", "Django"];

skills.pop();

console.log(skills);
```

Output:

```text
["Python", "SQL"]
```

### Easy Rule

```text
pop() → Remove from the END
```

---

# 3️⃣ `unshift()` — Add Item at the Beginning

`unshift()` adds a new item to the beginning of an Array.

```javascript
const skills = ["SQL", "Django"];

skills.unshift("Python");

console.log(skills);
```

Output:

```text
["Python", "SQL", "Django"]
```

### Easy Rule

```text
unshift() → Add at the START
```

---

# 4️⃣ `shift()` — Remove Item from the Beginning

`shift()` removes the first item from an Array.

```javascript
const skills = ["Python", "SQL", "Django"];

skills.shift();

console.log(skills);
```

Output:

```text
["SQL", "Django"]
```

### Easy Rule

```text
shift() → Remove from the START
```

---

# 🧠 Four Important Methods

Remember these four together:

```text
push()     → Add to END
pop()      → Remove from END

unshift()  → Add to START
shift()    → Remove from START
```

---

# 5️⃣ `includes()` — Check if an Item Exists

`includes()` checks whether an Array contains a specific value.

```javascript
const skills = ["Python", "SQL", "Django"];

console.log(skills.includes("Python"));
console.log(skills.includes("Java"));
```

Output:

```text
true
false
```

You can also use it with `if`:

```javascript
const skills = ["Python", "SQL", "Django"];

if (skills.includes("Python")) {
    console.log("Python is available.");
}
```

Output:

```text
Python is available.
```

### Easy Rule

```text
includes() → Is this item there?
```

---

# 6️⃣ `indexOf()` — Find the Index

`indexOf()` returns the index number of an item.

```javascript
const skills = ["Python", "SQL", "Django"];

console.log(skills.indexOf("Python"));
console.log(skills.indexOf("Django"));
```

Output:

```text
0
2
```

If the item does not exist:

```javascript
console.log(skills.indexOf("Java"));
```

Output:

```text
-1
```

### Easy Rule

```text
indexOf() → Where is this item?
```

---

# 7️⃣ `slice()` — Copy Part of an Array

`slice()` can be used to get a portion of an Array.

```javascript
const skills = ["Python", "SQL", "Django", "JavaScript"];

const selectedSkills = skills.slice(1, 3);

console.log(selectedSkills);
```

Output:

```text
["SQL", "Django"]
```

The syntax is:

```javascript
array.slice(start, end);
```

Important:

```text
start → included
end   → not included
```

For example:

```javascript
skills.slice(1, 3);
```

means:

```text
Index 1 → SQL       ✅
Index 2 → Django    ✅
Index 3 → JavaScript ❌
```

---

# 💻 Complete Practice

Create:

```text
lesson-09/script.js
```

Add:

```javascript
const skills = ["Python", "SQL"];

console.log("Original:", skills);

skills.push("Django");

console.log("After push:", skills);

skills.unshift("Git");

console.log("After unshift:", skills);

skills.pop();

console.log("After pop:", skills);

skills.shift();

console.log("After shift:", skills);

console.log("Has Python:", skills.includes("Python"));

console.log("Python index:", skills.indexOf("Python"));
```

Run:

```bash
cd ~/javascript-learning/lesson-09
node script.js
```

---

# 🏆 Practice Challenges

## Challenge 1 — `push()`

Create:

```javascript
const languages = ["Python", "JavaScript"];
```

Add `"Java"` using `push()`.

Expected:

```text
["Python", "JavaScript", "Java"]
```

---

## Challenge 2 — `pop()`

Create:

```javascript
const countries = ["Japan", "Bangladesh", "Germany"];
```

Remove the last country using `pop()`.

Expected:

```text
["Japan", "Bangladesh"]
```

---

## Challenge 3 — `unshift()`

Create:

```javascript
const skills = ["SQL", "Django"];
```

Add `"Python"` at the beginning.

Expected:

```text
["Python", "SQL", "Django"]
```

---

## Challenge 4 — `includes()`

Check whether `"Python"` exists:

```javascript
const skills = ["Python", "SQL", "Django"];
```

Expected:

```text
true
```

---

## Challenge 5 — `indexOf()`

Find the index of `"Django"`:

```javascript
const skills = ["Python", "SQL", "Django"];
```

Expected:

```text
2
```

---

## Challenge 6 — `slice()`

Get `"SQL"` and `"Django"` from:

```javascript
const skills = ["Python", "SQL", "Django", "JavaScript"];
```

Expected:

```text
["SQL", "Django"]
```

Hint:

```javascript
slice()
```

---

# 🔥 Real-Life Example

Imagine you are managing your IT skills:

```javascript
const skills = ["Python", "SQL"];

skills.push("Django");

console.log(skills);
```

Output:

```text
["Python", "SQL", "Django"]
```

Now check whether you know Python:

```javascript
if (skills.includes("Python")) {
    console.log("I know Python.");
}
```

Output:

```text
I know Python.
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
│
└── lesson-09/
    ├── script.js
    └── README.md
```

---

# ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-09
```

Run the JavaScript file:

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

* [ ] Understand `push()`
* [ ] Understand `pop()`
* [ ] Understand `unshift()`
* [ ] Understand `shift()`
* [ ] Understand `includes()`
* [ ] Understand `indexOf()`
* [ ] Understand `slice()`
* [ ] Practice Array manipulation
* [ ] Practice Array with `if`
* [ ] Practice Array with loops

---
