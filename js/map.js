var map, 
	markers = [], 
	car_parks = [], 
	lift_coords = [], 
	lifts = [], 
	from, 
	panorama, 
	temp, 
	infowindow = new google.maps.InfoWindow({});

var coords = {
	"aava": ["50.1144399", "-122.9582543", "Aava", "http://www.whistler.com/Aava/"],
	"adara": ["50.113963", "-122.9565307", "Adara", "http://www.whistler.com/Adara_Hotel/"],
	"alpenglow": ["50.1182964", "-122.9582212", "Alpenglow", "http://www.whistler.com/Alpenglow/"],
	"alpine-greens": ["50.1200254", "-122.9414566", "Alpine Greens", "http://www.whistler.com/Alpine_Greens"],
	"aspens": ["50.1165641", "-122.9437007", "Aspens", "http://www.whistler.com/Aspens"],
	"blackcomb-greens": ["50.1207338", "-122.9381104", "Blackcomb Greens", "http://www.whistler.com/Blackcomb_Greens"],
	"blackcomb-lodge": ["50.116168", "-122.959423", "Blackcomb Lodge", "http://www.whistler.com/Blackcomb_Lodge"],
	"carleton-lodge": ["50.1141272", "-122.9538627", "Carleton Lodge", "http://www.whistler.com/Carleton_Lodge"],
	"cascade-lodge": ["50.1169628", "-122.957898", "Cascade Lodge", "http://www.whistler.com/Cascade_Lodge"],
	"cedar-creek": ["50.1168911", "-122.9408162", "Cedar Creek", "http://www.whistler.com/Cedar_Creek"],
	"cedar-hollow": ["50.111634", "-122.949908", "Cedar Hollow", "http://www.whistler.com/Cedar_Hollow"],
	"cedar-ridge": ["50.11168223522512", "-122.94993870892334", "Cedar Ridge", "http://www.whistler.com/Cedar_Ridge"],
	"chalet-nicklaus": ["50.1417643", "-122.9515524", "Chalet Nicklaus", "http://www.whistler.com/Chalet_nicklaus"],
	"crystal-lodge": ["50.1139597", "-122.9569225", "Crystal Lodge", "http://www.whistler.com/Crystal_Lodge"],
	"crystal-ridge": ["50.1168911", "-122.9408162", "Crystal Ridge", "http://www.whistler.com/Crystal_Ridge"],
	"delta-suites": ["50.1171173871255", "-122.95648329891968", "Delta Whistler Village Suites", "http://www.whistler.com/Delta_Whistler_Village_Suites"],
	"edgewater": ["50.0958383", "-122.9894617", "Edgewater", "http://www.whistler.com/Edgewater", true],
	"englewood-greens": ["50.1424283", "-122.9531531", "Englewood Greens", "http://www.whistler.com/Englewood_Greens"],
	"executive-inn": ["50.1139906", "-122.955202", "Executive Inn", "http://www.whistler.com/Executive_Inn"],
	"fairmont": ["50.1172806", "-122.9464826", "Fairmont Chateau Whistler", "http://www.whistler.com/Fairmont_Chateau_Whistler"],
	"falcons-nest": ["50.1202099", "-122.9702692", "Falcons Nest Estate", "http://www.whistler.com/Falcons_Nest_Estate"],
	"first-tracks": ["50.0933953", "-122.9900815", "First Tracks Lodge", "http://www.whistler.com/First_Tracks_Lodge", true],
	"fitzsimmons": ["50.1144347", "-122.9557079", "Fitzsimmons", "http://www.whistler.com/Fitzsimmons"],
	"forest-creek": ["50.1223133", "-122.9338593", "Forest Creek", "http://www.whistler.com/Forest_Creek"],
	"forest-trails": ["50.1180364", "-122.9427841", "Forest Trails", "http://www.whistler.com/Forest_Trails"],
	"four-seasons": ["50.118382", "-122.946185", "Four Seasons", "http://www.whistler.com/Four_Seasons"],
	"four-season-residences": ["50.118382", "-122.946185", "Four Seasons Private Residences", "http://www.whistler.com/Four_Seasons_Private_Residences"],
	"glacier-lodge": ["50.1174223", "-122.9466928", "Glacier Lodge", "http://www.whistler.com/Glacier_Lodge"],
	"glaciers-reach": ["50.120575", "-122.9577327", "Glaciers Reach", "http://www.whistler.com/Glaciers_Reach"],
	"glen-eagles": ["50.1204332", "-122.9389561", "Glen Eagles", "http://www.whistler.com/Glen_Eagles"],
	"glen-eagles-chalet": ["50.1422735", "-122.9524988", "Glen Eagles Chalet", "http://www.whistler.com/Gleneagles_Chalet"],
	"gondola-place": ["50.0922259", "-122.993172", "Gondola Place", "http://www.whistler.com/Gondola_Place", true],
	"granite-court": ["50.1233285", "-122.9545188", "Granite Court", "http://www.whistler.com/Granite_Court"],
	"greystone-lodge": ["50.1167728", "-122.9417375", "Greystone Lodge", "http://www.whistler.com/Greystone_Lodge"],
	"hearthstone-lodge": ["50.1156262", "-122.9572199", "Hearthstone Lodge", "http://www.whistler.com/Hearthstone_Lodge"],
	"hilton": ["50.1130057", "-122.9567751", "Hilton Whistler Resort &amp; Spa", "http://www.whistler.com/Hilton"],
	"holiday-inn": ["50.1152417", "-122.9538599", "Holiday Inn", "http://www.whistler.com/Holiday_Inn"],
	"horstman-house": ["50.1216213", "-122.9364624", "Horstman House", "http://www.whistler.com/Horstman_House"],
	"ironwood": ["50.1129228", "-122.9701698", "Ironwood", "http://www.whistler.com/Ironwood"],
	"lake-placid-lodge": ["50.0942024", "-122.9904071", "Lake Placid Lodge", "http://www.whistler.com/Lake_Placid_Lodge", true],
	"lechamois": ["50.1176944", "-122.9474947", "Le Chamois", "http://www.whistler.com/Le_Chamois"],
	"legends": ["50.0953995", "-122.9894329", "Legends", "http://www.whistler.com/Legends", true],
	"listel": ["50.1139808", "-122.9573201", "Listel Hotel", "http://www.whistler.com/Listel_Whistler_Hotel"],
	"lost-lake-lodge": ["50.1220462", "-122.9350888", "Lost Lake Lodge", "http://www.whistler.com/Lost_Lake_Lodge"],
	"luxury-estate": ["50.1422735", "-122.9524988", "Luxury Estate", "http://www.whistler.com/Luxury_Estate"],
	"market-pavillion": ["50.1183208", "-122.9582295", "Market Pavillion", "http://www.whistler.com/Market_Pavilion"],
	"marketplace-lodge": ["50.1203246", "-122.9570546", "Marketplace Lodge", "http://www.whistler.com/Marketplace_Lodge"],
	"marquise": ["50.1165052", "-122.943026", "Marquise", "http://www.whistler.com/Marquise"],
	"montebello": ["50.1235005", "-122.9566074", "Montebello", "http://www.whistler.com/Montebello"],
	"mountainside-lodge": ["50.1145273", "-122.9543674", "Mountainside Lodge", "http://www.whistler.com/mountainside_lodge"],
	"mountainstar": ["50.1166586", "-122.9409515", "Mountainstar", "http://www.whistler.com/Mountainstar"],
	"nicklaus-north-condos": ["50.1420514", "-122.9507484", "Nicklaus North Clubhouse Condos", "http://www.whistler.com/Nicklaus_North_Clubhouse_Condos"],
	"nita-lake-lodge": ["50.0953008", "-122.996945", "Nita Lake Lodge", "http://www.whistler.com/Nita_Lake_lodge", true],
	"northern-lights": ["50.111159", "-122.9575633", "Northern Lights", "http://www.whistler.com/Northern_Lights"],
	"painted-cliff": ["50.1168911", "-122.9408162", "Painted Cliff", "http://www.whistler.com/Painted_Cliff"],
	"pan-mountainside": ["50.1141269", "-122.9537619", "Pan Pacific Whistler Mountainside", "http://www.whistler.com/Pan_Pacific_Whistler_Mountainside"],
	"pan-village": ["50.1160932", "-122.9535383", "Pan Pacific Whistler Village Centre", "http://www.whistler.com/Pan_Pacific_Whistler_Village_Centre"],
	"pinnacle-hotel": ["50.1171018", "-122.9576029", "Pinnacle Hotel", "http://www.whistler.com/Pinnacle_Hotel"],
	"pinnacle-ridge": ["50.1125348", "-122.9478281", "Pinnacle Ridge", "http://www.whistler.com/Pinnacle_Ridge"],
	"plaza-suites": ["50.1171018", "-122.9576029", "Plaza Suites", "http://www.whistler.com/Plaza_Suites"],
	"powderhorn": ["50.1166006", "-122.942654", "Powderhorn", "http://www.whistler.com/Powderhorn"],
	"rainbow-suites": ["50.1149845", "-122.9561192", "Rainbow Suites", "http://www.whistler.com/Rainbow_Suites"],
	"ravenscrest": ["50.1128682", "-122.9702384", "Ravenscrest", "http://www.whistler.com/Ravenscrest"],
	"st-andrews": ["50.1145323", "-122.9543454", "St Andrews House", "http://www.whistler.com/Saint_Andrews"],	
	"snowgoose": ["50.1176944", "-122.9474947", "Snowgoose", "http://www.whistler.com/Snowgoose"], 
	"stone-ridge": ["50.1174223", "-122.9466928", "Stone Ridge", "http://www.whistler.com/Stone_Ridge"],
	"stoneycreek-sunpath": ["50.1170578", "-122.9578647", "Stoney Creek Sunpath", "http://www.whistler.com/Stoney_Creek_Sunpath"], 
	"stoneycreek-lagoons": ["50.1197748", "-122.9583232", "Stoney Creek Lagoons", "http://www.whistler.com/Stoney_Creek_Lagoons"],
	"stoneycreek-northstar": ["50.1170578", "-122.9578647", "Stoney Creek Northstar", "http://www.whistler.com/Stoney_Creek_North_Star"],	
	"summit-lodge": ["50.1186158", "-122.957048", "Summit Lodge", "http://www.whistler.com/Summit_Lodge"], 
	"sundance": ["50.0924923", "-122.9929488", "Sundance", "http://www.whistler.com/Sundance", true], 
	"sundial": ["50.1141272", "-122.9538627", "Sundial Boutique Hotel", "http://www.whistler.com/Sundial"], 
	"sunshine-inn-chalet": ["50.1422735", "-122.9524988", "Sunshine Inn Chalet", "http://www.whistler.com/Sunshine_Inn_Chalet"], 
	"symphony": ["50.1205825", "-122.9577698", "Symphony", "http://www.whistler.com/Symphony"], 
	"taluswood-bluffs": ["50.093298", "-122.978631", "Taluswood Bluffs", "http://www.whistler.com/Taluswood_Bluffs"], 
	"taluswood-heights": ["50.093298", "-122.978631", "Taluswood Heights", "http://www.whistler.com/Taluswood_Heights"], 
	"taluswood-lookout": ["50.093298", "-122.978631", "Taluswood Look Out", "http://www.whistler.com/Taluswood_Look_Out", true], 
	"tantalus": ["50.1116165", "-122.9601325", "Tantalus Resort Lodge", "http://www.whistler.com/Tantalus_Resort_Lodge"],
	"telemark": ["50.1114173", "-122.9575514", "Telemark", "http://www.whistler.com/Telemark"], 
	"coast-blackcomb": ["50.1149887", "-122.9414223", "The Coast Blackcomb Suites At Whistler", "http://www.whistler.com/coast_blackcomb_suites"],
	"gables": ["50.1141234", "-122.9496734", "The Gables", "http://www.whistler.com/The_Gables"], 
	"woods": ["50.1216135", "-122.9365337", "The Woods", "http://www.whistler.com/The_Woods"],
	"town-plaza": ["50.1176207", "-122.9559129", "Town Plaza Suites", "http://www.whistler.com/Town_Plaza_Suites"], 
	"treeline": ["50.1218743", "-122.9357496", "Treeline", "http://www.whistler.com/Treeline"],
	"tyndall": ["50.1203246", "-122.9570546", "Tyndall Stone Lodge", "http://www.whistler.com/Tyndall_Stone_Lodge"], 
	"valhalla": ["50.1204636", "-122.9578374", "Valhalla", "http://www.whistler.com/Valhalla"],
	"villas-foxglove": ["50.1202784", "-122.93886", "Villas - Foxglove", "http://www.whistler.com/Villas_Foxglove"], 
	"villas-snowberry": ["50.1204332", "-122.9389561", "Villas - Snowberry", "http://www.whistler.com/Villas_Snowberry"], 
	"villas-wintergreen": ["50.1187855", "-122.9417216", "Villas - Wintergreen", "http://www.whistler.com/Villas_Wintergreen"], 
	"westin": ["50.1116121", "-122.9571703", "Westin Resort and Spa Hotel", "http://www.whistler.com/Westin"],
	"village-inn": ["50.1145311", "-122.9543509", "Whistler Village Inn and Suites", "http://www.whistler.com/Whistler_Village_Inn_And_Suites"], 
	"wildwood-lodge": ["50.1171592", "-122.9436438", "Wildwood Lodge", "http://www.whistler.com/Wildwood_Lodge"], 
	"woodrun": ["50.115544", "-122.943417", "Woodrun", "http://www.whistler.com/Woodrun"]
};

