var count=0;
var success_html = "<h3>Thank You for Reserving Your Free FIBT World Cup Tickets</h3>";
	success_html += "A Will Call desk will be located in the ticket kiosk at the base of the Excalibur Gondola in Skiers Plaza in ";
	success_html += "<a href='http://www.whistler.com/map/'>Whistler Village</a>. You may pick-up your tickets between 12:30 and ";
	success_html += "6 PM on event days only (February 2 -4, 2011).";
	success_html += "<br /><br />";
	success_html += "<a href='http://www.whistler.com/blog/post/2011/11/22/whistler-heli-ski.aspx' class='blog-bubble'>The Inside Scoop on Heli-Skiing in Whistler</a>";

var sorry_html = "<p>We're sorry. Free tickets are no longer available for this event as quantities were limited. Tickets may still be available for ";
	sorry_html += "<a href='http://www.inntopia.travel/aspnet/09/product.aspx?supplierid=1724051&salesid=1321967&productid=4'>purchase online</a>.</p>";

$(document).ready(function() {
	
	$.ajax({
		url: "/json/luge/count/index.aspx", 
		success: function(json) {
			count = json[0];
			if(count >= 150) $("#luge-form").html(sorry_html);
		}
	});
	$(".luge-form select, .luge-form input").uniform();
	
});

function reserve_luge_tickets() {
	
	/* validation */
	var errors = false;
	$(".luge-form .error-message").hide();
	
	$(".luge-form .field input").removeClass("error");
	
	$(".luge-form .required .text").each(function() {
		if($(this).val() == "") {
			$(this).addClass("error");
			errors = true;
		}
		
		$(this).blur(function() {
			$(this).removeClass("error");
		});
	});
	
	if(errors) {
		$(".luge-form p.error-message").show();
	} else {
		
		$.ajax({
			url: "/json/luge/index.aspx?email=" + $("#luge-form #email").val(), 
			dataType: "json",
			success: function(json) {
				
				if(json.length > 0) {
					
					// update record
					var str = "?email=" + $('#luge-form #email').val() + "&count=" + $('#luge-form #count').val();
					$.ajax({
						url: "/json/luge/index.aspx" + str, 
						success: function(json) {
							$("#luge-form #confirm").html(success_html);
						}
					});
					
				} else {
					// insider step
					var html = "We cannot find this email address in our Insider database. Would you like to be added?";
					html += "<div class='buttons'><a href='./' class='cta' onclick='add_to_insider(); return false'>Yes</a> ";
					html += "<a href='./' class='cta' onclick='dont_add_to_insider(); return false'>No</a></div>";
					$("#luge-form #confirm").html(html);
				}
				
				$("#luge-form .field").slideUp(function() {
					$("#luge-form #confirm").slideDown();
				});
				
			}
		}); 
		
	}
	
}

function add_to_insider() {
	var str = "?email=" + $('#luge-form #email').val();
		str += "&count=" + $('#luge-form #count').val();
		str += "&FName=" + $('#luge-form #fname').val();
		str += "&LName=" + $('#luge-form #lname').val();
	$.ajax({
		url: "/json/luge/index.aspx" + str, 
		success: function(json) {
			$("#luge-form #confirm").html(success_html);
		}
	});
}

function dont_add_to_insider() {
	var html = "We're sorry. To be eligible for these tickets, you need to be signed up to our Insider newsletter.";
	$("#luge-form #confirm").html(html);
}