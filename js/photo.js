// 38623701@N08
var api_key ="fde7312d39d11ace4a7e2eefbc42101d";
var photos = [];
var sets = [];
var set_photos = [];
var html = "";

$(document).ready(function(){

	load_sets();
	bind();
	
});

function load_sets(){
	
	var url = "http://api.flickr.com/services/rest/?&method=flickr.photosets.getList&api_key=" + api_key + "&user_id=38623701@N08&format=json&jsoncallback=?";
	
	$.getJSON(url, function(json) {
		
		var f_sets = json.photosets.photoset;
		
		for(i in f_sets){
			
			var set_id = f_sets[i].id;
			//72157628053793764 - I Love Whistler Winters
			//72157626773716606 - Summer 2011
			//72157625250745613 - Winter 2011
			//72157625480316453 - Fall 2010
			//72157624289038730 - Summer 2010
			//72157625606091372 - Spring 2010
			//72157623145388411 - 2010 winter olympic games
			//72157622876890028 - Winter 2009/2010
			var set_ids = new Array(72157628053793764, 72157626773716606, 72157625250745613, 72157625480316453, 72157624289038730, 72157625606091372, 72157623145388411, 72157622876890028);
			
			if (inarray(set_id, set_ids)) {
				
				var title = f_sets[i].title._content;
				var farm = f_sets[i].farm;
				var server = f_sets[i].server;
				var primary = f_sets[i].primary;
				var secret= f_sets[i].secret;
				var thumbnail_url = "http://farm" + farm + ".static.flickr.com/" + server + "/" + primary + "_" + secret + "_s.jpg"
				
				f_sets[i].thumbnail_url = thumbnail_url;
				
				html += "<a href='http://www.flickr.com/photos/gowhistler/sets/" + set_id + "/' class='set' onclick='show_set(\"" + set_id + "\"); return false;' id=\"set-" + set_id + "\">";
					html += "<img src='" + thumbnail_url + "' alt='" + title + "' title='" + title + "' />";
					html += title;
				html += "</a>";
				
				sets.push(f_sets[i]);
				
			}
			
		}
		$("#sets #holder").html(html);
		show_set(sets[0].id);
		
	});
	
}

function show_set(set_id){
	
	$("#sets a").removeClass("active");
	$("#set-" + set_id).addClass("active");
	
	var url = "http://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=" + api_key + "&photoset_id=" + set_id + "&format=json&jsoncallback=?";
	var thumb_html = "";
	var images_html = "";
	
	$.getJSON(url, function(data){
		
		set_photos = [];
		
		for(i in data.photoset.photo){
			
			var title = data.photoset.photo[i].title;
			var farm = data.photoset.photo[i].farm;
			var server = data.photoset.photo[i].server;
			var id = data.photoset.photo[i].id;
			var secret= data.photoset.photo[i].secret;
			var thumbnail_url = "http://farm" + farm + ".static.flickr.com/" + server + "/" + id + "_" + secret + "_s.jpg";
			var image_link = "http://farm" + farm + ".static.flickr.com/" + server + "/" + id + "_" + secret + "_b.jpg";
			
			thumb_html += "<a href=\"" + image_link + "\" class=\"thumbnail\" rel=\"thumbnail\" title=\"" + title + "\" >";
				thumb_html += "<img src=\"" + thumbnail_url + "\" alt=\"" + title + "\" title=\"" + title + "\" />";
			thumb_html += "</a>";
			
			set_photos.push(data.photoset.photo[i]);
			
		}
		
		//display first image
		//show_photo(data.photoset.photo[0].id);
		
		var buttons = "<a href=\"./\" class=\"prev\"></a><a href=\"./\" class=\"next\"></a>";
		$("#photo .buttons").html(buttons);
		
		$("#set-photos").html(thumb_html);
		$("#set-photos").show();
		//$("#photo .images").html(images_html);
		
		$("#photo .images img:first").fadeIn(function(){
			$("#photo").animate({height: $(this).height() + "px"});
		});
		
		bind();
	});

}

function bind(){
	
	$("a[rel=thumbnail]").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true,
		'titlePosition'	: 'over'
	});
	
}

function inarray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}
