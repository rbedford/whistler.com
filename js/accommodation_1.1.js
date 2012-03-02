var boolReview = false;
var geocode;
var map;
var infowindow = new google.maps.InfoWindow({});
var markers = [];
var pois = [
	["Whistler Village Gondola", "50.11298948000384", "-122.95438581147003", "<h3>Whistler Village Gondola</h3><p><img src='http://www.whistler.com/images/az/whistler.jpg' alt='Whistler Village Gondola' width='145' height='95' />An 8-10 passenger gondola takes you to the Roundhouse Lodge on Whistler Mountain.  The ride time is approximately 25 minutes.</p>"],
	["Wizard Express - Blackcomb", "50.115510985569", "-122.94769638218689", "<h3>Wizard Express - Blackcomb</h3><p><img src='http://www.whistler.com/images/az/wizard.jpg' alt='Wizard Express - Blackcomb' width='145' height='95' />A 4 passenger hi-speed chair-lift deposits you at mid station on Blackcomb Mountain. </p>"],
	["Blackcomb Excalibur Gondola", "50.11339672240865", "-122.95329100888443", "<h3>Excalibur Gondola - Blackcomb</h3><p><img src='http://www.whistler.com/images/az/blackcomb.jpg' alt='Blackcomb Excalibur Gondola' width='145' height='95' />An 8 passenger gondola makes a stop at Base2 before continuing on to join the Excelerator chair.</p>"],
	["Creekside Gondola", "50.09374489354275", "-122.988873193676", "<h3>Creekside Gondola</h3><p><img src='http://www.whistler.com/images/az/creekside.jpg' alt='Creekside Gondola' width='145' height='95' />A 6 passenger gondola takes you to Raven's Nest on Whistler Mountain.</p>"]
];

$("document").ready(function(){
	
	/* tabs */
	tabs();
	
	/* reviews */
	if ($("#ta") != null){
		if ($("#ta").val() != "") {
			$("#tab-reviews").attr("style", "inline");
		}
	}
	
	/* photos */
	if ($("#photo") != null){
		if (($("#photo").val() != "") && ($("#photo").val() != "0")){
			var i = $("#photo").val();
			$("#tab-photos").attr("style", "inline");
			$("#gallery a.gallery").each(function(index, value){
				if(index == i){
					return false;
				} else {
					$(this).show();
				}
			});
		}
	}
	
	show_map();
	
});

function tabs(){

	if((window.location.hash != "") && $(window.location.hash).is("div")){
		var default_tab = $(window.location.hash);
		var selected_tab = $("#tab-" + window.location.hash.substring(1));
	} else {
		/* no specific tab requested, load the first */
		if($("ul#tabs li:first a").css("display") != "none"){
			var selected_tab = $("ul#tabs li:first a");
		} else {
			var selected_tab = $("ul#tabs li:nth-child(2) a");
		}
		
		var id = "#" + $(selected_tab).attr("id").replace("tab-", "");
		var default_tab = $(id);
	}
	
	var reset_tab = function (){
	  $(".toggle").hide();
	  $("#tabs li a").attr("class", "");
	};
	
	$(".toggle").hide();
	default_tab.show();
	selected_tab.addClass("on");
	
	$("#chapters").prev().attr("id", "tabs");
	
	$("#tabs li a").bind('click', function () {
		reset_tab();
		var e = $(this).attr("href");
		$(this).attr("class", "on");
		$(e).show();
		
		if (e == "#map") {
			 show_map();
		}
		
		if (e == "#reviews") {
			if (!boolReview) {
				var obj = $('#hidTA');
				obj.val($('#ta').val());
				$("#btnReview").click();
				
				boolReview = true;
			}
		}
		
		return false;
	});
}

function show_map() {
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(50.11298948000384, -122.95438581147003);
	var myOptions = { zoom: 14, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP };
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	code_address();
}

function code_address() {
	
	var address = $("#address").val();
	
	geocoder.geocode({ 'address': address }, function (results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var name = $("h1:first").text();
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location,
				title: name,
				icon: "http://www.whistler.com/images/az/accom-icon.png",
				animation: google.maps.Animation.DROP
			});
			
			var marker_html = "<div class='infowindow'><h3>" + name + "</h3>";
			marker_html += "<p>";
			marker_html += "<img src='" + $("#p1 img").attr("src") + "' alt='" + name + "' width='60' height='60' />";
			marker_html += address;
			marker_html += "</p>";
			marker_html += "</div>";
			
			google.maps.event.addListener(marker, "click", function(){
				infowindow.setContent(marker_html);
				infowindow.setOptions({maxWidth: 330});
				infowindow.open(map, this);
			});
			
			infowindow.setContent(marker_html);
			infowindow.setOptions({maxWidth: 330});
			infowindow.open(map, marker);
		}
	});
	plot_pois();
}

function plot_pois(){
	
	/* add pois */
	for(i in pois){
		var latlng = new google.maps.LatLng(pois[i][1], pois[i][2]);
		var marker = new google.maps.Marker({
			map: map,
			position: latlng,
			title: pois[i][0],
			html: "<div class='infowindow'>" + pois[i][3] + "</div>",
			icon: "http://www.whistler.com/images/az/lift-icon.png",
			animation: google.maps.Animation.DROP
		});
		markers.push(marker);
	}
	
	/* add listeners */
	
	google.maps.event.addListener(map, "click", function(){
		infowindow.close();
	});
	
	for(i in markers){
		google.maps.event.addListener(markers[i], "click", function(){
			infowindow.setContent(this.html);
			infowindow.setOptions({maxWidth: 330});
			infowindow.open(map, this);
		});
	}
	
}

function showReview(i) {
	$("#sa_" + i).css("display", "none");
	$("#sb_" + i).css("display", "inline");
}

function hideReview(i) {
	$("#sa_" + i).css("display", "inline");
	$("#sb_" + i).css("display", "none");
}

function showMReview(i) {
	$("#ma_" + i).css("display", "none");
	$("#mb_" + i).css("display", "inline");
}

function hideMReview(i) {
	$("#ma_" + i).css("display", "inline");
	$("#mb_" + i).css("display", "none");
}