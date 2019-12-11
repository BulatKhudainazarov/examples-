let arr = ["HTML", "JavaScript", "CSS"];

function copySorting(arr) {
  let sorted = arr.slice(0);
  return sorted.sort();
}

let sorted = copySorting(arr);

console.log(sorted);
console.log(arr);