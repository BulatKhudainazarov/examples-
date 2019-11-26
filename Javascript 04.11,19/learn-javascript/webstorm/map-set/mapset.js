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

// console.log(Object.entries(obj));
// console.log(Object.fromEntries(entries));

const map = new Map(entries);

map
  .set("newField", 42)
  .set(obj, "value of object")
  .set("NaN", "Nan ??")

// console.log(map.get("NaN"));
//
// console.log(map.size);
// console.log(map.delete(obj));
// map.clear();
// console.log(map.size);

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// map.forEach( callbackfn:(val, key, m) => {
//   console.log(val, key);
// })

// const array = Array.from(map)
// const mapObj = Object.fromEntries(map.entries());
//
// console.log(mapObj);

// ============

const users = [
  {name: "Elena"},
  {name: "Alex"},
  {name: "Irina"}
]

const visits = new Map();

visits
  .set(users[0], new Date())
  .set(users[1], new Date( value: new Date().getTime() + 1000 * 60))
  .set(users[2], new Date( value: new Date().getTime() + 5000 * 60))

function lastVisit(user) {
  return visits.get(user);
}

console.log(lastVisit(users[1]));
