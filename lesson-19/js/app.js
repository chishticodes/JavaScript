const first = document.querySelector('#first');

// nextSibling
// it also return white spaces with the items
// there is a easier method called nextElementSibling - in this you bypass the white spaces
const second = first.nextSibling.nextSibling;
second.style.color = `red`;
console.log(second);

// previousSibling is  the same method but you will have white spaces with the list items
const last = document.querySelector(`#last`);
const third = last.previousElementSibling;
console.log(third);