var creekside = ["edgewater", 
				 "first-tracks", 
				 "gondola-place", 
				 "gondola-village", 
				 "lake-placid-lodge", 
				 "legends", 
				 "nita-lake-lodge",
				 "sundance",
				 "taluswood-lookout"];

var poi_coords = {
	"library": ["50.11715178485647", "-122.95615741052437", "Whistler Library"]
};

// points of interest
var whistler_latlng = new google.maps.LatLng(50.116073, -122.959157), 
	whistler_base = new google.maps.LatLng(50.11298948000384, -122.95438581147003), 
	blackcomb_base = new google.maps.LatLng(50.115510985569, -122.94769638218689), 
	creekside_base = new google.maps.LatLng(50.09374489354275, -122.988873193676), 
	directionsDisplay = new google.maps.DirectionsRenderer(), 
	directionsService = new google.maps.DirectionsService(), 
	geocoder = new google.maps.Geocoder();

$(document).ready(function(){
	
	var links = "";
	$.each(coords, function(key, value){
		links += "<a href=\"./\" id=\"show-" + key + "\" class=\"show-hotel\">" + value[2] + "</a>";
	});
	
	$("#hotels").html(links);
	
	load_map(whistler_latlng, markers);

	$("a.clear-all").click(function(){
									
		reset_map();
		return false;
		
	});
	
	$("a.show-all").click(function(){
									
		show_all_hotels();
		//draw_pois();
		return false;
		
	});
	
	$("#hotel-info a.close").click(function(){
									
		show_all_hotels();
		return false;
		
	});
	
	$("a.show-hotel").click(function(){
		
		reset_tabs();
		
		var hotel_coords = find_hotel(this);
		
		clear_markers();
		
		//draw marker
		show_hotel(hotel_coords, true);
		show_hotel_info(hotel_coords);
		
		return false;
		
	});
	
	$("#toggle-poi").click(function(){
		
		var action = ($("#toggle-poi").hasClass("on")) ? "off" : "on";
		
		toggle_poi(action);
		
		return false;
		
	});
	
	$("#toggle-lifts").click(function(){
		
		var action = ($("#toggle-lifts").hasClass("on")) ? "off" : "on";
		
		toggle_lifts(action);
		
		return false;
		
	});
	
	$("#toggle-accommodation").click(function(){
		
		var action = ($("#toggle-accommodation").hasClass("on")) ? "off" : "on";
		
		if(action == "on"){
			show_all_hotels();
		} else{
			clear_markers();
		}
		
		$("#toggle-accommodation span").html(action);
		$("#toggle-accommodation").removeClass("on off").addClass(action);
		
		return false;
		
	});
	
	$("#map-submit").click(function(){
		
		get_driving_directions();
		return false;
		
	});
	
	$("#get-driving-directions input").click(function(){
		$(this).removeClass("error");
	});
	
	$("#driving-directions a.close").click(function(){
		
		show_all_hotels();
		clear_driving_directions();
		return false;
		
	});
	
	load_tabs();
	
	$("ul#tabs li a").click(function(){
		$(".toggle").hide();
		$("ul#tabs li a").removeClass("on");
		$(this).addClass("on");
		var tab = $(this).parent().attr("id").replace("-tab", "");
		
		setInterval("panorama.setVisible(true);", 500);
		
		$("#" + tab).show();
		return false;
	});

});

