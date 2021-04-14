const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

const isCoffeeMachineReady = true;

// ini cara export yang kekninian ES6 Module
export { coffeeStock, isCoffeeMachineReady };

// dibawah ini cara export yang jadul
// module.exports = { coffeeStock, isCoffeeMachineReady };
// console.log(module);
