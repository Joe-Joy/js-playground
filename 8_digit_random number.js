class Transaction {
  constructor(a) {
    this.a = a || 0;
  }

  createTransaction() {
    if (this.a == 0) {
      var getDate = new Date();
      var month = getDate.getMonth() + 1;
      var randomId = "" + Math.floor(10000000 + Math.random() * 90000000);
      var finalDate = "".concat(
        getDate.getFullYear(),
        month,
        getDate.getDate(),
        randomId
      );
      return finalDate;
    } else {
      var randomId = "" + Math.floor(10000000 + Math.random() * 90000000); //8 digits
      var finalDate = "".concat(this.a, randomId);
      return finalDate;
    }
  }

  getTransaction() {
    return this.createTransaction();
  }
}

var te = new Transaction(20210115);

console.log(te.getTransaction());

//  Math.floor(Math.random() * 1000000000) - 9 digits
//  Math.floor(10000000 + Math.random() * 90000000) - 8 digits
