/*
3. Iteration Methods:
---------------------

1. keys():
----------
    ➤ Returns an iterator over the keys in the Map. */

    const productMap = new Map([
        ["laptop", 1000],
        ["phone", 500]
    ]);
    for (let key of productMap.keys()) {   // productMap.keys() => MapIterator {'laptop', 'phone'}
        console.log(key);
    }
    // laptop
    // phone


/*
2. values():
------------
    ➤ Returns an iterator over the values in the Map. */

    for (let value of productMap.values()) {
        console.log(value);
    }
    // 1000
    // 500


/*
3. entries():
-------------
    ➤ Returns an iterator over the [key, value] pairs in the Map.*/

    for (let [key, value] of productMap.entries()) {  // productMap.entries() => MapIterator {'laptop' => 1000, 'phone' => 500}
        console.log(`${key} => ${value}`);
    }
    // laptop => 1000
    // phone => 500


/*
4. forEach(callback):
----------------------
    ➤ Executes a callback function once for each key-value pair.
    ➤ Syntax: map.forEach((value, key, map) => {...}) */

    productMap.forEach((value, key) => {
        console.log(`${key.toUpperCase()}: $${value}`);
    });
    // LAPTOP: $1000
    // PHONE: $500


/*================================== Real World Examples ================================

❓ Q1: How can you log all product names from an e-commerce Map?
*/
const ecommerce = new Map([
    ["shoes", 50],
    ["hat", 20],
    ["jacket", 120]
]);

for (let key of ecommerce.keys()) {
    console.log(key);
}
// shoes
// hat
// jacket


/*
❓ Q2: How can you extract all prices from a product Map?
*/
for (let value of ecommerce.values()) {
    console.log(value);
}
// 50
// 20
// 120


/*
❓ Q3: How can you print all product details using entries()?
*/
for (let [product, price] of ecommerce.entries()) {
    console.log(`${product}: $${price}`);
}
// shoes: $50
// hat: $20
// jacket: $120


/*
❓ Q4: How can you use forEach to apply a discount on each item?
*/
ecommerce.forEach((price, item) => {
    console.log(`${item} after discount: $${price * 0.9}`);
});
// shoes after discount: $45
// hat after discount: $18
// jacket after discount: $108
