// ========================================
// JavaScript Lesson 18
// Forms + Validation
// ========================================

// 1. Select HTML elements

const form = document.querySelector("#registrationForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const message = document.querySelector("#message");


// 2. Handle form submission

form.addEventListener("submit", function (event) {

    // Prevent page reload
    event.preventDefault();

    // Get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // 3. Validate name
    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }

    // 4. Validate email
    if (email === "" || !emailInput.validity.valid) {
        message.textContent = "Please enter a valid email.";
        return;
    }

    // 5. Validate password
    if (password.length < 8) {
        message.textContent =
            "Password must be at least 8 characters.";
        return;
    }

    // 6. Success message
    message.textContent =
        `Registration successful! Welcome, ${name}.`;

    // 7. Clear the form
    form.reset();

});