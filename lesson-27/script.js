// ========================================
// JavaScript Phase 2
// Day 27 - Fetch API
// ========================================

const loadButton = document.querySelector("#loadButton");
const statusMessage = document.querySelector("#status");
const userList = document.querySelector("#userList");

// Public demo API
const API_URL = "https://jsonplaceholder.typicode.com/users";

// 1. Fetch data from API
async function loadUsers() {
    // Show loading message
    statusMessage.textContent = "Loading users...";
    userList.innerHTML = "";
    loadButton.disabled = true;

    try {
        // Send request and wait for response
        const response = await fetch(API_URL);

        // fetch() does not reject just because HTTP status is 404 or 500
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Convert JSON response into JavaScript data
        const users = await response.json();

        // Display users
        displayUsers(users);

        statusMessage.textContent =
            `Successfully loaded ${users.length} users.`;

    } catch (error) {
        // Handle network, JSON parsing, or thrown HTTP errors
        statusMessage.textContent =
            `Failed to load users: ${error.message}`;

        console.error("Fetch Error:", error);

    } finally {
        // Enable the button again
        loadButton.disabled = false;
    }
}


// 2. Display user data on the webpage
function displayUsers(users) {
    userList.innerHTML = "";

    users.forEach((user) => {
        const card = document.createElement("article");
        card.classList.add("user-card");

        const name = document.createElement("h2");
        name.textContent = user.name;

        const username = document.createElement("p");
        username.textContent = `Username: ${user.username}`;

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;

        const city = document.createElement("p");
        city.textContent = `City: ${user.address.city}`;

        const company = document.createElement("p");
        company.textContent = `Company: ${user.company.name}`;

        card.append(
            name,
            username,
            email,
            city,
            company
        );

        userList.appendChild(card);
    });
}


// 3. Load data when the button is clicked
loadButton.addEventListener("click", loadUsers);