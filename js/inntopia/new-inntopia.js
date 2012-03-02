var _packages = [], _package = {}, _booking_str = "", l_id, p_id, package1_id, s_id;

function load_package(location_id, product_id, package_id) {
	package1_id = package_id;
    l_id = location_id;
 	p_id = product_id;


 	var imgDetails =  document.getElementById("img_" + l_id + "_" + p_id + "_" + package_id);
	var _package_row = ".package-" + l_id + "-" + p_id + "-" + package_id, 
		_components_row = "#components-" + l_id + "-" + p_id + "-" + package_id;
	
	if ($(_components_row).length > 0) {
		remove_package(package_id);
		//   imgDetails.src = "/css/images/btns/show.png";
	} else {

     //   imgDetails.src = "/css/images/btns/hide.png";
   
		/* Insert loading template */
		var loading_html = $("#loading-template").html();
		var loading_template = Handlebars.compile(loading_html);
		loading_html = loading_template({
			location_id: l_id, 
			product_id: p_id, 
			package_id: package_id
		});
		
		$(loading_html).insertAfter(_package_row);
	    $(_components_row + " .components").slideDown();
      

	    /* Get package data */

	 
   var url2 = "";
	    if (document.getElementById("c2_ddlChild").value.toString() == "0") {
	        url2 = "/json/inntopia/package2/index.aspx?packageid=" + package_id + "&arrivaldate=" + document.getElementById("c2_txtA1").value.toString() + "&departuredate=" + document.getElementById("c2_txtA2").value.toString() + "&adultcount=" + document.getElementById("c2_ddlAdult").value.toString() + "&childcount=0&sessionid=" + strSession;
	    }
	    else {
	         url2 = "/json/inntopia/package2/index.aspx?packageid=" + package_id + "&arrivaldate=" + document.getElementById("c2_txtA1").value.toString() + "&departuredate=" + document.getElementById("c2_txtA2").value.toString() + "&adultcount=" + document.getElementById("c2_ddlAdult").value.toString() + "&childcount=" + document.getElementById("c2_ddlChild").value.toString() + "&childagearray=" + CreateChildArray_Inntopia(document.getElementById("c2_ddlChild").value.toString()) + "&sessionid=" + strSession;
	    }

	    $.ajax({
	        // check url
	        url: url2,
	        dataType: "json",
	        cache: false,

	        success: function (data) {

	            _package = {
	                id: package_id,
	                supplier_id: data.supplierID,
	                sales_id: data.salesID,
	                location_id: l_id,
	                product_id: p_id,
	                name: data.name,
	                description: data.description,
	                arrival_date: format_date(data.arrivalDate),
	                departure_date: format_date(data.departureDate),
	                nights: data.nights,
	                adult_count: data.adultCount,
	                child_count: data.childCount,
	                regular_price: $("#regular-price-" + l_id + "-" + p_id).html().substring(1),
	                package_total: $("#components-" + l_id + "-" + p_id + "-" + package_id).prev().children(".total-price").html().substring(1),
	                package_savings: $("#td2_" + l_id + p_id + package_id).text().substring(1),
	                components: []
	            };
				
	            $(_components_row + " .package-description").html(data.description);
	            $.each(data.component, function (k, product) {
	                _package.components.push(product);
	            });
				
	            save_package(_package);
	            calculate_base_price(_package);
				
	        },
	        complete: function (jqXHR, status) {

	            if (status == "success") {

	                /* Package loaded, Load components */

	                var html = "", component;

	                for (i = 0; i < _package.components.length; i++) {
						
	                    component = _package.components[i];
	                    component.per = ((component.defaultQuantityType == 2) || (component.defaultQuantityType == 3)) ? "person" : "itinery";
						//console.log(component);
	                    if (component.per == "person") {
	                        for (l = 0; l < _package.adult_count; l++) {
	                            insert_component(package_id, component, true);
	                        }
	                    } else {
	                        insert_component(package_id, component);
	                    }

	                }
					
	                if ($("#td2_" + l_id + p_id + package_id).text().substring(1) == "") _package.no_saving = true;
	                if ((_package.components.length == 0) || (_package.no_saving == true)) _package.basic = true;
					
	                /* Load price table template */
	                var html = $("#components-price-table").html();
	                var prices_template = Handlebars.compile(html);
					
	                prices_template = prices_template(_package);
	                $(prices_template).appendTo("#components-" + l_id + "-" + p_id + "-" + package_id + " .components");
					
	                update_prices(package_id);
					
	                $("#components-" + l_id + "-" + p_id + "-" + package_id + " .components").removeClass("loading");
	                $("#components-" + l_id + "-" + p_id + "-" + package_id + " select").uniform();
	            }

	        },
	        error: function () {}
	    });
	
	}
	
}

