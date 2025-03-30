const obj = {};
obj.__proto__ = { custom: "value" };

console.log(obj.custom); // "value"

// When you set __proto__ directly, it changes the inheritance. 
// { custom: "value" } is now parent who will provide the new properties { custom: "value" } to obj through inheritance.




// Object.setPrototypeOf(obj, proto) sets the prototype dynamically.

const obj2 = {};
const animal = { eats: true };

Object.setPrototypeOf(obj, animal);
// obj2.__proto__ = animal
// The prototype of obj2 is dynamically set to animal.

console.log(obj2.eats);  // true

console.log(Object.getPrototypeOf(obj2) === animal); // true
// console.log(obj2.__proto__ === animal);