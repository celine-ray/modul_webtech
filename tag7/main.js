/* console.log(
  document.getElementById('element')
); */

let n = 0;
console.log(n);

n=n+1;
console.log(n);

/* Animation Element verschieben */
function buttonPressed() {
  n=n+100;
  document.getElementById("element").style.left = n + "px";
  document.getElementById("element").style.backgroundColor = "yellow";
  document.getElementById("element").style.borderColor = "black";
  document.getElementById("element").style.borderWidth = "thick";
  document.getElementById("element").style.borderRadius = "50%";
}

/* Animation Elemente hinzufügen */
function neuesElement() {
  let div = document.createElement("div");
  div.classList.add('random');
  document.body.appendChild(div);
}

/* Animation Kreis */
function starteAnimation() {
    let element = document.getElementById('kreis2');
    element.style.animationPlayState = "running";
}
window.addEventListener("scroll", starteAnimation);

/* Mouse Follow */ 
var xp = 0,
  mouseX = 0;
var yp = 0,
  mouseY = 0;
var xpDot = 0,
  mouseX = 0;
var ypDot = 0,
  mouseY = 0;

const cursorFollower = document.querySelector(".cursorFollower");
const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

setInterval(function () {
  xp += (mouseX - xp) / 15;
  yp += (mouseY - yp) / 15;

  cursorFollower.style.left = xp + "px";
  cursorFollower.style.top = yp + "px";
}, 20);

setInterval(function () {
  xpDot += (mouseX - xpDot) / 25;
  ypDot += (mouseY - ypDot) / 25;

  cursorFollowerDot.style.left = xpDot + "px";
  cursorFollowerDot.style.top = ypDot + "px";
}, 20);
