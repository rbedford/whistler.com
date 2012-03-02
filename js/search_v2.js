$(document).ready(function(){
	$("#cart_link").click(function() {
		var category = "Cart", 
			action = "View Cart Header", 
			label = "click";
		_gaq.push(['_trackEvent', category, action, label]);
	});
});

var path = window.location.pathname;
/**

	This function searches the Inntopia DB for accommodation
	
	@param {String} widget_id This is the ID value for the widget being used, Required.
	@param {String} type_id This will filter results by accommodation type (hotels/condos/homes). Optional.
	@param {Boolean} sort_code This sort code will sort results by price (if set true the sortcode=p; if set false then nothing added).  Optional.
	@param {Integer} sales_id Sales_id to query by. Optional.
	@param {Integer} group_package_id If passed, this will only query group sales for the given package_id. Optional.
	@param {Integer} group_package_id If passed, this will only query group sales for the given package_id. Optional.
	
	@example search_accommodation("hotel-search", false, true);
	
	@return false
	
*/
function search_accommodation(widget_id, type_id, sort_code, sales_id, group_package_id) {
	
	widget_id = "#" + widget_id + " ";
	
	var arrival = $(widget_id + ".arrival").val(), 
		departure = $(widget_id + ".departure").val(), 
		adults = $(widget_id + ".adults").val(), 
		nights = $(widget_id + ".nights").val(), 
		a = new Date(arrival), 
		children = $(widget_id + ".children").val(), 
		peak_rating = parseInt($(widget_id + ".peak-rating").val()), 
		features = "", 
		url;
	
	a.setDate(a.getDate() + parseInt(nights));
	var mm1 = a.getMonth() + 1, 
		dd1 = a.getDate(), 
		yy1 = a.getFullYear(), 
		dep = mm1 + "/" + dd1 + "/" + yy1, 
		supplier = $('#supplier').val(), 
		location = $('#location').val();
	
	if($(widget_id + ".hname").val()) var hname = $(widget_id + ".hname").val();
	if(adults == undefined) { adults = 1; }
	
	var params = [
		1321967,
		[
			["arrivaldate", arrival], 
			["departuredate", departure], 
			["adultcount", adults]
		]
	];
	
	if(sales_id) params[0] = sales_id;
	
	if(group_package_id) params[1].push(["packageid", group_package_id]);
	
	if((supplier != "") && (supplier != undefined))  params[1].push(["supplierid", supplier]);
	if((location != "") && (location != undefined))  params[1].push(["locationid", location]);
	if(children > 0) {
		params[1].push(["childcount", children], ["childagearray", create_child_array(widget_id, children)]);
	} else {
		params[1].push(["childcount", 0]);
	}
	
	/* Filter by Peak Ratings */
	if(!isNaN(peak_rating)) {
		switch(peak_rating) {
			case 9:
				features = "P,506,1,9,P,506,1,10,";
				break;
			case 7:
				features = "P,506,1,8,";
				break;
			case 5:
				features = "P,506,1,6,P,506,1,7,";
				break;
		}
	}
	
	if(type_id == undefined) {
		type_id = $(widget_id + ".property_type").val();
	}
	
	var label = "All";
	var type = "";
	switch(type_id) {
		case "hotels":
			type = "P,500,1,1,";
			label = "Hotels";
			break;
		case "condos":
			type = "P,500,5,1,";
			label = "Condo Lodges";
			break;
		case "townhomes":
			type = "P,500,8,1,";
			label = "Condo / Townhomes";
			break;
		case "homes":
			type = "P,500,7,1,";
			label = "Homes";
			break;
	}
	features = features + type;
	params[1].push(["features", features]);
	
	if(sort_code == true) params[1].push(["sortcode", "p"]);
	
if(group_package_id) {
	url = build_url(params, "package");
}
else
{
	url = build_url(params);
}
	
	if($(widget_id).attr("id") == "widget") {
		var action = "search main accomm";
	} else {
		var action = "search accomm";
	}
	
	_gaq.push(['_trackEvent', action, path, label], ['_link', url]);
}

