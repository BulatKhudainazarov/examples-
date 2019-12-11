function sumSalaries(salaries) {
  let sum = 0;
  if (salaries) {
    for (let keys of Object.values(salaries)) {
      sum += keys;
    }
  } else {
    return sum;
  }
  return sum;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};


console.log(sumSalaries(salaries));