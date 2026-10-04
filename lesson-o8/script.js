// 1. JavaScript Arrays

// Lesson 08: JavaScript Arrays

const skills = ["Python", "SQL", "Django", "JavaScript"];

console.log(skills);
console.log(skills[0]);
console.log(skills[1]);
console.log(skills[2]);
console.log(skills[3]);
// JavaScript-এ index 0 থেকে শুরু হয়।

// 2.Array change করা

const skills1 = ["Python", "SQL", "Django"];
skills1[2] = "JavaScript";
console.log(skills1);
//const হলেও Array-এর ভিতরের value change করা যায়।

// 3. Array length

const skills2 = ["Python", "SQL", "Django", "JavaScript"];
console.log(skills2.length);

// 4. for loop + Array
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
}

// 5. while loop + Array
let i = 0;
while (i < skills.length) {
    console.log(skills[i]);
    i++;
}

// 6. Beginner Input Example

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your skill:", (skill) => {
    const skills = [skill]
    console.log("Your skill:", skills[0])
    rl.close()
    
})
