function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgColour = document.querySelector(".color");
const btn = document.querySelector(".change-color");

function changeColour(event) {
  let randomColor = getRandomHexColor();
  bgColour.textContent = randomColor;
};

btn.addEventListener("click", changeColour);