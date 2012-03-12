var api, map, trail, area_id, trail_id, url, latlng, infowindow, url_data = [], areas = [], trails = [], markers = [], cursor = [];
var facilities = [["airdome", "Air Dome",		[["50.1093", "-122.9433"]]],
			  	  ["dirt-jumps", "Dirt Jumps",	[["50.1162", "-122.9513"]]],
			  	  ["parking", "Parking",		[	["50.1211", "-122.9853"],
													["50.1302", "-122.9850"],
													["50.0953", "-122.9905"],
													["50.1146", "-122.9520"],
													["50.1170", "-122.9526"],
													["50.1195", "-122.9530"],
													["50.1115", "-122.9449"]]],
				  ["skatepark", "Skatepark",		[["50.1179", "-122.9508"]]]];

function load_map(){
	latlng = new google.maps.LatLng(50.116073, -122.959157);
	infowindow = new google.maps.InfoWindow();
	var myOptions = {
		zoom: 12,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.TERRAIN
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function load_ui(){
	var menus = [["novice", []],["intermediate", []], ["advanced", []], ["expert", []]];
	trails.sort(function(a, b){
		return (a.Name < b.Name) ? -1 :  1;
	});
	
	for(i in trails){
		switch (trails[i].Rating){
			case "Novice":
				menus[0][1].push(trails[i]);
				break;
			case "Intermediate":
				menus[1][1].push(trails[i]);
				break;
			case "Advanced":
				menus[2][1].push(trails[i]);
				break;
			case "Expert":
				menus[3][1].push(trails[i]);
				break;
		}
	}
	
	for(i in menus){
		for(l in menus[i][1]){
			var t = menus[i][1][l];
			var html = "<li><a href='http://www.whistler.com/trails/bike/" + t.URL + "'>" + t.Name + "</a></li>";
			
			switch(t.Zone){
				case "Bike Park":
					$(html).appendTo("#" + menus[i][0] + "_tab .trail_dropdown li ul.bike-park")
					break;
				case "Whistler South":
					$(html).appendTo("#" + menus[i][0] + "_tab .trail_dropdown li ul.south")
					break;
				case "Lost Lake":
					$(html).appendTo("#" + menus[i][0] + "_tab .trail_dropdown li ul.lost-lake")
					break;
				case "Whistler North":
					$(html).appendTo("#" + menus[i][0] + "_tab .trail_dropdown li ul.north")
					break;
				case "Westside":
					$(html).appendTo("#" + menus[i][0] + "_tab .trail_dropdown li ul.westside")
					break;
				case "Village":
					$(html).appendTo("#" + menus[i][0] + "_tab .trail_dropdown li ul.village")
					break;
			}
		}
	}
	
	$("#map_tabs .trail_dropdown li ul").each(function (){
		if($(this).children().length == 0){
			$("<li><em><strong>Coming soon</strong></em></li>").appendTo(this);
		}
	});
	
	areas.sort(function(a, b){
		return (a.Name < b.Name) ? -1 :  1;
	});
	
	for(i in areas){
		$("<li><a href='http://www.whistler.com/trails/bike/" + areas[i].URL + "'>" + areas[i].Name + "</a></li>").appendTo("#area_tab ul.map_dropdown");
	}
	
	// find if trail or area and load
	if (url != undefined) {
		
		var trail1 = get_trail_by_url(url);
		if(trail1 != undefined){
			trail = load_trail(trail1);
		}
		var area1 = get_area_by_url(url);
		if(area1 != undefined){
			load_area(area1);
		}
		
	}
	
	if (window.location.pathname == "/trails/bike/") {
		(function() {
			show_all();
		})();
	}
	
	$(".updates h3 a").click(function() {
		$(".updates ul").slideToggle();
		$(this).toggleClass("open");
		return false;
	});
	
}

function load_trail(trail){
	
	/* Load trail coords */
	var path = trail.Data;
	
	$.ajax({
		url: "/trails/data/" + trail.Data + "?" + stamp,
		dataType: "json",
		success: function(data){
			trail.Coords = data.Coord;
			trail.line = plot_line(trail);
			
			// load trail content
			load_content(trail);
			
			// Load Trail stats
			$("#graph, #stats").show();
			stats(trail);
			
			// add pois to trail
			load_pois(trail);
			
			// Set Zoom level
			center_on_trail(trail);
			
			// load comments
			load_comments(window.location.href);
			
			// load associated media
			get_media(trail, 1);
			
			get_nearby(trail);
			
			write_email_link("photos", "Photo", "Send us your photos");
			write_email_link("videos", "Video", "Send us your videos");
			
			var links = [["./" + get_area_url(trail.Zone), trail.Zone], ["./"+trail.URL, trail.Name]];
			update_breadcrumb(links);
			
		}
	});
	
	return trail;
	
}

function plot_line(trail){
	
	var strokeColor = get_trail_color(trail.Type, trail.Rating);
	
	var coords = [];
	$.each(trail.Coords, function(index, value){
		coords[index] = new google.maps.LatLng(trail.Coords[index][0], trail.Coords[index][1]);
	});
	
	var line = new google.maps.Polyline({
		path: coords,
		strokeColor: strokeColor,
		strokeOpacity: 1.0,
		strokeWeight: 3,
		name: trail.name, 
		id: trail.ID,
		center: trail.center,
		raw_coords: coords,
		url: trail.URL
	});
	
	google.maps.event.addListener(line, "click", function(latlng){
		window.location = "http://www.whistler.com/trails/bike/" + this.url;
	});
	
	google.maps.event.addListener(line, "mouseover", function(){
		line.setOptions({strokeWeight: 5});
		show_label(trail);
	});
	
	google.maps.event.addListener(line, "mouseout", function(){
		line.setOptions({strokeWeight: 3});
		hide_label(trail);
	});
	
	line.setMap(map);
	
	return line;
}

function stats(trail){
	
	// plot graph
    var points = [];
	var cumulative_distance = 0;
	var ascent = 0;
	var descent = 0;
	
	for(i in trail.Coords){
		
		var current = trail.Coords[i];
		
		var p = i;
		p--;
		var prev = trail.Coords[p];
		
		var n = i;
		n++;
		var next = trail.Coords[n];
		
		var l = trail.Coords.length - 1;
		var last = trail.Coords[i][l];
		
		if(i == 0){
			cumulative_distance = 0;
		} else {
			cumulative_distance = cumulative_distance + distance_between_two_points(current, prev);
		}
		
		points.push([cumulative_distance, trail.Coords[i][2]]);
		
		//calculate ascent/descent
		if(next){
			var c = Math.round(current[2]);
			var n = Math.round(next[2]);
			var diff = c - n;
			
			if(diff > 0){
				descent += diff;
			} else if(diff < 0){
				ascent += Math.abs(diff);
			}
		}
		
	}
	
	var options = {
		series: {
			lines: { show: true,
					 fill: true,
					 fillColor: "#E5E5E5" },
			grid: { hoverable: true, clickable: true },
			points: { show: false },
			color: get_trail_color(trail.Type, trail.Rating)
		}
	};
	
	if(trail.Graph[0] != 0){
		options.yaxis = { min: trail.Graph[0], max: trail.Graph[1] }
	} else {
		var max=points[0][0], min=points[0][1];
		for(i in points){
			if(points[i][1] > max){ max = Math.round(points[i][1]); }
			if(points[i][1] < min){ min = Math.round(points[i][1]); }
		}
		max = max + (max/100)*1;
		min = min - (min/100)*1;
		options.yaxis = { min: min, max: max }
	}
	
    var plot = $.plot( $("#graph"), 
			[ {data: points } ],
			options);
	
	var html = "<span class='xaxis'>Distance (km)</span><span class='yaxis'>Elevation (m)</span>";
	$(html).appendTo("#graph");
	
	// display stats	
	var last = trail.Coords.length - 1;
	var start = Math.round(trail.Coords[0][2]);
	var end = Math.round(trail.Coords[last][2]);
	
	var total_distance = (points[points.length-1][0] < 1) ? "Less than 1" : Math.round(points[points.length-1][0]);
	
	//stats in km
	var ascent_km = Math.round((ascent * 3.2808)) + " feet";
	var descent_km = Math.round((descent * 3.2808)) + " feet";
	
	var stats = "<table>";
		stats +="<tr><th>Type:</th><td>" + trail.Type + "</td></tr>";
		stats +="<tr><th>Time:</th><td>" + trail.Time + "</td></tr>";
		stats +="<tr><th>Length:</th><td>" + total_distance + " km</td></tr>";
		stats +="<tr><th>Start Elevation:</th><td>" + start + " m</td></tr>";
		stats +="<tr><th>End Elevation:</th><td>" + end + " m</td></tr>";
		stats +="<tr><th>Total Ascent:</th><td>" + ascent + " m / " + ascent_km + "</td></tr>";
		stats +="<tr><th>Total Descent:</th><td>" + descent + " m / " + descent_km + "</td></tr>";
		if(trail.KMZ){
			stats +="<tr><td colspan='2' align='center'><a href='" + trail.KMZ + "'>Download Google Earth File</a></td></tr>";
		}
	stats += "</table>";
	
	$("#stats #trail_stats").html(stats).addClass(trail.Rating);
	
}

function distance_between_two_points(current, next){
	
	if(next) {
		
		var lat1 = current[0], 
			lon1 = current[1], 
			lat2 = next[0], 
			lon2 = next[1], 
			R = 6371, 
			dLat = toRad(lat2-lat1), 
			dLon = toRad(lon2-lon1); 
		
		var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
				Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
				Math.sin(dLon/2) * Math.sin(dLon/2); 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		
		return d;
		
	} else {
		return 0;
	}

}

function toRad(input) {
	return input * Math.PI / 180;
}

function load_pois(trail){
	
	if(trail.pois){
		add_pois(trail);
	} else {
		$.ajax({
			url: "/json/marker/?id=" + trail.ID + "&amp;" + stamp,
			//url: "http://www.whistler.com/json/marker/?id=" + trail.ID + "&amp;" + stamp,
			dataType: "json",
			success: function(data){
				trail.pois = data;
				add_pois(trail);
			},
			error: function(a, b, c){
			}
		});
	}
	
}

function add_pois(trail){
	
	clear_pois();
	/* add markers */
	trail.poi_markers = [];
	for(i in trail.pois){
		var poi = trail.pois[i];
		if(poi.Coord) {
			var latlng = new google.maps.LatLng(poi.Coord[0], poi.Coord[1]);
			var marker = new google.maps.Marker({
				id: poi.ID,
				map: map,
				position: latlng,
				html: poi.Desc,
				title: poi.Marker,
				icon: "http://www.whistler.com/images/trails/icons/" + trail.Rating + "/" + poi.Marker + ".png",
				animation: google.maps.Animation.DROP
			});
			trail.poi_markers.push(marker);
		}
	}
	
	for(i in trail.poi_markers){
		google.maps.event.addListener(trail.poi_markers[i], "click", function(){
			infowindow.setContent("<div class='infowindow'><h3>" + this.title + "</h3>" + this.html + "</div>");
			infowindow.open(map, this);
		});
	}
	
	google.maps.event.addListener(infowindow, "domready", function(){
		$(".infowindow").parent().parent().css("overflow", "hidden");
	});
	
	$(document).scrollTo("#breadcrumbs", 800);
}

function clear_pois(){
	for(i in trails){
		if(trails[i].poi_markers != undefined){
			for(x in trails[i].poi_markers){
				trails[i].poi_markers[x].setMap(null);
			}
		}
	}
}

function get_trail_color(type, rating){

	switch(rating){
		case "Novice":
			return "#529C12";
			break;
		
		case "Intermediate":
			return "#1791A3";
			break;
			
		case "Advanced":
			return "#3E3E3E";
			break;
			
		case "Expert":
			return "#000000";
			break;
		
		default:
			return "#529C12";
	}
}

function center_on_trail(trail){
	var lat_lng = new google.maps.LatLng(trail.Center[0], trail.Center[1]);
	map.setZoom(trail.Zoom);
	map.setCenter(lat_lng);
}

function hide_trails(){
	for(i in trails){
		if(trails[i].line){
			trails[i].line.setMap(null);
		}
	}
}

function load_content(trail){
	$("#trail-info, #sidebar").html("").addClass("loading");
	
	$("#content.trails h1").text(trail.Name).removeClass().addClass(trail.Rating);
	$("#trail-info").html(trail.Desc);
}

function show_label(trail){
	$("#trail_label").html(trail.Name).show().removeClass().addClass(trail.Rating);
	var x = (cursor[0] + 30) + "px";
	var y = (cursor[1] + 135) + "px";
	$("#trail_label").css({left: x, top: y});
}

function hide_label(trail){
	$("#trail_label").html("").hide();
}

function load_comments(url){
	
	var json=[];
	$("#sidebar").empty();
	$("#sidebar").removeClass("loading");
	$.ajax({
		cache: false, 
		url: "http://www.whistler.com/json/facebook/?url=" + window.location.href,
		dataType: "json",
		success: function(data){
			$.each(data, function (i, comment){
				json.push(comment);
			});
		},
		complete: function() {
			
			if(json){
				var comments = json[0].data;
				var html = "<h3 class='trail_comment_title'>Trail Reports</h3>";
				
				if(comments != undefined && comments.length > 0){
					$.each(comments, function(i, comment){
						html +="<div class='trail_comment'>";
							html += "<img src='http://graph.facebook.com/" + comment.from.id + "/picture' alt='" + comment.from.name + "' width='50' height='50' />";
							html += "<strong class='trail_comment_poster'>" + comment.from.name + "</strong>";
							html += "<span class='trail_comment_stamp'>" + Date.parse(comment.created_time).toString('MMMM d h:mm') + "</span>";
							html += "<p class='trail_comment_post'>" + comment.message + "</p>";
						html += "</div>";
					});
				} else {
					html += "<p>Be the first to comment on this trail.</p>";
				}
				$(html).appendTo("#sidebar");
			}
		}
	});
	
}

function load_area(area){
	
	var html = "<h3 class='comments'>" + area.Name + " Trails</h3><ul class='popular-trails'>";
	
	var links = [["./?area=" + area, area.Name]];
	update_breadcrumb(links);
	
	// load area trails and update sidebar
	for(i in trails){
		
		var trail = trails[i];
		
		if((trail.Zone == area.Name) || (area.URL == "all")){
			
			if(!trail.Coords){
				
				(function(trail){
					/* Load trail coords */
					var path = trail.Data;
					
					$.ajax({
						url: "/trails/data/" + trail.Data + "?" + stamp,
						dataType: "json",
						success: function(data){
							trail.Coords = data.Coord;
							trail.line = plot_line(trail);
						}
					});
				})(trail);
				
			}
			html += "<li><a href='http://www.whistler.com/trails/bike/" + trail.URL + "' class='" + trail.Rating + "'>" + trail.Name + "</a></li>";
		}
		
	}
	html += "</ul>";
	$("#sidebar").html(html);
	
	map.setZoom(area.Zoom);
	map.setCenter(new google.maps.LatLng(area.Center[0], area.Center[1]));
	
	//load page content
	$("#content.trails h1").text(area.Name).removeClass();
	$("#trail-info").html(area.Desc);
	
	write_email_link("photos", "Photo", "Send us your photos");
	write_email_link("videos", "Video", "Send us your videos");
	
	$(document).scrollTo("#breadcrumbs", 800);
	
}

function update_breadcrumb(links){
	
	var html = "<p>";
		html += "<span class='nodeHome'><a href='http://www.whistler.com/trails/bike/'>Trails</a></span>";
		html += "<span class='nodeArrow'>&nbsp;</span>";
		for(i in links){
			if(links[i][0]){
				if(i == links.length-1){
					html +="<span class='nodeCurrent'>" + links[i][1] + "</span>";
				} else {
					html += "<span class='node'><a href='" + links[i][0] + "'>" + links[i][1] + "</a></span>";
					html += "<span class='nodeArrow'>&nbsp;</span>";
				}
			}
		}
	html += "</p>";
	$("#breadcrumbs").html(html).show();

}

function add_facility(fac_id){
	
	var facility = get_facility_by_id(fac_id);
	
	for(f in facility[2]){
		var position =  new google.maps.LatLng(facility[2][f][0], facility[2][f][1]);
		var marker = new google.maps.Marker({
			map: map,
			position: position,
			id: facility[0],
			title: facility[1],
			icon: "http://www.whistler.com/images/trails/icons/facilities/" + fac_id + ".png",
			animation: google.maps.Animation.DROP
		});
		markers.push([facility[0], marker]);
		map.setCenter(position);
		map.setZoom(14);
	}
	
}

function get_media(trail){
	var photos=[],videos=[];
	$.ajax({
		url: "/json/media/index.aspx?id=" + trail.ID + "&type=1&amp;" + stamp,
		dataType: "json",
		success: function(data){
			for(i in data){
				if(data[i].Media == 1){
					photos.push(data[i]);
				} else if(data[i].Media == 2){
					videos.push(data[i]);
				}
			}
			if (photos.length > 0) load_photos(photos);
			if (videos.length > 0) load_videos(videos);
		}
	});
}

function load_photos(photos){
	var html = "",last="",count=1;
	for(k in photos){
		if(count%4 == 0) last=" class='last'";
		html += "<a href='" + photos[k].Desc + "' rel='images'><img src='" + photos[k].Desc + "' alt='" + photos[k].Comment + "' title='" + photos[k].Comment + "' width='150' height='100' " + last + "/></a>";
		last="",count++;
	}
	$(html).appendTo("#photo-gallery");
	$("#photo-gallery a").fancybox({});
}

function load_videos(videos){
	var html = "",last="",count=1;
	for(v in videos){
		if(count%4 == 0) last=" class='last'";
		html += "<a href='" + videos[v].Desc + "' title='"+ videos[v].Comment +"'><img src='http://lorempixum.com/150/100' alt='" + videos[v].Comment + "' title='" + videos[v].Comment + "' width='150' height='100' " + last + "/></a>";
		last="",count++;
	}
	$(html).appendTo("#video-gallery");
	$("#video-gallery a").click(function() {
		$.fancybox({
				'width'			: 680,
				'height'		: 495,
				'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'			: 'swf'
			});
	
		return false;
	});
}

function get_areas() {

	$.ajax({
		url: "/json/area/index.aspx?type=2&amp;" + stamp,
		dataType: "json",
		success: function (data) {
			$.each(data, function (i, area) {
				areas.push(area);
			});
			load_ui();
		}
	});

}

function show_all(){
	for(i in trails){
		
		var trail = trails[i];
		
		if(!trail.Coords){
			
			(function(trail){
				/* Load trail coords */
				var path = trail.Data;
				
				if(trail.Data) {
					$.ajax({
						url: "/trails/data/" + trail.Data + "?" + stamp,
						dataType: "json",
						success: function(data){
							trail.Coords = data.Coord;
							trail.line = plot_line(trail);
						}
					});
				}
			})(trail);
			
		}
		
	}
}

function draw_areas(){
	
	var coords = [
		[
			"Whistler North",
			[
				new google.maps.LatLng(50.18130309265859, -122.99228764575196),
				new google.maps.LatLng(50.18932695413525, -122.96035862963868),
				new google.maps.LatLng(50.1925141414325, -122.87195302050782),
				new google.maps.LatLng(50.17635620507766, -122.85598851245118),
				new google.maps.LatLng(50.11640322439934, -122.89753056567383),
				new google.maps.LatLng(50.122236813245365, -122.92928792041016),
				new google.maps.LatLng(50.14589408155994, -122.9342661003418),
				new google.maps.LatLng(50.15007414989371, -122.9698000053711)
			],
			"whistler-north/"
		],
		[
			"Lost Lake",
			[
				new google.maps.LatLng(50.14336386270981, -122.93563939135743),
				new google.maps.LatLng(50.144573984076466, -122.94456578295899),
				new google.maps.LatLng(50.13874311769635, -122.95229054492188),
				new google.maps.LatLng(50.13357175478301, -122.94971562426758),
				new google.maps.LatLng(50.12267705525319, -122.95211888354493),
				new google.maps.LatLng(50.120475804725324, -122.94799901049805),
				new google.maps.LatLng(50.123117293212175, -122.93237782519532)
			],
			"lost-lake/"
		],
		[
			"Westside",
			[
				new google.maps.LatLng(50.180313756122324, -122.9943475822754),
				new google.maps.LatLng(50.12201669072314, -123.02353001635743),
				new google.maps.LatLng(50.07852264942232, -123.08532811206055),
				new google.maps.LatLng(50.095264271056884, -123.01237202685547),
				new google.maps.LatLng(50.10242173214874, -122.99554921191407),
				new google.maps.LatLng(50.115302467544424, -122.98730946582032),
				new google.maps.LatLng(50.130160549920916, -122.98833943408204),
				new google.maps.LatLng(50.13698271647761, -122.97803975146485),
				new google.maps.LatLng(50.14941416339332, -122.97117329638672)
			],
			"westside/"
		],
		[
			"Whistler South",
			[
				new google.maps.LatLng(50.07720069338571, -123.08429814379883),
				new google.maps.LatLng(50.09427315370248, -123.0111703972168),
				new google.maps.LatLng(50.101430762853184, -122.99451924365235),
				new google.maps.LatLng(50.095154147918834, -122.97340489428711),
				new google.maps.LatLng(50.06155477919455, -122.95503712695313),
				new google.maps.LatLng(50.045462812789566, -122.99314595263672),
				new google.maps.LatLng(50.046675409193526, -123.08567143481446)
			],
			"whistler-south/"
		],
		[
			"Bike Park",
			[
				new google.maps.LatLng(50.09570476107831, -122.97185994189454),
				new google.maps.LatLng(50.1017610882294, -122.96379185717774),
				new google.maps.LatLng(50.10715608028027, -122.94885731738282),
				new google.maps.LatLng(50.09537439394187, -122.93769932788086),
				new google.maps.LatLng(50.079514092529585, -122.92173481982422),
				new google.maps.LatLng(50.071031083258696, -122.91452504199219),
				new google.maps.LatLng(50.06210577836706, -122.95349217456055)
			],
			"bike-park/"
		],
		[
			"Whistler Village",
			[
				new google.maps.LatLng(50.144573984076416, -122.94576741259766),
				new google.maps.LatLng(50.148974167332824, -122.97022915881348),
				new google.maps.LatLng(50.13670764793582, -122.97692395251465),
				new google.maps.LatLng(50.12972037674199, -122.98730946582032),
				new google.maps.LatLng(50.115302467544396, -122.98645115893555),
				new google.maps.LatLng(50.10247678539738, -122.99383259814454),
				new google.maps.LatLng(50.09636548851759, -122.97323323291016),
				new google.maps.LatLng(50.10231162546154, -122.96516514819336),
				new google.maps.LatLng(50.10787169684171, -122.94885731738282),
				new google.maps.LatLng(50.09614524705023, -122.93658352893067),
				new google.maps.LatLng(50.07152688483267, -122.91332341235352),
				new google.maps.LatLng(50.10027460609757, -122.90182210009766),
				new google.maps.LatLng(50.11491719666567, -122.89787388842774),
				new google.maps.LatLng(50.121301285534365, -122.9313478569336),
				new google.maps.LatLng(50.118879834796, -122.94851399462891),
				new google.maps.LatLng(50.121741536146025, -122.95349217456055),
				new google.maps.LatLng(50.13329666663028, -122.95211888354493),
				new google.maps.LatLng(50.1385780828329, -122.95383549731446)
			],
			"village/"
		]
	];
	
	for(var i=0; i < coords.length; i++){
		var area_name = coords[i][0], area_link = coords[i][2];
		var shape = new google.maps.Polygon({
			path: coords[i][1],
			strokeColor: "#ffffff",
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: "#b54141",
			fillOpacity: 0.4
		});
		shape.setMap(map);
		
		(function(name, area_link){
			google.maps.event.addListener(shape, "mousemove", function() {
				//show_area_label(area_name);
				show_area_label(name);
				this.setOptions({fillOpacity: 0.8});
			});
			
			google.maps.event.addListener(shape, "mouseout", function() {
				$("#area_label").hide();
				this.setOptions({fillOpacity: 0.4});
			});
			
			google.maps.event.addListener(shape, "click", function() {
				window.location = "http://www.whistler.com/trails/bike/" + area_link;
			});
		})(area_name, area_link);
		
	}
	
}

function get_nearby(trail){

	var from,to;
	$.ajax({
		url: "/json/marker_head/?id=2&amp;" + stamp,
		dataType: "json",
		success: function(data) {
			var all=[], from = [trail.Coords[0][0], trail.Coords[0][1]], html = "<h3 class='comments'>Trails near " + trail.Name + "</h3><ul class='popular-trails'>";
			$.each(data, function(k,v) {
				var t = get_trail_by_id(v.ID);
				if((t != undefined) && (t.ID != trail.ID)){
					t.Coords = v.Coord;
					to = [t.Coords[0], t.Coords[1]];
					t.distance = distance_between_two_points(from, to);
					all.push(t);
				}
			});
			all = sort_by_distance(all);
			list_nearest(all);
		}
	});

}

function list_nearest(all) {
	
	var html = "<h3 class='comments'>Trails near " + trail.Name + "</h3><ul class='popular-trails'>",nearest = [], all_markers = [];
	for(i=0; i < 5; i++){
		var t = all[i], distance = Math.round(t.distance*100)/100;
		html += "<li><a href='/trails/bike/" + t.URL + "' onclick='show_nearby(" + t.ID + "); return false;' id='load-link-" + t.ID + "' class='" + t.Rating + "'>" + t.Name + " <span>(" + distance + " km)</span></a></li>";
	}
	html += "</ul>";
	$(html).prependTo("#sidebar");
}

function show_nearby(id){
	var t = get_trail_by_id(id);
	load_trail(t);
	$("#stats #graph canvas").addClass("shift");
}

function write_email_link(div, action, text){
	var html = "<a href='mail" + "to:web@whistler.com?subject=" + action + ": " + window.location.href + "' class='upload'>" + text + "</a>";
	$("#"+div+" .email-button").html(html);
}

function sort_by_distance(places){
	places.sort(function(a, b){
		return a.distance - b.distance;
	});
	return places;
}

function trail_updates(){
	$(".updates ul").slideToggle();
	$(this).toggleClass("open");
	return false;
}

function show_area_label(text){
	$("#area_label").html(text).show();
	var x = (cursor[0] + 30) + "px";
	var y = (cursor[1] + 100) + "px";
	$("#area_label").css({left: x, top: y});
}

function get_trail_by_id(id){
	for(i in trails){
		if(trails[i].ID == id){
			return trails[i];
		}
	}
}
function get_trail_by_url(u){
	for(i in trails){
		if(trails[i].URL == u){
			return trails[i];
		}
	}
}

function get_facility_by_id(id){
	for(f in facilities){
		if(facilities[f][0] == id){
			return facilities[f];
		}
	}
}

function get_area_by_id(id){
	for(a in areas){
		if(areas[a].ID == id){
			return areas[a];
		}
	}
}
function get_area_by_url(u){
	for(a in areas){
		if(areas[a].URL == u){
			return areas[a];
		}
	}
}
function get_area_id(name){
	for(a in areas){
		if(areas[a].Name == name){
			return areas[a].ID;
		}
	}
}
function get_area_url(name){
	for(a in areas){
		if(areas[a].Name == name){
			return areas[a].URL;
		}
	}
}
function oc(a){
	var o = {};
	for(var i=0;i<a.length;i++){
		o[a[i]]='';
	}
	return o;
}

function garbage_collection(){
	delete area_id, trail_id, url, latlng, infowindow, url_data, areas, markers;
}