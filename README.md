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
}
