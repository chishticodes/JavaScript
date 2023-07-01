//childNodes

const ul = document.querySelector(`#result`);

// childNode returns the children including the wide spaces
const allChildren = ul.childNodes;
console.log(allChildren);

// childen is a better option instead of childNodes as it returns a list items only
const children = ul.children;
console.log(children);

//firstChild
const fChild = ul.firstChild;
console.log(fChild);
//firstChild
const lChild = ul.lastChild;
console.log(fChild);

//parent element
const headingH2 = document.querySelector(`h2`);
// console.log(headingH2.parentElement.parentElement.parentElement.parentElement);
const secHeading = headingH2.parentElement;
secHeading.style.color = `red`;
