var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d");
var circles;
function getRandomRGBAColor() {
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgba("+r+","+g+","+b+",1)";
}
function Circle() {
    this.radius = Math.floor(Math.random() * 30 + 20);
    this.x = Math.floor(Math.random() * (innerWidth - this.radius*2) + this.radius);
    this.y = Math.floor(Math.random() * (innerHeight - this.radius*2) + this.radius);
    this.dx = 3;
    this.dy = 3;
    this.color = getRandomRGBAColor();
    this.draw =function() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fill();
    }
    this.update = function() {
        if(this.x + this.radius >= innerWidth || this.x - this.radius <= 0) {
            this.dx *= -1;
        }
        if(this.y + this.radius >= innerHeight || this.y - this.radius <= 0) {
            this.dy *= -1;
        }
        this.x +=  this.dx;
        this.y +=  this.dy;
        this.draw();
    }
}

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    circles = [];
    for(var i=0;i<20;i++) {
        circles.push(new Circle());
    }
}
function draw() {
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(var i=circles.length-1; i>=0;i--) {
        circles[i].update();
    }
    requestAnimationFrame(draw);
}
window.addEventListener("resize", init);
init();
draw();

