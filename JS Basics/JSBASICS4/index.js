// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // NOTE: Hoisting is the process where fn declarations are pushed on top of the file automatically by javascript engine.//
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// running(); // this is running even if called before declaration due to HOISTING

// ////////////////////// TYPES OF FUNCTION ////////////////////
// // 1. function declaration
// function running() {
//   console.log("Running");
// }

// // 2. NAMED function assignment
// let stand = function walk() {
//   console.log("Walking");
// };

// // HOISTING pushes function decalaration and NOT fn assignement
// // Calling stand() before DOES NOT WORK
// stand();

// let jump = stand;

// jump();

// // 3. ANONYMOUS function assignment
// let stand2 = function () {
//   console.log("Walking 2");
// };

// stand2();

// // WORKS because JS is dynamic in nature
// let x = 1;
// x = "a";

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// // console.log(sum(1, 2)); // 3
// // console.log(sum(1)); // NaN as b = undefined
// console.log(sum(1, 2, 3, 4, 5)); // Works only first 2 are used

// // EXTRA PARAMETERS ARE IN AN OBJECT CALLED 'arguments'

// /////////////// REST OPERATOR '...' ////////////////
// function sum2(...args) {
//   // makes ARRAY OF ALL PARAMETERS
//   console.log(args);
// }

// sum2(1, 2, 3);

// function sum3(f1, f2, ...args) {
//   // f1 = 1, f2 = 3, args = rest i.e. others left
//   console.log(args);
// }

// sum3(1, 2, 3, 4, 5, 6, 7);

// ////// NOTE: REST OPERATOR HAS TO BE ADDED LAST
// /// (f1, f2, ...args, f4) gives errors

// ///////////////// DEFAULT PARAMETERS /////////////

// function interest(p, r = 6, y = 10) {
//   return (p * r * y) / 100;
// }

// console.log(interest(1000));

// console.log(interest(1000, undefined, 5)); // HACK to use only r's default value

////////////////////// GETTER-SETTER //////////////////
// GETTER(access properties)
// SETTER(change or mutate value)
let person = {
  fName: "Firstname",
  lName: "Lastname",
  get fullName() {
    return `${person.fName} ${person.lName}`;
  },
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("You have not sent a string");
    }
    let parts = value.split(" ");
    this.fName = parts[0];
    this.lName = parts[1];
  },
};

try {
  //   person.fullName = "Shubham Rawat"; // SETTER CALLED
  person.fullName = 2; // SETTER CALLED
} catch (e) {
  console.error(e);
}
console.log("Fullname: ", person.fullName); // GETTER CALLED

// LET vs VAR
{
  let a = "a"; // local scope
  var b = "b"; // global scope
}

// console.log(a); // GIVES ERROR AS a is let variable
console.log(b); // WORKS AS b is var variable

// let scope till block inside it is {

// }

function fn() {
  var c = "c";
}

console.log(c); // ERROR AS var is scoped inside its function fn() only
