import {
  createCanvas,
  background,
  startLoop,
  circle,
  pop,
  translate,
  fill,
  randomColor,
} from "../src/2dAnimationLib.js";

createCanvas(window.innerWidth, window.innerHeight);

console.log(window.innerWidth, innerHeight);

let circleArray = [];

for (let i = 0; i < 100; i++) {
  let radius = Math.random() * (100 - 30) + 30;
  circleArray.push({
    radius: radius,
    circleX: Math.random() * (window.innerWidth - radius - radius) + radius,
    circleY: Math.random() * (window.innerHeight - radius - radius) + radius,
    color: randomColor(),
    dy: Math.random() * (6 - 1) + 1,
  });
}

let ySpeed = 2;

function draw() {
  background("white");

  for (let i = 0; i < circleArray.length; i++) {
    fill(circleArray[i].color);
    circle(
      circleArray[i].circleX,
      circleArray[i].circleY,
      circleArray[i].radius
    );
    circleArray[i].circleY += circleArray[i].dy;

    if (
      circleArray[i].circleY < 0 ||
      circleArray[i].circleY > window.innerHeight - circleArray[i].radius
    ) {
      circleArray[i].dy *= -1;
    }
  }
}

startLoop(draw);
