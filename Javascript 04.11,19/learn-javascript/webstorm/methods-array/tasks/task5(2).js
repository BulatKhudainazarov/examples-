let arr = ["HTML", "JavaScript", "CSS"];

function copySorting(arr) {
  return arr.slice().sort();
}

let sorted = copySorting(arr);

console.log(sorted);
console.log(arr);
