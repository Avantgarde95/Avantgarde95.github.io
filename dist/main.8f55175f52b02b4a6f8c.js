!function(e){function n(n){for(var r,a,l=n[0],s=n[1],c=n[2],g=0,d=[];g<l.length;g++)a=l[g],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(n);d.length;)d.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,l=1;l<t.length;l++){var s=t[l];0!==i[s]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},i={0:0},o=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="dist/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=n,l=l.slice();for(var c=0;c<l.length;c++)n(l[c]);var u=s;o.push([13,1]),t()}([,,function(e,n,t){"use strict";n.__esModule=!0,n.English=n.Korean=n.LanguageProvider=n.LanguageContext=void 0;var r=t(1),i=t(0);n.LanguageContext=i.createContext({}),n.LanguageProvider=function(e){var t=e.children,o=void 0===t?{}:t,a=i.useState("English"),l=a[0],s=a[1];return r.jsx(n.LanguageContext.Provider,{value:{currentLanguage:l,changeLanguage:function(e){s(e)}}},o)},n.Korean=function(e){var t=e.children,o=void 0===t?{}:t;return r.jsx(i.Fragment,null,"Korean"===i.useContext(n.LanguageContext).currentLanguage&&o)},n.English=function(e){var t=e.children,o=void 0===t?{}:t;return r.jsx(i.Fragment,null,"English"===i.useContext(n.LanguageContext).currentLanguage&&o)}},function(e,n,t){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};n.__esModule=!0,n.Icon=void 0;var i=t(1),o=t(21);n.Icon=function(e){var n=e.definition,t=void 0===n?{}:n,a=e.className,l=void 0===a?"":a,s=o.icon(t).abstract[0],c=s.attributes,u=s.children[0].attributes;return c.class+=" "+l,i.jsx("svg",r({},c),i.jsx("path",r({},u)))}},function(e,n,t){"use strict";n.__esModule=!0,n.App=void 0;var r=t(1),i=t(0),o=t(6),a=t(2),l=r.keyframes({from:{opacity:.5},to:{opacity:1}});n.App=function(e){var n=e.koreanTitle,t=void 0===n?"":n,s=e.englishTitle,c=void 0===s?"":s,u=e.children,g=void 0===u?{}:u,d=i.useContext(a.LanguageContext).currentLanguage;return i.useEffect((function(){var e="Korean"===d?t:c;e.length>0&&(document.title=e)})),r.jsx(o.Screen,null,r.jsx("div",{css:{width:"100%",height:"100%",animation:l+" 0.15s"}},g))}},,function(e,n,t){"use strict";n.__esModule=!0,n.Screen=void 0;var r=t(1),i=t(26);n.Screen=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("div",{css:{background:"#000000 url("+i+") no-repeat center",overflowY:"auto",width:"100%",height:"calc(100% - 4.5rem)"}},t)}},function(e,n,t){"use strict";n.__esModule=!0,n.ThemeProvider=n.ThemeContext=void 0;var r=t(1),i=t(0);n.ThemeContext=i.createContext({}),n.ThemeProvider=function(e){var t=e.defaultColor,i=void 0===t?"#ffffff":t,o=e.lightColor,a=void 0===o?"#ffffff":o,l=e.darkColor,s=void 0===l?"#ffffff":l,c=e.children,u=void 0===c?{}:c,g="0 0 2px "+s+", 0 0 4px "+a;return r.jsx(n.ThemeContext.Provider,{value:{defaultColor:i,lightColor:a,darkColor:s,textStyle:r.css({color:i,textShadow:g}),boxStyle:r.css({boxShadow:g,backgroundColor:"rgba(0, 0, 0, 0)",border:"solid 1px "+i,borderRadius:0}),highlightStyle:r.css({"&:hover, &:active, &:focus":{color:a,border:"solid 1px "+a}})}},u)}},,,function(e,n,t){"use strict";n.__esModule=!0,n.AMPM=n.WeekDay=n.MonthDay=n.Month=n.Minute=n.Hour=n.TimeProvider=void 0;var r=t(1),i=t(0),o=["January","February","March","April","May","June","July","August","September","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function l(){var e=new Date;return{year:e.getFullYear(),month:e.getMonth(),monthDay:e.getDate()-1,weekDay:e.getDay(),hour:e.getHours(),minute:e.getMinutes()}}var s=i.createContext({year:0,month:0,monthDay:0,weekDay:0,hour:0,minute:0});n.TimeProvider=function(e){var n=e.children,t=void 0===n?{}:n,o=i.useState(l()),a=o[0],c=o[1];return i.useEffect((function(){var e=setInterval((function(){c(l)}),1e4);return function(){clearInterval(e)}})),r.jsx(s.Provider,{value:a},t)},n.Hour=function(){var e=i.useContext(s).hour%12;return r.jsx(i.Fragment,null,""+(0===e?12:e))},n.Minute=function(){var e,n,t=i.useContext(s).minute;return r.jsx(i.Fragment,null,""+(e=t,n=2,(""+(Math.pow(10,n)+e)).slice(1)))},n.Month=function(){var e=i.useContext(s).month;return r.jsx(i.Fragment,null,o[e])},n.MonthDay=function(){var e=i.useContext(s).monthDay;return r.jsx(i.Fragment,null,""+(e+1))},n.WeekDay=function(){var e=i.useContext(s).weekDay;return r.jsx(i.Fragment,null,a[e])},n.AMPM=function(){var e=i.useContext(s).hour;return r.jsx(i.Fragment,null,e>=12?"PM":"AM")}},,,function(e,n,t){"use strict";var r,i,o,a=this&&this.__extends||(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)});n.__esModule=!0,t(14);for(var l=t(1),s=t(0),c=t(0),u=t(8),g=t(17),d=t(25),h=t(27),m=t(2),p=t(31),f=t(32),x=t(42),v=t(51),b=t(52),j=t(73),I=function(){return l.jsx(p.AlertApp,{koreanMessage:"페이지를 찾을 수 없습니다!",englishMessage:"Page not found!"})},A=function(){return l.jsx(p.AlertApp,{koreanMessage:"에러가 발생했습니다!",englishMessage:"Got an error!"})},C=function(e){var n=e.path,t=void 0===n?"":n;return s.useEffect((function(){window.location.href=t})),null},w=function(e){function n(n){var t=n.children,r=void 0===t?{}:t,i=e.call(this,{children:r})||this;return i.state={hasError:!1},i}return a(n,e),n.prototype.componentDidCatch=function(e,n){this.setState({hasError:!0},(function(){console.error(null==e?void 0:e.toString()),console.error(null==n?void 0:n.componentStack)}))},n.prototype.render=function(){return this.state.hasError?l.jsx(A,null):this.props.children},n}(s.Component),y=function(e){var n=e.routes,t=void 0===n?[]:n;return u.useRoutes(t.map((function(e,n){var t=e.path,r=e.element;return{path:t,element:l.jsx(w,{key:n},r)}})))},S=document.getElementsByClassName("Temporary"),k=0;k<S.length;k++)null===(o=null===(i=S[k])||void 0===i?void 0:i.parentNode)||void 0===o||o.removeChild(S[k]);c.render(l.jsx((function(){var e=s.useState(!0),n=e[0],t=e[1];return l.jsx(u.BrowserRouter,null,l.jsx("div",{css:{overflowY:"hidden",width:"100%",height:"100%",margin:0,padding:0,backgroundColor:"#000000"}},l.jsx(m.LanguageProvider,null,l.jsx(g.StatusBar,{showTime:!n}),n&&l.jsx(d.LockScreen,{onDisappear:function(){t(!1)}}),!n&&l.jsx(y,{routes:[{path:"/",element:l.jsx(f.HomeScreen,null)},{path:"about",element:l.jsx(x.AboutApp,null)},{path:"cv",element:l.jsx(v.CVApp,null)},{path:"project",element:l.jsx(b.ProjectApp,null)},{path:"music",element:l.jsx(j.MusicApp,null)},{path:"c3dmb",element:l.jsx(C,{path:"https://avantgarde95.github.io/C3DMB"})},{path:"*",element:l.jsx(I,null)}]}),l.jsx(h.NavigationBar,{showNavigators:!n}))))}),null),document.body)},function(e,n){String.prototype.startsWith||(String.prototype.startsWith=function(e,n){var t=n>0?0|n:0;return this.substring(t,t+e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e,n){return(void 0===n||n>this.length)&&(n=this.length),this.substring(n-e.length,n)===e})},,,function(e,n,t){"use strict";n.__esModule=!0,n.StatusBar=void 0;var r=t(1),i=t(18),o=t(19),a=t(20),l=t(3),s=t(10),c=t(2),u=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("div",{css:{float:"left",height:"100%"}},t)},g=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("div",{css:{float:"right",height:"100%"}},t)},d=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("span",{css:{marginLeft:"0.2rem",marginRight:"0.2rem"}},t)};n.StatusBar=function(e){var n=e.showTime,t=void 0===n||n;return r.jsx("div",{css:{boxSizing:"border-box",width:"100%",height:"2rem",paddingLeft:"0.3rem",paddingRight:"0.3rem",lineHeight:"2rem",color:"#ffffff"}},r.jsx(u,null,r.jsx(d,null,r.jsx(c.Korean,null,"마이폰"),r.jsx(c.English,null,"MyPhone"))),r.jsx(g,null,r.jsx(d,null,r.jsx(l.Icon,{definition:i.faWifi})),r.jsx(d,null,r.jsx(l.Icon,{definition:o.faSignal})),r.jsx(d,null,r.jsx(l.Icon,{definition:a.faBatteryFull})),t&&r.jsx(d,null,r.jsx(s.TimeProvider,null,r.jsx(s.Hour,null),":",r.jsx(s.Minute,null)," ",r.jsx(s.AMPM,null)))))}},,,,,,,,function(e,n,t){"use strict";n.__esModule=!0,n.LockScreen=void 0;var r=t(1),i=t(0),o=t(6),a=t(10),l=t(2);n.LockScreen=function(e){var n,t,s=e.onDisappear,c=void 0===s?{}:s,u=i.useState("rgba(255, 255, 255, 1)"),g=u[0],d=u[1];return r.jsx(o.Screen,null,r.jsx("div",{css:{position:"relative",overflow:"hidden",width:"100%",height:"100%",color:g,transition:"color 0.25s"},onClick:function(){d("rgba(255, 255, 255, 0)"),setTimeout(c,250)}},r.jsx("div",{css:(n={textAlign:"center",width:"100%",marginTop:"1rem",fontSize:"3rem"},n["@media (min-height: 361px)"]={marginTop:"3rem"},n)},r.jsx(a.TimeProvider,null,r.jsx(a.Hour,null),":",r.jsx(a.Minute,null))),r.jsx("div",{css:{textAlign:"center",width:"100%"}},r.jsx(a.TimeProvider,null,r.jsx(a.WeekDay,null),", ",r.jsx(a.Month,null)," ",r.jsx(a.MonthDay,null))),r.jsx("div",{css:(t={position:"absolute",textAlign:"center",bottom:"1rem",width:"100%"},t["@media (min-height: 361px)"]={bottom:"3rem"},t)},r.jsx(l.Korean,null,"클릭해서 잠금해제"),r.jsx(l.English,null,"Click anywhere to unlock"))))}},function(e,n,t){e.exports=t.p+"8feb58426fb1684be9d9ad6f569bed02.png"},function(e,n,t){"use strict";n.__esModule=!0,n.NavigationBar=void 0;var r=t(1),i=t(0),o=t(8),a=t(28),l=t(11),s=t(3),c=t(2),u=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("span",{css:{display:"table-cell",textAlign:"center",width:"4rem"}},t)},g=t(29),d=t(30);n.NavigationBar=function(e){var n=e.showNavigators,t=void 0===n||n,h=o.useNavigate(),m=i.useContext(c.LanguageContext).changeLanguage,p=r.css({cursor:"pointer",display:"inline-block",verticalAlign:"middle",transition:"all 0.1s",width:"3rem",height:"2.5rem",border:"none",lineHeight:"2.5rem",fontSize:"1.5rem",color:"#ffffff",backgroundColor:"transparent","&:hover, &:active, &:focus":{transform:"scale(0.9)"}}),f=r.css([p,{backgroundSize:"auto 1.8rem",backgroundRepeat:"no-repeat",backgroundPosition:"center"}]);return r.jsx("div",{css:{display:"table",width:"100%"}},r.jsx(u,null,t&&r.jsx("button",{css:p,title:"Back",onClick:function(){h(-1)}},r.jsx(s.Icon,{definition:a.faArrowLeft}))),r.jsx(u,null,r.jsx(c.English,null,r.jsx("button",{css:[f,{backgroundImage:"url("+d+")"}],title:"To Korean",onClick:function(){m("Korean")}})),r.jsx(c.Korean,null,r.jsx("button",{css:[f,{backgroundImage:"url("+g+")"}],title:"To English",onClick:function(){m("English")}}))),r.jsx(u,null,t&&r.jsx("button",{css:p,title:"Home",onClick:function(){h("/")}},r.jsx(s.Icon,{definition:l.faHome}))))}},,function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPCEtLSBDcmVhdGVkIHdpdGggTWV0aG9kIERyYXcgLSBodHRwOi8vZ2l0aHViLmNvbS9kdW9waXhlbC9NZXRob2QtRHJhdy8gLS0+DQogICAgPGc+DQogICAgICAgIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4NCiAgICAgICAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjUyIiB3aWR0aD0iNTIiIHk9Ii0xIiB4PSItMSIvPg0KICAgICAgICA8ZyBkaXNwbGF5PSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgaWQ9ImNhbnZhc0dyaWQiPg0KICAgICAgICAgICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KICAgIDxnPg0KICAgICAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+DQogICAgICAgIDx0ZXh0IHN0cm9rZT0iIzAwMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCINCiAgICAgICAgICAgICAgZm9udC1mYW1pbHk9IkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGlkPSJzdmdfMSIgeT0iMjkiIHg9Ii0xLjUiIHN0cm9rZS13aWR0aD0iMCINCiAgICAgICAgICAgICAgZmlsbD0iI2ZmZmZmZiI+6rCAPC90ZXh0Pg0KICAgICAgICA8dGV4dCBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiINCiAgICAgICAgICAgICAgZm9udC1zaXplPSIzNCIgaWQ9InN2Z18yIiB5PSI0OCIgeD0iMjQuNSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiM2NjY2NjYiPkE8L3RleHQ+DQogICAgPC9nPg0KPC9zdmc+"},function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPCEtLSBDcmVhdGVkIHdpdGggTWV0aG9kIERyYXcgLSBodHRwOi8vZ2l0aHViLmNvbS9kdW9waXhlbC9NZXRob2QtRHJhdy8gLS0+DQogICAgPGc+DQogICAgICAgIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4NCiAgICAgICAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjUyIiB3aWR0aD0iNTIiIHk9Ii0xIiB4PSItMSIvPg0KICAgICAgICA8ZyBkaXNwbGF5PSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgaWQ9ImNhbnZhc0dyaWQiPg0KICAgICAgICAgICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KICAgIDxnPg0KICAgICAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+DQogICAgICAgIDx0ZXh0IHN0cm9rZT0iIzAwMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCINCiAgICAgICAgICAgICAgZm9udC1mYW1pbHk9IkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGlkPSJzdmdfMSIgeT0iMjkiIHg9Ii0xLjUiIHN0cm9rZS13aWR0aD0iMCINCiAgICAgICAgICAgICAgZmlsbD0iIzY2NjY2NiI+6rCAPC90ZXh0Pg0KICAgICAgICA8dGV4dCBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiINCiAgICAgICAgICAgICAgZm9udC1zaXplPSIzNCIgaWQ9InN2Z18yIiB5PSI0OCIgeD0iMjQuNSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiNmZmZmZmYiPkE8L3RleHQ+DQogICAgPC9nPg0KPC9zdmc+"},function(e,n,t){"use strict";n.__esModule=!0,n.AlertApp=void 0;var r=t(1),i=t(11),o=t(3),a=t(2),l=t(4);n.AlertApp=function(e){var n=e.koreanMessage,t=void 0===n?"":n,s=e.englishMessage,c=void 0===s?"":s;return r.jsx(l.App,{koreanTitle:t,englishTitle:c},r.jsx("div",{css:{display:"table",textAlign:"center",width:"100%",height:"100%",color:"#ffffff",backgroundColor:"#202020"}},r.jsx("span",{css:{display:"table-cell",verticalAlign:"middle",fontSize:"1.5rem"}},r.jsx(a.Korean,null,t," ",r.jsx(o.Icon,{definition:i.faHome}),"을 눌러 돌아가세요."),r.jsx(a.English,null,c," Click ",r.jsx(o.Icon,{definition:i.faHome})," to return."))))}},function(e,n,t){"use strict";n.__esModule=!0,n.HomeScreen=void 0;var r=t(1),i=t(0),o=t(8),a=t(33),l=t(34),s=t(35),c=t(36),u=t(37),g=t(38),d=t(39),h=t(40),m=t(41),p=t(6),f=t(3),x=t(2),v=function(e){var n=e.title,t=void 0===n?"":n,i=e.path,a=void 0===i?"":i,l=e.color,s=void 0===l?"#ffffff":l,c=e.children,u=void 0===c?{}:c,g=o.useNavigate(),d=r.css({display:"inline-block",cursor:"pointer",textAlign:"center",verticalAlign:"middle",width:"4rem",height:"4rem",margin:"auto",border:"none",borderRadius:"1rem",lineHeight:"4rem",fontSize:"2.5rem",backgroundColor:"#ffffff",transition:"all 0.1s","&:hover, &:active, &:focus":{transform:"scale(0.85)"}});return a.startsWith("http")?r.jsx("a",{css:[d,{color:s}],title:t,tabIndex:0,target:"_blank",rel:"noopener noreferrer",href:a},u):r.jsx("button",{css:[d,{color:s}],title:t,onClick:function(){g(a)}},u)},b=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("div",{css:{textAlign:"center",margin:"1rem auto auto auto",color:"#ffffff"}},t)},j=function(e){var n=e.width,t=void 0===n?0:n,i=e.height,o=void 0===i?0:i,a=e.children,l=void 0===a?{}:a;return r.jsx("div",{css:{display:"inline-block",boxSizing:"border-box",width:t+"rem",height:o+"rem",paddingTop:"1rem",webkitTapHighlightColor:"rgba(255, 255, 255, 0)"}},l)},I=function(e){var n=e.width,t=void 0===n?0:n,i=e.height,o=void 0===i?0:i,a=e.children,l=void 0===a?{}:a;return r.jsx("div",{css:{display:"inline-block",width:t+"rem",height:o+"rem"}},l)},A=[{koreanName:"소개",englishName:"About",path:"about",icon:a.faIdCard,color:"#007aeb"},{koreanName:"이력",englishName:"CV",path:"cv",icon:l.faFileAlt,color:"#aaaaaa"},{koreanName:"프로젝트",englishName:"Projects",path:"project",icon:c.faLaptopCode,color:"#876766"},{koreanName:"음악",englishName:"Musics",path:"music",icon:h.faMusic,color:"#1cb81d"},{koreanName:"블로그",englishName:"Blog",path:"https://Avantgarde95.github.io/blog",icon:s.faNewspaper,color:"#677963"},{koreanName:"깃허브",englishName:"GitHub",path:"https://github.com/Avantgarde95",icon:m.faGithub,color:"#211f1f"},{koreanName:"유튜브",englishName:"YouTube",path:"https://www.youtube.com/user/Scottparkmusic",icon:u.faYoutube,color:"#ff0000"},{koreanName:"페이스북",englishName:"Facebook",path:"https://www.facebook.com/s.ramanujan",icon:d.faFacebookSquare,color:"#3b5998"},{koreanName:"인스타그램",englishName:"Instagram",path:"https://www.instagram.com/hunminpark95",icon:g.faInstagram,color:"#c13584"}];n.HomeScreen=function(e){var n=e.appWidth,t=void 0===n?8:n,o=e.appHeight,a=void 0===o?8:o,l=e.maxAppsPerLine,s=void 0===l?5:l,c=i.useContext(x.LanguageContext).currentLanguage;return i.useEffect((function(){document.title="Korean"===c?"홈":"Home"})),r.jsx(p.Screen,null,r.jsx("div",{css:{textAlign:"center",width:"100%",height:"100%"}},r.jsx("div",{css:{display:"inline-block",maxWidth:t*s+"rem"}},A.map((function(e){return r.jsx(j,{width:t,height:a},r.jsx(v,{title:e.englishName,path:e.path,color:e.color},r.jsx(f.Icon,{definition:e.icon})),r.jsx(b,null,r.jsx(x.Korean,null,e.koreanName),r.jsx(x.English,null,e.englishName)))})),Array.apply(null,Array(s)).map((function(){return r.jsx(I,{width:t,height:a})})))))}},,,,,,,,,,function(e,n,t){"use strict";n.__esModule=!0,n.AboutApp=void 0;var r=t(1),i=t(0),o=t(43),a=t(3),l=t(2),s=t(4),c=t(7),u=t(78).Luminous,g=t(44),d=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("div",{css:{font:"1.5rem",fontWeight:"bold"}},t)},h=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("ul",{css:{listStyle:"none",paddingLeft:0,marginBottom:"1.5rem"}},t)},m=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("li",null,r.jsx("div",{css:{display:"inline-block",marginLeft:"0.5rem",width:"1.5rem",height:"0.9rem",fontSize:"0.6rem"}},r.jsx(a.Icon,{definition:o.faStar})),r.jsx("div",{css:{display:"inline-block",verticalAlign:"top",width:"calc(100% - 2rem)"}},t))},p=function(e){var n=e.url,t=void 0===n?"":n,o=e.children,a=void 0===o?{}:o,l=i.useContext(c.ThemeContext);return r.jsx("a",{css:{wordBreak:"break-all",color:l.lightColor,"&:hover, &:active":{color:l.darkColor}},target:"_blank",rel:"noopener noreferrer",href:t},a)},f=function(e){var n=e.src,t=void 0===n?"":n,o=e.alt,a=void 0===o?"":o,l=i.useContext(c.ThemeContext),s=i.createRef();return i.useEffect((function(){var e=s.current;null!==e&&new u(e,{sourceAttribute:"src",caption:a})})),r.jsx("img",{css:[l.boxStyle,l.highlightStyle,{cursor:"zoom-in",width:"12rem",height:"12rem",marginRight:"0.7rem","&:last-child":{marginRight:0}}],ref:s,src:t,alt:a,title:a})},x=function(e){var n=e.images,t=void 0===n?[{src:"",alt:""}]:n;return r.jsx("div",{css:{overflowX:"auto",overflowY:"hidden",whiteSpace:"nowrap",marginLeft:"1px",marginRight:"1px",marginBottom:"1.5rem"}},t.map((function(e){var n=e.src,t=e.alt;return r.jsx(f,{src:n,alt:t})})))},v=[{src:t(45),alt:"Real-time rendering (Rasterization)"},{src:t(46),alt:"Real-time rendering (Ray tracing)"},{src:t(47),alt:"Augmented reality (Microsoft HoloLens)"}],b=[{src:t(48),alt:"My guitar"},{src:t(49),alt:"My concert"},{src:t(50),alt:"My music"}],j=function(){var e=i.useContext(c.ThemeContext);return r.jsx("div",{css:[e.textStyle,{overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem",background:"#000000 url("+g+") no-repeat center"}]},r.jsx("div",{css:{fontWeight:"bold",fontSize:"1.8rem",lineHeight:1,marginBottom:"1.5rem"}},r.jsx(l.Korean,null,"소개"),r.jsx(l.English,null,"About")),r.jsx("div",{css:{marginBottom:"1.5rem"}},r.jsx(l.Korean,null,"반가워요! 컴퓨터와 음악에 관심이 있습니다 :)"),r.jsx(l.English,null,"Welcome! I'm interested in computers and music :)")),r.jsx(d,null,r.jsx(l.Korean,null,"관심사 (컴퓨터)"),r.jsx(l.English,null,"Interests (Computer)")),r.jsx(h,null,r.jsx(m,null,r.jsx(l.Korean,null,"컴퓨터 그래픽스(CG), 특히 실시간 렌더링, 3D 모델링, 증강현실(AR), 가상현실(VR)에 관심이 있습니다."),r.jsx(l.English,null,"I'm interested in computer graphics, especially real-time rendering, 3D modeling, augmented reality(AR), and virtual reality(VR).")),r.jsx(m,null,r.jsx(l.Korean,null,"웹 개발에도 관심이 있습니다."),r.jsx(l.English,null,"I'm also interested in web development."))),r.jsx(x,{images:v}),r.jsx(d,null,r.jsx(l.Korean,null,"관심사 (음악)"),r.jsx(l.English,null,"Interests (Music)")),r.jsx(h,null,r.jsx(m,null,r.jsx(l.Korean,null,"취미로 피아노와 기타를 연주합니다. 가끔씩 작곡/편곡에도 도전합니다."),r.jsx(l.English,null,"I play piano and guitar as a hobby. Sometimes I also try to compose and arrange music.")),r.jsx(m,null,r.jsx(l.Korean,null,"헤비메탈, 재즈, 클래식 음악을 즐겨 듣습니다. 다른 장르의 음악들도 종종 들어요."),r.jsx(l.English,null,"I like hearing heavy metal, jazz, and classical music. I also listen to music from other genres."))),r.jsx(x,{images:b}),r.jsx(d,null,r.jsx(l.Korean,null,"연락처"),r.jsx(l.English,null,"Contacts")),r.jsx(h,null,r.jsx(m,null,r.jsx(l.Korean,null,"이메일 1"),r.jsx(l.English,null,"Email 1"),": ",r.jsx(p,{url:"mailto:95phm@kaist.ac.kr"},"95phm@kaist.ac.kr")),r.jsx(m,null,r.jsx(l.Korean,null,"이메일 2"),r.jsx(l.English,null,"Email 2"),": ",r.jsx(p,{url:"mailto:mathematicianscott@gmail.com"},"mathematicianscott@gmail.com"))))};n.AboutApp=function(){return r.jsx(s.App,{koreanTitle:"소개",englishTitle:"About"},r.jsx(c.ThemeProvider,{lightColor:"#00e9f9",darkColor:"#0090ff"},r.jsx(j,null)))}},,function(e,n,t){e.exports=t.p+"cc9fa57f7ec5aa558bb85222ae6b9265.png"},function(e,n,t){e.exports=t.p+"0417a6471b2d68b6cbae0cbe3f9ddb4f.png"},function(e,n,t){e.exports=t.p+"ce28326cc94feeee6329485943fcef2c.png"},function(e,n,t){e.exports=t.p+"c0768d472d083b829dcd7f75092306fd.png"},function(e,n,t){e.exports=t.p+"27f53db573c65c9a3ea484ad72a8f5c8.jpg"},function(e,n,t){e.exports=t.p+"56108b22ef76da426d37c6c2f8a6e7fd.jpg"},function(e,n,t){e.exports=t.p+"8649a0d0d89dcf0d9c6bda1d61ab5cce.png"},function(e,n,t){"use strict";n.__esModule=!0,n.CVApp=void 0;var r=t(1),i=t(4);n.CVApp=function(){return r.jsx(i.App,{koreanTitle:"이력",englishTitle:"CV"},r.jsx("iframe",{css:{border:"none",width:"100%",height:"100%",backgroundColor:"#d1d1d1"},src:"https://drive.google.com/file/d/1_SuQg0TrQjYRTmmI-Jv9UsbO6slMCaSP/preview",width:"100%",height:"100%"}))}},function(e,n,t){"use strict";n.__esModule=!0,n.ProjectApp=void 0;var r=t(1),i=t(0),o=t(2),a=t(4),l=t(53),s=t(7),c=t(72),u=function(e){var n=e.url,t=void 0===n?"":n,o=e.children,a=void 0===o?{}:o,l=i.useContext(s.ThemeContext);return r.jsx("a",{css:{wordBreak:"break-all",color:l.lightColor,"&:hover, &:active":{color:l.darkColor}},target:"_blank",rel:"noopener noreferrer",href:t},a)},g=function(e){var n=e.url,t=void 0===n?"":n,i=e.children,o=void 0===i?{}:i;return r.jsx("a",{css:{display:"table",wordBreak:"break-all",marginBottom:"0.5rem",fontSize:"1.5rem",color:"#f9ab0d","&:hover, &:active":{color:"#d9890d"}},target:"_blank",rel:"noopener noreferrer",href:t},o)},d=function(e){var n=e.children,t=void 0===n?{}:n;return r.jsx("div",{css:{width:"100%"}},t)},h=function(e){var n,t,o,a,l=e.projects,c=void 0===l?[]:l,u=i.useContext(s.ThemeContext),h=i.useState(0),m=h[0],p=h[1],f=c[m],x="@media (min-width: 769px)",v=r.css([u.boxStyle,u.highlightStyle,(n={display:"inline-block",cursor:"pointer",textAlign:"center",width:"16rem",height:"12rem",marginRight:"1rem",marginBottom:0,fontSize:"2rem",color:"rgba(0, 0, 0, 0)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center","&:hover, &:active, &:focus":u.textStyle},n[x]={display:"block",marginRight:0,marginBottom:"1rem"},n)]);return r.jsx(i.Fragment,null,r.jsx("div",{css:(t={display:"inline-block",position:"relative",width:"100%",height:"14rem",minHeight:"14rem",marginRight:0},t[x]={float:"left",width:"18rem",height:"100%",marginRight:"1rem"},t)},r.jsx("div",{css:(o={position:"absolute",overflow:"auto",whiteSpace:"nowrap",top:0,right:0,bottom:0,left:0},o[x]={whiteSpace:"normal"},o)},c.map((function(e,n){var t=e.image,i=e.name;return r.jsx("button",{css:[v,{title:i,backgroundImage:"url("+t+")"}],onClick:function(){p(n)}},i)})))),r.jsx("div",{css:(a={display:"inline-block",position:"relative",width:"100%",height:"calc(100% - 15rem)",minHeight:"7rem",marginBottom:"1rem"},a[x]={float:"right",width:"calc(100% - 19rem)",height:"100%"},a)},r.jsx("div",{css:{position:"absolute",overflow:"auto",top:0,right:0,bottom:0,left:0}},r.jsx(g,{url:f.url},f.name),r.jsx(d,null,f.description))))},m=function(){var e=i.useContext(s.ThemeContext);return r.jsx("div",{css:[e.textStyle,{display:"table",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem",background:"#000000 url("+c+") no-repeat center"}]},r.jsx("div",{css:{display:"table-row",height:0}},r.jsx("div",{css:{fontWeight:"bold",fontSize:"1.8rem",lineHeight:1,marginBottom:"1.5rem"}},r.jsx(o.Korean,null,"프로젝트"),r.jsx(o.English,null,"Projects")),r.jsx("div",{css:{marginBottom:"1.5rem"}},r.jsx(o.Korean,null,"모든 프로젝트들을 보려면 ",r.jsx(u,{url:"https://github.com/Avantgarde95"},"깃허브"),"를 방문해주세요."),r.jsx(o.English,null,"To see the all projects, visit ",r.jsx(u,{url:"https://github.com/Avantgarde95"},"GitHub"),"."))),r.jsx("div",{css:{display:"table-row",height:"100%"}},r.jsx(h,{projects:l.allProjects})))};n.ProjectApp=function(){return r.jsx(a.App,{koreanTitle:"프로젝트",englishTitle:"Projects"},r.jsx(s.ThemeProvider,{lightColor:"#f9ab0d",darkColor:"#d9890d"},r.jsx(m,null)))}},function(e,n,t){"use strict";n.__esModule=!0,n.allProjects=void 0;var r=t(1),i=t(0),o=t(2);n.allProjects=[{name:"C3DMB",url:"https://github.com/Avantgarde95/C3DMB",image:t(54),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"블록체인에 기반한 협업 3D 모델링 시스템 (Pacific Graphics 2019 포스터)"),r.jsx(o.English,null,"Collaborative 3D modeling system based on blockchain (Pacific Graphics 2019 poster)"))},{name:"PaintTalk",url:"https://github.com/Avantgarde95/PaintTalk",image:t(55),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"자연어를 이용한 그림 그리기"),r.jsx(o.English,null,"Draw a picture by using natural language"))},{name:"CGLab",url:"https://github.com/Avantgarde95/CGLab",image:t(56),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"간단한 OpenGL 예제들 (KAIST CS580 프로젝트들)"),r.jsx(o.English,null,"Simple OpenGL examples (KAIST CS580 projects)"))},{name:"LiKo",url:"https://github.com/Avantgarde95/LiKo",image:t(57),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"한국어를 배워보자! (KAIST CS374 팀 프로젝트)"),r.jsx(o.English,null,"Let's learn Korean! (KAIST CS374 team project)"))},{name:"WhereToGoNow",url:"https://github.com/Avantgarde95/WhereToGoNow",image:t(58),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"여행 경로 계획 서비스 (KAIST CS408 팀 프로젝트)"),r.jsx(o.English,null,"Travel route planning service (KAIST CS408 team project)"))},{name:"TeX2Hwp",url:"https://github.com/Avantgarde95/TeX2Hwp",image:t(59),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"LaTeX 수식을 아래아 한글 수식으로 변환하는 프로그램 (KAIST CS495 프로젝트)"),r.jsx(o.English,null,"Program that converts LaTeX formula into Hwp formula (KAIST CS495 project)"))},{name:"SimpleLang",url:"https://github.com/Avantgarde95/SimpleLang",image:t(60),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"스킴(Scheme)과 비슷한 문법 및 지연 연산(lazy evaluation) 기반의 프로그래밍 언어"),r.jsx(o.English,null,"Programming language based on Scheme-like grammar and lazy evaluation"))},{name:"PySIC",url:"https://github.com/Avantgarde95/PySIC",image:t(61),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"베이직(BASIC)과 유사한 문법의 프로그래밍 언어"),r.jsx(o.English,null,"Programming language with BASIC-like grammar"))},{name:"LangtonAnt",url:"https://github.com/Avantgarde95/LangtonAnt",image:t(62),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"랭턴의 개미(Langton's ant) 시뮬레이터"),r.jsx(o.English,null,"Langton's ant simulator"))},{name:"PathFinder",url:"https://github.com/Avantgarde95/PathFinder",image:t(63),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"유전 알고리즘을 이용한 길찾기 프로그램"),r.jsx(o.English,null,"Path finding program that uses genetic algorithm"))},{name:"MorseSimulator",url:"https://github.com/Avantgarde95/MorseSimulator",image:t(64),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"간단한 모스 코드 시뮬레이터"),r.jsx(o.English,null,"Simple Morse code simulator"))},{name:"Image2Term",url:"https://github.com/Avantgarde95/Image2Term",image:t(65),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"터미널 위에 그림 그리기."),r.jsx(o.English,null,"Draw an image on the terminal."))},{name:"archipi-web",url:"https://github.com/Avantgarde95/archipi-web",image:t(66),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"아르키메데스의 원주율(π) 계산법. π 데이 (2019.03.14) 기념으로 만듬."),r.jsx(o.English,null,"Archimedes' method for approximating π. Created for celebrating π day! (2019.03.14)"))},{name:"Mandelbrot",url:"https://github.com/Avantgarde95/Mandelbrot",image:t(67),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"만델브로트(Mandelbrot) 프랙탈 생성기"),r.jsx(o.English,null,"Mandelbrot fractal generator"))},{name:"pyMalbolge",url:"https://github.com/Avantgarde95/pyMalbolge",image:t(68),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"말레볼제(Malbolge) 프로그래밍 언어 해석기"),r.jsx(o.English,null,"Malbolge programming language interpreter"))},{name:"HQ9",url:"https://github.com/Avantgarde95/HQ9",image:t(69),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"HQ9+ 프로그래밍 언어 해석기"),r.jsx(o.English,null,"HQ9+ programming language interpreter"))},{name:"HandyClock",url:"https://github.com/Avantgarde95/HandyClock",image:t(70),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"파이썬으로 제작한 간단한 시계"),r.jsx(o.English,null,"Simple clock written in python"))},{name:"Lucky",url:"https://github.com/Avantgarde95/Lucky",image:t(71),description:r.jsx(i.Fragment,null,r.jsx(o.Korean,null,"당신의 오늘의 운세를 예측해 드립니다."),r.jsx(o.English,null,"I'll predict your luck today."))}]},function(e,n,t){e.exports=t.p+"da3279436ddc960142427b662541b941.png"},function(e,n,t){e.exports=t.p+"366784b98470fccf384196fa155bae0a.png"},function(e,n,t){e.exports=t.p+"23cbaca0b52db83d2cb7728eac5c7d37.png"},function(e,n,t){e.exports=t.p+"6db4db3164812f4f67ff92f02ad1e5b5.png"},function(e,n,t){e.exports=t.p+"9759a73dc7520d689377132e55db5d1b.png"},function(e,n,t){e.exports=t.p+"0786b80cfb1a34963883a862be836ebe.png"},function(e,n,t){e.exports=t.p+"38dcb3b8a16d5f65da745390e4b68487.png"},function(e,n,t){e.exports=t.p+"aa12a882be64807be7a75aa92d8fb0d6.png"},function(e,n,t){e.exports=t.p+"25f47e2194d35f0801fe874125f8495e.png"},function(e,n,t){e.exports=t.p+"ee61e203810128acf29889f210296b7c.png"},function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACkCAYAAABFGpFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAATJSURBVHhe7dzBbdtKGIVR+wFZe5UGUkIa0jodpIR0kDZUSUpIA9lI6yz0QIBjMLZokZR0OUOdAxChrVCUAP8fhlzw+XA4nJ4AAv7r/wW4O8EBYgQHiBEcIEZwgBjBAWIEB4gRHCBGcIAYwQFiBAeIERwgRnCAGMEBYjyeglf7/b7fg3l2u93T8XjsfxonOLzqgtP94cASU4LjkgqIERzOen5+frclpM5zyTXf/ZpjlhzbEsFh1Ol0+mdbcxCS5+7OtfS7D49dcszcY1sjOGxeN7yJAS7hKLYcjqUEh0XKEJ8bqLHXLv08pvy/c+85RVk1XOPa4+dKny9FcJitG/oyxN02jMBHry3VvU/5t+zfU/nct/jsU6TPtybBYVQZgrItGfZEIO6h+9zJEKTPtxbBYVQZguEwFGUw3g7HcGjevtaic9/9ntLnSxMcFimDUbah4e9rGJy58Ut/5q3G5RzB4WrDgalxeM5F8R7eBrbbT5y3JYLDbGWwyjYcqjmvzTE89t7efs5uG36PjwyPXXLM3GNbIzicde4Pfvi7br9sb019bez1MWPH3EM515JzXnPMkmNbIjhAjOAAMYIDxEx6Hs7P33/7Pdb07cunfu8+PA+Ha3geDlAVwQFiBAeIERwgRnCAGMEBYgQHiBEcIEZwgBjBAWIEB4gRHCBGcIAYwQFiBAeIERwgRnCAmE0+8e/718/93rgfv/70e+3wxD9qNuWJf5sIzpTAXNJCgASHmm36EaNdZMp2C7d+P+C95oKTiILwwH00E5w1IiA6cFvVB2ft1cba54ctqTo4NQ266MD1qg1OjQNutQPXqTI4tQ+16MAy1QWnlWEWHZivquC0NsSiA/NUE5xWh1d0YLoqgmNo4TGsHpwtxEYwYZrqbhq3SnTgslWDY0jhsVjh3JCAwsdWC85Wh1N0YJwVDhCzSnC2vgqwyoHzrHCAGMEBYuLBeZTLDZdV8J4VDhAjOECM4AAx0eA82n0N93HgX1Y4QIzgADGCA8QIDhAjOECM4AAxggPECA4QEw3Oj19/+r3H8GjfFy6xwgFiBAeIERwgJh6cR7mv4f4NvGeFA8QIDhCzSnC2frnhcgrOs8IBYlYLzlZXAVY3MM4KB4hZNThbWw1Y3cDHrHCAmNWDs5VVgdUNXFbFCqf1YRUbmKaaS6pWh1ZsYLqq7uG0NrxiA/NUd9O4lSEWG5ivuuB0ah9msYFlqgxOp9ahFhtYrtrgdGobbrGB61QdnE435GsPeg2fAbag+uAUawy90MBtNROcIhEBoYH7aC44RYnCrcJw6/cD3ns+HA6nfn/Uz99/+702fP/6ud8b12JYvn351O/dx36/f9rtdv1PMM/xeOz3xm0yOFslONRsSnCavaQC2iM4QIzgADGCA8QIDhAjOECM4AAxggPECA4QIzhAjOAAMYIDxAgOECM4QIzgADGCA8QIDhAjOEDMpEeM8hg8YpRreMQoUBXBAWIEB4gRHCBGcIAYwQFiBAeIERwgRnCAGMEBYgQHiBEcIEZwgBjBAWIEB4gRHCBGcIAYT/zj1cvLS78H80154p/gADEuqYAYwQFiBAeIERwgRnCAGMEBYgQHiBEcIEZwgBjBAWIEB4gRHCBGcIAYwQFCnp7+B7vfFEF5kZugAAAAAElFTkSuQmCC"},function(e,n,t){e.exports=t.p+"a0c5a89831122031e1fcae0529bb1c81.png"},function(e,n,t){e.exports=t.p+"7fb7b8bd92fbe94452d3250ed7b3c4d0.png"},function(e,n,t){e.exports=t.p+"272e33ba2980d10825fea79d343155cf.png"},function(e,n,t){e.exports=t.p+"018c690934d484ff9c4e2041b6e973a4.png"},function(e,n,t){e.exports=t.p+"97b9d7cdc105c5bf672b6f95edcf7f1a.png"},function(e,n,t){e.exports=t.p+"bbb24e5520f5cf15012601a5722d3491.png"},function(e,n,t){e.exports=t.p+"cf3e14c429aa121d3602f40c391c83d9.png"},function(e,n,t){e.exports=t.p+"bbd63ba6af2ad8f70d80864ea349fbb6.png"},function(e,n,t){"use strict";n.__esModule=!0,n.MusicApp=void 0;var r=t(1),i=t(0),o=t(74),a=t(75),l=t(4),s=t(7),c=t(2),u=t(76),g=t(3),d=t(77),h=function(e){var n=e.url,t=void 0===n?"":n,o=e.children,a=void 0===o?{}:o,l=i.useContext(s.ThemeContext);return r.jsx("a",{css:{wordBreak:"break-all",color:l.lightColor,"&:hover, &:active":{color:l.darkColor}},target:"_blank",rel:"noopener noreferrer",href:t},a)},m=function(e){var n=e.id,t=void 0===n?"":n,o=i.useContext(s.ThemeContext);return r.jsx("div",{css:{position:"relative",height:0,paddingBottom:"56.25%"}},r.jsx("iframe",{css:[o.boxStyle,o.highlightStyle,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}],frameBorder:0,allowFullScreen:!0,src:"https://www.youtube.com/embed/"+t}))},p=function(e){var n=e.ids,t=void 0===n?[]:n,l=i.useContext(s.ThemeContext),c=i.useState(0),u=c[0],d=c[1],h=u<=0,p=u>=t.length-1;return r.jsx("div",{css:{width:"100%",maxWidth:"640px"}},r.jsx(m,{id:t[u]}),r.jsx("div",{css:{marginTop:"1rem"}},r.jsx("button",{css:{float:"left",cursor:"pointer",fontSize:"2rem",border:"none",color:h?"#444444":l.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":h?{}:{color:l.lightColor}},disabled:h,onClick:function(){h||d(u-1)}},r.jsx(g.Icon,{definition:o.faArrowAltCircleLeft})),r.jsx("button",{css:{float:"right",cursor:"pointer",fontSize:"2rem",border:"none",color:p?"#444444":l.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":p?{}:{color:l.lightColor}},disabled:p,onClick:function(){p||d(u+1)}},r.jsx(g.Icon,{definition:a.faArrowAltCircleRight}))))},f=function(){var e=i.useContext(s.ThemeContext);return r.jsx("div",{css:[e.textStyle,{overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem",background:"#000000 url("+d+") no-repeat center"}]},r.jsx("div",{css:{fontWeight:"bold",fontSize:"1.8rem",lineHeight:1,marginBottom:"1.5rem"}},r.jsx(c.Korean,null,"음악"),r.jsx(c.English,null,"Musics")),r.jsx("div",{css:{marginBottom:"1.5rem"}},r.jsx(c.Korean,null,"영상들을 불러오는데에 시간이 걸리니 잠시 기다려주세요. 모든 영상들을 보려면 ",r.jsx(h,{url:"https://www.youtube.com/user/Scottparkmusic"},"유튜브"),"를 방문해주세요."),r.jsx(c.English,null,"It takes some time to load the videos, so please wait a moment. To see the all videos, visit ",r.jsx(h,{url:"https://www.youtube.com/user/Scottparkmusic"},"YouTube"),".")),r.jsx(p,{ids:u.allMusics}))};n.MusicApp=function(){return r.jsx(l.App,{koreanTitle:"음악",englishTitle:"Musics"},r.jsx(s.ThemeProvider,{lightColor:"#77ff00",darkColor:"#21d948"},r.jsx(f,null)))}},,,function(e,n,t){"use strict";n.__esModule=!0,n.allMusics=void 0,n.allMusics=["jgkiT8_qRNw","-_5xyia2_6g","xpt_CteDTn8","pX1-GgGFRW4","gOeEcsSS6uU","BU-U7i0CqOI","kg8j4JQVabQ","X8vwCzxVMcE","cASndgM7XwU","-d3pdcPdZcE","HYo3vOGLTCc","UkFKk86VyOU","p76UpqEdStM","Un_jqD9IC_I","b5ZXCtTiBVs","5UW6jQs_bEo","HjcfYic1Z28","lj3iI1IOGL4","Nn8VCR0rBns","SlIfJKGK0bc","6a9X0VWm2bQ","yipCvvK2ncU","zZhOjvNWOjM","EgTafIgIRB4","LxOkMrh-zAI","WwgJSilQcYU","l4FG-oSiLf4","1NdFoolaPlY"]},function(e,n,t){e.exports=t.p+"2ea394845f911efacb3af63bc0c07f97.png"}]);