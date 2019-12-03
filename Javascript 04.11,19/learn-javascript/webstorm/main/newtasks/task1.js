let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 ** 3; // 75
let a6 = 5 % 3; // 2
let a7 = 3 % 5;
let a8 = 5 + "3";
let a9 = "5" - 3;
let a10 = 75 + "кг";

function area(height, width) {
  let s = height * width;
  return `Площадь прямоугольника: ${s}`;
}

console.log(area(23, 10));

function areaZil(heightC, dC) {
  let v = dC * heightC;
  return `Площадь цилиндра: ${v}`;
}

console.log(areaZil(10,  4));

function prm(n, m) {
  let k = Math.sqrt(n ** 2 + m ** 2);
  return `Площадь прям. триугольника: ${k}`
}

console.log(prm(3, 4));

function fbn(num) {
  return `${num}-ое число фиббоначи: ${Math.round(((((1 + Math.sqrt(5)) / 2) ** num) - (((1 - Math.sqrt(5)) / 2) ** num )) / Math.sqrt(5) )}`
}

console.log(fbn(12))

function credit() {
  let s = 2000000;
  let p = 10;
  let years = 5;
  let perepl =  ( (s / 100) * p ) * years;
  return `Переплата от суммы ${s} за ${years} лет составит: ${perepl}`;
}

console.log(credit());