function insert_component(package_id, component, is_duplicate) {
	
	/* Products */
	
	/* Group products by name */
	var prods = [], adults = [], dates = [], products = [], d;
	
	for(x=0;x<component.location.length;x++) {
		
		for(p=0;p<component.location[x].product.length;p++) {
			for(y=0;y<component.location[x].product[p].specialDay.length;y++) {
				var date_formatted = format_date(component.location[x].product[p].specialDay[y].date);
				(date_formatted == format_date(component.defaultDay)) ? dates.push([date_formatted, true]) : dates.push([date_formatted, false]);
			}
		}
		
		products.push({
			name: component.location[x].name,
			products: component.location[x].product
		});
		
	}
	
	/* Dates */
	dates = merge_dates(dates);
	
	/* Qty */
	var qty_max;
	(component.maxQuantity == 0) ? qty_max = 51 : qty_max = component.maxQuantity + 1;
	
	for (a = 1; a < qty_max; a++) {
		var selected;
		(a == component.defaultQuantity) ? selected = true : selected = false;
		adults.push({ number: a, selected: selected });
	}
	if(component.defaultQuantity == 0) adults[0].selected = true;
	
	var required = false;
	if(component.required) required = true;
	
	if(products.length > 0) {
		/* Load components template */
		html = $("#new-components").html();
		var component_template = Handlebars.compile(html);
		var component_data = { 
			location_id: l_id, 
			product_id: p_id,
			package_id: package_id,
			component: component,
			adults: adults,
			dates: dates,
			products: products,
			default_item: products[0].id,
			default_item_price: products[0].sale_price
		};
		if (component.required == true) component_data.required = true;
		
		component_template = component_template(component_data);
		$(component_template).appendTo("#components-" + l_id + "-" + p_id + "-" + package_id + " .components");
	}
	
}

function show_component(location_id, product_id, package_id, component_id) {
	
	var id_str_dash = l_id + "-" + p_id + "-" + package_id + "-" + component_id;
	var link = $("#component-" + id_str_dash + " a.add-remove");
	if(link.html() == "[+] Add"){
		link.html("[-] Remove");
		$("#component-" + id_str_dash).removeClass("inactive").addClass("active");
	} else {
		link.html("[+] Add");
		$("#component-" + id_str_dash).removeClass("active").addClass("inactive");
	}
	update_prices(package_id);
}

function update_prices(package_id) {
	
	_package = get_package_by_id(package_id);
	_package.cart = [];
	var id_str = l_id + "" + p_id + "" + package_id, 
		id_str_dash = l_id + "-" + p_id + "-" + package_id;
	
	/* Update single component prices */
	var total_components_price=0, component_divs=[], component_div, component_id, selects=[], dates=[], products=[], package_savings=0, default_savings=0;
	
	$("#components-" + id_str_dash + " .component").not(".inactive").each(function() {
		
		//component_div = "#" + $(this).attr("id");
		component_div = $(this);
		component_id = $(this).attr("id").replace("component-" + id_str_dash + "-", "");
		
		selects.push(component_div.find(".adults")), 
			dates.push(component_div.find("select.dates option:selected").val()), 
			product_id = (component_div.find("select.products option:selected").val()), 
			products.push(get_product(_package.id, component_id, product_id)), 
			component_divs.push(component_div);
		
	});
	
	if(selects){
		for(s=0;s<selects.length;s++) {
			var adults = $(selects[s]).val(), 
				sale_price = products[s].specialDay[0].salePrice,
				price = products[s].specialDay[0].price, 
				total = (sale_price * adults),
				normal_total = (price * adults), 
				default_qty = parseFloat(component_divs[s].attr("data-default-qty"));
			
			/* sale price */
			total_components_price = total_components_price + total;
			total = round_number(total, 2);
			
			var product_saving = products[s].specialDay[0].price - products[s].specialDay[0].salePrice;
			default_savings = default_savings + (default_qty * product_saving);
			package_savings = package_savings + (product_saving * adults);
			
			component_divs[s].find(".item-price .q").html(adults);
			component_divs[s].find(".item-price .i").html(round_number(price, 2));
			component_divs[s].find(".item-price .t").html(round_number(normal_total, 2));
			component_divs[s].find(".item-price").removeClass("loading");
			
			/* add component to cart */
			_package.cart.push([
				["supplier_id", products[s].supplierID],
				["product_id", products[s].productID],
				["quantity", adults],
				["arrival_date", dates[s]],
				["departure_date", dates[s]],
				["adult_count", _package.adult_count],
				["child_count", _package.child_count]
			]);
		}
		var saving = (package_savings - default_savings) + parseFloat(_package.package_savings);
	}
	
	/* Update price table */
	
	/* package separately */
	var packaged_separate = (parseFloat(total_components_price) + parseFloat(_package.regular_price));
	//$("#components-" + l_id + "-" + p_id + "-" + package_id + " #separate-price").html("&#36;" + round_number(packaged_separate, 2));
	
	// package price
	var package_total = (parseFloat(_package.base_price) + parseFloat(total_components_price));
	$("#components-" + id_str_dash + " #package-price, #td1_" + id_str).html("&#36;" + round_number(package_total, 2));
	
	// package savings
	$("#td2_" + id_str + ", " + "#components-" + id_str_dash + " #savings").html("&#36;" + round_number(saving, 2));
	
	/// Animate
	$("#prices-" + id_str_dash + " td.updateable-price, #td1_" + id_str + ", " + "#td2_" + id_str).stop().css("background-color", "#FFFF9C").animate({ backgroundColor: "#F8F7F7" }, 1000);
	
	
}

