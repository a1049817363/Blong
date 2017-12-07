var min=5;
var max=30;
var t=100;
var snowColor="white";
var snow=$("<div></div>").css({"position":"absolute","top":"-20px"}).html("❉");
$(function(){
	var w=$(document).width();
	var h=$(document).height();
	setInterval(function(){
		var startx=Math.random()*w;
		var startop=0.6+Math.random()*0.4;
		var dnowH=h;
		var downx=Math.random()*w;
		var downT=2000+Math.random()*3000;
		var sonwS=min+Math.random()*max;
		snow.clone().appendTo("body").css({
			"left":startx,
			"opacity":startop,
			"font-size":sonwS,
			"color":snowColor,
		}).animate({
			top:dnowH,
			left:downx,
			opacity:1.0
		},downT)
	},t);
	
})
