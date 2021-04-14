const data = [1, "", "Hallo", 0, null, "Harry", 14];

const truthArray = data.filter((item) => Boolean(item));
console.log(truthArray);

const dataType = data.filter((item) => typeof item === "string");
console.log(dataType);