/**
	Used to search the Inntopia DB for activities.
	
	@param	{String}	parent_id		The ID attribute of the widget being submitted. Required
	@param	{String}	super_cat_id	The Inntopia category ID to be searched. Required.
	
	@example search_category("booking_rental", 6);
	
	@return false
	
*/
function search_category(parent_id, super_cat_id, is_booking_widget) {
	
	parent_id = "#" + parent_id + " ";
	
    var arrival = $(parent_id + '.arrival').val(), 
		departure = $(parent_id + '.departure').val(), 
		cat_id = $(parent_id + '.cat_id').val(), 
		code = $(parent_id + '.cat_id option:selected').text(), 
		url;
		
	var params = [
		1321967,
		[
			["arrivaldate", arrival], 
			["departuredate", departure]
			
		]
	];
	if(cat_id != "-1") params[1].push(["productcategoryid", cat_id]);
	var title = $(parent_id + "h3").text().toLowerCase().replace(" search", ""), 
		action = "";
	
	if(is_booking_widget) title = $("#widget h3").text().toLowerCase().replace(" search", "");
	
	switch($.trim(title)) {
		case "transfers":
			action = "transfer";
			break;
		case "activities":
			action = "activity";
			break;
		case "activity":
			action = "activity";
			break;
		case "rentals":
			action = "rental";
			break;
		case "spa":
			action = "spa";
			break;
	}
	
	url = build_url(params,action);
	
	if($(parent_id).hasClass("booking")) {
		action = "search main " + action;
		_gaq.push(['_trackEvent', action, path, code], ['_link', url]);
	} else {
		action = "search " + action;
		_gaq.push(['_trackEvent', action, path, code], ['_link', url]);
	}
	
}

/**
	Used to search the Inntopia DB for activities.
	
	@param	{String}	parent_id		The ID attribute of the widget being submitted. Required
	@param	{String}	super_cat_id	The Inntopia category ID to be searched. Required.
	
	@example search_category("booking_rental", 6);
	
	@return false
	
*/
function search_supplier(parent_id, super_cat_id, cat_id) {
	
	parent_id = "#" + parent_id + " ";
	
    var arrival = $(parent_id + '.arrival').val(), 
		departure = $(parent_id + '.departure').val(), 
		supplier_id = $(parent_id + '.supplier_id').val(), 
		code = $(parent_id + '.cat_id option:selected').text(), 
		url;
		
	var params = [
		1321967,
		[
			["arrivaldate", arrival], 
			["departuredate", departure], 
			["productsupercategoryid", super_cat_id]
		]
	];
	if(supplier_id != "0") { params[1].push(["supplierid", supplier_id]); }
	if(cat_id != "-1") params[1].push(["productcategoryid", cat_id]);
	var title = $(parent_id + "h3").text().toLowerCase().replace(" search", "");
	
	url = build_url(params, "golf");
	
	action = "search " + title;
	_gaq.push(['_trackEvent', action, path, code], ['_link', url]);
	
}

function build_url(params, action) {
	
	var base_url="";
	
	if(!action) {
		base_url = "http://www.whistler.com/cart/lodging-search/index.aspx";
	} else if (action=="transfer") {
		base_url = "http://www.whistler.com/cart/transport-search/index.aspx";
	} else if (action=="activity") {
		base_url = "http://www.whistler.com/cart/activity-search/index.aspx";
	} else if (action=="rental") {
		base_url = "http://www.whistler.com/cart/rental-search/index.aspx";
	} else if (action=="package") {
		base_url = "http://www.whistler.com/cart/package-search/index.aspx";
	} else if (action=="golf") {
		base_url = "http://www.whistler.com/cart/golf-search/index.aspx";
	} else if (action=="spa") {
		base_url = "http://www.whistler.com/cart/spa-search/index.aspx";
	} else if (action=="product") {
		base_url = "http://www.whistler.com/cart/product-search/index.aspx";
	}
	
	url = base_url + "?salesid=" + params[0] + "&";
	
	if(params[1]) {
		for(a=0;a<params[1].length;a++) {
			url = url + params[1][a][0] + "=" + params[1][a][1] + "&";
		}
	}
	return url;
}
/**
	
	Used to search Inntopia DB for available flights
	
	@param	{String}	The ID sttribute of widget being submitted. Required.
	
	@example search_flights("booking_airport");
	
	@return false
	
*/
function search_flights(parent_id) {
	
	parent_id = "#" + parent_id + " ";
	
	if ($(parent_id + '.hidAirport').val() == "") {
		alert('Departure Airport invalid - select airport from autocomplete list.');
		if ($(parent_id).hasClass("booking")) { widget_loading(); }
	} else {
        var airname = $(parent_id + '.departure-airport').val(), 
			arrival = $(parent_id + '.arrival').val(), 
			departure = $(parent_id + '.departure').val(), 
			departure_airport = $(parent_id + '.hidAirport').val(), 
			arrival_airport = $(parent_id + '.arrival-airport').val(), 
			adults = $(parent_id + '.adults').val(), 
			child = $(parent_id + '.children').val(), 
			url;
			
			var blackout_dates = [Date.today().toString("MM/dd/yyyy")];
				blackout_dates.push(Date.today().add(1).days().toString("MM/dd/yyyy"));
				blackout_dates.push(Date.today().add(2).days().toString("MM/dd/yyyy"));
				blackout_dates.push(Date.today().add(3).days().toString("MM/dd/yyyy"));
				blackout_dates.push(Date.today().add(4).days().toString("MM/dd/yyyy"));
				
		if(blackout_dates.inArray(arrival)) {
			alert("Please call to book airfare departing 4 or fewer days in advance.");
			if ($(parent_id).hasClass("booking")) { widget_loading(); }
		} else {
			
			var params = [
				1321967,
				[
					["language", "EN"], 
					["search", 1], 
					["private", 1], 
					["published", 1], 
					["startdt", arrival], 
					["enddt", departure], 
					["startpt", departure_airport], 
					["endpt", arrival_airport], 
					["numseats", adults], 
					["numchildseats", child]
				]
			];
			
			//if ($(parent_id).hasClass("booking")) { widget_loading(); }
			
			url = build_url_air(params, "http://inntopia.travel/aspnet/09/air_availability.aspx")
			
			var action = "search flight";
			if ($(parent_id).hasClass("booking")) action = "search main flight";		
			_gaq.push(['_trackEvent', action, path, airname], ['_link', url]);

		}
		
    }

}

