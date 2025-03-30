const obj = {};
obj.__proto__ = { custom: "value" };

console.log(obj.custom); // "value"


// When you set __proto__ directly, it changes the inheritance. 
// { custom: "value" } is now parent who will provide the new prototype { custom: "value" } to obj through inheritance.
