class Mail {
  _contacts = [];
  constructor(author) {
    this.from = author;
  }
  sendMessage = (msg, to) => {
    this._contacts.push(to);
    return `you send: ${msg} to ${to} from ${this.from}`;
  };
  showAllContacts() {
    return this._contacts;
  }
}

class WhatsApp extends Mail {
  userName = "dicoding";
  isBussinessAccount = true;
  myProfile = function () {
    return `my name ${this.userName}, is ${
      this.isBussinessAccount ? "Bussiness" : "Personal"
    }`;
  };
}

const wal = new WhatsApp(087808295838);
const hasilMessage = wal.sendMessage("yo bujank!", 087808295838);
console.log(wal.myProfile());
console.log(hasilMessage);
// console.log(wal.from);