/**
	This function searches Inntopia for products.
	
	@param {String} parent 			The ID attribute of the widget. Required.
	@param {String} supplier_id 	The supplier_id to be passed to inntopia. Required.
	@param {String} super_cat_id 	The super category ID to search Inntopia for. Required.
	
	@example search_product("inline-widget", 1768044, 7);
	
	@return false
*/
function search_product(parent_id, supplier_id, super_cat_id) {
	
	var widget = $("#"+parent_id), 
		arrival_date = widget.find(".arrival").val(), 
		departure_date = arrival_date, 
		product_id = widget.find(".product_id").val();
		
	var params = [
		1321967, 
		[
			["supplierid", supplier_id], 
			["productsupercategoryid", super_cat_id]
		]
	];
	if(arrival_date) { params[1].push(["arrivaldate", arrival_date]); }
	if(departure_date) { params[1].push(["departuredate", departure_date]); }
	if(product_id) { params[1].push(["productid", product_id]); }
	
	url = build_url(params, "product");
}

/**
	This function searches Inntopia for packages.
	
	@param {String} parent_id	The ID attribute of the widget. Required.
	
	@example search_package("inline-widget");
	
	@return false
*/
function search_package(parent_id) {
	var widget = $("#" + parent_id);
	var package_id = widget.find(".package_id").val(), 
		sales_id = widget.find(".sales_id").val();
	
	if(sales_id == undefined) { sales_id = 1321967; }
	
	if(package_id == "N/A") {
		search_accommodation(parent_id);
	} else {
		search_accommodation(parent_id, null, false, sales_id, package_id);
	}
}

/**
	This function is fired everytime a date is selected in a date picker.
	
	@param {String} parent The ID attribute of the widget. Required.
	
	@example calculate_num_days("suite-search");
	
	@return false
*/
function calculate_num_days(parent, booking_widget) {
	
	var parent_id;
	(!parent) ? parent_id = "#" + booking_widget + " " : parent_id = "#" + parent + " ";
	
	var start_date = new Date(), 
		end_date = new Date(), 
		ms_per_day = (24 * 60 * 60 * 1000);
	
	start_date.setTime(Date.parse($(parent_id + ".arrival").val()));
	end_date.setTime(Date.parse($(parent_id + ".departure").val()));
	
	var start_stamp = parseInt(start_date.setTime(Date.parse($(parent_id + ".arrival").val()))), 
		now = parseInt(new Date().getTime()), 
		arrival_diff = (start_stamp - now);
		
	// calculate total nights
	var nights = Math.round(Math.floor((end_date - start_date) / ms_per_day));
	
	if (nights < 1) {
		calculate_departure_date(parent_id);
	} else if (arrival_diff < 0) {
		var today = new Date().toString("MM/dd/yyyy");
		$(parent_id + ".arrival").val(today);
	}
	
}

