// encapsulation - the best functions with no parameters. 
var employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};
employee.getWage();
