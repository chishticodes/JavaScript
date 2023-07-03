// if the value in localStorage is not an string but an array or object, you need to use JSON.stringify to save it and to JSON.parse to fetch the result

const friends = ['hasan', 'sarim', 'sajjad'];

localStorage.setItem('friends', JSON.stringify(friends));
const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[0]);

// checking if the value is there in a localstorage

let fruits;

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

console.log(fruits);

// fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', JSON.stringify(fruits));
