import {
  background,
  circle,
  createCanvas,
  fill,
  mouseX,
  mouseY,
} from "./2dAnimationLib.js";

createCanvas(500, 500);
background("#e5c891");

function Animate() {
  requestAnimationFrame(Animate);

  fill("yellow");
  circle(mouseX, mouseY, 100);
}
Animate();
