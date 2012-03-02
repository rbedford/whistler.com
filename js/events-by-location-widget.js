$(document).ready(function(){
	
	$("#event_search_wide a.btn").click(function(){
		
		reset_form();
		loading("Searching for events ...");
		
		var data = {};
		data.start = $("#event_start_date").val();
		data.end = $("#event_end_date").val();
		//data.catid = $("#catid").val();
		data.catid = 7;
		
		if(!validate(data)){
			
			//valid, fetch results
			$.ajax({
				url: "/json/events_location/",
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
	
			calculateNumDays();
		}
	});
	
	$(".ndatepicker1").datepicker().val(AddToTodaysDate(1).toString()).trigger('change');
	$(".ndatepicker2").datepicker({
		numberOfMonths: 1,
		showAnim: "",
		showOn: 'focus',
		buttonImageOnly: true,
		defaultDate: +1,
		onSelect: function (selectedDate) {
			calculateNumDays();
		}
	});
	$(".ndatepicker2").datepicker().val(AddToTodaysDate(30).toString()).trigger('change');
	
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
	
	$("#search-results").slideUp("slow", function(){
		
	});
	
}