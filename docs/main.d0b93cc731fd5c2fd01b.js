!function(){"use strict";var e,t={402:function(e,t,n){var r=n(294),a=n(935),i=n(871),l=n(307),c=n(17),o=function(e){var t=e.definition,n=e.className,a=void 0===n?"":n,i=e.size,l=void 0===i?16:i;return r.createElement("svg",{"aria-hidden":!0,focusable:!1,className:a+" svg-inline--fa fa-"+t.iconName+" fa-w-"+l,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.icon[0]+" "+t.icon[1]},r.createElement("path",{fill:"currentColor",d:t.icon[4]}))};function u(){var e=new Date;return{year:e.getFullYear(),month:e.getMonth(),monthDay:e.getDate()-1,weekDay:e.getDay(),hour:e.getHours(),minute:e.getMinutes()}}var s,m=(0,r.createContext)({year:0,month:0,monthDay:0,weekDay:0,hour:0,minute:0}),v=function(e){var t=e.children,n=void 0===t?null:t,a=(0,r.useState)(u()),i=a[0],l=a[1];return(0,r.useEffect)((function(){var e=setInterval((function(){l(u)}),1e4);return function(){clearInterval(e)}})),r.createElement(m.Provider,{value:i},n)},f=function(){var e=(0,r.useContext)(m).hour%12;return r.createElement(r.Fragment,null,""+(0===e?12:e))},d=function(){var e,t=(0,r.useContext)(m).minute;return r.createElement(r.Fragment,null,""+(e=t,2,(""+(Math.pow(10,2)+e)).slice(1)))},h=function(){var e=(0,r.useContext)(m).hour;return r.createElement(r.Fragment,null,e>=12?"PM":"AM")},E="src-style-device-StatusBar__block--HRbvb",y=function(e){var t=e.showTime;return r.createElement("div",{className:"src-style-device-StatusBar__statusBar--X4PyE"},r.createElement("div",{className:"src-style-device-StatusBar__left--bCNyi"},r.createElement("div",{className:E},"Hunmin Park")),r.createElement("div",{className:"src-style-device-StatusBar__right--hPifz"},r.createElement("div",{className:E},r.createElement(o,{definition:i.$A})),r.createElement("div",{className:E},r.createElement(o,{definition:l.CS})),r.createElement("div",{className:E},r.createElement(o,{definition:c.Ro})),t&&r.createElement("div",{className:E},r.createElement(v,null,r.createElement(f,null),":",r.createElement(d,null)," ",r.createElement(h,null)))))},g=document.querySelector(".Temporary");null===(s=null==g?void 0:g.parentNode)||void 0===s||s.removeChild(g),(0,a.render)(r.createElement((function(){return r.createElement("div",{className:"src-style-device-Device__device--_rShK"},r.createElement(y,{showTime:!0}))}),null),document.querySelector(".Root"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,a,i){if(!n){var l=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],i=e[s][2];for(var c=!0,o=0;o<n.length;o++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[o])}))?n.splice(o--,1):(c=!1,i<l&&(l=i));if(c){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,a,i]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,l=n[0],c=n[1],o=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(o)var s=o(r)}for(t&&t(n);u<l.length;u++)i=l[u],r.o(e,i)&&e[i]&&e[i][0](),e[l[u]]=0;return r.O(s)},n=self.webpackChunkmypage=self.webpackChunkmypage||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[367],(function(){return r(402)}));a=r.O(a)}();