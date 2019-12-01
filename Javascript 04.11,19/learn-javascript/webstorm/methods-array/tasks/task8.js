let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge(arr) {
  return arr.sort((a, b) => {
    if (a.age > b.age) return  1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return -1;
  });
}

sortByAge(arr);

console.log(arr);