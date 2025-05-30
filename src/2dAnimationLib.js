// canvas
let ctx;
let canvas;

// stroke
let useStroke = true; // for noStroke()
let currentStrokeWeight = 1;

// animation
let drawFn;

// Text variables
let currentFontSize = 16;
let currentFontFamily = "sans-serif";
let textAlignH = "start"; // start, center, end
let textAlignV = "alphabetic"; // top, middle, bottom, alphabetic

// create canvas for user
export function createCanvas(w, h) {
  canvas = document.querySelector("#canvas");
  canvas.width = w;
  canvas.height = h;
  ctx = canvas.getContext("2d");
}

// :) hello
// if you are reading this, let's be freinds

// drawing primitives
// basic shapes

export function point(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, currentStrokeWeight / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
// LINE
export function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath();
}

// RECTANGLE
export function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill(); // fills it with current fillStyle
  if (useStroke) {
    ctx.stroke(); // outlines with current strokeStyle
  }
  ctx.closePath();
}
//circle
export function circle(x, y, d) {
  ellipse(x, y, d, d);
}

// ellipse
export function ellipse(x, y, w, h) {
  ctx.beginPath();
  ctx.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  if (useStroke) ctx.stroke();
  ctx.closePath();
}

export function arc(x, y, w, h, start, stop, open = false) {
  ctx.beginPath();
  ctx.ellipse(x, y, w / 2, h / 2, 0, start, stop);
  if (!open) ctx.lineTo(x, y); // close to center
  ctx.fill();
  if (useStroke) ctx.stroke();
  ctx.closePath();
}

//  Color functions

//canvas background color
export function background(color) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// color fill inside shape :)
export function fill(color) {
  ctx.fillStyle = color;
}

// set stroke line color
export function stroke(color) {
  ctx.strokeStyle = color;
  useStroke = true;
}

// completely removes stroke color
export function noStroke() {
  useStroke = false;
}

// for thickness of stroke
export function strokeWeight(weight) {
  currentStrokeWeight = weight;
  ctx.lineWidth = weight;
}

// random color generator
export function randomColor(alpha = 1) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// text

export function text(str, x, y) {
  ctx.font = `${currentFontSize}px ${currentFontFamily}`;
  ctx.textAlign = textAlignH;
  ctx.textBaseline = textAlignV;
  ctx.fillText(str, x, y);
}

export function textSize(size) {
  currentFontSize = size;
}

export function textFont(fontName) {
  currentFontFamily = fontName;
}

export function textAlign(h, v = "alphabetic") {
  textAlignH = h; // "left", "center", "right" → "start", "center", "end"
  textAlignV = v; // "top", "middle", "bottom", "alphabetic"
}
// transformation

// save the current canvas drawing state
export function push() {
  ctx.save();
}

// restore the canvas state to what it was before push
export function pop() {
  ctx.restore();
}

// moves the origin of the canvas from 0,0 to x,y
// default origin is located at top-left of screen
export function translate(x, y) {
  ctx.translate(x, y);
}

// angle in radian     PI = 180deg
export function rotate(angle) {
  ctx.rotate(angle); // angle in radian
}

// scale the canvas not shape eg scale(1,5)
export function scale(sx, sy) {
  ctx.scale(sx, sy);
}

// Mouse Input
export let mouseX = 0;
export let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

// animation

export function startLoop(fn) {
  drawFn = fn;
  requestAnimationFrame(loop);
}

function loop() {
  if (typeof drawFn === "function") {
    drawFn();
    requestAnimationFrame(loop);
  }
}
