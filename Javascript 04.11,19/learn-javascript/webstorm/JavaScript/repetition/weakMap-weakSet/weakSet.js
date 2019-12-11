let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(john);

console.log(visitedSet.has(john));
console.log(visitedSet.has(pete));
console.log(visitedSet.has(mary));

visitedSet.delete(john);
console.log(visitedSet.has(john));