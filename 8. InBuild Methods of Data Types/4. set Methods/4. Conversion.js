/*
4. Conversion:
--------------
 
a. Convert Object to Map :→  Object.entries(obj) + new Map() 
--------------------------*/

    const obj = { name: "Alice", age: 25 };
    const mapFromObj = new Map(Object.entries(obj));    // Object.entries(obj) -> [ ['name', 'Alice'],  ['age', 25] ]
    console.log(mapFromObj);  
    // Output: Map(2) { 'name' => 'Alice', 'age' => 25 }


/*
b. Convert Map to Object :→ Object.fromEntries(map)  
------------------------ */ 
    const productMap = new Map([
        ["book", 15],
        ["pen", 5]
    ]);
    const productObj = Object.fromEntries(productMap);
    console.log(productObj);  
    // Output: { book: 15, pen: 5 }



/* c. Convert Map to Array :→ Array.from(map)   
---------------------------*/
    const sampleMap = new Map([
        ["x", 1],
        ["y", 2]
    ]);
    const arrayFromMap = Array.from(sampleMap);
    console.log(arrayFromMap);  
    // Output: [ ['x', 1], ['y', 2] ]



/*================================== Real World Examples ================================*/

/*
❓ Q1: How can you convert user settings from an object to a Map for advanced lookups?
*/
const userSettings = {
    darkMode: true,
    notifications: false
};
const settingsMap = new Map(Object.entries(userSettings));
console.log(settingsMap);  
// Output: Map(2) { 'darkMode' => true, 'notifications' => false }

/*
❓ Q2: How can you export Map data to JSON or a database (which accepts arrays)?
*/
const productMap2 = new Map([
    ["book", 10],
    ["pen", 2]
]);
const dataToExport = Array.from(productMap2);
console.log(dataToExport);  
// Output: [ ['book', 10], ['pen', 2] ]

/*
❓ Q3: How can you convert a Map to a plain object to send over a network?
*/
const mapToSend = new Map([
    ["theme", "light"],
    ["fontSize", "medium"]
]);
const jsonReadyObject = Object.fromEntries(mapToSend);
console.log(jsonReadyObject);
// Output: { theme: 'light', fontSize: 'medium' }
