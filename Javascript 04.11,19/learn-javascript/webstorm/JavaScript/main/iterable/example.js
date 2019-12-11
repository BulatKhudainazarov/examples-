let xmen = ["Cyclops", "Wolverine", "Roque"];

// for (let keys of xmen) {
//   console.log(keys);
// }

let iterator = xmen[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(iterator.length);

// let next = iterator.next();
//
// while (!next.done) {
//   console.log(next.value);
//   next = iterator.next();
// }

let idGenerator = {
  [Symbol.iterator]() {
    let id = 1;
    return {
      next() {
        let value = id > 100 ? undefined: id++;
        let done = !value;
        return { value, done }
      }
    }
  }
};

for (let id of idGenerator) {
  console.log(id);
}


let randomidGenerator = {
  generate() {
    return this[Symbol.iterator]();
  },

  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        let value = Math.ceil(Math.random() * 100);
        let done = count > 0;
        count += 1;
        return { value, done }
      }
    }
  }
};
//
// for (let random of randomidGenerator) {
//   console.log(random);
// }

let random = randomidGenerator.generate();

console.log(random.next().value);