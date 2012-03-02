
function SearchSite() {
alert( URLEncode(document.getElementById('search_Term').value)) ;
    window.location = '/sitesearch/?cx=007119222367310883562:-zhuzpyysp4&cof=FORID%3A11&ie=UTF-8&q=' + URLEncode(document.getElementById('search_Term').value) + '&sa=Search';
    alert('1');
    }
    function URLEncode(clearString) {
        var output = '';
        var x = 0;
        clearString = clearString.toString();
        var regex = /(^[a-zA-Z0-9_.]*)/;
        while (x < clearString.length) {
            var match = regex.exec(clearString.substr(x));
            if (match != null && match.length > 1 && match[1] != '') {
                output += match[1];
                x += match[1].length;
            } else {
                if (clearString[x] == ' ')
                    output += '+';
                else {
                    var charCode = clearString.charCodeAt(x);
                    var hexVal = charCode.toString(16);
                    output += '%' + (hexVal.length < 2 ? '0' : '') + hexVal.toUpperCase();
                }
                x++;
            }
        }
        return output;
    }
    function SubmitEnter(myfield, e) {
        var keycode;
        if (window.event)
            keycode = window.event.keyCode;
        else if (e)
            keycode = e.which;
        else
            return true;
        if (keycode == 13) {
            SearchSite();
            return false;
        }
        else
            return true;
    }
    function openSearch() {

        var arrival = jQuery('#arrival').val();
        var dep = jQuery('#depart').val();
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
                '&adultcount=' + persons;
        }
        else {

            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray(iChildCount);
        }
        _gaq.push(['_link', url]);
        
    }
    function openSearchAccom() {

        var arrival = jQuery('#arrival').val();
        var dep = jQuery('#depart').val();
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

        var supplier = jQuery('#supplier').val();
        var location = jQuery('#location').val();

            
        if (supplier != "") {
            if (iChildCount == 0) {
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
                '&supplierid=' + supplier;
                }
            else {
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray(iChildCount) +
                '&supplierid=' + supplier;
            }

         }
        else {
            if (iChildCount == 0) {
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
                '&locationid=' + location;

            }
            else {

                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray(iChildCount) +
                '&locationid=' + location;
            }

        }
        _gaq.push(['_link', url]);
       
    }
    function AddToTodaysDate(AddDays) {
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
    function calculateNumDays(FirstDate, SecondDate) {
        var StartDate = new Date();
        var EndDate = new Date();
        var NumberDays = $(".nights").val();
        var msPerDay = (24 * 60 * 60 * 1000);
        StartDate.setTime(Date.parse($(".datepicker1").val()));
        EndDate.setTime(Date.parse($(".datepicker2").val()));
        var Nights = Math.round(Math.floor((EndDate - StartDate) / msPerDay));
        if (Nights < 1) {
            $(".nights").val("1");
            calculateDepartureDate();
        } else if (isNaN(Nights)) $(".nights").val("");
        else $(".nights").val(Nights);
    }

    function calculateDepartureDate() {
        var msPerDay = (24 * 60 * 60 * 1000);
        var NumberDays = $(".nights").val();
        var StartDate = new Date();
        var EndDate = new Date();
        StartDate.setTime(Date.parse($(".datepicker1").val()));
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
            if ($(".datepicker1").val() != "") {
                $(".datepicker2").val(EndMonth + "/" + EndDay + "/" + EndYear);
            }
        }
    }
    function hideChildren() {
        $("#ChildrenAges").hide();
        for (var i = 1; i <= 9; ++i) {
            $("#Child" + i + "Age").val(0);
            $("#Child" + i + "Age").hide();

        }
    }
    function showChildAges(ChildCount) {
        if (ChildCount > 0) {
            hideChildren();
            $(".ChildAges").css("display", "block")
            $("#ChildrenAges").show();
            for (var i = 1; i <= ChildCount; ++i) $("#Child" + i + "Age").show();
        } else $(".ChildAges").css("display", "none");
    }
    function CreateChildArray(iChildCount) {
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
    function search_start() {
        $('.disablePicker').toggle(function () {
            $(this).text('Enable').siblings('.hasDatepick').datepick('disable');
        },
               function () {
                   $(this).text('Disable').siblings('.hasDatepick').datepicker('enable');
               });

        hideChildren();

        $(".datepicker1").datepicker({
            numberOfMonths: 1,
            showAnim: "",
            showOn: 'focus',
            buttonImageOnly: true,
            defaultDate: +1,
            onSelect: function (selectedDate) {

                calculateNumDays();
            }
        });

        $(".datepicker1").datepicker().val(AddToTodaysDate(1).toString()).trigger('change');
        $(".datepicker2").datepicker({
            numberOfMonths: 1,
            showAnim: "",
            showOn: 'focus',
            buttonImageOnly: true,
            defaultDate: +1,
            onSelect: function (selectedDate) {
                calculateNumDays();
            }
        });
        $(".datepicker2").datepicker().val(AddToTodaysDate(2).toString()).trigger('change');
        $("#adults").val('2');
        $("#children").val('0');



    }




    function openSearchNeighbour() {
      
        var arrival = jQuery('#arrival').val();
        var neighbour = jQuery('#Neighbour').val();
       
        var dep = jQuery('#depart').val();
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
                '&adultcount=' + persons +
                '&NeighbourhoodId=' + neighbour;
        }
        else {

            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
               '&NeighbourhoodId=' + neighbour +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray(iChildCount);
        }
        _gaq.push(['_link', url]);
       
    }
    function openSearchPackage() {

        var arrival = jQuery('#arrival').val();
        var dep = jQuery('#depart').val();
        var package = jQuery('#package').val();
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
                '&adultcount=' + persons +
                '&packageid=' + package;
        }
        else {

            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
               '&packageid=' + package +
  
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray(iChildCount);
        }
        _gaq.push(['_link', url]);
    }



