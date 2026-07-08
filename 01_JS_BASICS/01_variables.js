// JavaScript variables store values that can be reused in a program.

// `const` is the default choice when the value should not change.
const userId = 12345;

// `let` is used when the value may change later.
let email = "jagrat@gmail.com";

// `var` is older syntax. It works, but `let` and `const` are preferred in modern JavaScript.
var password = "12345";

console.table({ userId, email, password });

// Reassigning a `let` variable is allowed.
email = "newemail@gmail.com";

// `const` cannot be reassigned.
// userId = 99999; // This would throw an error.

console.log("Updated email:", email);

// Scope examples
if (true) {
	let blockScoped = "Only available inside this block";
	const role = "student";
	console.log(blockScoped);
	console.log(role);
}

// `var` is function-scoped, not block-scoped.
function scopeDemo() {
	var insideFunction = "Visible only inside this function";
	console.log(insideFunction);
}

scopeDemo();

// Hoisting note:
// `var` declarations are hoisted and start as `undefined`.
// `let` and `const` are hoisted too, but cannot be used before declaration.

console.log("JavaScript variables basics complete.");
