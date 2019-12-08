let person = {
  name: "Max",
  age: 28,
  job: "Frontend"
}

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(key + ": " + person[key])
//   }
// }

// Object.keys(person).forEach(item => console.log(person[item]))
Object.values(person).map(function (item) {
  console.log(item);
})