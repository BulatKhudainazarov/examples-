let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(user) {
  return user.reduce((accumulator, item) => accumulator + item.age / user.length, 0);
}

console.log(getAverageAge(arr));