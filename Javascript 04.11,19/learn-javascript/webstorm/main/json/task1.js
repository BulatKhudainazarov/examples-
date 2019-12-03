let user = {
  name: "Василий Иванович",
  age: 35
};

let toJson = JSON.parse(JSON.stringify(user));

console.log(toJson);
