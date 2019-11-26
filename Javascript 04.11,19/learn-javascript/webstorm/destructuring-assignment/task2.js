let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {
  let max = 0;
  let maxName;
  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }
  return maxName;
}

console.log(topSalary(salaries));
// let max = 0;
// let maxName;
//
// for (const [name, salary] of Object.entries(salaries)) {
//   if (max < salary) {
//     max = salary;
//     maxName = name;
//   }
// }
// console.log(maxName);