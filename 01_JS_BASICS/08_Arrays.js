// ============================
// JavaScript Arrays Deep Notes
// ============================

// Arrays are ordered, zero-indexed, resizable list-like objects.
const arr = [10, 20, 30, 40];
console.log("arr:", arr);
console.log("typeof arr:", typeof arr); // object
console.log("Array.isArray(arr):", Array.isArray(arr));
console.log("length:", arr.length);
console.log("first element:", arr[0]);
console.log("last element:", arr[arr.length - 1]);

// ------------------
// Creating arrays
// ------------------
const a1 = [1, 2, 3];
const a2 = new Array(4, 5, 6);
const a3 = Array.of(7, 8, 9);
const a4 = Array.from("hello");
const a5 = Array.from({ length: 5 }, (_, i) => i * 2);

console.log("a1:", a1);
console.log("a2:", a2);
console.log("a3:", a3);
console.log("a4:", a4);
console.log("a5:", a5);

// Beware: Array(5) creates empty slots, not undefined values.
const sparse = Array(5);
console.log("sparse:", sparse);
console.log("sparse length:", sparse.length);

// ------------------
// Add and remove
// ------------------
const nums = [1, 2, 3];
nums.push(4); // add at end
nums.unshift(0); // add at start
console.log("after push/unshift:", nums);

const removedEnd = nums.pop();
const removedStart = nums.shift();
console.log("removedEnd:", removedEnd);
console.log("removedStart:", removedStart);
console.log("after pop/shift:", nums);

// splice mutates array: add/remove/replace.
const spliceDemo = ["a", "b", "c", "d"];
const removed = spliceDemo.splice(1, 2, "x", "y");
console.log("splice removed:", removed);
console.log("after splice:", spliceDemo);

// slice does not mutate: returns shallow copy of a section.
const sliceDemo = [10, 20, 30, 40, 50];
console.log("slice(1, 4):", sliceDemo.slice(1, 4));
console.log("slice(-2):", sliceDemo.slice(-2));
console.log("sliceDemo unchanged:", sliceDemo);

// ------------------
// Search and check
// ------------------
const fruits = ["apple", "banana", "mango", "banana"];
console.log("includes banana:", fruits.includes("banana"));
console.log("indexOf banana:", fruits.indexOf("banana"));
console.log("lastIndexOf banana:", fruits.lastIndexOf("banana"));

// find / findIndex return first match based on predicate.
const users = [
	{ id: 1, name: "A" },
	{ id: 2, name: "B" },
	{ id: 3, name: "C" },
];
console.log("find id=2:", users.find((u) => u.id === 2));
console.log("findIndex id=3:", users.findIndex((u) => u.id === 3));

// some/every are boolean checks over predicates.
const marks = [78, 92, 64, 88];
console.log("some >= 90:", marks.some((m) => m >= 90));
console.log("every >= 35:", marks.every((m) => m >= 35));

// ------------------
// Iteration styles
// ------------------
const iter = [100, 200, 300];

for (let i = 0; i < iter.length; i++) {
	console.log("for index/value:", i, iter[i]);
}

for (const value of iter) {
	console.log("for...of value:", value);
}

iter.forEach((value, index) => {
	console.log("forEach index/value:", index, value);
});

// keys, values, entries iterators.
for (const key of iter.keys()) {
	console.log("key:", key);
}

for (const value of iter.values()) {
	console.log("value:", value);
}

for (const [index, value] of iter.entries()) {
	console.log("entry:", index, value);
}

// ---------------------------
// Transforming array content
// ---------------------------
const base = [1, 2, 3, 4, 5];

const doubled = base.map((n) => n * 2);
const evens = base.filter((n) => n % 2 === 0);
const sum = base.reduce((acc, n) => acc + n, 0);
const rightConcat = ["a", "b", "c"].reduceRight((acc, ch) => acc + ch, "");

console.log("base:", base);
console.log("doubled:", doubled);
console.log("evens:", evens);
console.log("sum:", sum);
console.log("reduceRight concat:", rightConcat);

// flat and flatMap.
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat(1):", nested.flat(1));
console.log("flat(2):", nested.flat(2));

const words = ["hello", "js"];
const chars = words.flatMap((w) => w.split(""));
console.log("flatMap chars:", chars);

// -------------------------
// Joining and conversion
// -------------------------
const letters = ["J", "S", "Rocks"];
console.log("join(' '):", letters.join(" "));
console.log("toString():", letters.toString());

// String to array.
const csv = "red,green,blue";
console.log("split:", csv.split(","));

