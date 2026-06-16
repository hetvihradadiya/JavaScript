// "use strict";

// let js = "Amazing";
// // if (js === "Amazing") alert("Javascript is FUN!!");

// console.log(40 - 80 + 100 * 10);

// console.log(23.1);

// firstName = "Hetvi";
// lastName = "Radadiya";

// console.log(firstName + " " + lastName);

// Challenge 1
// height_m = 1.69;
// mass_m = 78;

// height_j = 1.95;
// mass_j = 92;

// height_m = 1.88;
// mass_m = 95;

// height_j = 1.76;
// mass_j = 85;

// BMI_m = mass_m / (height_m * height_m);
// BMI_j = mass_j / (height_j * height_j);

// if (BMI_j > BMI_m) {
//   markHigherBMI = "John";
// } else {
//   markHigherBMI = "Mark";
// }

// console.log(markHigherBMI);

/* 

completed

10. Practice Assignments

11. Data Types


12. let, const and var


13. Basic Operators


14. Operator Precedence

17. Strings and Template Literals


18. Taking Decisions: if / else Statements

19. CHALLENGE #2: Video Solution

20. Type Conversion and Coercion


21. Truthy and Falsy Values


22. Equality Operators: == vs. ===


23. Boolean Logic

24. Logical Operators

26. The switch Statement


27. Statements and Expressions

28. The Conditional (Ternary) Operator

30. JavaScript Releases: ES5, ES6+ and ESNext
14min
*/

// const calcAge1 = function (birthyear) {
//   return 2027 - birthyear;
// };

// birthyear = 2006;

// console.log(calcAge1(birthyear));

// const calcAge3 = (bYear) => 2027 - bYear;

// console.log(calcAge1(birthyear));

// const yearsOfRetirement = (birthYear, firstName) => {
//   const age = 2026 - birthYear;
//   const retire = 65 - age;
//   return `${firstName} will retire in ${retire} years.`;
// };

// console.log(yearsOfRetirement(2005, "Hetvi"));

// frds = ["hetvi", "zeel", "srushti"];
// console.log(frds);

// hetu = {
//   firstName: "Hetvi",
//   lastNAme: "Radadiya",
//   age: 20,
//   job: "SDE Intern",
//   location: "Ahmedabad",
//   friends: ["Zeel", "Bhalu", "srushti"],
// };

// console.log(hetu);

// console.log(
//   `${hetu.firstName} has ${hetu.friends.length} friends, and her bestfriend is ${hetu.friends[0]}`,
// );

hetu = {
  firstName: "Hetvi",
  lastNAme: "Radadiya",
  birthYear: 2006,
  job: "SDE Intern",
  location: "Ahmedabad",
  friends: ["Zeel", "Bhalu", "srushti"],

  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2026 - this.birthYear;
    return this.age;
  },
};

console.log(hetu);
