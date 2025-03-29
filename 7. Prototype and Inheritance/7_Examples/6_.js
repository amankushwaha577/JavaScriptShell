const animal = { eats: true };
const rabbit = Object.create(animal);

rabbit.eats = false; // Own property shadows prototype

console.log(rabbit.eats); // false
console.log(animal.eats); // true
