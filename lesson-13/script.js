// ========================================
// JavaScript Lesson 13
// Arrays + Objects Together
// ========================================


// 1. Array of Objects

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

console.log(developers);


// 2. Access First Object

console.log(developers[0]);


// 3. Access Property of First Object

console.log(developers[0].name);
console.log(developers[0].age);
console.log(developers[0].skill);


// 4. Access Second Object

console.log(developers[1].name);
console.log(developers[1].skill);


// 5. Loop Through Array of Objects

for (let i = 0; i < developers.length; i++) {
    console.log(developers[i].name);
}


// 6. Print Name and Skill

for (let i = 0; i < developers.length; i++) {
    console.log(
        `${developers[i].name} knows ${developers[i].skill}`
    );
}


// 7. Check Condition

for (let i = 0; i < developers.length; i++) {
    if (developers[i].age >= 30) {
        console.log(
            `${developers[i].name} is 30 or older.`
        );
    }
}


// 8. Job Listing Data

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


// 9. Print Job Information

for (let i = 0; i < jobs.length; i++) {
    console.log(
        `${jobs[i].title} - ¥${jobs[i].salary} - ${jobs[i].location}`
    );
}


// 10. Salary Condition

for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].salary >= 5000000) {
        console.log(
            `${jobs[i].title} has a salary of 5M or more.`
        );
    }
}