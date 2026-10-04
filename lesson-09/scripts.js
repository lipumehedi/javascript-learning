// Array Methods

/*
push() → শেষে নতুন item যোগ
pop() → শেষের item remove
unshift() → শুরুতে item যোগ
shift() → শুরুর item remove
slice() → Array-এর একটা অংশ copy
includes() → item আছে কি না check
indexOf() → item-এর index খুঁজে বের করা
length → কয়টা item আছে
for loop দিয়ে Array process করা
*/

// 1. Push() - শেষে item যোগ

const skills = ["python", "SQL"];

skills.push("Django");

console.log(skills)

// 2. pop() - শেষের item remove

const skill = ["Python", "SQL", "Django"];

skill.pop();

console.log(skill);

// 3. unshift() - শুরুতে item যোগ

skills.unshift("Databse");
console.log(skills);

// 4. shift() - শুরু থেকে item remove
const skills2 = ["Python", "SQL", "JS"];
skills2.shift();
console.log(skills2);

// 5. includes() - item আছে কিনা

const name = ["Mehedi", "Lipu", "Hasan"];

console.log(name.includes("Pythom"));
console.log(name.includes("Lipu"));

// 6. indexof() - index খুঁজে বের করা

const Sub = ["English", "Math", "Bangla"];

console.log(Sub.indexOf("English"))
console.log(Sub.indexOf("Bangla"))
// যদি item না থাকে:
console.log(Sub.indexOf("Lipu")) // output: -1

// 7. slice() - Array-এর অংশ copy করা

const skils = ["Python", "SQL", "Django", "JavaScript", "C"];
console.log(skils.slice(2,4)); // end index included হয় না।

// 8. lenth - কয়টা item আছে
console.log(skils.length)