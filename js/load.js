// JavaScript Document

$(document).ready(function(){
	
	
	$("header").load("header.html");
	
	$(".menu").click(function(){ 
		$(".overlay").slideToggle();
	});
			
	
	
	$(window).resize(function(){
	
	$(".overlay").hide();
	});
	
	
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});	
	
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});


// JavaScript Document