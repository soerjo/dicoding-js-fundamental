let myArray = ["Coklat", 42.5, 22, true, "Programing"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

//menambahkan data pada array dengan push
myArray.push("Soerjo Hastomo");
console.log(myArray);
myArray.push("Javascript");
console.log(myArray);

//mengeluarkan data pada array dengna pop
myArray.pop();
console.log(myArray);

//mengeluarkan data element pertama pada array
myArray.shift();
console.log(myArray);

//memasukan data pada element pertama pada array
myArray.unshift("buah Apel");
console.log(myArray);

//menghapus is data pada array sama seperti object
delete myArray[1];
console.log(myArray);
//hasilnya akan ada <1 empty item>

//mengisi element array yang kosong
myArray[1] = "data terisi";
console.log(myArray);

//menghapus element array dan datanya dengan splice
myArray.splice(1, 1); //menghapus index ke 0 sebanya 1 element
//menhapus 'data terisi'
console.log(myArray);
