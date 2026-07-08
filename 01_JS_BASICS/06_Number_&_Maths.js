// ================================
// JavaScript Number and Math Notes
// ================================

// Number in JS is a primitive type (IEEE 754 double-precision float).
const score = 400;
const temperature = -12.5;
const ratio = 0.1 + 0.2;

console.log("score:", score);
console.log("temperature:", temperature);
console.log("0.1 + 0.2:", ratio); // floating-point precision issue

// Number object wrapper (rarely needed in real projects).
const wrapped = new Number(100);
console.log("wrapped:", wrapped);
console.log("typeof wrapped:", typeof wrapped); // object
console.log("typeof score:", typeof score); // number

// ------------------------
// Useful Number constants
// ------------------------
console.log("MAX_VALUE:", Number.MAX_VALUE);
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);
console.log("NaN:", Number.NaN);

// ----------------------
// Number static methods
// ----------------------
console.log("Number.isInteger(42):", Number.isInteger(42));
console.log("Number.isInteger(42.2):", Number.isInteger(42.2));
console.log("Number.isFinite(100):", Number.isFinite(100));
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("Number.isNaN('NaN'):", Number.isNaN("NaN"));

// Number conversion helpers.
console.log("Number('123'):", Number("123"));
console.log("Number('123abc'):", Number("123abc")); // NaN
console.log("parseInt('123px', 10):", parseInt("123px", 10));
console.log("parseFloat('12.34rem'):", parseFloat("12.34rem"));

// -----------------------
// Instance Number methods
// -----------------------
const num = 1234.56789;

console.log("toString():", num.toString());
console.log("toFixed(2):", num.toFixed(2)); // fixed decimal places
console.log("toPrecision(5):", num.toPrecision(5)); // total significant digits
console.log("toExponential(3):", num.toExponential(3));
console.log("toLocaleString('en-IN'):", num.toLocaleString("en-IN"));
console.log("valueOf():", wrapped.valueOf());

// --------------------------
// Common Number edge cases
// --------------------------
console.log("1 / 0:", 1 / 0); // Infinity
console.log("-1 / 0:", -1 / 0); // -Infinity
console.log("0 / 0:", 0 / 0); // NaN
console.log("NaN === NaN:", NaN === NaN); // false
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true

// Safe integer precision warning above MAX_SAFE_INTEGER.
const unsafe = Number.MAX_SAFE_INTEGER + 1;
console.log("unsafe:", unsafe);
console.log("unsafe + 1 === unsafe + 2:", unsafe + 1 === unsafe + 2);

// Numeric separator for readability.
const population = 1_430_000_000;
console.log("population:", population);

// BigInt for very large integers.
const big = 9007199254740993n;
console.log("big:", big);
console.log("typeof big:", typeof big);

// ==================
// Math object in JS
// ==================
// Math is a built-in object for mathematical operations (not a constructor).

console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);
console.log("Math.SQRT2:", Math.SQRT2);

// ------------------
// Rounding functions
// ------------------
const value = 4.7;
console.log("Math.round(4.7):", Math.round(value));
console.log("Math.floor(4.7):", Math.floor(value));
console.log("Math.ceil(4.1):", Math.ceil(4.1));
console.log("Math.trunc(4.9):", Math.trunc(4.9));

// Negative numbers with floor/ceil.
console.log("Math.floor(-4.2):", Math.floor(-4.2));
console.log("Math.ceil(-4.2):", Math.ceil(-4.2));

// -----------------
// Absolute and sign
// -----------------
console.log("Math.abs(-15):", Math.abs(-15));
console.log("Math.sign(-15):", Math.sign(-15));
console.log("Math.sign(0):", Math.sign(0));
console.log("Math.sign(20):", Math.sign(20));

// ----------------------
// Min, max, power, roots
// ----------------------
console.log("Math.min(4, 1, 9, -2):", Math.min(4, 1, 9, -2));
console.log("Math.max(4, 1, 9, -2):", Math.max(4, 1, 9, -2));
console.log("Math.pow(2, 5):", Math.pow(2, 5));
console.log("2 ** 5:", 2 ** 5);
console.log("Math.sqrt(49):", Math.sqrt(49));
console.log("Math.cbrt(27):", Math.cbrt(27));
console.log("Math.hypot(3, 4):", Math.hypot(3, 4));

// -----------------------
// Logarithmic operations
// -----------------------
console.log("Math.log(Math.E):", Math.log(Math.E));
console.log("Math.log10(1000):", Math.log10(1000));
console.log("Math.log2(8):", Math.log2(8));
console.log("Math.exp(1):", Math.exp(1));

// ----------------
// Trigonometry
// ----------------
console.log("Math.sin(Math.PI / 2):", Math.sin(Math.PI / 2));
console.log("Math.cos(0):", Math.cos(0));
console.log("Math.tan(Math.PI / 4):", Math.tan(Math.PI / 4));

// --------------------------------
// Random numbers and custom ranges
// --------------------------------
// Math.random() gives [0, 1).
const random01 = Math.random();
console.log("Math.random():", random01);

// Random integer in range [min, max].
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("randomInt(1, 6):", randomInt(1, 6)); // dice
console.log("randomInt(10, 20):", randomInt(10, 20));

// --------------------------
// Practical utility examples
// --------------------------
function roundTo(valueToRound, decimals) {
	const factor = 10 ** decimals;
	return Math.round(valueToRound * factor) / factor;
}

console.log("roundTo(3.14159, 2):", roundTo(3.14159, 2));

function clamp(valueToClamp, min, max) {
	return Math.min(Math.max(valueToClamp, min), max);
}

console.log("clamp(120, 0, 100):", clamp(120, 0, 100));
console.log("clamp(-10, 0, 100):", clamp(-10, 0, 100));
console.log("clamp(55, 0, 100):", clamp(55, 0, 100));

// End of Number and Math notes.
