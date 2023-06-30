// getElementById('element')

const h1 = document.getElementById('title');
h1.style.color = `red`;

const btn = document.getElementById('btn');

btn.style.backgroundColor = `blue`;
btn.style.color = `white`;

//getElementByTagName
// this returns array like objects but they are not array they are nodelist
const headingH2 = document.getElementsByTagName('h2');
headingH2[0].style.color = `red`;

//h2 is transforming headingH2 in array from nodelist
const h2 = [...headingH2];

h2.forEach(function (items) {
  console.log(items);
});

console.log(headingH2);
console.log(h2);

//getElementByClassName('className')
// similar to getElementByTagName it also returns a nodelist

const listItems = document.getElementsByClassName('special');
// make banana blue color
listItems[1].style.color = `blue`;

console.log(listItems);

//querySelector('any CSS') - selects single element
//querySelectorAll('any CSS') - selects all the elements
// querySelectorAll - returns array so we can use forEach

const res = document.querySelector(`#result`);
res.style.backgroundColor = `gray`;

lastItem = document.querySelector(`li:last-child`);
console.log(lastItem);

specialItems = document.querySelectorAll('.special');
specialItems.forEach(function (itemz) {
  console.log(itemz);
  itemz.style.color = `yellow`;
});
