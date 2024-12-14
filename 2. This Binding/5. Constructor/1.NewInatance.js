function Person(name) {
    this.name = name;
  }
const p = new Person('Aman');
console.log(p.name);
  

// Output: 'Aman'

// Explanation: When a function is invoked with new, this refers to the new instance of the object being created.