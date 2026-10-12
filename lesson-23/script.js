// ========================================
// JavaScript Phase 2
// Day 23 - Advanced Objects + Destructuring
// ========================================

// 1. Basic Object Destructuring

const developer = {
    name: "Mehedi",
    age: 30,
    country: "Japan",
    skill: "Python"
};

const { name, age, country, skill } = developer;

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);
console.log("Skill:", skill);


// 2. Rename Object Properties

const candidate = {
    name: "Mehedi",
    skill: "Python",
    experience: "Learning Backend Development"
};

const {
    name: candidateName,
    skill: mainSkill
} = candidate;

console.log("Candidate Name:", candidateName);
console.log("Main Skill:", mainSkill);


// 3. Default Values

const user = {
    name: "Mehedi",
    country: "Japan"
};

const {
    name: userName,
    country: userCountry,
    language = "Japanese"
} = user;

console.log("User:", userName);
console.log("Country:", userCountry);
console.log("Language:", language);


// 4. Nested Object Destructuring

const employee = {
    name: "Mehedi",
    job: {
        title: "Backend Developer",
        salary: 5500000,
        location: "Tokyo"
    }
};

const {
    job: {
        title,
        salary,
        location
    }
} = employee;

console.log("Job Title:", title);
console.log("Salary:", salary);
console.log("Location:", location);


// 5. Array Destructuring

const skills = [
    "Python",
    "Django",
    "PostgreSQL",
    "JavaScript"
];

const [firstSkill, secondSkill, ...otherSkills] = skills;

console.log("First Skill:", firstSkill);
console.log("Second Skill:", secondSkill);
console.log("Other Skills:", otherSkills);


// 6. Rest Operator with Objects

const developerInfo = {
    name: "Mehedi",
    country: "Japan",
    skill: "Python",
    age: 30
};

const {
    name: infoName,
    ...remainingInfo
} = developerInfo;

console.log("Name:", infoName);
console.log("Remaining Information:", remainingInfo);


// 7. Spread Operator - Copy an Object

const originalDeveloper = {
    name: "Mehedi",
    skill: "Python"
};

const copiedDeveloper = {
    ...originalDeveloper
};

console.log("Original:", originalDeveloper);
console.log("Copied:", copiedDeveloper);


// 8. Spread Operator - Update an Object

const updatedDeveloper = {
    ...originalDeveloper,
    skill: "Python + Django",
    country: "Japan"
};

console.log("Updated Developer:", updatedDeveloper);


// 9. Merge Two Objects

const personalInfo = {
    name: "Mehedi",
    country: "Japan"
};

const technicalInfo = {
    skill: "Python",
    database: "PostgreSQL"
};

const fullProfile = {
    ...personalInfo,
    ...technicalInfo
};

console.log("Full Profile:", fullProfile);


// 10. Optional Chaining

const applicant = {
    name: "Mehedi",
    contact: {
        email: "mehedi@example.com"
    }
};

console.log("Email:", applicant.contact?.email);
console.log("Phone:", applicant.contact?.phone);
console.log("Address:", applicant.address?.city);


// 11. Real-Life API Data Example

const apiResponse = {
    success: true,
    data: {
        developer: {
            name: "Mehedi",
            skills: ["Python", "Django", "SQL"]
        }
    }
};

const {
    success,
    data: {
        developer: {
            name: apiDeveloperName,
            skills: apiSkills
        }
    }
} = apiResponse;

console.log("API Success:", success);
console.log("Developer:", apiDeveloperName);
console.log("Skills:", apiSkills);


// 12. Job Listing Example

const job = {
    title: "Python Backend Developer",
    salary: 5500000,
    location: "Tokyo",
    requirements: {
        language: "Python",
        database: "PostgreSQL"
    }
};

const {
    title: jobTitle,
    salary: jobSalary,
    location: jobLocation,
    requirements: {
        language: requiredLanguage,
        database: requiredDatabase
    }
} = job;

console.log(`Job: ${jobTitle}`);
console.log(`Salary: ¥${jobSalary}`);
console.log(`Location: ${jobLocation}`);
console.log(`Language: ${requiredLanguage}`);
console.log(`Database: ${requiredDatabase}`); 