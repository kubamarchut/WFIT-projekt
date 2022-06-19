let c = document.getElementById("graphCanvas");
let ctx = c.getContext("2d");

let canvasWidth = c.width;
let canvasHeight = c.height;

let pointRadius = 6;

let grpVel = 1;
let phsVel = 1;
let amplitude = 0.4;
let t = 0;

let animationFrequency = 30;
let deltaX = 1;
let playAnimation = true;

let numWP = 3;
let k, dk;
let k1, k2;  //Liczba falowa 1 i 2
let freq, df;
let f1, f2; //częstość kołowa 1 i 2

function reCalculateParams(){
  let lambda = canvasWidth/10;
  k = 2 * numWP * Math.PI / lambda;
  dk = .05 * k;
  k1 = k + dk;    //liczba falowa 1
  k2 = k - dk;    //Liczba falowa 2

  freq = phsVel * k;
  df = grpVel * dk;
  f1 = freq + df;
  f2 = freq - df;
}

function changePhsVel(newPhsVel){
  freq = newPhsVel*k;
  phsVel = newPhsVel;

  f1 = freq + df; //częstość kołowa 1
  f2 = freq - df; //częstość kołowa 2
}
function changeGrpVel(newGrpVel){
  df = newGrpVel*dk;
  grpVel = newGrpVel;

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
function drawPoint(x, y, d, color){
  x = (x<0) ? canvasWidth+x : x;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, d, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();

  ctx.moveTo(0, canvasHeight/2);

}

function animate() {
  t++;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.beginPath();
  drawGrid();
  ctx.moveTo(0, 0.5*canvasHeight + amplitude*canvasHeight * Math.sin(0.3 * 0 - 0.1 * t));


  for (var x = 0; x < canvasWidth; x+=deltaX) {
    ctx.lineTo(x, 0.5*canvasHeight + 0.5*amplitude*canvasHeight * (Math.sin(f1 * t - k1 * x) - Math.sin(f2 * t - k2 * x)));
  }
  ctx.strokeStyle = "#1E1E1E";
  ctx.stroke();

  if(phsVel == grpVel){
    drawPoint(t*grpVel % canvasWidth, 0.5*canvasHeight, pointRadius+2, "rgba(255, 207, 86, 1)");
  }
  else{
    drawPoint(t*grpVel % canvasWidth, 0.5*canvasHeight, pointRadius, "rgba(255, 207, 86, 1)");
  }
  drawPoint(t*phsVel % canvasWidth, 0.5*canvasHeight, pointRadius, "rgba(243, 82, 111, 1)");

  ctx.beginPath();

  if (playAnimation) {
    setTimeout(animate, 1/animationFrequency*1000);
  }
}
reCalculateParams();
animate();
