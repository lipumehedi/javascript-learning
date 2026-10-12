# Lesson 27 — JavaScript Fetch API

## Overview

In this lesson, I learned how to fetch data from a public API and display it dynamically on a webpage.

## Topics Covered

- Fetch API
- HTTP requests and responses
- `async` and `await`
- `response.ok`
- `response.json()`
- Error handling with `try/catch`
- Cleanup with `finally`
- DOM manipulation
- Dynamic user cards
- Loading and error messages

## Project Structure

```text
lesson-27/
├── index.html
├── style.css
├── script.js
└── README.md
```

## API Used

JSONPlaceholder — public demo API

Endpoint: `https://jsonplaceholder.typicode.com/users`

The endpoint provides sample user data for learning and testing.

## Features

- Load users from an API
- Display usernames, emails, cities, and companies
- Show loading and error messages
- Disable the button while loading
- Render responsive user cards

## How to Run

1. Open `index.html` using VS Code Live Server.
2. Click the **Load Users** button.
3. View the user cards on the webpage.

An internet connection is required to retrieve API data.

## Practice Challenges

1. Display only the user's name and email.
2. Add the user's website to each card.
3. Create a button to load a single user.
4. Display the number of users returned by the API.
5. Add a retry button for failed requests.

## What I Learned

I learned how to fetch API data, handle asynchronous responses, parse JSON, and display server data using JavaScript.
