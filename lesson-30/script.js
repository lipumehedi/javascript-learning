
/*
========================================
Day 30 - Developer Job Tracker
JavaScript Capstone Project
========================================
*/

const STORAGE_KEY = "developerJobTracker";

const jobForm = document.querySelector("#jobForm");
const jobTitleInput = document.querySelector("#jobTitle");
const companyInput = document.querySelector("#company");
const locationInput = document.querySelector("#location");
const salaryInput = document.querySelector("#salary");
const statusInput = document.querySelector("#status");

const searchInput = document.querySelector("#searchInput");
const filterStatus = document.querySelector("#filterStatus");

const jobList = document.querySelector("#jobList");
const formMessage = document.querySelector("#formMessage");
const listMessage = document.querySelector("#listMessage");
const demoButton = document.querySelector("#demoButton");

const totalCount = document.querySelector("#totalCount");
const appliedCount = document.querySelector("#appliedCount");
const interviewCount = document.querySelector("#interviewCount");
const offerCount = document.querySelector("#offerCount");

const validStatuses = ["Applied", "Interview", "Offer", "Rejected"];

// 1. Load saved jobs safely
function loadSavedJobs() {
    try {
        const savedData = localStorage.getItem(STORAGE_KEY);

        if (!savedData) {
            return [];
        }

        const parsedData = JSON.parse(savedData);

        if (!Array.isArray(parsedData)) {
            return [];
        }

        // Keep only records with the expected fields
        return parsedData.filter((job) => {
            return (
                job &&
                Number.isInteger(job.id) &&
                typeof job.title === "string" &&
                typeof job.company === "string" &&
                typeof job.location === "string" &&
                Number.isFinite(job.salary) &&
                validStatuses.includes(job.status)
            );
        });

    } catch (error) {
        console.error("Could not read saved jobs:", error);
        return [];
    }
}

let jobs = loadSavedJobs();


// 2. Save jobs in Local Storage
function saveJobs() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
        return true;

    } catch (error) {
        console.error("Could not save jobs:", error);

        formMessage.textContent =
            "Warning: Your changes could not be saved in this browser.";

        return false;
    }
}


// 3. Update dashboard statistics
function updateStatistics() {
    totalCount.textContent = jobs.length;

    appliedCount.textContent = jobs.filter(
        (job) => job.status === "Applied"
    ).length;

    interviewCount.textContent = jobs.filter(
        (job) => job.status === "Interview"
    ).length;

    offerCount.textContent = jobs.filter(
        (job) => job.status === "Offer"
    ).length;
}


// 4. Display jobs on the webpage
function displayJobs() {
    jobList.replaceChildren();

    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedStatus = filterStatus.value;

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm);

        const matchesStatus =
            selectedStatus === "All" ||
            job.status === selectedStatus;

        return matchesSearch && matchesStatus;
    });

    if (filteredJobs.length === 0) {
        listMessage.textContent = jobs.length === 0
            ? "No applications yet. Add your first job above."
            : "No applications match your search or filter.";
        return;
    }

    listMessage.textContent =
        `Showing ${filteredJobs.length} of ${jobs.length} applications.`;

    filteredJobs.forEach((job) => {
        const card = document.createElement("article");
        card.classList.add("job-card");

        const title = document.createElement("h3");
        title.textContent = job.title;

        const company = document.createElement("p");
        company.classList.add("company");
        company.textContent = job.company;

        const location = document.createElement("p");
        location.textContent = `Location: ${job.location}`;

        const salary = document.createElement("p");
        salary.textContent =
            `Annual Salary: ¥${job.salary.toLocaleString("en-US")}`;

        const statusLabel = document.createElement("label");
        statusLabel.classList.add("status-label");
        statusLabel.textContent = "Application Status";

        const statusSelect = document.createElement("select");
        statusSelect.setAttribute(
            "aria-label",
            `Status for ${job.title} at ${job.company}`
        );

        validStatuses.forEach((status) => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            option.selected = status === job.status;
            statusSelect.appendChild(option);
        });

        statusSelect.addEventListener("change", () => {
            updateJobStatus(job.id, statusSelect.value);
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.classList.add("delete-button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", () => {
            deleteJob(job.id);
        });

        card.append(
            title,
            company,
            location,
            salary,
            statusLabel,
            statusSelect,
            deleteButton
        );

        jobList.appendChild(card);
    });
}


// 5. Add a new job application
jobForm.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
        const title = jobTitleInput.value.trim();
        const company = companyInput.value.trim();
        const location = locationInput.value.trim();
        const salary = Number(salaryInput.value);
        const status = statusInput.value;

        if (!title || !company || !location) {
            throw new Error("Please fill in all required fields.");
        }

        if (!Number.isFinite(salary) || salary < 0) {
            throw new Error("Please enter a valid salary.");
        }

        if (!validStatuses.includes(status)) {
            throw new Error("Please select a valid status.");
        }

        const newJob = {
            id: Date.now(),
            title,
            company,
            location,
            salary,
            status
        };

        jobs.unshift(newJob);

        const saved = saveJobs();

        updateStatistics();
        displayJobs();

        formMessage.textContent = saved
            ? "Job application added successfully."
            : "Job added for this session, but could not be saved.";

        jobForm.reset();

    } catch (error) {
        formMessage.textContent = error.message;
    }
});


// 6. Update application status
function updateJobStatus(id, newStatus) {
    if (!validStatuses.includes(newStatus)) {
        return;
    }

    jobs = jobs.map((job) => {
        if (job.id === id) {
            return { ...job, status: newStatus };
        }

        return job;
    });

    saveJobs();
    updateStatistics();
    displayJobs();
}


// 7. Delete an application
function deleteJob(id) {
    jobs = jobs.filter((job) => job.id !== id);

    saveJobs();
    updateStatistics();
    displayJobs();

    formMessage.textContent = "Application deleted.";
}


// 8. Search and filter
searchInput.addEventListener("input", displayJobs);
filterStatus.addEventListener("change", displayJobs);


// 9. Import sample data from a public API
async function loadDemoData() {
    demoButton.disabled = true;
    demoButton.textContent = "Loading...";
    formMessage.textContent = "Loading demo data from API...";

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();

        if (!Array.isArray(users) || users.length === 0) {
            throw new Error("No demo data was returned.");
        }

        const demoJobs = users.map((user, index) => ({
            id: Date.now() + index,
            title: [
                "Python Backend Developer",
                "Django Developer",
                "Junior IT Engineer",
                "Software Developer"
            ][index % 4],
            company: `${user.company.name} (Demo)`,
            location: user.address.city,
            salary: 4000000 + index * 250000,
            status: validStatuses[index % validStatuses.length]
        }));

        // Keep existing applications and add demo records
        const existingIds = new Set(jobs.map((job) => job.id));
        const newDemoJobs = demoJobs.filter(
            (job) => !existingIds.has(job.id)
        );

        jobs = [...newDemoJobs, ...jobs];

        const saved = saveJobs();

        updateStatistics();
        displayJobs();

        formMessage.textContent = saved
            ? `${newDemoJobs.length} demo applications added. These are sample records, not real vacancies.`
            : "Demo data loaded, but could not be saved.";

    } catch (error) {
        console.error("Demo API error:", error);

        formMessage.textContent =
            "Could not load demo data. Check your internet and try again.";

    } finally {
        demoButton.disabled = false;
        demoButton.textContent = "Load Demo Data";
    }
}

demoButton.addEventListener("click", loadDemoData);


// 10. Initial render
updateStatistics();
displayJobs();
