(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[454,783],{9259:(e,t,l)=>{Promise.resolve().then(l.bind(l,7254))},7254:(e,t,l)=>{"use strict";l.d(t,{default:()=>g});var a=l(2588),r=l(48),n=l(9167),o=l(2014),s=l(7971);let c={home:{url:"/"},projects:{url:"/projects"},musics:{url:"/musics"},art:{url:"/art"},blog:{url:"/blog"}},u=new RegExp("^/(".concat("ko|en",")")),i=[{name:"Home",url:c.home.url},{name:"Projects",url:c.projects.url},{name:"Musics",url:c.musics.url},{name:"Art",url:c.art.url},{name:"Blog",url:c.blog.url}],m={ko:{name:"English",nextLocale:"en"},en:{name:"한국어",nextLocale:"ko"}},p="!px-2 !py-0.5",h=(0,a.jsxs)("div",{className:p,children:["+","-".repeat(18),"+"]}),x=e=>{let{label:t,onClick:l}=e;return(0,a.jsxs)(s.A,{className:"group !relative !min-h-0 !whitespace-pre ".concat(p," !font-mono !text-base !leading-tight !tracking-[normal] !text-primary"),onClick:l,children:["|".concat(" ".repeat(18),"|"),(0,a.jsx)("span",{className:"absolute left-7 top-1/2 -translate-y-1/2 group-hover:text-yellow",children:t})]})},g=()=>{let[e,t]=(0,r.useState)(null),l=(0,n.useRouter)(),{locale:s,setLocale:c}=function(){var e;let t=(0,n.useParams)(),l=(0,n.usePathname)(),a=(0,n.useRouter)();return{locale:null!==(e=t.locale)&&void 0!==e?e:"ko",setLocale:function(e){a.push("/".concat(e).concat(l.replace(u,"")))}}}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("button",{className:"font-mono text-base hover:text-yellow",onClick:e=>{t(e.currentTarget)},children:"<Menu/>"}),(0,a.jsx)(o.A,{slotProps:{paper:{className:"!bg-background [&_.MuiList-root]:p-0"}},open:null!==e,onClose:()=>{t(null)},anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},elevation:0,children:(0,a.jsxs)("div",{className:"font-mono text-base text-primary",children:[h,i.map(e=>(0,a.jsx)(x,{label:"<".concat(e.name,"/>"),onClick:()=>{l.push("/".concat(s).concat(e.url))}},e.name)),h,(0,a.jsx)(x,{label:"".concat(m[s].name,"()"),onClick:()=>{c(m[s].nextLocale)}}),h]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[266,20,518,35,358],()=>t(9259)),_N_E=e.O()}]);