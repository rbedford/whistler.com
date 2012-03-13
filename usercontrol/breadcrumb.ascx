<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="breadcrumb.ascx.cs" Inherits="WhistlerNew.usercontrol.breadcrumb" %>
        <p>
        <asp:SiteMapPath ID="site" runat="server"  PathSeparator=""  >
        <RootNodeTemplate><a href='<%# Eval("url") %>'><%# Eval("title") %></a></RootNodeTemplate>
        <RootNodeStyle CssClass="nodeHome" />
        <NodeTemplate><a href='<%# Eval("url") %>'><%# Eval("title") %></a></NodeTemplate>
        <NodeStyle CssClass="node" />
        <CurrentNodeTemplate><%# Eval("title") %></CurrentNodeTemplate>
        <CurrentNodeStyle CssClass="nodeCurrent" />
            <PathSeparatorTemplate>&nbsp;</PathSeparatorTemplate>
            <PathSeparatorStyle CssClass="nodeArrow" />
        </asp:SiteMapPath>
        </p>