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
} from "./2dAnimationLib.js"; // adjust this path to match your setup

createCanvas(window.innerWidth, window.innerHeight);

function draw() {
  background("white");

  push(); // Save canvas state
  translate(window.innerWidth / 2, window.innerHeight / 2); // Move origin to center
  scale(2);
  rotate(Math.PI / 4); // Rotate 45 degrees (in radians)
  fill("lightblue");
  rect(-50, -25, 100, 50); // Draw centered rectangle
  pop(); // Restore canvas state

  push(); // Save canvas state
  translate(window.innerWidth / 2, window.innerHeight / 2); // Move origin to center
  // scale(2);
  rotate(Math.PI / 4); // Rotate 45 degrees (in radians)
  fill("lightblue");
  rect(-50, -100, -50, -200); // Draw centered rectangle
  pop(); // Restore canvas state
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}
// draw(); // Call once (not animated)
animate();
