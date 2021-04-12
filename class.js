// membuat class dengan function
function Mail() {
  this.from = "pengirim@gmail.com";
  this.sendMassage = (msg, to) => {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  };
}

const mail1 = new Mail();
mail1.sendMassage("yo bujank!", "Soerjo@gmail.com");
