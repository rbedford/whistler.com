function add_tracking() {
	
	/*
	* Filter Tracking
	*/
	$("#filter_results input").click(function() {
		
		var value = $(this).parents("li").find("span:first").attr("data-text");
			
		var category = "Cart", 
			action = "Activity", 
			label = "Filter: " + value;
		
		_gaq.push(['_trackEvent', category, action, label]);
		
	});
	
	/*
	* Sort Tracking
	*/
	$(".sort_by a").click(function() {
		var category = "Cart", 
			action = "Activity", 
			label = "Sort: " + $(this).text();
		_gaq.push(['_trackEvent', category, action, label]);
	});
	
}