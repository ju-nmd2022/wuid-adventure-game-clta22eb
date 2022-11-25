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
    alert("Your meat is now cooked!");
    item3.src = "meat.svg";
    meat.setAttribute("class", "cooked");
}

complete.style.display = "none";

eat.onclick = function(){
     // How to use and operator (&&) found at https://bobbyhadz.com/blog/javascript-specify-multiple-conditions-in-if-statement 
    if (salsa.style.display === "none" && corn.style.display === "none" && meat.style.display === "none" && meat.hasAttribute("class", "cooked")) {
        complete.style.display = "block";
    } else {
        alert("ew bad taco... assemble correctly it first! Let's try again.");
        location.reload();
    }
}


// complete.onclick = function(){
//     alert("click on the door to go back to the beginning. sorry, im to tired to fix this last part :,)")
    
// }
