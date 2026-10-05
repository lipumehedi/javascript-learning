# 🟨 JavaScript Lesson 12 — Objects

This lesson introduces JavaScript Objects.

Objects are used to store related information using **key-value pairs**.

Objects are extremely important in JavaScript because real-world data is often represented using objects.

---

## 📚 Topics Covered

* What is an Object?
* Object properties
* Key-value pairs
* Accessing properties
* Dot notation
* Bracket notation
* Changing properties
* Adding properties
* Deleting properties
* Different data types inside Objects
* Arrays inside Objects
* Functions inside Objects
* `this`
* Real-life Object examples

---

## 1️⃣ What is an Object?

An Object stores related information together.

Example:

```javascript
const person = {
    name: "Mehedi",
    age: 30,
    country: "Japan"
};
```

This Object contains information about one person.

Think of it like this:

```text
person
│
├── name     → Mehedi
├── age      → 30
└── country  → Japan
```

---

## 2️⃣ Key-Value Pair

Objects use:

```text
key: value
```

Example:

```javascript
const person = {
    name: "Mehedi",
    age: 30
};
```

Here:

```text
name → key
"Mehedi" → value

age → key
30 → value
```

### Easy Rule

```text
Object = collection of key-value pairs
```

---

## 3️⃣ Creating an Object

Example:

```javascript
const person = {
    name: "Mehedi",
    age: 30,
    country: "Japan",
    skill: "Python"
};
```

Print the whole Object:

```javascript
console.log(person);
```

---

## 4️⃣ Access Object Properties

We can use dot notation:

```javascript
console.log(person.name);
```

Output:

```text
Mehedi
```

More examples:

```javascript
console.log(person.age);
console.log(person.country);
console.log(person.skill);
```

Output:

```text
30
Japan
Python
```

---

## 5️⃣ Bracket Notation

We can also access properties using brackets.

```javascript
console.log(person["name"]);
```

Output:

```text
Mehedi
```

Another example:

```javascript
console.log(person["skill"]);
```

Output:

```text
Python
```

### Two Ways

```javascript
person.name
```

and

```javascript
person["name"]
```

Both access the same value.

---

## 6️⃣ Change a Property

We can change an Object property.

```javascript
const person = {
    name: "Mehedi",
    skill: "Python"
};

person.skill = "Python + JavaScript";

console.log(person.skill);
```

Output:

```text
Python + JavaScript
```

---

## 7️⃣ Add a New Property

We can add a new property to an Object.

```javascript
const person = {
    name: "Mehedi",
    skill: "Python"
};

person.job = "Backend Developer";

console.log(person);
```

Now the Object contains:

```text
name
skill
job
```

---

## 8️⃣ Delete a Property

We can remove a property using `delete`.

```javascript
const person = {
    name: "Mehedi",
    age: 30,
    country: "Japan"
};

delete person.age;

console.log(person);
```

The `age` property is removed.

---

## 9️⃣ Objects Can Store Different Data Types

An Object can contain:

* String
* Number
* Boolean
* Array
* `null`
* Other Objects

Example:

```javascript
const developer = {
    name: "Mehedi",
    age: 30,
    isLearning: true,
    skills: ["Python", "SQL", "Django"],
    experience: null
};
```

Here:

```text
name        → String
age         → Number
isLearning  → Boolean
skills      → Array
experience  → null
```

---

## 🔟 Array Inside an Object

An Object can contain an Array.

```javascript
const developer = {
    name: "Mehedi",
    skills: ["Python", "SQL", "Django"]
};
```

Access the Array:

```javascript
console.log(developer.skills);
```

Output:

```text
["Python", "SQL", "Django"]
```

Access individual items:

```javascript
console.log(developer.skills[0]);
console.log(developer.skills[1]);
console.log(developer.skills[2]);
```

Output:

```text
Python
SQL
Django
```

### Important

```text
developer.skills
        ↓
     Array
        ↓
developer.skills[0]
        ↓
     Python
```

---

## 1️⃣1️⃣ Function Inside an Object

An Object can contain a function.

Example:

```javascript
const user = {
    name: "Mehedi",

    greet: function () {
        return `Hello ${this.name}!`;
    }
};
```

Call the function:

```javascript
console.log(user.greet());
```

Output:

```text
Hello Mehedi!
```

---

## 1️⃣2️⃣ What is `this`?

Inside an Object method, `this` refers to the current Object.

Example:

```javascript
const user = {
    name: "Mehedi",

    greet: function () {
        return `Hello ${this.name}!`;
    }
};
```

Here:

```javascript
this.name
```

means:

```text
user.name
```

So:

