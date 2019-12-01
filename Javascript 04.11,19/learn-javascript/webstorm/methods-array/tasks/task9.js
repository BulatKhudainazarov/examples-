let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
  const allAges = arr.reduce(
    (all, item) => all + item.age, 0);
  return allAges / arr.length;
}

console.log(getAverageAge(arr));