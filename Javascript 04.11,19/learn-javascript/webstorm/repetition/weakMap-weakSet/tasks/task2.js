let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let dateOfreading = new WeakMap();

dateOfreading.set(messages[0], new Date(2019, 12, 2));

console.log(dateOfreading.get(messages[0]));