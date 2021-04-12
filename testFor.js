let evenNumber = [];
let increment = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumber[increment] = i;
    increment++;
    // console.log(increment);
  }
}
for (const arr of evenNumber) {
  console.log(arr);
}
