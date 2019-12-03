function Calculator() {
  this.methods = {
    "+": function (a, b) { return a + b },
    "-": function (a, b) { return a - b },
  };

  this.calculate = function (str) {
    // console.log(str.splice(0, 1));
    let now = str.split(" "),
      a = +now[0],
      op = now[1],
      b = +now[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods = func;
  };
}


let some = new Calculator;

console.log(some.calculate("3 + 7"));
console.log(some.calculate("3 - 7"));
console.log(some.calculate("3 + 7"));

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

console.log(result);