(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1311:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(1290),i=n(1291),c=(n(72),n(177),n(22),n(2),n(35),n(23),n(3),n(126),n(1292)),o=n(1294),u=n(1293);function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=function(){var e=Object(r.useRef)(null),t=Object(r.useRef)(1e4),n=Object(r.useState)(Array(200).fill(!0).map((function(e,t){return Object(o.b)(1e4+t)}))),l=n[0],i=n[1],m=Object(r.useCallback)((function(){return t.current-=100,i([].concat(s(Array(100).fill(!0).map((function(e,n){return Object(o.b)(t.current+n)}))),s(l))),e.current.adjustForPrependedItems(100),!1}),[t,l,i]);return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",null,a.a.createElement(c.b,{ref:e,totalCount:l.length,item:function(e){return a.a.createElement(u.f,{user:l[e],index:e})},style:{height:"400px",width:"350px"}})),a.a.createElement("div",null,a.a.createElement("ul",{className:"knobs"},a.a.createElement("li",null,a.a.createElement("button",{onClick:m},"Prepend 100 items")))))},p=n(123);t.default=function(){return a.a.createElement(l.a,{sidebar:function(){return a.a.createElement(i.a,{path:"PrependItems"})}},a.a.createElement(p.Helmet,null,a.a.createElement("meta",{name:"description",content:"React Virtuoso live example with prepending items while preserving item indexes."})),a.a.createElement("h2",null,"Prepending Items"),a.a.createElement("p",null,"Appending items to the list is straightforward - as the items at the bottom will not displace the currently rendered ones."),a.a.createElement("p",null,"Prepending items is somewhat more complex, because the current items should remain at their location and their indexes should not be offset."),a.a.createElement("p",null,"This example shows how to increase the item count and instruct the component that you are prepending items."),a.a.createElement(m,null))}}}]);
//# sourceMappingURL=component---src-pages-prepend-items-js-67a5587ad521a607c396.js.map