const animal = { eats: true };
const rabbit = Object.create(animal);

rabbit.eats = false; // This creates an own property on rabbit

console.log(rabbit.eats); // false (own property)
console.log(animal.eats); // true (prototype remains unchanged)

console.log(rabbit.hasOwnProperty("eats")); // true
console.log(animal.hasOwnProperty("eats")); // true

/*
1. Here we have not modified property of animal.

2. If we create *same* property in object, it shadows (overrides) the inherited property from the prototype.
   Actually shadow property creates an own property on rabbit.

3. The prototype’s value remains unchanged unless modified directly (animal.eats = false;).  
   console.log(rabbit.__proto__ === animal); -> true.
*/