function hello() {
  console.log('hello i am Bilal');
}

hello();

//passing parameters in functions
function greet(name) {
  console.log('hello ' + name);
}

greet('hasan');
greet('sarim');

//inches to cm
//1 inch = 2.54 cm

function cmtoinch(value) {
  result = value / 2.54;
  return result;
}
console.log(cmtoinch(179));

//functions in variables

const mutliply = function (num1, num2) {
  let value = num1 * num2;
  return value;
};

console.log(mutliply(5, 3));

//arrow function
const subtract = (num1, num2) => num1 - num2;

console.log(subtract(5, 3));
