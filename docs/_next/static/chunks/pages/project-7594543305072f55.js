(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[512],{6448:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project",function(){return a(6862)}])},8418:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(c){n=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var n,o=(n=a(7294))&&n.__esModule?n:{default:n},i=a(6273),s=a(387),c=a(7190);var p={};function g(e,t,a,r){if(e&&i.isLocalURL(t)){e.prefetch(t,a,r).catch((function(e){0}));var n=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;p[t+"%"+a+(n?"%"+n:"")]=!0}}var u=function(e){var t,a=!1!==e.prefetch,n=s.useRouter(),u=o.default.useMemo((function(){var t=r(i.resolveHref(n,e.href,!0),2),a=t[0],o=t[1];return{href:a,as:e.as?i.resolveHref(n,e.as):o||a}}),[n,e.href,e.as]),l=u.href,h=u.as,m=e.children,d=e.replace,f=e.shallow,v=e.scroll,y=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=(t=o.default.Children.only(m))&&"object"===typeof t&&t.ref,L=r(c.useIntersection({rootMargin:"200px"}),2),S=L[0],A=L[1],M=o.default.useCallback((function(e){S(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,S]);o.default.useEffect((function(){var e=A&&a&&i.isLocalURL(l),t="undefined"!==typeof y?y:n&&n.locale,r=p[l+"%"+h+(t?"%"+t:"")];e&&!r&&g(n,l,h,{locale:t})}),[h,l,A,y,a,n]);var w={ref:M,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,a,r,n,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(a))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[n?"replace":"push"](a,r,{shallow:o,locale:c,scroll:s}))}(e,n,l,h,d,f,v,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(l)&&g(n,l,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var R="undefined"!==typeof y?y:n&&n.locale,U=n&&n.isLocaleDomain&&i.getDomainLocale(h,R,n&&n.locales,n&&n.domainLocales);w.href=U||i.addBasePath(i.addLocale(h,R,n&&n.defaultLocale))}return o.default.cloneElement(t,w)};t.default=u},7190:function(e,t,a){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(c){n=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,a=e.disabled||!i,c=n.useRef(),p=r(n.useState(!1),2),g=p[0],u=p[1],l=n.useCallback((function(e){c.current&&(c.current(),c.current=void 0),a||g||e&&e.tagName&&(c.current=function(e,t,a){var r=function(e){var t=e.rootMargin||"",a=s.get(t);if(a)return a;var r=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return s.set(t,a={id:t,observer:n,elements:r}),a}(a),n=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(n))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[a,t,g]);return n.useEffect((function(){if(!i&&!g){var e=o.requestIdleCallback((function(){return u(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[g]),[l,g]};var n=a(7294),o=a(9311),i="undefined"!==typeof IntersectionObserver;var s=new Map},903:function(e,t,a){"use strict";a.d(t,{E:function(){return c}});var r=a(5893),n=(a(7294),a(1664));function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){o(e,t,a[t])}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=function(e){var t=e.href,a=e.children,o=e.target,c=e.rel,p=s(e,["href","children","target","rel"]),g=t.startsWith("http"),u=g?"_blank":void 0,l=g?"noreferrer noopener":void 0;return(0,r.jsx)(n.default,{href:t,children:(0,r.jsx)("a",i({},p,{target:null!==o&&void 0!==o?o:u,rel:null!==c&&void 0!==c?c:l,children:a}))})}},6862:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(5893),n=(a(7294),a(5127)),o=a(903),i=a(4779),s=a.n(i),c=function(){return(0,r.jsxs)("div",{className:s().header,children:[(0,r.jsxs)(n.UM,{children:["\ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8\ub4e4\uc744 \ubcf4\ub824\uba74\xa0",(0,r.jsx)(o.E,{className:s().link,href:"https://github.com/Avantgarde95",children:"\uae43\ud5c8\ube0c"}),"\ub97c \ubc29\ubb38\ud574\uc8fc\uc138\uc694."]}),(0,r.jsxs)(n.R0,{children:["To see the all projects, visit\xa0",(0,r.jsx)(o.E,{className:s().link,href:"https://github.com/Avantgarde95",children:"GitHub"}),"."]})]})},p=a(4318),g=a(207),u=a.n(g),l=JSON.parse('[{"name":"ArchiPi","description":"Simulation of Archimedes\' polygonal algorithm","repositoryURL":"https://github.com/Avantgarde95/ArchiPi","imageURL":"https://raw.githubusercontent.com/Avantgarde95/ArchiPi/master/Screenshot7.png","languageMap":{"Python":16942}},{"name":"archipi-web","description":"Archimedes\' method for approximating \u03c0. Created for celebrating \u03c0 day! (2019.03.14)","repositoryURL":"https://github.com/Avantgarde95/archipi-web","imageURL":"https://raw.githubusercontent.com/Avantgarde95/archipi-web/master/Screenshot.png","languageMap":{"JavaScript":6653,"HTML":4720,"CSS":1551}},{"name":"asciirain","description":"Rain of the characters","repositoryURL":"https://github.com/Avantgarde95/asciirain","imageURL":"https://raw.githubusercontent.com/Avantgarde95/asciirain/master/image/Screenshot.png","languageMap":{"JavaScript":2907,"CSS":677,"HTML":627}},{"name":"asciisnow","description":"Snow of the characters","repositoryURL":"https://github.com/Avantgarde95/asciisnow","imageURL":"https://raw.githubusercontent.com/Avantgarde95/asciisnow/master/image/Screenshot.png","languageMap":{"JavaScript":4841,"CSS":677,"HTML":627}},{"name":"MyPage","description":"My website!","repositoryURL":"https://github.com/Avantgarde95/Avantgarde95.github.io","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Avantgarde95.github.io/master/image/AboutApp.png","languageMap":{"TypeScript":51602,"JavaScript":6578,"HTML":5391}},{"name":"blog","description":"My blog!","repositoryURL":"https://github.com/Avantgarde95/blog","imageURL":"https://raw.githubusercontent.com/Avantgarde95/blog/master/Screenshot.png","languageMap":{"TypeScript":38917,"JavaScript":7017,"HTML":5234,"CSS":1488}},{"name":"C3DMB","description":"Code for \'Collaborative 3D modeling system based on blockchain\'","repositoryURL":"https://github.com/Avantgarde95/C3DMB","imageURL":"https://raw.githubusercontent.com/Avantgarde95/C3DMB/master/Screenshot.png","languageMap":{"Kotlin":49724,"Python":5303,"Batchfile":387}},{"name":"CGLab","description":"KAIST CS580 Computer graphics projects","repositoryURL":"https://github.com/Avantgarde95/CGLab","imageURL":"https://raw.githubusercontent.com/Avantgarde95/CGLab/master/Screenshot.png","languageMap":{"C":4898555,"C++":2900395,"HTML":2366034,"CMake":757830,"Objective-C":194423,"CSS":50617,"JavaScript":41758,"Perl":34534,"GLSL":33548,"Makefile":29671,"Shell":20608,"Python":15533,"Less":8551,"Lua":5277,"Gnuplot":642,"Batchfile":172}},{"name":"code-splitting-example","description":"Simple example of Webpack code splitting + React lazy component","repositoryURL":"https://github.com/Avantgarde95/code-splitting-example","imageURL":"https://raw.githubusercontent.com/Avantgarde95/code-splitting-example/master/Screenshot.png","languageMap":{"JavaScript":6423,"TypeScript":4458,"SCSS":2125,"HTML":463}},{"name":"DailyBread-old","description":"DailyBread viewer in python","repositoryURL":"https://github.com/Avantgarde95/DailyBread-old","imageURL":"https://raw.githubusercontent.com/Avantgarde95/DailyBread-old/master/Screenshot.png","languageMap":{"Python":67405}},{"name":"Deform2D","description":"Fork of Deform2D for studying 2D deformation","repositoryURL":"https://github.com/Avantgarde95/Deform2D","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Deform2D/master/Screenshot.png","languageMap":{"C":1727861,"HTML":129465,"C++":106390,"CMake":36120,"Python":593,"Makefile":580}},{"name":"Gauss","description":"Implementation of Gaussian elimination in Pthread / OpenMP","repositoryURL":"https://github.com/Avantgarde95/Gauss","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Gauss/master/Screenshot.png","languageMap":{"C":11099,"C++":2132,"Makefile":1219,"Objective-C":300}},{"name":"guitarsayo","description":"\uc545\uae30 \uad6c\ub9e4 \ub3c4\uc6b0\ubbf8","repositoryURL":"https://github.com/Avantgarde95/guitarsayo","imageURL":"https://raw.githubusercontent.com/Avantgarde95/guitarsayo/master/Screenshot.jpg","languageMap":{"JavaScript":6941,"HTML":1349,"CSS":995,"Python":351}},{"name":"HandyClock","description":"Simple clock written in python","repositoryURL":"https://github.com/Avantgarde95/HandyClock","imageURL":"https://raw.githubusercontent.com/Avantgarde95/HandyClock/master/Screenshot.png","languageMap":{"Python":17499}},{"name":"HoloLight","description":null,"repositoryURL":"https://github.com/Avantgarde95/HoloLight","imageURL":"https://raw.githubusercontent.com/Avantgarde95/HoloLight/master/Screenshot.png","languageMap":{"C#":3273422,"ShaderLab":136783,"HLSL":38282}},{"name":"HQ9","description":"Simple implementation of HQ9+ in python","repositoryURL":"https://github.com/Avantgarde95/HQ9","imageURL":"https://raw.githubusercontent.com/Avantgarde95/HQ9/master/Screenshot.png","languageMap":{"Python":3343}},{"name":"html-birthday-card","description":"Simple birthday card in a HTML file","repositoryURL":"https://github.com/Avantgarde95/html-birthday-card","imageURL":"https://raw.githubusercontent.com/Avantgarde95/html-birthday-card/master/Screenshot.png","languageMap":{"HTML":5999}},{"name":"Image2Term","description":"Draw an image on the terminal.","repositoryURL":"https://github.com/Avantgarde95/Image2Term","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Image2Term/master/Screenshot.png","languageMap":{"Python":1795}},{"name":"Blowing Bubble","description":"KAIST-CS482 (2016), Interactive Computer Graphics, Team 4","repositoryURL":"https://github.com/Avantgarde95/kaist_cs482_2016_team4","imageURL":"https://raw.githubusercontent.com/Avantgarde95/kaist_cs482_2016_team4/master/Screenshot.png","languageMap":{"Java":1694761,"GLSL":50135}},{"name":"LangtonAnt","description":"Simple simulation of (multi-color) Langton\'s ant (in python)","repositoryURL":"https://github.com/Avantgarde95/LangtonAnt","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LangtonAnt/master/ScreenshotSimple.png","languageMap":{"Python":47808,"Makefile":514}},{"name":"lets-react","description":"React tutorial written in React","repositoryURL":"https://github.com/Avantgarde95/lets-react","imageURL":"https://raw.githubusercontent.com/Avantgarde95/lets-react/master/Screenshot.png","languageMap":{"TypeScript":17843,"SCSS":5938,"JavaScript":1939,"HTML":460}},{"name":"LGTM3D","description":"3D LGTM images for collaboration","repositoryURL":"https://github.com/Avantgarde95/LGTM3D","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LGTM3D/master/Screenshot.png","languageMap":{"C#":7413}},{"name":"LiKo","description":"KAIST CS374 Team Project","repositoryURL":"https://github.com/Avantgarde95/LiKo","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LiKo/master/TestExample.png","languageMap":{"JavaScript":84587,"HTML":19968,"CSS":18008}},{"name":"Lucky","description":null,"repositoryURL":"https://github.com/Avantgarde95/Lucky","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Lucky/master/Screenshot.png","languageMap":{"Python":5458}},{"name":"LucyViewer","description":"Simple Embree ray tracing demo","repositoryURL":"https://github.com/Avantgarde95/LucyViewer","imageURL":"https://raw.githubusercontent.com/Avantgarde95/LucyViewer/master/Screenshot.png","languageMap":{"HTML":14820450,"C++":2607223,"JavaScript":285639,"Objective-C":53085,"CSS":30394,"CMake":24141,"C":16550,"Makefile":173}},{"name":"Mandelbrot","description":"Mandelbrot generator, made for fun","repositoryURL":"https://github.com/Avantgarde95/Mandelbrot","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Mandelbrot/master/Screenshot.png","languageMap":{"C":5578,"Python":3849,"Makefile":132}},{"name":"meow-generator","description":"Hide a cat in your website","repositoryURL":"https://github.com/Avantgarde95/meow-generator","imageURL":"https://raw.githubusercontent.com/Avantgarde95/meow-generator/master/Screenshot.png","languageMap":{"JavaScript":3308,"HTML":969}},{"name":"MeshChain-publish","description":null,"repositoryURL":"https://github.com/Avantgarde95/MeshChain-publish","imageURL":"https://raw.githubusercontent.com/Avantgarde95/MeshChain-publish/master/Screenshot.png","languageMap":{"Python":102793,"Kotlin":86412,"Batchfile":21326,"Shell":16324,"Solidity":8190,"JavaScript":3697,"GLSL":3542}},{"name":"mini-electron-app","description":"Simple mini electron application","repositoryURL":"https://github.com/Avantgarde95/mini-electron-app","imageURL":"https://raw.githubusercontent.com/Avantgarde95/mini-electron-app/master/Screenshot.png","languageMap":{"JavaScript":414,"HTML":343,"CSS":139}},{"name":"MorseSimulator","description":"Simple Morse code simulator in python","repositoryURL":"https://github.com/Avantgarde95/MorseSimulator","imageURL":"https://raw.githubusercontent.com/Avantgarde95/MorseSimulator/master/Screenshot.png","languageMap":{"Python":20585}},{"name":"PaintTalk","description":"Draw a picture by using natural language","repositoryURL":"https://github.com/Avantgarde95/PaintTalk","imageURL":"https://raw.githubusercontent.com/Avantgarde95/PaintTalk/master/extra/TreeDemo.png","languageMap":{"Kotlin":58971,"Java":12028}},{"name":"PathFinder","description":"Simple implementation of path-finder which uses genetic algorithm.","repositoryURL":"https://github.com/Avantgarde95/PathFinder","imageURL":"https://raw.githubusercontent.com/Avantgarde95/PathFinder/master/Screenshot.png","languageMap":{"Python":28586}},{"name":"pyMalbolge","description":"Malbolge interpreter in python","repositoryURL":"https://github.com/Avantgarde95/pyMalbolge","imageURL":"https://raw.githubusercontent.com/Avantgarde95/pyMalbolge/master/Screenshot.png","languageMap":{"C":4739,"Python":2672,"Makefile":196}},{"name":"PySIC","description":"A simple programming language I made for studying PL.","repositoryURL":"https://github.com/Avantgarde95/PySIC","imageURL":"https://raw.githubusercontent.com/Avantgarde95/PySIC/master/Screenshot.png","languageMap":{"Python":18618}},{"name":"react-avant","description":"Small React library for myself","repositoryURL":"https://github.com/Avantgarde95/react-avant","imageURL":"https://raw.githubusercontent.com/Avantgarde95/react-avant/master/Screenshot.png","languageMap":{"TypeScript":11148,"JavaScript":9534,"SCSS":3155,"HTML":724}},{"name":"react-popup-example","description":"Simple example of opening a popup window using React portal API.","repositoryURL":"https://github.com/Avantgarde95/react-popup-example","imageURL":"https://raw.githubusercontent.com/Avantgarde95/react-popup-example/master/Screenshot.png","languageMap":{"TypeScript":10871,"JavaScript":6406,"SCSS":2610,"HTML":732}},{"name":"SimpleLang","description":"a SIMPLE LANGuage - Simple toy language I made for studying","repositoryURL":"https://github.com/Avantgarde95/SimpleLang","imageURL":"https://raw.githubusercontent.com/Avantgarde95/SimpleLang/master/Screenshot.png","languageMap":{"Python":220159,"Shell":394}},{"name":"study","description":"Implementation of various kinds of algorithms & structures in C++, JS, ...","repositoryURL":"https://github.com/Avantgarde95/study","imageURL":"https://raw.githubusercontent.com/Avantgarde95/study/master/Screenshot.png","languageMap":{"C++":13577,"JavaScript":6789,"CMake":596}},{"name":"TeX2Hwp","description":"TeX-to-Hwp converter written in Java (Proof-of-concept GUI app)","repositoryURL":"https://github.com/Avantgarde95/TeX2Hwp","imageURL":"https://raw.githubusercontent.com/Avantgarde95/TeX2Hwp/master/Screenshot.png","languageMap":{"Java":12156}},{"name":"WhereToGoNow","description":"KAIST CS408 Computer science project","repositoryURL":"https://github.com/Avantgarde95/WhereToGoNow","imageURL":"https://raw.githubusercontent.com/Avantgarde95/WhereToGoNow/master/Screenshot.png","languageMap":{"Python":35783,"JavaScript":24803,"HTML":10361}},{"name":"Whitespace","description":"Write Whitespace code by using human-readable code.","repositoryURL":"https://github.com/Avantgarde95/Whitespace","imageURL":"https://raw.githubusercontent.com/Avantgarde95/Whitespace/master/Screenshot.png","languageMap":{"Python":5303,"Erlang":2192}}]'),h=function(){return(0,r.jsxs)("div",{className:u().grid,children:[l.map((function(e){return(0,r.jsx)("div",{className:u().realCell,children:(0,r.jsx)(o.E,{className:u().projectButton,href:e.repositoryURL,style:{backgroundImage:"url(".concat(e.imageURL,")")},children:e.name})},e.name)})),(0,p.w6)(0,8).map((function(e){return(0,r.jsx)("div",{className:u().fakeCell},e)}))]})},m=a(1484),d=a.n(m),f=function(){return(0,r.jsxs)("div",{className:d().page,children:[(0,r.jsx)(c,{}),(0,r.jsx)("div",{className:d().gridArea,children:(0,r.jsx)(h,{})})]})}},4779:function(e){e.exports={header:"Header_header__0rKgn",link:"Header_link__1_zfY"}},1484:function(e){e.exports={page:"Page_page__ByXHR",gridArea:"Page_gridArea__K0_L7",typewriterAnimation:"Page_typewriterAnimation__ufpGR"}},207:function(e){e.exports={grid:"ProjectGrid_grid__hNQ57",realCell:"ProjectGrid_realCell__xC_V_",fakeCell:"ProjectGrid_fakeCell__8Cq_s",projectButton:"ProjectGrid_projectButton__YkT1g",cellAnimation:"ProjectGrid_cellAnimation__kBf1R",typewriterAnimation:"ProjectGrid_typewriterAnimation__kzrka"}},1664:function(e,t,a){e.exports=a(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=6448,e(e.s=t);var t}));var t=e.O();_N_E=t}]);