//Lesson 02 — Variables: let & const

/*
1. Variable কী?
Variable হলো একটা box, যেখানে আমরা data রেখে পরে ব্যবহার করতে পারি।
python
name = "Mehedi"
age = 30
JavaScript

let name = "Mehedi";
let age = 30;

name, age - variable
"Mehedi", 30 - value
*/

// 2. let

// যে value পরে change হতে পারে, সেখানে let ব্যবহার করি।

let age = 30;
console.log(age);
age = 31;
console.log(age);

//মানে প্রথমে age = 30 ছিল, পরে 31 করেছি।

let name = "Mehedi";
console.log(name);
name = "Lipu";
console.log(name);


// 3. const

// const ব্যবহার করি যখন variable-এর value পরে change করতে চাই না।

const country = "japan";
console.log(country);

// 4. let vs const
// let value change kora jai. const value change kora jai na


// 5. Variable-এর সাথে different data রাখা

// String

let name1= "Mehedi";
console.log(name1);

// Number

let age1 = 30;
console.log(age1);

//Boolean

let islearing = true;
console.log(islearing);

// 6. Variable একসাথে print করা

let name2 = "Mehedi";
let age2 = 30;

console.log("My name is", name2);
console.log("My age is", age2);

// 7. সবচেয়ে useful — Template Literal

// JavaScript-এ variable-এর সাথে text সুন্দরভাবে লিখতে আমরা backtick ` ব্যবহার করতে পারি।

let name3 = "Mehedi";
let age3 = 30;

console.log(`My name is ${name3}`);
console.log(`I am ${age3} years old`);

// ${name} মানে variable name-এর value এখানে বসাও।

// 8. Real-life example

const name4 = "Mehedi";
let age4 = 30;
const country4 = "Japan";
let learning = "JavaScript";

console.log(`Name: ${name4}`);
console.log(`Age: ${age4}`);
console.log(`Country: ${country4}`);
console.log(`Learning: ${learning}`);


console.log("==========================================")
const nam = "Mehedi";
let ag = 30;
const countr = "Japan";
let skill = "Python";

console.log(`My name is ${nam}`);
console.log(`I am ${ag} years old`);
console.log(`I live in ${countr}`);
console.log(`My main skill is ${skill}`);

skill = "Python + JavaScript";

console.log(`Now I am learning ${skill}`);

console.log("==========================================")