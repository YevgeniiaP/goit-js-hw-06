const value = document.querySelector(`#value`);
const incrnt = document.querySelector("[data-action='increment']");
const decrnt = document.querySelector("[data-action='decrement']");

let counterValue = 0;

const incrementBtn = () => {
    counterValue += 1;
    valueElement();
};
const decrementBtn = () => {
    counterValue -= 1;
    valueElement();
};
    
const valueElement = () => {
    value.textContent = counterValue;
};

incrnt.addEventListener('click', incrementBtn);decrnt.addEventListener('click', decrementBtn);