function add_package_to_cart(id, is_single_component) {
	
	var p = get_package_by_id(id), str = "", reqs = $("#components-" + l_id + "-" + p_id + "-" + p.id + " .components .required .adults"), sum=0;
	
	$(reqs).parents(".component").removeClass("error");
	
	for(r=0;r<reqs.length;r++) {
		sum += $(reqs[r]).val();
	}
	
	if((sum == 0) && (!_package.basic)) {
		$(reqs).parents(".component").addClass("error");
		alert("You must select a minimum of 1 item from " + p.name);
	} else {
		
		if(is_single_component) {
			
			str = 	l_id + "|" + 
					p_id + "|" + 
					"1|" + 
					p.arrival_date + "|" + 
					p.departure_date + "|" + 
					p.adult_count + "|" + 
					p.child_count + "|";
			
		} else {
			
			str = l_id + "|" +
			p_id + "|" +
			"1|" +
			p.arrival_date + "|" +
			p.departure_date + "|" +
			p.adult_count + "|" +
			p.child_count + "|";
	
			/* load cart items */
			for(i=0;i<p.cart.length;i++) {
				str += p.cart[i][0][1] + "|" 
					+ p.cart[i][1][1] + "|" 
					+ p.cart[i][2][1] + "|" 
					+ p.cart[i][3][1] + "|" 
					+ p.cart[i][3][1] + "|" 
					+ p.cart[i][5][1] + "|" 
					+ p.cart[i][6][1] + "|";
			}
			
		}
		
		var s = '/cart/index.aspx?actioncode=15&sessionid=' + strSession + '&itineraryarray=' + str + '&packageid=' + package1_id;
		
		_booking_str = str;
		
		$.fancybox({
			'title': 'Itinerary', 
			'href': s, 
			'padding': 10, 
			'transitionIn': 'none', 
			'transitionOut': 'none', 
			'type': 'iframe', 
			'changeFade': 0, 
			'height': 650, 
			'width': 730, 
			'titlePosition': 'inside', 
			'titleShow': false
		});
			
	}
	
}

function book_now() {
	alert(this.location.search.replace("?str=", ""));
}

function format_date(jsonDate) {
//	var d = new Date(), unix = date_stamp.substring(6,19);
//	d.setTime(unix);
//	str = d.toString("MM/dd/yyyy");
//	return str;
	var d = parseDate(jsonDate);
	str = d.toString("MM/dd/yyyy");
	return str;
}
function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
}

function merge_dates(input) {
	var array=[], dates=[];
	for(d=0;d<input.length;d++) {
		var date = {date: input[d][0], selected: input[d][1]};
		if(!array.inArray(input[d][0])) {
			array.push(input[d][0]);
			dates.push(date);
		}
	}
	return dates.sort_dates();
}

function get_package_by_id(id){
	var package=false;
	for(y=0;y<_packages.length;y++) {
		if(_packages[y].id == id) {
			package = _packages[y];
			break;
		}
	}
	return package;
}

