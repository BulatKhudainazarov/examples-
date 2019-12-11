let objArr = [
  {name: "Max", age: 27},
  {name: "Elena", age: 18},
  {name: "Victor", age: 20},
]

let person = objArr.find(function (item) {
  return item.age == 20;
});

console.log(person)

let oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (i) {
  return i % 2 !== 0;
})

console.log(oddArray);

let array = ["1", "2", "3", "4", "5"];

let numArray = array.map(function (i) {
  return parseInt(i * 2);
})

console.log(numArray);

let rand = Math.random() * 50;

console.log(Math.floor(rand));