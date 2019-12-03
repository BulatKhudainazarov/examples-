let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (let keys of arr) {
    let sorted = keys.toLowerCase().split("").sort().join("");
    map.set(sorted, keys);
  }

  return (map.values());
}

console.log( Array.from(aclean(arr)) );