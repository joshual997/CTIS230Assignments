myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);
myitem.addEventListener("out", onmouseout);

function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize = "50px";
}
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