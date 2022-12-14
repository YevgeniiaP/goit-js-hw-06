const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const inputAction = (event) => {
    textOutput.textContent = event.currentTarget.value
        ? event.currentTarget.value
        : "Anonymous";
};

textInput.addEventListener('input', inputAction);

