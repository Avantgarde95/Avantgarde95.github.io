(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454],{9259:(e,t,a)=>{Promise.resolve().then(a.bind(a,6872))},9167:(e,t,a)=>{"use strict";var n=a(2599);a.o(n,"useParams")&&a.d(t,{useParams:function(){return n.useParams}}),a.o(n,"usePathname")&&a.d(t,{usePathname:function(){return n.usePathname}}),a.o(n,"useRouter")&&a.d(t,{useRouter:function(){return n.useRouter}})},6872:(e,t,a)=>{"use strict";a.d(t,{default:()=>h});var n=a(2588),r=a(48),s=a(9167);let o={home:{url:"/"},projects:{url:"/projects"},musics:{url:"/musics"},art:{url:"/art"}},c=new RegExp("^/(".concat("ko|en",")")),l=[{name:"Home",url:o.home.url},{name:"Projects",url:o.projects.url},{name:"Musics",url:o.musics.url},{name:"Art",url:o.art.url}],u={ko:{name:"English",nextLocale:"en"},en:{name:"한국어",nextLocale:"ko"}},i="!px-2 !py-0.5",m=(0,n.jsxs)("div",{className:i,children:["+","-".repeat(18),"+"]}),p=e=>{let{label:t,onClick:a}=e;return(0,n.jsxs)("button",{className:"group relative block whitespace-pre ".concat(i," font-mono text-base leading-tight tracking-[normal] text-primary"),onClick:a,children:["|".concat(" ".repeat(18),"|"),(0,n.jsx)("span",{className:"absolute left-7 top-1/2 -translate-y-1/2 group-hover:text-yellow",children:t})]})},h=()=>{let e=(0,s.useRouter)(),{locale:t,setLocale:a}=function(){var e;let t=(0,s.useParams)(),a=(0,s.usePathname)(),n=(0,s.useRouter)();return{locale:null!==(e=t.locale)&&void 0!==e?e:"ko",setLocale:function(e){n.push("/".concat(e).concat(a.replace(c,"")))}}}(),[o,i]=(0,r.useState)(!1),h=(0,r.useRef)(null);return!function(e,t,a){(0,r.useEffect)(()=>{let a=a=>{e.current&&!e.current.contains(a.target)&&t(a)};return window.addEventListener("click",a),()=>{window.removeEventListener("click",a)}},a)}(h,()=>{o&&i(!1)},[o,i]),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("button",{className:"font-mono text-base hover:text-yellow",onClick:e=>{e.stopPropagation(),i(!o)},children:"<Menu/>"}),(0,n.jsxs)("div",{className:"absolute right-0 z-10 origin-top-right scale-0 bg-background font-mono text-base text-primary [transition:transform_200ms,opacity_150ms] ".concat(o?"opacity-1 scale-100":"scale-0 opacity-0"),ref:h,children:[m,l.map(a=>(0,n.jsx)(p,{label:"<".concat(a.name,"/>"),onClick:()=>{e.push("/".concat(t).concat(a.url))}},a.name)),m,(0,n.jsx)(p,{label:"".concat(u[t].name,"()"),onClick:()=>{a(u[t].nextLocale)}}),m]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[518,35,358],()=>t(9259)),_N_E=e.O()}]);