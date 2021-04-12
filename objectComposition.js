const canSendMessage = (self) => ({
  sendMessage: () => console.log("send message: ", self.message),
});

const checkIsValidPhone = (self) => ({
  isValid: () => console.log("valid phone: ", self.from),
});

//create object composisition
const personalEnterprise = (from, message, store) => {
  // attribute
  const self = {
    from,
    message,
    store,
  };

  //methode
  const personalEnterpriseBehaviors = (self) => ({
    createCatalog: () => console.log("Catalog has created: ", self.store),
  });

  // create object composition
  return Object.assign(
    self,
    personalEnterpriseBehaviors(self),
    canSendMessage(self)
  );
};

const pe1 = personalEnterprise(
  "soerjo@gmail.com",
  "yo bujank!",
  "soerjoPorduction"
);

pe1.createCatalog();
pe1.sendMessage();
// pe1.checkIsValidPhone();
