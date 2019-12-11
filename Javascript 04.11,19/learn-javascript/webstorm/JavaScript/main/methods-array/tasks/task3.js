let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++){
    if (arr[i] < a || arr[i] > b) {
      let index = arr.indexOf(arr[i], 0);
      arr.splice(index, 1);
    };
  }
  return arr;
};

console.log(filterRangeInPlace(arr, 1, 4));
//
console.log(arr);
//
// console.log(arr.splice(0, 1));
// console.log(arr.splice(2, 1));
// console.log(arr);