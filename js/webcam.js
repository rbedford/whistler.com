var images = {
	"whistler": [
		"http://snow.whistler-blackcomb.com/whistlercam/roundhouse2.jpg",
		"http://snow.whistler-blackcomb.com/whistlercam/emerald2.jpg",
		"http://snow.whistler-blackcomb.com/whistlercam/heli_pad2.jpg",
		"http://snow.whistler-blackcomb.com/whistlercam/big_red2.jpg",
		"http://snow.whistler-blackcomb.com/whistlercam/valley_south2.jpg",
	],
	"blackcomb": [
		"http://snow.whistler-blackcomb.com/catskinner/rendezvous.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/rendezvous_zoom.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/tower.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/cougar.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/trees.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/fissile.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/harmony_flute.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/whistler.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/valley.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/rainbow.jpg",
		"http://snow.whistler-blackcomb.com/catskinner/park.jpg"
	]
};
var slideshow;

$(document).ready(function(){
	
	/* cams */
	//get_cam_images();
	load_cams();
	
});

function bind(){
	
	$("ul.controls li a.rewind").click(function(){
		rewind($(this));
		return false;
	});
	
	$("ul.controls li a.fast-forward").click(function(){
		fast_forward($(this));
		return false;
	});
	
	$("ul.controls li a.view-all").click(function(){
			
		var cam = $(this).parents(".webcam")[0];
		var preview_div = $(cam).next();
		
		if($(preview_div).css("display") == "block"){
			$(preview_div).fadeOut();
		} else {
			$(preview_div).fadeIn();
		}

		return false;
	});
	
	$(".view-all-panel a").click(function(){
		
		hide_preview();
		
		var id = "#" + $(this).attr("id").substr(6);
		var cam = $(id).parents(".webcam");
		
		$(cam).children().removeClass("current next");
		$(cam).children(id).fadeIn("slow", function(){
			$(cam).children(id).addClass("current");
			$(cam).children(id).next().addClass("next");
		});
		
		return false;
		
	});
	
	$("ul.controls li a.play").click(function(){
		
		var button = $(this);
		var parents = $(this).parents(".webcam")[0];
		var cam_id = $(parents).attr("id");
		
		if($(button).hasClass("play")){
			play(cam_id);
		} else {
			pause(cam_id);
		}
		$(button).toggleClass("play pause");
		return false;
		
	});
	
	$(".webcam img").click(function(){
		hide_preview();
	});
	
	$('.webcam img').load(function() {
		$(this).removeClass("hidden").fadeIn();
	});
	
}

function load_cams(){
	
	/* insert images */
	$.each(images, function(i, v){
							 
		var cam_id = "#" + i + "cam";
		var html = "";
		var thumbs = "";
		
		$.each(v, function(index, src){
			html += "<img src=\"" + src + "\" id=\"" + i + "-" + index + "\" width=\"640\" height=\"360\" class='hidden' />";
			thumbs += "<a href='./' id=\"thumb-" + i + "-" + index + "\" >";
				thumbs += "<img src=\"" + src + "\" width=\"100\" />";
			thumbs += "</a>";
		});
		
		$(cam_id).html(html);
		add_controls($(cam_id));
		add_preview($(cam_id), thumbs);
		
		$(cam_id + " img:first").addClass("current");
		$(cam_id + " img:first").next().addClass("next");
		
	});
	
	bind();
	
	/* live feed cam */
	var flashvars = {};
	flashvars.domain = "http://cams.hdrelay.com/";
	flashvars.camera_doc = "CID_0000877B";
	flashvars.app_mode = "view";
	var swf_url = flashvars.domain + "/flash/webcam.swf";
	var install = flashvars.domain  + "/flash/expressInstall.swf";
	var params={allowFullScreen:"true", allowScriptAccess: "always" };
	var attrs={};
	swfobject.embedSWF( swf_url, "webcam_holder", 640, 360, "9.0.0", install, flashvars, params, attrs );


}

function fast_forward(this_button, slideshow){
	
	hide_preview();
	if(slideshow){
		var cam_id = "#" + slideshow;
	} else {
		var cam_id = "#" + $(this_button).closest(".webcam").attr("id");
	}
	
	var current = $(cam_id + " img.current");
	var next = $(cam_id + " img.current").next();
	
	if(next.is("img")){
		
		$(current).fadeOut(function(){
			$(current).removeClass("current");
			$(next).addClass("current").removeClass("next");
			
			var next_next = $(next).next();
			if(next_next.is("img")){
				next_next.addClass("next");	
			} else {
				$(cam_id + " img:first").addClass("next");
			}
			
			$(current).css({ display: "block"});
		});
		
	} else {
		
		$(current).fadeOut(function(){
			$(current).removeClass("current");
			$(cam_id + " img:first").removeClass("next").addClass("current");
			$(cam_id + " img:first").next().addClass("next");
			$(current).css({ display: "block"});
		});
		
	}
	
}

function rewind(this_button){
	
	hide_preview();
	var cam_id = "#" + $(this_button).closest(".webcam").attr("id");
	
	var current = $(cam_id + " img.current");
	var prev = $(cam_id + " img.current").prev();
	var next = $(cam_id + " img.current").next();
	
	if(prev.is("img")){
		
		$(cam_id + " img.next").removeClass("next");
		$(prev).addClass("current");
		
		$(current).fadeOut(function(){
			$(current).removeClass("current").addClass("next");
			$(current).css({ display: "block"});
		});
		
	} else {
		
		$(next).removeClass("next");
		$(current).removeClass("current").addClass("next");
		
		$(current).fadeOut(function(){
			$(cam_id + " img:last").addClass("current");
			$(current).css({ display: "block"});
		});
		
	}
	
}

function add_controls(target){
	
	var html = "";
	html += "<ul class=\"controls\">";
		html += "<li><a href=\"./\" class=\"rewind\" title='Next'>Next</a></li>";
		html += "<li><a href=\"./\" class=\"view-all\" title='View All'>View All</a></li>";
		html += "<li><a href=\"./\" class=\"play\" title='Play/Pause'>Play</a></li>";
		html += "<li><a href=\"./\" class=\"fast-forward last\" title='Next'>Next</a></li>";
	html +="</ul>";
	
	$(html).appendTo(target);
	
}

function add_preview(cam, thumbs){
	var html = "<div class=\"view-all-panel\">" + thumbs + "</div>";
	$(html).insertAfter(cam);
}

function hide_preview(){
	$(".view-all-panel").fadeOut();
}

function play(cam_id){
	slideshow = setInterval("start_slideshow(\"" + cam_id + "\")", 3000);
}

function pause(cam_id){
	clearInterval(slideshow);
}

function start_slideshow(cam_id){
	fast_forward(null, cam_id);
}