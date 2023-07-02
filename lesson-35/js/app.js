// event propogation
// event bubbling
// event capturing

const container = document.querySelector(`.container`);
const list = document.querySelector(`.list-items`);

function showBubbling(e) {
  console.log(`current target`, e.currentTarget);
  console.log(`target`, e.target);
}

list.addEventListener(`click`, showBubbling);
container.addEventListener(`click`, showBubbling);

function stopPropagation(e) {
  e.stopPropagation();
}
list.addEventListener(`click`, stopPropagation);