function load_tabs(){
	
	$("#street-view").hide();
	
}

function reset_tabs(){
	$("ul#tabs li a").removeClass("on");
	$("ul#tabs li a:first").addClass("on");
	$("#street-view").hide();
}
	
function load_map(whistler_latlng, markers) {
	
	/* display map */
	
	var myOptions = {
		zoom: 15,
		center: whistler_latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControlOptions: {
		   mapTypeIds: []
		}
	}
  
	map = new google.maps.Map(document.getElementById("map"), myOptions);
	directionsDisplay.setMap(map);
	
	/* add markers */
	if (coords) {
		for (i in coords) {
			// add marker
			var marker = show_hotel(coords[i]);
		}
	}
	
	/* load default street view */
	load_street_view(whistler_latlng);
	
	/* add pois */
	draw_pois();
	
	/* add lifts */
	draw_lifts();
	
	map.setCenter(whistler_latlng);
	
}

function show_all_hotels(){
	
	reset_map();
	
	if (coords) {
		for (i in coords) {
			
			// add marker
			var marker = show_hotel(coords[i]);
			
		}
	}
	
	map.setCenter(whistler_latlng);
	clear_hotel_info();
}

function clear_markers(){

	/* clear markers */
	if(this.markers){
		for(i in this.markers){
			this.markers[i].setMap(null);
		}
	}
	$("ul#tabs li#directions-tab").remove();

}

