$("document").ready(function() {
							 
	$("#deals-arrival").datepicker({
		numberOfMonths: 1,
		showAnim: false,
		showOn: 'focus',
		buttonImageOnly: true,
		defaultDate: +1,
		maxDate: +16, 
		onSelect: function (selected_date) {
			calculate_num_days($(this).parents(".page-widget").attr("id"), $(this).parents(".booking").attr("id"));
		}
	});
	
	var now = new Date();				 
	$(".dealswidget .arrival").val(Date.parse(now.add(1).days()).toString("MM/dd/yyyy"));
	$(".dealswidget .departure").val(Date.parse(now.add(3).days()).toString("MM/dd/yyyy"));
});