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
