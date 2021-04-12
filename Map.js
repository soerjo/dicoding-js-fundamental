const myMap = new Map([
  ["1", "a string key"],
  [1, "a number key"],
  [true, true],
]);

console.log(myMap);

const capital = new Map([
  ["jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));
