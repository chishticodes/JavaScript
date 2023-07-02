const btn = document.querySelector(`.btn`);
const heading = document.querySelector(`h2`);

function toggleColor() {
  let hasClass = heading.classList.contains(`red`);
  // if (hasClass) {
  //   heading.classList.remove(`red`);
  // } else {
  //   heading.classList.add(`red`);
  // }

  hasClass ? heading.classList.remove(`red`) : heading.classList.add(`red`);
}

btn.addEventListener(`click`, toggleColor);
