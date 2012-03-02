function add_tracking() {
	
	/*
	* Filter Tracking: Property/Unit amenities
	*/
	$("#tabs a").click(function() {
		var category = "Cart", 
			action = "View", 
			label = "Tab: " + $(this).text();
		_gaq.push(['_trackEvent', category, action, label]);
	});
	
}

$("document").ready(function () {add_tracking();})