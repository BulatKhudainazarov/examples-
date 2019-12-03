function count(obj) {
  return Object.values(obj).length;
}

let user = {
  name: 'John',
  age: 30
};

console.log( count(user) );