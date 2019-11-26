let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
};

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((total, item) => total + item, 0);
}

// let arrayOfSalaries = Object.values(salaries);
//
// console.log(arrayOfSalaries);
//
// let sumSalaries = arrayOfSalaries.reduce((total, item) => total + item, 0);

console.log( sumSalaries(salaries) );