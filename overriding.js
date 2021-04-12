class Mail {
  _contacts = [];
  constructor(author) {
    this.from = author;
  }
  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
    // return `you send: ${msg} to ${to} from ${this.from}`
  }
  showAllContacts() {
    return this._contacts;
  }
}

class WhatsApp extends Mail {
  constructor(userName, isBussinessAccount, phone) {
    super(phone);
    this.userName = userName;
    this.isBussinessAccount = isBussinessAccount;
  }

  // Overriding method => melakukan Overriding total
  sendMessage(msg, to) {
    super.sendMessage(msg, to);
    console.log("send by Wa with number phone: ", this.from);
  }
}

const Wa1 = new WhatsApp("soerjo", false, 087808295838);
Wa1.sendMessage("halo", "bujank");
