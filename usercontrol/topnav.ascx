<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="topnav.ascx.cs" Inherits="WhistlerNew.usercontrol.topnav" %>
<div id="nav">
	<ul>
		<li class="about-whistler"><a href="/about/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','About Whistler'])">About Whistler</a>
			<ul class="dropdown">
				<li><a href="/village/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Whistler'])">Whistler Village</a></li>
				<li><a href="/creekside/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Creekside'])">Whistler Creekside</a></li>
				<li><a href="/stats/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Stats and Facts'])">Stats &amp; Facts</a></li>
				<li><a href="/whistler_history/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Whistler History'])">Whistler History</a></li>
				<li><a href="/awards/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Awards & Recognition'])">Awards &amp; Recognition</a></li>
				<li><a href="/olympics/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Olympics/Paralympics'])">Olympics/Paralympics</a></li>
				<li><a href="/nature/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Nature'])">Nature</a></li>
				<li><a href="/environment/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Environment'])">Environment</a></li>
				<li><a href="/maps/" onclick="_gaq.push(['_trackEvent','TopNav','About Whistler','Whistler Maps'])">Whistler Maps</a></li>
			</ul>
		</li>
		<li class="places-to-stay"><a href="/accommodation/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Places To Stay'])">Places To Stay</a>
			<ul class="dropdown">
                <li><a href="/hotels/"onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Hotels'])">Hotels</a></li>
                <li><a href="/condos/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Condo Lodges'])">Condo Lodges</a></li>
                <li><a href="/townhomes/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Condo/Townhomes'])">Condo/Townhomes</a></li>
                <li><a href="/chalets/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Homes'])">Homes</a></li>
                <li><a href="/a-z/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','A-Z Listing'])">A-Z Listing</a></li>
                <li><a href="/peak_ratings/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Peak Rating System'])">Peak Rating System</a></li>
                <li><a href="/search/" onclick="_gaq.push(['_trackEvent','TopNav','Places To Stay','Accommodation Search'])">Accommodation Search</a> </li>
			</ul>
		</li>
		<li class="packages-deals"><a href="/packages/" class="nav_link PD_link" onclick="_gaq.push(['_trackEvent','TopNav','Packages & Deals','Packages & Deals'])">Packages &amp; Deals</a>
			<ul class="dropdown"> 
				<li><a href="/summer_packages" onclick="_gaq.push(['_trackEvent','TopNav','Packages & Deals','Summer Packages'])">Summer Packages</a></li>
				<li><a href="/winter_packages/" onclick="_gaq.push(['_trackEvent','TopNav','Packages & Deals','Winter Packages'])">Winter Packages</a></li>
				<li><a href="/room_only_specials" onclick="_gaq.push(['_trackEvent','TopNav','Packages & Deals','Room Only Specials'])">Room Only Specials</a></li>
				<li><a href="/deals/" onclick="_gaq.push(['_trackEvent','TopNav','Packages & Deals','Last Minute Deals'])">Last Minute Deals</a></li>
				<li><a href="/offers/" onclick="_gaq.push(['_trackEvent','TopNav','Packages & Deals','Special Offers'])">Special Offers</a></li>
				<li><a href="/gift_certificates/" onclick="_gaq.push(['_trackEvent','TopNav','Packages & Deals','Gift Certificates'])">Gift Certificates</a></li>
			</ul>
		</li>
		<li class="things-to-do"><a href="/activities/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Things To Do '])">Things To Do</a>
			<ul class="dropdown">
				<li><a href="/activities/summer/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Summer Activities'])">Summer Activities</a></li>
				<li><a href="/activities/winter/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Winter Activities'])">Winter Activities</a></li>
				<li><a href="/events/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Events'])">Events</a></li>
				<li><a href="/activities/indoor/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Indoor Activities'])">Indoor Activities</a></li>
				<li><a href="/arts/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Arts & Culture'])">Arts &amp; Culture</a></li>
				<li><a href="/olympic_experience/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Olympic Experience'])">Olympic Experience</a></li>
				<li><a href="/wellness/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Health & Wellness'])">Health &amp; Wellness</a></li>
				<li><a href="/dining/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Dining'])">Dining</a></li>
				<li><a href="/shopping/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Shopping'])">Shopping</a></li>
				<li><a href="/nightlife/" onclick="_gaq.push(['_trackEvent','TopNav','Things To Do ','Nightlife'])">Nightlife</a></li>
			</ul>
		</li>
		<li class="getting-here"><a href="/transportation/" class="nav_link GH_link" onclick="_gaq.push(['_trackEvent','TopNav','Getting Here','Getting Here'])">Getting Here</a>
			<ul class="dropdown">
				<li><a href="/aerial/" onclick="_gaq.push(['_trackEvent','TopNav','Getting Here','By Air'])">By Air</a></li>
				<li><a href="/road/" onclick="_gaq.push(['_trackEvent','TopNav','Getting Here','By Road'])">By Road</a></li>
				<li><a href="/train/" onclick="_gaq.push(['_trackEvent','TopNav','Getting Here','By Rail'])">By Rail</a></li>
				<li><a href="/passport_requirements/" onclick="_gaq.push(['_trackEvent','TopNav','Getting Here','Passport Requirements'])">Passport Requirements</a></li>
			</ul>
		</li>
		<li class="groups"><a href="/groups/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Groups'])">Groups</a>
			<ul class="dropdown">
				<li><a href="/meetings/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Meetings & Conventions'])">Meetings &amp; Conventions</a></li>
				<li><a href="/groups/conference_centre/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Whistler Conference Centre'])">Conference Centre</a></li>
				<li><a href="/groups/teambuilding/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Teambuilding'])">Teambuilding</a></li>
				<li><a href="/sport_groups/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Sport Groups'])">Sport Groups</a></li>
				<li><a href="/groups/youth_groups/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Youth & School'])">Youth &amp; School</a></li>
				<li><a href="/family_groups/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Family, Church & Social'])">Family, Church &amp; Social</a></li>
				<li><a href="/weddings/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Weddings'])">Weddings</a></li>
				<li><a href="/groups/properties/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Properties'])">Properties</a></li>
				<li><a href="/groups/contact/" onclick="_gaq.push(['_trackEvent','TopNav','Groups','Contact Us'])">Contact Us</a></li>
			</ul>
		</li>
		<li class="blog last"><a href="/experience/" onclick="_gaq.push(['_trackEvent','TopNav','Share & Experience','Share & Experience'])">Blog / Photos / Video</a>
			<ul class="dropdown">
				<li><a href="/social/" onclick="_gaq.push(['_trackEvent','TopNav','Share & Experience','Your Whistler'])">Social Media</a></li>
				<li><a href="/blog/" onclick="_gaq.push(['_trackEvent','TopNav','Share & Experience','Blog'])">Blog</a></li>
				<li><a href="/weather/" onclick="_gaq.push(['_trackEvent','TopNav','Share & Experience','Weather'])">Weather</a></li>
				<li><a href="/webcam/" onclick="_gaq.push(['_trackEvent','TopNav','Share & Experience','Webcams'])">Web Cams</a></li>
				<li><a href="/contests/" onclick="_gaq.push(['_trackEvent','TopNav','Share & Experience','Contests'])">Contests</a></li>
				<li><a href="/gallery/" onclick="_gaq.push(['_trackEvent','TopNav','Share & Experience','Photo Gallery'])">Photo Gallery</a></li>
				<li><a href="/video/" onclick="_gaq.push(['_trackEvent','TopNav','Share & Experience','Video Gallery'])">Video Gallery</a></li>
				<li><a href="/itineraries/" onclick="_gaq.push(['_trackEvent','TopNav','Share & Experience','Itineraries'])">Itineraries</a></li>
			</ul>
		</li>
	</ul>
</div>