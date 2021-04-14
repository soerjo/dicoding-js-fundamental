const user = {
  firstName: "Harry",
  lastName: "Protter",
};

const createUserWithNewLastName = (newLastName, user, region) => {
  return { ...user, lastName: newLastName, age: 24, region: region };
};

const newUser = createUserWithNewLastName("Potter", user, "Indonesia");
console.log(newUser);
