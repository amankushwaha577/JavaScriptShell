
const animal = { eats: true };
const rabbit = Object.create(animal);

console.log(rabbit.eats); // true

// 1. Object.create(obj) creates a new object with proto as its prototype.
// 2. rabbit inherits from animal but doesn’t copy its properties.




rabbit.jumps = true;

console.log(rabbit.hasOwnProperty("jumps")); // true
console.log(rabbit.hasOwnProperty("eats"));  // false

/*
a. rabbit is created using Object.create(animal), it inherits from animal, 
   meaning it doesn’t have a separate copy of animal's properties. Instead, it accesses them via prototype chaining.
b. The hasOwnProperty method checks if a property is directly on the object, not inherited.
*/
console.log(rabbit.eats); // true (inherited)

animal.eats = false; // Modifying the prototype object

console.log(rabbit.eats); // false (change reflected)






const grandparent = { grandparentProp: true };
const parent = Object.create(grandparent);
const child = Object.create(parent);

console.log(child.grandparentProp); // true


// Explanation:
// --------------
// 1. Objects look up properties in the prototype chain.
//    child → parent → grandparent.
// 2. parent, child don't have any property.