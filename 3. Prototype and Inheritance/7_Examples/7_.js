const obj = {};
const animal = { eats: true };

Object.setPrototypeOf(obj, animal);
console.log(Object.getPrototypeOf(obj) === animal); // true