function get_component_by_id(package_id, component_id) {
	var p = get_package_by_id(package_id), comp = false;
	for(l=0;l<p.components.length;l++) {
		if(p.components[l].componentID == component_id) {
			comp = p.components[l];
			break;
		}
	}
	return comp;
}

function get_product(package_id, component_id, product_id) {
	var c = get_component_by_id(package_id, component_id), products = get_component_products(c.location), product = false;
	
	for(g=0;g<products.length;g++) {
		if(products[g].productID == product_id) {
			product = products[g];
			break;
		}
	};
	return product;
}

function get_component_products(array) {
	var output = [];
	for(e=0;e<array.length;e++) {
		output = output.concat(array[e].product);
	}
	return output;
}

function calculate_base_price(package) {
	
	/* get all required components */
	var req=[], cost=0, per_person = false;
	for(f=0;f<package.components.length;f++) {
		var c = package.components[f];
		if(c.required) {
			req.push(c);
		}
		if((c.defaultQuantityType == 2) || (c.defaultQuantityType == 3)) { per_person = true; }
	}
	
	/* calculate cost */
	for(r=0;r<req.length;r++) {
	    var q = req[r].defaultQuantity, 
			p = req[r].location[0].product[0].specialDay[0].salePrice;
		cost = cost + (q * p);
	}
	
	package.base_price = package.package_total - cost;
	if(per_person == true) { package.base_price =  package.base_price - cost}
	
	save_package(package);
}

function save_package(package) {
	var found = false;
	for(p=0;p<_packages.length;p++){
		if(_packages[p].id == package.id){
			_packages[p] = package;
			found = true;
			break;
		}
	}
	if (found == false) _packages.push(package);
}

function remove_package(id) {
	
	$("#components-" + l_id + "-" + p_id + "-" + id + " .components").slideUp("slow", function() {
		$("#components-" + l_id + "-" + p_id + "-"  + id).remove();
	});
	
	for(i=0;i<_packages.length;i++) {
		if(_packages[i].id == id) {
			$("#td1_" + l_id + p_id + id).html("&#36;" + round_number(_packages[i].package_total, 2)).stop().css("background-color", "#FAC5C0").animate({ backgroundColor: "#F8F7F7"}, 1000);
			_packages.pop(_packages[i]);
		}
	}
	_package = {}
}

function round_number(number,dec_places){
//Version 2.0 (c) Copyright 2008, Russell Walker, Netshine Software Limited. www.netshinesoftware.com
var new_number='';var i=0;var sign="";number=number.toString();number=number.replace(/^\s+|\s+$/g,'');if(number.charCodeAt(0)==45){sign='-';number=number.substr(1).replace(/^\s+|\s+$/g,'')}dec_places=dec_places*1;dec_point_pos=number.lastIndexOf(".");if(dec_point_pos==0){number="0"+number;dec_point_pos=1}if(dec_point_pos==-1||dec_point_pos==number.length-1){if(dec_places>0){new_number=number+".";for(i=0;i<dec_places;i++){new_number+="0"}if(new_number==0){sign=""}return sign+new_number}else{return sign+number}}var existing_places=(number.length-1)-dec_point_pos;if(existing_places==dec_places){return sign+number}if(existing_places<dec_places){new_number=number;for(i=existing_places;i<dec_places;i++){new_number+="0"}if(new_number==0){sign=""}return sign+new_number}var end_pos=(dec_point_pos*1)+dec_places;var round_up=false;if((number.charAt(end_pos+1)*1)>4){round_up=true}var digit_array=new Array();for(i=0;i<=end_pos;i++){digit_array[i]=number.charAt(i)}for(i=digit_array.length-1;i>=0;i--){if(digit_array[i]=="."){continue}if(round_up){digit_array[i]++;if(digit_array[i]<10){break}}else{break}}for(i=0;i<=end_pos;i++){if(digit_array[i]=="."||digit_array[i]<10||i==0){new_number+=digit_array[i]}else{new_number+="0"}}if(dec_places==0){new_number=new_number.replace(".","")}if(new_number==0){sign=""}return sign+new_number}

Array.prototype.inArray = function (value) {
	var i;
	for (i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};

Array.prototype.sort_dates = function() {
	var dates=this;
	for(count=0;count<dates.length;count++) {
		var day = Date.parse(dates[count].date[0]), u = day.getTime();
		dates[count].unix = u;
	}
	return this.sort(function(a,b){return a.unix - b.unix});
}

function validate_cc(self) {
	$(self).val($(self).val().replace(/[^0-9]+/g, ""));
}