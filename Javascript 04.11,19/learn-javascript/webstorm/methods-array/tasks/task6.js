let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = [];

let inNames = function(arr) {
  for (let keys of users) {
    names.push(keys.name);
  }
  return names;
}

inNames(users);

console.log(names)
