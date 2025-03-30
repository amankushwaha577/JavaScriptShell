function Animal() {
  this.eats = true;
}

function Rabbit() {
  this.jumps = true;
}

Rabbit.prototype = new Animal(); // Inherit from Animal

const bunny = new Rabbit();
console.log(bunny.eats); // true (inherited)
console.log(bunny.jumps); // true (own property)


// Using Constructor Functions : -
// Constructor functions with the prototype property can simulate inheritance.
