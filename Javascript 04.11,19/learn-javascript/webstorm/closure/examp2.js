// // function creatCalcFunction(n) {
// //   return function () {
// //     console.log(100 * n)
// //   }
// // }
// //
// // let calc = creatCalcFunction(10);
// //
// // console.log(calc());
//
// function creatIncrenentor(n) {
//   return function (num) {
//     return n + num;
//   }
// }
//
// let addOne = creatIncrenentor(1);
// let addTen = creatIncrenentor(10)
//
// console.log(addOne(10))
// console.log(addOne(41))
//
// console.log(addTen(20));
// console.log(addTen(41));

function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`
  }
}

let comUrl = urlGenerator("com");
let ruURl = urlGenerator("ru")

console.log(ruURl("yandex"))

console.log(comUrl("google"))