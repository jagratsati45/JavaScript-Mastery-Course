// JavaScript String Notes
// Strings are used to store text in JavaScript.
// This file covers the most important string concepts with practical examples.

// ------------------------------------------------------------
// 1) Creating strings
// ------------------------------------------------------------
// JavaScript supports single quotes, double quotes, and backticks.

const singleQuoteString = 'Hello from single quotes';
const doubleQuoteString = "Hello from double quotes";
const templateString = `Hello from backticks`;

console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateString);

// All three are valid string values.
console.log(typeof singleQuoteString); // string

// ------------------------------------------------------------
// 2) String primitives and String objects
// ------------------------------------------------------------
// Prefer string primitives. They are simpler and behave as expected.

const primitiveString = "javascript";
const objectString = new String("javascript");

console.log(typeof primitiveString); // string
console.log(typeof objectString); // object

// In normal code, avoid `new String()` because it creates an object wrapper.

// ------------------------------------------------------------
// 3) Template literals
// ------------------------------------------------------------
// Template literals let you insert values directly into a string.

const userName = "Jagrat Sati";
const course = "JavaScript";

const welcomeMessage = `Welcome ${userName}, you are learning ${course}.`;
console.log(welcomeMessage);

// Template literals also support multi-line strings.
const multiLineMessage = `Line 1
Line 2
Line 3`;
console.log(multiLineMessage);

// Expression interpolation works inside `${}`.
const price = 499;
const tax = 0.18;
console.log(`Final price: ${price + price * tax}`);

// ------------------------------------------------------------
// 4) String length
// ------------------------------------------------------------
// The length property tells you how many UTF-16 code units are in the string.

const cityName = "Delhi";
console.log(cityName.length); // 5

// ------------------------------------------------------------
// 5) Accessing characters
// ------------------------------------------------------------
// You can read a character by index.

const language = "JavaScript";

console.log(language[0]); // J
console.log(language[4]); // S
console.log(language.charAt(0)); // J
console.log(language.at(-1)); // t

// Out-of-range access behaves differently:
console.log(language[100]); // undefined
console.log(language.charAt(100)); // ""

// ------------------------------------------------------------
// 6) String immutability
// ------------------------------------------------------------
// Strings cannot be changed in place.
// Any operation creates a new string.

let framework = "React";
framework[0] = "P"; // This does nothing.

console.log(framework); // React

const updatedFramework = "P" + framework.slice(1);
console.log(updatedFramework); // Preact

// ------------------------------------------------------------
// 7) Common search methods
// ------------------------------------------------------------

const topic = "JavaScript is a versatile scripting language";

console.log(topic.includes("versatile")); // true
console.log(topic.startsWith("JavaScript")); // true
console.log(topic.endsWith("language")); // true
console.log(topic.indexOf("is")); // first position of "is"
console.log(topic.lastIndexOf("is")); // last position of "is"

// search() works with regular expressions too.
console.log(topic.search(/script/i)); // position of match

// ------------------------------------------------------------
// 8) Extracting parts of a string
// ------------------------------------------------------------

const fullName = "Aman Kumar";

console.log(fullName.slice(0, 4)); // Aman
console.log(fullName.slice(5)); // Kumar
console.log(fullName.slice(-5)); // Kumar

// substring() is similar to slice(), but it does not support negative indexes.
console.log(fullName.substring(0, 4)); // Aman
console.log(fullName.substring(5, 10)); // Kumar

// substr() is old and not recommended in modern JavaScript.
// Prefer slice() or substring().

// ------------------------------------------------------------
// 9) Trimming whitespace
// ------------------------------------------------------------

const paddedText = "   hello world   ";

console.log(paddedText.trim()); // removes both sides
console.log(paddedText.trimStart()); // removes left side
console.log(paddedText.trimEnd()); // removes right side

// ------------------------------------------------------------
// 10) Changing case
// ------------------------------------------------------------

const mixedText = "JavaScript";

console.log(mixedText.toUpperCase());
console.log(mixedText.toLowerCase());

// ------------------------------------------------------------
// 11) Replacing text
// ------------------------------------------------------------

const sentence = "I like JavaScript. JavaScript is powerful.";

console.log(sentence.replace("JavaScript", "TypeScript"));
console.log(sentence.replaceAll("JavaScript", "TypeScript"));

// replace() changes only the first match.
// replaceAll() changes every match.

// Regular expressions can also be used with replace().
console.log(sentence.replace(/JavaScript/g, "JS"));

// ------------------------------------------------------------
// 12) Splitting and joining
// ------------------------------------------------------------

const fruitsText = "apple,banana,mango";
const fruitsArray = fruitsText.split(",");

console.log(fruitsArray);
console.log(fruitsArray.join(" | "));

// split() converts a string into an array.
// join() converts an array back into a string.

// ------------------------------------------------------------
// 13) Repeating and padding
// ------------------------------------------------------------

console.log("ha".repeat(3)); // hahaha
console.log("5".padStart(3, "0")); // 005
console.log("5".padEnd(3, "0")); // 500

// These methods are useful for formatting text and numbers.

// ------------------------------------------------------------
// 14) Concatenation
// ------------------------------------------------------------
// You can combine strings using +, +=, or concat().

const firstName = "Aman";
const lastName = "Kumar";

console.log(firstName + " " + lastName);
console.log(`${firstName} ${lastName}`);
console.log(firstName.concat(" ", lastName));

// Template literals are usually the cleanest option.

// ------------------------------------------------------------
// 15) Comparing strings
// ------------------------------------------------------------
// String comparison is based on character order.

console.log("apple" < "banana"); // true
console.log("A" < "a"); // true in Unicode order

// localeCompare() is useful for language-aware comparisons.
console.log("a".localeCompare("b")); // negative number
console.log("b".localeCompare("a")); // positive number
console.log("a".localeCompare("a")); // 0

// ------------------------------------------------------------
// 16) Regular expression helpers
// ------------------------------------------------------------
// Strings work well with regex-based methods.

const emailText = "Contact me at user@example.com";
console.log(emailText.match(/\w+@\w+\.\w+/));
console.log(emailText.matchAll(/\w+/g));

// matchAll() returns an iterator, which is helpful for multiple matches.

// ------------------------------------------------------------
// 17) Unicode and special characters
// ------------------------------------------------------------
// Backslashes are used to escape special characters.

const specialText = "He said, \"JavaScript is fun\".";
console.log(specialText);

const newlineText = "First line\nSecond line";
console.log(newlineText);

// Common escape sequences:
// \n new line
// 	 tab
// \\\ backslash
// \" double quote
// \' single quote

// ------------------------------------------------------------
// 18) Useful conversion patterns
// ------------------------------------------------------------
// Any value can be turned into a string.

console.log(String(123));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log((255).toString());
console.log((255).toString(16)); // ff

// String() is the safest general conversion.
// toString() works on many values, but null and undefined do not have it.

// ------------------------------------------------------------
// 19) Quick practical example
// ------------------------------------------------------------

const rawUsername = "   JS Learner   ";
const cleanUsername = rawUsername.trim().toLowerCase();

console.log(cleanUsername); // js learner
console.log(cleanUsername.length);
console.log(cleanUsername.includes("js")); // true

// Final note:
// Strings are one of the most used data types in JavaScript.
// Learn creation, indexing, searching, slicing, trimming, casing, and replacement first.

console.log("JavaScript string notes complete.");