function reset_map(){
	
	clear_markers();
	
	map.setZoom(15);
	map.setCenter(whistler_latlng);
	
	clear_hotel_info();
	
	clear_directions();
	
	clear_driving_directions();
	
	load_street_view(whistler_latlng);
	
	$("#toggle-accommodation span").html("on");
	$("#toggle-accommodation").removeClass("off").addClass("on");
	
}

function show_hotel_info(coords){	

	$("#hotel-info h3").html(coords[2]);
	$("#hotel-info").slideDown();
	
	$("#get-driving-directions-directions_to").attr("value", coords[4]);
	
	if(coords[3]){
		$("a.view-property").html("View " + coords[2] + " property page");
		$("a.view-property").attr("href", coords[3]);
	}
	
	for(i in creekside){
		if(creekside[i] == coords[4]){
			var is_creekside = true;
		}
	}
	
	if(is_creekside === true){
		get_distances(coords, true);
	} else {
		get_distances(coords, false);
	}
	
}

function clear_hotel_info(){
	
	$("#hotel-info .info, #hotel-info .distances").html("");
	$("#hotel-info").slideUp();
	
}

function find_hotel(hotel_id){

	var hotel = $(hotel_id).attr("id").replace("show-", "");
	
	//find coords
	if(coords){
		for(i in coords){
			if(i == hotel){
				var hotel_coords = coords[i];
				hotel_coords[4] = i;
			}
		}
	}
	
	return hotel_coords;

}

