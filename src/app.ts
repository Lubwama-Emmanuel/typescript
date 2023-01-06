interface Person{
    name: string;
    age: number;

    greet(pharse: string): void;
}

let user1: Person;

user1 = {
    name: "Emmanuel",
    age: 34,

    greet(pharse) {
        console.log(pharse + ' ' + this.name)
    },
}
 user1.greet("Hi")