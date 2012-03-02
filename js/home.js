var width, count, all_width, 
	bg_imgs = [
	["http://www.whistler.com/css/images/bg/skier.jpg", "skier", true],
	["http://www.whistler.com/css/images/bg/village.jpg", "village", false],
	["http://www.whistler.com/css/images/bg/sunset.jpg", "sunset", false]
];
$(document).ready(function() {
	
	$("#bg_switch").click(function() {
		bg_switch();
		_gaq.push(["_trackEvent", "homepage", "click", "Switch BG Image"]);
		return false;
	});
	
	$(".show-info, #info-popup a.close").click(function() {
		$("#info-popup").toggle();
		return false;
	});
	
	$("#widget .arrival").datepicker({
		onSelect: function (selected_date) {
			calculate_num_days(undefined, "widget");
		}
	}).val(add_to_today(1).toString()).trigger('change');
	
	$("#widget .departure").datepicker({
		onSelect: function (selected_date) {
			calculate_num_days(undefined, "widget");
		}
	}).val(add_to_today(3).toString()).trigger('change');
	
});

function add_events() {
	
	$("#story_scroller a").click(function() {
										  
		$("#story_scroller a").removeClass("on");
		$(this).addClass("on");
		
		var story = $(this).attr("href");
		$(".panel").scrollTo(story, 800);
		
		return false;
		
	});
	
}

function bg_switch() {
	
	$("#bg_switch").addClass("loading");
	var next = find_next_bg();
	
	if(is_loaded(next[0])) {
		show_image(next);
	} else {
		$("<img />").attr({src: next[0]}).load(function() {
			show_image(next);
		});
	}
	
}

function show_image(img) {
	$("body").attr("id", img[1]);
	setTimeout(function() {
		$("#bg_switch").removeClass("loading");
	}, 250);
}

function is_loaded(img_src) {
	for(i=0;i<bg_imgs.length;i++) {
		if(bg_imgs[i][0] == img_src) {
			if(bg_imgs[i][2] == true) {
				return true;
			} else {
				bg_imgs[i][2] = true;
				return false;
			}
		}
	}
	return false;
}

function find_next_bg() {
	var current = $("body").attr("id"), found=false;
	
	for(i=0;i<bg_imgs.length;i++) {
		var n = i+1;
		
		if(current == bg_imgs[i][1]) {
			if(bg_imgs[n]) {
				return bg_imgs[n];
				break;
			}
		}
	}
	return bg_imgs[0];
}