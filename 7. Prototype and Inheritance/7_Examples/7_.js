const obj = {};
const animal = { eats: true };

Object.setPrototypeOf(obj, animal);
// obj.__proto__ = animal

console.log(obj.eats);  // true

console.log(Object.getPrototypeOf(obj) === animal); // true
// console.log(obj.__proto__ === animal);