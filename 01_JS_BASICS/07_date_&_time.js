// ==================================
// JavaScript Date and Time Notes
// ==================================

// Date stores milliseconds since Unix epoch (1970-01-01T00:00:00.000Z).
const now = new Date();
console.log("now:", now);
console.log("timestamp (ms):", now.getTime());
console.log("Date.now() (ms):", Date.now());

// ----------------------
// Creating Date objects
// ----------------------

// 1) Current date/time.
const d1 = new Date();

// 2) From timestamp in milliseconds.
const d2 = new Date(0);
const d3 = new Date(1_000_000_000_000);

// 3) From date string (ISO 8601 preferred).
const d4 = new Date("2026-07-08T12:30:00Z"); // UTC time
const d5 = new Date("2026-07-08"); // interpreted as UTC midnight in modern engines

// 4) From components: year, monthIndex (0-based), day, hour, minute, second, ms.
const d6 = new Date(2026, 6, 8, 17, 45, 30, 250); // local time zone, month 6 = July

console.log("d1:", d1);
console.log("d2:", d2);
console.log("d3:", d3);
console.log("d4:", d4);
console.log("d5:", d5);
console.log("d6:", d6);

// ----------------------
// Validating Date values
// ----------------------
const invalid = new Date("not-a-date");
console.log("invalid:", invalid);
console.log("is valid:", !Number.isNaN(invalid.getTime()));

// --------------------
// Date to string forms
// --------------------
console.log("toString():", now.toString()); // local readable string
console.log("toDateString():", now.toDateString());
console.log("toTimeString():", now.toTimeString());
console.log("toISOString():", now.toISOString()); // UTC standardized string
console.log("toUTCString():", now.toUTCString());
console.log("toJSON():", now.toJSON()); // usually same as toISOString

// Locale-sensitive formatting.
console.log("toLocaleString('en-IN'):", now.toLocaleString("en-IN"));
console.log(
	"toLocaleDateString('en-GB'):",
	now.toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
);
console.log(
	"toLocaleTimeString('en-US'):",
	now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })
);

// ---------------------------
// Intl.DateTimeFormat (best)
// ---------------------------
const formatter = new Intl.DateTimeFormat("en-IN", {
	dateStyle: "full",
	timeStyle: "long",
	timeZone: "Asia/Kolkata",
});
console.log("Intl formatted:", formatter.format(now));

// formatToParts gives tokens for custom UI formatting.
const parts = formatter.formatToParts(now);
console.log("formatToParts:", parts.map((p) => `${p.type}:${p.value}`).join(" | "));

// ------------------------------
// Local getters (based on system)
// ------------------------------
console.log("getFullYear():", now.getFullYear());
console.log("getMonth():", now.getMonth()); // 0-based
console.log("getDate():", now.getDate()); // day of month
console.log("getDay():", now.getDay()); // 0=Sun ... 6=Sat
console.log("getHours():", now.getHours());
console.log("getMinutes():", now.getMinutes());
console.log("getSeconds():", now.getSeconds());
console.log("getMilliseconds():", now.getMilliseconds());
console.log("getTimezoneOffset():", now.getTimezoneOffset()); // minutes difference from UTC

// -------------------
// UTC getters
// -------------------
console.log("getUTCFullYear():", now.getUTCFullYear());
console.log("getUTCMonth():", now.getUTCMonth());
console.log("getUTCDate():", now.getUTCDate());
console.log("getUTCDay():", now.getUTCDay());
console.log("getUTCHours():", now.getUTCHours());
console.log("getUTCMinutes():", now.getUTCMinutes());
console.log("getUTCSeconds():", now.getUTCSeconds());

// -------------------
// Setters (mutating)
// -------------------
const mutable = new Date("2026-01-15T10:30:00");
mutable.setFullYear(2027);
mutable.setMonth(11); // December
mutable.setDate(31);
mutable.setHours(23, 59, 59, 999);
console.log("after local setters:", mutable);

