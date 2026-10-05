// ========================================
// JavaScript Lesson 12
// Objects
// ========================================


// 1. Create an Object

const person = {
    name: "Mehedi",
    age: 30,
    country: "Japan",
    skill: "Python"
};

console.log(person);


// 2. Access Object Properties

console.log(person.name);
console.log(person.age);
console.log(person.country);
console.log(person.skill);


// 3. Bracket Notation

console.log(person["name"]);
console.log(person["skill"]);


// 4. Change a Property

person.skill = "Python + JavaScript";

console.log(person.skill);


// 5. Add a New Property

person.job = "Backend Developer";

console.log(person);


// 6. Delete a Property

delete person.age;

console.log(person);


// 7. Object with Different Data Types

const developer = {
    name: "Mehedi",
    age: 30,
    isLearning: true,
    skills: ["Python", "SQL", "Django"],
    experience: null
};

console.log(developer);


// 8. Access Array inside Object

console.log(developer.skills);
console.log(developer.skills[0]);
console.log(developer.skills[1]);


// 9. Object with Function

const user = {
    name: "Mehedi",

    greet: function () {
        return `Hello ${this.name}!`;
    }
};

console.log(user.greet());


// 10. Real-Life Job Object

const job = {
    title: "Python Backend Developer",
    salary: 5000000,
    location: "Japan",
    remote: false
};

console.log("Job:", job.title);
console.log("Salary:", job.salary);
console.log("Location:", job.location);
console.log("Remote:", job.remote);