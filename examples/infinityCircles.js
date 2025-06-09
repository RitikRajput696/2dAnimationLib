import {
  background,
  circle,
  createCanvas,
  fill,
  mouseX,
  mouseY,
  startLoop,
} from "../src/2dAnimationLib.js";

createCanvas(800, 800);

background("black");
function draw() {
  fill("#dbdbdb");
  circle(mouseX, mouseY, 100);
}

startLoop(draw);
