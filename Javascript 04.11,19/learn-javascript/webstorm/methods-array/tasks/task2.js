let arr = [5, 3, 8, 1];

function filterRange(arr, from, to) {
  let newArr = [];
  (arr
    .map(function (number) {
      if (number >= from && to >= number){
        newArr.push(number);
      };}));
  return (newArr);
}

let result = filterRange(arr, 1, 3);

console.log(result);