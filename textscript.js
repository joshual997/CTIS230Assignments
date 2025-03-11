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

thebutton2 = document.getElementById("thebutton2")
otheritem2 = document.getElementById("buttontest2")
thebutton2.addEventListener("click", onButtonClick);
function onButtonClick() {
    otheritem2.style.color = "yellow";
}

textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);
function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}
