(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465,974],{4848:(e,t,l)=>{Promise.resolve().then(l.t.bind(l,6820,23)),Promise.resolve().then(l.bind(l,6872)),Promise.resolve().then(l.bind(l,1747))},6872:(e,t,l)=>{"use strict";l.d(t,{default:()=>h});var a=l(2588),n=l(48),r=l(6093);let s={home:{url:"/"},projects:{url:"/projects"},musics:{url:"/musics"},art:{url:"/art"}};var o=l(9167);let c=new RegExp("^/(".concat("ko|en",")")),i=[{name:"Home",url:s.home.url},{name:"Projects",url:s.projects.url},{name:"Musics",url:s.musics.url},{name:"Art",url:s.art.url}],u={ko:{name:"English",nextLocale:"en"},en:{name:"한국어",nextLocale:"ko"}},m="px-2 py-0.5 whitespace-pre",p=(0,a.jsxs)("div",{className:m,children:["+","-".repeat(18),"+"]}),x=e=>{let{label:t,onClick:l}=e;return(0,a.jsxs)("button",{className:"group relative block ".concat(m," font-mono text-base leading-tight tracking-[normal] text-primary"),onClick:l,children:["|".concat(" ".repeat(18),"|"),(0,a.jsx)("span",{className:"absolute left-7 top-1/2 -translate-y-1/2 group-hover:text-yellow",children:t})]})},h=()=>{let e=(0,r.useRouter)(),{locale:t,setLocale:l}=function(){var e;let t=(0,o.useParams)(),l=(0,o.usePathname)(),a=(0,r.useRouter)();return{locale:null!==(e=t.locale)&&void 0!==e?e:"ko",setLocale:function(e){a.push("/".concat(e).concat(l.replace(c,"")))}}}(),[s,m]=(0,n.useState)(!1),h=(0,n.useRef)(null);return!function(e,t,l){(0,n.useEffect)(()=>{let l=l=>{e.current&&!e.current.contains(l.target)&&t(l)};return window.addEventListener("click",l),()=>{window.removeEventListener("click",l)}},l)}(h,()=>{s&&m(!1)},[s,m]),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("button",{className:"font-mono text-base hover:text-yellow",onClick:e=>{e.stopPropagation(),m(!s)},children:"<Menu/>"}),(0,a.jsxs)("div",{className:"absolute right-0 z-10 origin-top-right scale-0 bg-background font-mono text-base text-primary [transition:transform_200ms,opacity_150ms] ".concat(s?"opacity-1 scale-100":"scale-0 opacity-0"),ref:h,children:[p,i.map(l=>(0,a.jsx)(x,{label:"<".concat(l.name,"/>"),onClick:()=>{e.push("/".concat(t).concat(l.url))}},l.name)),p,(0,a.jsx)(x,{label:"".concat(u[t].name,"()"),onClick:()=>{l(u[t].nextLocale)}}),p,(0,a.jsx)(x,{label:"v1()",onClick:()=>{window.open("https://mypage-v1.vercel.app/","_blank")}}),(0,a.jsx)(x,{label:"v2()",onClick:()=>{window.open("https://mypage-v2.vercel.app/","_blank")}}),p]})]})}},1315:(e,t,l)=>{"use strict";l.d(t,{A:()=>o});var a=l(2588),n=l(8317),r=l(48);let s="font-mono text-base hover:text-yellow",o=e=>{let{items:t}=e;return(0,a.jsx)("div",{className:"flex flex-col items-start justify-start gap-1 sm:flex-row sm:gap-4",children:t.map(e=>{let t=".".concat(e.label.toLowerCase());return(0,a.jsx)(r.Fragment,{children:"link"===e.type?(0,a.jsx)(n.default,{href:e.url,className:s,children:t}):(0,a.jsx)("button",{onClick:e.onClick,className:s,children:t})},e.label)})})}},1747:(e,t,l)=>{"use strict";l.d(t,{default:()=>o});var a=l(2588),n=l(48),r=l(1777),s=l(1315);let o=e=>{let{sections:t}=e,l=(0,n.useRef)({});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{items:t.map(e=>{let{title:t}=e;return{type:"button",label:t,onClick:()=>{(0,r.R)(l.current[t],{behavior:"smooth"})}}})}),t.map(e=>{let{title:t,content:r}=e;return(0,a.jsxs)(n.Fragment,{children:[(0,a.jsx)("h3",{ref:e=>{null!==e&&(l.current[t]=e)},className:"mx-0 my-4 p-0 font-mono text-xl text-yellow",children:t}),r]},t)})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[369,158,518,35,358],()=>t(4848)),_N_E=e.O()}]);