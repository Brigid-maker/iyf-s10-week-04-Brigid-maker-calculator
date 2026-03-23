
// ===============================
// 🟢 VARIABLES PRACTICE
// ===============================
let myName = "Cheryl";
let myAge = 20;
let isStudent = true;
let favoriteColors = ["blue", "black", "white"];
let today = new Date();

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Student:", isStudent);
console.log("Favorite Colors:", favoriteColors);
console.log("Today's Date:", today);

// typeof
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isStudent);

// ===============================
// 🟢 CHALLENGE CALCULATIONS
// ===============================
let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = 2026 + (100 - myAge);

console.log("Age in days:", ageInDays);
console.log("Age in hours:", ageInHours);
console.log("Year you turn 100:", yearTurn100);

// ===============================
// 🟡 FUNCTIONS
// ===============================
function calculateArea(width, height) {
    return width * height;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function isEven(number) {
    return number % 2 === 0;
}

function getInitials(fullName) {
    let names = fullName.split(" ");
    return names[0][0] + names[1][0];
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Test functions
console.log("Area:", calculateArea(5, 10));
console.log("Temperature:", celsiusToFahrenheit(25));
console.log("Is Even:", isEven(4));
console.log("Initials:", getInitials("John Doe"));
console.log("Reversed:", reverseString("hello"));

// ===============================
// 🟡 CONTROL FLOW
// ===============================

// Numbers 1–100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Even numbers 1–50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log("Even:", i);
    }
}

// FizzBuzz
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Triangle of stars
console.log("\nTriangle:");
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// ===============================
// 🔴 CALCULATOR PROJECT
// ===============================

// Basic operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function modulus(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

// Main calculator function
function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        case "%":
            return modulus(num1, num2);
        case "**":
            return power(num1, num2);
        default:
            return "Invalid operator";
    }
}

// ===============================
// 🧪 TEST CALCULATOR
// ===============================
console.log("Calculator Tests:");
console.log(calculate(10, "+", 5));   // 15
console.log(calculate(10, "-", 5));   // 5
console.log(calculate(10, "*", 5));   // 50
console.log(calculate(10, "/", 5));   // 2
console.log(calculate(10, "/", 0));   // Error
console.log(calculate(10, "%", 3));   // 1
console.log(calculate(2, "**", 3));   // 8