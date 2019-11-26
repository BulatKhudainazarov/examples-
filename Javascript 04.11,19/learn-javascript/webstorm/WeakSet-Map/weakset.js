let users = [
  {name: "Elena"},
  {name: "Alex"},
  {name: "Irina"}
]

let visit = new WeakSet();

visit.add(users[0]).add(users[1]);

users.splice(1, 1);

console.log(visit.has(users[0]));
console.log(visit.has(users[1]));
