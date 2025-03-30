function Animal() {}
const dog = new Animal();

console.log(dog.__proto__ === Animal.prototype); // true

// __proto__ of new instance's is set to the prototype of the constructor that created it.
