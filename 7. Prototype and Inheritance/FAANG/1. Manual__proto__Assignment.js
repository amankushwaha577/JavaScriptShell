const animal = { eats: true };
const rabbit = { jumps: true };

rabbit.__proto__ = animal;


console.log(rabbit.jumps); // true - Normal
console.log(rabbit.eats);  // true - Using Inheritance


// When you set __proto__ manually to any Object, setted object becomes parent that can provide data through inheritance.

// Explanation:
// ------------
// rabbit.jumps: Exists directly on rabbit.
// rabbit.eats:  Looked up the prototype chain (animal).
