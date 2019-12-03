function unique(arr) {
  let set = new Set();
  for (let key of values) {
    set.add(key);
  }
  set = Array.from(set);
  return set;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));
