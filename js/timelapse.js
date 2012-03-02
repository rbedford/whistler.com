var images = [];
var cache = [];
var timer;
$(document).ready(function(){
						   
	$.ajax({
		url: "/json/timelapse/index.aspx?id=1",
		success: function(data){
			images = data;
			$.each(images, function(index, image){
				if(index%3 == 0){
					var img = new Image();
					img.src = "http://www.whistler.com/images/webcam/golf/" + image.filename;
					if(index == 0){
						img.id = "current";	
						$(img).css("display", "block");
					}
					$(img).appendTo("#timelapse");
					
					if(index == images.length-1){
						$("#timelapse").removeClass("loading");
						$("#timelapse img:first").fadeIn();
					}
				}
			});
			
			var img = new Image();
			img.src = "http://www.whistler.com/images/webcam/golf/image00281.jpg";
			$(img).appendTo("#timelapse");
			
			$("#timelapse a").show();
		}
	});
	
	$("#timelapse a").click(function(){
		
		$(this).hide();
		$("#timelapse img").hide().attr("id", "").attr("style", "");
		$("#timelapse img:first").show().attr("id", "current");
		
		timer = setInterval(function(){
					$("#timelapse img#current").next().fadeIn("fast", function(){
						$(this).attr("id", "current");
						$(this).prev().attr("id", "");
					});
					if($("#timelapse img:last").attr("id") == "current"){
						finished();
					}
				}, 100);
		return false;
	});
});

function finished(){
	clearTimeout(timer);
	$("#timelapse a").show();
}