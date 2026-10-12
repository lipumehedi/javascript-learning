// ========================================
// JavaScript Lesson 19
// Local Storage + JSON
// ========================================

// 1. Select HTML elements

const skillForm = document.querySelector("#skillForm");
const skillInput = document.querySelector("#skillInput");
const skillList = document.querySelector("#skillList");
const message = document.querySelector("#message");
const clearButton = document.querySelector("#clearButton");


// 2. Load saved skills from Local Storage

let skills = JSON.parse(
    localStorage.getItem("developerSkills") || "[]"
);


// 3. Display skills on the webpage

function displaySkills() {
    skillList.innerHTML = "";

    for (let i = 0; i < skills.length; i++) {
        const li = document.createElement("li");

        li.textContent = skills[i];

        skillList.appendChild(li);
    }
}


// 4. Save skills to Local Storage

function saveSkills() {
    localStorage.setItem(
        "developerSkills",
        JSON.stringify(skills)
    );
}


// 5. Add a new skill

skillForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const skill = skillInput.value.trim();

    if (skill === "") {
        message.textContent = "Please enter a skill.";
        return;
    }

    skills.push(skill);

    saveSkills();
    displaySkills();

    message.textContent = `Skill added: ${skill}`;

    skillInput.value = "";
    skillInput.focus();
});


// 6. Clear all saved skills

clearButton.addEventListener("click", function () {
    skills = [];

    saveSkills();
    displaySkills();

    message.textContent = "All skills cleared.";
});


// 7. Display saved skills when the page opens

displaySkills();