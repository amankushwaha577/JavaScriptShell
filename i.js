const animal = { eats: true };
const rabbit = Object.create(animal);

rabbit.eats = false; // This creates an own property on rabbit

console.log(rabbit.__proto__ === animal);
