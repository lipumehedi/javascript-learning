// ========================================
// JavaScript Phase 2
// Day 26 - Async/Await
// ========================================

// 1. Basic Async Function

async function sayHello() {
    return "Hello Mehedi!";
}

sayHello().then((message) => {
    console.log(message);
});


// 2. Using Await with a Promise

function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("JavaScript learning completed!");
        }, 2000);
    });
}

async function showMessage() {
    console.log("Please wait...");

    const message = await getMessage();

    console.log(message);
}

showMessage();


// 3. Async Function with a Return Value

async function addNumbers(a, b) {
    return a + b;
}

async function calculate() {
    const result = await addNumbers(10, 20);

    console.log("Addition:", result);
}

calculate();


// 4. Error Handling with Try/Catch

function checkScore(score) {
    return new Promise((resolve, reject) => {
        if (score >= 60) {
            resolve("You passed!");
        } else {
            reject(new Error("You did not pass."));
        }
    });
}

async function showScore() {
    try {
        const result = await checkScore(85);
        console.log("Score Result:", result);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

showScore();


// 5. Handling a Failed Promise

function loadData() {
    return new Promise((resolve, reject) => {
        reject(new Error("Failed to load data."));
    });
}

async function displayData() {
    try {
        const data = await loadData();
        console.log(data);
    } catch (error) {
        console.log("Loading Error:", error.message);
    }
}

displayData();


// 6. Simulate Loading Developer Data

function getDeveloper() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Mehedi",
                country: "Japan",
                skill: "Python",
                targetRole: "Backend Developer"
            });
        }, 1500);
    });
}

async function showDeveloper() {
    try {
        console.log("Loading developer data...");

        const developer = await getDeveloper();

        console.log("Name:", developer.name);
        console.log("Country:", developer.country);
        console.log("Skill:", developer.skill);
        console.log("Target Role:", developer.targetRole);
    } catch (error) {
        console.log("Error:", error.message);
    }
}

showDeveloper();


// 7. Two Asynchronous Tasks in Sequence

function getFirstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First task completed.");
        }, 1000);
    });
}

function getSecondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Second task completed.");
        }, 1000);
    });
}

async function runTasks() {
    console.log("Starting tasks...");

    const first = await getFirstTask();
    console.log(first);

    const second = await getSecondTask();
    console.log(second);

    console.log("All tasks completed.");
}

runTasks();


// 8. Real-Life Example: Job Information

function getJob() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                title: "Python Backend Developer",
                salary: 5500000,
                location: "Tokyo"
            });
        }, 1000);
    });
}

async function showJob() {
    try {
        const job = await getJob();

        console.log("Job Title:", job.title);
        console.log("Yearly Salary: ¥" + job.salary);
        console.log("Location:", job.location);
    } catch (error) {
        console.log("Job Error:", error.message);
    }
}

showJob();