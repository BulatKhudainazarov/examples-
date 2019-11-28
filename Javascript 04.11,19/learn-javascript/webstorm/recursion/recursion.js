function recursion(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * recursion(x, n - 1);
  }
}

console.log(recursion(2, 0));