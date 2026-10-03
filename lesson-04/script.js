// Operators & Comparisons

// 1. Arithmetic Operators
// + Addition
const a = 10;
const b = 5;
console.log(a + b);

// - Subtraction
console.log(a - b);

// * Multiplication
console.log(a * b);

// / Division
console.log(a / b);

// % Modulus (Remainder)
console.log(a % b);


// 2. + দিয়ে String জোড়া লাগানো
const firstName = "Mehedi";
const lastName = "Hasan";
console.log(firstName + " " + lastName);
// আর Template Literal দিয়ে:
console.log(`${firstName} ${lastName}`);

// 3. Comparison Operators
// Comparison করলে result সাধারণত true অথবা false হয়।

// > Greater Than
console.log(10 > 5); // true

// < Less Than
console.log(10 < 5); // false

// >= Greater Than or Equal To
console.log(10 >= 10); // true

// <= Less Than or Equal To
console.log(5 <= 10); // true

// == vs ===
// ==  value compare করে এবং কিছু ক্ষেত্রে type conversion করে।
console.log(5 == "5"); // true
// কারণ JavaScript এখানে "5" কে number হিসেবে consider করে comparison করছে।

// === Strict Equality - value এবং type উভয়ই তুলনা করে।
console.log(5 === "5"); // false

// 5   → number, "5" → string

// != vs !==
console.log(5 != 3); // true
console.log(5 !== 3); // true

// 6. Variables-এর সাথে Comparison
const age = 30;

console.log(age > 18); // true
console.log(age < 18); // false 
console.log(age === 30); // true
console.log(age !== 30); // false

// 7. Real-life Example
const userAge = 20;
console.log(userAge >= 18); // true



console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);

console.log("a is greater than b:", a > b);
console.log("a is less than b:", a < b);
console.log("a is equal to b:", a === b);
console.log("a is not equal to b:", a !== b);


const monthlyIncome = 300000;
const months =12;
const yearlyIncome = monthlyIncome * months;
console.log("Yearly Income:", yearlyIncome);

console.log(yearlyIncome > 2000000);