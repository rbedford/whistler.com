function AddToTodaysDate_Brand(AddDays) {
    var d = new Date();
    d.setDate(d.getDate() + AddDays);
    var num_month = (d.getMonth() + 1);
    var day = d.getDate();
    var mon = num_month;
    var mm = mon < 10 ? '0' + mon : mon;
    var dd = day < 10 ? '0' + day : day;

    return mm.toString() + '/' + dd.toString() + '/' + d.getFullYear().toString();
}
 function search_start_cal() {
    $('.disablePicker').toggle(function () {
        $(this).text('Enable').siblings('.hasDatepick').datepick('disable');
    },
               function () {
                   $(this).text('Disable').siblings('.hasDatepick').datepicker('enable');
               });


    $(".datepicker1").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

                  calculateNumDays_Brand('#c2_txtA1','#c2_txtA2');
        }
    });
    
    $(".datepicker2").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {
            calculateNumDays_Brand('#c2_txtA1', '#c2_txtA2');
        }
    });
    $(".datepicker3").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
   	defaultDate: +1,
     
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA3', '#c2_txtA4');
        }
    });
    $(".datepicker4").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA3', '#c2_txtA4');
        }
    });
    $(".datepicker5").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA5', '#c2_txtA6');
        }
    });
    $(".datepicker6").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA5', '#c2_txtA6');
        }
    });
    $(".datepicker7").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA7', '#c2_txtA8');
        }
    });

    $(".datepicker8").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA7', '#c2_txtA8');
        }
    });
    $(".datepicker9").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA9', '#c2_txtA10');
        }
    });

    $(".datepicker10").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA9', '#c2_txtA10');
        }
    });

    $(".datepicker13").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA13', '#c2_txtA14');
        }
    });

    $(".datepicker14").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA13', '#c2_txtA14');
        }
    });
 
    startChild();
}

function search_start_calP() {

    $(".datepicker11").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtPA1', '#c2_txtPA2');
        }
    });

    $(".datepicker12").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtPA1', '#c2_txtPA2');
        }
    });
    
    startChildP();
}

function search_start_calExtra() {

    $(".datepicker11").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA11', '#c2_txtA12');
        }
    });

    $(".datepicker12").datepicker({
        numberOfMonths: 1,
        showAnim: "",
        showOn: 'focus',
        buttonImageOnly: true,
        defaultDate: +1,
        onSelect: function (selectedDate) {

            calculateNumDays_Brand('#c2_txtA11', '#c2_txtA12');
        }
    });

  
}

function calculateNumDays_Brand(date1, date2) {

    var StartDate = new Date();
    var EndDate = new Date();
   // var NumberDays = $("#nights").val();
    var msPerDay = (24 * 60 * 60 * 1000);
    StartDate.setTime(Date.parse($(date1).val()));
    EndDate.setTime(Date.parse($(date2).val()));
    var Nights = Math.round(Math.floor((EndDate - StartDate) / msPerDay));
    if (Nights < 0) {
      //  $("#nights").val("1");
        calculateDepartureDate_new(date1,date2);
    } 
}
function calculateDepartureDate_new(date1, date2) {

    var msPerDay = (24 * 60 * 60 * 1000);
   // var NumberDays = $("#nights").val();
    var StartDate = new Date();
    var EndDate = new Date();
    StartDate.setTime(Date.parse($(date1).val()));
        EndDate.setTime(StartDate.getTime() + (msPerDay * 1));
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
        if ($(date1).val() != "") {
            $(date2).val(EndMonth + "/" + EndDay + "/" + EndYear);
        }
    
}







function hideChildren_new() {
    for (var i = 1; i <= 9; ++i) {
        $("#c2_Child" + i + "Age").val('0');
        $.uniform.update("#c2_Child" + i + "Age");
        $("#child" + i).hide();
    }
    $("#childAll").hide();

}

