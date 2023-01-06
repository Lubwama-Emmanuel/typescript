// enum Role {MALE, FEMALE}

// const person = {
//     name: "Emmanuel",
//     age: 24,
//     role: Role.FEMALE
// }

// console.log(person.role)
// function combine(input1: number | string, input2: number | string) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else if (typeof input1 === 'string' && typeof input2 === 'string'){
//     return input1.toString() + ' ' + input2.toString()
//   }
//   return result;
// }

// console.log(combine(10, 24));
// console.log(combine("Emmanuel", "Lubwama"));

function add(n1: number, n2: number) {
  return n1 + n2;
}

let combinedValue: (a: number, b: number) => number;
combinedValue = add;

// console.log(combinedValue(7, 6))
// console.log(add(8,8))

function withCb (a: number, b: number, cb: (num: number) => void){
  const result = a + b;
  cb(result)
}

withCb(12, 34, (result) => {
  console.log(result)
})

// function generateError(message: string, code: number): never {
//   throw { message: message, ErrorCode: code };
// }

// generateError("An error occured yooo", 699)

// SPREAD OPERATOR
// const person = {
//   name: "ema",
//   age: 78
// }

// const copiedPerson = { ...person }
// const newPerson = person;

// console.log(newPerson)
// console.log(copiedPerson)

// const hobbies = ['lubwama', 'emmanuel'];
// const allNames = [...hobbies, 'Rex'];
// console.log(allNames)

// REST PARAMETERS
const rest1Function = (...numbers: number[]) => {
  let sum = 0;
  let i: number;
  for (i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
  return sum; 
}

console.log(rest1Function(1, 2, 3, 4, 5))

const restFunction = (...numbers: number[]) => {
  return numbers.reduce(((preValue: number, curValue: number) => {
    return preValue + curValue
  }), 0)
}
console.log(restFunction(1, 2, 3, 4, 5))