// JavaScript comparison of datatypes can feel confusing because the language sometimes converts values automatically.
// This automatic conversion is called type coercion.

// Comparison operators:
// ==  -> compares value, but may convert datatypes first
// === -> compares value and datatype, no conversion
// !=  -> loose not equal
// !== -> strict not equal

console.log("Comparison basics:");
console.log(2 == 2);      // true: same value
console.log(2 == "2");   // true: string "2" becomes number 2
console.log(2 === "2");  // false: same value, but different datatype
console.log(2 !== "2");  // true: different datatype means not strictly equal

// Why this is confusing:
// The == operator tries to be helpful by converting values for you.
// That can hide bugs because the result may look correct even when the types are different.

console.log("Loose equality examples:");
console.log(false == 0);     // true: false becomes 0
console.log(false == "");   // true: empty string also becomes 0 in loose comparison
console.log("" == 0);       // true: empty string becomes 0

// Strict equality is usually easier to understand.
// It compares both value and datatype, so the result is more predictable.
console.log("Strict equality examples:");
console.log(false === 0);    // false: boolean is not a number
console.log("5" === 5);     // false: string is not number
console.log("5" === "5");  // true: same datatype and same value

// Relational comparisons can also convert strings into numbers.
console.log("Relational comparison examples:");
console.log("10" > 2);      // true: "10" becomes 10
console.log("02" > 1);      // true: "02" becomes 2
console.log("abc" > 1);     // false: "abc" cannot become a valid number

// null and undefined are special cases.
// They are loosely equal to each other, but not equal to 0 or empty string.
console.log("Special cases:");
console.log(null == undefined);   // true
console.log(null === undefined);  // false: different datatypes
console.log(null == 0);           // false
console.log(undefined == 0);      // false

// NaN means Not a Number.
// The confusing part is that NaN is not equal to itself.
let badNumber = Number("hello");
console.log("NaN example:");
console.log(badNumber);            // NaN
console.log(badNumber == NaN);     // false
console.log(badNumber === NaN);    // false
console.log(Number.isNaN(badNumber)); // true: correct way to check NaN

// Arrays and objects are compared by reference, not just by looking similar.
// Two different arrays with the same values are still different objects in memory.
console.log("Reference comparison examples:");
let firstArray = [1, 2, 3];
let secondArray = [1, 2, 3];
let thirdArray = firstArray;

console.log(firstArray == secondArray);   // false: different memory locations
console.log(firstArray === secondArray);  // false: different memory locations
console.log(firstArray === thirdArray);   // true: same reference

// Best practice notes:
// 1. Prefer === and !== for clear comparisons.
// 2. Convert values yourself when you need to compare different types.
// 3. Use Number(), String(), or Boolean() before comparing if the input type is uncertain.
// 4. Use Number.isNaN() to check for NaN.

let userInput = "25";
let convertedInput = Number(userInput);

console.log("Good practice example:");
console.log(convertedInput === 25); // true

// Quick summary:
// - == can convert datatypes automatically, which is the confusing part.
// - === does not convert and is safer for most code.
// - null, undefined, NaN, arrays, and objects each have special comparison rules.
console.log("JavaScript comparison notes complete.");
