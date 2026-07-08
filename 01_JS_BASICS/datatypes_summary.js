// JavaScript Data Types Summary
//
// JavaScript values are broadly divided into two groups:
// 1. Primitive data types
// 2. Non-primitive data types (reference types)

// ------------------------------------------------------------
// 1) Primitive data types
// ------------------------------------------------------------
// Primitive values are stored directly and are immutable.
// That means you cannot change the original primitive value itself.

const userName = "Aman"; // string
const age = 21; // number
const isLoggedIn = true; // boolean
const temperature = null; // null
let courseName; // undefined
const uniqueId = Symbol("id"); // symbol
const bigNumber = 123456789012345678901234567890n; // bigint

// typeof checks
console.log("typeof userName:", typeof userName);
console.log("typeof age:", typeof age);
console.log("typeof isLoggedIn:", typeof isLoggedIn);
console.log("typeof temperature:", typeof temperature); // historical quirk: "object"
console.log("typeof courseName:", typeof courseName);
console.log("typeof uniqueId:", typeof uniqueId);
console.log("typeof bigNumber:", typeof bigNumber);

// Primitive values are copied by value.
let originalScore = 50;
let copiedScore = originalScore;
copiedScore = 75;

console.log("originalScore:", originalScore); // 50
console.log("copiedScore:", copiedScore); // 75

// ------------------------------------------------------------
// 2) Non-primitive data types
// ------------------------------------------------------------
// Non-primitive values are stored as references.
// Arrays, objects, functions, dates, maps, and sets are all reference types.

const profile = {
	name: "Aman",
	age: 21,
	isStudent: true,
};

const colors = ["red", "green", "blue"];

function greet(name) {
	return `Hello, ${name}!`;
}

const today = new Date();

console.log("typeof profile:", typeof profile);
console.log("typeof colors:", typeof colors);
console.log("typeof greet:", typeof greet);
console.log("typeof today:", typeof today);

console.table(profile);
console.log("colors:", colors);
console.log(greet("Aman"));
console.log("today:", today.toDateString());

// Reference copy example
const firstProfile = { city: "Delhi" };
const secondProfile = firstProfile;

secondProfile.city = "Mumbai";

console.log("firstProfile.city:", firstProfile.city); // Mumbai
console.log("secondProfile.city:", secondProfile.city); // Mumbai

// ------------------------------------------------------------
// 3) Important typeof notes
// ------------------------------------------------------------
// - typeof null returns "object" because of an old JavaScript bug.
// - Arrays are objects, so typeof [] is also "object".
// - To check an array, use Array.isArray().

console.log("Array.isArray(colors):", Array.isArray(colors));
console.log("Array.isArray(profile):", Array.isArray(profile));

// ------------------------------------------------------------
// 4) Quick summary table
// ------------------------------------------------------------
console.table([
	{ valueType: "string", example: userName, category: "primitive" },
	{ valueType: "number", example: age, category: "primitive" },
	{ valueType: "boolean", example: isLoggedIn, category: "primitive" },
	{ valueType: "null", example: temperature, category: "primitive" },
	{ valueType: "undefined", example: courseName, category: "primitive" },
	{ valueType: "symbol", example: String(uniqueId), category: "primitive" },
	{ valueType: "bigint", example: String(bigNumber), category: "primitive" },
	{ valueType: "object", example: "{} / [] / Date / Map / Set", category: "non-primitive" },
	{ valueType: "function", example: "function() {}", category: "non-primitive" },
]);

// Final note:
// Primitive data types are compared by value.
// Non-primitive data types are compared by reference.

// ------------------------------------------------------------
// 5) Stack and Heap in JavaScript
// ------------------------------------------------------------
// Stack memory is used for primitive values and function calls.
// Heap memory is used for non-primitive values like objects and arrays.
//
// The important idea:
// - Primitives are copied into a new location.
// - Objects and arrays are shared by reference.


// Stack Memory Example:
let stackValueA = 10;
let stackValueB = stackValueA;
stackValueB = 20;

console.log("stackValueA:", stackValueA); // 10
console.log("stackValueB:", stackValueB); // 20


// Heap Memory Example:
const heapObjectA = {
	language: "JavaScript",
	level: "beginner",
};

const heapObjectB = heapObjectA;
heapObjectB.level = "advanced";

console.log("heapObjectA.level:", heapObjectA.level); // advanced
console.log("heapObjectB.level:", heapObjectB.level); // advanced

const heapArrayA = [1, 2, 3];
const heapArrayB = heapArrayA;
heapArrayB.push(4);

console.log("heapArrayA:", heapArrayA); // [1, 2, 3, 4]
console.log("heapArrayB:", heapArrayB); // [1, 2, 3, 4]

// A safer way to copy non-primitive values is to create a new object or array.
const copiedObject = { ...heapObjectA };
copiedObject.level = "master";

const copiedArray = [...heapArrayA];
copiedArray.push(5);

console.log("heapObjectA.level after copy:", heapObjectA.level); // advanced
console.log("copiedObject.level:", copiedObject.level); // master
console.log("heapArrayA after copy:", heapArrayA); // [1, 2, 3, 4]
console.log("copiedArray:", copiedArray); // [1, 2, 3, 4, 5]

console.log("JavaScript datatypes summary complete.");
