// ========================================
// Day 24 - Math Module
// ========================================

// Named Export: Addition
export function add(a, b) {
    return a + b;
}

// Named Export: Subtraction
export function subtract(a, b) {
    return a - b;
}

// Named Export: Multiplication
export function multiply(a, b) {
    return a * b;
}

// Named Export: Division
export function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

// Named Export: Constant
export const taxRate = 0.10;