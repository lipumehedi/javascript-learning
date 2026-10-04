// ========================================
// JavaScript Lesson 10 - Functions
// ========================================

// 1. Basic Function
function greet() {
    console.log("Hello Mehedi!");
}

greet();


// 2. Function with a Parameter
function greetUser(name) {
    console.log(`Hello ${name}!`);
}

greetUser("Mehedi");
greetUser("Lipu");


// 3. Function with Two Parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(100, 200);


// 4. Function with Return
function multiply(a, b) {
    return a * b;
}

const result = multiply(10, 5);

console.log("Multiplication:", result);


// 5. Salary Example
function calculateYearlySalary(monthlySalary) {
    return monthlySalary * 12;
}

const yearlySalary = calculateYearlySalary(300000);

console.log("Yearly Salary:", yearlySalary);


// 6. Check Adult
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Not Adult";
    }
}

console.log(checkAge(30));
console.log(checkAge(15));


// 7. Function with Array
function showSkills(skills) {
    for (let i = 0; i < skills.length; i++) {
        console.log(skills[i]);
    }
}

const skills = ["Python", "SQL", "Django", "JavaScript"];

showSkills(skills);