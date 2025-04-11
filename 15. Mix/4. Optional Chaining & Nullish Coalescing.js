/*
1. Optional Chaining (?.) :
--------------------------
    Safely access deeply nested properties without worrying about errors if a property is undefined or null. */

const user = { name: "Alice", address: { city: "Zagreb" } };
console.log(user.address?.city); // Output: "Zagreb"
console.log(user.profile?.age); // Output: undefined (no error)


/* 
2. Nullish Coalescing (??) :
----------------------------
    Returns the right-hand operand only if the left-hand operand is null or undefined. */ 

const value = null ?? "default";
console.log(value); // Output: "default"

const value2 = 0 ?? "default";
console.log(value2); // Output: 0 (not nullish)


