<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="book_now_main.ascx.cs" Inherits="WhistlerNew.usercontrol.book_now_main" %>
<div id="booking_widget_holder">
    
	<div id="booking_widget">

		<a href="#" id="widget_closed"></a>
		
    	<div id="widget" class="simple-widget">
		
			<div class="widget-loading">
				<img src="http://www.whistler.com/images/booking-widget/loading.gif" alt="Loading&hellip;" title="Loading&hellip;" width="126" height="22" />
			</div>
		
			<h2>Plan Your Trip <small>1.800.944.7853</small></h2>
			
			<div class="simple">
				
				<fieldset class="left">
				
					<legend>Plan Your Trip</legend>
				
					<div class="field">
						<label for="arrival">Arrival</label>
						<input type="text" name="arrival" class="text arrival" value="" />
					</div>
					<!-- / field -->
					
					<div class="field">
						<label for="departure">Departure</label>
						<input type="text" name="departure" class="text departure" value="" />
					</div>
					<!-- / field -->
					
				</fieldset>
				
				<fieldset class="right">
				
					<div class="field">
						<label for="adults">Adults</label>
						<select name="adults" class="adults">
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
					
					<div class="field last">
						<label for="children">Kids</label>
						<select name="children" class="children" onchange="show_child_ages($(this).val(), $(this).parents('#widget').attr('id'), true)">
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
				
				</fieldset>
				
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
				
				<div class="field">
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
					<input onclick="search_accommodation($(this).parents('#widget').attr('id')); return false" type="submit" value="SEARCH" />
				</div>
				<!-- / buttons -->
				
			</div>
			<!-- / simple -->
			
		</div>
		<!-- /#widget -->
		
		<div id="info-popup" class="info-popup">
			<p>
				<a href="#" class="close"></a>
				<strong>Whistler.com</strong> - Official tourism website for the resort of Whistler, BC Canada. Plan and book 
				<a href="/accommodation/">Whistler accommodation</a> including <a href="/hotels/">hotels</a>, lodging and 
				<a href="/condos/">condos</a>; as well as events, dining, winter activities, ski and snowboard lift tickets, 
				rentals, and lessons. Find additional Whistler Blackcomb mountain information, including web cams, photos, snow reports, 
				live weather and much more to help plan your Whistler vacation.
			</p>
		</div>
		<!-- / info-popup -->
		
    </div>
	<!-- / #booking_widget -->
    
</div>
<!-- / #booking_widget_holder -->
<script type="text/javascript" src="/js/airports.js"></script>
<script type="text/javascript" src="/js/booking-widget.js"></script>