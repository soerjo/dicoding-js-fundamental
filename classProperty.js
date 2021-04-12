class Mail {
  from = "pengirim@gmail.com";
  contacts = [];
  sendMessage = function (msg, to, from) {
    console.log("you send: ", msg, " to ", to, " from ", from); //from di isini merujuk kepada from dari parameter bukan 'from' dari global value class yaitu 'pengirim@gmail.com'
    this.contacts.push(to);
  };
}

const mail1 = new Mail();
mail1.sendMessage(
  "Yo Bujank!",
  "ryohastomo@gmail.com",
  "bujankLainnya@gmail.com"
);
