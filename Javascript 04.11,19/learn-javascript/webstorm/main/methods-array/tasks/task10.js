function unique(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  return Array.from(set);
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));