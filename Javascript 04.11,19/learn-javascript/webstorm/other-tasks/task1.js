let generator = sequence(10, 3);
let generator2 = sequence(7, 1);

function sequence(start, step = 1) {
  return start + step;
}

console.log(generator);
console.log(generator2);
console.log(generator);
console.log(generator);