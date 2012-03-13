<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="book_now.ascx.cs" Inherits="WhistlerNew.usercontrol.book_now" %>
<div id="booking_widget_holder">
    
    <div id="booking_widget">

        <a href="#" id="widget_closed"></a>
		
        <div id="widget" class="closed" style="height: 35px;">
		
			<div class="widget-loading">
				<img src="http://www.whistler.com/images/booking-widget/loading.gif" alt="Loading&hellip;" title="Loading&hellip;" width="126" height="22" />
			</div>
			
			<h2>Plan Your Trip <small>1.800.944.7853</small></h2>
			
			<h3>Lodging</h3>
			<ul class="links">
				<li id="open-lodging" style="display: none;"><a href="#widget-lodging">Lodging</a></li>
				<li id="open-transfers"><a href="#widget-transfers">Transfers</a></li>
				<li id="open-flights"><a href="#widget-flights">Flights</a></li>
				<li id="open-activities"><a href="#widget-activities">Activities</a></li>
				<li id="open-rentals" class="last"><a href="#widget-rentals">Rentals</a></li>
			</ul>
			
			<div id="widget-lodging" class="booking">
			
				<div class="field half">
					<label for="arrival">Start Date</label>
					<input class="datepicker text arrival" name="arrival" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="activitydeparture">End Date</label>
					<input class="datepicker text departure" name="departure" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="adults">Adults</label>
					<select id="adults" name="adults" class="adults text">
						<option selected="selected" value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
					</select>
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label>Kids</label>
					<select id="children" name="children" class="children" onchange="show_child_ages($(this).val(), $(this).parents('#widget').attr('id'), true)">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
					</select>
				</div>
				<!-- / field -->
				
				<div class="field childAll">
				
					<label for="">Child Ages</label>
					
					<div id="child1" class="child">
					<select id="Child1Age" name="Child1Age">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					</div>
					
					<div id="child2" class="child">
					<select id="Child2Age" name="Child2Age">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>

						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					</div>
					
					<div id="child3" class="child">
					<select id="Child3Age" name="Child3Age">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					</div>
					
					<div id="child4" class="child">
					<select id="Child4Age" name="Child4Age">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					</div>
					
					<div id="child5" class="child">
					<select id="Child5Age" name="Child5Age">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					</div>
					
					<div id="child6" class="child">
					<select id="Child6Age" name="Child6Age">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					</div>
					
					<div id="child7" class="child">
					<select id="Child7Age" name="Child7Age">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					</div>
					
					<div id="child8" class="child">
					<select id="Child8Age" name="Child8Age">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					</div>
					
					<div id="child9" class="child">
					<select id="Child9Age" name="Child9Age">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
						<option value="11">11</option>
						<option value="12">12</option>
						<option value="13">13</option>
						<option value="14">14</option>
						<option value="15">15</option>
						<option value="16">16</option>
						<option value="17">17</option>
						<option value="18">18</option>
						<option value="19">19</option>
						<option value="20">20</option>
						<option value="21">21</option>
					</select>
					</div>
					
				</div>
				<!-- / field -->
				
				<div class="field" style="display: none;">
					<label for="property_type">Property Type</label>
					<select name="property_type" id="property_type" class="property_type">
						<option value="all">-ALL-</option>
						<option value="hotels">Hotels</option>
						<option value="condos">Condo Lodges</option>
						<option value="townhomes">Condo/Townhomes</option>
						<option value="homes">Homes</option>
					</select>
				</div>
				<!-- / field -->
			
				<div class="buttons">
					<a href="/whywhistler/"><img src="/css/images/booking_widget/bpg.gif" /></a>
					<input onclick="search_accommodation($(this).parents('.booking').attr('id')); return false" type="submit" value="SEARCH" />
				</div>
				<!-- / buttons -->
				
			</div>
			<!-- / lodging -->
			
			<div id="widget-transfers" class="booking">
				
				<div class="field">
					<label for="selectTransport">Transfers</label>
					<select id="selectTransport" class="cat_id" name="selectTransport"> 
						<option selected="selected" value="-1">-ALL-</option> 
						<option value="2">Transfers - Bus</option> 
						<option value="193">Transfers - Limousine</option>
						<option value="194">Transfers - Air</option>
					</select>
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="arrival1">Arrival</label>
					<input class="datepicker text arrival" name="arrival1" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="departure1">Departure</label>
					<input class="datepicker text departure" name="departure1" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->
				
				<div class="buttons">
					<a href="/whywhistler/"><img src="/css/images/booking_widget/bpg.gif" /></a>
					<input onclick="search_category($(this).parents('.booking').attr('id'), 3, true); return false;" type="submit" value="SEARCH" />
				</div>
				<!-- / buttons -->
				
			</div>
			<!-- / transfers -->
			
			<div id="widget-flights" class="booking">
			
				<div class="field half">
					<label for="departure">Arrival</label>
					<input class="datepicker text arrival" name="departure" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="arrival">Return</label>
					<input class="datepicker text departure" name="arrival" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->
				
				<div class="field">
					<label for="adep">Departure Airport</label>
					<input id="adep" class="departure-airport text" name="adep" type="text" /> <div id="e1" style="z-index: 0; position: relative"></div>
				</div>
				<!-- / field -->
				
				<div class="field">
					<label for="aarr">Arrival Airport</label>
					<select id="aarr" class="arrival-airport" name="aarr">
						<option selected="selected" value="YVR">Vancouver, BC Canada YVR</option>
						<option value="YYJ">Victoria, BC Canada YYJ</option>
						<option value="SEA">Seattle, WA USA SEA</option>
					</select>					
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="adults">Adults</label>
					<select id="adults" name="adults" class="adults text">
						<option selected="selected" value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
					</select>
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label>Children</label>
					<select id="children" name="children" class="children">
						<option selected="selected" value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
					</select>
				</div>
				<!-- / field -->

				<div class="buttons">
					<a href="/whywhistler/"><img src="/css/images/booking_widget/bpg.gif" /></a>
					<input onclick="search_flights($(this).parents('.booking').attr('id')); return false;" type="submit" value="SEARCH" /><input type="hidden" id="hidAirport" class="departure-airport hidAirport" />
				</div>
				<!-- / buttons -->

			</div>
			<!-- / flights -->
			
			<div id="widget-activities" class="booking">

				<div class="field">
					<label for="selectActivity">Activity</label>
					<select id="selectActivity" class="cat_id" name="selectActivity">
                        <option selected="selected" value="-1">-ALL-</option>
                        <option value="142">4x4 Tours</option>
                        <option value="165">ATV Tours</option>
                        <option value="174">Backcountry Skiing</option>
                        <option value="122">Adventure Tours</option>
                        <option value="169">Canoe/Kayak Trip</option>
                        <option value="129">Cross Country Skiing</option>
                        <option value="206">Dining &amp; Nightlife</option>
                        <option value="160">Dog Sledding</option>
                        <option value="123">Attractions</option>
                        <option value="125">Fishing</option>
                        <option value="207">Helicopter Tours</option>
                        <option value="140">Heli-skiing</option>
                        <option value="172">Hiking</option>
                        <option value="126">Horseback Riding</option>
                        <option value="183">Mountain Biking</option>
                        <option value="121">Rafting</option>
                        <option value="127">Scenic Tours</option>
                        <option value="128">Ski/Snowboard School - Adult</option>
                        <option value="144">Sleigh Rides</option>
                        <option value="139">Snowcat Skiing</option>
                        <option value="141">Snowmobiling</option>
                        <option value="176">Snowshoeing</option>
                        <option value="164">Via Ferrata</option>
                        <option value="186">Water Sports</option>
                        <option value="188">Zip-line</option>
					</select>
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="arrival1">Arrival</label>
					<input class="datepicker text arrival" name="arrival3" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="departure1">Departure</label>
					<input class="datepicker text departure" name="departure3" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->

				<div class="buttons">
					<a href="/whywhistler/"><img src="/css/images/booking_widget/bpg.gif" /></a>
					<input onclick="search_category($(this).parents('.booking').attr('id'), 2, true); return false;" type="submit" value="SEARCH" />
				</div>
				<!-- / buttons -->

			</div>
			<!-- / activities -->
			
			<div id="widget-rentals" class="booking">
			
				<div class="field">
					<label for="selectRental">Equipment</label>
					<select id="selectRental" class="cat_id" name="selectRental">
						<option selected="selected" value="-1">-ALL-</option>
						<option value="130">Rental - Bike</option>
						<option value="133">Rental - Ski/Snowboard</option>
					</select>
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="arrival1">Arrival</label>
					<input class="datepicker text arrival" name="arrival4" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->
				
				<div class="field half">
					<label for="departure1">Departure</label>
					<input class="datepicker text departure" name="departure4" size="13" type="text" value="(mm/dd/yyyy)" />
				</div>
				<!-- / field -->
			
				<div class="buttons">
					<a href="/whywhistler/"><img src="/css/images/booking_widget/bpg.gif" /></a>
					<input onclick="search_category($(this).parents('.booking').attr('id'), 6, true); return false;" type="submit" value="SEARCH" />
				</div>
				<!-- / buttons -->
				
			</div>
			<!-- / rentals -->
			
			<a href="#" id="toggle_booking_widget"></a>
            
        </div>
		<!-- / widget -->
    
    </div>
	<!-- / booking_widget -->
    
</div>
<!-- / booking_widget_holder -->
<script type="text/javascript" src="/js/airports.js"></script>
<script type="text/javascript" src="/js/booking-widget.js"></script>