function find_hotel_by_id(hotel_id){
	
	//find coords
	if(coords){
		for(i in coords){
			if(i == hotel_id){
				var hotel_coords = coords[i];
				hotel_coords[4] = i;
			}
		}
	}
	
	return hotel_coords;

}

function find_hotel_by_latlng(lat, lng){
	
	//find coords
	if(coords){
		for(i in coords){
			if((coords[i][0] == lat) && (coords[i][1] == lng)){
				var hotel= coords[i];
				hotel[4] = i;
			}
		}
	}
	
	return hotel;

}

function show_hotel(coords, showing_single) {
	
	if(showing_single === undefined){
		showing_single = null;
	}
	
	var hotel_id = find_hotel_by_latlng(coords[0], coords[1]);

	var latLng = new google.maps.LatLng(coords[0], coords[1]);
	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		id: "show-" + coords[4],
		html: coords[2],
		icon: "http://www.whistler.com/images/az/accom-icon.png"
	});
	
	map.setCenter(latLng);
	map.setZoom(15);
	clear_directions()
	clear_hotel_info();

	
	google.maps.event.addListener(marker, "click", function(){
		temp = this;
		var hotel_id = this.id.replace("show-", "");
		var hotel = find_hotel_by_id(hotel_id);
		marker_click(hotel);
	});
	
	google.maps.event.addListener(marker, "mouseover", function(){
		infowindow.setContent("<h3>" + coords[2] + "</h3>");
		infowindow.setOptions({maxWidth: 330});
		infowindow.open(map, this);
	});
	
	google.maps.event.addListener(marker, "mouseout", function(){
		infowindow.close();
	});
	
	/* display street view */
	if(showing_single != null){
		
		clear_driving_directions();
		load_street_view(latLng);
	}
	
	markers.push(marker);
	
	//reset_tabs();
	$("#map").show();
	
	$("#street-view-tab a, #map-tab a").attr("id", coords[4]);
	
	return marker;
  
}

function marker_click(hotel){
	
	clear_markers();
	
	show_hotel(hotel, true);
	show_hotel_info(hotel);
	
}

function load_street_view(latLng){
	
	var panoramaOptions = {
	  position: latLng,
	  pov: {
		heading: 0,
		pitch: 0,
		zoom: 0
	  }
	};
	
	panorama = new  google.maps.StreetViewPanorama(document.getElementById("street-view"), panoramaOptions);
	map.setStreetView(panorama);
	
}

function clear_street_view(){
	
	//$("#street-view").html("<a href='./' class='close' onclick='clear_street_view(); return false;'>Close</a>");
	//$("#street-view").hide();
	
}

function get_distances(from, is_creekside){
	
	var distance;
	var duration;
	var html = "";
	var start = new google.maps.LatLng(from[0], from[1]);
	
	if(is_creekside === true){
		
		var request = {
			origin:start, 
			destination:creekside_base,
			travelMode: google.maps.DirectionsTravelMode.WALKING
		};
		
		directionsService.route(request, function(result, status) {
													   
			if (status == google.maps.DirectionsStatus.OK) {
				
				distance = result.routes[0].legs[0].distance.text;
				duration = result.routes[0].legs[0].duration.text;
				html += "<div class='creekside'><p>Walking distance to Creekside Gondola: <strong>" + distance + "</strong> (" +  duration + ")<a href=\"./\" onclick=\"display_directions('" + from[4] + "', 'creekside'); return false;\">Show Route</a></p></div>";
				
			$(html).appendTo("#hotel-info .distances");
				
			}
			
		});
		
	} else {
	
		var whis_request = {
			origin:start, 
			destination:whistler_base,
			travelMode: google.maps.DirectionsTravelMode.WALKING
		};
		
		directionsService.route(whis_request, function(result, status) {
													   
			if (status == google.maps.DirectionsStatus.OK) {
				
				distance = result.routes[0].legs[0].distance.text;
				duration = result.routes[0].legs[0].duration.text;
				html += "<div class='whis'><p>Walking distance to Whistler mountain: <strong>" + distance + "</strong> (" +  duration + ")<a href=\"./\" onclick=\"display_directions('" + from[4] + "', 'whistler'); return false;\">Show Route</a></p></div>";
				
				var blackcomb_request = {
					origin:start, 
					destination:blackcomb_base,
					travelMode: google.maps.DirectionsTravelMode.WALKING
				};
				
				directionsService.route(blackcomb_request, function(result, status) {
					if (status == google.maps.DirectionsStatus.OK) {
						distance = result.routes[0].legs[0].distance.text;
						duration = result.routes[0].legs[0].duration.text;
						html += "<div class='black'><p>Walking distance to Blackcomb mountain: <strong>" + distance + "</strong> (" +  duration + ")<a href=\"./\" onclick=\"display_directions('" + from[4] + "', 'blackcomb'); return false;\">Show Route</a></p></div>"
						
					}
					$(html).appendTo("#hotel-info .distances");
				});
				
			}
			
		});
	
	}
	
}

