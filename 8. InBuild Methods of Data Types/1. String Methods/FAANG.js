/*
1️⃣  What is the difference between slice(), substring(), and substr()?
Ans. All are used to Extracts part of a string. 

     1. slice(start, end) : → Supports negative indices.
     ----------------------
               
                01234567
     let str = "amankush"; 
                87654321

     let a = str.slice(1, 4);   // "man"
     let b = str.slice(-4, -1); // "kus"

     2. substring(start, end) : Doesn't support negative indices  
     --------------------------

     let c = str.substring(1, 4);     // "man"
     let d = str.substring(-4, -1);   //  returns ""

     3. substr(start, length) : Extracts based on length (Deprecated)  
     -------------------------

     let e = str.substr(1, 4);      // 'mank'
 
*/