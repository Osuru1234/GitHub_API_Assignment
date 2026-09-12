 // Part 1: Store Sample Expenses

let rent = 250;
let food = 80;
let transport = 60;
let internet = 120;
let entertainment = 50;
let utilities = 85;


// Part 2: Flag High Spending

if (rent > 100) {
    console.log("Rent: High Spending");
} else if (rent === 100) {
    console.log("Rent: Normal Spending");
} else {
    console.log("Rent: Normal Spending");
}

if (food > 100) {
    console.log("Food: High Spending");
} else if (food === 100) {
    console.log("Food: Normal Spending");
} else {
    console.log("Food: Normal Spending");
}

if (transport > 100) {
    console.log("Transport: High Spending");
} else if (transport === 100) {
    console.log("Transport: Normal Spending");
} else {
    console.log("Transport: Normal Spending");
}

if (internet > 100) {
    console.log("Internet: High Spending");
} else if (internet === 100) {
    console.log("Internet: Normal Spending");
} else {
    console.log("Internet: Normal Spending");
}

if (entertainment > 100) {
    console.log("Entertainment: High Spending");
} else if (entertainment === 100) {
    console.log("Entertainment: Normal Spending");
} else {
    console.log("Entertainment: Normal Spending");
}

if (utilities > 100) {
    console.log("Utilities: High Spending");
} else if (utilities === 100) {
    console.log("Utilities: Normal Spending");
} else {
    console.log("Utilities: Normal Spending");
}


// Part 3: Calculate Total Expenses

let expenses = [rent, food, transport, internet, entertainment, utilities];

let totalExpenses = 0;

// Calculate total using a loop
for (let expense of expenses) {
    totalExpenses += expense;
}

console.log("Total Expenses: $" + totalExpenses);


// Part 4: Budget Check

let monthlyIncome = 800;

console.log("Monthly Income: $" + monthlyIncome);

if (totalExpenses <= monthlyIncome) {
    console.log("Status: Within Budget");
} else {
    console.log("Status: Over Budget");
}