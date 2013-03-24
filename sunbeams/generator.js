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
    context.fillStyle="#00ffff";
    var lines = 12;
    for (degree = 0; degree < 12; degree++) {
	context.beginPath();
	context.moveTo(canvas.width/2, canvas.height/2);
	context.lineTo(3,0);
	context.closePath();
	context.arc(canvas.width/2, canvas.height/2, 30, (Math.PI/180)*180,
		    (Math.PI/180)*210);
	context.stroke();
    }
}

(function init(){
    window.onresize();
    render();
})();
