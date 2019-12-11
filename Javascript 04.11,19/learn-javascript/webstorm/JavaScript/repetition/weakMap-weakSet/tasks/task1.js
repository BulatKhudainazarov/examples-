let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let weakSet = new WeakSet();

weakSet.add(messages[0]);
weakSet.add(messages[2]);

console.log( weakSet.has(messages[0]) ? "прочитано" : "не прочитано" );
console.log( weakSet.has(messages[1]) ? "прочитано" : "не прочитано" );
console.log( weakSet.has(messages[2]) ? "прочитано" : "не прочитано" );

messages[0] = null;

console.log( weakSet.has(messages[0]) ? "прочитано" : "не прочитано" );
