const textInput = document.querySelector("#validation-input");

const inputValidation = (event) => {
    textOutput.textContent = event.currentTarget.value
        ? event.currentTarget.value
        : "Anonymous";
};

textInput.addEventListener('blur', inputValidation);
