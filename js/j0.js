$(document).ready(function(){
	
	$(window).resize(function(){
		var w = window.innerWidth;
		if(w > 768)
			$("nav").css("display","block");		//平板以上就會顯示
		else
			$("nav").css("display","none");		//手機就會隱藏
			
	});
		
	$(".menu").click(function(){
		$("nav").toggle();
	});
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	
	
});