# iyf-s10-week-04-Brigid-maker
// Basic math
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Increment/Decrement
let count = 0;
count++;
count--;

console.log("Final count:", count);





// =======================
// EXERCISE 1: NUMBER OPERATIONS
// =======================
console.log("\n=== Number Operations ===");

let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

let count = 0;
count++;
count--;
console.log("Final count:", count);


// =======================
// EXERCISE 2: STRING OPERATIONS
// =======================
console.log("\n=== String Operations ===");

let firstName = "Cheryl";
let lastName = "Adhiambo";

let fullName = firstName + " " + lastName;
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

console.log("Full Name:", fullName);
console.log(greeting);
console.log(message);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Cheryl"));


// =======================
// EXERCISE 3: COMPARISON & LOGICAL
// =======================
console.log("\n=== Comparison & Logical ===");

console.log(5 > 3);
console.log(5 < 3);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 !== 3);

console.log(true && true);
console.log(true || false);
console.log(!true);


// =======================
// CHALLENGE
// =======================
console.log("\n=== Age Challenge ===");

let myAge = myAge || 20; // safe fallback

let ageInDays = myAge * 365;
let ageInHours = myAge * 365 * 24;

let currentYear = new Date().getFullYear();
let yearAt100 = currentYear + (100 - myAge);

console.log("Age in days:", ageInDays);
console.log("Age in hours:", ageInHours);
console.log("Year you turn 100:", yearAt100);



// =======================
// EXERCISE 1: FUNCTION DECLARATIONS
// =======================

// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

// Test the functions
console.log("\n=== Exercise 1: Functions ===");
console.log(greet("Cheryl"));
console.log("Add 5 + 3:", add(5, 3));
console.log("Multiply 4 * 6:", multiply(4, 6));
console.log("Divide 10 / 2:", divide(10, 2));
console.log("Divide 10 / 0:", divide(10, 0));


// =======================
// EXERCISE 2: BUILD THESE FUNCTIONS
// =======================

// 1️⃣ Area of rectangle
const calculateArea = (width, height) => width * height;

// 2️⃣ Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// 3️⃣ Check if even
const isEven = (number) => number % 2 === 0;

// 4️⃣ Get initials
const getInitials = (fullName) => {
    return fullName
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");
};

// 5️⃣ Reverse string
const reverseString = (str) => str.split("").reverse().join("");

console.log("\n=== Exercise 2: Build Functions ===");
console.log("Area of 5x10:", calculateArea(5, 10));
console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));
console.log("Is 8 even?", isEven(8));
console.log("Initials of 'Cheryl Adhiambo':", getInitials("Cheryl Adhiambo"));
console.log("Reverse 'Hello':", reverseString("Hello"));


// =======================
// EXERCISE 3: DEFAULT PARAMETERS
// =======================

// Greet function with defaults
function greetDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log("\n=== Exercise 3: Default Parameters ===");
console.log(greetDefault());             // Hello, Guest!
console.log(greetDefault("Alice"));      // Hello, Alice!
console.log(greetDefault("Bob", "Hi"));  // Hi, Bob!

// Calculate Tip
function calculateTip(bill, tipPercent = 15) {
    return (bill * tipPercent) / 100;
}

console.log("Tip on $200 at default 15%:", calculateTip(200));
console.log("Tip on $200 at 20%:", calculateTip(200, 20));