function display_directions(from, to){

	var distance;
	var html;
	var hotel = find_hotel_by_id(from);
	
	var start = new google.maps.LatLng(hotel[0], hotel[1]);
	if(to == "whistler"){
		var end = whistler_base;
	} else if(to == "blackcomb"){
		var end = blackcomb_base;
	} else if(to == "creekside"){
		var end = creekside_base;
	}
	
	var request = {
		origin:start, 
		destination:end,
		travelMode: google.maps.DirectionsTravelMode.WALKING
	};
	
	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			clear_street_view();
			directionsDisplay.setDirections(result);
			directionsDisplay.setMap(map);
		}
	});

}

function clear_directions(){
	directionsDisplay.setMap(null);
}

function draw_pois(){
	
	/* draw daylots */

	var daylots;
	var daylots_path = [					  
		new google.maps.LatLng(50.11355364830507, -122.95168750920105),
		new google.maps.LatLng(50.114792043217456, -122.95284622349548),
		new google.maps.LatLng(50.116154240627964, -122.95325391926575),
		new google.maps.LatLng(50.11768838625797, -122.95350068249512),
		new google.maps.LatLng(50.12038506121388, -122.95408003964234),
		new google.maps.LatLng(50.120612070285894, -122.95221322216797),
		new google.maps.LatLng(50.11973154423885, -122.9498957935791),
		new google.maps.LatLng(50.11896794994537, -122.9503464046936),
		new google.maps.LatLng(50.11882348479003, -122.95174115338135),
		new google.maps.LatLng(50.117715904116416, -122.95165532269287),
		new google.maps.LatLng(50.116463825543754, -122.95149439015198),
		new google.maps.LatLng(50.115053478048864, -122.95165532269287)
	];
	
	daylots = new google.maps.Polygon({
		paths: daylots_path,
		strokeColor: "#fff",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#ff0000",
		fillOpacity: 0.3
	});
	daylots.setMap(map);
	
	car_parks.push(daylots);
	
	/* draw lot 6 */
	
	var lot6;
	var lot6_path = [
		new google.maps.LatLng(50.111238451910225, -122.94628017582703),
		new google.maps.LatLng(50.111916165859824, -122.94390910305786),
		new google.maps.LatLng(50.11143798290177, -122.9436086956482),
		new google.maps.LatLng(50.11078090356644, -122.94601731934357)
	];
	
	lot6 = new google.maps.Polygon({
		paths: lot6_path,
		strokeColor: "#fff",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#ff0000",
		fillOpacity: 0.35
	});
	lot6.setMap(map);
	
	car_parks.push(lot6);
	
	/* draw lot 7 */
	
	var lot7;
	var lot7_path = [
		new google.maps.LatLng(50.11059169056756, -122.94510000386047),
		new google.maps.LatLng(50.10946327752383, -122.94544332661438),
		new google.maps.LatLng(50.109026354357205, -122.94426851906586),
		new google.maps.LatLng(50.11011005410619, -122.94373744168091)
	];
	
	lot7 = new google.maps.Polygon({
		paths: lot7_path,
		strokeColor: "#fff",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#ff0000",
		fillOpacity: 0.35
	});
	lot7.setMap(map);
	
	car_parks.push(lot7);
	
	/* draw lot 8 */
	
	var lot8;
	var lot8_path = [
		new google.maps.LatLng(50.10792886834968, -122.94293814339447),
		new google.maps.LatLng(50.108892180301325, -122.9436462465744),
		new google.maps.LatLng(50.109408232305, -122.94296496548462),
		new google.maps.LatLng(50.10868231756265, -122.94210665859985)
	];
	
	lot8 = new google.maps.Polygon({
		paths: lot8_path,
		strokeColor: "#fff",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#ff0000",
		fillOpacity: 0.35
	});
	lot8.setMap(map);
	
	car_parks.push(lot8);
	
	//add custom markers for all parking lots
	/*var image = './images/parking.png';
	var daylot_pin = new google.maps.LatLng(50.118204343472385, -122.95283549465942);
	var daylot_marker = new google.maps.Marker({
		position: daylot_pin,
		map: map,
		icon: image
	});*/
	
	/* plot poi's */
	/*if (poi_coords) {
		for (i in poi_coords) {
			
			// add marker
			var marker = show_hotel(poi_coords[i]);
			
		}
	}
	
	var library_coords = new google.maps.LatLng();
	var library_marker = new google.maps.Marker({
		position: library_coords,
		map: map
	});*/

}

