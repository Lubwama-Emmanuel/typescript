// CLASSES

class Department {
  // private id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n
  }

  describe(this: Department) {
    console.log(`Department ${this.id} is owned by ${this.name}`);
  }

  addEmployees(employe: string) {
    this.employees.push(employe);
  }

  printEmployeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const logger = new Department("d1", "Emmanuel");
logger.describe();

logger.addEmployees("rex");
logger.addEmployees("rex");
logger.printEmployeInfo();
// const loggerCopy = {name: 'rex',describe: logger.describe}

// loggerCopy.describe()
console.log(logger);
