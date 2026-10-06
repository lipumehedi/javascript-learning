// ========================================
// JavaScript Lesson 15
// DOM Introduction
// ========================================


// ========================================
// 1. document
// ========================================

console.log(document);


// ========================================
// 2. getElementById()
// ========================================

const title = document.getElementById("title");

console.log(title);


// ========================================
// 3. Change textContent
// ========================================
 
title.textContent = "Hello Mehedi!";


// ========================================
// 4. Select paragraph
// ========================================

const message = document.getElementById("message");

console.log(message);


// Change paragraph

message.textContent = "I am learning JavaScript DOM.";


// ========================================
// 5. querySelector()
// ========================================

const button = document.querySelector("#button");

console.log(button);


// ========================================
// 6. Change button text
// ========================================

button.textContent = "Start Learning";


// ========================================
// 7. innerHTML
// ========================================

message.innerHTML = "<strong>JavaScript DOM is interesting!</strong>";


// ========================================
// 8. Select element using tag
// ========================================

const heading = document.querySelector("h1");

console.log(heading);


// ========================================
// 9. Select first paragraph
// ========================================

const paragraph = document.querySelector("p");

console.log(paragraph);


// ========================================
// 10. Real-world Developer Example
// ========================================

const developerName = document.querySelector("#title");

developerName.textContent = "Mehedi - Python Backend Developer";


// ========================================
// 11. Change HTML content
// ========================================

const developerMessage = document.querySelector("#message");

developerMessage.innerHTML =
    "Learning <strong>Python</strong> + <strong>JavaScript</strong>";


// ========================================
// 12. Button text
// ========================================

const startButton = document.querySelector("#button");

startButton.textContent = "Learning Started";