// any variable outside code block is global scope

//from anywhere in your program the value of global variables can be changed so you have to be extremely careful using them inside the code block

let name = 'Hasan';
name = 'Bilal';
//const name = 'sarim'; this is not allowed

function calculate() {
  console.log(name);
  name = 'sarim';
}

calculate();

if (true) {
  console.log(name);
  name = 'Minhaj';
}

console.log(`my name is ${name} and i am awesome`);

// local scope can be accessed outside the code block (const and let)
let firstName = 'Bilal';
let age = 29;

function codeBlock() {
  let firstName = 'Hasan';
  //just remember that there is a difference between
  // let firstName and firstName
  //if you define(use let or const with the variable) the variable in the code block the variable will not change the value in the global scope however if you assign the value to code block instead of defining it(using let or const with the variable), it will overwrite the value in the global scope

  age = 30;
}

codeBlock();
console.log(firstName);
console.log(age);

// Code block can be if statement - a function and it can be as simple as a simple curly braces
