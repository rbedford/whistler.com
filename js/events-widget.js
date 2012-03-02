$(document).ready(function(){
	
	$("#event_search_wide a.btn").click(function(){
		
		reset_form();
		loading("Searching for events ...");
		
		var data = {};
		data.start = $("#event_start_date").val();
		data.end = $("#event_end_date").val();
		data.catid = $("#catid").val();
		
		if(!validate(data)){
			
			//valid, fetch results
			$.ajax({
				url: "/json/events/index.aspx",
				type: "post",
				data: data,
				success: function(json){
					
					var events = json;
					var html = "<a href='./' class='hide' onclick='hide_results(); return false;'>Hide Search Results</a>";
					
					if(events.length > 0){
						for(i in events){
							
							var featured = (events[i].Priority == 1) ? " featured-event" : "";
							html += "<div class='listing" + featured + "'>";
							if(events[i].URL){
								html += "<h3><a href='http://" + events[i].URL +  "'>" + events[i].Name + "</a></h3>";
							} 
							else {
								html += "<h3>" + events[i].Name + "</h3>";
							}
							html += "<p><strong>" + events[i].Date1 + " - " + events[i].Date2 + "</strong></p><p>" + events[i].Desc + "</p></div>";
							html += "<div class='separator'></div>";
						}
						
					} else {
						html += "<p class='no-events'>There are no events scheduled for the dates you selected. Please try another date range.</p>";
					}
					
					$("<div id='search-results' style='display: none;'></div>").insertAfter("#event_search_wide");
					$("#search-results").html(html).slideDown();
				}
			});
			
		}
		
		loading(null);
		return false;
	});
	
	/* Date Pickers */
	$(".ndatepicker1").datepicker({
		numberOfMonths: 1,
		showAnim: "",
		showOn: 'focus',
		buttonImageOnly: true,
		defaultDate: +1,
		onSelect: function (selectedDate) {
			inline_calculate_num_days($(this).parents("#event_search_wide").attr("id"));
		}
	});
	
	$(".ndatepicker1").datepicker().val(add_to_today(1).toString()).trigger('change');
	$(".ndatepicker2").datepicker({
		numberOfMonths: 1,
		showAnim: "",
		showOn: 'focus',
		buttonImageOnly: true,
		defaultDate: +1,
		onSelect: function (selectedDate) {
			inline_calculate_num_days($(this).parents("#event_search_wide").attr("id"));
		}
	});
	$(".ndatepicker2").datepicker().val(add_to_today(30).toString()).trigger('change');
	
});

function loading(text){
	if(text != null){
		$("<p class='loading'>" + text + "</p>").insertAfter("#event_search_wide");
	} else {
		$(".loading").remove();
	}
}

function validate(data){
	var error = false;
	if(data.start_date == "(mm/dd/yyyy)" || data.start_date == ""){
		error = true;
		$("#event_start_date").addClass("error");
	}
	
	if(data.end_date == "(mm/dd/yyyy)" || data.end_date == ""){
		error = true;
		$("#event_end_date").addClass("error");
	}
	return error;
}

function reset_form(){
	$("#search-results").remove();
	$("input").removeClass("error");
}

function hide_results(){
	
	$("#search-results").slideUp("slow", function(){});
	
}

function inline_calculate_num_days(parent, selectedDate) {
	
	var parent_id = "#" + parent + " ", 
		start_date = new Date(), 
		end_date = new Date(), 
		ms_per_day = (24 * 60 * 60 * 1000);
	
	start_date.setTime(Date.parse($(parent_id + "#event_start_date").val()));
	end_date.setTime(Date.parse($(parent_id + "#event_end_date").val()));
	
	/* calculate total nights */
	var nights = Math.round(Math.floor((end_date - start_date) / ms_per_day));
	
	if (nights < 1) inline_calculate_departure_date(parent_id);
	
}

function inline_calculate_departure_date(parent_id) {
	
	if(!parent_id) parent_id = ".booking:first ";
	
	var ms_per_day = (24 * 60 * 60 * 1000), 
		num_days = 29, 
		start_date = new Date(), 
		end_date = new Date();
	
	start_date.setTime(Date.parse($(parent_id + "#event_start_date").val()));
	if (isNaN(num_days)) {
		alert("You must enter a number in the Nights field.");
	} else {
		end_date.setTime(start_date.getTime() + (ms_per_day * num_days));
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
		if ($(parent_id + "#event_start_date").val() != "") {
			$(parent_id + "#event_end_date").val(end_month + "/" + end_day + "/" + end_year);
		}
		
    }
}