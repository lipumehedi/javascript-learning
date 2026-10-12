 // ========================================
// JavaScript Lesson 17
// Events
// ========================================


// ========================================
// 1. Click Event
// ========================================

const button = document.querySelector("#button");
const message = document.querySelector("#message");

button.addEventListener("click", function () {
    message.textContent = "Button was clicked!";
});


// ========================================
// 2. Click Event + Change Title
// ========================================

const title = document.querySelector("#title");

button.addEventListener("click", function () {
    title.textContent = "Welcome Mehedi!";
});


// ========================================
// 3. Click Event + Counter
// ========================================

let count = 0;

button.addEventListener("click", function () {
    count++;

    console.log("Button clicked:", count);

    message.textContent =
        `Button clicked ${count} times.`;
});


// ========================================
// 4. Input Event
// ========================================

const nameInput = document.querySelector("#nameInput");
const nameOutput = document.querySelector("#nameOutput");

nameInput.addEventListener("input", function () {
    nameOutput.textContent =
        `Hello ${nameInput.value}!`;
});


// ========================================
// 5. Keyboard Event
// ========================================

const keyboardInput =
    document.querySelector("#keyboardInput");

const keyOutput =
    document.querySelector("#keyOutput");

keyboardInput.addEventListener("keydown", function (event) {

    keyOutput.textContent =
        `You pressed: ${event.key}`;

    console.log("Key:", event.key);
});


// ========================================
// 6. Enter Key
// ========================================

keyboardInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        keyOutput.textContent =
            "You pressed Enter!";
    }

});