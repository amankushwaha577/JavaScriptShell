class Person {
    constructor(name) {
      this.name = name;
    }
    getName() {
      console.log(this.name);
    }
  }
  const p = new Person('Aman');
  p.getName();
  console.log(p.name)
  console.log(p)
  

// Output: 'Aman'

// Explanation: Inside a class method, this refers to the instance of the class.