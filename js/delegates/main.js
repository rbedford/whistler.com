$(document).ready(function(){
						   
	$("#delegate-tabs").tabs();
	
	$("form").submit(function(){
		
		//get the template
		$.ajax({
			url: './template.html',
			success: function(data){
				
				var form_array = $("form").serializeArray();
				var f = [];
				
				for(i in form_array){
					var temp = form_array[i].value;
					f[form_array[i].name] = temp;
				}
				
				var html = data;
				
				html = html.replace(/___GROUP_NAME___/g, f['group_name']);
				html = html.replace(/___GROUP_DATE___/g, f['group_date']);
				html = html.replace(/___HEADER_IMAGE___/g, f['header_image']);
				html = html.replace(/___PAGE_TITLE___/g, f['page_title']);
				html = html.replace(/___PAGE_CONTENT___/g, f['page_content']);
				
				$("#output").text(html).show();
				$("#preview").html(html);
				$("a.view-preview").show();
				
			}
			
		});
		
		return false;
		
	});
	
	$("a.view-preview").click(function(){
		
		$("#delegate-tabs").tabs({ selected: 1 });
		return false;
	
	});
	
	$("#header_image").change(function(){
		var path = "/images/delegates/header/" + $("#header_image option:selected").val();
		$("#header-preview img").attr("src", path);
	});
	
});