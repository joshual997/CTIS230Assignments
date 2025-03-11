myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);
function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize = "50px";
}

myitem.addEventListener("mouseout", onmouseout);
function onmouseout() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}

thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {
    otheritem.style.color = "red";
}

thebutton = document.getElementById("thebutton2")
otheritem = document.getElementById("buttontest2")
thebutton2.addEventListener("click", onButtonClick);
function onButtonClick() {
    otheritem.style.color = "yellow";
}