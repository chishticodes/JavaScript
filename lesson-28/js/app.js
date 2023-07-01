// css
// adding css properties with document.style.xyz will not a good practice
// better way of doing this is using classList
// in this way you can apply as many css properties you want on you element and you also keep the code clean

const random = document.querySelector(`.random`);

// random.style.backgroundColor = `blue`;
// random.style.color = `white`;
// random.style.fontSize = `3rem`;
// random.style.textTransform = `capitalize`;

random.classList.add(`title`);
