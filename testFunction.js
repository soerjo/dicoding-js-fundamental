function minimal(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else if (a == b) {
    return a;
  }
}

function power(a, b) {
  return Math.pow(a, b);
}

// power(7, 3);
console.log(power(4, 0.5));
