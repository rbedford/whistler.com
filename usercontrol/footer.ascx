<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="footer.ascx.cs" Inherits="WhistlerNew.usercontrol.footer" %>
<%@ Register Src="~/usercontrol/weather.ascx" TagPrefix="weather" TagName="w" %>
<%@ Register Src="~/usercontrol/search.ascx" TagPrefix="search" TagName="s" %>
<div id="footer">

	<div id="column_holder">
	
		<div class="columns online-reservations">
			
			<div id="reservations">
				<h3>WHISTLER.COM RESERVATIONS</h3>
				<ul>
					<li>North America Toll-Free<br /> 1.800.944.7853</li>
					<li>International Calls<br /> 1.604.932.0606</li>
				</ul>
			</div>
			<!-- / reservations -->
			
			<weather:w ID="w" runat="server" />
			
		</div>
		<!-- / online-reservations -->
		
		<div class="columns whistler-insider">
			
			<div id="insider">
				
                <h3>THE WHISTLER INSIDER</h3>
                <p>Keep current with all the latest news and events.</p>
                <a href="/emails/" class="footer_link" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'emails'])">EMAIL SIGN UP</a>
				
            </div>
			<!-- / insider -->
			
			<div id="follow">
			
				<h3>FOLLOW US</h3>
				<ul>
					<li><a href="http://www.facebook.com/GoWhistler" class="like" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'facebook_like'])" target="_blank">Like us on Facebook.</a></li>
					<li><a href="http://www.facebook.com/gowhistler" class="social facebook" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'facebook'])" title="Become a fan on Facebook" target="_blank"></a></li>
					<li><a href="http://twitter.com/gowhistler" class="social twitter" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'twitter'])" title="Follow us on Twitter" target="_blank"></a></li>
					<li><a href="http://www.youtube.com/gowhistler" class="social youtube" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'youtube'])" title="Subscribe to our YouTube channel" target="_blank"></a></li>
					<li><a href="http://www.flickr.com/photos/gowhistler" class="social flickr" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'flickr'])" title="Add us as a contact on Flickr" target="_blank"></a></li>
					<li><a href="/mobile/" class="social mobile" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'mobile'])" title="View our mobile website" target="_blank"></a></li>
					<li><a href="/blog/" class="social blog" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'blog'])" title="The Whistler Insider Blog"></a></li>
				</ul>
				
				<p id="trip">Check out what other travelers say about <a href="http://www.tripadvisor.com/Tourism-g154948-Whistler_British_Columbia-Vacations.html" id="trip">Whistler</a> on TripAdvisor.</p>
                
            </div>
			<!-- / follow -->

		</div>
		<!-- / whistler-insider -->
        
		<div class="columns international-visitors">
		
			<div id="international">
				<h3>INTERNATIONAL VISITORS</h3>
				<ul>
					<li><a href="/uk/" class="flag uk" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'uk'])">United Kingdom</a></li>
					<li><a href="/de/" class="flag germany" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'germany'])">Germany</a></li>
					<li><a href="/japan/about/" class="flag japan" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'japan'])">Japan</a></li>
					<li><a href="/kr/about/" class="flag korea" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'korea'])">South Korea</a></li>
					<li><a href="/au/" class="flag australia" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'australia'])">Australia</a></li>
				</ul>
			</div>
			<!-- / international -->
			
			<div id="interest">
				<h3>SPECIAL INTEREST</h3>
				<ul>
					<li><a href="/gay_friendly_whistler/" class="flag gay" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'gay'])">Gay Friendly</a></li>
					<li><a href="/accessible_whistler/" class="flag access" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'accessible'])">Accessibilty</a></li>
				</ul>
			</div>
			<!-- / interest -->
		
		</div>
		<!-- / international-visitors -->
        
		<div class="columns more-links">
		
			<div id="more">
			
				<h3>MORE</h3>
				<ul>
					<li><a href="/about/">About Us</a></li>
					<li><a href="/directory/accommodations/" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'directory'])">Business Directory</a></li>
					<li><a href="/partners/" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'partners'])">Partners &amp; Sponsors</a></li>
					<li><a href="/careers/" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'careers'])">Careers</a></li>
					<li><a href="/privacy/" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'privacy'])">Privacy Policies</a></li>
					<li><a href="/contact/" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'contact'])">Contact Us</a></li>
					<li><a href="/sitemap/" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'sitemap'])">Site Map</a></li>
				</ul>
				
				<search:s ID="s" runat="server" />
			
			</div>
			<!-- / more -->
        
        </div>
		<!-- / more-links -->
        
		<p id="copyright">Copyright Tourism Whistler 2012 All Rights Reserved</p>
		
	</div>
	
</div>