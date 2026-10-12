// ========================================
// JavaScript Phase 2
// Day 24 - JavaScript Modules
// ========================================

// 1. Import Named Exports
import {
    add,
    subtract,
    multiply,
    divide,
    taxRate
} from "./math.js";

// 2. Import Default Export
import developer from "./developer.js";

// 3. Import Named Exports from Developer Module
import {
    skills,
    introduce
} from "./developer.js";

// 4. Use Math Functions
console.log("Addition:", add(10, 20));
console.log("Subtraction:", subtract(20, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(20, 4));
console.log("Tax Rate:", taxRate);

// 5. Use Developer Object
console.log("Developer:", developer.name);
console.log("Country:", developer.country);
console.log("Main Skill:", developer.mainSkill);
console.log("Target Role:", developer.targetRole);

// 6. Use Skills Array
console.log("My Skills:");

skills.forEach((skill) => {
    console.log(skill);
});

// 7. Use Imported Function
console.log(introduce("Mehedi"));

// 8. Real-Life Calculation
const monthlySalary = 300000;
const yearlySalary = multiply(monthlySalary, 12);

console.log("Monthly Salary: ¥" + monthlySalary);
console.log("Yearly Salary: ¥" + yearlySalary);