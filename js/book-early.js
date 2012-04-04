$(document).ready(function() {
													 
	var start = new Date.parse("November 22nd 2012");
	$(".page-widget .arrival").val(Date.parse(start).toString("MM/dd/yyyy"));
	$(".page-widget .departure").val(Date.parse(start.add(3).days()).toString("MM/dd/yyyy"));
	
});