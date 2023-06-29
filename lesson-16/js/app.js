// forEach
// does not return a new array
console.log(`forEach`);
const people = [
  { name: 'hasan', age: 29, position: 'developer' },
  { name: 'sarim', age: 31, position: 'developer' },
  { name: 'sajjad', age: 30, position: 'QA' },
];

//here show people is a callback function and callback functions are never invoked but they are referenced
people.forEach(showPerson);

function showPerson(person) {
  console.log(person.name.toUpperCase());
}
// another way to use forEach function, here callback is directly passed to the forEach
people.forEach(function (item) {
  console.log(item.age);
});

// map
// does return a new array
// does not change the size of the origional array

console.log(`maps`);

const nameHead = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = nameHead.join('');

// filter
// return a new array
// Can change the sign of the Array based on the condition

console.log(`young people`);

const youngPeople = people.filter(function (person) {
  return person.age <= 30;
});
console.log(youngPeople);

// find
// returns single instance - for this example objects
//  returns first match - if no match undefined
// great for getting unique value

console.log(`find`);

const employee = [
  { name: 'hasan', age: 29, position: 'developer', id: 1 },
  { name: 'sarim', age: 31, position: 'developer', id: 2 },
  { name: 'sajjad', age: 30, position: 'QA', id: 3 },
];

const bestEmployee = employee.find(function name(item) {
  return item.id === 3;
});

console.log(bestEmployee);

// reduce
// reduce to a single value - number, array, object

console.log(`reduce`);

const employeePay = [
  { name: 'hasan', age: 29, position: 'developer', id: 1, salary: 300 },
  { name: 'sarim', age: 31, position: 'developer', id: 2, salary: 350 },
  { name: 'sajjad', age: 30, position: 'QA', id: 3, salary: 400 },
];

const total = employeePay.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money: ${currItem.salary}`);
  acc += currItem.salary;

  return acc;
}, 0);

console.log(`total Salary = ${total}`);
