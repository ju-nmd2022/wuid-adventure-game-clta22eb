const salsa = document.getElementById("item1")
const corn = document.getElementById("item2")
const meat = document.getElementById("item3")
const stove = document.getElementById("box")
const eat = document.getElementById("eat")
const complete = document.getElementById("finish")

salsa.onclick = function(){
    salsa.style.display = "none";
}
corn.onclick = function(){
    corn.style.display = "none";
}
meat.onclick = function(){
    meat.style.display = "none";
}

stove.onclick = function() {
    alert("Your meat is now cooked!")
    item3.src = "meat.svg";
}

// let complete.style.visibility = "hide";

// eat.onclick = function(){

// }