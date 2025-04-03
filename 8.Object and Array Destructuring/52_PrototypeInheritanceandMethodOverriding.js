function Parent() {
    this.greet = function () {
      return "Hello from Parent!";
    };
  }
  Parent.prototype.sayGoodbye = function () {
    return "Goodbye from Parent!";
  };
  
  function Child() {
    this.greet = function () {
      return "Hello from Child!";
    };
  }
  Child.prototype = Object.create(Parent.prototype);
  const child = new Child();
  
  console.log(child.greet()); // Output: Hello from Child!
  console.log(child.sayGoodbye()); // Output: Goodbye from Parent!


// Explanation:

// 1. Prototype Inheritance: Child.prototype = Object.create(Parent.prototype) establishes the prototype chain, 
//    allowing Child instances to inherit methods from Parent.
// 2. Method Overriding: The greet method in Child overrides the one inherited from Parent 
//    because it’s defined on the instance itself.




class Animal {
    speak() {
      return "Animal speaks";
    }
  }
  
  class Dog extends Animal {
    speak() {
      return "Dog barks";
    }
  }
  
  const dog = new Dog();
  console.log(dog.speak()); // Output: Dog barks

//   Explanation:

//   Class Syntax: The Dog class extends Animal using the extends keyword.
//   Method Overriding: The speak method in Dog overrides the one in Animal.
  
  