function hideChildren_newP() {
    for (var i = 1; i <= 9; ++i) {
        $("#c2_Child" + i + "AgeP").val('0');
        $.uniform.update("#c2_Child" + i + "AgeP");
        $("#child" + i + "P").hide();
    }
    $("#childAllP").hide();

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
function showChildAges_newP(ChildCount) {
    hideChildren_newP();
    if (ChildCount > 0) {
        $("#childAllP").show();
        for (var i = 1; i <= ChildCount; ++i) {
            $("#child" + i + "P").show();
        }
    }
}
function startChild() {
    var e = document.getElementById("c2_ddlChild");
    var strUser = e.options[e.selectedIndex].value;
    showChildAges_new1(strUser);
}

function startChildP() {
    var e = document.getElementById("c2_ddlPChild");
    var strUser = e.options[e.selectedIndex].value;
    showChildAges_new1P(strUser);
}



function hideChildren_new1() {
    for (var i = 1; i <= 9; ++i) {
        //   $("#c2_Child" + i + "Age").val('0');
        //   $.uniform.update("#c2_Child" + i + "Age");
        $("#child" + i).hide();
    }
    $("#childAll").hide();

}
function hideChildren_new1P() {
    for (var i = 1; i <= 9; ++i) {
        //   $("#c2_Child" + i + "Age").val('0');
        //   $.uniform.update("#c2_Child" + i + "Age");
        $("#child" + i + "P").hide();
    }
    $("#childAllP").hide();

}
function showChildAges_new1(ChildCount) {
    hideChildren_new1();
    if (ChildCount > 0) {
        $("#childAll").show();
        for (var i = 1; i <= ChildCount; ++i) {
            $("#child" + i).show();
        }
    }
}
function showChildAges_new1P(ChildCount) {
    hideChildren_new1P();
    if (ChildCount > 0) {
        $("#childAllP").show();
        for (var i = 1; i <= ChildCount; ++i) {
            $("#child" + i + "P").show();
        }
    }
}
function showProperty(i) {
    var t = document.getElementById("img_" + i);
    if ($('#d_' + i).is(':hidden')) {
        t.src = "/css/images/btns/hide.png";

    }
    else {
        t.src = "/css/images/btns/show.png";
    }

    $('#d_' + i).slideToggle('normal');
    return false;
}


function showMoreProperty(i) {

    $('#divLocation1_' + i).hide();
    $('#divLocation2_' + i).show();
   
     return false;
}




function CreateChildArray_Inntopia(iChildCount) {
    var strChildArray = "";

    for (var i = 1; i <= iChildCount; ++i) {
        if (i < iChildCount) {
            strChildArray = strChildArray + document.getElementById("c2_ddlChild" + i + "Age").value.toString() + ",";
        }
        else {
            strChildArray = strChildArray + document.getElementById("c2_ddlChild" + i + "Age").value.toString();
        }
    }
    return strChildArray;
}
function CreateChildArray_Inntopia_Package(iChildCount) {
    var strChildArray = "";

    for (var i = 1; i <= iChildCount; ++i) {
        if (i < iChildCount) {
            strChildArray = strChildArray + document.getElementById("c2_ddlChild" + i + "AgeP").value.toString() + ",";
        }
        else {
            strChildArray = strChildArray + document.getElementById("c2_ddlChild" + i + "AgeP").value.toString();
        }
    }
    return strChildArray;
}
function openBrand1New() {

    var arrival = jQuery('#c2_txtA1').val();
    var path = window.location.pathname;
    var dep = jQuery('#c2_txtA2').val();
    var persons = jQuery('#c2_ddlAdult').val();
    var nights = "4";

    var iChildCount = $('#c2_ddlChild').val();
    var url;
    if (iChildCount == 0) {
        url = '/cart/lodging-search/index.aspx?arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&ganights=' + nights +
                '&adultcount=' + persons;
    }
    else {

        url = '/cart/lodging-search/index.aspx?arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
                '&ganights=' + nights +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray_Inntopia(iChildCount);
    }
    //    _gaq.push(['_link', url]);
   // _gaq.push(['_trackEvent', 'search main accomm', path, 'search'], ['_link', url]);
    window.location.href = url;


}
function openBrand2New() {
    // activity
    var arrival = jQuery('#c2_txtA3').val();
    var catid = jQuery('#c2_ddlActivity').val();
    var path = window.location.pathname;
    var code = jQuery('#c2_ddlActivity option:selected').text();
    var url;
    var dep = jQuery('#c2_txtA4').val();
    if (catid == "-1") {
        url = '/cart/activity-search/index.aspx?arrivaldate=' + arrival +
                    '&departuredate=' + dep;
    }
    else {
        url = '/cart/activity-search/index.aspx?arrivaldate=' + arrival +
                    '&departuredate=' + dep +
                    '&productcategoryid=' + catid;
    }
    //  alert(url);
    //  _gaq.push(['_link', url]);
    //  _gaq.push(['_trackEvent', 'search main activity', path, code], ['_link', url]);
    window.location.href = url;

}

function openBrand3New() {
    // transport - supercatid 3
    var path = window.location.pathname;
    var arrival = jQuery('#c2_txtA5').val();
    var catid = jQuery('#c2_ddlTransfer').val();
    var code = jQuery('#c2_ddlTransfer option:selected').text();
    var url;
    var dep = jQuery('#c2_txtA6').val();
    if (catid == "-1") {
        url = '/cart/transport-search/index.aspx?arrivaldate=' + arrival +
                    '&departuredate=' + dep;
                  
    }
    else {
        url = '/cart/transport-search/index.aspx?arrivaldate=' + arrival +
                    '&departuredate=' + dep +
                    '&productcategoryid=' + catid;
                   
    }

    //   _gaq.push(['_link', url]);
//    _gaq.push(['_trackEvent', 'search main transfer', path, code], ['_link', url]);
    window.location.href = url;

}


function openBrand4New() {
// golf
    var arrival = jQuery('#c2_txtA7').val();
    var catid = jQuery('#c2_ddlGolf').val();
    var dep = jQuery('#c2_txtA8').val();
    var path = window.location.pathname;
    var code = jQuery('#c2_ddlGolf option:selected').text();
    var time = jQuery('#c2_ddlTime').val();


    var url;

    if (catid == "-1") {
        if (time == "-1") {
            url = '/cart/golf-search/index.aspx?arrivaldate=' + arrival +
        '&departuredate=' + dep;
        }
        else {
            url = '/cart/golf-search/index.aspx?arrivaldate=' + arrival +
        '&departuredate=' + dep +
        '&arrivaltime=' + time;
        }
    }
    else {
        if (time == "-1") {
            url = '/cart/golf-search/index.aspx?supplierid=' + catid +
        '&arrivaldate=' + arrival +
        '&departuredate=' + dep;
        }
        else {
            url = '/cart/golf-search/index.aspx?supplierid=' + catid +
        '&arrivaldate=' + arrival +
        '&departuredate=' + dep +
        '&arrivaltime=' + time;
        }
    }
    //_gaq.push(['_link', url]);
    //  _gaq.push(['_trackEvent', 'rental', 'search', path], ['_link', url]);
    //  _gaq.push(['_trackEvent', 'search main golf’, path, course]

    //  _gaq.push(['_trackEvent', 'search main golf', path, code], ['_link', url]);
    window.location.href = url;
}

function openBrand5New() {
    // rental - supercatid 6
   
    var arrival = jQuery('#c2_txtA9').val();
    var catid = jQuery('#c2_ddlRental').val();
    var path = window.location.pathname;
    var url;
    var dep = jQuery('#c2_txtA10').val();
    var code = jQuery('#c2_ddlRental option:selected').text();
    if (catid == "-1") {
        url = '/cart/rental-search/index.aspx?arrivaldate=' + arrival +
                     '&departuredate=' + dep;
                    
    }
    else {
        url = '/cart/rental-search/index.aspx?arrivaldate=' + arrival +
                     '&departuredate=' + dep +
                    '&productcategoryid=' + catid;
                    
    }

    //   _gaq.push(['_link', url]);
   // _gaq.push(['_trackEvent', 'search main rental', path, code], ['_link', url]);
    window.location.href = url;
}

function openBrand6New() {
    // lift

    var arrival = jQuery('#c2_txtA13').val();
    var path = window.location.pathname;
    var url;
    var dep = jQuery('#c2_txtA14').val();
        url = '/cart/lift-search/index.aspx?arrivaldate=' + arrival +
                     '&departuredate=' + dep;

    
    //   _gaq.push(['_link', url]);
    // _gaq.push(['_trackEvent', 'search main rental', path, code], ['_link', url]);
    window.location.href = url;
}

// **********************
// accommodation functions
// **********************
function book(a, b, c) {
    // accommodation
    var s = "/cart/index.aspx?actioncode=1&supplierid=" + a.toString() + "&productid=" + b.toString() + "&arrivaldate=" + document.getElementById("c2_txtA1").value.toString() + "&departuredate=" + document.getElementById("c2_txtA2").value.toString() + "&adultcount=" + document.getElementById("c2_ddlAdult").value.toString() + "&childcount=" + document.getElementById("c2_ddlChild").value.toString() + "&sessionid=" + c.toString() + "&quantity=1";
     $.fancybox({ 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });
}

// **********************
// activity functions
// **********************
function book1(a, id, b, c) {
    // activity 1
    var q = jQuery('#selectq_' + id).val();
    var d = jQuery('#selectdate_' + id).val();
    var s = "/cart/index.aspx?actioncode=1&supplierid=" + a.toString() + "&productid=" + b.toString() + "&arrivaldate=" + d.toString() + "&sessionid=" + c.toString() + "&adultcount=1&quantity=" + q.toString();
    //  alert(s);
    $.fancybox({ 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });
}
function book2(a, id, b, c) {
    // activity 2
    var p = jQuery('#select_' + id).val();
    var q = jQuery('#selectq_' + id).val();
    var d = jQuery('#selectdate_' + id).val();

    var temp = new Array();
    temp = p.split('_');

    var s = "/cart/index.aspx?actioncode=1&supplierid=" + a.toString() + "&productid=" + temp[1].toString() + "&arrivaldate=" + d.toString() + "&sessionid=" + c.toString() + "&adultcount=1&quantity=" + q.toString();
    //    alert(s);

    $.fancybox({ 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });
}

function removeChildNodes(el) {
    while (el.childNodes[0]) {
        el.removeChild(el.childNodes[0]);
    }
}

function updateQuantity(str1, q) {

    removeChildNodes(document.getElementById(str1));
    for (var i = 1; i <= q; i++) {
        var dateoption = document.createElement('option');
        dateoption.setAttribute('value', i.toString());
        dateoption.innerHTML = i.toString();
        document.getElementById(str1).appendChild(dateoption)
    }
}
function changeGroup(obj, bool1) {


    var v = document.getElementById('select_' + obj).value;
    removeChildNodes(document.getElementById('selectdate_' + obj));

    for (var i = 0; i < arrayProduct.length; i++) {
        if (v == arrayProduct[i][0]) {
            var n = arrayProduct[i][2];
            document.getElementById('span_' + obj).innerHTML = '$' + n.toFixed(2);
            var dateoption = document.createElement('option');
            dateoption.setAttribute('value', arrayProduct[i][1]);
            dateoption.innerHTML = arrayProduct[i][1];

            document.getElementById('selectdate_' + obj).appendChild(dateoption)

            updateQuantity('selectq_' + obj, arrayProduct[i][3]);
        }
    }
    if (bool1) {
        $.uniform.update("#selectdate_" + obj);
        $.uniform.update("#selectq_" + obj);
    }
}
function changeGroup1(obj, bool1) {


    removeChildNodes(document.getElementById('selectdate_' + obj));

    for (var i = 0; i < arrayProduct.length; i++) {
        if (obj == arrayProduct[i][0]) {
            var n = arrayProduct[i][2];
            document.getElementById('span_' + obj).innerHTML = '$' + n.toFixed(2);
            var dateoption = document.createElement('option');
            dateoption.setAttribute('value', arrayProduct[i][1]);
            dateoption.innerHTML = arrayProduct[i][1];

            document.getElementById('selectdate_' + obj).appendChild(dateoption)

            updateQuantity('selectq_' + obj, arrayProduct[i][3]);
        }
    }
    if (bool1) {
        $.uniform.update("#selectdate_" + obj);
        $.uniform.update("#selectq_" + obj);
    }
}
function changeDate(obj) {


    var v = document.getElementById('select_' + obj).value;
    var d = document.getElementById('selectdate_' + obj).value;

    for (var i = 0; i < arrayProduct.length; i++) {
        if (v == arrayProduct[i][0] && d == arrayProduct[i][1]) {
            var n = arrayProduct[i][2];
            document.getElementById('span_' + obj).innerHTML = '$' + n.toFixed(2);
            updateQuantity('selectq_' + obj, arrayProduct[i][3]);

        }
    }

    $.uniform.update("#selectq_" + obj);


}
function changeDate1(obj) {


    var d = document.getElementById('selectdate_' + obj).value;

    for (var i = 0; i < arrayProduct.length; i++) {
        if (obj == arrayProduct[i][0]) {
            var n = arrayProduct[i][2];
            document.getElementById('span_' + obj).innerHTML = '$' + n.toFixed(2);
            updateQuantity('selectq_' + obj, arrayProduct[i][3]);

        }
    }
    $.uniform.update("#selectq_" + obj);
}



// **********************
// guest/info functions
// **********************
function showTax(i) {
    $('#divTax_' + i).toggle();
    if ($('#spanTax_' + i).text() == '(+)') {
        $('#spanTax_' + i).text('(-)')
    }
    else {
        $('#spanTax_' + i).text('(+)')
    }

}

// *************************************************************************************************
// common booking functions
// *************************************************************************************************

function hideResult() { $('#divResult').hide(); $('#results_h1').hide(); }
function showResult() { $('#divResult').show(); $('#results_h1').show(); }
function hideSide() { $('#filter_results').hide(); }
function showSide() { $('#filter_results').show(); }

function showCriteria() { $('#divSearch').show(); }
function hideCriteria() { $('#divSearch').hide(); }


function formatTitle(title, currentArray, currentIndex, currentOpts) {
    return '<div class="ph_title"><b>' + title + '&nbsp;</b>Image ' + (currentIndex + 1) + ' of ' + currentArray.length + '</div>';
}
function formatTitle1(title, currentArray, currentIndex, currentOpts) {
    return '<div class="ph_title"><b>' + title + '&nbsp;</b>&nbsp;</div>';
}
function showCart1() {
    var s = "/cart/index.aspx?sessionid=" + strSession;

    $.fancybox({ 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });

}
function showCart2(session) {
    var s = "/cart/cart-secure/index.aspx?sessionid=" + session;

    //     $.fancybox({ 'onClosed': function (selectedArray, selectedIndex, selectedOptions) { alert( selectedArray[selectedIndex]) }, 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true});
    $.fancybox({ 'onClosed': function () { parent.document.getElementById('c3_btnReview').click(); }, 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });

}

function showPolicy(locationID, productID) {
    var s = "/cart/view/policy/index.aspx?locationid=" + locationID + "&productid=" + productID;
 //   var s = "/cart/view/index.aspx?supplierid=" + locationID + "&productid=" + productID + "&tab=1";
    $.fancybox({ 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });

}
  function showPolicyAll(id) {
               var s = "/cart/view/policy/index.aspx?itineraryid=" + id.toString();
               $.fancybox({ 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });

           }

         
function showCancelPolicy(session, itemID, locationID, productID) {
    var s = "/cart/cancel/index.aspx?locationid=" + locationID + "&productid=" + productID + "&sessionid=" + session + "&itemid=" + itemID;

    $.fancybox({ 'onClosed': function () {parent.document.getElementById('c2_btnReview').click(); }, 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });
}

function showPasswordReset() {
    var s = "/cart/password/index.aspx";
    $.fancybox({ 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 350, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });

}

function newSearch1() {
    var url = "/cart/lodging-search/index.aspx";

    window.location.href = url;
}
function newSearch2(session) {
    var url = "/cart/lodging-search/index.aspx?sessionid=" + session;

    window.location.href = url;
}


// **********************
// accommodation functions
// **********************
function bookPackage(a, b, c) {
    // "/cart/index.aspx?actioncode=15&sessionid=F2121CE4-DFB1-4AD1-AE75-B787AB8F94A6&itineraryarray=854813|5|1|01/19/2012|01/20/2012|2|0|&packageid=12368"
    //"/cart/index.aspx?actioncode=15&sessionid=F2121CE4-DFB1-4AD1-AE75-B787AB8F94A6&itineraryarray=854813|2|1|01/19/2012|01/20/2012|2|2|&packageid=12368"
    var s = "/cart/index.aspx?actioncode=15&sessionid=" + b.toString() + "&itineraryarray=" + a.toString() + "&packageid=" + c.toString();
    $.fancybox({ 'title': 'Itinerary', 'href': s, 'padding': 10, 'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe', 'changeFade': 0, 'height': 650, 'width': 730, 'titlePosition': 'inside', 'titleShow': false, 'showCloseButton': true });
}

function validate_cc(self) {
	$(self).val($(self).val().replace(/[^0-9]+/g, ""));
}