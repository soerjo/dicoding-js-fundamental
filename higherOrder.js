const names = ["Harry", "Ron", "Jeff", "Thomas"];
const arrayMap = (array, fn) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(fn(array[i]));
  }

  return newArray;
};

const newNames = arrayMap(names, (name) => `${name}!`);

console.log(names, newNames);
