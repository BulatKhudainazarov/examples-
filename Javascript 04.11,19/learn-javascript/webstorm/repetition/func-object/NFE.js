let sayHi = function func(who) {
  if (who) {
    console.log(`Hello ${who}`);
  } else {
    func("Guest");
  }
}

sayHi();


let sayHi1 = function func(who) {
  if (who) {
    console.log(`Hello ${who}t`);
  } else {
    func("Guest");
  }
}

let welcome = sayHi1;
sayHi1 = null;

welcome();