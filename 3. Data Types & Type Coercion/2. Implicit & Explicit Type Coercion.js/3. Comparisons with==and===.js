/*
Rules for == (Loose Equality) vs === (Strict Equality) :
--------------------------------------------------------
a. == (loose equality) allows type coercion (converts types before comparing).
b. === (strict equality) does not allow type coercion (compares both value & type).

Few Notes :
----------
1. By specification (IEEE 754), NaN is not equal to any value, including itself.
2. typeof null is "object", but typeof undefined is "undefined".
3. According to JavaScript's specification, null is only loosely equal to undefined & itself and no other value (not even 0).
4.   null   ==  undefined  =>  is true, 
   KuchNahi ==   kuchNahi

   null === undefined is false.

*/


console.log(NaN === NaN); // Output: false
// NaN is not equal to itself. Use Number.isNaN() to check for NaN

console.log(NaN === NaN);  // false

console.log(Number.isNaN(NaN)); // true : NaN is also not a number.
// Number.isNaN(NaN): This method correctly checks if a value is NaN.


console.log(typeof null); // Output: "object"
// This is a historical bug in JavaScript. 
// null is not actually an object but is still identified as one due to its type tag.

console.log(typeof undefined); // Output: "undefined"



console.log(null == 0);          // false
// According to JavaScript's specification, null is only loosely equal to undefined & itself and no other value (not even 0).

console.log(null == null);       // true

console.log(null == undefined); //  true
// null and undefined are considered loosely equal when using ==.



console.log(null === undefined); // Output: false
// === checks for strict equality (no type coercion). 
// Since null and undefined are different types, the result is false.



// 2. Implicit Coercion Before Comparing :
// --------------------------------------

   console.log("5" == 5); // Output: true
   // The == operator performs type coercion, 
   // converting "5" to 5, so the comparison is 5 == 5.

   console.log("5" === 5); // Output: false
   // === does not perform type coercion, 
   // so the string "5" and the number 5 are not strictly equal.

   console.log([] == 0); // Output: true
   // [] (empty array) is coerced to an empty string "", 
   // which is then coerced to 0 for comparison with 0.

   console.log([] == ""); // Output: true
   // The empty array [] is coerced to an empty string ("") when compared with a string.
   // Since both sides are now empty strings, the comparison "" == "" evaluates to true.

   console.log(" \t\n" == 0); // Output: true
   // " \t\n" (whitespace characters) is coerced to an empty string "",
   //  which is then coerced to 0.



// 3. Weirdness with 0/1 and false/true :
// -------------------------------------
   console.log(0 == false);   // true
   // false is coerced to 0, so the comparison becomes 0 == 0, which is true.

   console.log(0 === false);  // false
   // Strict equality checks both type and value.
   // 0 (number) is not equal to false (boolean), so the result is false.

   console.log("0" == false); // true
   // "0" is coerced to a number (0), and false is coerced to 0, so the comparison becomes 0 == 0, which is true.

   console.log(true == "1");  // true
   console.log(true === "1"); // false
   console.log(true == "true"); // false
   
   console.log("" == false); // Output: true
   // "" (empty string) is a falsy value and is coerced to 0. 
   // false is also coerced to 0, so the comparison is 0 == 0.

   console.log(true == "true"); // Output: false
   // true is coerced to 1. 
   // "true" remains a string. 
   // Since 1 is not equal to "true", the result is false.




// 4. Comparing Infinity :
// ----------------------
   console.log(Infinity == Infinity);  // true
   console.log(Infinity === Infinity); // true
   // Infinity is a special numeric value that is equal to itself, even in strict equality.




// 5. Comparing Objects :
// ----------------------
   const obj1 = { a: 1 };
   const obj2 = { a: 1 };
   console.log(obj1 == obj2);  // false
   console.log(obj1 === obj2); // false
   // Objects are compared by reference, not by value.
   // Even if obj1 and obj2 have the same content, they are stored in different memory locations, so their references are not equal.