function draw_lifts(){
	
	var whistler_gondola = [
		new google.maps.LatLng(50.11291339412093, -122.95452214282227),
		new google.maps.LatLng(50.09956059654682, -122.95139736931992),
		new google.maps.LatLng(50.06960734677332, -122.94696099560929)
	];
	lift_coords.whistlergondola = whistler_gondola;
	lift_coords.whistlergondola.name = "Whistler Gondola";
	
	var fitz = [
		new google.maps.LatLng(50.112851472706616, -122.95330710213852),
		new google.maps.LatLng(50.09731698884718, -122.9532668690033)
	];
	lift_coords.fitz = fitz;
	lift_coords.fitz.name = "Fitsimmons Express";
	
	var creekside_gondola = [
		new google.maps.LatLng(50.09374489354275, -122.988873193676),
		new google.maps.LatLng(50.08574973076864, -122.964379260952)
	];
	lift_coords.creekside = creekside_gondola;
	lift_coords.creekside.name = "Creekside Gondola";
	
	var garbanzo = [
		new google.maps.LatLng(50.097358283189536, -122.95226104062272),
		new google.maps.LatLng(50.07895468704693, -122.95102990668488)
	];
	lift_coords.garbanzo = garbanzo;
	lift_coords.garbanzo.name = "Garbanzo Express";
	
	var emerald = [
		new google.maps.LatLng(50.084129368972924, -122.94163681071473),
		new google.maps.LatLng(50.068406520447034, -122.94541201990319)
	];
	lift_coords.emerald = emerald;
	lift_coords.emerald.name = "Emerald Express";
	
	var red = [
		new google.maps.LatLng(50.08569810032958, -122.96386159461213),
		new google.maps.LatLng(50.06686304861643, -122.94726408522797)
	];
	lift_coords.red = red;
	lift_coords.red.name = "Big Red Express";
	
	var franz = [
		new google.maps.LatLng(50.07491042155793, -122.95719161134434),
		new google.maps.LatLng(50.06668743573515, -122.94745586317254)
	];
	lift_coords.franz = franz;
	lift_coords.franz.name = "Franz's Chair";
	
	var peak = [
		new google.maps.LatLng(50.0668501359265, -122.95203975837899),
		new google.maps.LatLng(50.059251706333036, -122.95740283530426)
	];
	lift_coords.peak = peak;
	lift_coords.peak.name = "Peak Chair";
	
	var tbars = [
		new google.maps.LatLng(50.066598768202624, -122.95080326002312),
		new google.maps.LatLng(50.06145490991699, -122.94517196219635)
	];
	lift_coords.tbars = tbars;
	lift_coords.tbars.name = "T-bars";
	
	var harmony = [
		new google.maps.LatLng(50.06746821945342, -122.93125532072258),
		new google.maps.LatLng(50.05647151334273, -122.94678061705304)
	];
	lift_coords.harmony = harmony;
	lift_coords.harmony.name = "Harmony Express";
	
	var symphony = [
		new google.maps.LatLng(50.05853450256356, -122.91819162171555),
		new google.maps.LatLng(50.046091506510486, -122.93963051837159)
	];
	lift_coords.symphony = symphony;
	lift_coords.symphony.name = "Symphony Express";
	
	var olympic = [
		new google.maps.LatLng(50.09961565308364, -122.94942594569397),
		new google.maps.LatLng(50.09310391859072, -122.94638297956658)
	];
	lift_coords.olympic = olympic;
	lift_coords.olympic.name = "Olympic Chair";
	
	var p2p = [
		new google.maps.LatLng(50.069337055871216, -122.9462421635933),
		new google.maps.LatLng(50.095764984008866, -122.9003334740944)
	];
	lift_coords.p2p = p2p;
	lift_coords.p2p.name = "Peak to Peak";
	
	var wizard = [
		new google.maps.LatLng(50.115471022578724, -122.94753632944298),
		new google.maps.LatLng(50.105991460276044, -122.92056940000725)
	];
	lift_coords.wizard = wizard;
	lift_coords.wizard.name = "Wizard Express";
	
	var excalibur = [
		new google.maps.LatLng(50.11339672240865, -122.95329100888443),
		new google.maps.LatLng(50.11109011894554, -122.9437584380455),
		new google.maps.LatLng(50.11122600694236, -122.92363650601578)
	];
	lift_coords.excalibur = excalibur;
	lift_coords.excalibur.name = "Excalibur Gondola";
	
	var magic = [
		new google.maps.LatLng(50.115225929603476, -122.94777906935883),
		new google.maps.LatLng(50.11149520164574, -122.94158048432541)
	];
	lift_coords.magic = magic;
	lift_coords.magic.name = "Magic Chair";
	
	var solar = [
		new google.maps.LatLng(50.10628390813925, -122.92039103310776),
		new google.maps.LatLng(50.09555162242857, -122.90140233438683)
	];
	lift_coords.solar = solar;
	lift_coords.solar.name = "Solar Coaster Express";
	
	var excel = [
		new google.maps.LatLng(50.11169559160836, -122.92285061877442),
		new google.maps.LatLng(50.10342816435669, -122.90500856440735)
	];
	lift_coords.excel = excel;
	lift_coords.excel.name = "Excelerator Express";
	
	var catskinner = [
		new google.maps.LatLng(50.10638024351494, -122.90079213183594),
		new google.maps.LatLng(50.0943936030864, -122.89778001111222)
	];
	lift_coords.catskinner = catskinner;
	lift_coords.catskinner.name = "Catskinner Express";
	
	var glacier = [
		new google.maps.LatLng(50.10640088678452, -122.8997407059021),
		new google.maps.LatLng(50.09584757533321, -122.88121737044526)
	];
	lift_coords.glacier = glacier;
	lift_coords.glacier.name = "Glacier Express";
	
	var jersey = [
		new google.maps.LatLng(50.09987200925021, -122.91534579795075),
		new google.maps.LatLng(50.09526341072091, -122.90185965102387)
	];
	lift_coords.jersey = jersey;
	lift_coords.jersey.name = "Jersey Cream Express";
	
	var crystal = [
		new google.maps.LatLng(50.109547161100515, -122.90546990435791),
		new google.maps.LatLng(50.10759130028037, -122.89198375743103)
	];
	lift_coords.crystal = crystal;
	lift_coords.crystal.name = "Crystal Chair";
	
	var showcase = [
		new google.maps.LatLng(50.094600087040135, -122.88147486251069),
		new google.maps.LatLng(50.091275587224736, -122.87657714884949)
	];
	lift_coords.showcase = showcase;
	lift_coords.showcase.name = "Showcase T-bar";
	
	var horstman = [
		new google.maps.LatLng(50.097258488467894, -122.88447357218934),
		new google.maps.LatLng(50.091531988016854, -122.8835294346161)
	];
	lift_coords.horstman = horstman;
	lift_coords.horstman.name = "Horstman T-bar";
	
	var seventh = [
		new google.maps.LatLng(50.07864658093193, -122.89555109542084),
		new google.maps.LatLng(50.091602541014296, -122.88408733409119)
	];
	lift_coords.seventh = seventh;
	lift_coords.seventh.name = "7th Heaven";
	
	for(i in lift_coords){
		
		var lift = new google.maps.Polyline({
			path: lift_coords[i],
			strokeColor: "#0000FF",
			strokeOpacity: 1.0,
			strokeWeight: 5,
			lift_name: lift_coords[i].name
		});
		lifts.push(lift);
		lift.setMap(map);
		
		google.maps.event.addListener(lift, "mouseover", function(event) {
			$("#lift_name").html(this.lift_name).show();
		});
		
		google.maps.event.addListener(lift, "mouseout", function(event) {
			$("#lift_name").html("").hide();
		});
		
	}
	
	$(document).mousemove(function(e){
		var x = e.pageX - 350;
		var y = e.pageY - 250;
		$("#lift_name").css({top: y + "px", left: x + "px"});
	});
	
	//
	
}

