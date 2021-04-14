const state = {
  stock: {
    coffeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBusy: false,
};

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) {
        resolve("Mesin kopi siap digunakan.");
      } else {
        reject("maaf, mesin sedang sibuk.");
      }
    }, 1500);
  });
};

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeBeans >= 16 && state.stock.water >= 250) {
        resolve("Stock cukup. Bisa membuat Kopi.");
      } else {
        reject("stock tidak cukup");
      }
    }, 1500);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("memanaskan air");
    setTimeout(() => {
      resolve("Air panas sudah siap!");
    }, 2500);
  });
};

const grindCoffeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("menggiling biji kopi");
    setTimeout(() => {
      resolve("kopi sudah siap");
    }, 1000);
  });
};

const brewCoffe = () => {
  console.log("membuat kopi anda...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 3000);
  });
};

function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then((value) => {
      console.log(value);
      const preparation = [boilWater(), grindCoffeBeans()];
      return Promise.all(preparation);
    })
    .then((value) => {
      console.log(value);
      return brewCoffe();
    })
    .then((value) => {
      console.log(value);
      state.isCoffeeMachineBusy = false;
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
      state.isCoffeeMachineBusy = false;
    });
}

makeEspresso();
