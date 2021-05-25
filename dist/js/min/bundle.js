!function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function n(e,t){var n=o(e,t)?a:r;n(e,t)}var o,r,a;"classList"in document.documentElement?(o=function(e,t){return e.classList.contains(t)},r=function(e,t){e.classList.add(t)},a=function(e,t){e.classList.remove(t)}):(o=function(e,n){return t(n).test(e.className)},r=function(e,t){o(e,t)||(e.className=e.className+" "+t)},a=function(e,n){e.className=e.className.replace(t(n)," ")});var s={hasClass:o,addClass:r,removeClass:a,toggleClass:n,has:o,add:r,remove:a,toggle:n};"function"==typeof define&&define.amd?define(s):e.classie=s}(window),function(){function e(){if(classie.has(n,"open")){classie.remove(n,"open"),classie.add(n,"close");var e=function(t){if(support.transitions){if("visibility"!==t.propertyName)return;this.removeEventListener(transEndEventName,e)}classie.remove(n,"close")};support.transitions?n.addEventListener(transEndEventName,e):e()}else classie.has(n,"close")||classie.add(n,"open")}var t=document.getElementById("trigger-overlay"),n=document.querySelector(".nav-overlay"),o=n.querySelector(".nav-close");transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],support={transitions:Modernizr.csstransitions},t.addEventListener("click",e),o.addEventListener("click",e)}(),function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}(this,function(e){"use strict";var t,n,o,r,a={},s=!!document.querySelector&&!!e.addEventListener,i={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},c=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var r=0,a=e.length;a>r;r++)t.call(n,e[r],r,e)},u=function(e,t){var n={};return c(e,function(t,o){n[o]=e[o]}),c(t,function(e,o){n[o]=t[o]}),n},l=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},f=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},d=function(e){for(var t,n=String(e),o=n.length,r=-1,a="",s=n.charCodeAt(0);++r<o;){if(t=n.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===s?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(r):"\\"+n.charAt(r)}return a},m=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},v=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=o-t-n,o>=0?o:0},p=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},h=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},g=function(t,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},E=function(e){return null===e?0:f(e)+e.offsetTop};a.animateScroll=function(t,n,a){var s=u(s||i,a||{}),c=h(t?t.getAttribute("data-options"):null);s=u(s,c),n="#"+d(n.substr(1));var l="#"===n?document.documentElement:document.querySelector(n),f=e.pageYOffset;o||(o=document.querySelector("[data-scroll-header]")),r||(r=E(o));var b,y,O,S=v(l,r,parseInt(s.offset,10)),L=S-f,I=p(),N=0;g(n,s.updateURL);var C=function(o,r,a){var i=e.pageYOffset;(o==r||i==r||e.innerHeight+i>=I)&&(clearInterval(a),l.focus(),s.callbackAfter(t,n))},T=function(){N+=16,y=N/parseInt(s.speed,10),y=y>1?1:y,O=f+L*m(s.easing,y),e.scrollTo(0,Math.floor(O)),C(O,S,b)},k=function(){s.callbackBefore(t,n),b=setInterval(T,16)};0===e.pageYOffset&&e.scrollTo(0,0),k()};var b=function(e){var n=l(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),a.animateScroll(n,n.hash,t))},y=function(){n||(n=setTimeout(function(){n=null,r=E(o)},66))};return a.destroy=function(){t&&(document.removeEventListener("click",b,!1),e.removeEventListener("resize",y,!1),t=null,n=null,o=null,r=null)},a.init=function(n){s&&(a.destroy(),t=u(i,n||{}),o=document.querySelector("[data-scroll-header]"),r=E(o),document.addEventListener("click",b,!1),o&&e.addEventListener("resize",y,!1))},a});