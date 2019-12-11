let arr = [ 13, 11, 15, 21, 13, 11, 17, 17, 19, 19, 21 ];

let set = new Set(arr);

console.log(set.size + " - size of the set")
set = Array.from(set).sort((a, b) => b - a);

console.log(set);