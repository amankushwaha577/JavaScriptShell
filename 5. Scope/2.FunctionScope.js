var x = 10;
let y = 20;
const z = 30;

console.log(window.x); // ?
console.log(window.y); // ?
console.log(window.z); // ?

// 10
// undefined
// undefined

// Answer:
// -------------
// window.x: 10
// Variables declared with var are attached to the window object in the browser.

// window.y: undefined
// let does not create a property on the window object.

// window.z: undefined
// Same as let, const variables are not attached to the window object.