const obj = {};
obj.__proto__ = { custom: "value" };

console.log(obj.custom); // "value"


// When you set __proto__ directly, it changes the inheritance.

// obj now inherits from the new prototype { custom: "value" }.
