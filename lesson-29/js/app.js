// select element first
// addEventListener
// what event, what to do(callback function)

const btn = document.querySelector(`.btn`);
const heading = document.querySelector(`h2`);

btn.addEventListener(`click`, function () {
  // console.log(`you clicked me`);
  heading.classList.add(`red`);
});
