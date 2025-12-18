function filterByKey(arr, key, value) {
  return arr.filter(obj => obj[key] === value);
}

const users = [
  { name: "Daniel", age: 17 },
  { name: "Avi", age: 20 },
  { name: "Daniel", age: 25 },
];

const result = filterByKey(users, "name", "Daniel");
console.log(result)
