// Site wide functions for whistler.com

function load_tabs(tab){
	
	var resetTab = function () {
	  $(".toggle").hide();
	  $("#tabs li a").attr("class", "");
	};
	resetTab();
	
	if((window.location.hash != "") && $(window.location.hash).is("div")){
		//hash present, load requested tab
		var default_tab = $(window.location.hash);
		var selected_tab = $("#tab-" + window.location.hash.substring(1));
	} else if (tab){
		//function being passed a tab as an arguement, load requested tab
		var default_tab = $("#" + tab);
		var selected_tab = $("#tab-" + tab);
	} else {
		//no specific tab requested, load first
		var default_tab = $(".toggle:first");
		var selected_tab = $("ul#tabs li:first a");
	}
	
	$(".toggle").hide();
	default_tab.show();
	selected_tab.addClass("on");
	
	$("#chapters").prev().attr("id", "tabs");
	
	$("#tabs li a").bind('click', function () {
		resetTab();
		var e = $(this).attr("href");
		$(this).attr("class", "on");
		$(e).show();
		return false;
	});
	
}

$(document).ready(function(){
	
	if($("#chapters").length > 0){
		load_tabs();
		scroll(0,0);
	}
	
	$("a[rel='external']").attr("target", "_blank");

	$("#search_term").focus(function() {
		if ($(this).val() == "SEARCH") {
			$(this).val("");
		}
	});

	$("#search_term").blur(function() {
		if ($(this).val() == "") {
			$(this).val("SEARCH");
		}
	});
	
	$("#search_term").keyup(function(e) {
		if (e.keyCode == "13"){
			search_site();
			return false;
		}
	});
	
	//$("#search_term").focus();
	
});

/*
 * JavaScript Debug - v0.4 - 6/22/2010
 * http://benalman.com/projects/javascript-debug-console-log/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 * 
 * With lots of help from Paul Irish!
 * http://paulirish.com/
 */
window.debug=(function(){var i=this,b=Array.prototype.slice,d=i.console,h={},f,g,m=9,c=["error","warn","info","debug","log"],l="assert clear count dir dirxml exception group groupCollapsed groupEnd profile profileEnd table time timeEnd trace".split(" "),j=l.length,a=[];while(--j>=0){(function(n){h[n]=function(){m!==0&&d&&d[n]&&d[n].apply(d,arguments)}})(l[j])}j=c.length;while(--j>=0){(function(n,o){h[o]=function(){var q=b.call(arguments),p=[o].concat(q);a.push(p);e(p);if(!d||!k(n)){return}d.firebug?d[o].apply(i,q):d[o]?d[o](q):d.log(q)}})(j,c[j])}function e(n){if(f&&(g||!d||!d.log)){f.apply(i,n)}}h.setLevel=function(n){m=typeof n==="number"?n:9};function k(n){return m>0?m>n:c.length+m<=n}h.setCallback=function(){var o=b.call(arguments),n=a.length,p=n;f=o.shift()||null;g=typeof o[0]==="boolean"?o.shift():false;p-=typeof o[0]==="number"?o.shift():n;while(p<n){e(a[p++])}};return h})();