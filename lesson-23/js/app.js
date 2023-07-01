// createElement(`element`)
// creatTextNode(`text content`)
// element.appendChild(childElement)

const result = document.querySelector(`#result`);

// create empty element

const bodyDiv = document.createElement('div');
// create text node
const text = document.createTextNode(`simple body div`);
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

// result.appendChild(bodyDiv);

const heading = document.createElement(`h1`);
const text1 = document.createTextNode(`simple body div`);
heading.appendChild(text1);
result.appendChild(heading);

heading.classList.add(`blue`);
console.log(result.children);
