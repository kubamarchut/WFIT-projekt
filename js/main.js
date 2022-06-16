let c = document.getElementById("graphCanvas");
let ctx = c.getContext("2d");

let canvasWidth = c.width;
let canvasHeight = c.height;
let topBottomOffset = 0.1;

ctx.moveTo(0, canvasHeight/2);
ctx.lineTo(canvasWidth, canvasHeight/2);

ctx.moveTo(0, canvasHeight/2);
for(x=0; x<=canvasWidth; x+=1) {
    y = canvasHeight/2 - Math.sin(x*Math.PI/180) * canvasHeight/2 * (1 - topBottomOffset);
    ctx.lineTo(x,y);
}
ctx.stroke();
