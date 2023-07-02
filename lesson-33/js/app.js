// event object argument e, evt

const heading = document.querySelector(`h2`);
const btn = document.querySelector(`.btn`);

// heading.addEventListener(`click`, function (event) {
//   console.log(event.currentTarget);
// });
// btn.addEventListener(`click`, function (event) {
//   console.log(event.currentTarget);
// });
btn.addEventListener(`click`, function (event) {
  event.currentTarget.classList.add(`blue`);
  event.currentTarget.classList.remove(`btn`);
});

heading.addEventListener(`click`, function (event) {
  event.currentTarget.classList.add(`blue`);
});
