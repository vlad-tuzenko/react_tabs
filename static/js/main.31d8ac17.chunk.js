(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),s=n(4),b=n(5),i=n(9),r=n(8),l=n(1),o=n.n(l),d=(n(14),n(7)),j=n.n(d),u=n(0),h=function(t){var e=t.tabs,n=t.selectedTabId,a=t.onTabSelected;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("nav",{className:"App__tabs",children:e.map((function(t){return Object(u.jsx)("button",{className:j()("Tab",{"Tab--selected":t.id===n}),type:"button",onClick:function(){return a(t)},children:t.title})}))})})},p=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],T=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),b=0;b<a;b++)c[b]=arguments[b];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:p[0]},t.onTabSelected=function(e){t.setState({selectedTab:e})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Selected tab is: ".concat(this.state.selectedTab.title)}),Object(u.jsx)(h,{tabs:p,selectedTabId:this.state.selectedTab.id,onTabSelected:this.onTabSelected})]}),Object(u.jsx)("p",{className:"App__content",children:this.state.selectedTab.content})]})}}]),n}(o.a.Component),m=T;c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.31d8ac17.chunk.js.map