$(document).ready(function() {
	var now = new Date();
	if(now.getDate() < 24) {
		$("#hotel-search .arrival").val("11/24/2011");
		$("#hotel-search .departure").val("11/26/2011");
	} else {
		$("#hotel-search .departure").val(Date.parse(now.add(2).days()).toString("MM/dd/yyyy"));
		$("#hotel-search .departure").val(Date.parse(now.add(1).days()).toString("MM/dd/yyyy"));
	}
});