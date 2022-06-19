window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function resizeCanvas(){
  c.width = c.offsetWidth;
  c.height = c.offsetHeight;
  canvasWidth = c.width;
  canvasHeight = c.height;

  reCalculateParams();
}
