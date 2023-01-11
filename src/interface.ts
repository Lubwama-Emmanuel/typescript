interface Greetable {
  name: string;
  age: number;

  greet(pharse: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string, years: number) {
    this.name = n;
    this.age = years;
  }

  greet(pharse: string): void {
    console.log(pharse + " " + this.name);
  }
}

const user1 = new Person("Rex", 67);
user1.greet("Hi");
console.log(user1)
