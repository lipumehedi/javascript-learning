// ========================================
// JavaScript Lesson 16
// DOM Manipulation
// ========================================


// ========================================
// 1. Change Text
// ========================================

const title = document.querySelector("#title");

title.textContent = "Mehedi Developer Portfolio";


// ========================================
// 2. Change HTML
// ========================================

const message = document.querySelector("#message");

message.innerHTML =
    "I am learning <strong>JavaScript DOM</strong>.";

    
// ========================================
// 3. Change Style
// ========================================

title.style.fontSize = "32px";
title.style.fontFamily = "Arial";


// ========================================
// 4. Change Button Style
// ========================================

const button = document.querySelector("#button");

button.style.padding = "10px";
button.style.fontSize = "18px";


// ========================================
// 5. classList.add()
// ========================================

title.classList.add("main-title");


// ========================================
// 6. classList.remove()
// ========================================

title.classList.remove("old-title");


// ========================================
// 7. classList.toggle()
// ========================================

title.classList.toggle("active");


// ========================================
// 8. setAttribute()
// ========================================

button.setAttribute("title", "Start JavaScript Learning");


// ========================================
// 9. getAttribute()
// ========================================

console.log(button.getAttribute("title"));


// ========================================
// 10. Create New Element
// ========================================

const newSkill = document.createElement("li");

newSkill.textContent = "Django";


// ========================================
// 11. Add Element to Page
// ========================================

const skillList = document.querySelector("#skillList");

skillList.appendChild(newSkill);


// ========================================
// 12. Create Another Element
// ========================================

const dockerSkill = document.createElement("li");

dockerSkill.textContent = "Docker";

skillList.appendChild(dockerSkill);


// ========================================
// 13. Create Developer Card
// ========================================

const developerCard = document.createElement("div");

developerCard.innerHTML = `
    <h2>Mehedi</h2>
    <p>Python Backend Developer</p>
    <p>Location: Japan</p>
`;

document.body.appendChild(developerCard);


// ========================================
// 14. Remove Element
// ========================================

const firstSkill = skillList.querySelector("li");

firstSkill.remove();


// ========================================
// 15. Add Multiple Skills
// ========================================

const skills = [
    "Python",
    "Django",
    "SQL",
    "JavaScript",
    "Docker"
];

for (let i = 0; i < skills.length; i++) {

    const skillItem = document.createElement("li");

    skillItem.textContent = skills[i];

    skillList.appendChild(skillItem);
}