var all_videos=[], content=[];

$(document).ready(function(){
	
	for(var v=0, length=content.length;v<length;v++) {
		$("#" + content[v][0]).html(content[v][1]);
	}
	bind();
	
});

function load_playlist(json){
	var data = json.feed, 
		videos = data.entry, 
		category = data.title.$t.toLowerCase(), 
		html="";
	
	for(var i=0, length=videos.length;i<length;i++) {
		
		var video = videos[i], 
			title = video.title.$t, 
			thumbnail = video.media$group.media$thumbnail[0].url, 
			description= video.media$group.media$description.$t, 
			url = video.media$group.media$content[0].url, 
			keywords = video.media$group.media$keywords.$t;
		
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
	content.push([category, html]);
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