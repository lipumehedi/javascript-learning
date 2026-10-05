// ========================================
// JavaScript Lesson 14
// String Methods
// ========================================

// 1. toUpperCase()
const name = "Mehedi";

console.log(name.toUpperCase());


// 2. toLowerCase()
const country = "JAPAN";

console.log(country.toLowerCase());


// 3. trim()
const username = "   Mehedi   ";

console.log(username);
console.log(username.trim());


// 4. includes()
const skill = "Python Backend Developer";

console.log(skill.includes("Python"));
console.log(skill.includes("JavaScript"));


// 5. startsWith()
const job = "Python Backend Developer";

console.log(job.startsWith("Python"));
console.log(job.startsWith("JavaScript"));


// 6. endsWith()
console.log(job.endsWith("Developer"));
console.log(job.endsWith("Engineer"));


// 7. slice()
const language = "JavaScript";

console.log(language.slice(0, 4));
console.log(language.slice(4));
console.log(language.slice(0, 10));


// 8. replace()
const sentence = "I am learning Java.";

console.log(sentence.replace("Java", "JavaScript"));


// 9. split()
const skills = "Python,SQL,Django,JavaScript";

const skillList = skills.split(",");

console.log(skillList);


// 10. String length
const message = "Hello Mehedi";

console.log(message.length);


// ========================================
// Real-life Example 1
// ========================================

const userInput = "   mehedi   ";

const cleanInput = userInput.trim();

console.log("Clean input:", cleanInput);


// ========================================
// Real-life Example 2
// ========================================

const email = "MEHEDI@GMAIL.COM";

console.log(email.toLowerCase());


// ========================================
// Real-life Example 3
// ========================================

const userSkill = "Python";

if (userSkill.toLowerCase() === "python") {
    console.log("Python skill found!");
} else {
    console.log("Python skill not found.");
}


// ========================================
// Real-life Example 4
// ========================================

const developer = "Python Backend Developer";

if (developer.includes("Backend")) {
    console.log("Backend Developer found.");
}


// ========================================
// Real-life Example 5
// ========================================

const fullName = "  Mehedi Lipu  ";

const cleanName = fullName.trim();

console.log(cleanName.toUpperCase());


// ========================================
// Real-life Example 6
// ========================================

const skillsText = "Python,SQL,Django,Docker";

const skillsArray = skillsText.split(",");

console.log(skillsArray);

for (let i = 0; i < skillsArray.length; i++) {
    console.log(skillsArray[i]);
}


/*
🧠 খুব সহজে মনে রাখবেন
Method	         -     কাজ
toUpperCase()	 -     সব CAPITAL
toLowerCase()	 -     সব small
trim()	         -     শুরু/শেষের extra space remove
includes()	     -     কিছু আছে কিনা check
startsWith()	 -     শুরু কী দিয়ে check
endsWith()	     -     শেষ কী দিয়ে check
slice()	         -     String-এর অংশ বের করা
replace()	     -     একটি text পরিবর্তন করা
split()	         -     String → Array
length	         -     কত character আছে
*/