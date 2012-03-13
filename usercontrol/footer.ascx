<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="footer.ascx.cs" Inherits="WhistlerNew.usercontrol.footer" %>
<%@ Register Src="~/usercontrol/weather.ascx" TagPrefix="weather" TagName="w" %>
<%@ Register Src="~/usercontrol/search.ascx" TagPrefix="search" TagName="s" %>
<div id="footer">

    <div id="column_holder">
    	
        <div class="columns column1">
            
            <weather:w ID="w" runat="server" />

            <div id="webcams">
            
                 <h3>WEBCAMS</h3>
                 <p><a href="/webcam/#whistler" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'whistlercam'])">Whistler Alpine</a><br/><a href="/webcam/#blackcomb" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'blackcombcam'])">Blackcomb Alpine</a><br/><a href="/webcam/#golf" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'golfcam'])">Whistler Golf Course</a><br/><a href="/webcam/#lost-lake" onclick="_gaq.push(['_trackEvent', 'homepage', 'footer', 'lostlakecam'])">Lost Lake Trailhead</a></p>
                
            </div>
                
        </div>
        
       <div class="columns column2">
        
            <div id="insider">
                
                <h3>THE WHISTLER INSIDER</h3>
                <p>Keep current with all the latest news and events.</p>
                <a href="/emails/" class="footer_link" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'emails'])">EMAIL SIGN UP</a>

            </div>
            
            <div id="follow">
            
                <h3>FOLLOW US</h3>
                <a href="http://www.facebook.com/GoWhistler" class="like" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'facebook_like'])" target="_blank">Like us on Facebook.</a>
                <p>
                    <a href="http://www.facebook.com/gowhistler" class="social facebook" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'facebook'])" title="Become a fan on Facebook" target="_blank"></a>
                    <a href="http://twitter.com/gowhistler" class="social twitter" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'twitter'])" title="Follow us on Twitter" target="_blank"></a>
                    <a href="http://www.youtube.com/gowhistler" class="social youtube" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'youtube'])" title="Subscribe to our YouTube channel" target="_blank"></a>
                    <a href="http://www.flickr.com/photos/gowhistler" class="social flickr" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'flickr'])" title="Add us as a contact on Flickr" target="_blank"></a>
                    <a href="/mobile/" class="social mobile" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'mobile'])" title="View our mobile website" target="_blank"></a>
                    <a href="/blog/" class="social blog" onclick="_gaq.push(['_trackEvent', 'socialmedia', 'click', 'blog'])" title="The Whistler Insider Blog"></a>
           		</p>
            	
				<p id="trip">Check out what other travelers say about <a href="http://www.tripadvisor.com/Tourism-g154948-Whistler_British_Columbia-Vacations.html" id="trip">Whistler</a> on TripAdvisor.</p>
                
            </div>

        </div>
        
        <div class="columns column3">
        
            <div id="international">
                <h3>INTERNATIONAL VISITORS</h3>
		<a href="/uk/" class="flag uk" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'uk'])">United Kingdom</a>
                <a href="/de/" class="flag germany" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'germany'])">Germany</a>
                <a href="/japan/about/" class="flag japan" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'japan'])">Japan</a>
                <a href="/kr/about/" class="flag korea" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'korea'])">South Korea</a>
                <a href="/au/" class="flag australia" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'australia'])">Australia</a>
            </div>
        
        
            <div id="interest">
                <h3>SPECIAL INTEREST</h3>
		<a href="/gay_friendly_whistler/" class="flag gay" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'gay'])">Gay Friendly</a>
                <a href="/accessible_whistler/" class="flag access" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'accessible'])">Accessibilty</a>
            </div>

        </div>
        
        
        <div class="columns column4">
        
            <div id="more">
            
                <h3>MORE</h3>
                <p>
                    <a href="/about/" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'about'])">About Us</a><br/>
                    <a href="/directory/accommodations/" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'directory'])">Business Directory</a><br/>
                    <a href="/partners/" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'partners'])">Partners &amp; Sponsors</a><br/>
                    <a href="/careers/" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'careers'])">Careers</a><br/>
                    <a href="/privacy/" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'privacy'])">Privacy Policies</a><br/>
                    <a href="/contact/" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'contact'])">Contact Us</a><br/>
                    <a href="/sitemap/" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'sitemap'])">Site Map</a>
                </p>
                
               <search:s ID="s" runat="server" />
   
            
            </div>
        
        </div>
        
        <p id="copyright">Copyright Tourism Whistler 2012 All Rights Reserved</p>
        
    </div>
	
</div>