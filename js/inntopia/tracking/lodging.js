function add_tracking() {
	
	/*
	* Filter Tracking: Property/Unit amenities
	*/
	$("#filter_results input").click(function() {
		
		var form_label = $.trim($(this).parents("td").find("label").text()), 
			value = $(this).parents("li").find("span:first").attr("data-text");
			
		var category = "Cart", 
			action = "Lodging", 
			label = form_label + ": " + value;
		
		_gaq.push(['_trackEvent', category, action, label]);
		
	});
	
	/*
	* Filter tracking: lodging type, bedrooms, nightly rate
	*/
	$("#filter_results select").change(function() {
		
		var label_id = $(this).attr("data-label"), 
			form_label = $("label[for='" + label_id + "']").text(), 
			value = $(this).children("option:selected").text();
		
		if($(this).attr("id") == "c3_ddlPrice1"){
			value = "Min " + value;
		} else if ($(this).attr("id") == "c3_ddlPrice2") {
			value = "Max " + value;
		}
		
		var category = "Cart", 
			action = "Lodging", 
			label = form_label + ": " + value;
		
		_gaq.push(['_trackEvent', category, action, label]);
		
	});
	
	/*
	* Filter Tracking: Peak Rating
	*/
	$(".star-rating-control a").click(function() {
		var category = "Cart", 
			action = "Lodging", 
			label = $(this).attr("title");
			
		_gaq.push(['_trackEvent', category, action, label]);
	});
	
	/*
	* Sort Tracking: Price (high, low), Name
	*/
	$(".sort_by a").click(function() {
		var category = "Cart", 
			action = "Lodging", 
			label = "Sort: " + $(this).text();
		_gaq.push(['_trackEvent', category, action, label]);
	});
	
	/*
	* Click Tracking: Property Links
	*/
	$(".result_header_details a").click(function() {
		var category = "Cart", 
			action = "Lodging", 
			label = "Tab: " + $(this).attr("data-label");
		_gaq.push(['_trackEvent', category, action, label]);
	});
	
}