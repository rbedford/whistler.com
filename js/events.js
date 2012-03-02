$(document).ready(function () {
       
		$('.disablePicker').toggle(function () {
			$(this).text('Enable').siblings('.hasDatepick').datepick('disable');
		},
		function () {
			$(this).text('Disable').siblings('.hasDatepick').datepicker('enable');
		});
		
        $(".edatepicker1").datepicker({
            numberOfMonths: 1,
            showAnim: "",
            showOn: 'focus',
            buttonImageOnly: true,
            defaultDate: +1,
            onSelect: function (selectedDate) {

                     calculateEDays();
            }
        });

        $(".edatepicker1").datepicker().val(add_to_today(1).toString()).trigger('change');
        $(".edatepicker2").datepicker({
            numberOfMonths: 1,
            showAnim: "",
            showOn: 'focus',
            buttonImageOnly: true,
            defaultDate: +1,
            onSelect: function (selectedDate) {
                    calculateEDays();
            }
        });
        $(".edatepicker2").datepicker().val(add_to_today(3).toString()).trigger('change');
		
		$("#search-events input, #search-events select").uniform();
   
});

function calculateEDays(FirstDate, SecondDate) {
	var StartDate = new Date();
	var EndDate = new Date();
	var msPerDay = (24 * 60 * 60 * 1000);
	StartDate.setTime(Date.parse($(".edatepicker1").val()));
	EndDate.setTime(Date.parse($(".edatepicker2").val()));
	var Nights = Math.round(Math.floor((EndDate - StartDate) / msPerDay));
	if (Nights < 0) {
		$(".edatepicker2").datepicker().val($(".edatepicker1").datepicker().val());
		//   calculateEDepartureDate();
	}
}

function calculateEDepartureDate() {
	var msPerDay = (24 * 60 * 60 * 1000);
	var NumberDays = 2;
	var StartDate = new Date();
	var EndDate = new Date();
	StartDate.setTime(Date.parse($(".edatepicker1").val()));
	EndDate.setTime(StartDate.getTime() + (msPerDay * NumberDays));
	EndDay = EndDate.getDate();
	EndMonth = EndDate.getMonth();
	EndYear = EndDate.getYear();
	if ((EndYear < 200) && (EndYear > 100)) var EndYear = EndYear + 1900;
	if (EndYear < 100) var EndYear = EndYear + 2000;
	if (EndMonth == 12) var EndMonth = 1;
	else var EndMonth = (EndMonth + 1);
	if (EndDay < 10) var EndDay = "0" + Number(EndDay);
	if (EndMonth < 10) var EndMonth = "0" + Number(EndMonth);
	if (EndMonth < 10) var EndMonth = "0" + Number(EndMonth);
	if ($(".edatepicker1").val() != "") {
		$(".edatepicker2").val(EndMonth + "/" + EndDay + "/" + EndYear);
	}
}

$(function () {

	// initialize scrollable
	$(".scrollable").scrollable();
	
	$("#event_preview ul li a").mouseover(function(){
		$("#event_preview ul li a p").removeClass("active");
		$(this).addClass("active");
	});
	
	$("#event_preview ul").mouseout(function(){
		$("#event_preview ul li a p:first").addClass("active");
	});
	
	//$("input, textarea, select").uniform();

});

function clickCal(d1) {
	hideResult();
	document.getElementById('c2_hidD1').value = d1;
	document.getElementById('c2_btnReview').click();    
}