let c = document.getElementById("graphCanvas");
let ctx = c.getContext("2d");

let canvasWidth = c.width;
let canvasHeight = c.height;
let topBottomOffset = 0.1;

ctx.moveTo(0, canvasHeight/2);
ctx.lineTo(canvasWidth, canvasHeight/2);

let amplitude = 0.4;
let wavenumber = 1;
let grpVel = 1;
let t = 0;
let deltaX = 1;
let playAnimation = true;
let animationFrequency = 60;

function drawGrid(){
  // draw vertical line
  ctx.moveTo(0, canvasHeight/2);
  ctx.lineTo(canvasWidth, canvasHeight/2);

  // draw horizontal line
  ctx.moveTo(t%canvasWidth, 0);
  ctx.lineTo(t%canvasWidth, canvasHeight);
  ctx.moveTo(0, canvasHeight/2);
}

function animate() {
  t++;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.beginPath();
  drawGrid();
  ctx.moveTo(0, 0.5*canvasHeight + amplitude*canvasHeight * Math.sin(0.3 * x - 0.1 * t));

  for (var x = 0; x < canvasWidth; x++) {
    ctx.lineTo(0 + x * deltaX, 0.5*canvasHeight + amplitude*canvasHeight * Math.sin(wavenumber * (x - t)) * Math.sin(wavenumber * (0.05 * x - 0.05 * grpVel * t)));
  }
  ctx.strokeStyle = "#1E1E1E";
  ctx.stroke();
  if (playAnimation) {
    setTimeout(animate, 1/animationFrequency*1000);
  }
}
animate();
