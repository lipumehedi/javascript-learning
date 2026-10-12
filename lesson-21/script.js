// ========================================
// JavaScript Phase 2
// Day 21 - ES6+ Basics
// ========================================


// 1. Arrow Functions

function add(a, b) {
    return a + b;
}

console.log("Normal Function:", add(10, 20));


const addNumbers = (a, b) => {
    return a + b;
};

console.log("Arrow Function:", addNumbers(10, 20));


// Short Arrow Function

const multiply = (a, b) => a * b;

console.log("Multiplication:", multiply(10, 5));


// One Parameter

const greet = name => `Hello ${name}!`;

console.log(greet("Mehedi"));


// 2. Template Literals

const name = "Mehedi";
const age = 30;
const skill = "Python";

const message =
    `My name is ${name}. I am ${age} years old. I am learning ${skill}.`;

console.log(message);


const a = 10;
const b = 20;

console.log(`Total: ${a + b}`);


// 3. Array Destructuring

const skills = ["Python", "SQL", "Django"];

const [firstSkill, secondSkill, thirdSkill] = skills;

console.log("First Skill:", firstSkill);
console.log("Second Skill:", secondSkill);
console.log("Third Skill:", thirdSkill);


// 4. Object Destructuring

const developer = {
    name: "Mehedi",
    age: 30,
    country: "Japan",
    skill: "Python"
};

const {
    name: developerName,
    age: developerAge,
    skill: developerSkill
} = developer;

console.log("Developer:", developerName);
console.log("Age:", developerAge);
console.log("Skill:", developerSkill);


// 5. Spread Operator with Arrays

const oldSkills = ["Python", "SQL"];

const newSkills = [
    ...oldSkills,
    "Django",
    "JavaScript"
];

console.log("Updated Skills:", newSkills);


// Combine Two Arrays

const backendSkills = ["Python", "Django"];
const databaseSkills = ["PostgreSQL", "MongoDB"];

const allSkills = [
    ...backendSkills,
    ...databaseSkills
];

console.log("All Skills:", allSkills);


// 6. Spread Operator with Objects

const basicInfo = {
    name: "Mehedi",
    country: "Japan"
};

const developerInfo = {
    ...basicInfo,
    skill: "Python",
    role: "Backend Developer"
};

console.log("Developer Info:", developerInfo);


// Update an Object

const candidate = {
    name: "Mehedi",
    skill: "Python"
};

const updatedCandidate = {
    ...candidate,
    skill: "Python + Django",
    experience: "Backend Development"
};

console.log("Updated Candidate:", updatedCandidate);


// 7. Rest Operator

function calculateTotal(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

console.log("Total 1:", calculateTotal(10, 20));
console.log("Total 2:", calculateTotal(10, 20, 30));
console.log("Total 3:", calculateTotal(10, 20, 30, 40));


// 8. Default Parameters

function greetUser(userName = "Guest") {
    return `Hello ${userName}!`;
}

console.log(greetUser("Mehedi"));
console.log(greetUser());


// 9. Real-Life Developer Example

const user = {
    name: "Mehedi",
    age: 30,
    skills: ["Python", "SQL", "Django"],
    country: "Japan"
};

const {
    name: userName,
    skills: userSkills
} = user;

console.log(`Developer: ${userName}`);
console.log(`Main Skill: ${userSkills[0]}`);


// 10. Job Data Example

const job = {
    title: "Python Backend Developer",
    salary: 5500000,
    location: "Tokyo"
};

const { title, salary, location } = job;

console.log(`Job: ${title}`);
console.log(`Salary: ¥${salary}`);
console.log(`Location: ${location}`);