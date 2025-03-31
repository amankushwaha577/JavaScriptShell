/*
Data types means which hold some values. There are 2 types of Data types in JS.

1️⃣ Primitive Data Types (Immutable, stored by value) :
-----------------------------------------------------

These types hold only a single value and are directly stored in memory.

NN BB SS U
1. Number :	Represents numeric values (both integers & floats).	
            let x = 42;
   Null   : Represents an intentional empty or unknown value.	
            let z = null;

2. BigInt :	Used for very large numbers beyond Number .MAX_SAFE_INTEGER.	
            let big = 12345678901234567890n;
   Boolean: Represents true or false.	
            let isHappy = true;

3. String :	Represents text, enclosed in quotes.	
            let name = "Alice";
   Symbol :	Used to create unique identifiers (mostly for object properties).	
            let sym = Symbol("id");

4. Undefined : A variable that has been declared but not assigned a value.	
               let y; // undefined



2️⃣ Non-Primitive (Reference) Data Types (Mutable, stored by reference) :
------------------------------------------------------------------------

These types hold collections of values and are stored in memory by reference.

1. Object :	Collection of key-value pairs.	
            let person = { name: "Alice", age: 25 };
2. Array  :	list of values.	
            let numbers = [1, 2, 3, 4, 5];
3. Function : A block of reusable code (also a type of object).	
              function greet() { console.log("Hello!"); }


3️⃣ Mutable vs Immutable Data Types :
------------------------------------

Type	       | Stored by	 | Mutable?
Primitive	   |  Value	     | ❌ No
Non-Primitive  | Reference	 | ✅ Yes
*/