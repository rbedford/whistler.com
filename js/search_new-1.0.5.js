$(document).ready(function () {
    //     $("input, textarea, select, button").uniform();
    $("input:checkbox,input:radio, input:text, textarea, select").uniform();
});

var resetBuilder = function () {
    var builderContent = jQuery("#vacation_builder table[class*='booking']");
    builderContent.hide();

    var builderButtons = jQuery("#searchNav a");
    builderButtons.attr("class", "");
};



// new search start for accommodation
function search_start_new() {
    $('.disablePicker').toggle(function () {
        $(this).text('Enable').siblings('.hasDatepick').datepick('disable');
    },
                 function () {
                     $(this).text('Disable').siblings('.hasDatepick').datepicker('enable');
                 });

    hideChildren_new();

    $(".datepicker1").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_new();
        }
    });

    $(".datepicker1").datepicker().val(AddToTodaysDate_new1(1).toString()).trigger('change');
    $(".datepicker2").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDays_new();
        }
    });
    $(".datepicker2").datepicker().val(AddToTodaysDate_new1(2).toString()).trigger('change');
    $("#adults").val('2');
    $.uniform.update("#adults");
    $("#children").val('0');
    $.uniform.update("#children");




}
function calculateNumDays_new(FirstDate, SecondDate) {

    var StartDate = new Date();
    var EndDate = new Date();
    var NumberDays = $("#nights").val();
    var msPerDay = (24 * 60 * 60 * 1000);
    StartDate.setTime(Date.parse($("#arrival").val()));
    EndDate.setTime(Date.parse($("#departure").val()));
    var Nights = Math.round(Math.floor((EndDate - StartDate) / msPerDay));
    if (Nights < 1) {
        $("#nights").val("1");
        calculateDepartureDate_new();
    } else if (isNaN(Nights)) $("#nights").val("");
    else $("#nights").val(Nights);
}
function calculateDepartureDate_new() {

    var msPerDay = (24 * 60 * 60 * 1000);
    var NumberDays = $("#nights").val();
    var StartDate = new Date();
    var EndDate = new Date();
    StartDate.setTime(Date.parse($("#arrival").val()));
    if (isNaN(NumberDays)) alert("You must enter a number in the Nights field.");
    else {
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
        if ($("#arrival").val() != "") {
            $("#departure").val(EndMonth + "/" + EndDay + "/" + EndYear);
        }
    }
}

function hideChildren_new() {
    for (var i = 1; i <= 9; ++i) {
        $("#Child" + i + "Age").val('0');
        $.uniform.update("#Child" + i + "Age");
        $("#child" + i).hide();
    }
    $("#childAll").hide();

}
function showChildAges_new(ChildCount) {
    hideChildren_new();
    if (ChildCount > 0) {
        $("#childAll").show();
        for (var i = 1; i <= ChildCount; ++i) {
            $("#child" + i).show();
        }
    }
}


// new golf search
function search_start_golf_new() {
    $(".datepicker9").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDaysActivity_new();
        }


    });

    $(".datepicker9").datepicker().val(AddToTodaysDate_new2(1).toString()).trigger('change');
    $(".datepicker10").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDaysActivity_new();
        }


    });
    $(".datepicker10").datepicker().val(AddToTodaysDate_new2(1).toString()).trigger('change');
  //  var catid = jQuery('#acatid').val();
 //   jQuery('#selectActivity').val(catid);
}




// new transport search

function search_start_transport_new() {


    $(".datepicker3").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDaysActivity_new();
        }


    });

    $(".datepicker3").datepicker().val(AddToTodaysDate_new2(2).toString()).trigger('change');

    $(".datepicker4").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDaysActivity_new();
        }
    });

    $(".datepicker4").datepicker().val(AddToTodaysDate_new2(2).toString()).trigger('change');

    //     var catid = jQuery('#acatid').val();
    //     jQuery('#selectActivity').val(catid);
}
function calculateNumDaysActivity_new(FirstDate, SecondDate) {
    var StartDate = new Date();
    var EndDate = new Date();
    var msPerDay = (24 * 60 * 60 * 1000);
    StartDate.setTime(Date.parse($(".datepicker3").val()));
    EndDate.setTime(Date.parse($(".datepicker4").val()));
    var Nights = Math.round(Math.floor((EndDate - StartDate) / msPerDay));
    if (Nights < 1) {
        $(".datepicker4").val($(".datepicker3").val());
    }
}

// new activity search

function search_start_activity_new() {
    $(".datepicker5").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDaysActivity_new1();
        }


    });

    $(".datepicker5").datepicker().val(AddToTodaysDate_new2(2).toString()).trigger('change');
    $(".datepicker6").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDaysActivity_new1();
        }


    });
    $(".datepicker6").datepicker().val(AddToTodaysDate_new2(2).toString()).trigger('change');
    //     var catid = jQuery('#acatid').val();
    //     jQuery('#selectActivity').val(catid);
}
function calculateNumDaysActivity_new1(FirstDate, SecondDate) {
    var StartDate = new Date();
    var EndDate = new Date();
    var msPerDay = (24 * 60 * 60 * 1000);
    StartDate.setTime(Date.parse($(".datepicker5").val()));
    EndDate.setTime(Date.parse($(".datepicker6").val()));
    var Nights = Math.round(Math.floor((EndDate - StartDate) / msPerDay));
    if (Nights < 1) {
        $(".datepicker6").val($(".datepicker5").val());
    }
}

// new rental search

function search_start_rental_new() {
    $(".datepicker7").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDaysActivity_new2();
        }


    });

    $(".datepicker7").datepicker().val(AddToTodaysDate_new2(4).toString()).trigger('change');
    $(".datepicker8").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDaysActivity_new2();
        }


    });
    $(".datepicker8").datepicker().val(AddToTodaysDate_new2(4).toString()).trigger('change');
    //     var catid = jQuery('#acatid').val();
    //     jQuery('#selectActivity').val(catid);
}
function calculateNumDaysActivity_new2(FirstDate, SecondDate) {
    var StartDate = new Date();
    var EndDate = new Date();
    var msPerDay = (24 * 60 * 60 * 1000);
    StartDate.setTime(Date.parse($(".datepicker7").val()));
    EndDate.setTime(Date.parse($(".datepicker8").val()));
    var Nights = Math.round(Math.floor((EndDate - StartDate) / msPerDay));
    if (Nights < 1) {
        $(".datepicker8").val($(".datepicker7").val());
    }
}


function AddToTodaysDate_new1(AddDays) {
    var d = new Date();
    d.setDate(d.getDate() + AddDays);
    var num_month = (d.getMonth() + 1);
    var day = d.getDate();
    var mon = num_month;
    var mm = mon < 10 ? '0' + mon : mon;
    var dd = day < 10 ? '0' + day : day;
    $("#nights").val(AddDays - 1);
    return mm.toString() + '/' + dd.toString() + '/' + d.getFullYear().toString();
}
function AddToTodaysDate_new2(AddDays) {
    var d = new Date();
    d.setDate(d.getDate() + AddDays);
    var num_month = (d.getMonth() + 1);
    var day = d.getDate();
    var mon = num_month;
    var mm = mon < 10 ? '0' + mon : mon;
    var dd = day < 10 ? '0' + day : day;

    return mm.toString() + '/' + dd.toString() + '/' + d.getFullYear().toString();
}
// flights
function flight_start_new() {



    $(".adatepicker1").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateAirDays();
        }



    });

    $(".adatepicker1").datepicker().val(AddToTodaysDate_new2(2).toString()).trigger('change');
    $(".adatepicker2").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateAirDays();
        }



    });
    $(".adatepicker2").datepicker().val(AddToTodaysDate_new2(4).toString()).trigger('change');
    $("#aadult").val('2');
    $.uniform.update("#aadult");
    $("#achild").val('0');
    $.uniform.update("#achild");



}
function calculateAirDays(FirstDate, SecondDate) {

    var StartDate = new Date();
    var EndDate = new Date();
    var msPerDay = (24 * 60 * 60 * 1000);
    StartDate.setTime(Date.parse($(".adatepicker1").val()));
    EndDate.setTime(Date.parse($(".adatepicker2").val()));
    var Nights = Math.round(Math.floor((EndDate - StartDate) / msPerDay));
    if (Nights < 0) {
        calculateADepartureDate();
    }



}
function calculateADepartureDate() {
    var msPerDay = (24 * 60 * 60 * 1000);
    var NumberDays = 2;
    var StartDate = new Date();
    var EndDate = new Date();
    StartDate.setTime(Date.parse($(".adatepicker1").val()));
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
    if ($(".adatepicker1").val() != "") {
        $(".adatepicker2").val(EndMonth + "/" + EndDay + "/" + EndYear);
    }

}


function openSearch1() {

    var arrival = jQuery('#arrival').val();
    var path = window.location.pathname;
    var dep = jQuery('#departure').val();
    var persons = jQuery('#adults').val();
    var nights = jQuery('#nights').val();
    var a = new Date(arrival);
    a.setDate(a.getDate() + parseInt(nights));
    var mm1 = a.getMonth() + 1;
    var dd1 = a.getDate();
    var yy1 = a.getFullYear();
    var dep = mm1 + "/" + dd1 + "/" + yy1;
    var iChildCount = $('#children').val();
    var url;
    if (iChildCount == 0) {
        url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&ganights=' + nights +
                '&adultcount=' + persons;
    }
    else {

        url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
                '&ganights=' + nights +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray_new(iChildCount);
    }
    //    _gaq.push(['_link', url]);
    _gaq.push(['_trackEvent', 'search main accomm', path, 'search'], ['_link', url]);


}
function CreateChildArray_new(iChildCount) {
    var strChildArray = "";

    for (var i = 1; i <= iChildCount; ++i) {
        if (i < iChildCount) {
            strChildArray = strChildArray + $("#Child" + i + "Age").val() + ",";
        }
        else {
            strChildArray = strChildArray + $("#Child" + i + "Age").val();
        }
    }
    return strChildArray;
}

function openSearchActivity2_new() {
    // transport - supercatid 3
    var path = window.location.pathname;
    var arrival = jQuery('#arrival1').val();
    var catid = jQuery('#selectTransport').val();
    var code = jQuery('#selectTransport option:selected').text();
    var url;
    var dep = jQuery('#departure1').val();
    if (catid == "-1") {
        url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                    '&departuredate=' + dep +
                    '&productsupercategoryid=3';
    }
    else {
        url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                    '&departuredate=' + dep +
                    '&productcategoryid=' + catid +
                    '&productsupercategoryid=3';
    }

    //   _gaq.push(['_link', url]);
    _gaq.push(['_trackEvent', 'search main transfer', path, code], ['_link', url]);
}
function openSearchFlight_new() {
    if (jQuery('#hidAirport').val() == "") {
        alert('Departure Airport invalid - select airport from autocomplete list.');
        jQuery('#aarr').val("")
    }
    else {
        var path = window.location.pathname;
        var airname = jQuery('#adep').val();
        var arr = jQuery('#arrival2').val();
        var dep = jQuery('#departure2').val();
        var air1 = jQuery('#hidAirport').val();
        var air2 = jQuery('#aarr').val();
        var adults = jQuery('#aadult').val();
        var child = jQuery('#achild').val();

        var url;
        url = 'http://inntopia.travel/aspnet/09/air_availability.aspx?language=EN&salesid=1321967&search=1&private=1&published=1' +
'&startdt=' + arr +
'&enddt=' + dep +
'&startpt=' + air1 +
'&endpt=' + air2 +
'&numseats=' + adults +
'&numchildseats=' + child;


        //        _gaq.push(['_trackEvent', 'air', 'search', airname],['_link', url]);
        _gaq.push(['_trackEvent', 'search main flight', path, airname], ['_link', url]);
    }


}
function openSearchActivity1_new() {
    // activity - supercatid 2
    var arrival = jQuery('#arrival3').val();
    var catid = jQuery('#selectActivity').val();
    var path = window.location.pathname;
    var code = jQuery('#selectActivity option:selected').text();
    var url;
    var dep = jQuery('#departure3').val();
    if (catid == "-1") {
        url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                    '&departuredate=' + dep +
                    '&productsupercategoryid=2';
    }
    else {
        url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                    '&departuredate=' + dep +
                    '&productcategoryid=' + catid +
                    '&productsupercategoryid=2';
    }

    //  _gaq.push(['_link', url]);
    _gaq.push(['_trackEvent', 'search main activity', path, code], ['_link', url]);

}
function openSearchGolf_new() {
    var arrival = jQuery('#arrivalGolf').val();
    var catid = jQuery('#selectGolf').val();
    var dep = jQuery('#departureGolf').val();
    var path = window.location.pathname;
    var code = jQuery('#selectGolf option:selected').text();
    var time = jQuery('#selectTime').val();

 
    var url;

    if (catid == "0") {
        if (time == "-1") {
            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?productsupercategoryid=5&salesid=1321967&productcategoryid=137&quantity=2' +
        '&arrivaldate=' + arrival +
        '&departuredate=' + dep;
        }
        else {
            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?productsupercategoryid=5&salesid=1321967&productcategoryid=137&quantity=2' +
        '&arrivaldate=' + arrival +
        '&departuredate=' + dep +
        '&arrivaltime=' + time;
        }
    }
    else {
        if (time == "-1") {
            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?productsupercategoryid=5&salesid=1321967&productcategoryid=137&quantity=2' +
        '&supplierid=' + catid +
        '&arrivaldate=' + arrival +
        '&departuredate=' + dep;
        }
        else {
            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?productsupercategoryid=5&salesid=1321967&productcategoryid=137&quantity=2' +
        '&supplierid=' + catid +
        '&arrivaldate=' + arrival +
        '&departuredate=' + dep +
        '&arrivaltime=' + time;
        }
    }
    //_gaq.push(['_link', url]);
    //  _gaq.push(['_trackEvent', 'rental', 'search', path], ['_link', url]);
    //  _gaq.push(['_trackEvent', 'search main golf’, path, course]
  
    _gaq.push(['_trackEvent', 'search main golf', path, code], ['_link', url]);
}

