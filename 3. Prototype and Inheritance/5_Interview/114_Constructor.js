function Animal() {
    this.isAnimal = true;
  }
  
  Animal.prototype.walk = function () {
    console.log("Walking...");
  };
  
  const dog = new Animal();
  dog.walk(); // "Walking..."
  


// A constructor function initializes an object, and methods on prototype are shared by all instances.

// Explanation:
// ------------
// walk is inherited from Animal.prototype.