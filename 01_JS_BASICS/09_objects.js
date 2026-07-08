// ================================================
// JavaScript Object Destructuring + JSON/API Notes
// ================================================

// --------------------------------
// 1) Object Destructuring Basics
// --------------------------------
const user = {
id: 101,
name: "Aman",
email: "aman@example.com",
isActive: true,
};

const { id, name, email, isActive } = user;
console.log("basic destructuring:", id, name, email, isActive);

// Rename variables while destructuring.
const { name: fullName, email: userEmail } = user;
console.log("renamed:", fullName, userEmail);

// Default values apply only when property is undefined.
const { role = "guest", city = "Delhi" } = user;
console.log("defaults:", role, city);

// --------------------------------
// 2) Nested Destructuring
// --------------------------------
const profile = {
username: "riya",
stats: {
followers: 1200,
following: 180,
},
address: {
city: "Mumbai",
pin: 400001,
},
};

const {
stats: { followers, following },
address: { city: currentCity, pin },
} = profile;

console.log("nested:", followers, following, currentCity, pin);

// Destructure safely with fallback object.
const maybeData = { settings: null };
const { theme = "light" } = maybeData.settings ?? {};
console.log("safe nested default:", theme);

// --------------------------------
// 3) Rest Properties in Objects
// --------------------------------
const product = {
productId: 7,
title: "Keyboard",
price: 1499,
brand: "KeyPro",
inStock: true,
};

const { productId, title, ...productMeta } = product;
console.log("picked:", productId, title);
console.log("rest object:", productMeta);

// --------------------------------
// 4) Destructuring in Function Params
// --------------------------------
function printUser({ id, name, role = "user" }) {
console.log("user summary:", id, name, role);
}

printUser({ id: 1, name: "Kunal", role: "admin" });
printUser({ id: 2, name: "Rohit" });

function createOrder({ item, qty = 1, coupon = null } = {}) {
return { item, qty, coupon };
}

console.log("createOrder:", createOrder({ item: "Mouse", qty: 2 }));
console.log("createOrder with empty:", createOrder());

// --------------------------------
// 5) Array + Object Destructuring Together
// --------------------------------
const apiUsers = [
{ id: 11, name: "A" },
{ id: 12, name: "B" },
{ id: 13, name: "C" },
];

const [firstUser, secondUser] = apiUsers;
const { id: firstId, name: firstName } = firstUser;
console.log("array+object:", firstId, firstName, secondUser);

// Destructure in loops.
for (const { id, name } of apiUsers) {
console.log("loop destructure:", id, name);
}

// --------------------------------
// 6) Common Destructuring Patterns
// --------------------------------
// Swap variables.
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log("swapped:", a, b);

// Pick selected keys.
const settings = { mode: "dark", lang: "en", pageSize: 20 };
const { mode, pageSize } = settings;
console.log("picked keys:", mode, pageSize);

// Dynamic key extraction using bracket access (not direct destructuring syntax).
const key = "lang";
const dynamicValue = settings[key];
console.log("dynamic key value:", dynamicValue);

// --------------------------------
// 7) JSON Basics
// --------------------------------
// JSON supports: object, array, string, number, boolean, null.
// JSON requires double-quoted keys/strings and has no functions/undefined/symbol.

const jsonText = '{"id":1,"name":"Aman","active":true,"skills":["js","node"],"meta":null}';
const parsedJson = JSON.parse(jsonText);
console.log("parsed JSON:", parsedJson);

const jsObject = {
id: 5,
name: "Riya",
active: true,
tags: ["frontend", "react"],
};

const jsonString = JSON.stringify(jsObject);
console.log("stringified JSON:", jsonString);

// Pretty JSON output for logs/files.
console.log("pretty JSON:\n", JSON.stringify(jsObject, null, 2));

// --------------------------------
// 8) JSON.stringify Deep Concepts
// --------------------------------
const payload = {
id: 10,
name: "Kunal",
password: "secret123",
createdAt: new Date("2026-07-08T00:00:00Z"),
score: NaN,
infinite: Infinity,
nothing: undefined,
action: () => "run",
};

// Replacer array includes only selected keys.
const limited = JSON.stringify(payload, ["id", "name", "createdAt"], 2);
console.log("replacer array:\n", limited);

// Replacer function transforms or filters values.
const sanitized = JSON.stringify(
payload,
(key, value) => {
if (key === "password") return undefined; // remove secret
if (typeof value === "number" && !Number.isFinite(value)) return null;
return value;
},
2
);
console.log("sanitized JSON:\n", sanitized);

