$(document).ready(function() {
	
	$(".datepicker").datepicker({
		numberOfMonths: 1,
		showAnim: false,
		showOn: 'focus',
		buttonImageOnly: true,
		defaultDate: +1,
		onSelect: function (selected_date) {
			calculate_num_days($(this).parents(".page-widget").attr("id"), $(this).parents(".booking").attr("id"));
		}
	});
	
	// New Snow Ticker
	$.ajax({
		url: "/json/weather/tom/index.aspx",
		//url: "/js/tom.json",
		dataType: "json",
		success: function(json) {
			var data = json[0], 
				new_snow = data.newSnow, 
				snow_24 = data.snow24, 
				snow_7 = data.snow7Day, 
				snow_base = data.baseSnow;
			
			$(".ticker .new-snow dd a").html(new_snow + "cm");
			$(".ticker .snow-twofour dd a").html(snow_24 + "cm");
			$(".ticker .snow-sevenday dd a").html(snow_7 + "cm");
			$(".snow-base dd a").html(snow_base + "cm");
			
		},
		error: function(){}
	});
	$(".snow").vTicker({ height: 35 });
	
	$("#weather-widget .ticker a").click(function() {
		_gaq.push(['_trackEvent', 'homepage', 'snow_widget', 'weather']);
	});
	
	$("#weather-widget .live-webcams a").click(function() {
		_gaq.push(['_trackEvent', 'homepage', 'snow_widget', 'webcams']);
	});
	
	
});

function resize_widget(id) {
	var new_height = $(id+".booking").css("height").replace("px", "");
	new_height = (parseInt(new_height) + 85);
	if(window.location.pathname == "/") new_height = new_height - 20;
	$("#widget").animate({ height: new_height });
}

function move_widget() {
	if (isScrolledIntoView("#footer")) {
		$("body").addClass("anchored");
	} else {
		$("body").removeClass("anchored");
	}
}

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop(), 
		docViewBottom = docViewTop + $(window).height(), 
		elemTop = $(elem).offset().top, 
		elemBottom = elemTop + $(elem).height();
	
	return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
}


function getViewportHeight() {
	var height = window.innerHeight,
		mode = document.compatMode;
	
	if ( (mode || !$.support.boxModel) ) {
		height = (mode == 'CSS1Compat') ? document.documentElement.clientHeight : document.body.clientHeight;
	}
	
	return height;
}