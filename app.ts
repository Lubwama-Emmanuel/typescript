// enum Role {MALE, FEMALE}

// const person = {
//     name: "Emmanuel",
//     age: 24,
//     role: Role.FEMALE
// }

// console.log(person.role)
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else if (typeof input1 === 'string' && typeof input2 === 'string'){
    return input1.toString() + ' ' + input2.toString()
  }
  return result;
}

console.log(combine(10, 24));
console.log(combine("Emmanuel", "Lubwama"));
