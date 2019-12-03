function unique(arr) {
  let result = [];

  for (let keys of arr) {
    if (!result.includes(keys)) {
      result.push(keys);
    }
  }
  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));