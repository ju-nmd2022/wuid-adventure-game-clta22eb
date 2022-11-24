console.log("so you found the console, you nerd 🥸");

const day = document.getElementById("day");

var randomNumber = Math.floor(Math.random() * 7);
console.log(randomNumber)

function setDay () {
    if (randomNumber === 0) {
        day.innerHTML = "It's monday,";
    } else if (randomNumber === 1) {
        day.innerHTML = "It's tuesday,";
    } else if (randomNumber === 2) {
        day.innerHTML = "It's wednesday,";
    } else if (randomNumber === 3) {
        day.innerHTML = "It's thursday,";
    } else if (randomNumber === 4) {
        day.innerHTML = "It's friday,";
    } else if (randomNumber === 5) {
        day.innerHTML = "It's saturday,";
    } else if (randomNumber === 6) {
        day.innerHTML = "It's sunday,";
    }
}

setDay();

var startButton = document.getElementById("begin");

startButton.onClick = function(){
    startButton.style.display = "none";
}