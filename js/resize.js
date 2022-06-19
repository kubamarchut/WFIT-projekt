window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function resizeCanvas(){
  c.width = c.offsetWidth;
  c.height = c.offsetHeight;
  canvasWidth = c.width;
  canvasHeight = c.height;

  lambda = canvasWidth/10;
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
}
