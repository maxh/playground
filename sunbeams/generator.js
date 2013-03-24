window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame    ||
	function( callback ){
	    window.setTimeout(callback, 1000 / 60);
	};
})();

window.onresize = function (e) {
    var canvas = document.getElementsByTagName("canvas")[0];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
}

function render () {
    var degree;
    var canvas = document.getElementsByTagName("canvas")[0];
    var context = canvas.getContext('2d');
    var lines = 20;
    var length = Math.sqrt(Math.pow(canvas.width,2)+Math.pow(canvas.height,2));
    for (degree = 0; degree < lines; degree++) {
	if (degree % 2 == 0)
	    context.fillStyle="#00ffff";
	else
	    context.fillStyle="#ff0000";
	var delta = 360/lines;
	context.beginPath();
	context.arc(canvas.width/2, canvas.height/2, length,
		    (Math.PI/180)*(degree*delta),
		    (Math.PI/180)*(degree+1)*delta);
	context.lineTo(canvas.width/2, canvas.height/2);
	context.closePath();
	context.fill();
    }
    var img = document.getElementsByTagName("img")[0];
    context.drawImage(img, canvas.width/2 - img.width/2,
		      canvas.height/2 - img.height/2);
}

(function init(){
    var img = document.getElementsByTagName("img")[0];
    img.src = "http://i.imgur.com/to9dVgu.gif";
    img.onload = window.onresize;
})();
