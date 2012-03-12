var stamp = "stamp=" + Math.round((new Date().getUTCMilliseconds() + Math.random())*10000);
$(document).ready(function () {
	init();
	
	$(window).load(function() {
		$("#content, #sidebar").removeClass("loading").slideDown();
		garbage_collection();
	});
	
});

function init() {
	
	load_map();
	
	$.ajax({
		url: "/json/trails/?" + stamp,
		//url: "http://www.whistler.com/json/trails/?" + stamp,
		dataType: "json",
		success: function (data) {
			var path_coords = [];
			$.each(data, function (i, trail) {
				trails.push(trail);
			});
			get_areas();
		}
	});
	
	google.maps.event.addListener(map, "click", function (event) {
		infowindow.close();
		for (i in trails) {
			for (m in trails[i].poi_markers) {
				trails[i].poi_markers[m].setAnimation(null);
			}
		}
	});
	
	// Parse url old school
	var href = new String(window.location.href);
	var href_parts = href.split("?");
	var query = href_parts[1];

	// ************** DEVIN New Parse
	href_parts = href.split("/"); query = href_parts[5];  url = query;
	
	var urlfb = window.location.href;
	var fb = "<fb:comments href=" + urlfb.replace("http://","") + " num_posts='3' width='645' ></fb:comments>";
	$(fb).appendTo("#t1");
	
	$("#map_canvas").mousemove(function (e) {
		var offset = $("#map_canvas").offset();
		var x = e.pageX - offset.left;
		var y = e.pageY - offset.top;
		cursor = [x, y];
	});
	
}