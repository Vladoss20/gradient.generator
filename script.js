var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");     // .name to grab class #id to grab id
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
setGradient();
function setGradient()
{
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}
function createButton(){
    var click = document.createElement("button");
    click.appendChild(document.createTextNode("random colors"));
    body.appendChild(click);
    click.addEventListener("click", randomGradient);
}
function randomGradient()
{
    color1.value ="#"+ Math.floor(Math.random()*16777215).toString(16);         // rounds value of random number from 0 to 16777215(FFFFFF in hexal), and converting to
    color2.value ="#"+ Math.floor(Math.random()*16777215).toString(16);         // string in hexal syntax
    setGradient();
}
createButton();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);