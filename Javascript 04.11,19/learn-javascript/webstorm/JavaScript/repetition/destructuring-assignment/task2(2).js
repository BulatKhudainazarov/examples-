let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let array = Object.entries(salaries).reduce((min, next) => min <= next[0] ? null : next);
  console.log(array);
}

topSalary(salaries);