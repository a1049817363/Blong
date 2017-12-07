var i=0;
var stop;
$(function(){
showImage();
$(".tab").hover(function(){
	i=$(this).index();
	show();
	clearInterval(stop);
},function(){
	showImage();
	
});
$(".btn1").click(function(){
	clearInterval(stop);
	if(i==0){
		i=6;
	}
	i--;
	show();
	showImage();
});
$(".btn2").click(function(){
	clearInterval(stop);
	if(i==5){
		i=-1;
	}
	i++;
	show();
	showImage();
});
})//页面加载完成过后要做)的事
$(".btn1").onclick(function(){
	clearInterval(stop);
})

function showImage(){
	stop=setInterval(function(){
		i++;
		if(i==6){
			i=0;
		}
		show();
	},2000)
}
function show(){
	$(".ig").eq(i).fadeIn(500).siblings().fadeOut(500);
	$(".tab").eq(i).addClass("bg").siblings().removeClass("bg")
}
