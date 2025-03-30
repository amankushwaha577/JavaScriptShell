// Object.create(obj) creates a new object with proto as its prototype.
const animal = { eats: true };
const rabbit = Object.create(animal);

console.log(rabbit.eats); // true

// rabbit inherits from animal but doesn’t copy its properties.





rabbit.jumps = true;

console.log(rabbit.hasOwnProperty("jumps")); // true
console.log(rabbit.hasOwnProperty("eats")); // false



// The hasOwnProperty method checks if a property is directly on the object, not inherited.