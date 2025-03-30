const obj = {};
const proto = { greeting: "hello" };

Object.setPrototypeOf(obj, proto);
// The prototype of obj is dynamically set to proto.

console.log(obj.greeting); // "hello"



// Object.setPrototypeOf(obj, proto) sets the prototype dynamically.