const mutableUtc = new Date("2026-01-15T10:30:00Z");
mutableUtc.setUTCFullYear(2027);
mutableUtc.setUTCMonth(11);
mutableUtc.setUTCDate(31);
mutableUtc.setUTCHours(23, 59, 59, 999);
console.log("after UTC setters:", mutableUtc.toISOString());

// Overflow behavior is often useful.
const overflow = new Date(2026, 0, 32); // Jan 32 rolls to Feb 1
console.log("overflow date:", overflow.toDateString());

// --------------------------
// Parsing and static helpers
// --------------------------
console.log("Date.parse('2026-07-08T00:00:00Z'):", Date.parse("2026-07-08T00:00:00Z"));
console.log("Date.UTC(2026, 6, 8):", Date.UTC(2026, 6, 8)); // returns timestamp (ms)

// ---------------------------
// Comparing Date instances
// ---------------------------
const a = new Date("2026-07-08T10:00:00Z");
const b = new Date("2026-07-08T12:00:00Z");

console.log("a < b:", a < b);
console.log("a.getTime() === b.getTime():", a.getTime() === b.getTime());
console.log("difference in ms:", b - a);
console.log("difference in hours:", (b - a) / (1000 * 60 * 60));

// -------------------------
// Practical utility methods
// -------------------------
function addDays(date, days) {
	const copy = new Date(date);
	copy.setDate(copy.getDate() + days);
	return copy;
}

function addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes * 60 * 1000);
}

function startOfDay(date) {
	const copy = new Date(date);
	copy.setHours(0, 0, 0, 0);
	return copy;
}

function endOfDay(date) {
	const copy = new Date(date);
	copy.setHours(23, 59, 59, 999);
	return copy;
}

function daysBetween(date1, date2) {
	const msPerDay = 1000 * 60 * 60 * 24;
	const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
	const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
	return Math.floor((utc2 - utc1) / msPerDay);
}

function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function pad2(value) {
	return String(value).padStart(2, "0");
}

function formatYYYYMMDD(date) {
	return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

console.log("addDays(now, 7):", addDays(now, 7));
console.log("addMinutes(now, 90):", addMinutes(now, 90));
console.log("startOfDay(now):", startOfDay(now));
console.log("endOfDay(now):", endOfDay(now));
console.log("daysBetween(2026-01-01, 2026-01-10):", daysBetween(new Date("2026-01-01"), new Date("2026-01-10")));
console.log("isLeapYear(2024):", isLeapYear(2024));
console.log("isLeapYear(2100):", isLeapYear(2100));
console.log("formatYYYYMMDD(now):", formatYYYYMMDD(now));

// -------------------------------
// Unix timestamp conversions
// -------------------------------
const nowMs = Date.now();
const nowSeconds = Math.floor(nowMs / 1000);
console.log("epoch ms:", nowMs);
console.log("epoch sec:", nowSeconds);
console.log("from seconds:", new Date(nowSeconds * 1000));

// -------------------------------
// Time zone display examples
// -------------------------------
const tzDate = new Date("2026-07-08T12:00:00Z");
console.log(
	"UTC:",
	tzDate.toLocaleString("en-US", { timeZone: "UTC", dateStyle: "full", timeStyle: "long" })
);
console.log(
	"Asia/Kolkata:",
	tzDate.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "long" })
);
console.log(
	"America/New_York:",
	tzDate.toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "full", timeStyle: "long" })
);

// -------------------------------
// Performance timing notes
// -------------------------------
// Date.now() is coarse for elapsed time; performance.now() is better for benchmarks in browsers.
const t1 = Date.now();
for (let i = 0; i < 1_000_000; i++) {
	// intentional empty loop for timing example
}
const t2 = Date.now();
console.log("elapsed ms with Date.now():", t2 - t1);

// End of Date and Time notes.
