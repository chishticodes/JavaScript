const contianer = document.querySelector(`.container`);
const btn = document.querySelector(`.btn`);
// const heading = document.querySelector(`.heading`);

function sayHello() {
  console.log(`hello there`);
}

btn.addEventListener(`click`, function () {
  const element = document.createElement(`h1`);
  element.classList.add(`heading`);
  element.textContent = `i am inside container dynamically`;
  contianer.appendChild(element);
});

// heading.addEventListener(`click`, sayHello);

contianer.addEventListener(`click`, function (evnet) {
  if (event.target.classList.contains(`heading`)) {
    console.log(
      `hello there its a dynamically targeted class on a dynamic heading`
    );
  }
});
