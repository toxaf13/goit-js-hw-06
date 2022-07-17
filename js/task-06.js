const textInput = document.querySelector("#validation-input");

const textInputLength = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
    if (textInput.value.length >= textInputLength) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");    } 
   else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }});