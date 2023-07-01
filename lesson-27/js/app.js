// innerHTML
// textContent

const list = document.getElementById(`first`);
const div = document.getElementById(`second`);
const item = document.querySelector(`item`);

console.log(list.textContent);
console.log(div.textContent);
console.log(div.innerHTML);
console.log(list.innerHTML);

const randomVar = `randomValue`;

const ul = document.createElement(`ul`);
// html stucture like this can be added only by using innerHTML not by textContent
ul.innerHTML = `<li class="item">${randomVar}</li>
    <li>list item</li>`;
document.body.appendChild(ul);
