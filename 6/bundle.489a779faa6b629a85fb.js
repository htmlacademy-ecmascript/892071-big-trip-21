(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(537),s=n.n(i),r=n(645),o=n.n(r)()(s());o.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);i&&o[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),t.push(c))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",o="day",a="week",l="month",d="quarter",c="year",u="date",p="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},_=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,o=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:a,d:o,D:u,h:r,m:s,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",y={};y[g]=m;var b=function(e){return e instanceof C},w=function e(t,n,i){var s;if(!t)return g;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),n&&(y[r]=n,s=r);var o=t.split("-");if(!s&&o.length>1)return e(o[0])}else{var a=t.name;y[a]=t,s=a}return!i&&s&&(g=s),s||!i&&g},k=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new C(n)},$=v;$.l=w,$.i=b,$.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var C=function(){function m(e){this.$L=w(e.locale,null,!0),this.parse(e)}var _=m.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return $},_.isValid=function(){return!(this.$d.toString()===p)},_.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return k(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<k(e)},_.$g=function(e,t,n){return $.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,d=!!$.u(t)||t,p=$.p(e),h=function(e,t){var i=$.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return d?i:i.endOf(o)},f=function(e,t){return $.w(n.toDate()[e].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,_=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(p){case c:return d?h(1,0):h(31,11);case l:return d?h(1,_):h(0,_+1);case a:var y=this.$locale().weekStart||0,b=(m<y?m+7:m)-y;return h(d?v-b:v+(6-b),_);case o:case u:return f(g+"Hours",0);case r:return f(g+"Minutes",1);case s:return f(g+"Seconds",2);case i:return f(g+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var a,d=$.p(e),p="set"+(this.$u?"UTC":""),h=(a={},a[o]=p+"Date",a[u]=p+"Date",a[l]=p+"Month",a[c]=p+"FullYear",a[r]=p+"Hours",a[s]=p+"Minutes",a[i]=p+"Seconds",a[n]=p+"Milliseconds",a)[d],f=d===o?this.$D+(t-this.$W):t;if(d===l||d===c){var m=this.clone().set(u,1);m.$d[h](f),m.init(),this.$d=m.set(u,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[$.p(e)]()},_.add=function(n,d){var u,p=this;n=Number(n);var h=$.p(d),f=function(e){var t=k(p);return $.w(t.date(t.date()+Math.round(e*n)),p)};if(h===l)return this.set(l,this.$M+n);if(h===c)return this.set(c,this.$y+n);if(h===o)return f(1);if(h===a)return f(7);var m=(u={},u[s]=e,u[r]=t,u[i]=1e3,u)[h]||1,_=this.$d.getTime()+n*m;return $.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=$.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,d=n.months,c=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},u=function(e){return $.s(r%12||12,e,"0")},h=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:$.s(a+1,2,"0"),MMM:c(n.monthsShort,a,d,3),MMMM:c(d,a),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:$.s(r,2,"0"),h:u(1),hh:u(2),a:h(r,o,!0),A:h(r,o,!1),m:String(o),mm:$.s(o,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:s};return i.replace(f,(function(e,t){return t||m[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(n,u,p){var h,f=$.p(u),m=k(n),_=(m.utcOffset()-this.utcOffset())*e,v=this-m,g=$.m(this,m);return g=(h={},h[c]=g/12,h[l]=g,h[d]=g/3,h[a]=(v-_)/6048e5,h[o]=(v-_)/864e5,h[r]=v/t,h[s]=v/e,h[i]=v/1e3,h)[f]||v,p?g:$.a(g)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return y[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=w(e,t,!0);return i&&(n.$L=i),n},_.clone=function(){return $.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},m}(),M=C.prototype;return k.prototype=M,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",o],["$M",l],["$y",c],["$D",u]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),k.extend=function(e,t){return e.$i||(e(t,C,k),e.$i=!0),k},k.locale=w,k.isDayjs=b,k.unix=function(e){return k(1e3*e)},k.en=y[g],k.Ls=y,k.p={},k}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},o=[],a=0;a<e.length;a++){var l=e[a],d=i.base?l[0]+i.base:l[0],c=r[d]||0,u="".concat(d," ").concat(c);r[d]=c+1;var p=n(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=s(h,i);i.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<r.length;o++){var a=n(r[o]);t[a].references--}for(var l=i(e,s),d=0;d<r.length;d++){var c=n(r[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(379),t=n.n(e),i=n(795),s=n.n(i),r=n(569),o=n.n(r),a=n(565),l=n.n(a),d=n(216),c=n.n(d),u=n(589),p=n.n(u),h=n(10),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=c(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m="shake";class _{#e=null;constructor(){if(new.target===_)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(m),setTimeout((()=>{this.element.classList.remove(m),e?.()}),600)}}function v(e,t,n="beforeend"){if(!(e instanceof _))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function g(e,t){if(!(e instanceof _&&t instanceof _))throw new Error("Can replace only components");const n=e.element,i=t.element,s=i.parentElement;if(null===s)throw new Error("Parent element doesn't exist");s.replaceChild(n,i)}class y extends _{get template(){return'\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>\n  '}}class b extends _{get template(){return'\n    <ul class="trip-events__list"></ul>\n  '}}var w=n(484),k=n.n(w);const $="HH:mm",C=1440,M=60;function A(e){return k()(e).format($)}function S(e){return k()(e).format("YY/MM/DD HH:mm")}class E extends _{#t=null;#n=null;#i=null;#s=null;constructor({point:e,offers:t,destination:n,onEditClick:i}){super(),this.#t=e,this.#n=t,this.#i=n,this.#s=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#r)}get template(){return function(e,t,n){const{type:i,dateFrom:s,dateTo:r,basePrice:o,isFavorite:a}=e,l=(d=s,k()(d).format("D MMM"));var d;const c=A(s),u=A(r),p=function(e,t){const n=k()(t).diff(e,"minute");let i=0,s=0,r=0;return n<=M?`${n}M`:n>M&&n<C?(s=Math.floor(n/M),r=n%M,`${s}H ${r}M`):n>C?(i=Math.floor(n/C),r=n%C,r>M&&(s=Math.floor(r/M),r%=M),`${i}d ${s}h ${r}m`):void 0}(s,r),h=a?"event__favorite-btn--active":"";return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${s}">${l}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${i}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${i} ${n?n.name:""}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${s}">${c}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${r}">${u}</time>\n          </p>\n          <p class="event__duration">${p}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${o}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n        ${function(e){return 0===e.length?"":e.map((e=>`\n    <li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </li>\n  `)).join("")}(t)}\n        </ul>\n        <button class="event__favorite-btn ${h}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `}(this.#t,this.#n,this.#i)}#r=e=>{e.preventDefault(),this.#s()}}const x=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],B={id:"1",basePrice:112,dateFrom:new Date("2023-09-02T12:00:00"),dateTo:new Date("2023-09-12T12:00:00"),destination:"",isFavorite:!0,offers:[6],type:"Restaurant"};class T extends _{#t=null;#n=null;#i=null;#o=null;#a=null;#l=null;constructor({point:e,offers:t,destination:n,isEditMode:i=!0,onResetClick:s,onSubmitClick:r}){super(),this.#t=i?e:B,this.#n=t,this.#i=n,this.#o=i,this.#a=s,this.#l=r,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#d),this.element.querySelector("form").addEventListener("submit",this.#c)}get template(){return function(e,t,n,i){const{type:s,dateFrom:r,dateTo:o,basePrice:a}=e,l=S(r),d=S(o);return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${u=x,p=s,u.map(((e,t)=>`\n    <div class="event__type-item">\n      <input id="event-type-${e.toLowerCase()}-${t}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}" ${p===e?"checked":""}>\n      <label class="event__type-label event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-${t}">${e}</label>\n    </div>\n  `)).join("")}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${s}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${n?n.name:""}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${l}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${d}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n          ${i?'<button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>':""}\n\n        </header>\n\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${function(e,t){return 0===e.length?"":e.map(((e,n)=>`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}-${n}" type="checkbox" name="event-offer-${t}">\n      <label class="event__offer-label" for="event-offer-${t}-${n}">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </label>\n    </div>\n  `)).join("")}(t,s)}\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${n?n.description:""}</p>\n\n            <div class="event__photos-container">\n              <div class="event__photos-tape">\n                ${n?(c=n.pictures,c.map((e=>`\n    <img class="event__photo" src="${e.src}" alt="${e.description}"></img>\n  `)).join("")):""}\n              </div>\n            </div>\n\n          </section>\n        </section>\n      </form>\n    </li>\n  `;var c,u,p}(this.#t,this.#n,this.#i,this.#o)}#d=e=>{e.preventDefault(),this.#a()};#c=e=>{e.preventDefault(),this.#l()}}class D extends _{get template(){return'\n    <p class="trip-events__msg">Click New Event to create your first point</p>\n  '}}const L=[{id:1,basePrice:100,dateFrom:new Date("2023-12-15T13:20:00"),dateTo:new Date("2023-12-16T14:20:00"),destination:"",isFavorite:!0,offers:[0],type:"Taxi"},{id:2,basePrice:36,dateFrom:new Date("2023-09-12T13:20:00"),dateTo:new Date("2023-09-12T14:20:00"),destination:"",isFavorite:!1,offers:[1],type:"Bus"},{id:3,basePrice:510,dateFrom:new Date("2023-09-10T11:05:00"),dateTo:new Date("2023-09-12T03:20:00"),destination:"",isFavorite:!0,offers:[0],type:"Train"},{id:4,basePrice:912,dateFrom:new Date("2023-09-10T11:05:00"),dateTo:new Date("2023-09-12T03:20:00"),destination:"",isFavorite:!1,offers:[1],type:"Ship"},{id:5,basePrice:328,dateFrom:new Date("2023-09-12T22:15:00"),dateTo:new Date("2023-09-12T23:20:00"),destination:"",isFavorite:!0,offers:[0],type:"Drive"},{id:6,basePrice:637,dateFrom:new Date("2023-09-10T06:42:00"),dateTo:new Date("2023-09-10T15:21:00"),destination:"",isFavorite:!1,offers:[0],type:"Flight"},{id:7,basePrice:112,dateFrom:new Date("2023-09-12T19:00:00"),dateTo:new Date("2023-09-12T22:30:00"),destination:"",isFavorite:!0,offers:[0],type:"Restaurant"},{id:8,basePrice:742,dateFrom:new Date("2023-09-10T12:00:00"),dateTo:new Date("2023-09-12T12:00:00"),destination:"",isFavorite:!1,offers:[0],type:"Check-in"}];function j(){return(e=L)[Math.floor(Math.random()*e.length)];var e}const F=[{type:"Taxi",offers:[{id:0,title:"Switch to comfort class",price:10},{id:1,title:"Add luggage",price:15}]},{type:"Bus",offers:[{id:0,title:"Choose seats",price:10},{id:1,title:"Add luggage",price:15}]},{type:"Drive",offers:[{id:0,title:"Add luggage",price:15}]},{type:"Train",offers:[{id:0,title:"Choose seats",price:20},{id:1,title:"Add luggage",price:15}]},{type:"Flight",offers:[{id:0,title:"Add meal",price:10},{id:1,title:"Add breakfast",price:15}]},{type:"Check-in",offers:[{id:0,title:"Overnight stay at the hotel",price:1}]},{type:"Restaurant",offers:[{id:0,title:"Add breakfast",price:15}]},{type:"Ship",offers:[{id:0,title:"Add luggage",price:15},{id:1,title:"Add breakfast",price:15}]}],P=[{id:1,name:"Amsterdam",description:"Amsterdam is the capital and most populous city of the Netherlands, with The Hague being the seat of government. A few of Amsterdam's notable residents throughout its history include painters Rembrandt and Vincent van Gogh, seventeenth-century philosophers Baruch Spinoza, John Locke, René Descartes.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Westerkerk_Amsterdam.jpg/220px-Westerkerk_Amsterdam.jpg",description:"Amsterdam"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Reguliersgracht%2C_Amsterdam.jpg/132px-Reguliersgracht%2C_Amsterdam.jpg",description:"Amsterdam"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/132px-KeizersgrachtReguliersgrachtAmsterdam.jpg",description:"Amsterdam"}]},{id:2,name:"Paris",description:"Paris is the capital and most populous city of France, located in northern central France, in a north-bending arc of the river Seine whose crest includes two islands, the Île Saint-Louis and the larger Île de la Cité, which form the oldest part of the city",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/278px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",description:"Paris"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Louvre_Courtyard%2C_Looking_West.jpg/278px-Louvre_Courtyard%2C_Looking_West.jpg",description:"Paris"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/04-2017._Notre-Dame_de_Paris-71.jpg/80px-04-2017._Notre-Dame_de_Paris-71.jpg",description:"Paris"}]},{id:3,name:"London",description:"London stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for two millennia",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/London_%2844761485915%29.jpg/290px-London_%2844761485915%29.jpg",description:"London"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/278px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg",description:"London"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/278px-London_Skyline_%28125508655%29.jpeg",description:"London"}]},{id:4,name:"Bergeggi",description:"Bergeggi is a comune (municipality) in the Province of Savona in the Italian region Liguria, located about 90 kilometres (56 mi) southwest of Genoa and about 10 kilometres (6 mi) southwest of Savona. In 2007 and 2008 the municipality was awarded the Blue Flag, which distinguishes the high quality of the beaches and the sea.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bergeggi_beach_2.jpg/220px-Bergeggi_beach_2.jpg",description:"Bergeggi"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bergeggi-IMG_1639.JPG/220px-Bergeggi-IMG_1639.JPG",description:"Bergeggi"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bergeggi-IMG_1635.JPG/220px-Bergeggi-IMG_1635.JPG",description:"Bergeggi"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bergeggi-IMG_1640.JPG/260px-Bergeggi-IMG_1640.JPG",description:"Bergeggi"}]},{id:5,name:"Barcelona",description:"Barcelona is the capital and largest city of the autonomous community of Catalonia. Many of the buildings date from medieval times, some from as far back as the Roman settlement of Barcelona.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Evening_light_over_Barcelona.jpg/290px-Evening_light_over_Barcelona.jpg",description:"Barcelona"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Torre_Gl%C3%B2ries%2C_Barcelona_%2851351746585%29.jpg/220px-Torre_Gl%C3%B2ries%2C_Barcelona_%2851351746585%29.jpg",description:"Barcelona"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Batllo_House.jpg/200px-Batllo_House.jpg",description:"Barcelona"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Casa_Mil%C3%A0%2C_general_view.jpg/200px-Casa_Mil%C3%A0%2C_general_view.jpg",description:"Barcelona"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/220px-Sagrada_Familia_01.jpg",description:"Barcelona"}]},{id:6,name:"Bonn",description:"Bonn is a federal city in the German state of North Rhine-Westphalia, located on the banks of the Rhine.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2008-12-25_Bonn_Sterntor.jpg/220px-2008-12-25_Bonn_Sterntor.jpg",description:"Bonn"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Altes_Rathaus_Bonn.jpg/220px-Altes_Rathaus_Bonn.jpg",description:"Bonn"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Villa_Hammerschmidt_Bonn_Seite_Adenauerallee_20080831.jpg/220px-Villa_Hammerschmidt_Bonn_Seite_Adenauerallee_20080831.jpg",description:"Bonn"}]},{id:7,name:"Como",description:"Its proximity to Lake Como and to the Alps has made Como a tourist destination, and the city contains numerous works of art, churches, gardens, museums, theatres, parks, and palaces: the Duomo, seat of the Diocese of Como; the Basilica of Sant'Abbondio; the Villa Olmo; the public gardens with the Tempio Voltiano; the Teatro Sociale; the Broletto or the city's medieval town hall; and the 20th-century Casa del Fascio.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/250px-Como_and_its_lake.jpg",description:"Como"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/La_citt%C3%A0_di_Como_e_il_suo_lago.jpg/220px-La_citt%C3%A0_di_Como_e_il_suo_lago.jpg",description:"Como"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Comofontanawiki.JPG/250px-Comofontanawiki.JPG",description:"Como"}]},{id:8,name:"Edinburgh ",description:"\"Edin\", the root of the city's name, derives from Eidyn, the name for this region in Cumbric, the Brittonic Celtic language formerly spoken there. The name's meaning is unknown.[16] The district of Eidyn is centred on the stronghold of Din Eidyn, the dun or hillfort of Eidyn.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Edinburgh%2C_Scott_Monument_%2837729400005%29.jpg/81px-Edinburgh%2C_Scott_Monument_%2837729400005%29.jpg",description:"Edinburgh "},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/The_Shore%2C_Leith.JPG/220px-The_Shore%2C_Leith.JPG",description:"Edinburgh "},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Edinburgh_New_College_%288594473141%29.jpg/220px-Edinburgh_New_College_%288594473141%29.jpg",description:"Edinburgh "}]}],O={Everything:e=>[...e],Future:e=>e.filter((e=>{return t=e.dateFrom,k()(t).isBefore(k()(),"D");var t})),Present:e=>e.filter((e=>{return t=e.dateFrom,k()(t).isSame(k()(),"D");var t})),Past:e=>e.filter((e=>{return t=e.dateFrom,k()(t).isAfter(k()(),"D");var t}))},H=document.querySelector(".page-header"),I=document.querySelector(".page-main"),R=H.querySelector(".trip-main"),G=R.querySelector(".trip-controls__filters"),J=I.querySelector(".trip-events"),N=new class{#u=Array.from({length:4},j);get points(){return this.#u}},W=new class{#n=function(){return F}();get offers(){return this.#n}getOfferByType(e){return this.#n.filter((t=>t.type===e)).reduce(((e,t)=>(t.offers.forEach((t=>e.push(t))),e)),[])}},q=new class{#p=function(){return P}();get destinations(){return this.#p}getById(e){return this.#p.find((t=>t.id===e))}},Y=new class{#h=new y;#f=new b;#m=new D;#_=null;#v=null;#g=null;#y=null;#b=[];#w=[];#k=[];constructor({eventsContainer:e,pointModel:t,offerModel:n,destinationModel:i}){this.#_=e,this.#v=t,this.#g=n,this.#y=i}init(){this.#b=[...this.#v.points],this.#w=[...this.#g.offers],this.#k=[...this.#y.destinations],v(this.#h,this.#_),v(this.#f,this.#_),0===this.#b.length&&v(this.#m,this.#_),this.#b.forEach((e=>{this.#$(e)}))}#$(e){const t=e=>{"Escape"===e.key&&(e.preventDefault(),s(),document.removeEventListener("keydown",t))},n=new E({point:e,offers:this.#g.getOfferByType(e.type),destination:this.#y.getById(e.id),onEditClick:function(){g(i,n),document.addEventListener("keydown",t)}}),i=new T({point:e,offers:this.#g.getOfferByType(e.type),destination:this.#y.getById(e.id),isEditMode:!0,onResetClick:function(){s(),document.removeEventListener("keydown",t)},onSubmitClick:function(){s(),document.removeEventListener("keydown",t)}});function s(){g(n,i)}v(n,this.#f.element)}}({eventsContainer:J,pointModel:N,offerModel:W,destinationModel:q}),z=Object.keys(O).map((e=>({type:e})));v(new class extends _{get template(){return'\n  <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>\n  '}},R,"afterbegin"),v(new class extends _{#C=[];constructor({filters:e}){super(),this.#C=e}get template(){return function(e){const t=e.map(((e,t)=>function(e,t){const{type:n}=e;return`\n    <div class="trip-filters__filter">\n      <input id="filter-${n}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${n}" ${t?"checked":""}>\n      <label class="trip-filters__filter-label" for="filter-${n}">${n}</label>\n    </div>\n  `}(e,0===t))).join("");return`\n    <form class="trip-filters" action="#" method="get">\n      ${t}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  `}(this.#C)}}({filters:z}),G),Y.init()})()})();
//# sourceMappingURL=bundle.489a779faa6b629a85fb.js.map