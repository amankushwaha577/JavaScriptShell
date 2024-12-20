// Using Object.create() :
// The Object.create() method creates a new object with a specified prototype
const animal = {
  eats: true,
};

const rabbit = Object.create(animal); // new Object rabbit inherits properties from animal
rabbit.jumps = true;

console.log(rabbit.eats); // true (from animal)
console.log(rabbit.jumps); // true (own property)
