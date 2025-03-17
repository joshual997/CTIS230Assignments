myitem = document.getElementById("firsttest");
// this returns a single element based on that elements id

myitem.addEventListener("click", onClick1);
// specify the event and the funtion to be executed
function onClick1() {  
    myitem.style.color = "green";  
    myitem.style.fontSize = "50px";
    // these are the results of what happens when the event is executed, changes color and font size
}

myitem.addEventListener("mouseout", onmouseout);
function onmouseout() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}

thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick1);
function onButtonClick1() {
    otheritem.style.color = "red";
}

textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);
function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}

thebutton2 = document.getElementById("thebutton2");
otheritem2 = document.getElementById("buttontest2");
thebutton2.addEventListener("click", onButtonClick2);
function onButtonClick2() {
    otheritem2.style.color = "yellow";
}

myitem2 = document.getElementById("supertest");
myitem2.addEventListener("click", onClick2);
function onClick2() {
    myitem2.style.color = "orange";
}