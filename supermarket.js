const salsa = document.getElementById("item1")
const corn = document.getElementById("item2")
const meat = document.getElementById("item3")

salsa.onclick = function(){
    salsa.style.display = "none";
}
corn.onclick = function(){
    corn.style.display = "none";
}
meat.onclick = function(){
    meat.style.display = "none";
}

const cashRegister = document.getElementById("cash");
const leave = document.getElementById("door");
leave.style.display = "none";


cashRegister.onclick = function() {
    const cashRegister = document.getElementById("cash");
    // How to use and operator (&&) found at https://bobbyhadz.com/blog/javascript-specify-multiple-conditions-in-if-statement 
    if (salsa.style.display === "none" && corn.style.display === "none" && meat.style.display === "none") {
        alert("Purchase complete! Thank you for shopping at Marks-Mart!");
        leave.style.display = "block";
    } else {
        alert("Can't complete purchase, make sure your have selected all items!")
    }
}


