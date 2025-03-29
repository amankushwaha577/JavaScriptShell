// Object.create(obj) creates a new object with proto as its prototype.
const animal = { eats: true };
const rabbit = Object.create(animal);

console.log(rabbit.eats); // true

// rabbit inherits from animal but doesn’t copy its properties.