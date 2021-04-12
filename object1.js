const mail = {
  from: "pengirim@dicoding.com",
  sendMessage: function (msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  },
};

console.log(mail.from);
mail.sendMessage("yo bujank!", "penerima@dicoding.com");
