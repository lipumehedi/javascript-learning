// ========================================
// Day 24 - Developer Module
// ========================================

// Default Export
const developer = {
    name: "Mehedi",
    country: "Japan",
    mainSkill: "Python",
    targetRole: "Backend Developer"
};

export default developer;

// Named Export
export const skills = [
    "Python",
    "Django",
    "PostgreSQL",
    "JavaScript"
];

// Named Export
export function introduce(name) {
    return `Hello, my name is ${name}.`;
}