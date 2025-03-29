const animal = { eats: true };
const rabbit = { jumps: true };

rabbit.__proto__ = animal;

console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true


// When you set __proto__ manually, it defines inheritance for that object.

// Explanation:
// ------------
// rabbit.eats: Looked up the prototype chain (animal).
// rabbit.jumps: Exists directly on rabbit.