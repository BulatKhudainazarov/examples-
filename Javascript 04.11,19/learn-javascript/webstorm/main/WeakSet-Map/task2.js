let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let readingDate = new WeakSet();

readingDate.add(messages[0], new Date(2019, 1, 1));

console.log(readingDate.has(messages[0]));

readingDate.delete(messages[0]);

console.log(readingDate.has(messages[0]));
