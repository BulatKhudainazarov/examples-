let n;
let m = 100;

if (m > 50) {
  n = "Большое";
  console.log(n);
} else {
  n = "Маленькое";
  console.log(n);
}

// let num = 45;
// do {
//   console.log(num);
//   num++;
// } while ( num < 68 );

// let num1 = 45;
//
// do {
//   console.log(num1);
//   num1 += 5;
// } while ( num1 < 670 );

// for (let i = 45; i < 68; i++) {
//   console.log(i);
// }

// for (let i = 45; i <= 670; i += 5) {
//   console.log(i)
// }

let n1 = 8;
switch ( +n1 ) {
  case 1:
    console.log("Один");
    break;
  case 2:
    console.log("Два");
    break;
  case 3:
    console.log("Три");
    break;
  case 4:
    console.log("Четыре");
    break;
  case 5:
    console.log("Пять");
    break;
  case 6:
    console.log("Шесть");
    break;
  case 7:
    console.log("Семь");
    break;
  case 8:
    console.log("Восемь");
    break;
  case 9:
    console.log("Девять");
    break;
  default:
    console.log( "Нет таких значений" );
}