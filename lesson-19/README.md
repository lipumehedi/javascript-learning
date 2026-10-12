# JavaScript Lesson 19 — Local Storage and JSON

## Overview

In this lesson, I learned how to store and retrieve data in the browser using Local Storage and JSON.

## Topics Covered

- `localStorage.setItem()`
- `localStorage.getItem()`
- `localStorage.removeItem()`
- `JSON.stringify()`
- `JSON.parse()`
- Saving arrays in Local Storage
- Loading saved data
- DOM manipulation
- Form submission and validation
- Persistent data after page refresh

## Project: Developer Skills Saver

A simple JavaScript application that allows users to:

- Add developer skills
- Display saved skills
- Keep skills after refreshing the page
- Clear all saved skills

## Folder Structure

```text
lesson-19/
├── index.html
├── script.js
└── README.md
```

## How to Run

1. Open `index.html` using VS Code Live Server.
2. Enter a skill, such as Python or Django.
3. Click Add Skill.
4. Refresh the page to verify persistence.
5. Test the Clear All Skills button.

## Important Concepts

- `JSON.stringify()` converts JavaScript data into a JSON string.
- `JSON.parse()` converts a JSON string into JavaScript data.
- Local Storage stores data in the browser for later use.

## Practice Challenges

1. Prevent duplicate skills.
2. Add a delete button for each skill.
3. Display the total number of skills.

## What I Learned

I learned how to save JavaScript data in the browser, retrieve it after a page reload, and build a small interactive application using Local Storage and JSON.
