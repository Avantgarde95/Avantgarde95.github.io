"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{1777:(e,t,r)=>{r.d(t,{R:()=>$});let l=e=>void 0===e||"auto"===e||"instant"===e||"smooth"===e;function n(e,t){this.scrollLeft=e,this.scrollTop=t}let o=(e,t,r="cannot convert to dictionary.")=>`Failed to execute '${e}' on '${t}': ${r}`,i=(e,t,r)=>o(e,t,`The provided value '${r}' is not a valid enum value of type ScrollBehavior.`),c=(e,t,r)=>{var l;let n=`__SEAMLESS.BACKUP$${t}`;return e[n]||!e[t]||(null===(l=e[t])||void 0===l?void 0:l.__isPolyfill)||(e[n]=e[t]),e[n]||r},a=e=>{let t=typeof e;return null!==e&&("object"===t||"function"===t)},u=e=>e.ownerDocument.scrollingElement||e.ownerDocument.documentElement,s=e=>.5*(1-Math.cos(Math.PI*e));function d(){var e;let t;return d=t=(null===(e=window.performance)||void 0===e?void 0:e.now)?()=>window.performance.now():()=>window.Date.now(),t()}let w=e=>{let t=(d()-e.timeStamp)/(e.duration||500);if(t>1){e.method(e.targetX,e.targetY),e.callback();return}let r=(e.timingFunc||s)(t),l=e.startX+(e.targetX-e.startX)*r,n=e.startY+(e.targetY-e.startY)*r;e.method(l,n),e.rafId=window.requestAnimationFrame(()=>{w(e)})},f=e=>isFinite(e)?Number(e):0,h=e=>{var t;return null!==(t=e.isConnected)&&void 0!==t?t:!e.ownerDocument||!(1&e.ownerDocument.compareDocumentPosition(e))},m=(e,t,r)=>{var l,o;if(!h(e))return;let i=e.scrollLeft,a=e.scrollTop,u=f(null!==(l=t.left)&&void 0!==l?l:i),s=f(null!==(o=t.top)&&void 0!==o?o:a);if(u===i&&s===a)return;let m=c(HTMLElement.prototype,"scroll",n),v=c(Object.getPrototypeOf(e),"scroll",m).bind(e);if("smooth"!==t.behavior){v(u,s);return}let p=()=>{window.removeEventListener("wheel",b),window.removeEventListener("touchmove",b)},g=Object.assign(Object.assign({},r),{timeStamp:d(),startX:i,startY:a,targetX:u,targetY:s,rafId:0,method:v,callback:()=>{p();let t=9===e.nodeType;e.dispatchEvent(function(e){if("function"==typeof Event)return new Event("scrollend",{bubbles:e,cancelable:!1});let t=document.createEvent("Event");return t.initEvent("scrollend",e,!1),t}(t))}}),b=()=>{window.cancelAnimationFrame(g.rafId),p()};window.addEventListener("wheel",b,{passive:!0,once:!0}),window.addEventListener("touchmove",b,{passive:!0,once:!0}),w(g)},v=e=>e.window===e,p=(e=>(t,r,n)=>{let[c,s]=v(t)?[u(t.document.documentElement),"Window"]:[t,"Element"],d=null!=r?r:{};if(!a(d))throw TypeError(o(e,s));if(!l(d.behavior))throw TypeError(i(e,s,d.behavior));"scrollBy"===e&&(d.left=f(d.left)+c.scrollLeft,d.top=f(d.top)+c.scrollTop),m(c,d,n)})("scroll"),g=e=>{switch(e){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":break;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},b=(e,t,r,l)=>{let n=0;switch(t||(n^=2),e){case 0:n=n>>1|(1&n)<<1,[r,l]=[l,r];break;case 1:case 3:n^=1;break;case 4:n^=2}return[n,r,l]},E=e=>(1&b(g(e.writingMode),"rtl"!==e.direction,void 0,void 0)[0])==1,y=(e,t,r)=>{let[l,n,o]=b(t,r,e.block||"start",e.inline||"nearest");return[n,o].map((e,t)=>{switch(e){case"center":return 1;case"nearest":return 0;default:return"start"===e==!(l>>t&1)?2:3}})},L=(e,t,r,l,n,o,i)=>0!==e?e:n<t&&o>r||n>t&&o<r?null:n<=t&&i<=l||o>=r&&i>=l?2:o>r&&i<l||n<t&&i>l?3:null,T=e=>"visible"!==e&&"clip"!==e,k=e=>{var t;try{return(null===(t=e.ownerDocument.defaultView)||void 0===t?void 0:t.frameElement)||null}catch(e){return null}},D=(e,t)=>(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth)&&(T(t.overflowY)||T(t.overflowX)||e===u(e)),M=e=>{let t=e.parentNode,r=e.parentElement;if(null===r&&null!==t){if(11===t.nodeType)return t.host;if(9===t.nodeType)return k(e)}return r},W=(e,t,r)=>e<t?t:e>r?r:e,C=e=>["scroll-margin","scroll-snap-margin"].filter(t=>t in e.documentElement.style)[0],V=(e,t,r)=>{let{top:l,right:n,bottom:o,left:i}=t,c=C(e.ownerDocument);if(!c)return[l,n,o,i];let a=e=>parseInt(r.getPropertyValue(`${c}-${e}`),10)||0;return[l-a("top"),n+a("right"),o+a("bottom"),i-a("left")]},H=(e,t,r)=>{switch(e){case 1:return(t+r)/2;case 3:return r;case 2:case 0:return t}},P=(e,t)=>{var r,l,n;let o=null===(r=e.ownerDocument.defaultView)||void 0===r?void 0:r.visualViewport,[i,c,a,s]=e===u(e)?[0,0,null!==(l=null==o?void 0:o.width)&&void 0!==l?l:e.clientWidth,null!==(n=null==o?void 0:o.height)&&void 0!==n?n:e.clientHeight]:[t.left,t.top,e.clientWidth,e.clientHeight],d=i+e.clientLeft,w=c+e.clientTop;return[w,d+a,w+s,d]},S=(e,t)=>{let r=[],l=e.ownerDocument,n=l.defaultView;if(!n)return r;let o=window.getComputedStyle(e),i="rtl"!==o.direction,[c,a]=y(t,g(o.writingMode||o.getPropertyValue("-webkit-writing-mode")||o.getPropertyValue("-ms-writing-mode")),i),[u,s,d,w]=V(e,e.getBoundingClientRect(),o);for(let o=M(e);null!==o;o=M(o)){if(l!==o.ownerDocument){if(!(n=(l=o.ownerDocument).defaultView))break;let{left:e,top:t}=o.getBoundingClientRect();u+=t,s+=e,d+=t,w+=e}let e=n.getComputedStyle(o);if("fixed"===e.position)break;if(!D(o,e))continue;let i=o.getBoundingClientRect(),[f,h,m,v]=P(o,i),p=L(c,v,h,o.clientWidth,w,s,s-w),g=L(a,f,m,o.clientHeight,u,d,d-u),b=null===p?0:H(p,w,s)-H(p,v,h),y=null===g?0:H(g,u,d)-H(g,f,m),T=E(e)?W(b,-o.scrollWidth+o.clientWidth-o.scrollLeft,-o.scrollLeft):W(b,-o.scrollLeft,o.scrollWidth-o.clientWidth-o.scrollLeft),k=W(y,-o.scrollTop,o.scrollHeight-o.clientHeight-o.scrollTop);r.push([o,{left:o.scrollLeft+T,top:o.scrollTop+k,behavior:t.behavior}]),u=Math.max(u-k,f),s=Math.min(s-T,h),d=Math.min(d-k,m),w=Math.max(w-T,v)}return r},$=(e,t,r)=>{let n=t||{};if(!l(n.behavior))throw TypeError(i("scrollIntoView","Element",n.behavior));S(e,n).forEach(([e,t])=>{p(e,t,r)})}}}]);