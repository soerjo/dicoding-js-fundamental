const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

// let firstName = "Soerjo";
// let age = 20;
// console.log(firstName, age);
// //menginisialisasi nilai baru melalui object destructuring
// ({ firstName, age } = profile);
// console.log(firstName, age);

// ///kalo kita buat variable dengna nama baru yang ndak sama di properti maka nilai nya akan undifined
// const { firstName, age, isMale } = profile;
// console.log(firstName, age, isMale);
// //variable isMale ndak ada datanya (undifined) karena variabale "isMale" tidak ada di dalam properti "profile"

// bisa juga panggil dan mengubah nama dari properti pada object
const { firstName: namaDepan, lastName: namaBelakang, age: umur } = profile;
console.log(namaDepan);
console.log(namaBelakang);
console.log(umur);
