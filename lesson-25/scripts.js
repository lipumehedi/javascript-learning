// ========================================
// JavaScript Phase 2
// Day 25 - JavaScript Promises
// ========================================

// 1. Create a Promise

const myPromise = new Promise((resolve, reject) => {
    resolve("Promise completed successfully!");
});

myPromise.then((result) => {
    console.log(result);
});


// 2. Promise with setTimeout()

const learningPromise = new Promise((resolve, reject) => {
    console.log("Learning is in progress...");

    setTimeout(() => {
        resolve("JavaScript lesson completed!");
    }, 2000);
});

learningPromise.then((result) => {
    console.log(result);
});


// 3. Handle a Rejected Promise

const errorPromise = new Promise((resolve, reject) => {
    reject(new Error("Something went wrong!"));
});

errorPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });


// 4. Promise with a Condition

function checkScore(score) {
    return new Promise((resolve, reject) => {
        if (score >= 60) {
            resolve("Congratulations! You passed.");
        } else {
            reject(new Error("You did not pass."));
        }
    });
}

checkScore(85)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error.message);
    });


// 5. Real-Life Example: Load Developer Data

function getDeveloperData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const developer = {
                name: "Mehedi",
                country: "Japan",
                skill: "Python",
                targetRole: "Backend Developer"
            };

            resolve(developer);
        }, 1500);
    });
}

getDeveloperData()
    .then((developer) => {
        console.log("Developer Name:", developer.name);
        console.log("Country:", developer.country);
        console.log("Skill:", developer.skill);
        console.log("Target Role:", developer.targetRole);
    })
    .catch((error) => {
        console.log("Failed:", error.message);
    });


// 6. finally() - Runs When the Promise Settles

function completeTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed!");
        }, 1000);
    });
}

completeTask()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    })
    .finally(() => {
        console.log("Task process finished.");
    });


// 7. Promise Chaining

Promise.resolve(10)
    .then((number) => {
        console.log("Starting number:", number);
        return number * 2;
    })
    .then((number) => {
        console.log("After multiplication:", number);
        return number + 5;
    })
    .then((result) => {
        console.log("Final result:", result);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });