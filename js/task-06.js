const textInput = document.querySelector("#validation-input");
let validLength = Number(textInput.dataset.length);

function validationCheck(event) {

  if (event.currentTarget.value.length === validLength) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  }
    else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    };
};

textInput.addEventListener("blur", validationCheck);


