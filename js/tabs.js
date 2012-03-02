// JavaScript Document

function tabs_visibility(id) {
	
       	var clicked = document.getElementById(id);		
		var hours = document.getElementById('hours_info');
		var tickets = document.getElementById('tickets_info');
		var status = document.getElementById('status_info');
		var food = document.getElementById('food_info');
		var parking = document.getElementById('parking_info');
		var gear = document.getElementById('gear_info');
			  	
		hours.style.visibility = 'hidden';
		tickets.style.visibility = 'hidden';
		status.style.visibility = 'hidden';
		food.style.visibility = 'hidden';
		parking.style.visibility = 'hidden';
		gear.style.visibility = 'hidden';
		document.write ("fesfsfas");
	   	if (clicked.id == 'hours'){
			hours.style.visibility = 'visible';
			
		}  




		