// Setting __proto__ to null removes inheritance.
const obj = {name:"aman"};
obj.__proto__ = null;

console.log(obj.name); // aman
console.log(obj.toString); // undefined


// Explanation:
// -------------
// toString is normally inherited from Object.prototype.
// With __proto__ = null, the inheritance chain is broken.
