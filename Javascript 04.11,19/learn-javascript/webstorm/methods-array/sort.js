let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

items.sort(function (a, b) {
  if (a.value < b.value) return -1;
  if (a.value == b.value) return 0;
  if (a.value > b.value) return 1;
});

// console.log(items);

let stringArray = ['Голубая', 'Горбатая', 'Белуга'];
let numericStringArray = ['80', '9', '700'];
let numberArray = [40, 1, 5, 200];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function sorting(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function sorting1(a, b) {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
}

function forNumbers(a, b) {
  return a - b;
}

function forDiminiutionNumbers(a, b) {
  return b - a;
}


console.log(stringArray);
console.log("Простая сортировка: " + stringArray.sort().join(", "));
console.log("Сортировка с a > b = 1: " + stringArray.sort(sorting).join(", "));
console.log("Сортировка с a < b = 1: " + stringArray.sort(sorting1).join(", "));
console.log(numericStringArray);
console.log("Простая сортировка: " + numericStringArray.sort().join(", "));
console.log("Сортировка с a - b: " + numericStringArray.sort(forNumbers).join(", "));
console.log("Сортировка с b - a: " + numericStringArray.sort(forDiminiutionNumbers).join(", "));
console.log(numberArray);
console.log("Простая сортировка: " + numberArray.sort().join(", "));
console.log("Сортировка с a - b: " + numberArray.sort(forNumbers).join(", "));
console.log("Сортировка с b - a: " + numberArray.sort(forDiminiutionNumbers).join(", "));
console.log(mixedNumericArray);
console.log("Простая сортировка: " + mixedNumericArray.sort().join(", "));
console.log("Сортировка с a - b: " + mixedNumericArray.sort(forNumbers).join(", "));
console.log("Сортировка с b - a: " + mixedNumericArray.sort(forDiminiutionNumbers).join(", "));



