 let user = {
    name: "aman",
    sname:"kushwaha"
}

// 1. user.__proto__ => All Properties of Object.
//    -------------------------------------------
user.__proto__   ===  Object.prototype
// Whenever we create oject. It have prototype of Object



// 2. Every data type at the end further inherit properties from Object.prototype 
//    Function.prototype.__proto__    ===   Object.prototype  (true)
//    Boolean.prototype.__proto__     ===   Object.prototype  (true)
//    Object.prototype.__proto__      ===   null              (true)    // Object dont have further parent
//    It's called prototype chaining.



let arr1 = [1,2,3];
arr1.__proto__   ===  Array.prototype
// Whenever we create array. It have prototype of Array

arr1.__proto__                         // => Points to Array.prototype
arr1.__proto__.__proto__               // => points to Object.prototype
arr1.__proto__.__proto__.__proto__     // => points to null

arr1.__proto__                       ===    Array.prototype            
arr1.__proto__.__proto__             ===    Object.prototype    
arr1.__proto__.__proto__.__proto__   ===    null 



// ----------------------------------
// JS have prototypical behavior it seraches properties from lower layer to upper layer until it found null
// this keyword, classes and prototypical behaviour work on it.






function multiplyBy5(num){
    return num*5
}

// Functions are also objects.
multiplyBy5.power = 2;

console.log(multiplyBy5(5));    // 25
console.log(multiplyBy5.power); // 2

console.log(multiplyBy5.prototype); // op: {} // It's "this" of multiplyBy5.prototype 
console.log(arr1.prototype); // undefined
console.log(user.prototype); // undefined




/*
--------------------Amazing About Functions------------------------
1. Only For functions in JavaScript, the prototype property is used when the function is used as a constructor. 
   a. It allows you to define properties.
   b. And those methods/properties will be inherited by instances that are created by the new keyword.

2. By default, this prototype is an empty object ({}). */

      multiplyBy5.prototype.description = "Multiplies a number by 5";
      console.log(multiplyBy5.prototype); 
//    Output: { description: 'Multiplies a number by 5' }


// 1. arr1.prototype is undefined because custom arrays do not have a prototype property directly; they inherit from Array.prototype.
      console.log(arr1.prototype);
//    Output: undefined