// toJSON customizes serialization.
const event = {
title: "Launch",
date: new Date("2026-08-01T10:00:00Z"),
toJSON() {
return {
title: this.title,
date: this.date.toISOString(),
};
},
};
console.log("custom toJSON:", JSON.stringify(event));

// --------------------------------
// 9) JSON.parse Reviver
// --------------------------------
const orderText = '{"id":99,"total":1200,"orderedAt":"2026-07-08T12:00:00.000Z"}';

const order = JSON.parse(orderText, (key, value) => {
if (key === "orderedAt") return new Date(value);
return value;
});

console.log("revived order:", order);
console.log("orderedAt is Date:", order.orderedAt instanceof Date);

// --------------------------------
// 10) JSON and API Response Handling
// --------------------------------
const apiResponseText = `{
"status": "success",
"message": "Users fetched",
"data": [
{ "id": 1, "name": "Aman", "email": "aman@example.com" },
{ "id": 2, "name": "Riya", "email": "riya@example.com" }
],
"meta": {
"page": 1,
"pageSize": 2,
"total": 10
}
}`;

const apiResponse = JSON.parse(apiResponseText);
const {
status,
message,
data,
meta: { page: apiPage, pageSize: apiPageSize, total: apiTotal },
} = apiResponse;

console.log("api envelope:", status, message, apiPage, apiPageSize, apiTotal);

for (const { id, name, email } of data) {
console.log("api user:", id, name, email);
}

// --------------------------------
// 11) Building JSON Request Body
// --------------------------------
function createUserRequestBody({ name, email, password, role = "user" }) {
return JSON.stringify({ name, email, password, role });
}

const requestBody = createUserRequestBody({
name: "Neha",
email: "neha@example.com",
password: "Strong@123",
});
console.log("requestBody:", requestBody);

// --------------------------------
// 12) Safe JSON Parse Utility
// --------------------------------
function safeJsonParse(text, fallback = null) {
try {
return JSON.parse(text);
} catch {
return fallback;
}
}

console.log("safe parse valid:", safeJsonParse('{"ok":true}'));
console.log("safe parse invalid:", safeJsonParse("{invalid}", { ok: false }));

// --------------------------------
// 13) API Error Shape Handling Pattern
// --------------------------------
const errorResponseText = '{"status":"error","error":{"code":"INVALID_INPUT","details":"Email is invalid"}}';
const errorResponse = JSON.parse(errorResponseText);

const {
status: errorStatus,
error: { code: errorCode, details: errorDetails } = {},
} = errorResponse;

console.log("error shape:", errorStatus, errorCode, errorDetails);

// --------------------------------
// 14) Pagination + Normalization Pattern
// --------------------------------
function normalizeUsers(response) {
const {
data = [],
meta: { page = 1, pageSize = 10, total = 0 } = {},
} = response;

const byId = Object.fromEntries(data.map((u) => [u.id, u]));
const allIds = data.map((u) => u.id);

return {
byId,
allIds,
pagination: { page, pageSize, total },
};
}

console.log("normalized:", normalizeUsers(apiResponse));

// --------------------------------
// 15) Important JSON Limits
// --------------------------------
// 1) Circular references throw in JSON.stringify.
const circular = { name: "circle" };
circular.self = circular;
try {
JSON.stringify(circular);
} catch (error) {
console.log("circular error:", error.message);
}

// 2) BigInt is not directly serializable in JSON.
try {
JSON.stringify({ big: 10n });
} catch (error) {
console.log("bigint error:", error.message);
}

// 3) Date becomes string in JSON, restore manually with reviver.
const dateJson = JSON.stringify({ at: new Date("2026-01-01T00:00:00Z") });
const plain = JSON.parse(dateJson);
console.log("date after parse type:", typeof plain.at);

// --------------------------------
// 16) Simulated fetch-style flow (no network)
// --------------------------------
async function mockFetchUsers() {
return {
ok: true,
status: 200,
json: async () => ({
status: "success",
data: [
{ id: 1, name: "Aman" },
{ id: 2, name: "Riya" },
],
}),
};
}

async function getUsers() {
const response = await mockFetchUsers();
if (!response.ok) {
throw new Error(`HTTP ${response.status}`);
}

const body = await response.json();
const {
status,
data,
} = body;

if (status !== "success") {
throw new Error("API status is not success");
}

return data;
}

getUsers()
.then((users) => console.log("mock fetch users:", users))
.catch((error) => console.log("mock fetch error:", error.message));

// End of object destructuring + JSON/API notes.
