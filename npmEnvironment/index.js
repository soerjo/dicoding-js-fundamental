// const { coffeeStock, isCoffeeMachineReady } = require("./state");
// diatas adalah cara manggil atau import jadul

import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";
// diatas ini adalah cara manggil atau import ES6 Module

const makeCoffe = (type, miligrams) => {
  if (stock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat gan!");
  } else {
    console.log("Biji kopi habizzzz bujank....!");
  }
};

makeCoffe("robusta", 90);
console.log(isCoffeeMachineReady);

// console.log(coffeeStock);

// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");
