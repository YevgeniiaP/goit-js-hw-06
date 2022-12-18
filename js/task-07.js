const  sizeControl = document.querySelector("#font-size-control");
const textInput = document.querySelector("#text");

function sizeChange(event) {
textInput.style.fontSize = event.currentTarget.value + "px";
}

sizeControl.addEventListener("input", sizeChange);












