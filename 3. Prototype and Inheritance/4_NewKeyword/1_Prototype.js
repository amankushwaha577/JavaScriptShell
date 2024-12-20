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

// 2.When new is not used:
// ----------------------------------
//    this refers to the global object (or undefined in strict mode).
//    No object is returned, so user3 becomes undefined.

const user3 = CreateUser("Hardik", 77);

console.log(user3) 
// undefined
console.log(user3.score); 
// Output: TypeError: Cannot read properties of undefined (reading 'score')