var feed;
var playlist_json;
var videos = [];

$(document).ready(function(){
						   
	show_playlists(playlist_json);
	
	$("a.upload-video").click(function(){
		$("#upload-panel").slideToggle();
		$("#upload-video a").css("display", "block");
		return false;
	});
	var str = window.location.hash;
	if(str.search(/return-sessionId/i) == 1){
		$(".toggle").hide();
		$("#your-videos").show();
		$("#tabs li a").removeClass("on");
		$("#tabs li a#tab-your-videos").addClass("on");
		$("#upload-panel").css("display", "block");
	}
	
	$("#upload-video a").css("display", "block");
	
});

function load_playlist(json){
	playlist_json = json;
}

function show_playlists(json){
	
	var video_html = "";
	if(json.feed.entry){
		
		for(var i = 0; i < json.feed.entry.length; i++){
			
			var owner = json.feed.entry[i].author[0].name.$t;
			var title = json.feed.entry[i].media$group.media$title.$t;
			var thumbnail = json.feed.entry[i].media$group.media$thumbnail[1].url;
			var description = json.feed.entry[i].media$group.media$description.$t;
			var url = json.feed.entry[i].media$group.media$content[0].url;
			var keywords = json.feed.entry[i].media$group.media$keywords.$t;
			
			var vid = [];
			vid[0] = title;
			vid[1] = thumbnail;
			vid[2] = description;
			vid[3] = url;
			vid[4] = keywords;
			vid[5] = owner;
			
			videos.push(vid);
			
			video_html += "<div class='video user'>";
				video_html += "<a href='" + url + "'><img src='" + thumbnail + "' alt='" + title + "' /></a>";
				video_html += "<a href='" + url + "'>" + title + "</a>";
				video_html += "<p>" + description + "</p>";
				video_html += "<div class='submitted-by'><span>Uploaded by: </span><a href='http://www.youtube.com/user/" + owner + "' class='owner'>" + owner + "</a></div>";
			video_html += "</div>";
		}
	
	
	}
	
	play_video(videos[0], 0);
	
	$("#your-videos #submitted-videos").html(video_html);	
	bind();
	
}

function play_video(video, autoplay){
	
	var path = video[3] + "&rel=1&border=0&fs=1&autoplay=" + autoplay;
	swfobject.embedSWF(path, 'video', '617', '390', '9.0.0', false, false, {allowfullscreen: 'true', wmode: 'opaque'});
	
	$("#video-description h4").html(video[0]);
	$("#video-description p").html(video[2]);
	$("#video-description").show();
	
}

function find_by_url(url){

	var video;
	for(i in videos){
		if(url == videos[i][3]){
			video = videos[i];
		}
	}
	
	return video;

}

function bind(){

	$(".video a").click(function(){
								 
		var url = this.href;
		
		var video = find_by_url(url);
		
		play_video(video, 1);
		return false;
		
	});

}