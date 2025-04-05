// 1. typeof Quirks :
// The typeof operator returns a string indicating the type of its operand. While straightforward, it has quirks:

console.log(typeof null); // "object" (quirk)
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
console.log(typeof NaN); // "number" (quirk)

// Key Notes:
// A. null returns "object" because of a historical bug in JavaScript.
// B. Arrays return "object", not "array". Use Array.isArray([]) for arrays.
// C. typeof NaN is "number", though it means "Not-a-Number".


