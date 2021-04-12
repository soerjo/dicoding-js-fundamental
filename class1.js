//membuat class dengan class
class Mail {
  from = "pengirim@gmail.com";
  sendMessage = (msg, to) => {
    console.log("you send:", msg, " to ", to, " from ", this.from);
  };
}

const mail1 = new Mail();
mail1.sendMessage("yo bujank!", "soerjo");
