$(document).ready(function() {

	$(".inline-datepicker").datepicker({
		numberOfMonths: 1,
		showAnim: false,
		showOn: 'focus',
		buttonImageOnly: true,
		defaultDate: +1,
		onSelect: function (selected_date) {
			calculate_num_days($(this).parents(".inline-widget").attr("id"));
		}
	});
	
	$(".inline-widget").each(function() {
		$(this).find(".arrival").datepicker().val(add_to_today(0).toString()).trigger('change');
		$(this).find(".departure").datepicker().val(add_to_today(1).toString()).trigger('change');
	});

});