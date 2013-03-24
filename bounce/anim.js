window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame    ||
	function( callback ){
	    window.setTimeout(callback, 1000 / 60);
	};
})();

window.onresize = function (e) {
    var canvas = document.getElementById("playground");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
}

//(function init(){
    window.onresize();
    var context = document.getElementById("playground").getContext('2d');
//})();


(function animloop(){
    requestAnimFrame(animloop);
    render();
})();

document.getElementById("playground").addEventListener('click', function(e) {
    var b = new Ball();
    b.x = e.pageX;
    b.y = e.pageY;
    balls.push(b);
}, false);

var balls = [];

function Ball(){
    this.radius = 20;;
    this.dx = Math.random() * 18 + -9;
    this.dy = Math.random() * 18 + -9;
}

function render () {
    // Set canvas size.
    var canvas = document.getElementById("playground");
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (typeof(balls) == "undefined" || balls.length == 0) {
	context.font = "bold 12px sans-serif";
	context.fillStyle="#00ffff";
	context.fillText("click anywhere!", 
			 window.innerWidth/2,
			 window.innerHeight/2);
	return;
    }
    context.fillStyle="#00ffff";
    context.beginPath();
    for (var i in balls) {
	b = balls[i];
	context.arc(b.x,b.y,b.radius,0,Math.PI*2,true);
	b.x+=b.dx;
	b.y+=b.dy;
	if (b.x > canvas.width - b.radius)
	    b.dx = -1 * Math.abs(b.dx);
	if (b.x < b.radius)
	    b.dx = Math.abs(b.dx);
	if (b.y > canvas.height - b.radius)
	    b.dy = -1 * Math.abs(b.dy);
	if (b.y < b.radius)
	    b.dy = Math.abs(b.dy);
    }
    context.closePath();
    context.fill();
}
