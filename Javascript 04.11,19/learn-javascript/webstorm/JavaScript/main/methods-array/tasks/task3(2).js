let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {

    if (a > arr[i] || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(filterRangeInPlace(arr, 1, 4));