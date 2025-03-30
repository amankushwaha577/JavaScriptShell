/*
--------------------Amazing About Functions------------------------
1. Only For functions in JavaScript, the prototype property is used when the function is used as a constructor. 
   a. It allows you to define properties.
   b. And those methods/properties will be inherited by instances that are created by the new keyword.

2. By default, this prototype is an empty object ({}). */
function CreateUser(username, score){
    this.username = username
    this.score = score
}

CreateUser.prototype.increment = function(){
    // score++
    // ReferenceError: score is not defined
    // Avoid directly using variable names like score without referencing the instance, as this can lead to scope issues.
    this.score++; 
    // Use `this.score` to refer to the `score` property of the current instance
}

CreateUser.prototype.Score = function(){
    console.log(this.score);
}

console.log(CreateUser.prototype);
// Object With Appended Properties.
// Op: { increment: [Function (anonymous)], Score: [Function (anonymous)] }


// Test the implementation
const user1 = new CreateUser("Aman", 5); 
console.log(user1.score); // Output: 5

user1.increment();
console.log(user1.score); // Output: 6

// Test the implementation
const user2 = new CreateUser("AmanKushwah", 77);
console.log(user2.score); // Output: 77

user2.increment();
console.log(user2.score); // Output: 78







// Why the new Keyword is Necessary
// 1. When new is used:
// ----------------------------------
//    A new object is created.
//    this inside the constructor refers to the new object.
//    The new object is returned automatically.

// 2. If new is not used ( Interview ):
// ----------------------------------
//    this will refers to the global object (or undefined in strict mode).
//    + No object is returned, so user3 becomes undefined.

const user3 = CreateUser("Hardik", 77);

console.log(user3) 
// undefined
console.log(user3.score); 
// Output: TypeError: Cannot read properties of undefined (reading 'score')






// Points to Remember;;
// 1. When new keyword initiates a new Objects creates.
// 2. Newly created object gets liked to prototype property of constructor function.
//    It means it will have now acccess to all properties of Constructor function.
// 3. if constructor function does't return a non-primitive value(oject, array, function etc.)
//    the newly created object is returned.