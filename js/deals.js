$(document).ready(function(){
	
	$(".gallery a").each(function(){
		
		if($(this).attr("href") == "" || $(this).attr("href") == undefined){
			$(this).addClass("no_link");
		}
								  
		var this_link = $(this);
		
		var expiry_dates = $(this).children("span.expiry_date").each(function(){
																			  
			var milli_day = 1000 * 60 * 60 * 24;
			
			var now = Date.parse("today");
			var expiry = Date.parse($(this).text());
			
			var difference = expiry.getTime() - now.getTime();
			var days_left = Math.round(difference/milli_day);
			
			//is the deal expired?
			if(days_left < 0){
				var expired = true;
				days_left = 0;
				$("<div class=\"overlay_full\">EXPIRED</div>").appendTo($(this_link).children(".deals"));
			} else if (days_left == 0){
				days_left = 1;
			}
			
			var overlay_btm = $(this_link).children(".deals").children(".overlay_btm");
			var overlay_days = $(this_link).children(".deals").children(".overlay_days");
			
			overlay_btm.addClass("days_left_" + days_left);
			overlay_days.addClass("days_left_" + days_left);
			
			overlay_days.children("strong").html(days_left);
			
			$(this_link).addClass("days_left_" + days_left);
			if(expired){
				$(this_link).addClass("expired");
			}
			
		});
	
	});
	
});