const buttonStart = document.querySelector('[data-start]');
const buttonEnd = document.querySelector('[data-stop]');
let changeIntervalId;


buttonStart.addEventListener('click', onChangeColorStart);
buttonEnd.addEventListener('click',  onChangeColorEnd);
buttonEnd.disabled = true;
function onChangeColorStart(){

    changeIntervalId = setInterval(() => {
        const randomColor = getRandomHexColor()
 document.body.style.backgroundColor = randomColor;
    }, 1000);
     
    
    buttonStart.disabled = true;
    buttonEnd.disabled = false;
}

function onChangeColorEnd(){
    clearInterval(changeIntervalId,1000);
    buttonStart.disabled = false;
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  } 
