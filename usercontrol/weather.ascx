<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="weather.ascx.cs" Inherits="WhistlerNew.usercontrol.weather" %>
  
        <asp:Label ID="lblSnow1" runat="server" visible="false"></asp:Label>
   
               
 
    


<asp:Label ID="lblSnow2" Visible="false" runat="server"></asp:Label>
<asp:Label ID="lblTemp2" Visible="false" runat="server"></asp:Label>



 <div id="weather">
            
                <h3>WEATHER</h3>
                <div id="weather_snippet">
                   <asp:Image ID="image1" runat="server" AlternateText="weather icon" Width="45" Height="45" />
                    <p>Whistler, BC <span id="temp"><asp:Label ID="lblTemp1" runat="server"></asp:Label>&deg;C</span></p>
                </div> 
           		<a href="/weather/" class="footer_link" onclick="_gaq.push(['_trackEvent', 'footer', 'click', 'weather'])">FULL FORECAST</a>
                
            </div>
            
          