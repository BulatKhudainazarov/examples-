// let name = "John";
//
// function sayHi() {
//   console.log("Hi, " + name);
// }
//
// name = "Pete";
//
// sayHi();

// function makeWorker() {
//   let name1 = "Pete";
//
//   return function() {
//     console.log(name1);
//   };
// }
//
// let name1 = "John";
//
// // create a function
// let work = makeWorker();
//
// work();


function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  }
}

let counter = makeCounter();
let counter2 = makeCounter();


console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter2());
