var all_videos=[], playlists = [["Winter", "6084294A5D95E68A"], ["Summer", "9EC431ED03A07CC7"]];

$(document).ready(function(){
	console.log("!");
	for(var i=0, len=playlists.length;i<len;i++) {
		
		var pl = playlists[i], 
			url = "http://gdata.youtube.com/feeds/api/playlists/" + pl[1] + "?v=2&alt=json";
			
		function get_videos(playlist, index){
			$.getJSON(url, function(json) {
				var videos = json.feed.entry;
				playlists[index][2] = videos;
				load_playlist(playlist, videos);
			});
		};
		get_videos(pl, i);
	}
	
	setTimeout("bind()", 5000);
	
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
	/*var first_video = find_first_video();
	play_video(first_video, 0);*/
}

/*function list_videos(json) {

	var all_videos = "";
	var winter_videos = "";
	var summer_videos = "";
	
	var entries = feed.entry || [];
	
	for (var i = 0; i < entries.length; i++) {
		
		var video_html = "";
		
		var entry = entries[i];
		var title = entry.title.$t;
		var thumbnail = entry.media$group.media$thumbnail[1].url;
		var description= entry.media$group.media$description.$t;
		var url = entries[i].media$group.media$content[0].url;
		var keywords = entry.media$group.media$keywords.$t;
		
		var vid = [];
		vid[0] = title;
		vid[1] = thumbnail;
		vid[2] = description;
		vid[3] = url;
		vid[4] = keywords;
		
		videos.push(vid);

		video_html += "<div class='video'>";
			video_html += "<a href='" + url + "'><img src='" + thumbnail + "' alt='" + title + "' /></a>";
			video_html += "<a href='" + url + "'>" + title + "</a>";
		video_html += "</div>";

		if(keywords){
			
			if(keywords.search(/bike/i) > 0){
				summer_videos += video_html;
				vid[5] = "bike";
			} else {
				winter_videos += video_html;
				vid[5] = "winter";
			}
			
		}
		
		all_videos += video_html;
		
	}
	
	video_html += "</ul>";
	$("#videos #winter").html(winter_videos);
	$("#videos #summer").html(summer_videos);
	$("#videos #all").html(all_videos);
	
	play_video(videos[0], 0);
	
	for(i in videos){
		if(videos[i][5] == "winter"){
			play_video(videos[i], 0);
			break;
		}
	}
	
	bind();
	
}*/