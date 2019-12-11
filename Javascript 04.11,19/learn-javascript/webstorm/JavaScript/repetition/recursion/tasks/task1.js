function sumTo1(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum;
}

console.log(sumTo1(10));

function sumTo2(n) {
  if (n == 1) return 1;
  return n + sumTo2(n - 1);
}

console.log(sumTo2(5));

function sumTo3(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo3(5));