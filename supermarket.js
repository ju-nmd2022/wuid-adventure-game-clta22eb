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


cashRegister.onclick = function() {
    const cashRegister = document.getElementById("cash");
    if (salsa.style.display === "none") {
        alert("Purchase complete! Thank you for shopping at Marks-Mart!");
    } else {
        alert("Can't complete purchase, make sure your have selected all items!")
    }
}

