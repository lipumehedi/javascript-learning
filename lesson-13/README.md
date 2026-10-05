# 🟨 JavaScript Lesson 13 — Arrays + Objects Together

This lesson teaches how to use JavaScript Arrays and Objects together.

This is one of the most important JavaScript concepts because real-world data is often stored as an **Array of Objects**.

You will see this structure frequently when working with:

* APIs
* JSON
* Databases
* Django
* Backend applications
* Frontend applications
* Job listing data
* User data

---

## 📚 Topics Covered

* Array of Objects
* Object inside an Array
* Accessing Objects from an Array
* Accessing Object properties
* `for` loop with Objects
* Conditions with Objects
* Multiple Objects
* Real-world data
* Job listing data

---

## 1️⃣ Array of Objects

An Array can contain multiple Objects.

Example:

```javascript
const developers = [
    {
        name: "Mehedi",
        age: 30,
        skill: "Python"
    },
    {
        name: "Rahim",
        age: 28,
        skill: "JavaScript"
    },
    {
        name: "Karim",
        age: 32,
        skill: "Java"
    }
];
```

Think about it like this:

```text
developers
│
├── Object 1
│   ├── name
│   ├── age
│   └── skill
│
├── Object 2
│   ├── name
│   ├── age
│   └── skill
│
└── Object 3
    ├── name
    ├── age
    └── skill
```

---

## 2️⃣ Access the First Object

Remember:

```text
Array index starts from 0
```

So:

```javascript
console.log(developers[0]);
```

gets the first Object.

Output:

```text
{
    name: "Mehedi",
    age: 30,
    skill: "Python"
}
```

---

## 3️⃣ Access Object Properties

We can access a property after accessing the Array item.

```javascript
console.log(developers[0].name);
```

Output:

```text
Mehedi
```

Age:

```javascript
console.log(developers[0].age);
```

Output:

```text
30
```

Skill:

```javascript
console.log(developers[0].skill);
```

Output:

```text
Python
```

---

## 🧠 Understand This Structure

This:

```javascript
developers[0]
```

means:

```text
Get the first Object
```

Then:

```javascript
developers[0].name
```

means:

```text
Get the first Object
        ↓
Get its name
```

So:

```text
developers[0].name
     ↓       ↓
   Array   Object
   item    property
```

---

## 4️⃣ Access the Second Object

The second Object has index `1`.

```javascript
console.log(developers[1].name);
```

Output:

```text
Rahim
```

And:

```javascript
console.log(developers[1].skill);
```

Output:

```text
JavaScript
```

---

## 5️⃣ Loop Through an Array of Objects

We can use a `for` loop.

```javascript
for (let i = 0; i < developers.length; i++) {
    console.log(developers[i].name);
}
```

Output:

```text
Mehedi
Rahim
Karim
```

### How it works

First:

```text
i = 0
developers[0].name
→ Mehedi
```

Then:

```text
i = 1
developers[1].name
→ Rahim
```

Then:

```text
i = 2
developers[2].name
→ Karim
```

---

## 6️⃣ Print Multiple Properties

We can print multiple properties together.

```javascript
for (let i = 0; i < developers.length; i++) {
    console.log(
        `${developers[i].name} knows ${developers[i].skill}`
    );
}
```

Output:

```text
Mehedi knows Python
Rahim knows JavaScript
Karim knows Java
```

---

## 7️⃣ Array of Objects + `if`

We can also use conditions.

```javascript
for (let i = 0; i < developers.length; i++) {
    if (developers[i].age >= 30) {
        console.log(
            `${developers[i].name} is 30 or older.`
        );
    }
}
```

Output:

```text
Mehedi is 30 or older.
Karim is 30 or older.
```

---

## 8️⃣ Real-Life Example — Job Listings

Imagine a website showing job listings.

We can represent each job as an Object.

```javascript
const jobs = [
    {
        title: "Python Backend Developer",
        salary: 5000000,
        location: "Tokyo"
    },
    {
        title: "JavaScript Developer",
        salary: 4500000,
        location: "Yokohama"
    },
    {
        title: "Django Developer",
        salary: 5500000,
        location: "Tokyo"
    }
];
```

Here:

```text
jobs
│
├── Job 1
│   ├── title
│   ├── salary
│   └── location
│
├── Job 2
│   ├── title
│   ├── salary
│   └── location
│
└── Job 3
    ├── title
    ├── salary
    └── location
```

---

## 9️⃣ Print Job Information

Use a loop:

```javascript
for (let i = 0; i < jobs.length; i++) {
    console.log(
        `${jobs[i].title} - ¥${jobs[i].salary} - ${jobs[i].location}`
    );
}
```

Output:

```text
Python Backend Developer - ¥5000000 - Tokyo
JavaScript Developer - ¥4500000 - Yokohama
Django Developer - ¥5500000 - Tokyo
```

---

## 🔟 Salary Condition

We can find jobs with salary of ¥5,000,000 or more.

```javascript
for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].salary >= 5000000) {
        console.log(
            `${jobs[i].title} has a salary of 5M or more.`
        );
    }
}
```

Output:

```text
Python Backend Developer has a salary of 5M or more.
Django Developer has a salary of 5M or more.
```

---

## 🧠 Array + Object Memory Trick

Remember:

```text
Array
  ↓
[ Object, Object, Object ]
```

Example:

```javascript
const users = [
    {
        name: "Mehedi"
    },
    {
        name: "Rahim"
    }
];
```

