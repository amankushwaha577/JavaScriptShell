 let user = {
    name: "aman",
    sname:"kushwaha"
}

// 1. user.__proto__ => All Properties of Object.
//    -------------------------------------------
user.__proto__   ===  Array.prototype
// Whenever we create oject. It have prototype of Object



// 2. Every data type at the end further inherit properties from Object.prototype 
//    Function.prototype.__proto__    ===   Object.prototype  (true)
//    Boolean.prototype.__proto__     ===   Object.prototype  (true)
//    Object.prototype.__proto__      ===   null              (true)
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