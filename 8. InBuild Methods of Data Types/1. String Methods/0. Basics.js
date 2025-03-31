/* 
========================= JavaScript String Built-in Methods =========================

1️⃣ String Manipulation Methods:
---------------------------------
1. toUpperCase(), toLowerCase()
2. trim(), trimStart(), trimEnd()
3. replace(search, replaceWith), replaceAll(search, replaceWith)


2️⃣ String Search Methods:
---------------------------                                                        
1.  indexOf(search), lastIndexOf(search),             ------> Return -1 if not found else 0 to n
2.  includes(substring),                                |
3.  startsWith(prefix), endsWith(suffix)                |---> Return true /false

    Note : All accept an optional starting position parameter.


3️⃣ String Extraction Methods:   end = end -1
-------------------------------    
1. slice(start, end), substring(start, end), substr(start, length)

    Slice() vs substring() :
    a. If we skip 2nd parameter, In Both methods => endIndex = length
    a. slice supports -v indexes. | substring converts -v index to 0.
    b. if start > end index => slice retuns "" | substring swaps the indexes.


4️⃣ String Splitting & Joining:
--------------------------------
1. split(delimiter), join(delimiter)


5️⃣ Other Few :
--------------
1. repeat(n) :
2. charAt(index) vs at(index) : Both return a single character as a string.
   a. charAt() does't and retuns "" | at() supports -ve index. 
   b. For out of range index => charAt() returns ""  | at () returns undefined
   c. Both methods are efficient, but `charAt()` is more widely supported in older browsers.

3. concat() :  
   a. `concat()` merges two or more strings and returns a **new string**.
   b.  It does **not** modify the original strings.

*/

