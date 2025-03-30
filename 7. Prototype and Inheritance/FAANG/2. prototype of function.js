function Person(name) {
    this.name = name;
  }
  
Person.prototype = { age: 30 };
  


const john = new Person("John");
 
console.log(john.age); // 30


// Explanation:
// ---------------
// Person.prototype ({} - initially) was replaced with a new object ({ age: 30 }).
// New instances like john inherit from the new prototype.


console.log(Person.prototype); // Op : { age: 30 }
console.log(john.__proto__);   // Op : { age: 30 }

  