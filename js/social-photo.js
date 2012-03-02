// 38623701@N08
var api_key ="fde7312d39d11ace4a7e2eefbc42101d";
var photos = [];
var sets = [];
var set_photos = [];
var html = "";

$(document).ready(function(){

	//load_sets();
	bind();
	
});

/*function load_sets(){
	
	var url = "http://api.flickr.com/services/rest/?&method=flickr.photosets.getList&api_key=" + api_key + "&user_id=38623701@N08&format=json&jsoncallback=?";
	
	$.getJSON(url, function(json) {
		
		var f_sets = json.photosets.photoset;
		
		for(i in f_sets){
			
			var title = f_sets[i].title._content;
			var farm = f_sets[i].farm;
			var server = f_sets[i].server;
			var set_id = f_sets[i].id;
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
		$("#sets #holder").html(html);
		
		//load first photo from first set
		var first_photo = {};
		first_photo.id = sets[0].primary;
		first_photo.farm = sets[0].farm;
		first_photo.secret = sets[0].secret;
		first_photo.server = sets[0].server;
		first_photo.title = sets[0].title;
		
		
		show_photo(sets[0].primary, first_photo);
		
	});
	
}*/

function show_set(set_id){
	
	$("#sets a").removeClass("active");
	$("#set-" + set_id).addClass("active");
	
	var url = "http://api.flickr.com/services/rest/?&method=flickr.photosets.getPhotos&api_key=" + api_key + "&photoset_id=" + set_id + "&format=json&jsoncallback=?";
	var thumb_html = "";
	var images_html = "";
	
	/*$.getJSON(url, function(data){
		
		//display first image
		//show_photo(data.photoset.photo[0].id);
		
		//$("#photo .images").html(images_html);
		
		$("#photo .images img:first").fadeIn(function(){
			$("#photo").animate({height: $(this).height() + "px"});
		});
		
		bind();
	});*/

}

function show_photo(photo_id, not_in_array){
	
	//find photo info
	for(i in set_photos){
		if(set_photos[i].id == photo_id){
			var photo = set_photos[i];
		}
	}
	
	if(not_in_array != undefined){
		var photo = not_in_array;
		photo.title = photo.title._content;
	}
	
	if(photo){
		
		$("#photo .buttons a").show();
		
		var src = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_z.jpg";
		
		var img = new Image();
		
		$(img).load(function () {
			$(this).hide();
			$('.images').removeClass('loading').html(this);
	
			// fade our image in to create a nice effect
			$(this).fadeIn(function(){
				$("#photo img").attr("id", photo_id);
				$("#photo img").attr("alt", photo.title);
				$("#photo img").attr("title", photo.title);
				$("h3.photo-title").html(photo.title);
				$("#photo").animate({height: $(img).height() + "px"});
			});
		})
		
		.error(function () {
			
		})
		.attr('src', src);
	}

}

function show_next(current_id){
	
	//find next in array
	for(i in set_photos){
		if(set_photos[i].id == current_id){
			i++;
			var next_photo = set_photos[i];
		}
	}
	
	if(next_photo != undefined){
		
		show_photo(next_photo.id);
		
	}
	
}

function show_prev(current_id){
	
	//find next in array
	for(i in set_photos){
		if(set_photos[i].id == current_id){
			i--;
			var prev_photo = set_photos[i];
		}
	}
	
	if(prev_photo != undefined){
		
		show_photo(prev_photo.id);

	}
	
}

function bind(){

	$("#photo a.next").click(function(){
		var current_id = $("#photo img").attr("id");
		show_next(current_id);
		return false;
	});
	
	$("#photo a.prev").click(function(){
		var current_id = $("#photo img").attr("id");
		show_prev(current_id);
		return false;
	});
	
	/*$(document).keyup(function(event){
		if(event.keyCode == 39){
			var current_id = $("#photo img").attr("id");
			show_next(current_id);
		}
		if(event.keyCode == 37){
			var current_id = $("#photo img").attr("id");
			show_prev(current_id);
		}
	});*/

}