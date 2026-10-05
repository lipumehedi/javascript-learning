// ========================================
// JavaScript Lesson 11
// Function Parameters & Return
// ========================================


// 1. One Parameter

function greetUser(name) {
    return `Hello ${name}!`;
}

console.log(greetUser("Mehedi"));
console.log(greetUser("Lipu"));


// 2. Two Parameters

function add(a, b) {
    return a + b;
}

console.log("Addition:", add(10, 20));


// 3. Multiple Parameters

function introduce(name, age, country) {
    return `${name} is ${age} years old and lives in ${country}.`;
}

console.log(introduce("Mehedi", 30, "Japan"));


// 4. Return a Number

function multiply(a, b) {
    return a * b;
}

const result = multiply(10, 5);

console.log("Multiplication:", result);


// 5. Salary Calculation

function calculateYearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

console.log(
    "Yearly Salary:",
    calculateYearlySalary(300000)
);


// 6. Condition + Return

function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}

console.log(checkAge(30));
console.log(checkAge(15));


// 7. Score Check

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


// 8. Array + Return

function getFirstSkill(skills) {
    return skills[0];
}

const skills = ["Python", "SQL", "Django"];

console.log("First skill:", getFirstSkill(skills));


// 9. Array + Loop + Return

function countSkills(skills) {
    return skills.length;
}

console.log("Total skills:", countSkills(skills));