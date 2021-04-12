const favorite = ["seafood", "salad", "nugget", "soup"];
const [makanSatu, makanDua, makanTiga, makanEmpat] = favorite;

console.log(makanSatu);
console.log(makanDua);
console.log(makanTiga);
console.log(makanEmpat);

//destructuring dengan satu variable aja...
const [, , makananKeTiga] = favorite;
console.log("isi valiabel 'makananKeTiga' adalah ", makananKeTiga);
