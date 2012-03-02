var map, 
	whistler = new google.maps.LatLng(50.1183845229665, -122.96276188891602), 
	hotels = [], 
	markers = [], 
	geocoder = new google.maps.Geocoder(), 
	infowindow;
$(document).ready(function() {
	
	var options = {
		zoom: 14, 
		center: whistler, 
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map"), options);
	
	$.ajax({
		//url: "/js/hotels.json", 
		url: "/json/accommodation/index.aspx?type=1", 
		dataType: "json", 
		success: function(json) {
			
			var ui_html = "<ul>";
			for(i=0;i<json.length;i++) {
				var hotel = json[i];
				ui_html += "<li><a href='./' id='hotel-link-" + hotel.ID + "' onclick='load_hotel(" +  hotel.ID + "); return false;'>" + hotel.Name + "</a></li>";
				hotels.push(hotel);
			}
			ui_html += "</ul>";
			
			$(ui_html).appendTo("#hotel-list");
			
		}, 
		error: function() {
			
		}
	});
	
	$("#tabs li a").click(function() {
		google.maps.event.trigger(map, 'resize');
		map.setZoom(map.getZoom());
		load_hotel(1);
	});
	
});

function load_hotel(id) {
	
	var hotel = find_hotel_by_id(id);
	$(".hotel-list a").removeClass("active");
	$(".hotel-list a#hotel-link-" + hotel.ID).addClass("active");
	
	geocoder.geocode({ address: hotel.Address }, function(results, status) {
		if(status == google.maps.GeocoderStatus.OK) {
			
			clear_markers();
			
			var latlng = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
			
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				html: "Marker", 
				title: hotel.Name, 
				icon: "http://www.whistler.com/images/az/accom-icon.png"
			});
			markers.push(marker);
			
			var img_src = "http://www.whistler.com/template_images/ratings/" + (hotel.Peak1 + 3) + ".gif";			
			infowindow = new google.maps.InfoWindow({
				content: "<h3>" + hotel.Name + "</h3><img src='" + img_src + "' alt='" + hotel.Name + "' title='" + hotel.Name + "' />"
			});
			infowindow.open(map, marker);
			
			map.setCenter(latlng);
			
		}
	});
	
}

function find_hotel_by_id(id) {
	for(i=0;i<hotels.length;i++) {
		if(hotels[i].ID == id) {
			return hotels[i];
		}
	}
	return false;
}

function clear_markers() {
	for(i=0;i<markers.length;i++) {
		markers[i].setMap(null);
	}
}