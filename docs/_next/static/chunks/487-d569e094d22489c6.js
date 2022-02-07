(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{7521:function(e,t,n){"use strict";function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.r(t),n.d(t,{Luminous:function(){return v},LuminousGallery:function(){return _}});var s="object"===("undefined"===typeof HTMLElement?"undefined":i(HTMLElement)),o="undefined"!==typeof ShadowRoot;function r(e){return!!(o&&e instanceof ShadowRoot)||(s?e instanceof HTMLElement:e&&"object"===i(e)&&null!==e&&1===e.nodeType&&"string"===typeof e.nodeName)}function l(e,t){t.forEach((function(t){e.classList.add(t)}))}function a(e,t){t.forEach((function(t){e.classList.remove(t)}))}function u(e){if(e&&e!==document||(e=document.head),!e.querySelector(".lum-base-styles")){var t=document.createElement("style");t.type="text/css",t.classList.add("lum-base-styles"),t.appendChild(document.createTextNode("@keyframes lum-noop{0%{zoom:1}}.lum-lightbox{position:fixed;display:none;top:0;right:0;bottom:0;left:0}.lum-lightbox.lum-open{display:block}.lum-lightbox.lum-closing,.lum-lightbox.lum-opening{animation:lum-noop 1ms}.lum-lightbox-inner{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden}.lum-lightbox-loader{display:none}.lum-lightbox-inner img{max-width:100%;max-height:100%}.lum-lightbox-image-wrapper{vertical-align:middle;display:table-cell;text-align:center}")),e.insertBefore(t,e.firstChild)}}function c(){throw new Error("Missing parameter")}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var g="undefined"!==typeof document&&"animation"in document.createElement("div").style,f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(this,e),this._sizeImgWrapperEl=this._sizeImgWrapperEl.bind(this),this.showNext=this.showNext.bind(this),this.showPrevious=this.showPrevious.bind(this),this._completeOpen=this._completeOpen.bind(this),this._completeClose=this._completeClose.bind(this),this._handleKeydown=this._handleKeydown.bind(this),this._handleClose=this._handleClose.bind(this);var n=t.namespace,i=void 0===n?null:n,s=t.parentEl,o=void 0===s?c():s,l=t.triggerEl,a=void 0===l?c():l,u=t.sourceAttribute,h=void 0===u?c():u,d=t.caption,g=void 0===d?null:d,f=t.includeImgixJSClass,y=void 0!==f&&f,m=t._gallery,v=void 0===m?null:m,b=t._arrowNavigation,E=void 0===b?null:b,_=t.closeButtonEnabled,w=void 0===_||_,C=t.closeTrigger,x=void 0===C?"click":C;if(this.settings={namespace:i,parentEl:o,triggerEl:a,sourceAttribute:h,caption:g,includeImgixJSClass:y,_gallery:v,_arrowNavigation:E,closeButtonEnabled:w,onClose:t.onClose,closeTrigger:x},!r(this.settings.parentEl))throw new TypeError("`new Lightbox` requires a DOM element passed as `parentEl`.");this.currentTrigger=this.settings.triggerEl,this.openClasses=this._buildClasses("open"),this.openingClasses=this._buildClasses("opening"),this.closingClasses=this._buildClasses("closing"),this.hasBeenLoaded=!1,this.elementBuilt=!1}var t,n,i;return t=e,(n=[{key:"_handleClose",value:function(e){e&&"function"===typeof e.preventDefault&&e.preventDefault();var t=this.settings.onClose;t&&"function"===typeof t&&t()}},{key:"_bindEventListeners",value:function(){this.el.addEventListener(this.settings.closeTrigger,this._handleClose),this.closeButtonEl&&this.closeButtonEl.addEventListener("click",this._handleClose)}},{key:"_buildClasses",value:function(e){var t=["lum-".concat(e)],n=this.settings.namespace;return n&&t.push("".concat(n,"-").concat(e)),t}},{key:"_buildElement",value:function(){this.el=document.createElement("div"),l(this.el,this._buildClasses("lightbox")),this.innerEl=document.createElement("div"),l(this.innerEl,this._buildClasses("lightbox-inner")),this.el.appendChild(this.innerEl);var e=document.createElement("div");l(e,this._buildClasses("lightbox-loader")),this.innerEl.appendChild(e),this.imgWrapperEl=document.createElement("div"),l(this.imgWrapperEl,this._buildClasses("lightbox-image-wrapper")),this.innerEl.appendChild(this.imgWrapperEl);var t=document.createElement("span");l(t,this._buildClasses("lightbox-position-helper")),this.imgWrapperEl.appendChild(t),this.imgEl=document.createElement("img"),l(this.imgEl,this._buildClasses("img")),t.appendChild(this.imgEl),this.captionEl=document.createElement("p"),l(this.captionEl,this._buildClasses("lightbox-caption")),t.appendChild(this.captionEl),this.settings.closeButtonEnabled&&(this.closeButtonEl=document.createElement("div"),l(this.closeButtonEl,this._buildClasses("close-button")),this.el.appendChild(this.closeButtonEl)),this.settings._gallery&&this._setUpGalleryElements(),this.settings.parentEl.appendChild(this.el),this._updateImgSrc(),this._updateCaption(),this.settings.includeImgixJSClass&&this.imgEl.classList.add("imgix-fluid")}},{key:"_setUpGalleryElements",value:function(){this._buildGalleryButton("previous",this.showPrevious),this._buildGalleryButton("next",this.showNext)}},{key:"_buildGalleryButton",value:function(e,t){var n=document.createElement("button");this["".concat(e,"Button")]=n,n.innerText=e,l(n,this._buildClasses("".concat(e,"-button"))),l(n,this._buildClasses("gallery-button")),this.innerEl.appendChild(n),n.addEventListener("click",(function(e){e.stopPropagation(),t()}),!1)}},{key:"_sizeImgWrapperEl",value:function(){var e=this.imgWrapperEl.style;e.width="".concat(this.innerEl.clientWidth,"px"),e.maxWidth="".concat(this.innerEl.clientWidth,"px"),e.height="".concat(this.innerEl.clientHeight-this.captionEl.clientHeight,"px"),e.maxHeight="".concat(this.innerEl.clientHeight-this.captionEl.clientHeight,"px")}},{key:"_updateCaption",value:function(){var e=h(this.settings.caption),t="";"string"===e?t=this.settings.caption:"function"===e&&(t=this.settings.caption(this.currentTrigger)),this.captionEl.innerHTML=t}},{key:"_updateImgSrc",value:function(){var e=this,t=this.currentTrigger.getAttribute(this.settings.sourceAttribute);if(!t)throw new Error("No image URL was found in the ".concat(this.settings.sourceAttribute," attribute of the trigger."));var n=this._buildClasses("loading");this.hasBeenLoaded||l(this.el,n),this.imgEl.onload=function(){a(e.el,n),e.hasBeenLoaded=!0},this.imgEl.setAttribute("src",t)}},{key:"_handleKeydown",value:function(e){37==e.keyCode?this.showPrevious():39==e.keyCode&&this.showNext()}},{key:"showNext",value:function(){this.settings._gallery&&(this.currentTrigger=this.settings._gallery.nextTrigger(this.currentTrigger),this._updateImgSrc(),this._updateCaption(),this._sizeImgWrapperEl(),this.settings._gallery.onChange({imgEl:this.imgEl}))}},{key:"showPrevious",value:function(){this.settings._gallery&&(this.currentTrigger=this.settings._gallery.previousTrigger(this.currentTrigger),this._updateImgSrc(),this._updateCaption(),this._sizeImgWrapperEl(),this.settings._gallery.onChange({imgEl:this.imgEl}))}},{key:"open",value:function(){this.elementBuilt||(this._buildElement(),this._bindEventListeners(),this.elementBuilt=!0),this.currentTrigger=this.settings.triggerEl,this._updateImgSrc(),this._updateCaption(),l(this.el,this.openClasses),this._sizeImgWrapperEl(),window.addEventListener("resize",this._sizeImgWrapperEl,!1),this.settings._arrowNavigation&&window.addEventListener("keydown",this._handleKeydown,!1),g&&(this.el.addEventListener("animationend",this._completeOpen,!1),l(this.el,this.openingClasses))}},{key:"close",value:function(){window.removeEventListener("resize",this._sizeImgWrapperEl,!1),this.settings._arrowNavigation&&window.removeEventListener("keydown",this._handleKeydown,!1),g?(this.el.addEventListener("animationend",this._completeClose,!1),l(this.el,this.closingClasses)):a(this.el,this.openClasses)}},{key:"_completeOpen",value:function(){this.el.removeEventListener("animationend",this._completeOpen,!1),a(this.el,this.openingClasses)}},{key:"_completeClose",value:function(){this.el.removeEventListener("animationend",this._completeClose,!1),a(this.el,this.openClasses),a(this.el,this.closingClasses)}},{key:"destroy",value:function(){this.el&&this.settings.parentEl.removeChild(this.el)}}])&&d(t.prototype,n),i&&d(t,i),e}();function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(y(this,e),this.VERSION="2.3.5",this.destroy=this.destroy.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this._handleKeyup=this._handleKeyup.bind(this),this.isOpen=!1,this.trigger=t,!r(this.trigger))throw new TypeError("`new Luminous` requires a DOM element as its first argument.");var i=document;"getRootNode"in this.trigger&&(i=this.trigger.getRootNode());var s=n.namespace||null,o=n.sourceAttribute||"href",l=n.caption||null,a=n.openTrigger||"click",c=n.closeTrigger||"click",h=!("closeWithEscape"in n)||!!n.closeWithEscape,p=n.closeOnScroll||!1,d=null==n.showCloseButton||n.showCloseButton,g=n.appendToNode||(i===document?document.body:i),f=n.appendToSelector||null,m=n.onOpen||null,v=n.onClose||null,b=n.includeImgixJSClass||!1,E=!("injectBaseStyles"in n)||!!n.injectBaseStyles,_=n._gallery||null,w=n._arrowNavigation||null;this.settings={namespace:s,sourceAttribute:o,caption:l,openTrigger:a,closeTrigger:c,closeWithEscape:h,closeOnScroll:p,closeButtonEnabled:d,appendToNode:g,appendToSelector:f,onOpen:m,onClose:v,includeImgixJSClass:b,injectBaseStyles:E,_gallery:_,_arrowNavigation:w};var C=document.body;g&&"getRootNode"in g&&(C=g.getRootNode()),this.settings.injectBaseStyles&&u(C),this._buildLightbox(),this._bindEventListeners()}var t,n,i;return t=e,(n=[{key:"open",value:function(e){e&&"function"===typeof e.preventDefault&&e.preventDefault(),this.lightbox.open(),this.settings.closeOnScroll&&window.addEventListener("scroll",this.close,!1);var t=this.settings.onOpen;t&&"function"===typeof t&&t(),this.isOpen=!0}},{key:"close",value:function(e){this.settings.closeOnScroll&&window.removeEventListener("scroll",this.close,!1),this.lightbox.close();var t=this.settings.onClose;t&&"function"===typeof t&&t(),this.isOpen=!1}},{key:"_buildLightbox",value:function(){var e=this.settings.appendToNode;this.settings.appendToSelector&&(e=document.querySelector(this.settings.appendToSelector)),this.lightbox=new f({namespace:this.settings.namespace,parentEl:e,triggerEl:this.trigger,sourceAttribute:this.settings.sourceAttribute,caption:this.settings.caption,includeImgixJSClass:this.settings.includeImgixJSClass,closeButtonEnabled:this.settings.closeButtonEnabled,_gallery:this.settings._gallery,_arrowNavigation:this.settings._arrowNavigation,closeTrigger:this.settings.closeTrigger,onClose:this.close})}},{key:"_bindEventListeners",value:function(){this.trigger.addEventListener(this.settings.openTrigger,this.open,!1),this.settings.closeWithEscape&&window.addEventListener("keyup",this._handleKeyup,!1)}},{key:"_unbindEvents",value:function(){this.trigger.removeEventListener(this.settings.openTrigger,this.open,!1),this.lightbox.el&&this.lightbox.el.removeEventListener(this.settings.closeTrigger,this.close,!1),this.settings.closeWithEscape&&window.removeEventListener("keyup",this._handleKeyup,!1)}},{key:"_handleKeyup",value:function(e){this.isOpen&&27===e.keyCode&&this.close()}},{key:"destroy",value:function(){this._unbindEvents(),this.lightbox.destroy()}}])&&m(t.prototype,n),i&&m(t,i),e}();function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}v.prototype.open=v.prototype.open,v.prototype.close=v.prototype.close,v.prototype.destroy=v.prototype.destroy;var _=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};b(this,e);var s={arrowNavigation:!0,onChange:null};this.settings=Object.assign({},s,n),this.triggers=t,this.luminousOpts=i,this.luminousOpts._gallery=this,this.luminousOpts._arrowNavigation=this.settings.arrowNavigation,this._constructLuminousInstances()}var t,n,i;return t=e,(n=[{key:"_constructLuminousInstances",value:function(){this.luminousInstances=[];for(var e=this.triggers.length,t=0;t<e;t++){var n=this.triggers[t],i=new v(n,this.luminousOpts);this.luminousInstances.push(i)}}},{key:"nextTrigger",value:function(e){var t=Array.prototype.indexOf.call(this.triggers,e)+1;return t>=this.triggers.length?this.triggers[0]:this.triggers[t]}},{key:"previousTrigger",value:function(e){var t=Array.prototype.indexOf.call(this.triggers,e)-1;return t<0?this.triggers[this.triggers.length-1]:this.triggers[t]}},{key:"onChange",value:function(e){var t=e.imgEl,n=this.settings.onChange;n&&"function"===typeof n&&n({imgEl:t})}},{key:"destroy",value:function(){this.luminousInstances.forEach((function(e){return e.destroy()}))}}])&&E(t.prototype,n),i&&E(t,i),e}();_.prototype.destroy=_.prototype.destroy},8418:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,s,o=[],r=!0,l=!1;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);r=!0);}catch(a){l=!0,s=a}finally{try{r||null==n.return||n.return()}finally{if(l)throw s}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,r=(o=n(7294))&&o.__esModule?o:{default:o},l=n(6273),a=n(387),u=n(7190);var c={};function h(e,t,n,i){if(e&&l.isLocalURL(t)){e.prefetch(t,n,i).catch((function(e){0}));var s=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[t+"%"+n+(s?"%"+s:"")]=!0}}var p=function(e){var t,n=!1!==e.prefetch,i=a.useRouter(),o=r.default.useMemo((function(){var t=s(l.resolveHref(i,e.href,!0),2),n=t[0],o=t[1];return{href:n,as:e.as?l.resolveHref(i,e.as):o||n}}),[i,e.href,e.as]),p=o.href,d=o.as,g=e.children,f=e.replace,y=e.shallow,m=e.scroll,v=e.locale;"string"===typeof g&&(g=r.default.createElement("a",null,g));var b=(t=r.default.Children.only(g))&&"object"===typeof t&&t.ref,E=s(u.useIntersection({rootMargin:"200px"}),2),_=E[0],w=E[1],C=r.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);r.default.useEffect((function(){var e=w&&n&&l.isLocalURL(p),t="undefined"!==typeof v?v:i&&i.locale,s=c[p+"%"+d+(t?"%"+t:"")];e&&!s&&h(i,p,d,{locale:t})}),[d,p,w,v,n,i]);var x={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,i,s,o,r,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==r&&i.indexOf("#")>=0&&(r=!1),t[s?"replace":"push"](n,i,{shallow:o,locale:a,scroll:r}))}(e,i,p,d,f,y,m,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(p)&&h(i,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof v?v:i&&i.locale,S=i&&i.isLocaleDomain&&l.getDomainLocale(d,k,i&&i.locales,i&&i.domainLocales);x.href=S||l.addBasePath(l.addLocale(d,k,i&&i.defaultLocale))}return r.default.cloneElement(t,x)};t.default=p},7190:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,s,o=[],r=!0,l=!1;try{for(n=n.call(e);!(r=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);r=!0);}catch(a){l=!0,s=a}finally{try{r||null==n.return||n.return()}finally{if(l)throw s}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!l,u=o.useRef(),c=s(o.useState(!1),2),h=c[0],p=c[1],d=s(o.useState(t?t.current:null),2),g=d[0],f=d[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),i||h||e&&e.tagName&&(u.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var i=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:s,elements:i}),n}(n),s=i.id,o=i.observer,r=i.elements;return r.set(e,t),o.observe(e),function(){r.delete(e),o.unobserve(e),0===r.size&&(o.disconnect(),a.delete(s))}}(e,(function(e){return e&&p(e)}),{root:g,rootMargin:n}))}),[i,g,n,h]);return o.useEffect((function(){if(!l&&!h){var e=r.requestIdleCallback((function(){return p(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[h]),o.useEffect((function(){t&&f(t.current)}),[t]),[y,h]};var o=n(7294),r=n(9311),l="undefined"!==typeof IntersectionObserver;var a=new Map},1664:function(e,t,n){e.exports=n(8418)},8657:function(e,t,n){var i,s;e.exports=(i=n(7521),s=n(7294),function(){"use strict";var e={240:function(e){e.exports=i},156:function(e){e.exports=s}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.r(o),n.d(o,{Image:function(){return r}});var e=n(156),t=n.n(e),i=n(240),s=function(){return(s=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},r=function(n){var o=n.src,r=n.alt,l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}(n,["src","alt"]),a=(0,e.useRef)(null),u=(0,e.useCallback)((function(e){null!==e&&(a.current=new i.Luminous(e,{sourceAttribute:"src"}))}),[]);return t().createElement("img",s({ref:u,src:o,alt:r},l))}}(),o}())}}]);