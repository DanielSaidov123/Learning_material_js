const obj = { name: "Daniel", age: 17, city: "Tel Aviv" };

const arr2D = Object.entries(obj);
console.log(arr2D);

//פלט
[
  ["name", "Daniel"],
  ["age", 17],
  ["city", "Tel Aviv"]
]


//-------------------------------------------------------//
//מיון למערך דו ממדי 
const sortedArr = arr2D.sort((a, b) => a[0].localeCompare(b[0]));
console.log(sortedArr);

//-------------------------------------------------------//
//החזרה לאוביאקט
const sortedObj = Object.fromEntries(sortedArr);