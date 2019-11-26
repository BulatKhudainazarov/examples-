const obj  = {
  name: "Vladilen",
  age: 26,
  job: "Fullstack"
}

const entries = [
  ["name", "Vladilen"],
  ["age", 26],
  ["job", "Fullstack"]
]

console.log(Object.entries(obj));
console.log(Object.fromEntries(entries));