// -------------------------
// Combining and copying
// -------------------------
const p1 = [1, 2];
const p2 = [3, 4];
console.log("concat:", p1.concat(p2));
console.log("spread merge:", [...p1, ...p2, 5]);

// Shallow copy techniques.
const original = [{ x: 1 }, { x: 2 }];
const copy1 = original.slice();
const copy2 = [...original];
const copy3 = Array.from(original);

copy1[0].x = 999;
console.log("original after nested mutation:", original); // shows shallow copy behavior
console.log("copy2:", copy2);
console.log("copy3:", copy3);

// Deep copy for JSON-safe data.
const deepOriginal = [{ a: 1 }, { b: { c: 2 } }];
const deepCopy = structuredClone(deepOriginal);
deepCopy[1].b.c = 999;
console.log("deepOriginal:", deepOriginal);
console.log("deepCopy:", deepCopy);

// -------------------------
// Sorting and reversing
// -------------------------
const names = ["Zara", "Aman", "Ravi"];
console.log("names sort:", [...names].sort());

const points = [40, 100, 1, 5, 25, 10];
console.log("default sort:", [...points].sort()); // lexicographic sort
console.log("numeric asc:", [...points].sort((a, b) => a - b));
console.log("numeric desc:", [...points].sort((a, b) => b - a));

const reversed = [...points].reverse();
console.log("reversed:", reversed);

// New non-mutating alternatives in modern JS.
console.log("toSorted asc:", points.toSorted((a, b) => a - b));
console.log("toReversed:", points.toReversed());
console.log("toSpliced(2,1,999):", points.toSpliced(2, 1, 999));
console.log("with(0, 500):", points.with(0, 500));
console.log("points unchanged:", points);

// -------------------------
// fill and copyWithin
// -------------------------
const fillDemo = new Array(5).fill(0);
fillDemo.fill(7, 1, 4);
console.log("fillDemo:", fillDemo);

const copyWithinDemo = [1, 2, 3, 4, 5];
copyWithinDemo.copyWithin(0, 3); // copy from index 3 to index 0
console.log("copyWithinDemo:", copyWithinDemo);

// -------------------------
// Destructuring and rest
// -------------------------
const rgb = [255, 128, 64, 32, 16];
const [r, g, b, ...rest] = rgb;
console.log("r g b:", r, g, b);
console.log("rest:", rest);

// Swap variables with array destructuring.
let left = 10;
let right = 20;
[left, right] = [right, left];
console.log("swapped:", left, right);

// -------------------------
// Multi-dimensional arrays
// -------------------------
const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log("matrix[1][2]:", matrix[1][2]);

const transposed = matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
console.log("transposed:", transposed);

// -------------------------
// Handling duplicates
// -------------------------
const dupes = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(dupes)];
console.log("unique:", unique);

// Frequency map pattern.
const freq = dupes.reduce((acc, n) => {
	acc[n] = (acc[n] || 0) + 1;
	return acc;
}, {});
console.log("frequency:", freq);

// -------------------------
// Useful utility patterns
// -------------------------
function chunk(array, size) {
	const result = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
}

function range(start, end, step = 1) {
	const out = [];
	for (let value = start; value <= end; value += step) {
		out.push(value);
	}
	return out;
}

function groupBy(array, keyFn) {
	return array.reduce((acc, item) => {
		const key = keyFn(item);
		if (!acc[key]) acc[key] = [];
		acc[key].push(item);
		return acc;
	}, {});
}

console.log("chunk [1..10] size 3:", chunk(range(1, 10), 3));

const people = [
	{ name: "Aman", city: "Delhi" },
	{ name: "Riya", city: "Mumbai" },
	{ name: "Kunal", city: "Delhi" },
];
console.log("groupBy city:", groupBy(people, (p) => p.city));

// -------------------------
// Array holes vs undefined
// -------------------------
const withHoles = [1, , 3];
const withUndefined = [1, undefined, 3];

console.log("withHoles length:", withHoles.length);
console.log("withUndefined length:", withUndefined.length);

console.log("map on withHoles:", withHoles.map((x) => x * 2)); // skips empty slot
console.log("map on withUndefined:", withUndefined.map((x) => x * 2));

// -------------------------
// Typed arrays (brief)
// -------------------------
// Typed arrays are fixed-length, binary data arrays.
const int8 = new Int8Array([1, 2, 3, 256]);
console.log("Int8Array:", int8); // 256 wraps based on Int8 range

// End of Arrays notes.
