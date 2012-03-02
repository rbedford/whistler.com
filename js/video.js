var all_videos=[], playlists = [["Winter", "6084294A5D95E68A"], ["Summer", "9EC431ED03A07CC7"]];
jQuery.support.cors = true;
$(document).ready(function(){
	
	for(var i=0, len=playlists.length;i<len;i++) {
		
		var pl = playlists[i], 
			url = "http://gdata.youtube.com/feeds/api/playlists/" + pl[1] + "?v=2&alt=json";

		var get_videos = function (playlist, index){
			
			$.ajax({
				url: url,
				dataType: "json", 
				crossDomain: true, 
				success: function(json) {
					var videos = json.feed.entry;
					playlists[index][2] = videos;
					load_playlist(playlist, videos);
				}, 
				error: function(jqXHR, textStatus, errorThrown) {}
			});
			
		}
		get_videos(pl, i);
	}
	
	setTimeout("bind()", 2000);
	
});

function load_playlist(playlist, videos) {
	var html="";
	for(var v=0;v<videos.length;v++) {
		
		var video = videos[v], 
			title = video.title.$t, 
			thumbnail = video.media$group.media$thumbnail[0].url, 
			description= video.media$group.media$description.$t, 
			url = video.media$group.media$content[0].url, 
			keywords = video.media$group.media$keywords.$t, 
			category = playlist[0].toLowerCase();
		
		html += "<div class='video'>";
			html += "<a href='" + url + "'><img src='" + thumbnail + "' alt='" + title + "' /></a>";
			html += "<a href='" + url + "'>" + title + "</a>";
		html += "</div>";
		
		var vid = {
			title: title, 
			thumbnail: thumbnail,
			description: description,
			url: url, 
			category: category
		};
		all_videos.push(vid);

	}
	$(html).appendTo("#" + category);
}

function play_video(video, autoplay){
	var path = video.url + "&rel=1&border=0&fs=1&autoplay=" + autoplay;
	swfobject.embedSWF(path, 'video', '640', '390', '9.0.0', false, false, {allowfullscreen: 'true', wmode: 'opaque'});
	
	$("#video-description h4").html(video.title);
	$("#video-description p").html(video.description);
	$("#video-description").show();
}

function find_by_url(url){
	var video;
	for(i in all_videos){
		if(url == all_videos[i].url){
			video = all_videos[i];
		}
	}
	return video;
}

function find_first_video() {
	
	for(var f=0, len=all_videos.length;f<len;f++) {
		var video = all_videos[f];
		if(video.category == "winter") {
			return video;
		}
	}
}

function bind(){
	$(".video a").click(function(){
		var url = this.href, 
			video = find_by_url(url);
		play_video(video, 1);
		return false;
	});
	var first_video = find_first_video();
	play_video(first_video, 0);
}