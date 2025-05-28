// import {
//   background,
//   circle,
//   createCanvas,
//   line,
//   ellipse,
//   noStroke,
//   stroke,
//   strokeWeight,
//   fill,
//   rect,
//   mouseX,
//   mouseY,
//   point,
//   rotate,
// } from "./2dAnimationLib.js";

// createCanvas(window.innerWidth, window.innerHeight);
// background("purple");

// rotate(Math.PI / 4);
// stroke("white");
// fill("red");
// rect(200, 200, 250, 250);

// function Animate() {
//   requestAnimationFrame(Animate);

//   fill("yellow");
//   circle(mouseX, mouseY, 100);
// }
// Animate();

import {
  createCanvas,
  background,
  fill,
  rect,
  push,
  pop,
  translate,
  rotate,
  scale,
  startLoop,
  noStroke,
  stroke,
  strokeWeight,
  text,
  textAlign,
  textSize,
  textFont,
  randomColor,
} from "./2dAnimationLib.js"; // adjust this path to match your setup

createCanvas(window.innerWidth, window.innerHeight);

let x = 0;
let speed = 2;
function draw() {
  background("white");
  textFont("georgia");
  textSize(20);
  fill(randomColor());
  text("hello world", x, 300);
  x = x + speed;

  if (x > window.innerWidth - 100 || x <= 0) {
    speed = -speed;
  }
}

// let x = 0;

// function draw() {
//   background("white");

//   fill("blue");
//   textSize(24);
//   text("Moving Text →", x, 100);

//   x += 2;
//   if (x > 400) x = -100;
// }

startLoop(draw);