To access:

```javascript
users[0].name
```

Think:

```text
users
 ↓
[0]
 ↓
Object
 ↓
.name
 ↓
Mehedi
```

---

## 1️⃣1️⃣ Object vs Array of Objects

### One Object

```javascript
const user = {
    name: "Mehedi",
    age: 30
};
```

This represents one user.

### Array of Objects

```javascript
const users = [
    {
        name: "Mehedi",
        age: 30
    },
    {
        name: "Rahim",
        age: 28
    }
];
```

This represents multiple users.

---

## 1️⃣2️⃣ Real-World API Data

APIs commonly return data in a structure similar to this:

```javascript
const users = [
    {
        id: 1,
        name: "Mehedi",
        email: "mehedi@example.com"
    },
    {
        id: 2,
        name: "Rahim",
        email: "rahim@example.com"
    }
];
```

We can access:

```javascript
console.log(users[0].name);
```

Output:

```text
Mehedi
```

And:

```javascript
console.log(users[1].email);
```

Output:

```text
rahim@example.com
```

This type of structure is very common when working with APIs and JSON.

---

## 💻 Complete Practice

Create `script.js`:

```javascript
const developers = [
    {
        name: "Mehedi",
        age: 30,
        skill: "Python"
    },
    {
        name: "Rahim",
        age: 28,
        skill: "JavaScript"
    },
    {
        name: "Karim",
        age: 32,
        skill: "Java"
    }
];


// Access first developer
console.log(developers[0]);


// Access properties
console.log(developers[0].name);
console.log(developers[0].age);
console.log(developers[0].skill);


// Loop through developers
for (let i = 0; i < developers.length; i++) {
    console.log(
        `${developers[i].name} knows ${developers[i].skill}`
    );
}


// Age condition
for (let i = 0; i < developers.length; i++) {
    if (developers[i].age >= 30) {
        console.log(
            `${developers[i].name} is 30 or older.`
        );
    }
}


// Job data
const jobs = [
    {
        title: "Python Backend Developer",
        salary: 5000000,
        location: "Tokyo"
    },
    {
        title: "JavaScript Developer",
        salary: 4500000,
        location: "Yokohama"
    },
    {
        title: "Django Developer",
        salary: 5500000,
        location: "Tokyo"
    }
];


// Print jobs
for (let i = 0; i < jobs.length; i++) {
    console.log(
        `${jobs[i].title} - ¥${jobs[i].salary} - ${jobs[i].location}`
    );
}


// Salary condition
for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].salary >= 5000000) {
        console.log(
            `${jobs[i].title} has a salary of 5M or more.`
        );
    }
}
```

---

## 🏆 Practice Challenges

## Challenge 1 — Students

Create an Array of Objects:

```javascript
const students = [
    {
        name: "Mehedi",
        age: 30,
        score: 85
    },
    {
        name: "Rahim",
        age: 25,
        score: 75
    },
    {
        name: "Karim",
        age: 28,
        score: 92
    }
];
```

Print all student names using a `for` loop.

Expected:

```text
Mehedi
Rahim
Karim
```

---

## Challenge 2 — Score

Using the same `students` Array, print only students with score `80` or more.

Expected:

```text
Mehedi
Karim
```

Hint:

```javascript
if (students[i].score >= 80)
```

---

## Challenge 3 — Skills

Create:

```javascript
const developers = [
    {
        name: "Mehedi",
        skills: ["Python", "SQL"]
    },
    {
        name: "Rahim",
        skills: ["JavaScript", "React"]
    }
];
```

Print the first skill of each developer.

Expected:

```text
Python
JavaScript
```

Hint:

```javascript
developers[i].skills[0]
```

---

## Challenge 4 — Jobs

Create three job Objects:

```text
title
salary
location
```

Put them inside an Array.

Then print jobs where salary is `5000000` or more.

---

## Challenge 5 — Japan Jobs

Create:

```javascript
const jobs = [
    {
        title: "Python Developer",
        salary: 5500000,
        location: "Tokyo"
    },
    {
        title: "Backend Engineer",
        salary: 4800000,
        location: "Yokohama"
    },
    {
        title: "Django Developer",
        salary: 6000000,
        location: "Tokyo"
    }
];
```

Print only jobs located in Tokyo.

Hint:

```javascript
if (jobs[i].location === "Tokyo")
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
├── lesson-12/
│
└── lesson-13/
    ├── script.js
    └── README.md
```

---

## ▶️ How to Run

Open Git Bash:

```bash
cd ~/javascript-learning/lesson-13
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

The most important pattern from this lesson:

```javascript
developers[i].name
```

Think:

```text
developers
    ↓
   [i]
    ↓
 Object
    ↓
 .name
    ↓
 value
```

For nested Arrays:

```javascript
developers[i].skills[0]
```

Think:

```text
developers
    ↓
   [i]
    ↓
 Object
    ↓
 skills
    ↓
  [0]
    ↓
 first skill
```

---

## ✅ Learning Checklist

* [ ] Understand Array of Objects
* [ ] Create multiple Objects inside an Array
* [ ] Access an Object using Array index
* [ ] Access Object properties
* [ ] Use `for` loop with Objects
* [ ] Use `if` with Object properties
* [ ] Use Arrays inside Objects
* [ ] Understand nested data
* [ ] Work with job listing data
* [ ] Understand basic API-style data

---
