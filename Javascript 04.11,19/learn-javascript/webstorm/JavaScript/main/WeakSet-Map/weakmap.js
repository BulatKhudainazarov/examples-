let obj = {name: "weakmap"};

// let arr = [obj]
//
// obj = null;
//
// console.log(arr[0]);

let map = new WeakMap([
  [obj, "obj data"]
])

obj = null;

// console.log(map.get(obj));
let cache = new WeakMap()

function cacheUser(user) {
  if(!cache.has(user)) {
    cache.set(user, Date.now())
  }
  return cache.get(user);
}

let lena = {name: "Elena"};
let alex = {name: "Alex"};

cacheUser(lena);
cacheUser(alex);

cache.delete(lena);

console.log(cache.has(lena));
console.log(cache.has(alex));