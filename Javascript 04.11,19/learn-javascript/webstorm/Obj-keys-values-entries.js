let user = {
  name: "John",
  age: 30
};

console.log(Object.keys(user)); // [ 'name', 'age' ]
console.log(Object.values(user)); // [ 'John', 30 ]
// console.log(user)
let obj1 = Object.entries(user);

console.log(Object.fromEntries(obj1)); // { name: 'John', age: 30 }
console.log(obj1); // [ [ 'name', 'John' ], [ 'age', 30 ] ]

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
)

console.log(doublePrices);