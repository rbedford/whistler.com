$(document).ready(function(){
	
	$("#videos ul li a").click(function(){
										
		$("#videos ul li a, #videos ul li p").removeClass("active");
		$(this).toggleClass("active");
		
		$("#videos ul li p").slideUp();
		$(this).next("p").slideDown();
		
		var id = $(this).attr("id").replace("tab-", "");
		$(".video.active").fadeOut("slow", function(){
			$(".video").removeClass("active");
			$("#video-"+id).fadeIn().addClass("active");
		});
		return false;
	});
	
});