```javascript
this.name
```

returns:

```text
Mehedi
```

### Easy Rules

```text
this → current Object
```

---

## 1️⃣3️⃣ Real-Life Developer Object

We can represent a developer using an Object.

```javascript
const developer = {
    name: "Mehedi",
    age: 30,
    country: "Japan",
    skills: ["Python", "SQL", "Django", "JavaScript"],
    job: "Backend Developer"
};
```

Access the data:

```javascript
console.log(developer.name);
console.log(developer.country);
console.log(developer.job);
```

Output:

```text
Mehedi
Japan
Backend Developer
```

---

## 1️⃣4️⃣ Real-Life Job Object

A job listing can also be represented as an Object.

```javascript
const job = {
    title: "Python Backend Developer",
    salary: 5000000,
    location: "Japan",
    remote: false
};
```

Access:

```javascript
console.log(job.title);
console.log(job.salary);
console.log(job.location);
console.log(job.remote);
```

Output:

```text
Python Backend Developer
5000000
Japan
false
```

---

## 🧠 Object vs Array

This is very important.

### Array

Use an Array when you have a list of similar items.

```javascript
const skills = [
    "Python",
    "SQL",
    "Django"
];
```

Think:

```text
skills
 ↓
Python
SQL
Django
```

### Object

Use an Object when you have related information about one thing.

```javascript
const person = {
    name: "Mehedi",
    age: 30,
    country: "Japan"
};
```

Think:

```text
person
 ↓
name
age
country
```

### Easy RuleS

```text
Array  → List of items

Object → Information about one thing
```

---

## 💻 Complete Practice

Create `script.js`:

```javascript
const person = {
    name: "Mehedi",
    age: 30,
    country: "Japan",
    skill: "Python"
};

console.log(person);

console.log(person.name);
console.log(person.age);
console.log(person.country);
console.log(person.skill);


person.skill = "Python + JavaScript";

console.log(person.skill);


person.job = "Backend Developer";

console.log(person);


delete person.age;

console.log(person);


const developer = {
    name: "Mehedi",
    skills: ["Python", "SQL", "Django"],
    isLearning: true
};

console.log(developer.name);
console.log(developer.skills);
console.log(developer.skills[0]);


const user = {
    name: "Mehedi",

    greet: function () {
        return `Hello ${this.name}!`;
    }
};

console.log(user.greet());
```

---

## 🏆 Practice Challenges

## Challenge 1 — Create a Person Object

Create:

```javascript
const person = {
    name: "Mehedi",
    age: 30,
    country: "Japan"
};
```

Print:

```text
Mehedi
30
Japan
```

---

## Challenge 2 — Change a Property

Create:

```javascript
const person = {
    name: "Mehedi",
    skill: "Python"
};
```

Change:

```text
Python
```

to:

```text
Python + JavaScript
```

---

## Challenge 3 — Add a Property

Create:

```javascript
const person = {
    name: "Mehedi"
};
```

Add:

```text
job → Backend Developer
```

---

## Challenge 4 — Array Inside Object

Create:

```javascript
const developer = {
    name: "Mehedi",
    skills: ["Python", "SQL", "Django"]
};
```

Print the first skill.

Expected:

```text
Python
```

---

## Challenge 5 — Job Object

Create:

```javascript
const job = {
    title: "Python Backend Developer",
    salary: 5000000,
    location: "Japan"
};
```

Print all three values.

---

## Challenge 6 — Object Method

Create an Object:

```javascript
const user = {
    name: "Mehedi",

    greet: function () {
        return `Hello ${this.name}!`;
    }
};
```

Call:

```javascript
console.log(user.greet());
```

Expected:

```text
Hello Mehedi!
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
├── lesson-10/
├── lesson-11/
│
└── lesson-12/
    ├── script.js
    └── README.md
```

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-12
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

Remember:

```text
Object
  ↓
key : value
```

Example:

```javascript
const person = {
    name: "Mehedi",
    age: 30
};
```

Access:

```javascript
person.name
person.age
```

Change:

```javascript
person.age = 31;
```

Add:

```javascript
person.job = "Developer";
```

Delete:

```javascript
delete person.age;
```

---

## ✅ Learning Checklist

* [ ] Understand Objects
* [ ] Understand key-value pairs
* [ ] Create an Object
* [ ] Access properties
* [ ] Use dot notation
* [ ] Use bracket notation
* [ ] Change properties
* [ ] Add properties
* [ ] Delete properties
* [ ] Store Arrays inside Objects
* [ ] Store Functions inside Objects
* [ ] Understand `this`
* [ ] Understand Object vs Array

---
