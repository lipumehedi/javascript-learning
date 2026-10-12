# Lesson 28 — API + JSON Project

## Developer Directory

### Overview

A beginner-friendly JavaScript project that fetches user data from a public API and displays it in a responsive developer directory.

### Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- JSON
- Async/Await
- DOM Manipulation

### Features

- Fetch user data from a public API
- Parse JSON responses
- Display user cards dynamically
- Search users by name, email, or city
- Handle loading and error states
- Reload user data
- Responsive layout

### API Used

JSONPlaceholder — Public Demo API

Endpoint: https://jsonplaceholder.typicode.com/users

### Project Structure

```text
lesson-28/
├── index.html
├── style.css
├── script.js
└── README.md
```

### How to Run

1. Open the project folder in VS Code.
2. Open `index.html` using Live Server.
3. Click **Reload Users**.
4. Search for a user by name, email, or city.

An internet connection is required to fetch the API data.

### What I Learned

- How to fetch API data using `fetch()`
- How to parse JSON with `response.json()`
- How to use async/await and try/catch
- How to filter arrays using `filter()`
- How to render API data dynamically
- How to build a simple search feature

### Future Improvements

- Add a user details page
- Add sorting and pagination
- Add a retry button for failed requests
- Improve accessibility and loading indicators
