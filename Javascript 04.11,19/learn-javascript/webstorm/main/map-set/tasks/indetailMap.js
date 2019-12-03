let map = new Map([['name', 'CodingBlast'], ['points', 33], [true, 55], ['true', 44]])

// смотрим ключи и значения от map
// for (let [key, value] of map) {
//   console.log("key is: " + key + "," + " value is: " + value);
// }
//
// // смотрим ключи от map
// for (let key of map.keys()) {
//   console.log(key);
// }
//
// // смотрим значения от map
// for (let value of map.values()) {
//   console.log(value);
// }

console.log(Array.from(map.keys()));
console.log(Array.from(map.values()));