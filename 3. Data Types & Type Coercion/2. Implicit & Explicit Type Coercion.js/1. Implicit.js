// 1.Implicit (Type Coercion): JavaScript automatically converts one data type to another.
// 2.Explicit: The developer explicitly converts the data type.


/* 
A. Arithmetic Operator :
------------------------ */

console.log("5" - 3); // Output: 2
/*
a. Rule: The - operator expects numeric operands.
b. "5" is a string. so "5" is implicitly coerced into the number 5.
c.  5 - 3 = 2.  */


console.log("5" + 3); // Output: "53"
/*
A. Rule: The + operator is used for both addition and string concatenation. 
         If any one of the operand is a string, JavaScript coerces the other operand to a string.
B. "5" + "3" = "53". 
    
    Note : If both were number result would be number.*/


console.log(true + false); // Output: 1
/* 
a. Rule: When performing arithmetic operations (+, -, *, /), Boolean values are automatically coerced to numbers.
         true is coerced to 1, and false to 0.
b. 1 + 0 = 1. */


console.log(null + 1); // Output: 1
/*
a. Rule: When performing arithmetic operations (+, -, *, /), null is coerced to 0(number)
b. so 0 + 1 = 1. */


console.log(undefined + 1); // Output: NaN
/*
a. Rule: When performing arithmetic operations (+, -, *, /), undefined is coerced to NaN. */



// Arrays :
// --------

console.log([] + []); // Output: ""
/*
a. Rule: When performing arithmetic operations (+, -, *, /), empty arrays[] are coerced to empty strings "" 
b. Both arrays are coerced to empty strings "", 
   so the result is string concatenation: "" + "" = "". */

        console.log([] + 1);   // "1"  
        // [].toString() → "" 
        // "" + 1 → "1" (String concatenation)
        
        console.log([] + 2);   // "2"  
        // [].toString() → ""
        // "" + 2 → "2"
        
        console.log([] + []);   // ""  
        // [].toString() → ""
        // "" + "" → ""
        
        console.log([5] + [2]);   // "52"  
        // [5].toString() → "5"
        // [2].toString() → "2"
        // "5" + "2" → "52" (String concatenation)
        
        console.log([10] + 5);   // "105"  
        // [10].toString() → "10"
        // "10" + 5 → "105" (String concatenation)
        
        console.log(["10"] + 2);   // "102"  
        // ["10"].toString() → "10"
        // "10" + 2 → "102"
        
        console.log([1, 2, 3] + [4, 5, 6]);   // "1,2,34,5,6"  
        // [1,2,3].toString() → "1,2,3"
        // [4,5,6].toString() → "4,5,6"
        // "1,2,3" + "4,5,6" → "1,2,34,5,6" (String concatenation)
        
        console.log([null] + [null]);   // "nullnull"  
        // [null].toString() → "null"
        // [null].toString() → "null"
        // "null" + "null" → "nullnull"
        
        console.log([] + undefined);   // "undefined"  
        // [].toString() → ""
        // "" + "undefined" → "undefined"
        
        console.log([] + {});   // "[object Object]"  
        // [].toString() → ""
        // {}.toString() → "[object Object]"   (Keep It Remember)
        // "" + "[object Object]" → "[object Object]"
        
        console.log([1] + {});   // "1[object Object]"  
        // [1].toString() → "1"
        // {}.toString() → "[object Object]"
        // "1" + "[object Object]" → "1[object Object]"
        

console.log([] - []); // Output: 0
/*
a. Rule: When performing arithmetic operations (+, -, *, /), empty arrays[] are coerced to empty strings ""
         But Things don't stop here.
          - triggers numeric coercion, unlike +, which prefers strings. - prefers Numeric operands.
b. Both arrays are first coerced to empty strings "", 
   than empty string coerced to 0 */

        console.log([] - 1);   // -1   
        // [] => ""   
        // Number("") => 0
        // so 0 - 1 = -1

        console.log([] * 2);   // 0    
        // [] => "" 
        // Number("") = 0, 
        // so 0 * 2 =  0

        console.log([] / 2);   // 0 
        // [] => ""    
        // Number("") = 0, 
        // so 0 / 2 = 0

        console.log([5] - [2]); // 3   
        // - Operator always expacts Numbers so convert operand in numbers
        // [5].toString() => "5"
        // Number("5") → 5, 
        // [2].toString() => "2"
        // Number("2") → 2,  
        // so 5 - 2 = 3

        console.log([10] - 5); // 5  
        // [10].toString() => "10"
        // Number("10") → 10,   
        // so 10 - 5 = 5

        console.log(["10"] - 2); // 8  
        // ["10"].toString() => "10"
        // Number("10") → 10,   
        // so 10 - 2 = 8
        
        console.log([1, 2, 3] - [4, 5, 6]); // NaN  (Multi-element arrays cannot be converted to numbers)
        // ["1,2,3"].toString() => "1,2,3"
        // Number("1,2,3") → NaN, 
        // Stop here : Any opertaion with NaN result in NaN.

        console.log([null] - [null]); // 0  
        // [null].toString() => "null"
        // Number("null") → 0   
        // so 0 - 0 = 0

        console.log([] - undefined); // NaN  
        // [].toString() → ""
        // Number("") -> 0
        // 0 - undefined => NaN (When performing arithmetic operations (+, -, *, /), undefined is coerced to NaN.)
        
        console.log([] - {}); // Output: NaN
        // [].toString() → ""
        // Number("") -> 0
        // {}.toString() -> "[object Object]"
        // Number("[object Object]") -> NaN
        
         // Stop here : Any opertaion with NaN result in NaN.

        
        // Subtraction cannot be performed between an empty array and an object, so the result is NaN.






