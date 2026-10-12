// ========================================
// JavaScript Phase 2
// Day 22 - Advanced Array Methods
// ========================================

// 1. forEach() - প্রতিটি item নিয়ে কাজ করা

const skills = ["Python", "SQL", "Django", "JavaScript"];

skills.forEach((skill) => {
    console.log(skill);
});

skills.forEach((skill, index) => {
    console.log(`${index}: ${skill}`);
});

// 2. map() - নতুন array তৈরি করা

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
    return number * 2;
});

console.log("Doubled:", doubledNumbers);

const squaredNumbers = numbers.map(number => number * number);

console.log("Squared:", squaredNumbers);

// String-এর প্রতিটি item পরিবর্তন করা
const names = ["mehedi", "rahim", "karim"];

const upperNames = names.map(name => name.toUpperCase());

console.log("Uppercase Names:", upperNames);

// 3. filter() - শর্ত মেলে এমন item বাছাই করা

const ages = [15, 20, 25, 17, 30];

const adults = ages.filter(age => age >= 18);

console.log("Adults:", adults);

const allSkills = [
    "Python",
    "JavaScript",
    "Django",
    "Java",
    "SQL"
];

const backendSkills = allSkills.filter(skill => {
    return skill === "Python" ||
           skill === "Django" ||
           skill === "SQL";
});

console.log("Backend Skills:", backendSkills);

// 4. find() - প্রথম matching item খোঁজা

const developers = [
    { name: "Mehedi", skill: "Python" },
    { name: "Rahim", skill: "JavaScript" },
    { name: "Karim", skill: "Java" }
];

const pythonDeveloper = developers.find(
    developer => developer.skill === "Python"
);

console.log("Python Developer:", pythonDeveloper);

// 5. some() - অন্তত একটি item শর্ত পূরণ করে কি না

const salaries = [3000000, 4500000, 5500000, 4000000];

const hasFiveMillionSalary = salaries.some(
    salary => salary >= 5000000
);

console.log("Has 5M+ Salary:", hasFiveMillionSalary);

// 6. every() - সব item শর্ত পূরণ করে কি না

const scores = [80, 85, 90, 95];

const everyonePassed = scores.every(
    score => score >= 60
);

console.log("Everyone Passed:", everyonePassed);

// 7. Real-life example: Job data

const jobs = [
    {
        title: "Python Backend Developer",
        salary: 5500000,
        location: "Tokyo"
    },
    {
        title: "JavaScript Developer",
        salary: 4500000,
        location: "Yokohama"
    },
    {
        title: "Django Developer",
        salary: 6000000,
        location: "Tokyo"
    },
    {
        title: "Python Engineer",
        salary: 4800000,
        location: "Yokohama"
    }
];

// সব job দেখানো
jobs.forEach(job => {
    console.log(
        `${job.title} - ¥${job.salary} - ${job.location}`
    );
});

// 5 million বা তার বেশি salary-র job
const highSalaryJobs = jobs.filter(
    job => job.salary >= 5000000
);

console.log("5M+ Jobs:", highSalaryJobs);

// Django Developer-এর job খোঁজা
const djangoJob = jobs.find(
    job => job.title === "Django Developer"
);

console.log("Django Job:", djangoJob);

// সব job-এর title নিয়ে নতুন array
const jobTitles = jobs.map(job => job.title);

console.log("Job Titles:", jobTitles);

// Tokyo-তে কোনো job আছে কি না
const hasTokyoJob = jobs.some(
    job => job.location === "Tokyo"
);

console.log("Tokyo Job Available:", hasTokyoJob);

// সব job-এর salary 4 million বা তার বেশি কি না
const allJobsAboveFourMillion = jobs.every(
    job => job.salary >= 4000000
);

console.log("All Jobs Are 4M+:", allJobsAboveFourMillion);