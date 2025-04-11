/*
1. Optional Chaining (?.) :
--------------------------
    Safely access deeply nested properties without worrying about errors if a property is undefined or null. 
    
    🔹 Syntax: object?.property
    🔹 Can be used with arrays, functions, and nested objects. */

/* Ex1 – Accessing existing nested property */
const user1 = { name: "Alice", address: { city: "Zagreb" } };
console.log(user1.address?.city);  // "Zagreb" ✅

/* Ex2 – Accessing non-existent nested property  */
console.log(user1.profile?.age);   /* undefined ✅ (no error thrown) 

        a. Access user1.profile:
        -----------------------
        user1 exists ✅
        profile does not exist → undefined

        b. Optional chaining check (?.):
        -------------------------------
        Since user1.profile is undefined, JavaScript stops right there ✅
        undefined?. => Stop✅

        c. It does NOT try to access .age (because that would throw an error normally).

        Result: The expression returns undefined safely (instead of error). */

        
// Example 3 – Optional chaining with function calls
const user2 = {
    greet: () => "Hello"
};

console.log(user2.greet?.());     // "Hello" ✅
console.log(user2.sayBye?.());    // undefined ✅ (no error)

// Example 4 – Optional chaining with arrays
const data = { items: [10, 20, 30] };
console.log(data.items?.[1]);     // 20 ✅
console.log(data.list?.[0]);      // undefined ✅ (no error)


/* 
2. Nullish Coalescing (??) :
----------------------------
    Returns the right-hand operand only if the left-hand operand is null or undefined. */ 

const value = null ?? "default";
console.log(value); // Output: "default"

const value2 = 0 ?? "default";
console.log(value2); // Output: 0 (not nullish)


