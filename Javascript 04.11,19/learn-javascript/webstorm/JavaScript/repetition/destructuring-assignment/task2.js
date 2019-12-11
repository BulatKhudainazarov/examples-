let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalaries(salaries) {
  let result = [];
  if (salaries == undefined) {
    result = null;
  } else {
    for (let keys of Object.entries(salaries)){
      // console.log(keys);
      let [ one, two ] = keys;
      result.push(two);
    }
    result.sort((a, b) => b - a);
    result = result[0];
  }
  return result;
}

console.log(topSalaries(salaries));