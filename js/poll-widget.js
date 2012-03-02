$(document).ready(function() {
	var poll;
	$.ajax({
		url: "/json/poll/index.aspx", 
		dataType: "json", 
		success: function(json) {
			var items = json.item;
			for(i=0;i<items.length;i++) {
				if(items[i].current === true) {
					poll = items[i];
				}
			}
		}, 
		complete: function() {
			if(poll != null) {
				var html = "<h2>" + poll.copy + "</h2>";
				html += "<ul class='poll-result'>";
					html += "<li><strong>" + poll.percent1 + "%</strong> " + poll.answercopy1 + "</li>";
					html += "<li><strong>" + poll.percent2 + "%</strong> " + poll.answercopy2 + "</li>";
					html += "<li><strong>" + poll.percent3 + "%</strong> " + poll.answercopy3 + "</li>";
				html += "</ul>";
				
				$("#poll-widget .poll-content").html(html);
			}
			$("#poll-widget").removeClass("loading");
		}
	});
	
});