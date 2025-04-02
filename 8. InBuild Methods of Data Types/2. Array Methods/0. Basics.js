/*
Que🔹.  What are the different types of array built-in methods in JavaScript?
Answer. JavaScript provides various array methods that can be categorized as follows:

1. Mutation Methods (Modify Original Array):
--------------------------------------------
   a. push(), pop(), shift(), unshift(),     => Insert | Delete          at either Start or end.
   b. splice(),                              => Insert | Delete | Update at anywhere using start index
   c. reverse(), sort(), fill(), 


2. Non-Mutation Methods (Return a New Array) :
---------------------------------------------
    a. map(), filter(), 
    b. slice(),            => Slices array using Start Index.
       concat(),           => Merges Arrays
    c. flat(),             => Flats the array (Default 1 level)
       flatMap()           => Flats the array after performing user actions ( .map().flat(1) )


3. Iteration Methods :
---------------------
    a. forEach(), map(), filter(), 
    b. some(), every(),              => returns true/false
    c. reduce(), reduceRight()       => returns single value


4. Search Methods :
-------------------
    a. find(), findIndex(),        => searches on the basis of condition
    b. indexOf(), lastIndexOf(),   => searches on the basis of element
    c. includes()                  => Just checks ( true / false )

    
5. Joining & Conversion Methods :
--------------------------------
    a. join(), toString(), toLocaleString()

*/