/**
	This function is called when a datepicker is changed, and it calculates the departure 
	date using the given arrival date.
	
	@param {String} parent_id The ID attribute of the widget. Required.
	
	@example calculate_departure_date("suite-search");
	
	@return false
*/
function calculate_departure_date(parent_id) {
	
	if (!parent_id) parent_id = ".booking:first ";
	if(parent_id.charAt(0) != "#") parent_id = "#" + parent_id + " ";
	
	var ms_per_day = (24 * 60 * 60 * 1000), 
		start_date = new Date(), 
		end_date = new Date();
	
	start_date.setTime(Date.parse($(parent_id + ".arrival").val()));
	
	end_date = Date.parse($(parent_id + ".arrival").val()).add({ days: 1 });
	
	var end_day = end_date.getDate(), 
		end_month = end_date.getMonth(), 
		end_year = end_date.getYear();
	
	if ((end_year < 200) && (end_year > 100)) end_year = end_year + 1900;
	if (end_year < 100) end_year = end_year + 2000;
	if (end_month == 12) {
		end_month = 1;
	} else {
		end_month = (end_month + 1);
	}
	if (end_day < 10) end_day = "0" + Number(end_day);
	if (end_month < 10) end_month = "0" + Number(end_month);
	if (end_month < 10) end_month = "0" + Number(end_month);
	if ($(parent_id + ".arrival").val() != "") {
		$(parent_id + ".departure").val(end_month + "/" + end_day + "/" + end_year);
	}
	
}

/**
	This is called when a "Kids" dropdown is changed. It shows the correct number of dropdowns for 
	children.
	
	@param	{Integer}	child_count	The number of children submitted. Required.
	@param	{String}	parent_id	ID attributre of the widget we are working with. Optional.
	@param	{Boolean}	is_widget	Whether we are submitting a widget or not. Optional.
	
	@example show_child_ages(5, "suite-search", true);
	
	@return false
	
*/
function show_child_ages(child_count, parent_id, is_widget) {
	var parent_id = "#" + parent_id + " .childAll";
	hide_children(parent_id);
	if (child_count > 0) {
		$(parent_id).show();
		for (var i = 1; i <= child_count; ++i) {
			$(parent_id + " #child" + i).show();
		}
	}
	
	if(is_widget) {
		resize_widget("#" + $(parent_id).parents(".booking").attr("id"));
	}
}

/**
	This function hides all child dropdowns. This is called by show_child_ages() to reset all 
	dropdowns
	
	@param {String} parent_id The ID attribute for the widget. Required.
	
	@example hide_children("hotel-widget");
	
	@return false
	
*/
function hide_children(parent_id) {
	for (var i=1; i<=9;i++) {
		$(parent_id + " #Child" + i + "Age").val('0');
		$(parent_id + " #child" + i).hide();
	}
	$(parent_id).hide();
}

/**
	This function builds a string of all children
	
	@param	{String}	widget_id	The ID attribute of the widget we are submitting. Required.
	@param	{Integer}	count		Number of children we are submitting. Required.
	
	@example create_child_array("rooms-widget", 8);
	
	@return String
*/
function create_child_array(widget_id, count) {
	var str = "";
	for (i=1; i<=count;i++) {
		var age = $(widget_id + " #Child" + i + "Age").val();
		if(age == undefined) age = 0;
		str = str + age;
		if(i < count) str = str + ",";
	}
	return str;
}

/**
	This function adds a specified number of days onto a given date object.
	
	@param {Integer} num_days Number of days to add. Required.
	
	@example add_to_today(5)
	
	@return String "05/14/1984"
*/
function add_to_today(num_days) {
	
	var d = new Date();
	d.setDate(d.getDate() + num_days);
	var num_month = (d.getMonth() + 1);
	var day = d.getDate();
	var mon = num_month;
	var mm = mon < 10 ? '0' + mon : mon;
	var dd = day < 10 ? '0' + day : day;
	$("#nights").val(num_days - 1);
	return mm.toString() + '/' + dd.toString() + '/' + d.getFullYear().toString();
	
}

