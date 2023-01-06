// CLASSES

class Department {
  // private id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n
  }

  describe(this: Department) {
    console.log(`Department ${this.id} is ${this.name}`);
  }

  addEmployees(employe: string) {
    this.employees.push(employe);
  }

  printEmployeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  roles: string[] = [];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  addRoles(role: string) {
    this.roles.push(role);
  }
}

class AccountingDepartment extends Department {
  admins: string[];
  
  constructor(id: string, admins: string[]) {
    super(id, "Accounting");
    this.admins = admins;
  }
}

const it = new ITDepartment("ict", ["admin1"]);

it.describe();
it.addEmployees("Lubwama");
it.addEmployees("Emmanuel");
it.addRoles("Backend-Dev")
it.addRoles("Frontend-Dev")

const accounting = new AccountingDepartment("acc", ["admin2"]);

accounting.describe();
accounting.addEmployees("Ssenoga");
accounting.addEmployees("Raymond");

// it.printEmployeInfo();
// const itCopy = {name: 'rex',describe: it.describe}

// itCopy.describe()
console.log(it);
console.log(accounting);
