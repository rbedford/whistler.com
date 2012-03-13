$(document).ready(function(){

	$(".toggle_container").hide(); 
	
	$("h5.trigger").toggle(function(){
		$(this).addClass("active");
		$(this).find("a img").attr("src", "/css/images/btns/hide.png");
		}, function () {
		$(this).removeClass("active");
		$(this).find("a img").attr("src", "/css/images/btns/show.png");
	});
	
	$("h5.trigger").click(function(){
		$(this).next(".toggle_container").slideToggle("fast");
	});
	
});