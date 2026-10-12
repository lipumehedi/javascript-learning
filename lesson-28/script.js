
/*
========================================
JavaScript Phase 2
Day 28 - API + JSON Project
Developer Directory
========================================
*/

const API_URL = "https://jsonplaceholder.typicode.com/users";

const searchInput = document.querySelector("#searchInput");
const loadButton = document.querySelector("#loadButton");
const statusMessage = document.querySelector("#status");
const userList = document.querySelector("#userList");

// Store API data in an array
let users = [];

// 1. Load users from API
async function loadUsers() {
    statusMessage.textContent = "Loading users...";
    loadButton.disabled = true;
    userList.replaceChildren();

    try {
        const response = await fetch(API_URL);

        // Check the HTTP response
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        // Convert JSON response to JavaScript data
        const data = await response.json();

        // Check whether the returned data is an array
        if (!Array.isArray(data)) {
            throw new Error("Unexpected data format.");
        }

        users = data;

        // Display all users initially
        displayUsers(users);

        statusMessage.textContent =
            `Loaded ${users.length} users successfully.`;

    } catch (error) {
        users = [];
        userList.replaceChildren();

        statusMessage.textContent =
            "Could not load users. Please check your internet and try again.";

        console.error("API Error:", error);

    } finally {
        loadButton.disabled = false;
    }
}


// 2. Display user cards
function displayUsers(userData) {
    userList.replaceChildren();

    if (userData.length === 0) {
        statusMessage.textContent = "No matching users found.";
        return;
    }

    userData.forEach((user) => {
        const card = document.createElement("article");
        card.classList.add("user-card");

        const name = document.createElement("h2");
        name.textContent = user.name;

        const email = document.createElement("p");
        email.textContent = `Email: ${user.email}`;

        const city = document.createElement("p");
        city.textContent = `City: ${user.address.city}`;

        const company = document.createElement("p");
        company.textContent = `Company: ${user.company.name}`;

        card.append(name, email, city, company);
        userList.appendChild(card);
    });
}


// 3. Search by name, email, or city
function searchUsers() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    const filteredUsers = users.filter((user) => {
        const name = user.name.toLowerCase();
        const email = user.email.toLowerCase();
        const city = user.address.city.toLowerCase();

        return (
            name.includes(searchTerm) ||
            email.includes(searchTerm) ||
            city.includes(searchTerm)
        );
    });

    displayUsers(filteredUsers);

    if (filteredUsers.length > 0) {
        statusMessage.textContent =
            `Found ${filteredUsers.length} user(s).`;
    }
}


// 4. Search whenever the user types
searchInput.addEventListener("input", searchUsers);


// 5. Reload data when the button is clicked
loadButton.addEventListener("click", loadUsers);