// 6. Comparing Arrays :
// ---------------------
   const arr1 = [1, 2, 3];
   const arr2 = [1, 2, 3];
   console.log(arr1 == arr2);  // false
   console.log(arr1 === arr2); // false
   console.log(arr1.toString() === arr2.toString()); // true

   // Explanation:
   // arr1 == arr2 and arr1 === arr2:
   // Arrays, like objects, are compared by reference.
   // Since arr1 and arr2 are different instances, their references are not equal.

   /*
   Que. Why does arr1 == arr2 and arr1 === arr2 return false, but arr1.toString() === arr2.toString() returns true?
   Ans. Objects (including arrays) are only equal if they reference the same object in memory.
         const arr1 = [1, 2, 3];
         const arr2 = arr1;  // arr2 now references the same array as arr1
         console.log(arr1 === arr2); // true (same reference)

      .toString() converts both arrays to their string representation:
         arr1.toString() → "1,2,3"
         arr2.toString() → "1,2,3"

      Since both strings "1,2,3" are **primitive values** and identical, strict equality (===) returns true. */



// 7. Empty Objects and Arrays :
// ---------------------------
   console.log([] == 0);        // true
   console.log({} == 0);        // false
   console.log([] == ![]);      // true ( Important)
   console.log(![] == 0);       // true

/*
      Explanation:
      [] == 0:
      The empty array is coerced to an empty string (""), which is then coerced to 0.

      {} == 0:
      Note : Objects are not coerced into numbers, so the result is false.

      [] == ![]:
      Here ! is used so Boolean context coersion will be applied.
      Any non-empty array is truthy, so [] is truthy.
      ![] evaluates to false( Since [] is truthy, applying ! flips it to false.)
      Now Boolean comparison is gone now apply number coercion,
      [] == false becomes [] == 0, and the empty array is coerced to 0, so the result is true.

      Falsy Values in JavaScript: These values are considered false when used in a Boolean context.
                                  Apart from them everthing is truthy.
      -----------------------------------------------
      Value            Explanation
      ------------------------------------------------
      false           Boolean false
      0               Number zero (also -0, 0n for BigInt)
      ""              Empty string ('' or "" or ` `)
      null            Absence of value
      undefined       Variable with no assigned value
      NaN             "Not-a-Number" (result of invalid math operations)
      document.all    A weird legacy value in browsers (treated as undefined)
      

      // ![] == 0:
      // ![] evaluates to false, which is coerced to 0, so the comparison is 0 == 0, which is true. */

      



// 8. Comparing Functions :
// -------------------------
   function a() {}
   function b() {}

   console.log(a == b);   // false
   console.log(a === b);  // false

   // Explanation:
   // Functions, like objects, are compared by reference.
   // a and b are two different instances, so they are not equal.



// 9. Objects Converted to Strings :
// ---------------------------------
   const obj = { a: 1 };
   console.log(obj == "[object Object]");  // true

   // Explanation:
   // When comparing an object to a string, the object is coerced to its string representation using .toString(), 
   // which for most objects is "[object Object]".





// 10. +0 and -0
   console.log(+0 === -0);  // true
   console.log(Object.is(+0, -0)); // false

   // Explanation:
   // +0 === -0:
   // In JavaScript, +0 and -0 are considered equal in == and ===.

   // Object.is(+0, -0):
   // Object.is is stricter and can distinguish between +0 and -0.




// 11. Primitive Wrappers :
// -----------------------
   console.log(new String("test") == "test");  // true
   console.log(new String("test") === "test"); // false

   // Explanation:
   // ==: The string object is coerced to its primitive value ("test"), so the comparison is true.
   // ===: Strict equality fails because one is an object and the other is a string.



   console.log(Boolean(0));  // Output: false
   console.log(Boolean(""));  // Output: false