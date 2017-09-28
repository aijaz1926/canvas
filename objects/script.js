var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d");
function init() {
    canvas.width = 800;
    canvas.height = 500;
}
function draw() {
    //draw rectangle
    //ctx.beginPath();
    ctx.rect(20,20,200,50);
    //ctx.strokeStyle = '#C00';
    ctx.fillStyle = "#0C0";
    ctx.fill();
    ctx.stroke();

    //Draw a line
    ctx.beginPath();
    ctx.moveTo(250, 50);
    ctx.lineTo(300, 70);
    ctx.lineTo(400, 30);
    ctx.lineTo(450, 70);
    //Close path will join the start and end point
    ctx.closePath();
    ctx.stroke();
    
    //draw arc
    ctx.beginPath();
    ctx.fillStyle = "#00C";
    ctx.arc(40, 200, 20,0,Math.PI);
    ctx.fill();
    ctx.stroke();

    //draw circle
    ctx.beginPath();
    ctx.fillStyle = "#C00";
    ctx.arc(200, 200, 40,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
    
}
init();
draw();
