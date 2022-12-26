function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColour = document.querySelector("body");
const btn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

function changeColour(event) {
  const randomColor = getRandomHexColor();
  bgColour.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
};

btn.addEventListener("click", changeColour);