let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  let set = [];
  for (let keys of Object.values(arr)) {
    set = new Set(arr);
    set.add(keys);
  }
  return Array.from(set);
}

console.log(unique(values));