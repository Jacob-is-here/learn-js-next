let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    gateWage: function(){
        return this.baseSalary +(this.overtime * this.rate);
    }
};

console.log(employee.gateWage());