function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColour = document.querySelector(".widget");
const btn = document.querySelector(".change-color");

function changeColour(event) {
  const randomColor = getRandomHexColor();
  bgColour.style.backgroundColor = randomColor;
};

btn.addEventListener("click", changeColour);