function openSearchActivity3_new() {
    // rental - supercatid 6
    var arrival = jQuery('#arrival4').val();
    var catid = jQuery('#selectRental').val();
    var path = window.location.pathname;
    var url;
    var dep = jQuery('#departure4').val();
    var code = jQuery('#selectRental option:selected').text();
    if (catid == "-1") {
        url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                     '&departuredate=' + dep +
                    '&productsupercategoryid=6';
    }
    else {
        url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                     '&departuredate=' + dep +
                    '&productcategoryid=' + catid +
                    '&productsupercategoryid=6';
    }

    //   _gaq.push(['_link', url]);
    _gaq.push(['_trackEvent', 'search main rental', path, code], ['_link', url]);
}
function flight_auto() {
    //     $.uniform.restore("#adep");
    var airports = [
{ label: "Kabul Afghanistan KBL", value: "KBL" },
{ label: "Tirana Albania TIA", value: "TIA" },
{ label: "Algiers Algeria ALG", value: "ALG" },
{ label: "Annaba Algeria AAE", value: "AAE" },
{ label: "Pago Pago, Tutuila American Samoa PPG", value: "PPG" },
{ label: "Benguela Angola BUG", value: "BUG" },
{ label: "Luanda Angola LAD", value: "LAD" },
{ label: "The Valley Anguilla AXA", value: "AXA" },
{ label: "St. John's Antigua ANU", value: "ANU" },
{ label: "Buenos Aires Argentina EZE", value: "EZE" },
{ label: "Cordoba Argentina COR", value: "COR" },
{ label: "El Calafate Argentina FTE", value: "FTE" },
{ label: "Mendoza Argentina MDZ", value: "MDZ" },
{ label: "San Carlos de Bariloche Argentina BRC", value: "BRC" },
{ label: "Santa Rosa Argentina RSA", value: "RSA" },
{ label: "Ushuaia, Tierra del Fuego Argentina USH", value: "USH" },
{ label: "Yerevan Armenia EVN", value: "EVN" },
{ label: "Oranjestad Aruba AUA", value: "AUA" },
{ label: "Adelaide, S.A. Australia ADL", value: "ADL" },
{ label: "Albury, N.S.W. Australia ABX", value: "ABX" },
{ label: "Alice Springs, N.T. Australia ASP", value: "ASP" },
{ label: "Armidale, N.S.W. Australia ARM", value: "ARM" },
{ label: "Ayers Rock, N.T. Australia AYQ", value: "AYQ" },
{ label: "Ballina, N.S.W. Australia BNK", value: "BNK" },
{ label: "Bathurst, N.S.W. Australia BHS", value: "BHS" },
{ label: "Brisbane, Qld. Australia BNE", value: "BNE" },
{ label: "Broken Hill, N.S.W. Australia BHQ", value: "BHQ" },
{ label: "Broome, W.A. Australia BME", value: "BME" },
{ label: "Bundaberg, Qld. Australia BDB", value: "BDB" },
{ label: "Cairns, Qld. Australia CNS", value: "CNS" },
{ label: "Canberra, A.C.T. Australia CBR", value: "CBR" },
{ label: "Ceduna, S.A. Australia CED", value: "CED" },
{ label: "Charleville, Qld. Australia CTL", value: "CTL" },
{ label: "Coffs Harbour, N.S.W. Australia CFS", value: "CFS" },
{ label: "Coober Pedy, S.A. Australia CPD", value: "CPD" },
{ label: "Darwin, N.T. Australia DRW", value: "DRW" },
{ label: "Devonport, Tas. Australia DPO", value: "DPO" },
{ label: "Dubbo, N.S.W. Australia DBO", value: "DBO" },
{ label: "Emerald, Qld. Australia EMD", value: "EMD" },
{ label: "Gladstone, Qld. Australia GLT", value: "GLT" },
{ label: "Gold Coast, Qld. Australia OOL", value: "OOL" },
{ label: "Gove, N.T. Australia GOV", value: "GOV" },
{ label: "Griffith, N.S.W. Australia GFF", value: "GFF" },
{ label: "Hamilton Island, Whitsunday Island, Qld. Australia HTI", value: "HTI" },
{ label: "Hobart, Tas. Australia HBA", value: "HBA" },
{ label: "Horn Island, Qld. Australia HID", value: "HID" },
{ label: "Kalgoorlie, W.A. Australia KGI", value: "KGI" },
{ label: "Karratha, W.A. Australia KTA", value: "KTA" },
{ label: "Kingscote, Kangaroo Island, S.A. Australia KGC", value: "KGC" },
{ label: "Launceston, Tas. Australia LST", value: "LST" },
{ label: "Longreach, Qld. Australia LRE", value: "LRE" },
{ label: "Mackay, Qld. Australia MKY", value: "MKY" },
{ label: "Maroochydore, Qld. Australia MCY", value: "MCY" },
{ label: "Melbourne, Vic. Australia AVV", value: "AVV" },
{ label: "Melbourne, Vic. Australia MEL", value: "MEL" },
{ label: "Merimbula, N.S.W. Australia MIM", value: "MIM" },
{ label: "Mildura, Vic. Australia MQL", value: "MQL" },
{ label: "Moree, N.S.W. Australia MRZ", value: "MRZ" },
{ label: "Moruya, N.S.W. Australia MYA", value: "MYA" },
{ label: "Mount Gambier, S.A. Australia MGB", value: "MGB" },
{ label: "Mount Isa, Qld. Australia ISA", value: "ISA" },
{ label: "Narrabri, N.S.W. Australia NAA", value: "NAA" },
{ label: "Narrandera, N.S.W. Australia NRA", value: "NRA" },
{ label: "Newcastle, N.S.W. Australia NTL", value: "NTL" },
{ label: "Newman, W.A. Australia ZNE", value: "ZNE" },
{ label: "Olympic Dam, S.A. Australia OLP", value: "OLP" },
{ label: "Orange, N.S.W. Australia OAG", value: "OAG" },
{ label: "Paraburdoo, W.A. Australia PBO", value: "PBO" },
{ label: "Parkes, N.S.W. Australia PKE", value: "PKE" },
{ label: "Perth, W.A. Australia PER", value: "PER" },
{ label: "Port Hedland, W.A. Australia PHE", value: "PHE" },
{ label: "Port Lincoln, S.A. Australia PLO", value: "PLO" },
{ label: "Port Macquarie, N.S.W. Australia PQQ", value: "PQQ" },
{ label: "Portland, Vic. Australia PTJ", value: "PTJ" },
{ label: "Proserpine, Qld. Australia PPP", value: "PPP" },
{ label: "Rockhampton, Qld. Australia ROK", value: "ROK" },
{ label: "Roma, Qld. Australia RMA", value: "RMA" },
{ label: "Sydney, N.S.W. Australia SYD", value: "SYD" },
{ label: "Tamworth, N.S.W. Australia TMW", value: "TMW" },
{ label: "Townsville, Qld. Australia TSV", value: "TSV" },
{ label: "Wagga-Wagga, N.S.W. Australia WGA", value: "WGA" },
{ label: "Weipa, Qld. Australia WEI", value: "WEI" },
{ label: "Whyalla, S.A. Australia WYA", value: "WYA" },
{ label: "Graz Austria GRZ", value: "GRZ" },
{ label: "Innsbruck Austria INN", value: "INN" },
{ label: "Klagenfurt Austria KLU", value: "KLU" },
{ label: "Linz Austria LNZ", value: "LNZ" },
{ label: "Salzburg Austria SZG", value: "SZG" },
{ label: "Vienna Austria VIE", value: "VIE" },
{ label: "Baku Azerbaijan BAK", value: "BAK" },
{ label: "Baku Azerbaijan GYD", value: "GYD" },
{ label: "Angra do Heroismo, Terceira Island Azores TER", value: "TER" },
{ label: "Ponta Delgada, Sao Miguel Island Azores PDL", value: "PDL" },
{ label: "Alice Town, North Bimini Island Bahamas NSB", value: "NSB" },
{ label: "Andros Town Bahamas ASD", value: "ASD" },
{ label: "Cockburn Town, San Salvador Island Bahamas ZSA", value: "ZSA" },
{ label: "Deadmans Cay, Long Island Bahamas LGI", value: "LGI" },
{ label: "Freeport, Grand Bahama Island Bahamas FPO", value: "FPO" },
{ label: "George Town, Great Exuma Island Bahamas GGT", value: "GGT" },
{ label: "Governor's Harbour, Eleuthera Island Bahamas GHB", value: "GHB" },
{ label: "Mangrove Cay, Andros Island Bahamas MAY", value: "MAY" },
{ label: "Marsh Harbour, Abaco Island Bahamas MHH", value: "MHH" },
{ label: "Nassau Bahamas NAS", value: "NAS" },
{ label: "Nassau Bahamas PID", value: "PID" },
{ label: "North Eleuthera Bahamas ELH", value: "ELH" },
{ label: "Rock Sound Bahamas RSD", value: "RSD" },
{ label: "San Andros Bahamas SAQ", value: "SAQ" },
{ label: "South Andros Bahamas TZN", value: "TZN" },
{ label: "Stella Maris, Long Island Bahamas SML", value: "SML" },
{ label: "Treasure Cay, Abaco Island Bahamas TCB", value: "TCB" },
{ label: "Manama Bahrain BAH", value: "BAH" },
{ label: "Barisal Bangladesh BZL", value: "BZL" },
{ label: "Dhaka Bangladesh DAC", value: "DAC" },
{ label: "Bridgetown Barbados BGI", value: "BGI" },
{ label: "Minsk Belarus MHP", value: "MHP" },
{ label: "Minsk Belarus MSQ", value: "MSQ" },
{ label: "Antwerp Belgium ANR", value: "ANR" },
{ label: "Brussels Belgium BRU", value: "BRU" },
{ label: "Belize City Belize BZE", value: "BZE" },
{ label: "Dangriga Belize DGA", value: "DGA" },
{ label: "Placencia Belize PLJ", value: "PLJ" },
{ label: "Punta Gorda Belize PND", value: "PND" },
{ label: "Hamilton Bermuda BDA", value: "BDA" },
{ label: "La Paz Bolivia LPB", value: "LPB" },
{ label: "Kralendijk Bonaire BON", value: "BON" },
{ label: "Sarajevo Bosnia and Herzegovina SJJ", value: "SJJ" },
{ label: "Bauru Brazil BAU", value: "BAU" },
{ label: "Belem Brazil BEL", value: "BEL" },
{ label: "Belo Horizonte Brazil CNF", value: "CNF" },
{ label: "Brasilia Brazil BSB", value: "BSB" },
{ label: "Curitiba Brazil CWB", value: "CWB" },
{ label: "Fernando de Noronha Brazil FEN", value: "FEN" },
{ label: "Manaus Brazil MAO", value: "MAO" },
{ label: "Marilia Brazil MII", value: "MII" },
{ label: "Palmas Brazil PMW", value: "PMW" },
{ label: "Porto Alegre Brazil POA", value: "POA" },
{ label: "Recife Brazil REC", value: "REC" },
{ label: "Rio de Janeiro Brazil GIG", value: "GIG" },
{ label: "Rio de Janeiro Brazil RIO - All Airports", value: "RIO" },
{ label: "Rio de Janeiro Brazil SDU", value: "SDU" },
{ label: "Salvador Brazil SSA", value: "SSA" },
{ label: "Sao Jose So Rio Preto Brazil SJP", value: "SJP" },
{ label: "Sao Paulo Brazil CGH", value: "CGH" },
{ label: "Sao Paulo Brazil GRU", value: "GRU" },
{ label: "Sao Paulo Brazil SAO - All Airports", value: "SAO" },
{ label: "Una Brazil UNA", value: "UNA" },
{ label: "Beef Island, Tortola British Virgin Islands EIS", value: "EIS" },
{ label: "Bandar Seri Begawan Brunei BWN", value: "BWN" },
{ label: "Sofia Bulgaria SOF", value: "SOF" },
{ label: "Varna Bulgaria VAR", value: "VAR" },
{ label: "Ouagadougou Burkina Faso OUA", value: "OUA" },
{ label: "Bujumbura Burundi BJM", value: "BJM" },
{ label: "Phnom Penh Cambodia PNH", value: "PNH" },
{ label: "Douala Cameroon DLA", value: "DLA" },
{ label: "Yaounde Cameroon NSI", value: "NSI" },
{ label: "Yaounde Cameroon YAO", value: "YAO" },
{ label: "Abbotsford, BC Canada YXX", value: "YXX" },
{ label: "Anahim Lake, BC Canada YAA", value: "YAA" },
{ label: "Arviat, NWT Canada YEK", value: "YEK" },
{ label: "Bagotville, PQ Canada YBG", value: "YBG" },
{ label: "Baie-Comeau, PQ Canada YBC", value: "YBC" },
{ label: "Calgary, AB Canada YYC", value: "YYC" },
{ label: "Campbell River, BC Canada YBL", value: "YBL" },
{ label: "Cap-aux-Meules, Magdalens Islands, PQ Canada YGR", value: "YGR" },
{ label: "Castlegar, BC Canada YCG", value: "YCG" },
{ label: "Charlottetown, PEI Canada YYG", value: "YYG" },
{ label: "Chibougamau, PQ Canada YMT", value: "YMT" },
{ label: "Churchill, MB Canada YYQ", value: "YYQ" },
{ label: "Cranbrook, BC Canada YXC", value: "YXC" },
{ label: "Deer Lake, NF Canada YDF", value: "YDF" },
{ label: "Dryden, ON Canada YHD", value: "YHD" },
{ label: "Edmonton, AB Canada YEG", value: "YEG" },
{ label: "Flin Flon, MB Canada YFO", value: "YFO" },
{ label: "Fort McMurray, AB Canada YMM", value: "YMM" },
{ label: "Fort Nelson, BC Canada YYE", value: "YYE" },
{ label: "Fort Saint John, BC Canada YXJ", value: "YXJ" },
{ label: "Fort Smith, NWT Canada YSM", value: "YSM" },
{ label: "Fredericton, NB Canada YFC", value: "YFC" },
{ label: "Gander, NF Canada YQX", value: "YQX" },
{ label: "Gaspe, PQ Canada YGP", value: "YGP" },
{ label: "Grande Prairie, AB Canada YQU", value: "YQU" },
{ label: "Halifax, NS Canada YHZ", value: "YHZ" },
{ label: "Hamilton, ON Canada YHM", value: "YHM" },
{ label: "Iqaluit, Nunavut Canada YFB", value: "YFB" },
{ label: "Kamloops, BC Canada YKA", value: "YKA" },
{ label: "Kelowna, BC Canada YLW", value: "YLW" },
{ label: "Kenora, ON Canada YQK", value: "YQK" },
{ label: "Kingston, ON Canada YGK", value: "YGK" },
{ label: "Lethbridge, AB Canada YQL", value: "YQL" },
{ label: "London, ON Canada YXU", value: "YXU" },
{ label: "Medicine Hat, AB Canada YXH", value: "YXH" },
{ label: "Moncton, NB Canada YQM", value: "YQM" },
{ label: "Mont-Joli, PQ Canada YYY", value: "YYY" },
{ label: "Montreal, PQ Canada YMQ - All Airports", value: "YMQ" },
{ label: "Montreal, PQ Canada YUL", value: "YUL" },
{ label: "Nanaimo, BC Canada YCD", value: "YCD" },
{ label: "North Bay, ON Canada YYB", value: "YYB" },
{ label: "Ottawa, ON Canada YOW", value: "YOW" },
{ label: "Penticton, BC Canada YYF", value: "YYF" },
{ label: "Port Hardy, BC Canada YZT", value: "YZT" },
{ label: "Powell River, BC Canada YPW", value: "YPW" },
{ label: "Prince George, BC Canada YXS", value: "YXS" },
{ label: "Prince Rupert, BC Canada YPR", value: "YPR" },
{ label: "Quebec, PQ Canada YQB", value: "YQB" },
{ label: "Quesnel, BC Canada YQZ", value: "YQZ" },
{ label: "Rankin Inlet, NWT Canada YRT", value: "YRT" },
{ label: "Red Lake, ON Canada YRL", value: "YRL" },
{ label: "Regina, SK Canada YQR", value: "YQR" },
{ label: "Roberval, PQ Canada YRJ", value: "YRJ" },
{ label: "Rouyn-Noranda, PQ Canada YUY", value: "YUY" },
{ label: "Saint John, NB Canada YSJ", value: "YSJ" },
{ label: "Sandspit, Queen Charlotte Islands, BC Canada YZP", value: "YZP" },
{ label: "Sarnia, ON Canada YZR", value: "YZR" },
{ label: "Saskatoon, SK Canada YXE", value: "YXE" },
{ label: "Sault Ste. Marie, ON Canada YAM", value: "YAM" },
{ label: "Sept-Iles, PQ Canada YZV", value: "YZV" },
{ label: "Sioux Lookout, ON Canada YXL", value: "YXL" },
{ label: "Smithers, BC Canada YYD", value: "YYD" },
{ label: "St. John's, NF Canada YYT", value: "YYT" },
{ label: "Sudbury, ON Canada YSB", value: "YSB" },
{ label: "Sydney, Cape Breton Island, NS Canada YQY", value: "YQY" },
{ label: "Terrace, BC Canada YXT", value: "YXT" },
{ label: "Thompson, MB Canada YTH", value: "YTH" },
{ label: "Thunder Bay, ON Canada YQT", value: "YQT" },
{ label: "Timmins, ON Canada YTS", value: "YTS" },
{ label: "Toronto, ON Canada YTO - All Airports", value: "YTO" },
{ label: "Toronto, ON Canada YTZ", value: "YTZ" },
{ label: "Toronto, ON Canada YYZ", value: "YYZ" },
{ label: "Val-d'Or, PQ Canada YVO", value: "YVO" },
{ label: "Vancouver, BC Canada YVR", value: "YVR" },
{ label: "Victoria, BC Canada YYJ", value: "YYJ" },
{ label: "Wabush, Labrador, NF Canada YWK", value: "YWK" },
{ label: "Whitehorse, YT Canada YXY", value: "YXY" },
{ label: "Williams Lake, BC Canada YWL", value: "YWL" },
{ label: "Windsor, ON Canada YQG", value: "YQG" },
{ label: "Winnipeg, MB Canada YWG", value: "YWG" },
{ label: "Yellowknife, NWT Canada YZF", value: "YZF" },
{ label: "Arrecife, Lanzarote Island Canary Islands ACE", value: "ACE" },
{ label: "Las Palmas, Grand Canary Island Canary Islands LPA", value: "LPA" },
{ label: "Puerto del Rosario, Fuerteventura Island Canary Islands FUE", value: "FUE" },
{ label: "Santa Cruz de Tenerife Canary Islands TFN", value: "TFN" },
{ label: "Tenerife Island Canary Islands TCI - All Airports", value: "TCI" },
{ label: "Tenerife Island Canary Islands TFS", value: "TFS" },
{ label: "Tenerife Island Canary Islands TVI - All Airports", value: "TVI" },
{ label: "Santa Maria, Sal Island Cape Verde SID", value: "SID" },
{ label: "Cayman Brac Cayman Islands CYB", value: "CYB" },
{ label: "Georgetown, Grand Cayman Island Cayman Islands GCM", value: "GCM" },
{ label: "Bangui Central African Republic BGF", value: "BGF" },
{ label: "N'Djamena Chad NDJ", value: "NDJ" },
{ label: "Guernsey Channel Islands GCI", value: "GCI" },
{ label: "Jersey Channel Islands JER", value: "JER" },
{ label: "Antofagasta Chile ANF", value: "ANF" },
{ label: "Arica Chile ARI", value: "ARI" },
{ label: "Balmaceda Chile BBA", value: "BBA" },
{ label: "Concepcion Chile CCP", value: "CCP" },
{ label: "Copiapo Chile CPO", value: "CPO" },
{ label: "El Salvador Chile ESR", value: "ESR" },
{ label: "Hanga Roa, Easter Island Chile IPC", value: "IPC" },
{ label: "La Serena Chile LSC", value: "LSC" },
{ label: "Osorno Chile ZOS", value: "ZOS" },
{ label: "Pucon Chile ZPC", value: "ZPC" },
{ label: "Puerto Montt Chile PMC", value: "PMC" },
{ label: "Punta Arenas, Tierra del Fuego Chile PUQ", value: "PUQ" },
{ label: "Santiago Chile SCL", value: "SCL" },
{ label: "Temuco Chile ZCO", value: "ZCO" },
{ label: "Valdivia Chile ZAL", value: "ZAL" },
{ label: "Bangda China BPX", value: "BPX" },
{ label: "Beijing China BJS", value: "BJS" },
{ label: "Changchun China CGQ", value: "CGQ" },
{ label: "Changsha China CSX", value: "CSX" },
{ label: "Chengdu China CTU", value: "CTU" },
{ label: "Chongqing China CKG", value: "CKG" },
{ label: "Dali City China DLU", value: "DLU" },
{ label: "Dalian China DLC", value: "DLC" },
{ label: "Dayong China DYG", value: "DYG" },
{ label: "Fuzhou China FOC", value: "FOC" },
{ label: "Guangzhou China CAN", value: "CAN" },
{ label: "Guilin China KWL", value: "KWL" },
{ label: "Haikou, Hainan Island China HAK", value: "HAK" },
{ label: "Hailar China HLD", value: "HLD" },
{ label: "Hangzhou China HGH", value: "HGH" },
{ label: "Harbin China HRB", value: "HRB" },
{ label: "Hefei China HFE", value: "HFE" },
{ label: "Hohhot China HET", value: "HET" },
{ label: "Hong Kong China HKG", value: "HKG" },
{ label: "Jiamusi China JMU", value: "JMU" },
{ label: "Kashi China KHG", value: "KHG" },
{ label: "Kunming China KMG", value: "KMG" },
{ label: "Lanzhou China LHW", value: "LHW" },
{ label: "Lhasa, Tibet China LXA", value: "LXA" },
{ label: "Lijiang City China LJG", value: "LJG" },
{ label: "Lincang China LNJ", value: "LNJ" },
{ label: "Mian Yang China MIG", value: "MIG" },
{ label: "Mudanjiang China MDG", value: "MDG" },
{ label: "Nanchang China KHN", value: "KHN" },
{ label: "Nanjing China NKG", value: "NKG" },
{ label: "Nanning China NNG", value: "NNG" },
{ label: "Ningbo China NGB", value: "NGB" },
{ label: "Qingdao China TAO", value: "TAO" },
{ label: "Sanya China SYX", value: "SYX" },
{ label: "Shanghai China PVG", value: "PVG" },
{ label: "Shanghai China SHA", value: "SHA" },
{ label: "Shantou China SWA", value: "SWA" },
{ label: "Shenyang China SHE", value: "SHE" },
{ label: "Shenzhen China SZX", value: "SZX" },
{ label: "Shijiazhuang China SJW", value: "SJW" },
{ label: "Songpan Jiuzhai Huanglong China JZH", value: "JZH" },
{ label: "Taiyuan China TYN", value: "TYN" },
{ label: "Tianjin China TSN", value: "TSN" },
{ label: "Tongren China TEN", value: "TEN" },
{ label: "Urumqi, Sinkiang China URC", value: "URC" },
{ label: "Wuhan China WUH", value: "WUH" },
{ label: "Xi'an China XIY", value: "XIY" },
{ label: "Xiamen China XMN", value: "XMN" },
{ label: "Xichang China XIC", value: "XIC" },
{ label: "Yanji China YNJ", value: "YNJ" },
{ label: "Yantai China YNT", value: "YNT" },
{ label: "Zhengzhou China CGO", value: "CGO" },
{ label: "Zhoushan China HSN", value: "HSN" },
{ label: "Barranquilla Colombia BAQ", value: "BAQ" },
{ label: "Bogota Colombia BOG", value: "BOG" },
{ label: "Cali Colombia CLO", value: "CLO" },
{ label: "Cartagena Colombia CTG", value: "CTG" },
{ label: "Medellin Colombia MDE", value: "MDE" },
{ label: "San Andres Colombia ADZ", value: "ADZ" },
{ label: "Moroni Comoro Islands HAH", value: "HAH" },
{ label: "Brazzaville Congo BZV", value: "BZV" },
{ label: "Avarua, Rarotonga Island Cook Islands RAR", value: "RAR" },
{ label: "Liberia Costa Rica LIR", value: "LIR" },
{ label: "San Jose Costa Rica SJO", value: "SJO" },
{ label: "Dubrovnik Croatia DBV", value: "DBV" },
{ label: "Split Croatia SPU", value: "SPU" },
{ label: "Zadar Croatia ZAD", value: "ZAD" },
{ label: "Zagreb Croatia ZAG", value: "ZAG" },
{ label: "Havana Cuba HAV", value: "HAV" },
{ label: "Willemstad Curacao CUR", value: "CUR" },
{ label: "Larnaca Cyprus LCA", value: "LCA" },
{ label: "Paphos Cyprus PFO", value: "PFO" },
{ label: "Ostrava Czech Republic OSR", value: "OSR" },
{ label: "Prague Czech Republic PRG", value: "PRG" },
{ label: "Aalborg Denmark AAL", value: "AAL" },
{ label: "Aarhus Denmark AAR", value: "AAR" },
{ label: "Billund Denmark BLL", value: "BLL" },
{ label: "Copenhagen Denmark CPH", value: "CPH" },
{ label: "Esbjerg Denmark EBJ", value: "EBJ" },
{ label: "Karup Denmark KRP", value: "KRP" },
{ label: "Ronne Denmark RNN", value: "RNN" },
{ label: "Sonderborg Denmark SGD", value: "SGD" },
{ label: "Djibouti Djibouti JIB", value: "JIB" },
{ label: "Roseau Dominica DOM", value: "DOM" },
{ label: "La Romana Dominican Republic LRM", value: "LRM" },
{ label: "Puerto Plata Dominican Republic POP", value: "POP" },
{ label: "Punta Cana Dominican Republic PUJ", value: "PUJ" },
{ label: "Santiago Dominican Republic STI", value: "STI" },
{ label: "Santo Domingo Dominican Republic SDQ", value: "SDQ" },
{ label: "Guayaquil Ecuador GYE", value: "GYE" },
{ label: "Quito Ecuador UIO", value: "UIO" },
{ label: "Alexandria Egypt ALY", value: "ALY" },
{ label: "Alexandria Egypt HBE", value: "HBE" },
{ label: "Aswan Egypt ASW", value: "ASW" },
{ label: "Cairo Egypt CAI", value: "CAI" },
{ label: "Hurghada Egypt HRG", value: "HRG" },
{ label: "Luxor Egypt LXR", value: "LXR" },
{ label: "Sharm El Sheikh Egypt SSH", value: "SSH" },
{ label: "Taba Egypt TCP", value: "TCP" },
{ label: "San Salvador El Salvador SAL", value: "SAL" },
{ label: "Birmingham England BHX", value: "BHX" },
{ label: "Bristol England BRS", value: "BRS" },
{ label: "Doncaster England DSA", value: "DSA" },
{ label: "East Midlands England EMA", value: "EMA" },
{ label: "Humberside England HUY", value: "HUY" },
{ label: "Leeds England LBA", value: "LBA" },
{ label: "Liverpool England LPL", value: "LPL" },
{ label: "London England LCY", value: "LCY" },
{ label: "London England LGW", value: "LGW" },
{ label: "London England LHR", value: "LHR" },
{ label: "London England LON - All Airports", value: "LON" },
{ label: "London England STN", value: "STN" },
{ label: "Luton England LTN", value: "LTN" },
{ label: "Manchester England MAN", value: "MAN" },
{ label: "Newcastle England NCL", value: "NCL" },
{ label: "Norwich England NWI", value: "NWI" },
{ label: "Southampton England SOU", value: "SOU" },
{ label: "Teesside England MME", value: "MME" },
{ label: "Malabo, Bioko Island Equatorial Guinea SSG", value: "SSG" },
{ label: "Asmara Eritrea ASM", value: "ASM" },
{ label: "Tallinn Estonia TLL", value: "TLL" },
{ label: "Addis Ababa Ethiopia ADD", value: "ADD" },
{ label: "Jijiga Ethiopia JIJ", value: "JIJ" },
{ label: "Nadi Fiji NAN", value: "NAN" },
{ label: "Suva Fiji SUV", value: "SUV" },
{ label: "Helsinki Finland HEL", value: "HEL" },
{ label: "Ivalo Finland IVL", value: "IVL" },
{ label: "Joensuu Finland JOE", value: "JOE" },
{ label: "Jyvaskyla Finland JYV", value: "JYV" },
{ label: "Kajaani Finland KAJ", value: "KAJ" },
{ label: "Kittila Finland KTT", value: "KTT" },
{ label: "Kokkola Finland KOK", value: "KOK" },
{ label: "Kuopio Finland KUO", value: "KUO" },
{ label: "Mariehamn, Aland Finland MHQ", value: "MHQ" },
{ label: "Oulu Finland OUL", value: "OUL" },
{ label: "Rovaniemi Finland RVN", value: "RVN" },
{ label: "Tampere Finland TMP", value: "TMP" },
{ label: "Turku Finland TKU", value: "TKU" },
{ label: "Vaasa Finland VAA", value: "VAA" },
{ label: "Ajaccio, Corsica France AJA", value: "AJA" },
{ label: "Annecy France NCY", value: "NCY" },
{ label: "Bastia, Corsica France BIA", value: "BIA" },
{ label: "Beauvais France BVA", value: "BVA" },
{ label: "Biarritz France BIQ", value: "BIQ" },
{ label: "Bordeaux France BOD", value: "BOD" },
{ label: "Brest France BES", value: "BES" },
{ label: "Caen France CFR", value: "CFR" },
{ label: "Calvi, Corsica France CLY", value: "CLY" },
{ label: "Clermont-Ferrand France CFE", value: "CFE" },
{ label: "Figari, Corsica France FSC", value: "FSC" },
{ label: "Lannion France LAI", value: "LAI" },
{ label: "Le Havre France LEH", value: "LEH" },
{ label: "Lille France LIL", value: "LIL" },
{ label: "Limoges France LIG", value: "LIG" },
{ label: "Lorient France LRT", value: "LRT" },
{ label: "Lourdes France LDE", value: "LDE" },
{ label: "Lyon France LYS", value: "LYS" },
{ label: "Marseille France MRS", value: "MRS" },
{ label: "Metz France ETZ", value: "ETZ" },
{ label: "Montpellier France MPL", value: "MPL" },
{ label: "Mulhouse France EAP - All Airports", value: "EAP" },
{ label: "Mulhouse France MLH", value: "MLH" },
{ label: "Nantes France NTE", value: "NTE" },
{ label: "Nice France NCE", value: "NCE" },
{ label: "Paris France CDG", value: "CDG" },
{ label: "Paris France ORY", value: "ORY" },
{ label: "Paris France PAR - All Airports", value: "PAR" },
{ label: "Pau France PUF", value: "PUF" },
{ label: "Perpignan France PGF", value: "PGF" },
{ label: "Quimper France UIP", value: "UIP" },
{ label: "Rennes France RNS", value: "RNS" },
{ label: "Rodez France RDZ", value: "RDZ" },
{ label: "Rouen France URO", value: "URO" },
{ label: "Strasbourg France SXB", value: "SXB" },
{ label: "Toulon France TLN", value: "TLN" },
{ label: "Toulouse France TLS", value: "TLS" },
{ label: "Cayenne French Guiana CAY", value: "CAY" },
{ label: "Ahe French Polynesia AHE", value: "AHE" },
{ label: "Papeete, Tahiti French Polynesia PPT", value: "PPT" },
{ label: "Libreville Gabon LBV", value: "LBV" },
{ label: "Banjul Gambia BJL", value: "BJL" },
{ label: "Tbilisi Georgia TBS", value: "TBS" },
{ label: "Berlin Germany BER - All Airports", value: "BER" },
{ label: "Berlin Germany SXF", value: "SXF" },
{ label: "Berlin Germany THF", value: "THF" },
{ label: "Berlin Germany TXL", value: "TXL" },
{ label: "Bremen Germany BRE", value: "BRE" },
{ label: "Cologne Germany CGN", value: "CGN" },
{ label: "Dortmund Germany DTM", value: "DTM" },
{ label: "Dresden Germany DRS", value: "DRS" },
{ label: "Dusseldorf Germany DUS", value: "DUS" },
{ label: "Erfurt Germany ERF", value: "ERF" },
{ label: "Frankfurt Germany FRA", value: "FRA" },
{ label: "Friedrichshafen Germany FDH", value: "FDH" },
{ label: "Hamburg Germany HAM", value: "HAM" },
{ label: "Hannover Germany HAJ", value: "HAJ" },
{ label: "Hof Germany HOQ", value: "HOQ" },
{ label: "Kiel Germany KEL", value: "KEL" },
{ label: "Leipzig Germany LEJ", value: "LEJ" },
{ label: "Munich Germany MUC", value: "MUC" },
{ label: "Munster Germany FMO", value: "FMO" },
{ label: "Nuremberg Germany NUE", value: "NUE" },
{ label: "Paderborn Germany PAD", value: "PAD" },
{ label: "Stuttgart Germany STR", value: "STR" },
{ label: "Alexandroupolis Greece AXD", value: "AXD" },
{ label: "Argostoli, Kefalonia Island Greece EFL", value: "EFL" },
{ label: "Athens Greece ATH", value: "ATH" },
{ label: "Chania, Crete Greece CHQ", value: "CHQ" },
{ label: "Chios Greece JKH", value: "JKH" },
{ label: "Heraklion, Crete Greece HER", value: "HER" },
{ label: "Ikaria Island Greece JIK", value: "JIK" },
{ label: "Ioannina Greece IOA", value: "IOA" },
{ label: "Kos Greece KGS", value: "KGS" },
{ label: "Mikonos Greece JMK", value: "JMK" },
{ label: "Mytilene, Lesbos Island Greece MJT", value: "MJT" },
{ label: "Rhodes Greece RHO", value: "RHO" },
{ label: "Thessaloniki Greece SKG", value: "SKG" },
{ label: "Thira, Santorini Island Greece JTR", value: "JTR" },
{ label: "St. George's Grenada GND", value: "GND" },
{ label: "Pointe-A-Pitre, Grande-Terre Guadeloupe PTP", value: "PTP" },
{ label: "Agana Guam GUM", value: "GUM" },
{ label: "Flores Guatemala FRS", value: "FRS" },
{ label: "Guatemala City Guatemala GUA", value: "GUA" },
{ label: "Conakry Guinea CKY", value: "CKY" },
{ label: "Bissau Guinea-Bissau OXB", value: "OXB" },
{ label: "Georgetown Guyana GEO", value: "GEO" },
{ label: "Port-au-Prince Haiti PAP", value: "PAP" },
{ label: "Tegucigalpa Honduras TGU", value: "TGU" },
{ label: "Balaton Hungary SOB", value: "SOB" },
{ label: "Budapest Hungary BUD", value: "BUD" },
{ label: "Reykjavik Iceland KEF", value: "KEF" },
{ label: "Reykjavik Iceland REK - All Airports", value: "REK" },
{ label: "Reykjavik Iceland RKV", value: "RKV" },
{ label: "Ahmedabad India AMD", value: "AMD" },
{ label: "Bangalore India BLR", value: "BLR" },
{ label: "Calcutta India CCU", value: "CCU" },
{ label: "Chennai (Madras) India MAA", value: "MAA" },
{ label: "Delhi India DEL", value: "DEL" },
{ label: "Hyderabad India HYD", value: "HYD" },
{ label: "Mumbai (Bombay) India BOM", value: "BOM" },
{ label: "Puttaparthi India PUT", value: "PUT" },
{ label: "Varanasi India VNS", value: "VNS" },
{ label: "Balikpapan, Kalimantan Indonesia BPN", value: "BPN" },
{ label: "Biak, Papua Indonesia BIK", value: "BIK" },
{ label: "Denpasar, Bali Indonesia DPS", value: "DPS" },
{ label: "Jakarta, Java Indonesia CGK", value: "CGK" },
{ label: "Jakarta, Java Indonesia JKT - All Airports", value: "JKT" },
{ label: "Medan, Sumatra Indonesia MES", value: "MES" },
{ label: "Palembang, Sumatra Indonesia PLM", value: "PLM" },
{ label: "Surabaya, Java Indonesia SUB", value: "SUB" },
{ label: "Ujung Pandang, Sulawesi Indonesia UPG", value: "UPG" },
{ label: "Yogyakarta, Java Indonesia JOG", value: "JOG" },
{ label: "Ardabil Iran ADU", value: "ADU" },
{ label: "Tabriz Iran TBZ", value: "TBZ" },
{ label: "Tehran Iran THR", value: "THR" },
{ label: "Baghdad Iraq SDA", value: "SDA" },
{ label: "Connaught Ireland NOC", value: "NOC" },
{ label: "Cork Ireland ORK", value: "ORK" },
{ label: "Dublin Ireland DUB", value: "DUB" },
{ label: "Shannon Ireland SNN", value: "SNN" },
{ label: "Tel Aviv Israel TLV", value: "TLV" },
{ label: "Albenga Italy ALL", value: "ALL" },
{ label: "Alghero, Sardinia Italy AHO", value: "AHO" },
{ label: "Ancona Italy AOI", value: "AOI" },
{ label: "Aosta Italy AOT", value: "AOT" },
{ label: "Bari Italy BRI", value: "BRI" },
{ label: "Bologna Italy BLQ", value: "BLQ" },
{ label: "Bolzano Italy BZO", value: "BZO" },
{ label: "Brindisi Italy BDS", value: "BDS" },
{ label: "Cagliari, Sardinia Italy CAG", value: "CAG" },
{ label: "Catania, Sicily Italy CTA", value: "CTA" },
{ label: "Crotone Italy CRV", value: "CRV" },
{ label: "Florence Italy FLR", value: "FLR" },
{ label: "Genoa Italy GOA", value: "GOA" },
{ label: "Lamezia Terme Italy SUF", value: "SUF" },
{ label: "Milan Italy LIN", value: "LIN" },
{ label: "Milan Italy MIL - All Airports", value: "MIL" },
{ label: "Milan Italy MXP", value: "MXP" },
{ label: "Naples Italy NAP", value: "NAP" },
{ label: "Olbia, Sardinia Italy OLB", value: "OLB" },
{ label: "Palermo, Sicily Italy PMO", value: "PMO" },
{ label: "Perugia Italy PEG", value: "PEG" },
{ label: "Pisa Italy PSA", value: "PSA" },
{ label: "Reggio di Calabria Italy REG", value: "REG" },
{ label: "Rimini Italy RMI", value: "RMI" },
{ label: "Rome Italy CIA", value: "CIA" },
{ label: "Rome Italy ROM - All Airports", value: "ROM" },
{ label: "Trieste Italy TRS", value: "TRS" },
{ label: "Turin Italy TRN", value: "TRN" },
{ label: "Venice Italy VCE", value: "VCE" },
{ label: "Verona Italy VRN", value: "VRN" },
{ label: "Rome Italy (FCO-Leonardo Da Vinci Fiu", value: "Fiu" },
{ label: "Abidjan Ivory Coast ABJ", value: "ABJ" },
{ label: "Kingston Jamaica KIN", value: "KIN" },
{ label: "Kingston Jamaica KTP", value: "KTP" },
{ label: "Montego Bay Jamaica MBJ", value: "MBJ" },
{ label: "Ocho Rios Jamaica OCJ", value: "OCJ" },
{ label: "Akita Japan AXT", value: "AXT" },
{ label: "Aomori Japan AOJ", value: "AOJ" },
{ label: "Fukuoka Japan FUK", value: "FUK" },
{ label: "Fukushima Japan FKS", value: "FKS" },
{ label: "Hakodate Japan HKD", value: "HKD" },
{ label: "Iwami Japan IWJ", value: "IWJ" },
{ label: "Izumo Japan IZO", value: "IZO" },
{ label: "Kagoshima Japan KOJ", value: "KOJ" },
{ label: "Komatsu Japan KMQ", value: "KMQ" },
{ label: "Kumamoto Japan KMJ", value: "KMJ" },
{ label: "Kushiro Japan KUH", value: "KUH" },
{ label: "Matsuyama Japan MYJ", value: "MYJ" },
{ label: "Memanbetsu Japan MMB", value: "MMB" },
{ label: "Misawa Japan MSJ", value: "MSJ" },
{ label: "Miyazaki Japan KMI", value: "KMI" },
{ label: "Nagasaki Japan NGS", value: "NGS" },
{ label: "Nagoya Japan NGO", value: "NGO" },
{ label: "Nagoya Japan NKM", value: "NKM" },
{ label: "Naha, Okinawa Japan OKA", value: "OKA" },
{ label: "Nanki Shirahama Japan SHM", value: "SHM" },
{ label: "Naze, Amami-O Island Japan ASJ", value: "ASJ" },
{ label: "Niigata Japan KIJ", value: "KIJ" },
{ label: "Obihiro Japan OBO", value: "OBO" },
{ label: "Odate Noshiro Japan ONJ", value: "ONJ" },
{ label: "Oita Japan OIT", value: "OIT" },
{ label: "Osaka Japan ITM", value: "ITM" },
{ label: "Osaka Japan KIX", value: "KIX" },
{ label: "Osaka Japan OSA - All Airports", value: "OSA" },
{ label: "Saga Japan HSG", value: "HSG" },
{ label: "Sapporo Japan CTS", value: "CTS" },
{ label: "Sapporo Japan OKD", value: "OKD" },
{ label: "Takamatsu Japan TAK", value: "TAK" },
{ label: "Tokyo Japan HND", value: "HND" },
{ label: "Tokyo Japan NRT", value: "NRT" },
{ label: "Tokyo Japan TYO - All Airports", value: "TYO" },
{ label: "Wajima Japan NTQ", value: "NTQ" },
{ label: "Yamagata Japan GAJ", value: "GAJ" },
{ label: "Amman Jordan AMM", value: "AMM" },
{ label: "Almaty Kazakhstan ALA", value: "ALA" },
{ label: "Astana Kazakhstan TSE", value: "TSE" },
{ label: "Karaganda Kazakhstan KGF", value: "KGF" },
{ label: "Kzyl Orda Kazakhstan KZO", value: "KZO" },
{ label: "Semipalatinsk Kazakhstan PLX", value: "PLX" },
{ label: "Ust Kamenogorsk Kazakhstan UKK", value: "UKK" },
{ label: "Mombasa Kenya MBA", value: "MBA" },
{ label: "Nairobi Kenya NBO", value: "NBO" },
{ label: "Kuwait Kuwait KWI", value: "KWI" },
{ label: "Bishkek Kyrgyzstan FRU", value: "FRU" },
{ label: "Vientiane Laos VTE", value: "VTE" },
{ label: "Riga Latvia RIX", value: "RIX" },
{ label: "Beirut Lebanon BEY", value: "BEY" },
{ label: "Maseru Lesotho MSU", value: "MSU" },
{ label: "Monrovia Liberia ROB", value: "ROB" },
{ label: "Tripoli Libya TIP", value: "TIP" },
{ label: "Vilnius Lithuania VNO", value: "VNO" },
{ label: "Luxembourg Luxembourg LUX", value: "LUX" },
{ label: "Skopje Macedonia SKP", value: "SKP" },
{ label: "Antananarivo Madagascar TNR", value: "TNR" },
{ label: "Funchal Madeira FNC", value: "FNC" },
{ label: "Porto Santo Madeira PXO", value: "PXO" },
{ label: "Blantyre Malawi BLZ", value: "BLZ" },
{ label: "Lilongwe Malawi LLW", value: "LLW" },
{ label: "Alor Setar Malaysia AOR", value: "AOR" },
{ label: "Bintulu, Sarawak Malaysia BTU", value: "BTU" },
{ label: "Ipoh Malaysia IPH", value: "IPH" },
{ label: "Johor Bahru Malaysia JHB", value: "JHB" },
{ label: "Kota Bharu Malaysia KBR", value: "KBR" },
{ label: "Kota Kinabalu, Sabah Malaysia BKI", value: "BKI" },
{ label: "Kuala Lumpur Malaysia KUL", value: "KUL" },
{ label: "Kuala Terengganu Malaysia TGG", value: "TGG" },
{ label: "Kuantan Malaysia KUA", value: "KUA" },
{ label: "Kuching, Sarawak Malaysia KCH", value: "KCH" },
{ label: "Lahad Datu, Sabah Malaysia LDU", value: "LDU" },
{ label: "Langkawi Malaysia LGK", value: "LGK" },
{ label: "Long Banga Malaysia LBP", value: "LBP" },
{ label: "Miri, Sarawak Malaysia MYY", value: "MYY" },
{ label: "Mulu Malaysia MZV", value: "MZV" },
{ label: "Penang, Penang Island Malaysia PEN", value: "PEN" },
{ label: "Sandakan, Sabah Malaysia SDK", value: "SDK" },
{ label: "Sibu, Sarawak Malaysia SBW", value: "SBW" },
{ label: "Tawau, Sabah Malaysia TWU", value: "TWU" },
{ label: "Male Maldives MLE", value: "MLE" },
{ label: "Valletta Malta MLA", value: "MLA" },
{ label: "Majuro Marshall Islands MAJ", value: "MAJ" },
{ label: "Fort-de-France Martinique FDF", value: "FDF" },
{ label: "Nouakchott Mauritania NKC", value: "NKC" },
{ label: "Mahebourg Mauritius MRU", value: "MRU" },
{ label: "Acapulco Mexico ACA", value: "ACA" },
{ label: "Aguascalientes Mexico AGU", value: "AGU" },
{ label: "Campeche Mexico CPE", value: "CPE" },
{ label: "Cancun Mexico CUN", value: "CUN" },
{ label: "Chetumal Mexico CTM", value: "CTM" },
{ label: "Chihuahua Mexico CUU", value: "CUU" },
{ label: "Ciudad Del Carmen Mexico CME", value: "CME" },
{ label: "Ciudad Juarez Mexico CJS", value: "CJS" },
{ label: "Ciudad Obregon Mexico CEN", value: "CEN" },
{ label: "Ciudad Victoria Mexico CVM", value: "CVM" },
{ label: "Colima Mexico CLQ", value: "CLQ" },
{ label: "Cozumel Mexico CZM", value: "CZM" },
{ label: "Culiacan Mexico CUL", value: "CUL" },
{ label: "Durango Mexico DGO", value: "DGO" },
{ label: "Guadalajara Mexico GDL", value: "GDL" },
{ label: "Guaymas Mexico GYM", value: "GYM" },
{ label: "Hermosillo Mexico HMO", value: "HMO" },
{ label: "Ixtapa Mexico ZIH", value: "ZIH" },
{ label: "Jalapa Mexico JAL", value: "JAL" },
{ label: "La Paz Mexico LAP", value: "LAP" },
{ label: "Lazaro Cardenas Mexico LZC", value: "LZC" },
{ label: "Leon Mexico BJX", value: "BJX" },
{ label: "Loreto Mexico LTO", value: "LTO" },
{ label: "Los Cabos Mexico SJD", value: "SJD" },
{ label: "Manzanillo Mexico ZLO", value: "ZLO" },
{ label: "Mazatlan Mexico MZT", value: "MZT" },
{ label: "Merida Mexico MID", value: "MID" },
{ label: "Mexicali Mexico MXL", value: "MXL" },
{ label: "Mexico City Mexico MEX", value: "MEX" },
{ label: "Monclova Mexico LOV", value: "LOV" },
{ label: "Monterrey Mexico MTY", value: "MTY" },
{ label: "Morelia Mexico MLM", value: "MLM" },
{ label: "Nuevo Laredo Mexico NLD", value: "NLD" },
{ label: "Oaxaca Mexico OAX", value: "OAX" },
{ label: "Piedras Negras Mexico PDS", value: "PDS" },
{ label: "Puebla Mexico PBC", value: "PBC" },
{ label: "Puerto Escondido Mexico PXM", value: "PXM" },
{ label: "Puerto Vallarta Mexico PVR", value: "PVR" },
{ label: "Queretaro Mexico QRO", value: "QRO" },
{ label: "Reynosa Mexico REX", value: "REX" },
{ label: "Saltillo Mexico SLW", value: "SLW" },
{ label: "San Luis Potosi Mexico SLP", value: "SLP" },
{ label: "Tampico Mexico TAM", value: "TAM" },
{ label: "Tapachula Mexico TAP", value: "TAP" },
{ label: "Tepic Mexico TPQ", value: "TPQ" },
{ label: "Tijuana Mexico TIJ", value: "TIJ" },
{ label: "Toluca Mexico TLC", value: "TLC" },
{ label: "Torreon Mexico TRC", value: "TRC" },
{ label: "Tuxtla Gutierrez Mexico TGZ", value: "TGZ" },
{ label: "Veracruz Mexico VER", value: "VER" },
{ label: "Villahermosa Mexico VSA", value: "VSA" },
{ label: "Zacatecas Mexico ZCL", value: "ZCL" },
{ label: "Kosrae Micronesia KSA", value: "KSA" },
{ label: "Pohnpei Micronesia PNI", value: "PNI" },
{ label: "Truk Micronesia TKK", value: "TKK" },
{ label: "Yap Micronesia YAP", value: "YAP" },
{ label: "Chisinau Moldova KIV", value: "KIV" },
{ label: "Ulan Bator Mongolia ULN", value: "ULN" },
{ label: "Agadir Morocco AGA", value: "AGA" },
{ label: "Casablanca Morocco CMN", value: "CMN" },
{ label: "Marrakech Morocco RAK", value: "RAK" },
{ label: "Nador Morocco NDR", value: "NDR" },
{ label: "Tangier Morocco TNG", value: "TNG" },
{ label: "Maputo Mozambique MPM", value: "MPM" },
{ label: "Rangoon Myanmar (Burma) RGN", value: "RGN" },
{ label: "Kathmandu Nepal KTM", value: "KTM" },
{ label: "Lukla Nepal LUA", value: "LUA" },
{ label: "Amsterdam Netherlands AMS", value: "AMS" },
{ label: "Rotterdam Netherlands RTM", value: "RTM" },
{ label: "Noumea New Caledonia GEA", value: "GEA" },
{ label: "Noumea New Caledonia NOU", value: "NOU" },
{ label: "Auckland New Zealand AKL", value: "AKL" },
{ label: "Blenheim New Zealand BHE", value: "BHE" },
{ label: "Christchurch New Zealand CHC", value: "CHC" },
{ label: "Dunedin New Zealand DUD", value: "DUD" },
{ label: "Gisborne New Zealand GIS", value: "GIS" },
{ label: "Hamilton New Zealand HLZ", value: "HLZ" },
{ label: "Hokitika New Zealand HKK", value: "HKK" },
{ label: "Invercargill New Zealand IVC", value: "IVC" },
{ label: "Kaitaia New Zealand KAT", value: "KAT" },
{ label: "Kerikeri New Zealand KKE", value: "KKE" },
{ label: "Napier New Zealand NPE", value: "NPE" },
{ label: "Nelson New Zealand NSN", value: "NSN" },
{ label: "Palmerston North New Zealand PMR", value: "PMR" },
{ label: "Queenstown New Zealand ZQN", value: "ZQN" },
{ label: "Rotorua New Zealand ROT", value: "ROT" },
{ label: "Taupo New Zealand TUO", value: "TUO" },
{ label: "Tauranga New Zealand TRG", value: "TRG" },
{ label: "Timaru New Zealand TIU", value: "TIU" },
{ label: "Wanganui New Zealand WAG", value: "WAG" },
{ label: "Wellington New Zealand WLG", value: "WLG" },
{ label: "Westport New Zealand WSZ", value: "WSZ" },
{ label: "Whakatane New Zealand WHK", value: "WHK" },
{ label: "Whangarei New Zealand WRE", value: "WRE" },
{ label: "Managua Nicaragua MGA", value: "MGA" },
{ label: "Niamey Niger NIM", value: "NIM" },
{ label: "Abuja Nigeria ABV", value: "ABV" },
{ label: "Ibadan Nigeria IBA", value: "IBA" },
{ label: "Lagos Nigeria LOS", value: "LOS" },
{ label: "Warri Nigeria QRW", value: "QRW" },
{ label: "Pyongyang North Korea FNJ", value: "FNJ" },
{ label: "Belfast Northern Ireland BFS", value: "BFS" },
{ label: "Belfast Northern Ireland BHD", value: "BHD" },
{ label: "Londonderry Northern Ireland LDY", value: "LDY" },
{ label: "Saipan Northern Mariana Islands SPN", value: "SPN" },
{ label: "Aalesund Norway AES", value: "AES" },
{ label: "Alta Norway ALF", value: "ALF" },
{ label: "Bardufoss Norway BDU", value: "BDU" },
{ label: "Bergen Norway BGO", value: "BGO" },
{ label: "Bodo Norway BOO", value: "BOO" },
{ label: "Evenes Norway EVE", value: "EVE" },
{ label: "Hammerfest Norway HFT", value: "HFT" },
{ label: "Haugesund Norway HAU", value: "HAU" },
{ label: "Kristiansand Norway KRS", value: "KRS" },
{ label: "Longyearbyen, Svalbard Norway LYR", value: "LYR" },
{ label: "Narvik Norway NVK", value: "NVK" },
{ label: "Oslo Norway OSL", value: "OSL" },
{ label: "Sandefjord Norway TRF", value: "TRF" },
{ label: "Stavanger Norway SVG", value: "SVG" },
{ label: "Tromso Norway TOS", value: "TOS" },
{ label: "Trondheim Norway TRD", value: "TRD" },
{ label: "Muscat Oman MCT", value: "MCT" },
{ label: "Islamabad-Rawalpindi Pakistan ISB", value: "ISB" },
{ label: "Karachi Pakistan KHI", value: "KHI" },
{ label: "Lahore Pakistan LHE", value: "LHE" },
{ label: "Peshawar Pakistan PEW", value: "PEW" },
{ label: "Koror Palau ROR", value: "ROR" },
{ label: "Panama City Panama PTY", value: "PTY" },
{ label: "Deboyne Papua-New Guinea DOY", value: "DOY" },
{ label: "Port Moresby Papua-New Guinea POM", value: "POM" },
{ label: "Asuncion Paraguay ASU", value: "ASU" },
{ label: "Ciudad del Este Paraguay AGT", value: "AGT" },
{ label: "Arequipa Peru AQP", value: "AQP" },
{ label: "Cusco Peru CUZ", value: "CUZ" },
{ label: "Lima Peru LIM", value: "LIM" },
{ label: "Angeles City Philippines CRK", value: "CRK" },
{ label: "Bacolod Philippines BCD", value: "BCD" },
{ label: "Butuan Philippines BXU", value: "BXU" },
{ label: "Cagayan de Oro Philippines CGY", value: "CGY" },
{ label: "Cebu Philippines CEB", value: "CEB" },
{ label: "Cotabato Philippines CBO", value: "CBO" },
{ label: "Cubi Point Nas Philippines NCP", value: "NCP" },
{ label: "Davao Philippines DVO", value: "DVO" },
{ label: "Dipolog Philippines DPL", value: "DPL" },
{ label: "Dumaguete Philippines DGT", value: "DGT" },
{ label: "General Santos Philippines GES", value: "GES" },
{ label: "Iloilo Philippines ILO", value: "ILO" },
{ label: "Kalibo Philippines KLO", value: "KLO" },
{ label: "Legaspi Philippines LGP", value: "LGP" },
{ label: "Manila Philippines MNL", value: "MNL" },
{ label: "Puerto Princesa Philippines PPS", value: "PPS" },
{ label: "Roxas City Philippines RXS", value: "RXS" },
{ label: "Subic Bay Philippines SFS", value: "SFS" },
{ label: "Tacloban Philippines TAC", value: "TAC" },
{ label: "Tagbilaran Philippines TAG", value: "TAG" },
{ label: "Zamboanga Philippines ZAM", value: "ZAM" },
{ label: "Bydgoszcz Poland BZG", value: "BZG" },
{ label: "Gdansk Poland GDN", value: "GDN" },
{ label: "Katowice Poland KTW", value: "KTW" },
{ label: "Krakow Poland KRK", value: "KRK" },
{ label: "Poznan Poland POZ", value: "POZ" },
{ label: "Rzeszow Poland RZE", value: "RZE" },
{ label: "Szczecin Poland SZZ", value: "SZZ" },
{ label: "Warsaw Poland WAW", value: "WAW" },
{ label: "Wroclaw Poland WRO", value: "WRO" },
{ label: "Faro Portugal FAO", value: "FAO" },
{ label: "Lisbon Portugal LIS", value: "LIS" },
{ label: "Porto Portugal OPO", value: "OPO" },
{ label: "Aguadilla Puerto Rico BQN", value: "BQN" },
{ label: "San Juan Puerto Rico SJU", value: "SJU" },
{ label: "Vieques Puerto Rico VQS", value: "VQS" },
{ label: "Doha Qatar DOH", value: "DOH" },
{ label: "Busan, Korea Republic of PUS", value: "PUS" },
{ label: "Jeju, Korea Republic of CJU", value: "CJU" },
{ label: "Seoul, Korea Republic of GMP", value: "GMP" },
{ label: "Seoul, Korea Republic of ICN", value: "ICN" },
{ label: "Yangyang, Korea Republic of YNY", value: "YNY" },
{ label: "Saint-Denis Reunion RUN", value: "RUN" },
{ label: "Saint-Pierre Reunion ZSE", value: "ZSE" },
{ label: "Bucharest Romania OTP", value: "OTP" },
{ label: "Arkhangelsk Russia ARH", value: "ARH" },
{ label: "Ekaterinburg, Siberia Russia SVX", value: "SVX" },
{ label: "Irkutsk, Siberia Russia IKT", value: "IKT" },
{ label: "Kaliningrad Russia KGD", value: "KGD" },
{ label: "Moscow Russia MOW - All Airports", value: "MOW" },
{ label: "Moscow Russia SVO", value: "SVO" },
{ label: "Moscow Russia VKO", value: "VKO" },
{ label: "Murmansk Russia MMK", value: "MMK" },
{ label: "Naryan Mar Russia NNM", value: "NNM" },
{ label: "Nizhniy Novgorod Russia GOJ", value: "GOJ" },
{ label: "Novosibirsk, Siberia Russia OVB", value: "OVB" },
{ label: "Omsk, Siberia Russia OMS", value: "OMS" },
{ label: "Petropavlovsk-Kamchatsky, Siberia Russia PKC", value: "PKC" },
{ label: "Rostov Russia ROV", value: "ROV" },
{ label: "St. Petersburg Russia LED", value: "LED" },
{ label: "Vladivostok, Siberia Russia VVO", value: "VVO" },
{ label: "Volgograd Russia VOG", value: "VOG" },
{ label: "Kigali Rwanda KGL", value: "KGL" },
{ label: "Saba Island Saba SAB", value: "SAB" },
{ label: "Dawadmi Saudi Arabia DWD", value: "DWD" },
{ label: "Dhahran Saudi Arabia DHA", value: "DHA" },
{ label: "Jeddah Saudi Arabia JED", value: "JED" },
{ label: "Riyadh Saudi Arabia RUH", value: "RUH" },
{ label: "Aberdeen Scotland ABZ", value: "ABZ" },
{ label: "Balephuil Scotland TRE", value: "TRE" },
{ label: "Benbecula Scotland BEB", value: "BEB" },
{ label: "Campbeltown Scotland CAL", value: "CAL" },
{ label: "Edinburgh Scotland EDI", value: "EDI" },
{ label: "Glasgow Scotland GLA", value: "GLA" },
{ label: "Glasgow Scotland PIK", value: "PIK" },
{ label: "Inverness Scotland INV", value: "INV" },
{ label: "Islay Island Scotland ILY", value: "ILY" },
{ label: "Kirkwall, Orkney Islands Scotland KOI", value: "KOI" },
{ label: "Lerwick, Shetland Islands Scotland LSI", value: "LSI" },
{ label: "Stornoway, Isle of Lewis Scotland SYY", value: "SYY" },
{ label: "Wick Scotland WIC", value: "WIC" },
{ label: "Dakar Senegal DKR", value: "DKR" },
{ label: "Belgrade Serbia and Montenegro BEG", value: "BEG" },
{ label: "Victoria, Mahe Island Seychelles SEZ", value: "SEZ" },
{ label: "Freetown Sierra Leone FNA", value: "FNA" },
{ label: "Singapore Singapore SIN", value: "SIN" },
{ label: "Bratislava Slovakia BTS", value: "BTS" },
{ label: "Ljubljana Slovenia LJU", value: "LJU" },
{ label: "Honiara, Guadalcanal Solomon Islands HIR", value: "HIR" },
{ label: "Mogadishu Somalia MGQ", value: "MGQ" },
{ label: "Bloemfontein South Africa BFN", value: "BFN" },
{ label: "Cape Town South Africa CPT", value: "CPT" },
{ label: "Durban South Africa DUR", value: "DUR" },
{ label: "East London South Africa ELS", value: "ELS" },
{ label: "Johannesburg South Africa JNB", value: "JNB" },
{ label: "Mala Mala South Africa AAM", value: "AAM" },
{ label: "Nelspruit South Africa MQP", value: "MQP" },
{ label: "Taegu South Korea TAE", value: "TAE" },
{ label: "Alicante Spain ALC", value: "ALC" },
{ label: "Almeria Spain LEI", value: "LEI" },
{ label: "Badajoz Spain BJZ", value: "BJZ" },
{ label: "Barcelona Spain BCN", value: "BCN" },
{ label: "Bilbao Spain BIO", value: "BIO" },
{ label: "Granada Spain GRX", value: "GRX" },
{ label: "Ibiza Spain IBZ", value: "IBZ" },
{ label: "Jerez de La Frontera Spain XRY", value: "XRY" },
{ label: "La Coruna Spain LCG", value: "LCG" },
{ label: "Leon Spain LEN", value: "LEN" },
{ label: "Logrono Spain RJL", value: "RJL" },
{ label: "Madrid Spain MAD", value: "MAD" },
{ label: "Malaga Spain AGP", value: "AGP" },
{ label: "Mao, Minorca Spain MAH", value: "MAH" },
{ label: "Melilla Spain MLN", value: "MLN" },
{ label: "Murcia Spain MJV", value: "MJV" },
{ label: "Palma, Mallorca Spain PMI", value: "PMI" },
{ label: "Pamplona Spain PNA", value: "PNA" },
{ label: "San Sebastian Spain EAS", value: "EAS" },
{ label: "Santa Cruz Spain SPC", value: "SPC" },
{ label: "Santander Spain SDR", value: "SDR" },
{ label: "Seville Spain SVQ", value: "SVQ" },
{ label: "Valencia Spain VLC", value: "VLC" },
{ label: "Valladolid Spain VLL", value: "VLL" },
{ label: "Vigo Spain VGO", value: "VGO" },
{ label: "Vitoria Spain VIT", value: "VIT" },
{ label: "Zaragoza Spain ZAZ", value: "ZAZ" },
{ label: "Colombo Sri Lanka CMB", value: "CMB" },
{ label: "Gustavia St. Barts SBH", value: "SBH" },
{ label: "Oranjestad St. Eustatius EUX", value: "EUX" },
{ label: "Basseterre St. Kitts SKB", value: "SKB" },
{ label: "Castries St. Lucia SLU", value: "SLU" },
{ label: "Vieux Fort St. Lucia UVF", value: "UVF" },
{ label: "Philipsburg St. Maarten SXM", value: "SXM" },
{ label: "Kingstown St. Vincent SVD", value: "SVD" },
{ label: "Khartoum Sudan KRT", value: "KRT" },
{ label: "Paramaribo Suriname PBM", value: "PBM" },
{ label: "Manzini Swaziland MTS", value: "MTS" },
{ label: "Arvidsjaur Sweden AJR", value: "AJR" },
{ label: "Borlange Sweden BLE", value: "BLE" },
{ label: "Gothenburg Sweden GOT", value: "GOT" },
{ label: "Halmstad Sweden HAD", value: "HAD" },
{ label: "Helsingborg Sweden AGH", value: "AGH" },
{ label: "Hemavan Sweden HMV", value: "HMV" },
{ label: "Jonkoping Sweden JKG", value: "JKG" },
{ label: "Kalmar Sweden KLR", value: "KLR" },
{ label: "Karlstad Sweden KSD", value: "KSD" },
{ label: "Kiruna Sweden KRN", value: "KRN" },
{ label: "Kramfors Sweden KRF", value: "KRF" },
{ label: "Kristianstad Sweden KID", value: "KID" },
{ label: "Linkoping Sweden LPI", value: "LPI" },
{ label: "Lulea Sweden LLA", value: "LLA" },
{ label: "Lycksele Sweden LYC", value: "LYC" },
{ label: "Malmo Sweden MMA - All Airports", value: "MMA" },
{ label: "Malmo Sweden MMX", value: "MMX" },
{ label: "Mora Sweden MXX", value: "MXX" },
{ label: "Norrkoping Sweden NRK", value: "NRK" },
{ label: "Orebro Sweden ORB", value: "ORB" },
{ label: "Ornskoldsvik Sweden OER", value: "OER" },
{ label: "Ostersund Sweden OSD", value: "OSD" },
{ label: "Pajala Sweden PJA", value: "PJA" },
{ label: "Ronneby Sweden RNB", value: "RNB" },
{ label: "Skelleftea Sweden SFT", value: "SFT" },
{ label: "Stockholm Sweden ARN", value: "ARN" },
{ label: "Stockholm Sweden BMA", value: "BMA" },
{ label: "Stockholm Sweden STO - All Airports", value: "STO" },
{ label: "Storuman Sweden SQO", value: "SQO" },
{ label: "Sundsvall Sweden SDL", value: "SDL" },
{ label: "Umea Sweden UME", value: "UME" },
{ label: "Vasteras Sweden VST", value: "VST" },
{ label: "Vaxjo Sweden VXO", value: "VXO" },
{ label: "Vilhelmina Sweden VHM", value: "VHM" },
{ label: "Visby Sweden VBY", value: "VBY" },
{ label: "Altenrhein Switzerland ACH", value: "ACH" },
{ label: "Basel Switzerland BSL", value: "BSL" },
{ label: "Berne Switzerland BRN", value: "BRN" },
{ label: "Geneva Switzerland GVA", value: "GVA" },
{ label: "Lugano Switzerland LUG", value: "LUG" },
{ label: "Zurich Switzerland ZRH", value: "ZRH" },
{ label: "Damascus Syria DAM", value: "DAM" },
{ label: "Hengchun Taiwan HCN", value: "HCN" },
{ label: "Hualien Taiwan HUN", value: "HUN" },
{ label: "Kaohsiung Taiwan KHH", value: "KHH" },
{ label: "Matsu Taiwan MFK", value: "MFK" },
{ label: "Nangen Taiwan LZN", value: "LZN" },
{ label: "Taichung Taiwan RMQ", value: "RMQ" },
{ label: "Taipei Taiwan TPE", value: "TPE" },
{ label: "Taipei Taiwan TSA", value: "TSA" },
{ label: "Dushanbe Tajikistan DYU", value: "DYU" },
{ label: "Arusha Tanzania ARK", value: "ARK" },
{ label: "Dar es Salaam Tanzania DAR", value: "DAR" },
{ label: "Zanzibar Tanzania ZNZ", value: "ZNZ" },
{ label: "Bangkok Thailand BKK", value: "BKK" },
{ label: "Buri Ram Thailand BFV", value: "BFV" },
{ label: "Chiang Mai Thailand CNX", value: "CNX" },
{ label: "Chiang Rai Thailand CEI", value: "CEI" },
{ label: "Hat Yai Thailand HDY", value: "HDY" },
{ label: "Khon Kaen Thailand KKC", value: "KKC" },
{ label: "Koh Samui Thailand USM", value: "USM" },
{ label: "Krabi Thailand KBV", value: "KBV" },
{ label: "Mae Hong Son Thailand HGN", value: "HGN" },
{ label: "Nakhon Si Thammarat Thailand NST", value: "NST" },
{ label: "Phitsanulok Thailand PHS", value: "PHS" },
{ label: "Phuket Thailand HKT", value: "HKT" },
{ label: "Ranong Thailand UNN", value: "UNN" },
{ label: "Sukhothai Thailand THS", value: "THS" },
{ label: "Surat Thani Thailand URT", value: "URT" },
{ label: "Trang Thailand TST", value: "TST" },
{ label: "Trat Thailand TDX", value: "TDX" },
{ label: "Ubon Ratchathani Thailand UBP", value: "UBP" },
{ label: "Udon Thani Thailand UTH", value: "UTH" },
{ label: "Utapao Thailand UTP", value: "UTP" },
{ label: "Lome Togo LFW", value: "LFW" },
{ label: "Port of Spain Trinidad and Tobago POS", value: "POS" },
{ label: "Tobago Trinidad and Tobago TAB", value: "TAB" },
{ label: "Houmt Souk Tunisia DJE", value: "DJE" },
{ label: "Monastir Tunisia MIR", value: "MIR" },
{ label: "Tunis Tunisia TUN", value: "TUN" },
{ label: "Adana Turkey ADA", value: "ADA" },
{ label: "Adiyaman Turkey ADF", value: "ADF" },
{ label: "Ankara Turkey ESB", value: "ESB" },
{ label: "Antalya Turkey AYT", value: "AYT" },
{ label: "Dalaman Turkey DLM", value: "DLM" },
{ label: "Istanbul Turkey IST", value: "IST" },
{ label: "Istanbul Turkey SAW", value: "SAW" },
{ label: "Izmir Turkey ADB", value: "ADB" },
{ label: "Samsun Turkey SZF", value: "SZF" },
{ label: "Providenciales Island Turks and Caicos Islands PLS", value: "PLS" },
{ label: "Charlotte Amalie, St. Thomas U.S. Virgin Islands STT", value: "STT" },
{ label: "Christiansted, St. Croix U.S. Virgin Islands STX", value: "STX" },
{ label: "Entebbe Uganda EBB", value: "EBB" },
{ label: "Dnepropetrovsk Ukraine DNK", value: "DNK" },
{ label: "Donetsk Ukraine DOK", value: "DOK" },
{ label: "Kharkov Ukraine HRK", value: "HRK" },
{ label: "Kiev Ukraine KBP", value: "KBP" },
{ label: "Lugansk Ukraine VSG", value: "VSG" },
{ label: "Mariupol Ukraine MPW", value: "MPW" },
{ label: "Odessa Ukraine ODS", value: "ODS" },
{ label: "Abu Dhabi United Arab Emirates AUH", value: "AUH" },
{ label: "Dubai United Arab Emirates DXB", value: "DXB" },
{ label: "Sharjah United Arab Emirates SHJ", value: "SHJ" },
{ label: "Montevideo Uruguay MVD", value: "MVD" },
{ label: "Aberdeen, SD USA ABR", value: "ABR" },
{ label: "Abilene, TX USA ABI", value: "ABI" },
{ label: "Akron, OH USA CAK", value: "CAK" },
{ label: "Alamosa, CO USA ALS", value: "ALS" },
{ label: "Albany, GA USA ABY", value: "ABY" },
{ label: "Albany, NY USA ALB", value: "ALB" },
{ label: "Albuquerque, NM USA ABQ", value: "ABQ" },
{ label: "Alexandria, LA USA AEX", value: "AEX" },
{ label: "Allentown, PA USA ABE", value: "ABE" },
{ label: "Alliance, NE USA AIA", value: "AIA" },
{ label: "Alpena, MI USA APN", value: "APN" },
{ label: "Altoona, PA USA AOO", value: "AOO" },
{ label: "Amarillo, TX USA AMA", value: "AMA" },
{ label: "Anchorage, AK USA ANC", value: "ANC" },
{ label: "Appleton, WI USA ATW", value: "ATW" },
{ label: "Asheville, NC USA AVL", value: "AVL" },
{ label: "Aspen, CO USA ASE", value: "ASE" },
{ label: "Athens, GA USA AHN", value: "AHN" },
{ label: "Atlanta, GA USA ATL", value: "ATL" },
{ label: "Atlantic City, NJ USA ACY", value: "ACY" },
{ label: "Augusta, GA USA AGS", value: "AGS" },
{ label: "Augusta, ME USA AUG", value: "AUG" },
{ label: "Austin, TX USA AUS", value: "AUS" },
{ label: "Bakersfield, CA USA BFL", value: "BFL" },
{ label: "Baltimore, MD USA BWI", value: "BWI" },
{ label: "Bangor, ME USA BGR", value: "BGR" },
{ label: "Bar Harbor, ME USA BHB", value: "BHB" },
{ label: "Barrow, AK USA BRW", value: "BRW" },
{ label: "Baton Rouge, LA USA BTR", value: "BTR" },
{ label: "Beaumont, TX USA BPT", value: "BPT" },
{ label: "Beckley, WV USA BKW", value: "BKW" },
{ label: "Bedford, MA USA BED", value: "BED" },
{ label: "Bellingham, WA USA BLI", value: "BLI" },
{ label: "Bemidji, MN USA BJI", value: "BJI" },
{ label: "Bethel, AK USA BET", value: "BET" },
{ label: "Bettles, AK USA BTT", value: "BTT" },
{ label: "Billings, MT USA BIL", value: "BIL" },
{ label: "Binghamton, NY USA BGM", value: "BGM" },
{ label: "Birmingham, AL USA BHM", value: "BHM" },
{ label: "Bismarck, ND USA BIS", value: "BIS" },
{ label: "Bloomington, IL USA BMI", value: "BMI" },
{ label: "Bloomington, IN USA BMG", value: "BMG" },
{ label: "Bluefield, WV USA BLF", value: "BLF" },
{ label: "Boise, ID USA BOI", value: "BOI" },
{ label: "Boston, MA USA BOS", value: "BOS" },
{ label: "Bozeman, MT USA BZN", value: "BZN" },
{ label: "Brookings, SD USA BKX", value: "BKX" },
{ label: "Brownsville, TX USA BRO", value: "BRO" },
{ label: "Brunswick, GA USA BQK", value: "BQK" },
{ label: "Buffalo, NY USA BUF", value: "BUF" },
{ label: "Burbank, CA USA BUR", value: "BUR" },
{ label: "Burlington, IA USA BRL", value: "BRL" },
{ label: "Burlington, MA USA BBF", value: "BBF" },
{ label: "Burlington, VT USA BTV", value: "BTV" },
{ label: "Butte, MT USA BTM", value: "BTM" },
{ label: "Cape Girardeau, MO USA CGI", value: "CGI" },
{ label: "Carlsbad, CA USA CLD", value: "CLD" },
{ label: "Carlsbad, NM USA CNM", value: "CNM" },
{ label: "Casper, WY USA CPR", value: "CPR" },
{ label: "Cedar Rapids, IA USA CID", value: "CID" },
{ label: "Champaign, IL USA CMI", value: "CMI" },
{ label: "Charleston, SC USA CHS", value: "CHS" },
{ label: "Charleston, WV USA CRW", value: "CRW" },
{ label: "Charlotte, NC USA CLT", value: "CLT" },
{ label: "Charlottesville, VA USA CHO", value: "CHO" },
{ label: "Chattanooga, TN USA CHA", value: "CHA" },
{ label: "Cheyenne, WY USA CYS", value: "CYS" },
{ label: "Chicago, IL USA CHI - All Airports", value: "CHI" },
{ label: "Chicago, IL USA MDW", value: "MDW" },
{ label: "Chicago, IL USA ORD", value: "ORD" },
{ label: "Chico, CA USA CIC", value: "CIC" },
{ label: "Cincinnati, OH USA CVG", value: "CVG" },
{ label: "Clarksburg, WV USA CKB", value: "CKB" },
{ label: "Cleveland, OH USA CLE", value: "CLE" },
{ label: "Clovis, NM USA CVN", value: "CVN" },
{ label: "Cody, WY USA COD", value: "COD" },
{ label: "College Station, TX USA CLL", value: "CLL" },
{ label: "Colorado Springs, CO USA COS", value: "COS" },
{ label: "Columbia, MO USA COU", value: "COU" },
{ label: "Columbia, SC USA CAE", value: "CAE" },
{ label: "Columbus, GA USA CSG", value: "CSG" },
{ label: "Columbus, IN USA CLU", value: "CLU" },
{ label: "Columbus, MS USA GTR", value: "GTR" },
{ label: "Columbus, NE USA OLU", value: "OLU" },
{ label: "Columbus, OH USA CMH", value: "CMH" },
{ label: "Cordova, AK USA CDV", value: "CDV" },
{ label: "Corpus Christi, TX USA CRP", value: "CRP" },
{ label: "Dallas, TX USA DAL", value: "DAL" },
{ label: "Dallas, TX USA DFW", value: "DFW" },
{ label: "Dayton, OH USA DAY", value: "DAY" },
{ label: "Daytona Beach, FL USA DAB", value: "DAB" },
{ label: "Decatur, IL USA DEC", value: "DEC" },
{ label: "Denver, CO USA DEN", value: "DEN" },
{ label: "Des Moines, IA USA DSM", value: "DSM" },
{ label: "Detroit, MI USA DTT - All Airports", value: "DTT" },
{ label: "Detroit, MI USA DTW", value: "DTW" },
{ label: "Devils Lake, ND USA DVL", value: "DVL" },
{ label: "Dickinson, ND USA DIK", value: "DIK" },
{ label: "Dillingham, AK USA DLG", value: "DLG" },
{ label: "Dodge City, KS USA DDC", value: "DDC" },
{ label: "Dothan, AL USA DHN", value: "DHN" },
{ label: "Du Bois, PA USA DUJ", value: "DUJ" },
{ label: "Dubuque, IA USA DBQ", value: "DBQ" },
{ label: "Duluth, MN USA DLH", value: "DLH" },
{ label: "Durango, CO USA DRO", value: "DRO" },
{ label: "Dutch Harbor, Un Island, AK USA DUT", value: "DUT" },
{ label: "Eau Claire, WI USA EAU", value: "EAU" },
{ label: "Eek, AK USA EEK", value: "EEK" },
{ label: "El Centro, CA USA IPL", value: "IPL" },
{ label: "El Dorado, AR USA ELD", value: "ELD" },
{ label: "El Paso, TX USA ELP", value: "ELP" },
{ label: "Elko, NV USA EKO", value: "EKO" },
{ label: "Elmira, NY USA ELM", value: "ELM" },
{ label: "Enid, OK USA WDG", value: "WDG" },
{ label: "Erie, PA USA ERI", value: "ERI" },
{ label: "Escanaba, MI USA ESC", value: "ESC" },
{ label: "Eugene, OR USA EUG", value: "EUG" },
{ label: "Eureka, CA USA ACV", value: "ACV" },
{ label: "Evansville, IN USA EVV", value: "EVV" },
{ label: "Fairbanks, AK USA FAI", value: "FAI" },
{ label: "Fargo, ND USA FAR", value: "FAR" },
{ label: "Farmington, NM USA FMN", value: "FMN" },
{ label: "Fayetteville, AR USA XNA", value: "XNA" },
{ label: "Fayetteville, NC USA FAY", value: "FAY" },
{ label: "Flagstaff, AZ USA FLG", value: "FLG" },
{ label: "Flint, MI USA FNT", value: "FNT" },
{ label: "Florence, SC USA FLO", value: "FLO" },
{ label: "Fort Dodge, IA USA FOD", value: "FOD" },
{ label: "Fort Lauderdale, FL USA FLL", value: "FLL" },
{ label: "Fort Leonard Wood, MO USA TBN", value: "TBN" },
{ label: "Fort Myers, FL USA RSW", value: "RSW" },
{ label: "Fort Smith, AR USA FSM", value: "FSM" },
{ label: "Fort Walton Beach, FL USA VPS", value: "VPS" },
{ label: "Fort Wayne, IN USA FWA", value: "FWA" },
{ label: "Fort Yukon, AK USA FYU", value: "FYU" },
{ label: "Fresno, CA USA FAT", value: "FAT" },
{ label: "Gainesville, FL USA GNV", value: "GNV" },
{ label: "Garden City, KS USA GCK", value: "GCK" },
{ label: "Gillette, WY USA GCC", value: "GCC" },
{ label: "Glendive, MT USA GDV", value: "GDV" },
{ label: "Grand Forks, ND USA GFK", value: "GFK" },
{ label: "Grand Island, NE USA GRI", value: "GRI" },
{ label: "Grand Junction, CO USA GJT", value: "GJT" },
{ label: "Grand Rapids, MI USA GRR", value: "GRR" },
{ label: "Great Bend, KS USA GBD", value: "GBD" },
{ label: "Great Falls, MT USA GTF", value: "GTF" },
{ label: "Green Bay, WI USA GRB", value: "GRB" },
{ label: "Greenbrier, WV USA LWB", value: "LWB" },
{ label: "Greensboro, NC USA GSO", value: "GSO" },
{ label: "Greenville, MS USA GLH", value: "GLH" },
{ label: "Greenville, NC USA PGV", value: "PGV" },
{ label: "Greenville, SC USA GSP", value: "GSP" },
{ label: "Gulfport, MS USA GPT", value: "GPT" },
{ label: "Gunnison, CO USA GUC", value: "GUC" },
{ label: "Hagerstown, MD USA HGR", value: "HGR" },
{ label: "Hana, Maui, HI USA HNM", value: "HNM" },
{ label: "Hancock, MI USA CMX", value: "CMX" },
{ label: "Harlingen, TX USA HRL", value: "HRL" },
{ label: "Harrisburg, PA USA MDT", value: "MDT" },
{ label: "Harrison, AR USA HRO", value: "HRO" },
{ label: "Hartford, CT USA BDL", value: "BDL" },
{ label: "Havre, MT USA HVR", value: "HVR" },
{ label: "Hays, KS USA HYS", value: "HYS" },
{ label: "Helena, MT USA HLN", value: "HLN" },
{ label: "Hibbing, MN USA HIB", value: "HIB" },
{ label: "Hilo, Hawaii USA Big", value: "Big" },
{ label: "Hilton Head Island, SC USA HHH", value: "HHH" },
{ label: "Hobbs, NM USA HOB", value: "HOB" },
{ label: "Homer, AK USA HOM", value: "HOM" },
{ label: "Honolulu, Oahu, HI USA HNL", value: "HNL" },
{ label: "Hoolehua, Molokai, HI USA MKK", value: "MKK" },
{ label: "Hot Springs, AR USA HOT", value: "HOT" },
{ label: "Houston, TX USA EFD", value: "EFD" },
{ label: "Houston, TX USA HOU", value: "HOU" },
{ label: "Houston, TX USA IAH", value: "IAH" },
{ label: "Huntington, WV USA HTS", value: "HTS" },
{ label: "Huntsville, AL USA HSV", value: "HSV" },
{ label: "Huron, SD USA HON", value: "HON" },
{ label: "Hyannis, MA USA HYA", value: "HYA" },
{ label: "Idaho Falls, ID USA IDA", value: "IDA" },
{ label: "Indianapolis, IN USA IND", value: "IND" },
{ label: "International Falls, MN USA INL", value: "INL" },
{ label: "Inyokern, CA USA IYK", value: "IYK" },
{ label: "Iron Mountain, MI USA IMT", value: "IMT" },
{ label: "Ironwood, MI USA IWD", value: "IWD" },
{ label: "Islip, NY USA ISP", value: "ISP" },
{ label: "Ithaca, NY USA ITH", value: "ITH" },
{ label: "Jackson Hole, WY USA JAC", value: "JAC" },
{ label: "Jackson, MS USA JAN", value: "JAN" },
{ label: "Jackson, TN USA MKL", value: "MKL" },
{ label: "Jacksonville, FL USA JAX", value: "JAX" },
{ label: "Jacksonville, NC USA OAJ", value: "OAJ" },
{ label: "Jamestown, ND USA JMS", value: "JMS" },
{ label: "Jamestown, NY USA JHW", value: "JHW" },
{ label: "Johnstown, PA USA JST", value: "JST" },
{ label: "Jonesboro, AR USA JBR", value: "JBR" },
{ label: "Joplin, MO USA JLN", value: "JLN" },
{ label: "Juneau, AK USA JNU", value: "JNU" },
{ label: "Kahului, Maui, HI USA OGG", value: "OGG" },
{ label: "Kailua-Kona, Hawaii USA Big", value: "Big" },
{ label: "Kalamazoo, MI USA AZO", value: "AZO" },
{ label: "Kalaupapa, Molokai, HI USA LUP", value: "LUP" },
{ label: "Kalispell, MT USA FCA", value: "FCA" },
{ label: "Kamuela, Hawaii USA Big", value: "Big" },
{ label: "Kansas City, MO USA MCI", value: "MCI" },
{ label: "Kapalua, Maui, HI USA JHM", value: "JHM" },
{ label: "Kearney, NE USA EAR", value: "EAR" },
{ label: "Kenai, AK USA ENA", value: "ENA" },
{ label: "Ketchikan, AK USA KTN", value: "KTN" },
{ label: "Key West, FL USA EYW", value: "EYW" },
{ label: "Killeen, TX USA GRK", value: "GRK" },
{ label: "King Salmon, AK USA AKN", value: "AKN" },
{ label: "Kingman, AZ USA IGM", value: "IGM" },
{ label: "Kirksville, MO USA IRK", value: "IRK" },
{ label: "Klamath Falls, OR USA LMT", value: "LMT" },
{ label: "Knoxville, TN USA TYS", value: "TYS" },
{ label: "Kodiak, AK USA ADQ", value: "ADQ" },
{ label: "La Crosse, WI USA LSE", value: "LSE" },
{ label: "Lafayette, LA USA LFT", value: "LFT" },
{ label: "Lake Charles, LA USA LCH", value: "LCH" },
{ label: "Lake Havasu City, AZ USA HII", value: "HII" },
{ label: "Lanai City, Lanai, HI USA LNY", value: "LNY" },
{ label: "Lancaster, PA USA LNS", value: "LNS" },
{ label: "Lansing, MI USA LAN", value: "LAN" },
{ label: "Laramie, WY USA LAR", value: "LAR" },
{ label: "Laredo, TX USA LRD", value: "LRD" },
{ label: "Las Cruces, NM USA LRU", value: "LRU" },
{ label: "Las Vegas, NV USA LAS", value: "LAS" },
{ label: "Latrobe, PA USA LBE", value: "LBE" },
{ label: "Laurel, MS USA PIB", value: "PIB" },
{ label: "Lawton, OK USA LAW", value: "LAW" },
{ label: "Lebanon, NH USA LEB", value: "LEB" },
{ label: "Lewiston, ID USA LWS", value: "LWS" },
{ label: "Lewiston, ME USA LEW", value: "LEW" },
{ label: "Lewistown, MT USA LWT", value: "LWT" },
{ label: "Lexington, KY USA LEX", value: "LEX" },
{ label: "Liberal, KS USA LBL", value: "LBL" },
{ label: "Lihue, Kauai, HI USA LIH", value: "LIH" },
{ label: "Lincoln, NE USA LNK", value: "LNK" },
{ label: "Little Rock, AR USA LIT", value: "LIT" },
{ label: "Long Beach, CA USA LGB", value: "LGB" },
{ label: "Longview, TX USA GGG", value: "GGG" },
{ label: "Los Angeles, CA USA LAX", value: "LAX" },
{ label: "Los Angeles, CA USA QLA - All Airports", value: "QLA" },
{ label: "Louisville, KY, USA USA SDF", value: "SDF" },
{ label: "Lubbock, TX USA LBB", value: "LBB" },
{ label: "Lynchburg, VA USA LYH", value: "LYH" },
{ label: "Macon, GA USA MCN", value: "MCN" },
{ label: "Madison, WI USA MSN", value: "MSN" },
{ label: "Manchester, NH USA MHT", value: "MHT" },
{ label: "Manhattan, KS USA MHK", value: "MHK" },
{ label: "Manistee, MI USA MBL", value: "MBL" },
{ label: "Marion, IL USA MWA", value: "MWA" },
{ label: "Marquette, MI USA MQT", value: "MQT" },
{ label: "Martha's Vineyard, MA USA MVY", value: "MVY" },
{ label: "Mason City, IA USA MCW", value: "MCW" },
{ label: "Massena, NY USA MSS", value: "MSS" },
{ label: "McAllen, TX USA MFE", value: "MFE" },
{ label: "McCook, NE USA MCK", value: "MCK" },
{ label: "Medford, OR USA MFR", value: "MFR" },
{ label: "Melbourne, FL USA MLB", value: "MLB" },
{ label: "Memphis, TN USA MEM", value: "MEM" },
{ label: "Meridian, MS USA MEI", value: "MEI" },
{ label: "Miami, FL USA MIA", value: "MIA" },
{ label: "Midland, TX USA MAF", value: "MAF" },
{ label: "Miles City, MT USA MLS", value: "MLS" },
{ label: "Milwaukee, WI USA MKE", value: "MKE" },
{ label: "Minneapolis, MN USA MSP", value: "MSP" },
{ label: "Minot, ND USA MOT", value: "MOT" },
{ label: "Missoula, MT USA MSO", value: "MSO" },
{ label: "Mobile, AL USA MOB", value: "MOB" },
{ label: "Modesto, CA USA MOD", value: "MOD" },
{ label: "Moline, IL USA MLI", value: "MLI" },
{ label: "Monroe, LA USA MLU", value: "MLU" },
{ label: "Monterey, CA USA MRY", value: "MRY" },
{ label: "Montgomery, AL USA MGM", value: "MGM" },
{ label: "Montrose, CO USA MTJ", value: "MTJ" },
{ label: "Morgantown, WV USA MGW", value: "MGW" },
{ label: "Moses Lake, WA USA MWH", value: "MWH" },
{ label: "Muscle Shoals, AL USA MSL", value: "MSL" },
{ label: "Muskegon, MI USA MKG", value: "MKG" },
{ label: "Myrtle Beach, SC USA MYR", value: "MYR" },
{ label: "Nantucket, MA USA ACK", value: "ACK" },
{ label: "Naples, FL USA APF", value: "APF" },
{ label: "Nashville, TN USA BNA", value: "BNA" },
{ label: "New Bern, NC USA EWN", value: "EWN" },
{ label: "New Haven, CT USA HVN", value: "HVN" },
{ label: "New Orleans, LA USA MSY", value: "MSY" },
{ label: "New York, NY USA JFK", value: "JFK" },
{ label: "New York, NY USA LGA", value: "LGA" },
{ label: "New York, NY USA NYC - All Airports", value: "NYC" },
{ label: "Newark, NJ USA EWR", value: "EWR" },
{ label: "Newburgh, NY USA SWF", value: "SWF" },
{ label: "Newport News, VA USA PHF", value: "PHF" },
{ label: "Nome, AK USA OME", value: "OME" },
{ label: "Norfolk, VA USA ORF", value: "ORF" },
{ label: "North Bend, OR USA OTH", value: "OTH" },
{ label: "North Platte, NE USA LBF", value: "LBF" },
{ label: "Oakland, CA USA OAK", value: "OAK" },
{ label: "Ogdensburg, NY USA OGS", value: "OGS" },
{ label: "Oklahoma City, OK USA OKC", value: "OKC" },
{ label: "Omaha, NE USA OMA", value: "OMA" },
{ label: "Ontario, CA USA ONT", value: "ONT" },
{ label: "Orange County, CA USA SNA", value: "SNA" },
{ label: "Orlando, FL USA MCO", value: "MCO" },
{ label: "Oshkosh, WI USA OSH", value: "OSH" },
{ label: "Owensboro, KY USA OWB", value: "OWB" },
{ label: "Oxnard, CA USA OXR", value: "OXR" },
{ label: "Paducah, KY USA PAH", value: "PAH" },
{ label: "Page, AZ USA PGA", value: "PGA" },
{ label: "Palm Springs, CA USA PSP", value: "PSP" },
{ label: "Panama City, FL USA PFN", value: "PFN" },
{ label: "Parkersburg, WV USA PKB", value: "PKB" },
{ label: "Pasco, WA USA PSC", value: "PSC" },
{ label: "Pellston, MI USA PLN", value: "PLN" },
{ label: "Pendleton, OR USA PDT", value: "PDT" },
{ label: "Pensacola, FL USA PNS", value: "PNS" },
{ label: "Peoria, IL USA PIA", value: "PIA" },
{ label: "Philadelphia, PA USA PHL", value: "PHL" },
{ label: "Phoenix, AZ USA PHX", value: "PHX" },
{ label: "Pierre, SD USA PIR", value: "PIR" },
{ label: "Pinehurst, NC USA SOP", value: "SOP" },
{ label: "Pittsburgh, PA USA PIT", value: "PIT" },
{ label: "Pocatello, ID USA PIH", value: "PIH" },
{ label: "Ponca City, OK USA PNC", value: "PNC" },
{ label: "Portland, ME USA PWM", value: "PWM" },
{ label: "Portland, OR USA PDX", value: "PDX" },
{ label: "Portsmouth, NH USA PSM", value: "PSM" },
{ label: "Prescott, AZ USA PRC", value: "PRC" },
{ label: "Presque Isle, ME USA PQI", value: "PQI" },
{ label: "Providence, RI USA PVD", value: "PVD" },
{ label: "Provincetown, MA USA PVC", value: "PVC" },
{ label: "Pueblo, CO USA PUB", value: "PUB" },
{ label: "Pullman, WA USA PUW", value: "PUW" },
{ label: "Quincy, IL USA UIN", value: "UIN" },
{ label: "Raleigh, NC USA RDU", value: "RDU" },
{ label: "Rapid City, SD USA RAP", value: "RAP" },
{ label: "Redding, CA USA RDD", value: "RDD" },
{ label: "Redmond, OR USA RDM", value: "RDM" },
{ label: "Reno, NV USA RNO", value: "RNO" },
{ label: "Rhinelander, WI USA RHI", value: "RHI" },
{ label: "Richmond, VA USA RIC", value: "RIC" },
{ label: "Riverton, WY USA RIW", value: "RIW" },
{ label: "Roanoke, VA USA ROA", value: "ROA" },
{ label: "Rochester, MN USA RST", value: "RST" },
{ label: "Rochester, NY USA ROC", value: "ROC" },
{ label: "Rock Springs, WY USA RKS", value: "RKS" },
{ label: "Rockford, IL USA RFD", value: "RFD" },
{ label: "Rockland, ME USA RKD", value: "RKD" },
{ label: "Roswell, NM USA ROW", value: "ROW" },
{ label: "Rutland, VT USA RUT", value: "RUT" },
{ label: "Sacramento, CA USA SMF", value: "SMF" },
{ label: "Saginaw, MI USA MBS", value: "MBS" },
{ label: "Salina, KS USA SLN", value: "SLN" },
{ label: "Salisbury, MD USA SBY", value: "SBY" },
{ label: "Salt Lake City, UT USA SLC", value: "SLC" },
{ label: "San Angelo, TX USA SJT", value: "SJT" },
{ label: "San Antonio, TX USA SAT", value: "SAT" },
{ label: "San Diego, CA USA SAN", value: "SAN" },
{ label: "San Francisco, CA USA QSF - All Airports", value: "QSF" },
{ label: "San Francisco, CA USA SFO", value: "SFO" },
{ label: "San Jose, CA USA SJC", value: "SJC" },
{ label: "San Luis Obispo, CA USA SBP", value: "SBP" },
{ label: "Sand Point, AK USA SDP", value: "SDP" },
{ label: "Santa Barbara, CA USA SBA", value: "SBA" },
{ label: "Santa Fe, NM USA SAF", value: "SAF" },
{ label: "Santa Maria, CA USA SMX", value: "SMX" },
{ label: "Santa Rosa, CA USA STS", value: "STS" },
{ label: "Saranac Lake, NY USA SLK", value: "SLK" },
{ label: "Sarasota, FL USA SRQ", value: "SRQ" },
{ label: "Sault Ste. Marie, MI USA CIU", value: "CIU" },
{ label: "Savannah, GA USA SAV", value: "SAV" },
{ label: "Scottsbluff, NE USA BFF", value: "BFF" },
{ label: "Seattle, WA USA SEA", value: "SEA" },
{ label: "Shenandoah Valley Airport, VA USA SHD", value: "SHD" },
{ label: "Sheridan, WY USA SHR", value: "SHR" },
{ label: "Shreveport, LA USA SHV", value: "SHV" },
{ label: "Sidney, MT USA SDY", value: "SDY" },
{ label: "Silver City, NM USA SVC", value: "SVC" },
{ label: "Sioux City, IA USA SUX", value: "SUX" },
{ label: "Sioux Falls, SD USA FSD", value: "FSD" },
{ label: "Sitka, AK USA SIT", value: "SIT" },
{ label: "Skagway, AK USA SGY", value: "SGY" },
{ label: "South Bend, IN USA SBN", value: "SBN" },
{ label: "Spokane, WA USA GEG", value: "GEG" },
{ label: "Springfield, IL USA SPI", value: "SPI" },
{ label: "Springfield, MA USA CEF", value: "CEF" },
{ label: "Springfield, MO USA SGF", value: "SGF" },
{ label: "Springfield, VT USA VSF", value: "VSF" },
{ label: "St. Cloud, MN USA STC", value: "STC" },
{ label: "St. George, UT USA SGU", value: "SGU" },
{ label: "St. Louis, MO USA STL", value: "STL" },
{ label: "St. Petersburg, FL USA PIE", value: "PIE" },
{ label: "State College, PA USA SCE", value: "SCE" },
{ label: "Steamboat Springs, CO USA SBS", value: "SBS" },
{ label: "Sun Valley, ID USA SUN", value: "SUN" },
{ label: "Syracuse, NY USA SYR", value: "SYR" },
{ label: "Tallahassee, FL USA TLH", value: "TLH" },
{ label: "Tampa, FL USA TPA", value: "TPA" },
{ label: "Telluride, CO USA TEX", value: "TEX" },
{ label: "Texarkana, AR USA TXK", value: "TXK" },
{ label: "Thief River Falls, MN USA TVF", value: "TVF" },
{ label: "Toksook Bay, AK USA OOK", value: "OOK" },
{ label: "Toledo, OH USA TOL", value: "TOL" },
{ label: "Topeka, KS USA TOP", value: "TOP" },
{ label: "Traverse City, MI USA TVC", value: "TVC" },
{ label: "Trenton, NJ USA TTN", value: "TTN" },
{ label: "Tri-City Airport, TN USA TRI", value: "TRI" },
{ label: "Tucson, AZ USA TUS", value: "TUS" },
{ label: "Tulsa, OK USA TUL", value: "TUL" },
{ label: "Tupelo, MS USA TUP", value: "TUP" },
{ label: "Twin Falls, ID USA TWF", value: "TWF" },
{ label: "Tyler, TX USA TYR", value: "TYR" },
{ label: "Unalakleet, AK USA UNK", value: "UNK" },
{ label: "Vail, CO USA EGE", value: "EGE" },
{ label: "Valdez, AK USA VDZ", value: "VDZ" },
{ label: "Valdosta, GA USA VLD", value: "VLD" },
{ label: "Victoria, TX USA VCT", value: "VCT" },
{ label: "Visalia, CA USA VIS", value: "VIS" },
{ label: "Waco, TX USA ACT", value: "ACT" },
{ label: "Walla Walla, WA USA ALW", value: "ALW" },
{ label: "Washington DC USA DCA", value: "DCA" },
{ label: "Washington DC USA IAD", value: "IAD" },
{ label: "Washington DC USA WAS - All Airports", value: "WAS" },
{ label: "Waterloo, IA USA ALO", value: "ALO" },
{ label: "Watertown, NY USA ART", value: "ART" },
{ label: "Watertown, SD USA ATY", value: "ATY" },
{ label: "Wausau, WI USA CWA", value: "CWA" },
{ label: "Wenatchee, WA USA EAT", value: "EAT" },
{ label: "West Palm Beach, FL USA PBI", value: "PBI" },
{ label: "West Yellowstone, MT USA WYS", value: "WYS" },
{ label: "White Plains, NY USA HPN", value: "HPN" },
{ label: "Wichita Falls, TX USA SPS", value: "SPS" },
{ label: "Wichita, KS USA ICT", value: "ICT" },
{ label: "Wilkes-Barre, PA USA AVP", value: "AVP" },
{ label: "Williamsport, PA USA IPT", value: "IPT" },
{ label: "Williston, ND USA ISN", value: "ISN" },
{ label: "Wilmington, DE USA ILG", value: "ILG" },
{ label: "Wilmington, NC USA ILM", value: "ILM" },
{ label: "Wolf Point, MT USA OLF", value: "OLF" },
{ label: "Worland, WY USA WRL", value: "WRL" },
{ label: "Wrangell, AK USA WRG", value: "WRG" },
{ label: "Yakima, WA USA YKM", value: "YKM" },
{ label: "Yakutat, AK USA YAK", value: "YAK" },
{ label: "Yuma, AZ USA YUM", value: "YUM" },
{ label: "Tashkent Uzbekistan TAS", value: "TAS" },
{ label: "Termez Uzbekistan TMJ", value: "TMJ" },
{ label: "Port Vila, Efate Island Vanuatu VLI", value: "VLI" },
{ label: "Caracas Venezuela CCS", value: "CCS" },
{ label: "Ciudad Bolivar Venezuela CBL", value: "CBL" },
{ label: "Maracaibo Venezuela MAR", value: "MAR" },
{ label: "Ban Me Thuot Vietnam BMV", value: "BMV" },
{ label: "Da Nang Vietnam DAD", value: "DAD" },
{ label: "Dien-Bien-Phu Vietnam DIN", value: "DIN" },
{ label: "Hanoi Vietnam HAN", value: "HAN" },
{ label: "Ho Chi Minh City (Saigon) Vietnam SGN", value: "SGN" },
{ label: "Hue Vietnam HUI", value: "HUI" },
{ label: "Pleiku Vietnam PXU", value: "PXU" },
{ label: "Rach Gia Vietnam VKG", value: "VKG" },
{ label: "Vinh City Vietnam VII", value: "VII" },
{ label: "Cardiff Wales CWL", value: "CWL" },
{ label: "Aden Yemen ADE", value: "ADE" },
{ label: "Sanaa Yemen SAH", value: "SAH" },
{ label: "Kinshasa Zaire FIH", value: "FIH" },
{ label: "Kisangani Zaire FKI", value: "FKI" },
{ label: "Lubumbashi Zaire FBM", value: "FBM" },
{ label: "Lusaka Zambia LUN", value: "LUN" },
{ label: "Bulawayo Zimbabwe BUQ", value: "BUQ" },
{ label: "Harare Zimbabwe HRE", value: "HRE" }

		];

    $("#adep").autocomplete({
        zIndex: 9999,
        minLength: 0,
        appendTo: "#e1",
        delay: 0,
        minLength: 3,
        source: airports,
        focus: function (event, ui) {
            $("#adep").val(ui.item.label);
            return false;
        },
        select: function (event, ui) {
            $("#adep").val(ui.item.label);
            $("#hidAirport").val(ui.item.value);

            return false;
        }
    })
}