$(document).ready(function(){
	init();
});
var temp;
function init(){
	
	/* add css */
	var stylesheet = document.createElement("link");
	stylesheet.setAttribute("rel", "stylesheet");
	stylesheet.setAttribute("type", "text/css");
	stylesheet.setAttribute("href", "/css/comments.css");
	document.getElementsByTagName("head")[0].appendChild(stylesheet);
	
	/* add comment box */
	var div = "<div id='comments-box'><p class='loading'>Loading comments ...</p><div id='comments'></div></div>";
	$(div).insertAfter("#comments-script");
	
	/* add form */
	var form = "<div id='add-comment'></div>";
	$(form).appendTo("#comments-box");
	$("#add-comment").load("/comments/add-form.html");
	
	/* load comments */
	$.ajax({
		url: "/json/comment/",
		type: "post",
		data: {
			"action": 2,
			"url" : window.location.pathname
		},
		dataType: "json",
		success: function(data){
			load_comments(data);
		},
		error: function(jqXHR, textStatus, errorThrown){
			load_comments(null);
		}
	});
	
}

function load_comments(data){
	
	$("#comments").html("");
	
	if((data == undefined) || (data.length > 0)){
		var html = "<h3>Your Comments</h3>";
		for(i in data){
			html += build_comment(data[i]);
		}
	} else {
		var html = "<h3>Be the first to comment</h3>";
	}
	$("#comments").html(html);
	$("#comments-box p.loading").remove();
	
}

function build_comment(comment){
	var html = "<div class='comment clearfix' id='comment-" + comment.ID + "'>";
		html += "<div class='info'><strong>" + comment.Name;
			if(comment.Hometown){
				html += " - " + comment.Hometown;
			}
		html += "</strong> <em>" + comment.Date + "</em>";
		html += "</div>";
		html += "<p>" + comment.Comment + "</p>";
	html += "</div>";
	return html;
}

function add_comment(){
	
	var data = {}
	data.action = 1;
	data.name = $("#add-comment input#name").val();
	data.hometown = $("#add-comment input#hometown").val();
	data.email = $("#add-comment input#email").val();
	data.comment = $("#add-comment textarea#comment").val();
	data.url = window.location.pathname;
	
	/* validate */
	if(validate_data(data)){
		$.ajax({
			url: "/json/comment/",
			type: "post",
			data: data,
			dataType: "json",
			success: function(data){
					
				clear_form_fields();
				$("<p class='success-message'>Thanks, your comment has been added.</p>").insertBefore(".field:first");
				
				load_comments(data);

			}
		});
		
	} else {
		
		$("<p class='error-message'>All required fields are highlighted.</p>").insertBefore(".field:first");
		
	}
	
}

function validate_data(data){
	
	var error = false;
	$(".error").removeClass("error");
	$("p.error-message").remove();
	
	if((data.name == "") || (data.name == undefined)){
		error = true;
		$("#add-comment input#name").addClass("error");
	}
	
	if((data.comment == "") || (data.comment == undefined)){
		error = true;
		$("#add-comment textarea#comment").addClass("error");
	}
	
	if(error){
		return false;
	} else {
		return true;
	}
}

function clear_form_fields(){
	$("p.success-message").remove();
	$("input#name, input#email, textarea#comment").val("");
}

function report_comment(id){
	
	var data = {};
	data.action = 3;
	data.id = id;
	data.url = window.location.pathname;
	
	$.ajax({
		url : "/json/comment/",
		type: "post",
		data: data,
		dataType: "json",
		success: function(data){
			load_comments(data);
			//$("#comment-" + id).children("a.report").text("Thanks, we'll look into it.");
		}
	});
}