/**
	Builds a url string from a given array of parameters
	
	@param	{Array}		params		This is an array of key/value pairs of params and values to append to the url string. Required.
	@param	{String}	base_url	
	
	@example
		var params = [
			1321967,
			[
				["arrivaldate", "01/20/2011"], 
				["departuredate", "02/01/2011"], 
				["adultcount", 4]
			]
		];
		build_url(params);
		
	@return String
*/
function build_url_air(params, base_url) {
	
	if(!base_url) base_url = "http://www.inntopia.travel/aspnet/09/search.aspx";
	url = base_url + "?salesid=" + params[0];
	
	if(params[1]) {
		for(a=0;a<params[1].length;a++) {
			url = url + "&" + params[1][a][0] + "=" + params[1][a][1];
		}
	}
	return url;
}

/**
	Usercontrol function that searches for accommodation. 
	
	@param {String} parent_id ID attribute of the usercontrol. Required.
	
	@example seach_all("search-all");
	
	@return false
	
*/
function search_all(parent_id) {
	
	parent_id = "#" + parent_id + " ";
	
    var arrival = $(parent_id + ".arrival").val(), 
		neighbour = $(parent_id + ".neighbour").val(), 
		departure = $(parent_id + ".departure").val(), 
		persons = $(parent_id + ".adults").val(), 
		nights = $(parent_id + ".nights").val(), 
		a = new Date(arrival);
	
    a.setDate(a.getDate() + parseInt(nights));
	
    var mm1 = a.getMonth() + 1, 
		dd1 = a.getDate(), 
		yy1 = a.getFullYear(), 
		dep = mm1 + "/" + dd1 + "/" + yy1, 
		child_count = $(parent_id + ".children").val(), 
		feature = $(parent_id + ".peak").val(), 
		feature1 = "", 
		feature2 = "", 
		home = $(parent_id + ".home").val(), 
		url;
	
	var params = [
		1321967,
		[
			["arrivaldate", arrival], 
			["departuredate", departure], 
			["adultcount", persons]
		]
	];
	
	if(child_count > 0) params[1].push(["childcount", child_count], ["childagearray", create_child_array(parent_id, child_count)]);
	
	if(feature) {
		
		switch(feature) {
			case "1":
				feature1 = "P,506,1,9,P,506,1,10,";
				break;
			case "2":
				feature1 = "P,506,1,8,";
				break;
			case "3":
				feature1 = "P,506,1,7,";
				break;
			case "4":
				feature1 = "P,506,1,6,";
				break;
			case "5":
				feature1 = "P,506,1,4,P,506,1,5,";
				break;
		}
		
		switch(home) {
			case "1":
				feature1 = feature1 + "P,500,1,1,";
				break;
			case "2":
				feature1 = feature1 + "P,500,5,1,";
				break;
			case "3":
				feature1 = feature1 + "P,500,8,1,";
				break;
			case "4":
				feature1 = feature1 + "P,500,8,1,";
				break;
		}
		params[1].push(["features", feature1]);
	
	}
	
	url = build_url(params);
	_gaq.push(['_trackEvent', "search accomm", path, 'search'], ['_link', url]);
	
	//window.location = url;
	
}

/**
	Function to safely encode a string for appending onto a url
	
	@param {String} clear_string String to encode. Required.
	
	@example url_encode("gran fondo");
	
	return String
	
*/
function url_encode(clear_string) {
	var output = '';
	var x = 0;
	clear_string = clear_string.toString();
	var regex = /(^[a-zA-Z0-9_.]*)/;
	while (x < clear_string.length) {
		var match = regex.exec(clear_string.substr(x));
		if (match != null && match.length > 1 && match[1] != '') {
			output += match[1];
			x += match[1].length;
		} else {
			if (clear_string[x] == ' ') {
				output += '+';
			} else {
				var charCode = clear_string.charCodeAt(x);
				var hexVal = charCode.toString(16);
				output += '%' + (hexVal.length < 2 ? '0' : '') + hexVal.toUpperCase();
			}
			x++;
		}
	}
	return output;
}

/**
	Show loading state for booking widget
	
	@return false
*/
function widget_loading() {
	//$("#widget .widget-loading").css({height: $("#widget").height()+15});
	$("#widget .widget-loading").toggle();
}

/**
	Perform site search
	
	@example search_site();
	
	@return false
	
*/

function search_site() {
	window.location = "/sitesearch/?cx=007119222367310883562:-zhuzpyysp4&cof=FORID%3A11&ie=UTF-8&q=" + url_encode(document.getElementById('search_term').value) + "&sa=Search";
}

Array.prototype.inArray = function (value) {
	var i;
	for (i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};
