// createElement(`element`)
// creatTextNode(`text content`)
// insertBefore(`element`,`location`)

const result = document.querySelector(`#result`);
const first = document.querySelector(`.red`);
// create empty element

const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode(`simple body div`);
bodyDiv.appendChild(text);
document.body.insertBefore(bodyDiv, result);

const heading = document.createElement(`h1`);
const text1 = document.createTextNode(`simple body div`);
heading.appendChild(text1);
result.insertBefore(heading, first);

heading.classList.add(`blue`);
console.log(result.children);

// replaceChild('new','old')

const headingSm = document.createElement(`h6`);
text2 = document.createTextNode(`Here is small heading`);
headingSm.appendChild(text2);
result.replaceChild(headingSm, heading);
headingSm.classList.add('blue');
