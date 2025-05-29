import {
  createCanvas,
  startLoop,
  background,
  push,
  translate,
  rotate,
  fill,
  rect,
  pop,
} from "../src/2dAnimationLib.js";
createCanvas(window.innerWidth, window.innerHeight);
let angle = 0;

function draw() {
  background("white");
  push();
  translate(window.innerWidth / 2, window.innerHeight / 2);
  rotate(angle);
  fill("green");
  rect(-100, -100, 100, 100);
  pop();
  angle += 0.05;
}

startLoop(draw);
