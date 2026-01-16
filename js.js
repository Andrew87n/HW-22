const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

sliderInput.addEventListener(
  "input",
  _.throttle((e) => {
    const value = e.target.value;
    sliderImage.style.width = `${value * 3}px`;
  }, 100)
);

const flyRef = document.querySelector("#box")
const btnRef = document.querySelector("#btn")
let count = 0
let isActive = false;

const moveBox = _.throttle((e) => {
  count++;
  console.log(count);

  const x = e.clientX;
  const y = e.clientY;
  const width = flyRef.offsetWidth;
  const height = flyRef.offsetHeight;

  flyRef.style.position = "absolute";
  flyRef.style.left = x - width / 2 + "px";
  flyRef.style.top = y - height / 2 + "px";
}, 16); 

btnRef.addEventListener("click", () => {
  if (isActive) return;

  document.addEventListener("mousemove", moveBox);
  isActive = true;
});