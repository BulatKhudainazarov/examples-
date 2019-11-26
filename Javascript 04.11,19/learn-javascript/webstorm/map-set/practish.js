let set = new Set([1, 2, 1, 2, 3, 4, 5, 4, 5,6 , 3, 2]);

set.add(5).add(1);

console.log(set)
console.log(set.size);

// for (let key of set) {
//   console.log(key)
// }

function  uniqueValues(arr) {
  return Array.from(new Set(arr));
}

console.log(uniqueValues([1,1,1,2,2,2,3,3,3,4,4,4,5,5,5]));

