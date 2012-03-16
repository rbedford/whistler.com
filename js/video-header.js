var v;
$(document).ready(function() {
	
	v = document.getElementById("vid");
	$(".video-player a").click(function(){
		var video = $(this).parent().find("video");
		video.css({"z-index": "9", "background": "#000"});
		v.play();
		return false;
	});
	
});