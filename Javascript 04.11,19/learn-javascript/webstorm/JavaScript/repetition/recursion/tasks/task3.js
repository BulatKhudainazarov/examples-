function fbn(n) {
  if (n <= 1) return n;
  return fbn(n - 2) + fbn(n - 1);
}

console.log(fbn(77));