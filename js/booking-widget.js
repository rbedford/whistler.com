$(document).ready(function() {
	
	$(window).scroll(function() {
		move_widget();
	});
	
	if (($.browser.msie  && parseInt($.browser.version) != 7) && ($.browser.msie  && parseInt($.browser.version) != 8)) {
		$(window).resize(function() {
			move_widget();
		});
	}
	move_widget();
	
	if($(".booking:first").length > 0) $("#widget h3").text($(".booking:first").attr("id").replace("widget-", ""));
	
	$("#booking_widget h2 a, a#toggle_booking_widget").click(function() {
		
		if($("#widget").hasClass("closed")) {
			$("#widget").toggleClass("closed");
			$("#widget").animate({ height: "275px" }, function() {
				$("#booking_widget .booking:first").show();
			});
		} else {
			$("#booking_widget .booking").hide();
			$("#widget").animate({ height: "35px" }, function() {
				$("#widget").toggleClass("closed");
			});
		}
		return false;
	});
	
	$("#widget ul.links a").click(function() {
		
		var id = "#" + $(this).parent().attr("id").replace("open-", "widget-");
		$("#widget ul.links li").show().removeClass("last");
		$(this).parent().hide();
		
		$("#widget ul.links li").filter(":visible").last().addClass("last");
		$("#widget h3").text($(this).text());
		
		$(".booking").hide();
		$(id).show();
		resize_widget(id);
		
		return false;
	});
	
	$(".booking input[type='submit']").click(function() {
		widget_loading();
	});
	
	$("#adep").autocomplete({
		zIndex: 9999,
		minLength: 0,
		appendTo: "#e1",
		delay: 0,
		minLength: 3,
		source: airports,
		focus: function (event, ui) {
			$("#adep").val(ui.item.label);
			return false;
		},
		select: function (event, ui) {
			$("#adep").val(ui.item.label);
			$("#hidAirport").val(ui.item.value);
			return false;
		}
	});
	
	$("#adep2").autocomplete({
		zIndex: 9999,
		minLength: 0,
		appendTo: "#e2",
		delay: 0,
		minLength: 3,
		source: airports,
		focus: function (event, ui) {
			$("#adep2").val(ui.item.label);
			return false;
		},
		select: function (event, ui) {
			$("#adep2").val(ui.item.label);
			$("#hidAirport2").val(ui.item.value);
			return false;
		}
	});
	
	$("#widget input, #widget select, .page-widget select").uniform();

	$("#widget-lodging .arrival").datepicker().val(add_to_today(1).toString()).trigger('change');
	$("#widget-lodging .departure").datepicker().val(add_to_today(3).toString()).trigger('change');
	
	$("#widget-transfers .arrival").datepicker().val(add_to_today(2).toString()).trigger('change');
	$("#widget-transfers .departure").datepicker().val(add_to_today(2).toString()).trigger('change');
	
	$("#widget-flights .arrival").datepicker().val(add_to_today(2).toString()).trigger('change');
	$("#widget-flights .departure").datepicker().val(add_to_today(4).toString()).trigger('change');

	$("#widget-activities .arrival").datepicker().val(add_to_today(2).toString()).trigger('change');
	$("#widget-activities .departure").datepicker().val(add_to_today(2).toString()).trigger('change');

	$("#widget-rentals .arrival").datepicker().val(add_to_today(4).toString()).trigger('change');
	$("#widget-rentals .departure").datepicker().val(add_to_today(4).toString()).trigger('change');
	
});