const nameInput = document.getElementById(`name`);
// nameInput.addEventListener(`keypress`, function () {
//   console.log(`you press a key`);
// });

// nameInput.addEventListener(`keydown`, function () {
//   console.log(`down`);
// });
nameInput.addEventListener(`keyup`, function () {
  console.log(nameInput.value);
});
