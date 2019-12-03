let arr = [5, 3, 8, 1];

let filterRangeInPlace = (arr, a, b) => { arr.forEach((item, index) => {
    if (a > item || item > b) arr.splice(index, 1);
  })
  return arr;
}

console.log(filterRangeInPlace(arr, 1, 4));