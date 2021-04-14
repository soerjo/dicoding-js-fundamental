const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const funcFilterBaru = (arr, fn) => {
  const newArray = [];
  //   console.log(arr.length);

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    newArray.push(fn(arr[i]));
  }

  return newArray;
};

const newStudents = funcFilterBaru(students, (nama) => nama.name);
console.log(newStudents);
