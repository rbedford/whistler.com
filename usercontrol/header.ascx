<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="header.ascx.cs" Inherits="WhistlerNew.usercontrol.header" %>

<div id="header">

	<div id="header_links">
		<a href="/trade/">Travel Trade</a>|
		<a href="/meetings/">Meeting Planners</a>|
		<a href="/media/">Media</a>|
		<a href="/members/">Member</a>|
		<a href="/event_toolkit/">Event Producers</a>
   <asp:PlaceHolder ID="phCart" runat="server"></asp:PlaceHolder>
	
	</div>
	<!-- / header_links -->
	
	<a href="/" id="logo"></a>
	
	<div id="nav">
		<ul>
			<li class="about"><a href="/about/">ABOUT WHISTLER</a>
				<ul class="dropdown">
					<li><a href="/village/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Whistler'])">Whistler Village</a></li>
					<li><a href="/creekside/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Creekside'])">Whistler Creekside</a></li>
					<li><a href="/stats/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Stats and Facts'])">Stats &amp; Facts</a></li>
					<li><a href="/whistler_history/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Whistler History'])">Whistler History</a></li>
					<li><a href="/awards/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Awards &amp; Recognition'])">Awards &amp; Recognition</a></li>
					<li><a href="/olympics/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Olympics/Paralympics'])">Olympics/Paralympics</a></li>
					<li><a href="/nature/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Nature'])">Nature</a></li>
					<li><a href="/environment/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Environment'])">Environment</a></li>
					<li><a href="/maps/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Whistler Maps'])">Whistler Maps</a></li>
				</ul>
			</li>
			
			<li class="places"><a href="/accommodation/">PLACES TO STAY</a>
				<ul class="dropdown"> 
					<li><a href="/hotels/"onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Hotels'])">Hotels</a></li>
					<li><a href="/condos/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Condo Lodges'])">Condo Lodges</a></li>
					<li><a href="/townhomes/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Condo/Townhomes'])">Condo/Townhomes</a></li>
					<li><a href="/chalets/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Homes'])">Homes</a></li>
					<li><a href="/a-z/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','A-Z Listing'])">A-Z Listing</a></li>
					<li><a href="/peak_ratings/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Peak Rating System'])">Peak Rating System</a></li>
					<li><a href="/search/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Accommodation Search'])">Accommodation Search</a> </li>
					<li><a href="/map/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Map'])">Map</a></li>
				</ul>
			</li>
			
			<li class="deals"><a href="/packages/">PACKAGES &amp; DEALS</a>
				<ul class="dropdown">
		<li><a href="/winter_packages/" onclick="_gaq.push(['_trackEvent','TopNav','Packages &amp; Deals','Winter Packages'])">Winter Packages</a></li>
					<li><a href="/summer_packages" onclick="_gaq.push(['_trackEvent','TopNav','Packages &amp; Deals','Summer Packages'])">Summer Packages</a></li>
		<li><a href="/room_only_specials" onclick="_gaq.push(['_trackEvent','TopNav','Packages &amp; Deals','Room Only Specials'])">Room Only Specials</a></li>
					<li><a href="/deals/" onclick="_gaq.push(['_trackEvent','TopNav','Packages &amp; Deals','Last Minute Deals'])">Last Minute Deals</a></li>
					<li><a href="/offers/" onclick="_gaq.push(['_trackEvent','TopNav','Packages &amp; Deals','Special Offers'])">Special Offers</a></li>
					<li><a href="/gift_certificates/" onclick="_gaq.push(['_trackEvent','TopNav','Packages &amp; Deals','Gift Certificates<'])">Gift Certificates</a></li>
				</ul>
			</li>
			
			<li class="things"><a href="/activities/">THINGS TO DO</a>
				<ul class="dropdown">
					<li><a href="/activities/winter/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Winter Activities'])">Winter Activities</a></li>
					<li><a href="/activities/summer/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Summer Activities'])">Summer Activities</a></li>
					<li><a href="/events/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Events'])">Events</a></li>
					<li><a href="/activities/indoor/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Indoor Activities'])">Indoor Activities</a></li>
					<li><a href="/arts/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Arts &amp; Culture'])">Arts &amp; Culture</a></li>
					<li><a href="/olympic_experience/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Olympic Experience'])">Olympic Experience</a></li>
					<li><a href="/wellness/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Health &amp; Wellness'])">Health &amp; Wellness</a></li>
					<li><a href="/dining/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Dining'])">Dining</a></li>
					<li><a href="/shopping/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Shopping'])">Shopping</a></li>
					<li><a href="/nightlife/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Nightlife'])">Nightlife</a></li>
				</ul>
			</li>
			
			<li class="getting"><a href="/transportation/">GETTING HERE</a>
				<ul class="dropdown">
					<li><a href="/aerial/" onclick="_gaq.push(['_trackEvent','TopNav','Getting Here','By Air'])">By Air</a></li>
					<li><a href="/road/" onclick="_gaq.push(['_trackEvent','TopNav','Getting Here','By Road'])">By Road</a></li>
					<li><a href="/train/" onclick="_gaq.push(['_trackEvent','TopNav','Getting Here','By Rail'])">By Rail</a></li>
					<li><a href="/passport_requirements/" onclick="_gaq.push(['_trackEvent','TopNav','Getting Here','Passport Requirements'])">Passport Requirements</a></li>
				</ul>
			</li>
			
			<li class="groups"><a href="/groups/">GROUPS</a>
				<ul class="dropdown">
					<li><a href="/meetings/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Meetings &amp; Conventions'])">Meetings &amp; Conventions</a></li>
					<li><a href="/groups/conference_centre/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Whistler Conference Centre'])">Conference Centre</a></li>
					<li><a href="/groups/teambuilding/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Teambuilding'])">Teambuilding</a></li>
					<li><a href="/sport_groups/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Sport Groups'])">Sport Groups</a></li>
					<li><a href="/groups/youth_groups/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Youth &amp; School'])">Youth &amp; School</a></li>
					<li><a href="/family_groups/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Family, Church &amp; Social'])">Family, Church &amp; Social</a></li>
					<li><a href="/weddings/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Weddings'])">Weddings</a></li>
					<li><a href="/groups/properties/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Properties'])">Properties</a></li>
					<li><a href="/groups/contact/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Contact Us'])">Contact Us</a></li>
				</ul>
			</li>
			
			<li class="blogs last"><a href="/experience/">BLOGS/PHOTOS/VIDEO</a>
				<ul class="dropdown">
					<li><a href="/social/" onclick="_gaq.push(['_trackEvent','TopNav','Share &amp; Experience','Your Whistler'])">Social Media</a></li>
					<li><a href="/blog/" onclick="_gaq.push(['_trackEvent','TopNav','Share &amp; Experience','Blog'])">Blog</a></li>
					<li><a href="/weather/" onclick="_gaq.push(['_trackEvent','TopNav','Share &amp; Experience','Weather'])">Weather</a></li>
					<li><a href="/webcam/" onclick="_gaq.push(['_trackEvent','TopNav','Share &amp; Experience','Webcams'])">Webcams</a></li>
					<li><a href="/contests/" onclick="_gaq.push(['_trackEvent','TopNav','Share &amp; Experience','Contests'])">Contests</a></li>
					<li><a href="/gallery/" onclick="_gaq.push(['_trackEvent','TopNav','Share &amp; Experience','Photo Gallery'])">Photo Gallery</a></li>
					<li><a href="/video/" onclick="_gaq.push(['_trackEvent','TopNav','Share &amp; Experience','Video Gallery'])">Video Gallery</a></li>
					<li><a href="/itineraries/" onclick="_gaq.push(['_trackEvent','TopNav','Share &amp; Experience','Itineraries'])">Itineraries</a></li>
				</ul>
			</li>
		</ul>
	</div>
	<!-- / nav -->
	
	<div id="weather-widget">
	
		<ul class="inner">
		
			<li class="snow">
			
				<ul id="ticker" class="ticker">
					<li>
						<dl class="new-snow">
							<dt><a href="/weather/">New <br />Snow</a></dt>
							<dd><a href="/weather/"></a></dd>
						</dl>
					</li>
					
					<li>
						<dl class="snow-twofour">
							<dt><a href="/weather/">Snow <br />24 hrs</a></dt>
							<dd><a href="/weather/"></a></dd>
						</dl>
					</li>
					
					<li>
						<dl class="snow-sevenday">
							<dt><a href="/weather/">Snow <br />7 Day</a></dt>
							<dd><a href="/weather/"></a></dd>
						</dl>
					</li>
				</ul>
				<!--  /ticker -->
				
			</li>
			<!-- new-snow -->
			
			<li class="snow-base">
				<dl>
					<dt><a href="/weather/">Snow <br />Base</a></dt>
					<dd><a href="/weather/"></a></dd>
				</dl>
			</li>
			<!-- snow-base -->
			
			<li class="live-webcams">
				<a href="/webcam/">Live Webcams</a>
			</li>
			<!-- live-webcams -->
			
		</ul>
		
	</div>
	<!-- / weather-widget -->
	
</div>
<!-- /header -->