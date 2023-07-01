// className
//classList

const first = document.getElementById(`first`);
const second = document.getElementById(`second`);
const third = document.getElementById(`third`);

// className
// const classValue = first.className;
// console.log(classValue);

second.className = `colors text`;

third.classList.add('colors');
third.classList.add('text');

const classValue = third.classList;
console.log(classValue);

// removing from classList
third.classList.remove(`colors`);

second.classList.remove(`text`);

let result = third.classList.contains('text');
console.log(result);
