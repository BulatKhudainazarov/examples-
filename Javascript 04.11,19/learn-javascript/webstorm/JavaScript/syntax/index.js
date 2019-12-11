// function getAge(year) {
//   const current = new Date().getFullYear() - year
//   return current
// }
//
// const calculateAge = (year) => {
//   const current = new Date().getFullYear() - year
//   return current
// }
//
// const getAge = year => new Date().getFullYear() - year
//
// const logAge = year => console.log(new Date().getFullYear() - year)
//
// console.log(calculateAge(2000))
//
// console.log(getAge(1949))
//
// logAge(19)

"use strict"

const person = {
  age: 25,
  name: "Maxim",
  logNameWithTimeout() {
    window.setTimeout(() => {
      console.log(this.name)
    }, 500)
  },
}

person.logNameWithTimeout()