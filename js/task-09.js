const background = document.querySelector("span.color");
const btn = document.querySelector("button.change-color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
btn.addEventListener("click",e =>{
   body.style.backgroundColor = `${getRandomHexColor()}`;
   colorName.textContent = `${getRandomHexColor()}`;
})





slider.addEventListener("input", (event) => {
    text.style.fontSize = slider.value +"px"
});
