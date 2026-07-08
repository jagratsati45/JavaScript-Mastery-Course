// Type conversion means changing a value from one data type to another.

// Explicit conversion is when you convert the value on purpose.
let valueInNumber = Number("33");
let invalidNumber = Number("33abc");
let booleanToNumber = Number(true);
let nullToNumber = Number(null);
let undefinedToNumber = Number(undefined);

console.log("Explicit number conversion:");
console.log(valueInNumber);
console.log(invalidNumber); // NaN means Not a Number
console.log(booleanToNumber);
console.log(nullToNumber);
console.log(undefinedToNumber);

// String conversion turns values into text.
let score = 99;
let scoreAsString = String(score);
let booleanAsString = String(false);
let arrayAsString = String([1, 2, 3]);

console.log("String conversion:");
console.log(scoreAsString);
console.log(booleanAsString);
console.log(arrayAsString);

// Boolean conversion is used to check truthy and falsy values.
let emptyString = Boolean("");
let nonEmptyString = Boolean("javascript");
let zeroValue = Boolean(0);
let oneValue = Boolean(1);
let nullValue = Boolean(null);

console.log("Boolean conversion:");
console.log(emptyString);
console.log(nonEmptyString);
console.log(zeroValue);
console.log(oneValue);
console.log(nullValue);

// Common falsy values in JavaScript are:
// false, 0, -0, 0n, "", null, undefined, NaN

// Implicit conversion happens automatically during operations.
console.log("Implicit conversion examples:");
console.log("1" + 2); // string concatenation
console.log("1" + 2 + 2); // left to right: "122"
console.log(1 + 2 + "2"); // left to right: "32"
console.log("5" - 2); // subtraction forces number conversion
console.log("5" * "2"); // multiplication forces number conversion

// Unary plus converts a string to number.
let userInput = "45";
let convertedInput = +userInput;
console.log(convertedInput);

// Parsing converts text into numbers when the string starts with numeric characters.
let ageText = "25 years";
let parsedAge = parseInt(ageText);
let parsedFloat = parseFloat("12.75px");

console.log("Parsing:");
console.log(parsedAge);
console.log(parsedFloat);

// `Number()` is stricter than `parseInt()` and `parseFloat()`.
console.log(Number("25 years")); // NaN

// Comparisons can also trigger conversion.
console.log("Comparison examples:");
console.log(null == 0); // false
console.log(null == undefined); // true
console.log("5" == 5); // true
console.log("5" === 5); // false

// Best practice: prefer strict equality and explicit conversion.
console.log("Conversion basics complete.");
