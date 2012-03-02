$(document).ready(function() {
	
	$("ul.accordion li ul").not(":first").hide();
	$("ul.accordion li a:first").addClass("open");
	
	$("ul.accordion li a.category").click(function() {
		
		var nested_ul = $(this).next("ul");
		$("ul.accordion li ul").slideUp();
		nested_ul.slideDown();
		
		$("ul.accordion li a").removeClass("open");
		$(this).addClass("open");
		
		var first_img = nested_ul.find("img:first").attr("data-src"), img_title = nested_ul.find("img:first").attr("title");
		$("#main-image img").attr("src", first_img);
		$("#main-image p").html(img_title);
		
		return false;
		
	});
	
	$("ul.accordion li li img").hover(function() {
		var img_src = $(this).attr("data-src"), img_title = $(this).attr("title");
		$("#main-image img").attr("src", img_src);
		$("#main-image p").html(img_title);
		return false;
	});
	
});