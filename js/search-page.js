$(document).ready(function() {
	
	$(".user-control-search select, .user-control-search input").uniform();
	
	$(".search-datepicker").datepicker({
		numberOfMonths: 1,
		showAnim: false,
		showOn: 'focus',
		buttonImageOnly: true,
		defaultDate: +1,
		onSelect: function (selected_date) {
			calculate_num_days($(this).parents(".user-control-search").attr("id"));
		}
	});
	
	$(".search-datepicker.arrival").datepicker().val(add_to_today(1).toString()).trigger('change');
	$(".search-datepicker.departure").datepicker().val(add_to_today(2).toString()).trigger('change');
	
});