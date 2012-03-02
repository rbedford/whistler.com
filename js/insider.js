function insider_tabs(){
	
	var resetTab = function () {
	  $(".panel").hide();
	  $("#insider-tabs li a").attr("class", "");
	};
	resetTab();
	
	var default_tab = $(".panel:first");
	var selected_tab = $("ul#insider-tabs li:first a");
	
	$(".panel").hide();
	default_tab.show();
	selected_tab.addClass("on");
	
	$("#insider-tabs li a").bind('click', function () {
		resetTab();
		var e = $(this).attr("href");
		$(this).attr("class", "on");
		$(e).show();
		return false;
	});
	
}

$(document).ready(function(){
	insider_tabs();
});