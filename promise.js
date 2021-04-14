const stock = {
  coffeBeans: 250,
  water: 100,
};

const checkStock = new Promise((resolve, reject) => {
  if (stock.coffeBeans >= 16 && stock.water >= 250) {
    resolve("Stok cukup. Bisa membuat kopi");
  } else {
    reject("stock tidak cukup");
  }
});

const handleSuccess = (resolvedValue) => {
  console.log("dari handleSuccess");
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log("dari handleFailure");
  console.log(rejectionReason);
};

checkStock.then(handleSuccess, handleFailure);
