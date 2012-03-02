$(document).ready(function() {
						   
	$(".page-widget").each(function() {
		
		if($(this).find(".arrival").attr("id") != "deals-arrival") {
			$(this).find(".arrival").datepicker().val(add_to_today(1).toString()).trigger('change');
		}
		$(this).find(".departure").datepicker().val(add_to_today(3).toString()).trigger('change');
		
	});
	
});