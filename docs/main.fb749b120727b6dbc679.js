!function(){var e,t={8206:function(e,t,n){"use strict";n(4587);var r=n(9748),a=n(9704),i=n(5126),c=(0,i.oM)({name:"language",initialState:{currentLanguage:"Korean"},reducers:{setLanguage:function(e,t){e.currentLanguage=t.payload.language}}});function o(){var e=new Date;return{year:e.getFullYear(),month:e.getMonth(),monthDay:e.getDate()-1,weekDay:e.getDay(),hour:e.getHours(),minute:e.getMinutes()}}var l,u,s={currentTime:o()},m=(0,i.oM)({name:"time",initialState:s,reducers:{updateTime:function(e){e.currentTime=o()}}}),v=(0,i.xC)({reducer:(l={},l[c.name]=c.reducer,l[m.name]=m.reducer,l),devTools:!1}),f=a.I0,d=a.v9,g=n(9711),p=n(1871),h=n(8307),y=n(8017),P=function(e){var t=e.definition,n=e.className,a=void 0===n?"":n,i=e.size,c=void 0===i?16:i;return r.ZP.createElement("svg",{"aria-hidden":!0,focusable:!1,className:a+" svg-inline--fa fa-"+t.iconName+" fa-w-"+c,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.icon[0]+" "+t.icon[1]},r.ZP.createElement("path",{fill:"currentColor",d:t.icon[4]}))},E=function(){var e=d((function(e){return e.time.currentTime}));return r.ZP.createElement(r.ZP.Fragment,null,""+(0===e.hour?12:e.hour))},b=function(){var e,t=d((function(e){return e.time.currentTime}));return r.ZP.createElement(r.ZP.Fragment,null,""+(e=t.minute,2,(""+(Math.pow(10,2)+e)).slice(1)))},Z=function(){var e=d((function(e){return e.time.currentTime}));return r.ZP.createElement(r.ZP.Fragment,null,e.hour>=12?"PM":"AM")},N="src-style-device-StatusBar__block--HRbvb",w=function(e){var t=e.showTime;return r.ZP.createElement("div",{className:"src-style-device-StatusBar__statusBar--X4PyE"},r.ZP.createElement("div",{className:"src-style-device-StatusBar__left--bCNyi"},r.ZP.createElement("div",{className:N},"Hunmin Park")),r.ZP.createElement("div",{className:"src-style-device-StatusBar__right--hPifz"},r.ZP.createElement("div",{className:N},r.ZP.createElement(P,{definition:p.$A})),r.ZP.createElement("div",{className:N},r.ZP.createElement(P,{definition:h.CS})),r.ZP.createElement("div",{className:N},r.ZP.createElement(P,{definition:y.Ro})),t&&r.ZP.createElement("div",{className:N},r.ZP.createElement(E,null),":",r.ZP.createElement(b,null)," ",r.ZP.createElement(Z,null))))},_=n(6974),S=n(5020),T=n(9801),B="src-style-device-NavigationBar__button--NwjFZ",k="src-style-device-NavigationBar__cell--_umlN",O=n(633),M=n(4776),C=function(e){var t=e.showNavigators,n=(0,_.s0)(),a=d((function(e){return e.language.currentLanguage})),i=f(),o="Korean"===a?"English":"Korean",l="Korean"===a?O:M;return r.ZP.createElement("div",{className:"src-style-device-NavigationBar__navigationBar--E7BMH"},r.ZP.createElement("div",{className:k},r.ZP.createElement("button",{className:"src-style-device-NavigationBar__languageButton--iRh3w",style:{backgroundImage:"url("+l+")"},type:"button",title:"To "+o,"aria-label":"To "+o,onClick:function(){i(c.actions.setLanguage({language:o}))}})),r.ZP.createElement("div",{className:k},t&&r.ZP.createElement("button",{className:B,type:"button",title:"Home",onClick:function(){n("/")}},r.ZP.createElement(P,{definition:T.pL}))),r.ZP.createElement("div",{className:k},t&&r.ZP.createElement("button",{className:B,type:"button",title:"Back",onClick:function(){n(-1)}},r.ZP.createElement(P,{definition:S.A3}))))},j=document.querySelector(".Temporary");null===(u=null==j?void 0:j.parentNode)||void 0===u||u.removeChild(j),setInterval((function(){v.dispatch(m.actions.updateTime())}),3e4),(0,r.sY)(r.ZP.createElement((function(){return r.ZP.createElement(a.zt,{store:v},r.ZP.createElement(g.VK,null,r.ZP.createElement("div",{className:"src-style-device-Device__device--_rShK"},r.ZP.createElement(w,{showTime:!0}),r.ZP.createElement("div",{className:"src-style-device-Device__content--VYVhy"}),r.ZP.createElement(C,{showNavigators:!0}))))}),null),document.querySelector(".Root"))},4587:function(e,t,n){window.Symbol=n(8641),String.prototype.startsWith||(String.prototype.startsWith=function(e,t){var n=t>0?0|t:0;return this.substring(n,n+e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e})},4776:function(e,t,n){"use strict";e.exports=n.p+"72e6a649e4d645923f3c.svg"},633:function(e,t,n){"use strict";e.exports=n.p+"57828b5110d4e839b64c.svg"}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,a,i){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],i=e[s][2];for(var o=!0,l=0;l<n.length;l++)(!1&i||c>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(o=!1,i<c&&(c=i));if(o){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,a,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,c=n[0],o=n[1],l=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(l)var s=l(r)}for(t&&t(n);u<c.length;u++)i=c[u],r.o(e,i)&&e[i]&&e[i][0](),e[c[u]]=0;return r.O(s)},n=self.webpackChunkmypage=self.webpackChunkmypage||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[915],(function(){return r(8206)}));a=r.O(a)}();