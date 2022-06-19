let c = document.getElementById("graphCanvas");
let ctx = c.getContext("2d");

let canvasWidth = c.width;
let canvasHeight = c.height;
let topBottomOffset = 0.1;

ctx.moveTo(0, canvasHeight/2);
ctx.lineTo(canvasWidth, canvasHeight/2);

let amplitude = 0.2;
let wavenumber = 1;
let grpVel = 1;
let t = 0;
let deltaX = 1;
let playAnimation = true;
let animationFrequency = 30;

lambda = canvasWidth/10;
numWP = 3;
k = 2 * numWP * Math.PI / lambda;
dk = .05 * k;
k1 = k + dk;    //liczba falowa 1
k2 = k - dk;    //Liczba falowa 2

phsVel = 1;
grpVel = 1;
freq = phsVel * k;
df = grpVel * dk;
f1 = freq + df;
f2 = freq - df;

function changePhsVel(newPhsVel){
  freq = newPhsVel*k;
  phsVel = newPhsVel;
  console.log(phsVel);

  f1 = freq + df; //częstość kołowa 1
  f2 = freq - df; //częstość kołowa 2
  console.log("hi there");
}
function changeGrpVel(newGrpVel){
  df = newGrpVel*dk;
  grpVel = newGrpVel;

  console.log(grpVel);

  f1 = freq + df; //częstość kołowa 1
  f2 = freq - df; //częstość kołowa 2
}

function drawGrid(){
  // draw vertical line
  ctx.moveTo(0, canvasHeight/2);
  ctx.lineTo(canvasWidth, canvasHeight/2);

  // draw horizontal line
  //ctx.moveTo(t%canvasWidth, 0);
  //ctx.lineTo(t%canvasWidth, canvasHeight);
  //ctx.moveTo(0, canvasHeight/2);
}
function drawPoint(x, y, color, stroke){
  x = (x<0) ? canvasWidth+x : x;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, 6, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();

  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.moveTo(0, canvasHeight/2);

}

function animate() {
  t++;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.beginPath();
  drawGrid();
  ctx.moveTo(0, 0.5*canvasHeight + amplitude*canvasHeight * Math.sin(0.3 * 0 - 0.1 * t));


  for (var x = 0; x < canvasWidth; x+=deltaX) {
    ctx.lineTo(x, 0.5*canvasHeight + amplitude*canvasHeight * (Math.sin(f1 * t - k1 * x) - Math.sin(f2 * t - k2 * x)));
  }
  ctx.strokeStyle = "#1E1E1E";
  ctx.stroke();

  drawPoint(t*grpVel % canvasWidth, 0.5*canvasHeight, "rgba(255, 207, 86, 0.75)", "#FFCF56");
  drawPoint(t*phsVel % canvasWidth, 0.5*canvasHeight, "rgba(243, 82, 111, 0.75)", "#EA526F");

  ctx.beginPath();

  if (playAnimation) {
    setTimeout(animate, 1/animationFrequency*1000);
  }
}
animate();
