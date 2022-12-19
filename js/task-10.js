function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const container = document.querySelector('#controls');
 const btnCreate = document.querySelector('[data-create]');
 const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');


function createBoxes(amount) {
  amount = container.value;
  container.boxSize = 30;

  for (let i = 0; i < amount; i++){
    container.style = `width: ${size}px; height: ${size}px; background-color:  ${getRandomHexColor()}`; 
    size += 10;
  };
}


function destroyBoxes() {
boxes.innerHTML = "";
}


btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);