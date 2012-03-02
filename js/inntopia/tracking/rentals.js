function add_tracking() {
	
	/*
	* Filter Tracking: Property/Unit amenities
	*/
	$("#filter_results input").click(function() {
		
		var form_label = $.trim($(this).parents("td").find("label").text()), 
			value = $(this).parents("li").find("span:first").attr("data-text");
			
		var category = "Cart", 
			action = "Rentals", 
			label = form_label + ": " + value;
		
		_gaq.push(['_trackEvent', category, action, label]);
	});
	
	/*
	* Sort Tracking: Price (high, low), Name
	*/
	$(".sort_by a").click(function() {
		var category = "Cart", 
			action = "Rentals", 
			label = "Sort: " + $(this).text();
		_gaq.push(['_trackEvent', category, action, label]);
	});
	
}