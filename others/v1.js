let ctx = null;

export function InitContext(context) {
  ctx = context;
}

export function Point(x, y) {
  if (!ctx) {
    throw new Error("canvas context is not initilised");
  } else {
    // Get 1x1 pixel data at (x, y)
    const pixelSize = 1;
    const imageData = ctx.getImageData(x, y, pixelSize, pixelSize);

    // Access the RGBA values (array of 4 numbers)
    const pixel = imageData.data;

    // Modify RGBA values
    for (let i = 0; i < pixelSize * pixelSize * 4; i = i + 4) {
      pixel[i] = 0;
      pixel[i + 1] = 0;
      pixel[i + 2] = 0;
      pixel[i + 3] = 255;
    }

    // Put modified pixel back on canvas
    ctx.putImageData(imageData, x, y);
  }
}

export function Line(x1, y1, x2, y2) {
  // dda
  let dx = x2 - x1;
  let dy = y2 - y1;

  let steps;

  if (Math.abs(dx) > Math.abs(dy)) {
    steps = Math.abs(dx);
  } else {
    steps = Math.abs(dy);
  }

  let xInc = dx / steps;
  let yInc = dy / steps;

  for (let i = 1; i <= steps; i++) {
    //plotting points to form line
    Point(x1, y1);
    x1 += xInc;
    y1 += yInc;
  }
}

export function Rectangle(x1, y1, x2, y2) {
  Line(x1, y1, x2, y1);
  Line(x2, y1, x2, y2);
  Line(x2, y2, x1, y2);
  Line(x1, y2, x1, y1);
}

export function Square(x1, y1, sideLength) {
  Line(x1, y1, x1 + sideLength, y1);
  Line(x1 + sideLength, y1, x1 + sideLength, y1 + sideLength);
  Line(x1 + sideLength, y1 + sideLength, x1, y1 + sideLength);
  Line(x1, y1 + sideLength, x1, y1);
}
function Circle() {}
function arc() {}
