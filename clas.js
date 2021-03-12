class Transaction {
  constructor(a) {
    this.a = a || 0;
  }

  createTransaction() {
    if (this.a == 0) {
      var getDate, month, randomId, finalDate;
      getDate = new Date();
      month = getDate.getMonth() + 1;
      randomId = ("" + Math.random()).substring(2, 100);
      finalDate = "".concat(
        getDate.getFullYear(),
        month,
        getDate.getDate(),
        randomId
      );
      return finalDate;
    } else {
      var randomId, finalDate;
      randomId = ("" + Math.random()).substring(2, 100);
      finalDate = "".concat(this.a, randomId);
      return finalDate;
    }
  }

  getTransaction() {
    return this.createTransaction();
  }
}

var te = new Transaction();

console.log(te.getTransaction());
