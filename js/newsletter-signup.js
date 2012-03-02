$(document).ready(function() {
	
	var form_html = $("#subForm1").html();
	var form = "<form action='http://tourismwhistler.createsend.com/t/r/s/ettjtj/' method='post' id='subForm'>" + form_html + "</form>";
	
	$("#subForm1").html(form);
	
	$("#newsletter-signup select").uniform();
	
	var d = new Date(), day = d.getUTCDate(), month = d.getMonth(), year = d.getUTCFullYear();
	$("#Dateadded-dy").val(day);
	$("#Dateadded-mn").val(month);
	$("#Dateadded-yr").val(year);
	
	$("#subForm input").blur(function() {
		$("#ettjtj-ettjtj, #confirm-email").removeClass("error");
		var email = $("#ettjtj-ettjtj").val(), confirm_email = $("#confirm-email").val();
		if((email != "") && (confirm_email != "") && (email != confirm_email)) $("#ettjtj-ettjtj, #confirm-email").addClass("error");
	});
	
});