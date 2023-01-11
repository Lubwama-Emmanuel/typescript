// type Admin = {
//   name: string;
//   privilages: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type ElevatedEmployee = Admin & Employee;

// const element1: ElevatedEmployee = {
//   name: "Emmanuel",
//   privilages: ["create-server"],
//   startDate: new Date(),
// };

// type unknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: unknownEmployee) {
//   console.log("Name " + emp.name);
//   if ("privilages" in emp) {
//     console.log("Privilages " + emp.privilages);
//   }

//   if ("startDate" in emp) {
//     console.log("startDate " + emp.startDate);
//   }
// }

// printEmployeeInfo({name: 'Erico', startDate: new Date()})

interface ErrorController {
  
}