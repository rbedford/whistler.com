
function SearchSite() {
    window.location = '/sitesearch/?cx=007119222367310883562:-zhuzpyysp4&cof=FORID%3A11&ie=UTF-8&q=' + URLEncode(document.getElementById('search_term').value) + '&sa=Search';
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
                '&childagearray=' + CreateChildArray(iChildCount);
        }
        _gaq.push(['_link', url]);

    }
    function openSearchLowHigh() {

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
                '&sortcode=p&departuredate=' + dep +
                '&adultcount=' + persons;
        }
        else {

            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&sortcode=p&departuredate=' + dep +
                '&adultcount=' + persons +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray(iChildCount);
        }
        _gaq.push(['_link', url]);

    }
    function openSearchAccom() {

        var hname = jQuery('#hname').val();
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
    _gaq.push(
        ['_trackEvent', 'a-z', 'search', hname],
	    ['_link', url]
       
    );

     //   _gaq.push(['_link', url]);
       
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
        $(".datepicker2").datepicker().val(AddToTodaysDate(3).toString()).trigger('change');
        $("#adults").val('2');
        $("#children").val('0');
	calculateNumDays();


    }
function openSearchSecrets() {

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
            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&locationid=1307437&locationid=1307433&arrivaldate=' + arrival +
                '&sortcode=p&departuredate=' + dep +
                '&adultcount=' + persons;
        }
        else {

            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&locationid=1307437&locationid=1307433&arrivaldate=' + arrival +
                '&sortcode=p&departuredate=' + dep +
                '&adultcount=' + persons +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray(iChildCount);
        }
        _gaq.push(['_link', url]);

    }

    function calculateNumDaysActivity(FirstDate, SecondDate) {
        var StartDate = new Date();
        var EndDate = new Date();
        var msPerDay = (24 * 60 * 60 * 1000);
        StartDate.setTime(Date.parse($(".datepicker1").val()));
        EndDate.setTime(Date.parse($(".datepicker2").val()));
        var Nights = Math.round(Math.floor((EndDate - StartDate) / msPerDay));
        if (Nights < 1) {
            $(".datepicker2").val($(".datepicker1").val());
        }
    }


    function search_start_activity() {
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
                calculateNumDaysActivity();
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
                calculateNumDaysActivity();
            }
    
          
        });
        $(".datepicker2").datepicker().val(AddToTodaysDate(1).toString()).trigger('change');
        var catid = jQuery('#acatid').val();
        jQuery('#selectActivity').val(catid);
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

        var feature = jQuery('#Peak').val();
        var feature1 = '';
        if (feature == 0) {
            feature1 = '';
        }
        else if (feature == 1) {
            feature1 = '&features=P,506,1,9,P,506,1,10,';
        }
        else if (feature == 2) {
            feature1 = '&features=P,506,1,8';
        }
        else if (feature == 3) {
            feature1 = '&features=P,506,1,7';
        }
        else if (feature == 4) {
            feature1 = '&features=P,506,1,6';
        }
        else if (feature == 5) {
            feature1 = '&features=P,506,1,4,P,506,1,5,';
        }

        if (iChildCount == 0) {
            // test

            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
                '&NeighbourhoodId=' + neighbour + feature1;
        }
        else {

            url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
               '&NeighbourhoodId=' + neighbour +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray(iChildCount) + feature1;
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

   function singleDate() {
           		        if ($('#rSingle').attr('checked')) {   
           		            $("#lblDeparture").hide();
           		            $("#departure").hide();
           		        }
           		        else {
           		            $("#lblDeparture").show();
           		            $("#departure").show();
           		        }
                  }

  function openSearchActivityAll() {

        var arrival = jQuery('#arrival').val();
        var catid = jQuery('#selectActivity').val();
        var supercatid = jQuery('#asupercatid').val();
      
        var url;
            if ($('#rSingle').attr('checked')) {  
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                      '&departuredate=' + arrival +
                     '&productcategoryid=' + catid +
                    '&productsupercategoryid=' + supercatid;
          
           }
           else {
                var dep = jQuery('#departure').val();
      
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                    '&departuredate=' + dep +
                    '&productcategoryid=' + catid +
                    '&productsupercategoryid=' + supercatid;
          }
          _gaq.push(['_link', url]);
 }
  function openSearchActivity1() {
  // activity - supercatid 2
        var arrival = jQuery('#arrival').val();
        var catid = jQuery('#selectActivity').val();
         
        var url;
            if ($('#rSingle').attr('checked')) {  
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                       '&departuredate=' + arrival +
                    '&productcategoryid=' + catid +
                    '&productsupercategoryid=2';
          
           }
           else {
                var dep = jQuery('#departure').val();
      
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                    '&departuredate=' + dep +
                    '&productcategoryid=' + catid +
                    '&productsupercategoryid=2';
          }
          _gaq.push(['_link', url]);
 }
   function openSearchActivity2() {
   // transport - supercatid 3
        var arrival = jQuery('#arrival').val();
        var catid = jQuery('#selectActivity').val();
         
        var url;
            if ($('#rSingle').attr('checked')) {  
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                      '&departuredate=' + arrival +
                     '&productcategoryid=' + catid +
                    '&productsupercategoryid=3';
          
           }
           else {
                var dep = jQuery('#departure').val();
      
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                    '&departuredate=' + dep +
                    '&productcategoryid=' + catid +
                    '&productsupercategoryid=3';
          }
          _gaq.push(['_link', url]);
 }
   function openSearchActivity3() {
   // rental - supercatid 6
        var arrival = jQuery('#arrival').val();
        var catid = jQuery('#selectActivity').val();
          
        var url;
            if ($('#rSingle').attr('checked')) {  
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                        '&departuredate=' + arrival +
                 '&productcategoryid=' + catid +
                    '&productsupercategoryid=6';
          
           }
           else {
                var dep = jQuery('#departure').val();
      
                url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                     '&departuredate=' + dep +
                    '&productcategoryid=' + catid +
                    '&productsupercategoryid=6';
          }
          _gaq.push(['_link', url]);
      }





      function openSearchAll() {

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
         
          var feature = jQuery('#Peak').val();
          var feature1 = '';
          if (feature == 0) {
          }
          else if (feature == 1) {
              feature1 = 'P,506,1,9,P,506,1,10,';
          }
          else if (feature == 2) {
              feature1 = 'P,506,1,8,';
          }
          else if (feature == 3) {
              feature1 = 'P,506,1,7,';
          }
          else if (feature == 4) {
              feature1 = 'P,506,1,6,';
          }
          else if (feature == 5) {
              feature1 = 'P,506,1,4,P,506,1,5,';
          }

          var home = jQuery('#Home').val();
          if (home == 0) {
          }
          else if (home == 1) {
              feature1 = feature1 + 'P,500,1,1,';
          }
          else if (home == 2) {
              feature1 = feature1 + 'P,500,5,1,';
          }
          else if (home == 3) {
              feature1 = feature1 + 'P,500,8,1,';
          }
          else if (home == 4) {
              feature1 = feature1 + 'P,500,8,1,';
          }
          var feature2 = '';
          if (feature1 != '') {
              feature2 = '&features=' + feature1;
          }

          if (iChildCount == 0) {
              // test

              url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
                '&NeighbourhoodId=' + neighbour + feature2;
          }
          else {

              url = 'http://www.inntopia.travel/aspnet/09/search.aspx?salesid=1321967&arrivaldate=' + arrival +
                '&departuredate=' + dep +
                '&adultcount=' + persons +
               '&NeighbourhoodId=' + neighbour +
                '&childcount=' + iChildCount +
                '&childagearray=' + CreateChildArray(iChildCount) + feature2;
          }
          _gaq.push(['_link', url]);

      }

      function GetQueryString() {
          return function (a) {
              if (a == "") return {};
              var b = {};
              for (var i = 0; i < a.length; ++i) {
                  var p = a[i].split('=');
                  b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
              }
              return b;
          } (window.location.search.substr(1).split('&'))
      }
      function openSearchFlight() {
          if (jQuery('#hidAirport').val() == "") {
              alert('Departure Airport invalid - select airport from autocomplete list.');
              jQuery('#aarr').val("")
          }
          else {
              var airname = jQuery('#adep').val();
              var arr = jQuery('#aarrival').val();
              var dep = jQuery('#adeparture').val();
              var air1 = jQuery('#hidAirport').val();
              var air2 = jQuery('#aarr').val();
              var adults = jQuery('#aadults').val();
              var child = jQuery('#achildren').val();

              var url;
              url = 'http://inntopia.travel/aspnet/09/air_availability.aspx?language=EN&salesid=1321967&search=1&private=1&published=1' +
'&startdt=' + arr +
'&enddt=' + dep +
'&startpt=' + air1 +
'&endpt=' + air2 +
'&numseats=' + adults +
'&numchildseats=' + child;


              _gaq.push(
        ['_trackEvent', 'air', 'search', airname],
	    ['_link', url]

    );
          }


      }

      function flight_start() {
          $('.disablePicker').toggle(function () {
              $(this).text('Enable').siblings('.hasDatepick').datepick('disable');
          },
               function () {
                   $(this).text('Disable').siblings('.hasDatepick').datepicker('enable');
               });



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

          $(".adatepicker1").datepicker().val(AddToTodaysDate(1).toString()).trigger('change');
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
          $(".adatepicker2").datepicker().val(AddToTodaysDate(3).toString()).trigger('change');
          $("#aadults").val('2');
          $("#achildren").val('0');



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



      function checkAirport() {
          if (jQuery('#hidAirport').val() == "") {
              alert('Departure Airport invalid - select airport from autocomplete list.');
              jQuery('#adep').val("")
          }
      }









