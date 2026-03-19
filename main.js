// Variable declarations
let name = "Cheryl Adhiambo";
let age = 20;
const birthYear = 2005;

// typeof operator
console.log(typeof name);    
console.log(typeof age);     
console.log(typeof true);    

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  // Error! const cannot be reassigned


// Exercise variables
let myName = "Cheryl Adhiambo";
let myAge = 20;
let isStudent = true;
let favoriteColors = ["Blue", "Black", "Purple"];
let todayDate = new Date();

console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date is:", todayDate);

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
// =======================
// EXERCISE 1: IF/ELSE
// =======================
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log("\n=== If/Else ===");
console.log("Score 95:", getGrade(95));
console.log("Score 75:", getGrade(75));
console.log("Score 50:", getGrade(50));


// =======================
// EXERCISE 2: SWITCH
// =======================
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

console.log("\n=== Switch ===");
console.log("Day 0:", getDayName(0));
console.log("Day 3:", getDayName(3));
console.log("Day 7:", getDayName(7));


// =======================
// EXERCISE 3: LOOPS
// =======================
console.log("\n=== Loops ===");

// For loop
for (let i = 0; i < 5; i++) {
    console.log("For loop:", i);
}

// While loop
let countLoop = 0; // ⚠️ renamed to avoid conflict
while (countLoop < 5) {
    console.log("While loop:", countLoop);
    countLoop++;
}

// For...of
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log("Color:", color);
}


// =======================
// BUILT PROGRAMS
// =======================

// 1️⃣ Print numbers 1–100
console.log("\nNumbers 1 to 100:");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}


// 2️⃣ Even numbers 1–50
console.log("\nEven numbers 1 to 50:");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 3️⃣ FizzBuzz
console.log("\nFizzBuzz:");
for (let i = 1; i <= 100; i++) {
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


// 4️⃣ Triangle of stars
console.log("\nTriangle:");
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);