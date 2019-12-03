function sayHi() {
  console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

sayHi(user); // Не будет работать - undefined
sayHi.call(user); // John, указали на this => .call

sayHi.call(admin); // Admin, указали на this => .call

function say(phrase) {
  console.log(this.name + ": " + phrase);
}

say.call(user, "Hello my friend!");

// =======================================
// =======================================
// =======================================

let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod();
  }
};

function cachingDecorator(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  }
}

worker.slow = cachingDecorator(worker.slow);


console.log( worker.slow(2) );
console.log( worker.slow(2) );
