# 2d Animation Library

## Get Started

- download our 2d animation lib from github
- create your html file
- add canvas element in body
- link your main js file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <canvas id="canvas"></canvas>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

- import animation library in your main.js

```js
# main.js
import { createCanvas } from "./2dAnimationLib.js";
```

- create a canvas

```js
createCanvas(500, 500);
```

### point()

- to create a single pixel on display
- takes two input x-coordinate and y-coordinate

```js
// set color
fill("blue);
strokeWeight(10); // set point size
point(x,y); // single point at coordinate (x,y)
```

### line()

- create a line from one point two another
- it takes four coordinates -> x1,y1 for start point and x2,y2 for end point

```js
line(200, 200, 500, 500);
```

### rect()

- creates a rectangle
- takes four coordinates -> x1,y1 for top-left of rectangle x2,y2 for bottom-right of rectangle

```js
fill("yellow");
rect(0, 0, 230, 100);
```