function toggle_poi(action){
	
	var temp = (action == "on") ? map : null;
	
	for(i in car_parks){
		car_parks[i].setMap(temp);
	}
	
	$("#toggle-poi span").html(action);
	$("#toggle-poi").removeClass("on off").addClass(action);
	
	//daylots.setMap(null);
	
}

function toggle_lifts(action){
	
	var temp = (action == "on") ? map : null;
	
	for(i in lifts){
		lifts[i].setMap(temp);
	}
	
	$("#toggle-lifts span").html(action);
	$("#toggle-lifts").removeClass("on off").addClass(action);
	
	//daylots.setMap(null);
	
}

function get_driving_directions(){
	
	var address = $("#get-driving-directions-address").val();
	var hotel_id = $("#get-driving-directions-directions_to").val();
	
	var hotel = find_hotel_by_id(hotel_id);
	
	var distance;
	var start_address;
	var end_address;
	
	var to = new google.maps.LatLng(hotel[0], hotel[1]);
	
	var geo = geocoder.geocode( { 'address': address}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK){
			
			clear_street_view();
			
			from = results[0].geometry.location;
			
			var request = {
				origin:from, 
				destination:to,
				travelMode: google.maps.DirectionsTravelMode.DRIVING
			};
			
			directionsService.route(request, function(result, status) {
				if (status == google.maps.DirectionsStatus.OK) {
					
					directionsDisplay.setDirections(result);
					directionsDisplay.setMap(map);
					
					start_address = result.routes[0].legs[0].start_address;
					end_address = result.routes[0].legs[0].end_address;
					distance = result.routes[0].legs[0].distance.text;
					
					var trip_overview = "<strong>Total distance: " +  distance + "</strong>";
					$("#driving-directions .trip-overview").html(trip_overview);
					
					var steps = "";
					
					for(i in result.routes[0].legs[0].steps){
						
						var instruction = result.routes[0].legs[0].steps[i].instructions;
						var step_distance = result.routes[0].legs[0].steps[i].distance.text;
						steps += "<li>" + instruction + " (<strong>" + step_distance + "</strong>)</li>";
						
					}
					steps += "";
					
					$("#driving-directions ul.instructions").html(steps);
					$("#driving-directions").slideDown();
					
				} else {
					$("#get-driving-directions input.text").addClass("error");
				}
			});
			
		}
	});
	
}

function clear_driving_directions(){

	$("#driving-directions").hide();
}