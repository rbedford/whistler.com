// JavaScript Document

var current = new Number (1);

function feature_visibility(id) {
	
       	var clicked = document.getElementById(id);		
		var feature01 = document.getElementById('feature_01');
		var feature02 = document.getElementById('feature_02');
		var feature03 = document.getElementById('feature_03');
		var feature04 = document.getElementById('feature_04');
		var ball01 = document.getElementById('feature_ball_01');
		var ball02 = document.getElementById('feature_ball_02');
		var ball03 = document.getElementById('feature_ball_03');
		var ball04 = document.getElementById('feature_ball_04');
			  	
		feature01.style.visibility = 'hidden';
		feature02.style.visibility = 'hidden';
		feature03.style.visibility = 'hidden';
		feature04.style.visibility = 'hidden';
		ball01.style.background = ' #e5e5e5 url(../images/btns/feature_ball-trans.png)';
		ball02.style.background = ' #e5e5e5 url(../images/btns/feature_ball-trans.png)';
		ball03.style.background = ' #e5e5e5 url(../images/btns/feature_ball-trans.png)';
		ball04.style.background = ' #e5e5e5 url(../images/btns/feature_ball-trans.png)';
		
	   	if (clicked.id == 'feature_right' && current < 5 ){ current++ ;}  
		if (clicked.id == 'feature_left' && current > 0 ){ current-- ;}	
		if (clicked.id == 'feature_right' && current == 5 ){ current = 1;}  
		if (clicked.id == 'feature_left' && current == 0 ){ current = 4 ;}
	   
	   	if (clicked.id == 'feature_01' || (clicked.id == 'feature_right' && current == 1) || (clicked.id == 'feature_left' && current == 1)){
				current = 1 ;
				feature01.style.visibility = 'visible';
				ball01.style.background = ' #76c7c6 url(../images/btns/feature_ball-trans.png)';
			  }
			  
		if (clicked.id == 'feature_02' || (clicked.id == 'feature_right' && current == 2) || (clicked.id == 'feature_left' && current == 2)){
				current = 2	;	  
				feature02.style.visibility = 'visible';
				ball02.style.background = ' #76c7c6 url(../images/btns/feature_ball-trans.png)';
			  }
			  
		if (clicked.id == 'feature_03' || (clicked.id == 'feature_right' && current == 3) || (clicked.id == 'feature_left' && current == 3)){
				current = 3	;  
				feature03.style.visibility = 'visible';
				ball03.style.background = ' #76c7c6 url(../images/btns/feature_ball-trans.png)';
			  }
			  
		if (clicked.id == 'feature_04' || (clicked.id == 'feature_right' && current == 4) || (clicked.id == 'feature_left' && current == 4)){
				current = 4	;		  
				feature04.style.visibility = 'visible';
				ball04.style.background = ' #76c7c6 url(../images/btns/feature_ball-trans.png)';
			  }
		}
		