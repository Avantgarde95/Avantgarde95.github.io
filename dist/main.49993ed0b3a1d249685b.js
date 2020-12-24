!function(){var e={3104:function(e,t,n){"use strict";n.r(t)},5973:function(e,t,n){"use strict";var o,r,i,a=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(9204);var s=n(8460),l=n(5776),c=n(5776),u=n(3936),g=n(9040),d=n(1923),h=n(4544),m=n(4511),p=n(2429),f=n(2650),v=n(7910),x=n(3165),b=n(1250),C=n(6679);n(3104);for(var I=function(){return s.jsx(p.AlertApp,{koreanMessage:"페이지를 찾을 수 없습니다!",englishMessage:"Page not found!"})},j=function(){return s.jsx(p.AlertApp,{koreanMessage:"에러가 발생했습니다!",englishMessage:"Got an error!"})},A=function(e){var t=e.path,n=void 0===t?"":t;return l.useEffect((function(){window.location.href=n})),null},y=function(e){function t(t){var n=t.children,o=void 0===n?{}:n,r=e.call(this,{children:o})||this;return r.state={hasError:!1},r}return a(t,e),t.prototype.componentDidCatch=function(e,t){this.setState({hasError:!0},(function(){console.error(null==e?void 0:e.toString()),console.error(null==t?void 0:t.componentStack)}))},t.prototype.render=function(){return this.state.hasError?s.jsx(j,null):this.props.children},t}(l.Component),w=function(e){var t=e.routes,n=void 0===t?[]:t;return u.useRoutes(n.map((function(e,t){var n=e.path,o=e.element;return{path:n,element:s.jsx(y,{key:t},o)}})))},S=document.getElementsByClassName("Temporary"),k=0;k<S.length;k++)null===(i=null===(r=S[k])||void 0===r?void 0:r.parentNode)||void 0===i||i.removeChild(S[k]);c.render(s.jsx((function(){var e=l.useState(!0),t=e[0],n=e[1];return s.jsx(u.BrowserRouter,null,s.jsx("div",{css:{overflowY:"hidden",width:"100%",height:"100%",margin:0,padding:0,backgroundColor:"#000000"}},s.jsx(m.LanguageProvider,null,s.jsx(g.StatusBar,{showTime:!t}),t&&s.jsx(d.LockScreen,{onDisappear:function(){n(!1)}}),!t&&s.jsx(w,{routes:[{path:"/",element:s.jsx(f.HomeScreen,null)},{path:"about",element:s.jsx(v.AboutApp,null)},{path:"cv",element:s.jsx(x.CVApp,null)},{path:"project",element:s.jsx(b.ProjectApp,null)},{path:"music",element:s.jsx(C.MusicApp,null)},{path:"c3dmb",element:s.jsx(A,{path:"https://avantgarde95.github.io/C3DMB"})},{path:"*",element:s.jsx(I,null)}]}),s.jsx(h.NavigationBar,{showNavigators:!t}))))}),null),document.body)},7910:function(e,t,n){"use strict";t.__esModule=!0,t.AboutApp=void 0;var o=n(8460),r=n(5776),i=n(3461),a=n(4781),s=n(4511),l=n(6646),c=n(5783),u=n(172).W,g=n(4802),d=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("div",{css:{font:"1.5rem",fontWeight:"bold"}},n)},h=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("ul",{css:{listStyle:"none",paddingLeft:0,marginBottom:"1.5rem"}},n)},m=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("li",null,o.jsx("div",{css:{display:"inline-block",marginLeft:"0.5rem",width:"1.5rem",height:"0.9rem",fontSize:"0.6rem"}},o.jsx(a.Icon,{definition:i.faStar})),o.jsx("div",{css:{display:"inline-block",verticalAlign:"top",width:"calc(100% - 2rem)"}},n))},p=function(e){var t=e.url,n=void 0===t?"":t,i=e.children,a=void 0===i?{}:i,s=r.useContext(c.ThemeContext);return o.jsx("a",{css:{wordBreak:"break-all",color:s.lightColor,"&:hover, &:active":{color:s.darkColor}},target:"_blank",rel:"noopener noreferrer",href:n},a)},f=function(e){var t=e.src,n=void 0===t?"":t,i=e.alt,a=void 0===i?"":i,s=r.useContext(c.ThemeContext),l=r.createRef();return r.useEffect((function(){var e=l.current;null!==e&&new u(e,{sourceAttribute:"src",caption:a})})),o.jsx("img",{css:[s.boxStyle,s.highlightStyle,{cursor:"pointer",width:"12rem",height:"12rem",marginRight:"0.7rem","&:last-child":{marginRight:0}}],ref:l,src:n,alt:a,title:a})},v=function(e){var t=e.images,n=void 0===t?[{src:"",alt:""}]:t;return o.jsx("div",{css:{overflowX:"auto",overflowY:"hidden",whiteSpace:"nowrap",marginLeft:"1px",marginRight:"1px",marginBottom:"1.5rem"}},n.map((function(e){var t=e.src,n=e.alt;return o.jsx(f,{src:t,alt:n})})))},x=[{src:n(6670),alt:"Real-time rendering (Rasterization)"},{src:n(7478),alt:"Real-time rendering (Ray tracing)"},{src:n(4048),alt:"Augmented reality (Microsoft HoloLens)"}],b=[{src:n(1351),alt:"My guitar"},{src:n(8316),alt:"My concert"},{src:n(316),alt:"My music"}],C=function(){var e=r.useContext(c.ThemeContext);return o.jsx("div",{css:[e.textStyle,{overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem",background:"#000000 url("+g+") no-repeat center"}]},o.jsx("div",{css:{fontWeight:"bold",fontSize:"1.8rem",lineHeight:1,marginBottom:"1.5rem"}},o.jsx(s.Korean,null,"소개"),o.jsx(s.English,null,"About")),o.jsx("div",{css:{marginBottom:"1.5rem"}},o.jsx(s.Korean,null,"반가워요! 컴퓨터와 음악에 관심이 있습니다 :)"),o.jsx(s.English,null,"Welcome! I'm interested in computers and music :)")),o.jsx(d,null,o.jsx(s.Korean,null,"관심사 (컴퓨터)"),o.jsx(s.English,null,"Interests (Computer)")),o.jsx(h,null,o.jsx(m,null,o.jsx(s.Korean,null,"컴퓨터 그래픽스(CG), 특히 실시간 렌더링, 3D 모델링, 증강현실(AR), 가상현실(VR)에 관심이 있습니다."),o.jsx(s.English,null,"I'm interested in computer graphics, especially real-time rendering, 3D modeling, augmented reality(AR), and virtual reality(VR).")),o.jsx(m,null,o.jsx(s.Korean,null,"웹 개발에도 관심이 있습니다."),o.jsx(s.English,null,"I'm also interested in web development."))),o.jsx(v,{images:x}),o.jsx(d,null,o.jsx(s.Korean,null,"관심사 (음악)"),o.jsx(s.English,null,"Interests (Music)")),o.jsx(h,null,o.jsx(m,null,o.jsx(s.Korean,null,"취미로 피아노와 기타를 연주합니다. 가끔씩 작곡/편곡에도 도전합니다."),o.jsx(s.English,null,"I play piano and guitar as a hobby. Sometimes I also try to compose and arrange music.")),o.jsx(m,null,o.jsx(s.Korean,null,"헤비메탈, 재즈, 클래식 음악을 즐겨 듣습니다. 다른 장르의 음악들도 종종 들어요."),o.jsx(s.English,null,"I like hearing heavy metal, jazz, and classical music. I also listen to music from other genres."))),o.jsx(v,{images:b}),o.jsx(d,null,o.jsx(s.Korean,null,"연락처"),o.jsx(s.English,null,"Contacts")),o.jsx(h,null,o.jsx(m,null,o.jsx(s.Korean,null,"이메일 1"),o.jsx(s.English,null,"Email 1"),": ",o.jsx(p,{url:"mailto:95phm@kaist.ac.kr"},"95phm@kaist.ac.kr")),o.jsx(m,null,o.jsx(s.Korean,null,"이메일 2"),o.jsx(s.English,null,"Email 2"),": ",o.jsx(p,{url:"mailto:mathematicianscott@gmail.com"},"mathematicianscott@gmail.com"))))};t.AboutApp=function(){return o.jsx(l.App,{koreanTitle:"소개",englishTitle:"About"},o.jsx(c.ThemeProvider,{lightColor:"#00e9f9",darkColor:"#0090ff"},o.jsx(C,null)))}},2429:function(e,t,n){"use strict";t.__esModule=!0,t.AlertApp=void 0;var o=n(8460),r=n(6688),i=n(4781),a=n(4511),s=n(6646);t.AlertApp=function(e){var t=e.koreanMessage,n=void 0===t?"":t,l=e.englishMessage,c=void 0===l?"":l;return o.jsx(s.App,{koreanTitle:n,englishTitle:c},o.jsx("div",{css:{display:"table",textAlign:"center",width:"100%",height:"100%",color:"#ffffff",backgroundColor:"#202020"}},o.jsx("span",{css:{display:"table-cell",verticalAlign:"middle",fontSize:"1.5rem"}},o.jsx(a.Korean,null,n," ",o.jsx(i.Icon,{definition:r.faHome}),"을 눌러 돌아가세요."),o.jsx(a.English,null,c," Click ",o.jsx(i.Icon,{definition:r.faHome})," to return."))))}},6646:function(e,t,n){"use strict";t.__esModule=!0,t.App=void 0;var o=n(8460),r=n(5776),i=n(1734),a=n(4511),s=o.keyframes({from:{opacity:.5},to:{opacity:1}});t.App=function(e){var t=e.koreanTitle,n=void 0===t?"":t,l=e.englishTitle,c=void 0===l?"":l,u=e.children,g=void 0===u?{}:u,d=r.useContext(a.LanguageContext).currentLanguage;return r.useEffect((function(){var e="Korean"===d?n:c;e.length>0&&(document.title=e)})),o.jsx(i.Screen,null,o.jsx("div",{css:{width:"100%",height:"100%",animation:s+" 0.15s"}},g))}},3165:function(e,t,n){"use strict";t.__esModule=!0,t.CVApp=void 0;var o=n(8460),r=n(6646);t.CVApp=function(){return o.jsx(r.App,{koreanTitle:"이력",englishTitle:"CV"},o.jsx("iframe",{css:{border:"none",width:"100%",height:"100%",backgroundColor:"#d1d1d1"},src:"https://drive.google.com/file/d/1_SuQg0TrQjYRTmmI-Jv9UsbO6slMCaSP/preview",width:"100%",height:"100%"}))}},211:function(e,t){"use strict";t.__esModule=!0,t.allMusics=void 0,t.allMusics=["jgkiT8_qRNw","-_5xyia2_6g","xpt_CteDTn8","pX1-GgGFRW4","gOeEcsSS6uU","BU-U7i0CqOI","kg8j4JQVabQ","X8vwCzxVMcE","cASndgM7XwU","-d3pdcPdZcE","HYo3vOGLTCc","UkFKk86VyOU","p76UpqEdStM","Un_jqD9IC_I","b5ZXCtTiBVs","5UW6jQs_bEo","HjcfYic1Z28","lj3iI1IOGL4","Nn8VCR0rBns","SlIfJKGK0bc","6a9X0VWm2bQ","yipCvvK2ncU","zZhOjvNWOjM","EgTafIgIRB4","LxOkMrh-zAI","WwgJSilQcYU","l4FG-oSiLf4","1NdFoolaPlY"]},6679:function(e,t,n){"use strict";t.__esModule=!0,t.MusicApp=void 0;var o=n(8460),r=n(5776),i=n(4953),a=n(341),s=n(6646),l=n(5783),c=n(4511),u=n(211),g=n(4781),d=n(9446),h=function(e){var t=e.url,n=void 0===t?"":t,i=e.children,a=void 0===i?{}:i,s=r.useContext(l.ThemeContext);return o.jsx("a",{css:{wordBreak:"break-all",color:s.lightColor,"&:hover, &:active":{color:s.darkColor}},target:"_blank",rel:"noopener noreferrer",href:n},a)},m=function(e){var t=e.id,n=void 0===t?"":t,i=r.useContext(l.ThemeContext);return o.jsx("div",{css:{position:"relative",height:0,paddingBottom:"56.25%"}},o.jsx("iframe",{css:[i.boxStyle,i.highlightStyle,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}],frameBorder:0,allowFullScreen:!0,src:"https://www.youtube.com/embed/"+n}))},p=function(e){var t=e.ids,n=void 0===t?[]:t,s=r.useContext(l.ThemeContext),c=r.useState(0),u=c[0],d=c[1],h=u<=0,p=u>=n.length-1;return o.jsx("div",{css:{width:"100%",maxWidth:"640px"}},o.jsx(m,{id:n[u]}),o.jsx("div",{css:{marginTop:"1rem"}},o.jsx("button",{css:{float:"left",cursor:"pointer",fontSize:"2rem",border:"none",color:h?"#444444":s.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":h?{}:{color:s.lightColor}},disabled:h,onClick:function(){h||d(u-1)}},o.jsx(g.Icon,{definition:i.faArrowAltCircleLeft})),o.jsx("button",{css:{float:"right",cursor:"pointer",fontSize:"2rem",border:"none",color:p?"#444444":s.defaultColor,backgroundColor:"rgba(0, 0, 0, 0)","&:hover, &:active, &:focus":p?{}:{color:s.lightColor}},disabled:p,onClick:function(){p||d(u+1)}},o.jsx(g.Icon,{definition:a.faArrowAltCircleRight}))))},f=function(){var e=r.useContext(l.ThemeContext);return o.jsx("div",{css:[e.textStyle,{overflowY:"auto",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem",background:"#000000 url("+d+") no-repeat center"}]},o.jsx("div",{css:{fontWeight:"bold",fontSize:"1.8rem",lineHeight:1,marginBottom:"1.5rem"}},o.jsx(c.Korean,null,"음악"),o.jsx(c.English,null,"Musics")),o.jsx("div",{css:{marginBottom:"1.5rem"}},o.jsx(c.Korean,null,"영상들을 불러오는데에 시간이 걸리니 잠시 기다려주세요. 모든 영상들을 보려면 ",o.jsx(h,{url:"https://www.youtube.com/user/Scottparkmusic"},"유튜브"),"를 방문해주세요."),o.jsx(c.English,null,"It takes some time to load the videos, so please wait a moment. To see the all videos, visit ",o.jsx(h,{url:"https://www.youtube.com/user/Scottparkmusic"},"YouTube"),".")),o.jsx(p,{ids:u.allMusics}))};t.MusicApp=function(){return o.jsx(s.App,{koreanTitle:"음악",englishTitle:"Musics"},o.jsx(l.ThemeProvider,{lightColor:"#77ff00",darkColor:"#21d948"},o.jsx(f,null)))}},1250:function(e,t,n){"use strict";t.__esModule=!0,t.ProjectApp=void 0;var o=n(8460),r=n(5776),i=n(4511),a=n(6646),s=n(5783),l=n(3619),c=n(3145),u=function(e){var t=e.url,n=void 0===t?"":t,i=e.children,a=void 0===i?{}:i,l=r.useContext(s.ThemeContext);return o.jsx("a",{css:{wordBreak:"break-all",color:l.lightColor,"&:hover, &:active":{color:l.darkColor}},target:"_blank",rel:"noopener noreferrer",href:n},a)},g=function(e){var t=e.url,n=void 0===t?"":t,r=e.children,i=void 0===r?{}:r;return o.jsx("a",{css:{display:"table",wordBreak:"break-all",marginBottom:"0.5rem",fontSize:"1.5rem",color:"#f9ab0d","&:hover, &:active":{color:"#d9890d"}},target:"_blank",rel:"noopener noreferrer",href:n},i)},d=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("div",{css:{width:"100%"}},n)},h=function(e){var t,n,i,a,l=e.projects,c=void 0===l?[]:l,u=r.useContext(s.ThemeContext),h=r.useState(0),m=h[0],p=h[1],f=c[m],v="@media (min-width: 769px)",x=o.css([u.boxStyle,u.highlightStyle,(t={display:"inline-block",cursor:"pointer",textAlign:"center",width:"16rem",height:"12rem",marginRight:"1rem",marginBottom:0,fontSize:"2rem",color:"rgba(0, 0, 0, 0)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center","&:hover, &:active, &:focus":u.textStyle},t[v]={display:"block",marginRight:0,marginBottom:"1rem"},t)]);return o.jsx(r.Fragment,null,o.jsx("div",{css:(n={display:"inline-block",position:"relative",width:"100%",height:"14rem",minHeight:"14rem",marginRight:0},n[v]={float:"left",width:"18rem",height:"100%",marginRight:"1rem"},n)},o.jsx("div",{css:(i={position:"absolute",overflow:"auto",whiteSpace:"nowrap",top:0,right:0,bottom:0,left:0},i[v]={whiteSpace:"normal"},i)},c.map((function(e,t){var n=e.imageURL,r=e.name;return o.jsx("button",{css:[x,{title:r,backgroundImage:"url("+n+")"}],onClick:function(){p(t)}},r)})))),o.jsx("div",{css:(a={display:"inline-block",position:"relative",width:"100%",height:"calc(100% - 15rem)",minHeight:"7rem",marginBottom:"1rem"},a[v]={float:"right",width:"calc(100% - 19rem)",height:"100%"},a)},o.jsx("div",{css:{position:"absolute",overflow:"auto",top:0,right:0,bottom:0,left:0}},o.jsx(g,{url:f.repositoryURL},f.name),o.jsx(d,null,f.description))))},m=function(){var e=r.useContext(s.ThemeContext);return o.jsx("div",{css:[e.textStyle,{display:"table",boxSizing:"border-box",width:"100%",height:"100%",padding:"1.5rem",background:"#000000 url("+l+") no-repeat center"}]},o.jsx("div",{css:{display:"table-row",height:0}},o.jsx("div",{css:{fontWeight:"bold",fontSize:"1.8rem",lineHeight:1,marginBottom:"1.5rem"}},o.jsx(i.Korean,null,"프로젝트"),o.jsx(i.English,null,"Projects")),o.jsx("div",{css:{marginBottom:"1.5rem"}},o.jsx(i.Korean,null,"모든 프로젝트들을 보려면 ",o.jsx(u,{url:"https://github.com/Avantgarde95"},"깃허브"),"를 방문해주세요."),o.jsx(i.English,null,"To see the all projects, visit ",o.jsx(u,{url:"https://github.com/Avantgarde95"},"GitHub"),"."))),o.jsx("div",{css:{display:"table-row",height:"100%"}},o.jsx(h,{projects:c})))};t.ProjectApp=function(){return o.jsx(a.App,{koreanTitle:"프로젝트",englishTitle:"Projects"},o.jsx(s.ThemeProvider,{lightColor:"#f9ab0d",darkColor:"#d9890d"},o.jsx(m,null)))}},5783:function(e,t,n){"use strict";t.__esModule=!0,t.ThemeProvider=t.ThemeContext=void 0;var o=n(8460),r=n(5776);t.ThemeContext=r.createContext({}),t.ThemeProvider=function(e){var n=e.defaultColor,r=void 0===n?"#ffffff":n,i=e.lightColor,a=void 0===i?"#ffffff":i,s=e.darkColor,l=void 0===s?"#ffffff":s,c=e.children,u=void 0===c?{}:c,g="0 0 2px "+l+", 0 0 4px "+a;return o.jsx(t.ThemeContext.Provider,{value:{defaultColor:r,lightColor:a,darkColor:l,textStyle:o.css({color:r,textShadow:g}),boxStyle:o.css({boxShadow:g,backgroundColor:"rgba(0, 0, 0, 0)",border:"solid 1px "+r,borderRadius:0}),highlightStyle:o.css({"&:hover, &:active, &:focus":{color:a,border:"solid 1px "+a}})}},u)}},4511:function(e,t,n){"use strict";t.__esModule=!0,t.English=t.Korean=t.LanguageProvider=t.LanguageContext=void 0;var o=n(8460),r=n(5776);t.LanguageContext=r.createContext({}),t.LanguageProvider=function(e){var n=e.children,i=void 0===n?{}:n,a=r.useState("English"),s=a[0],l=a[1];return o.jsx(t.LanguageContext.Provider,{value:{currentLanguage:s,changeLanguage:function(e){l(e)}}},i)},t.Korean=function(e){var n=e.children,i=void 0===n?{}:n;return o.jsx(r.Fragment,null,"Korean"===r.useContext(t.LanguageContext).currentLanguage&&i)},t.English=function(e){var n=e.children,i=void 0===n?{}:n;return o.jsx(r.Fragment,null,"English"===r.useContext(t.LanguageContext).currentLanguage&&i)}},2650:function(e,t,n){"use strict";t.__esModule=!0,t.HomeScreen=void 0;var o=n(8460),r=n(5776),i=n(3936),a=n(6375),s=n(7452),l=n(6766),c=n(491),u=n(8138),g=n(8279),d=n(9853),h=n(8190),m=n(8658),p=n(1734),f=n(4781),v=n(4511),x=function(e){var t=e.title,n=void 0===t?"":t,r=e.path,a=void 0===r?"":r,s=e.color,l=void 0===s?"#ffffff":s,c=e.children,u=void 0===c?{}:c,g=i.useNavigate(),d=o.css({display:"inline-block",cursor:"pointer",textAlign:"center",verticalAlign:"middle",width:"4rem",height:"4rem",margin:"auto",border:"none",borderRadius:"1rem",lineHeight:"4rem",fontSize:"2.5rem",backgroundColor:"#ffffff",transition:"all 0.1s","&:hover, &:active, &:focus":{transform:"scale(0.85)"}});return a.startsWith("http")?o.jsx("a",{css:[d,{color:l}],title:n,tabIndex:0,target:"_blank",rel:"noopener noreferrer",href:a},u):o.jsx("button",{css:[d,{color:l}],title:n,onClick:function(){g(a)}},u)},b=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("div",{css:{textAlign:"center",margin:"1rem auto auto auto",color:"#ffffff"}},n)},C=function(e){var t=e.width,n=void 0===t?0:t,r=e.height,i=void 0===r?0:r,a=e.children,s=void 0===a?{}:a;return o.jsx("div",{css:{display:"inline-block",boxSizing:"border-box",width:n+"rem",height:i+"rem",paddingTop:"1rem",webkitTapHighlightColor:"rgba(255, 255, 255, 0)"}},s)},I=function(e){var t=e.width,n=void 0===t?0:t,r=e.height,i=void 0===r?0:r,a=e.children,s=void 0===a?{}:a;return o.jsx("div",{css:{display:"inline-block",width:n+"rem",height:i+"rem"}},s)},j=[{koreanName:"소개",englishName:"About",path:"about",icon:a.faIdCard,color:"#007aeb"},{koreanName:"이력",englishName:"CV",path:"cv",icon:s.faFileAlt,color:"#aaaaaa"},{koreanName:"프로젝트",englishName:"Projects",path:"project",icon:c.faLaptopCode,color:"#876766"},{koreanName:"음악",englishName:"Musics",path:"music",icon:h.faMusic,color:"#1cb81d"},{koreanName:"블로그",englishName:"Blog",path:"https://Avantgarde95.github.io/blog",icon:l.faNewspaper,color:"#677963"},{koreanName:"깃허브",englishName:"GitHub",path:"https://github.com/Avantgarde95",icon:m.faGithub,color:"#211f1f"},{koreanName:"유튜브",englishName:"YouTube",path:"https://www.youtube.com/user/Scottparkmusic",icon:u.faYoutube,color:"#ff0000"},{koreanName:"페이스북",englishName:"Facebook",path:"https://www.facebook.com/s.ramanujan",icon:d.faFacebookSquare,color:"#3b5998"},{koreanName:"인스타그램",englishName:"Instagram",path:"https://www.instagram.com/hunminpark95",icon:g.faInstagram,color:"#c13584"}];t.HomeScreen=function(e){var t=e.appWidth,n=void 0===t?8:t,i=e.appHeight,a=void 0===i?8:i,s=e.maxAppsPerLine,l=void 0===s?5:s,c=r.useContext(v.LanguageContext).currentLanguage;return r.useEffect((function(){document.title="Korean"===c?"홈":"Home"})),o.jsx(p.Screen,null,o.jsx("div",{css:{textAlign:"center",width:"100%",height:"100%"}},o.jsx("div",{css:{display:"inline-block",maxWidth:n*l+"rem"}},j.map((function(e){return o.jsx(C,{width:n,height:a},o.jsx(x,{title:e.englishName,path:e.path,color:e.color},o.jsx(f.Icon,{definition:e.icon})),o.jsx(b,null,o.jsx(v.Korean,null,e.koreanName),o.jsx(v.English,null,e.englishName)))})),Array.apply(null,Array(l)).map((function(){return o.jsx(I,{width:n,height:a})})))))}},4781:function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};t.__esModule=!0,t.Icon=void 0;var r=n(8460),i=n(8947);t.Icon=function(e){var t=e.definition,n=void 0===t?{}:t,a=e.className,s=void 0===a?"":a,l=i.icon(n).abstract[0],c=l.attributes,u=l.children[0].attributes;return c.class+=" "+s,r.jsx("svg",o({},c),r.jsx("path",o({},u)))}},1923:function(e,t,n){"use strict";t.__esModule=!0,t.LockScreen=void 0;var o=n(8460),r=n(5776),i=n(1734),a=n(1246),s=n(4511);t.LockScreen=function(e){var t,n,l=e.onDisappear,c=void 0===l?{}:l,u=r.useState("rgba(255, 255, 255, 1)"),g=u[0],d=u[1],h="@media (min-height: 361px)";return o.jsx(i.Screen,null,o.jsx("div",{css:{cursor:"pointer",position:"relative",overflow:"hidden",width:"100%",height:"100%",color:g,transition:"color 0.25s"},onClick:function(){d("rgba(255, 255, 255, 0)"),setTimeout(c,250)}},o.jsx("div",{css:(t={textAlign:"center",width:"100%",marginTop:"1rem",fontSize:"3rem"},t[h]={marginTop:"3rem"},t)},o.jsx(a.TimeProvider,null,o.jsx(a.Hour,null),":",o.jsx(a.Minute,null))),o.jsx("div",{css:{textAlign:"center",width:"100%"}},o.jsx(a.TimeProvider,null,o.jsx(a.WeekDay,null),", ",o.jsx(a.Month,null)," ",o.jsx(a.MonthDay,null))),o.jsx("div",{css:(n={position:"absolute",textAlign:"center",bottom:"1rem",width:"100%"},n[h]={bottom:"3rem"},n)},o.jsx(s.Korean,null,"클릭해서 잠금해제"),o.jsx(s.English,null,"Click anywhere to unlock"))))}},4544:function(e,t,n){"use strict";t.__esModule=!0,t.NavigationBar=void 0;var o=n(8460),r=n(5776),i=n(3936),a=n(5346),s=n(6688),l=n(4781),c=n(4511),u=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("span",{css:{display:"table-cell",textAlign:"center",width:"4rem"}},n)},g=n(7302),d=n(3770);t.NavigationBar=function(e){var t=e.showNavigators,n=void 0===t||t,h=i.useNavigate(),m=r.useContext(c.LanguageContext).changeLanguage,p=o.css({cursor:"pointer",display:"inline-block",verticalAlign:"middle",transition:"all 0.1s",width:"3rem",height:"2.5rem",border:"none",lineHeight:"2.5rem",fontSize:"1.5rem",color:"#ffffff",backgroundColor:"transparent","&:hover, &:active, &:focus":{transform:"scale(0.9)"}}),f=o.css([p,{backgroundSize:"auto 1.8rem",backgroundRepeat:"no-repeat",backgroundPosition:"center"}]);return o.jsx("div",{css:{display:"table",width:"100%"}},o.jsx(u,null,n&&o.jsx("button",{css:p,title:"Back",onClick:function(){h(-1)}},o.jsx(l.Icon,{definition:a.faArrowLeft}))),o.jsx(u,null,o.jsx(c.English,null,o.jsx("button",{css:[f,{backgroundImage:"url("+d+")"}],title:"To Korean",onClick:function(){m("Korean")}})),o.jsx(c.Korean,null,o.jsx("button",{css:[f,{backgroundImage:"url("+g+")"}],title:"To English",onClick:function(){m("English")}}))),o.jsx(u,null,n&&o.jsx("button",{css:p,title:"Home",onClick:function(){h("/")}},o.jsx(l.Icon,{definition:s.faHome}))))}},1734:function(e,t,n){"use strict";t.__esModule=!0,t.Screen=void 0;var o=n(8460),r=n(408);t.Screen=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("div",{css:{background:"#000000 url("+r+") no-repeat center",overflowY:"auto",width:"100%",height:"calc(100% - 4.5rem)"}},n)}},9040:function(e,t,n){"use strict";t.__esModule=!0,t.StatusBar=void 0;var o=n(8460),r=n(1871),i=n(8307),a=n(8017),s=n(4781),l=n(1246),c=n(4511),u=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("div",{css:{float:"left",height:"100%"}},n)},g=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("div",{css:{float:"right",height:"100%"}},n)},d=function(e){var t=e.children,n=void 0===t?{}:t;return o.jsx("span",{css:{marginLeft:"0.2rem",marginRight:"0.2rem"}},n)};t.StatusBar=function(e){var t=e.showTime,n=void 0===t||t;return o.jsx("div",{css:{boxSizing:"border-box",width:"100%",height:"2rem",paddingLeft:"0.3rem",paddingRight:"0.3rem",lineHeight:"2rem",color:"#ffffff"}},o.jsx(u,null,o.jsx(d,null,o.jsx(c.Korean,null,"마이폰"),o.jsx(c.English,null,"MyPhone"))),o.jsx(g,null,o.jsx(d,null,o.jsx(s.Icon,{definition:r.faWifi})),o.jsx(d,null,o.jsx(s.Icon,{definition:i.faSignal})),o.jsx(d,null,o.jsx(s.Icon,{definition:a.faBatteryFull})),n&&o.jsx(d,null,o.jsx(l.TimeProvider,null,o.jsx(l.Hour,null),":",o.jsx(l.Minute,null)," ",o.jsx(l.AMPM,null)))))}},1246:function(e,t,n){"use strict";t.__esModule=!0,t.AMPM=t.WeekDay=t.MonthDay=t.Month=t.Minute=t.Hour=t.TimeProvider=void 0;var o=n(8460),r=n(5776),i=["January","February","March","April","May","June","July","August","September","November","December"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];function s(){var e=new Date;return{year:e.getFullYear(),month:e.getMonth(),monthDay:e.getDate()-1,weekDay:e.getDay(),hour:e.getHours(),minute:e.getMinutes()}}var l=r.createContext({year:0,month:0,monthDay:0,weekDay:0,hour:0,minute:0});t.TimeProvider=function(e){var t=e.children,n=void 0===t?{}:t,i=r.useState(s()),a=i[0],c=i[1];return r.useEffect((function(){var e=setInterval((function(){c(s)}),1e4);return function(){clearInterval(e)}})),o.jsx(l.Provider,{value:a},n)},t.Hour=function(){var e=r.useContext(l).hour%12;return o.jsx(r.Fragment,null,""+(0===e?12:e))},t.Minute=function(){var e,t=r.useContext(l).minute;return o.jsx(r.Fragment,null,""+(e=t,2,(""+(Math.pow(10,2)+e)).slice(1)))},t.Month=function(){var e=r.useContext(l).month;return o.jsx(r.Fragment,null,i[e])},t.MonthDay=function(){var e=r.useContext(l).monthDay;return o.jsx(r.Fragment,null,""+(e+1))},t.WeekDay=function(){var e=r.useContext(l).weekDay;return o.jsx(r.Fragment,null,a[e])},t.AMPM=function(){var e=r.useContext(l).hour;return o.jsx(r.Fragment,null,e>=12?"PM":"AM")}},3619:function(e,t,n){e.exports=n.p+"bbd63ba6af2ad8f70d80864ea349fbb6.png"},8316:function(e,t,n){e.exports=n.p+"56108b22ef76da426d37c6c2f8a6e7fd.jpg"},9446:function(e,t,n){e.exports=n.p+"2ea394845f911efacb3af63bc0c07f97.png"},4802:function(e,t,n){e.exports=n.p+"cc9fa57f7ec5aa558bb85222ae6b9265.png"},4048:function(e,t,n){e.exports=n.p+"c0768d472d083b829dcd7f75092306fd.png"},6670:function(e,t,n){e.exports=n.p+"0417a6471b2d68b6cbae0cbe3f9ddb4f.png"},7478:function(e,t,n){e.exports=n.p+"ce28326cc94feeee6329485943fcef2c.png"},316:function(e,t,n){e.exports=n.p+"8649a0d0d89dcf0d9c6bda1d61ab5cce.png"},1351:function(e,t,n){e.exports=n.p+"27f53db573c65c9a3ea484ad72a8f5c8.jpg"},408:function(e,t,n){e.exports=n.p+"8feb58426fb1684be9d9ad6f569bed02.png"},3770:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPCEtLSBDcmVhdGVkIHdpdGggTWV0aG9kIERyYXcgLSBodHRwOi8vZ2l0aHViLmNvbS9kdW9waXhlbC9NZXRob2QtRHJhdy8gLS0+DQogICAgPGc+DQogICAgICAgIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4NCiAgICAgICAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjUyIiB3aWR0aD0iNTIiIHk9Ii0xIiB4PSItMSIvPg0KICAgICAgICA8ZyBkaXNwbGF5PSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgaWQ9ImNhbnZhc0dyaWQiPg0KICAgICAgICAgICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KICAgIDxnPg0KICAgICAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+DQogICAgICAgIDx0ZXh0IHN0cm9rZT0iIzAwMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCINCiAgICAgICAgICAgICAgZm9udC1mYW1pbHk9IkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGlkPSJzdmdfMSIgeT0iMjkiIHg9Ii0xLjUiIHN0cm9rZS13aWR0aD0iMCINCiAgICAgICAgICAgICAgZmlsbD0iIzY2NjY2NiI+6rCAPC90ZXh0Pg0KICAgICAgICA8dGV4dCBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiINCiAgICAgICAgICAgICAgZm9udC1zaXplPSIzNCIgaWQ9InN2Z18yIiB5PSI0OCIgeD0iMjQuNSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiNmZmZmZmYiPkE8L3RleHQ+DQogICAgPC9nPg0KPC9zdmc+"},7302:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPCEtLSBDcmVhdGVkIHdpdGggTWV0aG9kIERyYXcgLSBodHRwOi8vZ2l0aHViLmNvbS9kdW9waXhlbC9NZXRob2QtRHJhdy8gLS0+DQogICAgPGc+DQogICAgICAgIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4NCiAgICAgICAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjUyIiB3aWR0aD0iNTIiIHk9Ii0xIiB4PSItMSIvPg0KICAgICAgICA8ZyBkaXNwbGF5PSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgaWQ9ImNhbnZhc0dyaWQiPg0KICAgICAgICAgICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KICAgIDxnPg0KICAgICAgICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+DQogICAgICAgIDx0ZXh0IHN0cm9rZT0iIzAwMCIgZm9udC13ZWlnaHQ9ImJvbGQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHRleHQtYW5jaG9yPSJzdGFydCINCiAgICAgICAgICAgICAgZm9udC1mYW1pbHk9IkhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGlkPSJzdmdfMSIgeT0iMjkiIHg9Ii0xLjUiIHN0cm9rZS13aWR0aD0iMCINCiAgICAgICAgICAgICAgZmlsbD0iI2ZmZmZmZiI+6rCAPC90ZXh0Pg0KICAgICAgICA8dGV4dCBmb250LXdlaWdodD0iYm9sZCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdGV4dC1hbmNob3I9InN0YXJ0IiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiINCiAgICAgICAgICAgICAgZm9udC1zaXplPSIzNCIgaWQ9InN2Z18yIiB5PSI0OCIgeD0iMjQuNSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiM2NjY2NjYiPkE8L3RleHQ+DQogICAgPC9nPg0KPC9zdmc+"},9204:function(){String.prototype.startsWith||(String.prototype.startsWith=function(e,t){var n=t>0?0|t:0;return this.substring(n,n+e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e})},3145:function(e){"use strict";e.exports=JSON.parse('[{"name":"ArchiPi","description":"Simulation of Archimedes\' polygonal algorithm","repositoryURL":"https://github.com/Avantgarde95/ArchiPi","imageURL":"https://raw.githubusercontent.com/Avantgarde95/ArchiPi/master/Screenshot.png"},{"name":"archipi-web","description":"Archimedes\' method for approximating π. Created for celebrating π day! (2019.03.14)","repositoryURL":"https://github.com/Avantgarde95/archipi-web","imageURL":"https://raw.githubusercontent.com/Avantgarde95/archipi-web/master/Screenshot.png"},{"name":"asciirain","description":"Rain of the characters","repositoryURL":"https://github.com/Avantgarde95/asciirain","imageURL":"https://raw.githubusercontent.com/Avantgarde95/asciirain/master/Screenshot.png"},{"name":"asciisnow","description":"Snow of the characters","repositoryURL":"https://github.com/Avantgarde95/asciisnow","imageURL":"https://raw.githubusercontent.com/Avantgarde95/asciisnow/master/Screenshot.png"},{"name":"MyPage","description":"My website!","repositoryURL":"https://github.com/Avantgarde95/Avantgarde95.github.io","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Avantgarde95.github.io/master/image/AboutApp.png"},{"name":"blog","description":"My blog!","repositoryURL":"https://github.com/Avantgarde95/blog","imageURL":"https://raw.githubusercontent.com/Avantgarde95/blog/master/Screenshot.png"},{"name":"C3DMB","description":"Code for \'Collaborative 3D modeling system based on blockchain\'","repositoryURL":"https://github.com/Avantgarde95/C3DMB","imageURL":"https://raw.githubusercontent.com/Avantgarde95/C3DMB/master/Screenshot.png"},{"name":"CGLab","description":"KAIST CS580 Computer graphics projects","repositoryURL":"https://github.com/Avantgarde95/CGLab","imageURL":"https://raw.githubusercontent.com/Avantgarde95/CGLab/master/Screenshot.png"},{"name":"CppIntro","description":"Example codes and my solutions for \\"Introduction to Programming with C++\\" (2nd edition)","repositoryURL":"https://github.com/Avantgarde95/CppIntro","imageURL":"https://raw.githubusercontent.com/Avantgarde95/CppIntro/master/Screenshot.png"},{"name":"DailyBread-old","description":"DailyBread viewer in python (Old version)","repositoryURL":"https://github.com/Avantgarde95/DailyBread-old","imageURL":"https://raw.githubusercontent.com/Avantgarde95/DailyBread-old/master/Screenshot.png"},{"name":"Gauss","description":"Implementation of Gaussian elimination in Pthread / OpenMP","repositoryURL":"https://github.com/Avantgarde95/Gauss","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Gauss/master/Screenshot.png"},{"name":"guitarsayo","description":"악기 구매 도우미","repositoryURL":"https://github.com/Avantgarde95/guitarsayo","imageURL":"https://raw.githubusercontent.com/Avantgarde95/guitarsayo/master/Screenshot.png"},{"name":"HandyClock","description":"Simple clock written in python","repositoryURL":"https://github.com/Avantgarde95/HandyClock","imageURL":"https://raw.githubusercontent.com/Avantgarde95/HandyClock/master/Screenshot.png"},{"name":"HQ9","description":"Simple implementation of HQ9+ in python","repositoryURL":"https://github.com/Avantgarde95/HQ9","imageURL":"https://raw.githubusercontent.com/Avantgarde95/HQ9/master/Screenshot.png"},{"name":"Image2Term","description":"Draw an image on the terminal.","repositoryURL":"https://github.com/Avantgarde95/Image2Term","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Image2Term/master/Screenshot.png"},{"name":"Blowing Bubble","description":"KAIST-CS482 (2016), Interactive Computer Graphics, Team 4","repositoryURL":"https://github.com/Avantgarde95/kaist_cs482_2016_team4","imageURL":"https://raw.githubusercontent.com/Avantgarde95/kaist_cs482_2016_team4/master/Screenshot.png"},{"name":"LangtonAnt","description":"Simple simulation of (multi-color) Langton\'s ant (in python)","repositoryURL":"https://github.com/Avantgarde95/LangtonAnt","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LangtonAnt/master/Screenshot.png"},{"name":"LiKo","description":"KAIST CS374 Team Project","repositoryURL":"https://github.com/Avantgarde95/LiKo","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LiKo/master/Screenshot.png"},{"name":"Lucky","description":null,"repositoryURL":"https://github.com/Avantgarde95/Lucky","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Lucky/master/Screenshot.png"},{"name":"LucyViewer","description":"Simple Embree ray tracing demo: Lucy 3D model viewer","repositoryURL":"https://github.com/Avantgarde95/LucyViewer","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LucyViewer/master/Screenshot.png"},{"name":"Mandelbrot","description":"Mandelbrot generator, made for fun","repositoryURL":"https://github.com/Avantgarde95/Mandelbrot","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Mandelbrot/master/Screenshot.png"}]')}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,n.x=function(){},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="dist/",function(){var e={179:0},t=[[5973,832]],o=function(){},r=function(r,i){for(var a,s,l=i[0],c=i[1],u=i[2],g=i[3],d=0,h=[];d<l.length;d++)s=l[d],n.o(e,s)&&e[s]&&h.push(e[s][0]),e[s]=0;for(a in c)n.o(c,a)&&(n.m[a]=c[a]);for(u&&u(n),r&&r(i);h.length;)h.shift()();return g&&t.push.apply(t,g),o()},i=self.webpackChunk=self.webpackChunk||[];function a(){for(var o,r=0;r<t.length;r++){for(var i=t[r],a=!0,s=1;s<i.length;s++){var l=i[s];0!==e[l]&&(a=!1)}a&&(t.splice(r--,1),o=n(n.s=i[0]))}return 0===t.length&&(n.x(),n.x=function(){}),o}i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i));var s=n.x;n.x=function(){return n.x=s||function(){},(o=a)()}}(),n.x()}();