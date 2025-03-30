const grandparent = { grandparentProp: true };
const parent = Object.create(grandparent);
const child = Object.create(parent);

console.log(child.grandparentProp); // true


// Explanation:
// --------------
// Objects look up properties in the prototype chain.
// child → parent → grandparent.