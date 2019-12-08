function Car(name, age ) {
  this.name = name
  this.age = age
  // this.pries = pries
}

Car.prototype.getAge = function() {
  return new Date().getFullYear() - this.age
}

Car.prototype.color = "black"

let ford = new Car("Ford", "2015");
let bmw = new Car("BMW", "2017")

ford.color = "red"

console.log(ford)
console.log(bmw)


