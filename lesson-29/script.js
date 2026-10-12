
try {
    console.log("Program started.");

    throw new Error("Something went wrong!");

    console.log("This line will not run.");
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Program continues.");
