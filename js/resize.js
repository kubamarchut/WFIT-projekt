window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', resizeCanvas);

function resizeCanvas(){
  c.width = c.offsetWidth;
  c.height = c.offsetHeight;
  canvasWidth = c.width;
  canvasHeight = c.height;

  reCalculateParams();
}
