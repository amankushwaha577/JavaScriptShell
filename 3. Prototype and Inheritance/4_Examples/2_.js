// 2. Constructor Functions and prototype Property
// A constructor function creates objects using the new keyword. 
// Constructor functions have a prototype property that is shared among all objects created by them.

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  const john = new Person("John");
  john.sayHello(); // Hello, my name is John
  
  console.log(john.__proto__ === Person.prototype); // true


// A. Person.prototype is the shared object.
// B. Objects created using new Person() inherit methods from Person.prototype.
  