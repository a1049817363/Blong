$(function(){
	$(".div").mouseover(function(){
		$(this).stop(true).animate({"width":"789px"}).siblings().stop(true).animate({"width":"100px"})
	})
})