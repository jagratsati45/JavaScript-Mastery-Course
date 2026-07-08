// JavaScript data types describe the kind of value stored in a variable.

// Primitive data types hold a single value.
let score = 100; // number
let temperature = 36.6; // number
let isLoggedIn = true; // boolean
let userName = "jagrat"; // string
let middleName = null; // intentional absence of value
let city; // undefined
let bigNumber = 12345678901234567890n; // bigint
let id = Symbol("id"); // symbol

console.log("Primitive values:");
console.table({ score, temperature, isLoggedIn, userName, middleName, city, bigNumber, id });

// `typeof` helps inspect a value's data type.
console.log("Type of score:", typeof score);
console.log("Type of userName:", typeof userName);
console.log("Type of isLoggedIn:", typeof isLoggedIn);
console.log("Type of middleName:", typeof middleName); // JavaScript quirk: typeof null is "object"
console.log("Type of city:", typeof city);

// Reference data types store collections or complex values.
const heroes = ["spiderman", "thor", "hulk"];
const user = {
	name: "jagrat",
	age: 22,
	email: "jagrat@gmail.com",
};

function greet(name) {
	return `Hello, ${name}`;
}

console.log("Reference values:");
console.log(heroes);
console.log(user);
console.log(greet("JavaScript"));

// Arrays are ordered lists.
console.log("First hero:", heroes[0]);
heroes.push("ironman");
console.log("Updated heroes:", heroes);

// Objects store key-value pairs.
console.log("User name:", user.name);
user.age = 23;
console.log("Updated user:", user);

// Primitive values are copied by value.
let originalCount = 10;
let copiedCount = originalCount;
copiedCount = 20;

console.log("Original count:", originalCount);
console.log("Copied count:", copiedCount);

// Reference values are copied by reference.
const firstList = [1, 2, 3];
const secondList = firstList;
secondList.push(4);

console.log("First list:", firstList);
console.log("Second list:", secondList);

// Quick summary:
// Primitive: string, number, boolean, null, undefined, bigint, symbol
// Reference: object, array, function
console.log("JavaScript datatypes basics complete.");
