const obj = {};
obj.__proto__ = { custom: "value" };

console.log(obj.custom); // "value"

// When you set __proto__ directly, it changes the inheritance. 
// { custom: "value" } is now parent who will provide the new properties { custom: "value" } to obj through inheritance.





const obj2 = {};
const __proto__ = { greeting: "hello" };

Object.setPrototypeOf(obj2, __proto__);
// The prototype of obj2 is dynamically set to proto.

console.log(obj2.greeting); // "hello"

// Object.setPrototypeOf(obj, proto) sets the prototype dynamically.