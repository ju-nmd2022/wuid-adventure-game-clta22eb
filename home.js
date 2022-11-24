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

complete.style.display = "none";

eat.onclick = function(){
    if (corn.style.display === "none") {
        complete.style.display = "block"
    } else {
        alert("ew bad taco... assemble it first!")
    }
}

// complete.onclick = function(){
//     alert("click on the door to go back to the beginning. sorry, im to tired to fix this last part :,)")
    
// }
