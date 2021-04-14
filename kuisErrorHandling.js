// TODO 1

class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "ValidationError";
  }
}

// TODO 2
function validateNumberInput(a, b, c) {
  if (!(typeof a === "number")) {
    throw new ValidationError("Argumen pertama harus number");
  }
  if (!(typeof b === "number")) {
    throw new ValidationError("Argumen kedua harus number");
  }
  if (!(typeof c === "number")) {
    throw new ValidationError("Argumen ketiga harus number");
  }
}

const detectTriangle = (a, b, c) => {
  console.log(typeof a == "number");
  // TODO 3
  try {
    validateNumberInput(a, b, c);
    if (a === b && b === c) {
      return "Segitiga sama sisi";
    }

    if (a === b || a === c || b === c) {
      return "Segitiga sama kaki";
    }

    return "Segitiga sembarang";
  } catch (err) {
    if (err instanceof ValidationError) {
      return err.message;
    } else if (error instanceof ReferenceError) {
      console.log(err.message);
    } else {
      return err.stack;
    }
  }
};

console.log(detectTriangle(1, 1));
