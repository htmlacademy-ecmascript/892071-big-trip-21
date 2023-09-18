(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",n="second",s="minute",r="hour",a="day",o="week",l="month",d="quarter",p="year",c="date",u="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}},_=function(e,t,i){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(i)+e},v={s:_,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),n=Math.floor(i/60),s=i%60;return(t<=0?"+":"-")+_(n,2,"0")+":"+_(s,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var n=12*(i.year()-t.year())+(i.month()-t.month()),s=t.clone().add(n,l),r=i-s<0,a=t.clone().add(n+(r?-1:1),l);return+(-(n+(i-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:p,w:o,d:a,D:c,h:r,m:s,s:n,ms:i,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},g="en",y={};y[g]=f;var b=function(e){return e instanceof M},w=function e(t,i,n){var s;if(!t)return g;if("string"==typeof t){var r=t.toLowerCase();y[r]&&(s=r),i&&(y[r]=i,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;y[o]=t,s=o}return!n&&s&&(g=s),s||!n&&g},$=function(e,t){if(b(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new M(i)},k=v;k.l=w,k.i=b,k.w=function(e,t){return $(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function f(e){this.$L=w(e.locale,null,!0),this.parse(e)}var _=f.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(h);if(n){var s=n[2]-1||0,r=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return k},_.isValid=function(){return!(this.$d.toString()===u)},_.isSame=function(e,t){var i=$(e);return this.startOf(t)<=i&&i<=this.endOf(t)},_.isAfter=function(e,t){return $(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<$(e)},_.$g=function(e,t,i){return k.u(e)?this[t]:this.set(i,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var i=this,d=!!k.u(t)||t,u=k.p(e),h=function(e,t){var n=k.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return d?n:n.endOf(a)},m=function(e,t){return k.w(i.toDate()[e].apply(i.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},f=this.$W,_=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(u){case p:return d?h(1,0):h(31,11);case l:return d?h(1,_):h(0,_+1);case o:var y=this.$locale().weekStart||0,b=(f<y?f+7:f)-y;return h(d?v-b:v+(6-b),_);case a:case c:return m(g+"Hours",0);case r:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case n:return m(g+"Milliseconds",3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var o,d=k.p(e),u="set"+(this.$u?"UTC":""),h=(o={},o[a]=u+"Date",o[c]=u+"Date",o[l]=u+"Month",o[p]=u+"FullYear",o[r]=u+"Hours",o[s]=u+"Minutes",o[n]=u+"Seconds",o[i]=u+"Milliseconds",o)[d],m=d===a?this.$D+(t-this.$W):t;if(d===l||d===p){var f=this.clone().set(c,1);f.$d[h](m),f.init(),this.$d=f.set(c,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[k.p(e)]()},_.add=function(i,d){var c,u=this;i=Number(i);var h=k.p(d),m=function(e){var t=$(u);return k.w(t.date(t.date()+Math.round(e*i)),u)};if(h===l)return this.set(l,this.$M+i);if(h===p)return this.set(p,this.$y+i);if(h===a)return m(1);if(h===o)return m(7);var f=(c={},c[s]=e,c[r]=t,c[n]=1e3,c)[h]||1,_=this.$d.getTime()+i*f;return k.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||u;var n=e||"YYYY-MM-DDTHH:mm:ssZ",s=k.z(this),r=this.$H,a=this.$m,o=this.$M,l=i.weekdays,d=i.months,p=function(e,i,s,r){return e&&(e[i]||e(t,n))||s[i].slice(0,r)},c=function(e){return k.s(r%12||12,e,"0")},h=i.meridiem||function(e,t,i){var n=e<12?"AM":"PM";return i?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:k.s(o+1,2,"0"),MMM:p(i.monthsShort,o,d,3),MMMM:p(d,o),D:this.$D,DD:k.s(this.$D,2,"0"),d:String(this.$W),dd:p(i.weekdaysMin,this.$W,l,2),ddd:p(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:k.s(r,2,"0"),h:c(1),hh:c(2),a:h(r,a,!0),A:h(r,a,!1),m:String(a),mm:k.s(a,2,"0"),s:String(this.$s),ss:k.s(this.$s,2,"0"),SSS:k.s(this.$ms,3,"0"),Z:s};return n.replace(m,(function(e,t){return t||f[e]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(i,c,u){var h,m=k.p(c),f=$(i),_=(f.utcOffset()-this.utcOffset())*e,v=this-f,g=k.m(this,f);return g=(h={},h[p]=g/12,h[l]=g,h[d]=g/3,h[o]=(v-_)/6048e5,h[a]=(v-_)/864e5,h[r]=v/t,h[s]=v/e,h[n]=v/1e3,h)[m]||v,u?g:k.a(g)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return y[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),n=w(e,t,!0);return n&&(i.$L=n),i},_.clone=function(){return k.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},f}(),T=M.prototype;return $.prototype=T,[["$ms",i],["$s",n],["$m",s],["$H",r],["$W",a],["$M",l],["$y",p],["$D",c]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),$.extend=function(e,t){return e.$i||(e(t,M,$),e.$i=!0),$},$.locale=w,$.isDayjs=b,$.unix=function(e){return $(1e3*e)},$.en=y[g],$.Ls=y,$.p={},$}()}},t={};function i(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,i="beforeend"){t.insertAdjacentElement(i,e.getElement())}class n{getTemplate(){return'\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n      <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n        <label class="trip-sort__btn" for="sort-day">Day</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--event">\n        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n        <label class="trip-sort__btn" for="sort-event">Event</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--time">\n        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n        <label class="trip-sort__btn" for="sort-time">Time</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--price">\n        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n        <label class="trip-sort__btn" for="sort-price">Price</label>\n      </div>\n\n      <div class="trip-sort__item  trip-sort__item--offer">\n        <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n        <label class="trip-sort__btn" for="sort-offer">Offers</label>\n      </div>\n    </form>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class s{getTemplate(){return'\n    <ul class="trip-events__list"></ul>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var r=i(484),a=i.n(r);const o="HH:mm",l=1440,d=60;function p(e){return a()(e).format(o)}function c(e){return a()(e).format("YY/MM/DD HH:mm")}class u{constructor({point:e,offer:t,destination:i}){this.point=e,this.offer=t,this.destination=i}getTemplate(){return function(e,t,i){const{type:n,dateFrom:s,dateTo:r,basePrice:o,isFavorite:c}=e,u=(h=s,a()(h).format("D MMM"));var h;const m=p(s),f=p(r),_=function(e,t){const i=a()(t).diff(e,"minute");let n=0,s=0,r=0;return i<=d?`${i}M`:i>d&&i<l?(s=Math.floor(i/d),r=i%d,`${s}H ${r}M`):i>l?(n=Math.floor(i/l),r=i%l,r>d&&(s=Math.floor(r/d),r%=d),`${n}d ${s}h ${r}m`):void 0}(s,r),v=c?"event__favorite-btn--active":"";return`\n    <li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${s}">${u}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${n}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${n} ${i?i.name:""}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${s}">${m}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${r}">${f}</time>\n          </p>\n          <p class="event__duration">${_}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${o}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n        ${function(e){return 0===e.length?"":e.map((e=>`\n    <li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </li>\n  `)).join("")}(t)}\n        </ul>\n        <button class="event__favorite-btn ${v}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>\n  `}(this.point,this.offer,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const h=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],m={id:"1",basePrice:112,dateFrom:new Date("2023-09-02T12:00:00"),dateTo:new Date("2023-09-12T12:00:00"),destination:"",isFavorite:!0,offers:[6],type:"Restaurant"};class f{constructor({event:e=m,offers:t,destination:i}){this.event=e,this.offers=t,this.destination=i}getTemplate(){return function(e,t,i){const{type:n,dateFrom:s,dateTo:r,basePrice:a}=e,o=c(s),l=c(r);return`\n    <li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${n}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${p=h,p.map(((e,t)=>`\n    <div class="event__type-item">\n      <input id="event-type-${e.toLowerCase()}-${t}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}">\n      <label class="event__type-label event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-${t}">${e}</label>\n    </div>\n  `)).join("")}\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${n}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${i?i.name:""}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${o}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${l}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${function(e,t){return 0===e.length?"":e.map(((e,i)=>`\n    <div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t}-${i}" type="checkbox" name="event-offer-${t}">\n      <label class="event__offer-label" for="event-offer-${t}-${i}">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </label>\n    </div>\n  `)).join("")}(t,n)}\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${i?i.description:""}</p>\n\n            <div class="event__photos-container">\n              <div class="event__photos-tape">\n                ${i?(d=i.pictures,d.map((e=>`\n    <img class="event__photo" src="${e.src}" alt="${e.description}"></img>\n  `)).join("")):""}\n              </div>\n            </div>\n\n          </section>\n        </section>\n      </form>\n    </li>\n  `;var d,p}(this.event,this.offers,this.destination)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const _=[{id:1,basePrice:100,dateFrom:new Date("2023-12-15T13:20:00"),dateTo:new Date("2023-12-16T14:20:00"),destination:"",isFavorite:!0,offers:[0],type:"Taxi"},{id:2,basePrice:36,dateFrom:new Date("2023-09-12T13:20:00"),dateTo:new Date("2023-09-12T14:20:00"),destination:"",isFavorite:!1,offers:[1],type:"Bus"},{id:3,basePrice:510,dateFrom:new Date("2023-09-10T11:05:00"),dateTo:new Date("2023-09-12T03:20:00"),destination:"",isFavorite:!0,offers:[0],type:"Train"},{id:4,basePrice:912,dateFrom:new Date("2023-09-10T11:05:00"),dateTo:new Date("2023-09-12T03:20:00"),destination:"",isFavorite:!1,offers:[1],type:"Ship"},{id:5,basePrice:328,dateFrom:new Date("2023-09-12T22:15:00"),dateTo:new Date("2023-09-12T23:20:00"),destination:"",isFavorite:!0,offers:[0],type:"Drive"},{id:6,basePrice:637,dateFrom:new Date("2023-09-10T06:42:00"),dateTo:new Date("2023-09-10T15:21:00"),destination:"",isFavorite:!1,offers:[0],type:"Flight"},{id:7,basePrice:112,dateFrom:new Date("2023-09-12T19:00:00"),dateTo:new Date("2023-09-12T22:30:00"),destination:"",isFavorite:!0,offers:[0],type:"Restaurant"},{id:8,basePrice:742,dateFrom:new Date("2023-09-10T12:00:00"),dateTo:new Date("2023-09-12T12:00:00"),destination:"",isFavorite:!1,offers:[0],type:"Check-in"}];function v(){return(e=_)[Math.floor(Math.random()*e.length)];var e}const g=[{type:"Taxi",offers:[{id:0,title:"Switch to comfort class",price:10},{id:1,title:"Add luggage",price:15}]},{type:"Bus",offers:[{id:0,title:"Choose seats",price:10},{id:1,title:"Add luggage",price:15}]},{type:"Drive",offers:[{id:0,title:"Add luggage",price:15}]},{type:"Train",offers:[{id:0,title:"Choose seats",price:20},{id:1,title:"Add luggage",price:15}]},{type:"Flight",offers:[{id:0,title:"Add meal",price:10},{id:1,title:"Add breakfast",price:15}]},{type:"Check-in",offers:[{id:0,title:"Overnight stay at the hotel",price:1}]},{type:"Restaurant",offers:[{id:0,title:"Add breakfast",price:15}]},{type:"Ship",offers:[{id:0,title:"Add luggage",price:15},{id:1,title:"Add breakfast",price:15}]}],y=[{id:1,name:"Amsterdam",description:"Amsterdam is the capital and most populous city of the Netherlands, with The Hague being the seat of government. A few of Amsterdam's notable residents throughout its history include painters Rembrandt and Vincent van Gogh, seventeenth-century philosophers Baruch Spinoza, John Locke, René Descartes.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Westerkerk_Amsterdam.jpg/220px-Westerkerk_Amsterdam.jpg",description:"Amsterdam"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Reguliersgracht%2C_Amsterdam.jpg/132px-Reguliersgracht%2C_Amsterdam.jpg",description:"Amsterdam"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg/132px-KeizersgrachtReguliersgrachtAmsterdam.jpg",description:"Amsterdam"}]},{id:2,name:"Paris",description:"Paris is the capital and most populous city of France, located in northern central France, in a north-bending arc of the river Seine whose crest includes two islands, the Île Saint-Louis and the larger Île de la Cité, which form the oldest part of the city",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/278px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",description:"Paris"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Louvre_Courtyard%2C_Looking_West.jpg/278px-Louvre_Courtyard%2C_Looking_West.jpg",description:"Paris"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/04-2017._Notre-Dame_de_Paris-71.jpg/80px-04-2017._Notre-Dame_de_Paris-71.jpg",description:"Paris"}]},{id:3,name:"London",description:"London stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea and has been a major settlement for two millennia",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/London_%2844761485915%29.jpg/290px-London_%2844761485915%29.jpg",description:"London"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/278px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg",description:"London"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/278px-London_Skyline_%28125508655%29.jpeg",description:"London"}]},{id:4,name:"Bergeggi",description:"Bergeggi is a comune (municipality) in the Province of Savona in the Italian region Liguria, located about 90 kilometres (56 mi) southwest of Genoa and about 10 kilometres (6 mi) southwest of Savona. In 2007 and 2008 the municipality was awarded the Blue Flag, which distinguishes the high quality of the beaches and the sea.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Bergeggi_beach_2.jpg/220px-Bergeggi_beach_2.jpg",description:"Bergeggi"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bergeggi-IMG_1639.JPG/220px-Bergeggi-IMG_1639.JPG",description:"Bergeggi"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bergeggi-IMG_1635.JPG/220px-Bergeggi-IMG_1635.JPG",description:"Bergeggi"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bergeggi-IMG_1640.JPG/260px-Bergeggi-IMG_1640.JPG",description:"Bergeggi"}]},{id:5,name:"Barcelona",description:"Barcelona is the capital and largest city of the autonomous community of Catalonia. Many of the buildings date from medieval times, some from as far back as the Roman settlement of Barcelona.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Evening_light_over_Barcelona.jpg/290px-Evening_light_over_Barcelona.jpg",description:"Barcelona"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Torre_Gl%C3%B2ries%2C_Barcelona_%2851351746585%29.jpg/220px-Torre_Gl%C3%B2ries%2C_Barcelona_%2851351746585%29.jpg",description:"Barcelona"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Batllo_House.jpg/200px-Batllo_House.jpg",description:"Barcelona"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Casa_Mil%C3%A0%2C_general_view.jpg/200px-Casa_Mil%C3%A0%2C_general_view.jpg",description:"Barcelona"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/220px-Sagrada_Familia_01.jpg",description:"Barcelona"}]},{id:6,name:"Bonn",description:"Bonn is a federal city in the German state of North Rhine-Westphalia, located on the banks of the Rhine.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2008-12-25_Bonn_Sterntor.jpg/220px-2008-12-25_Bonn_Sterntor.jpg",description:"Bonn"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Altes_Rathaus_Bonn.jpg/220px-Altes_Rathaus_Bonn.jpg",description:"Bonn"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Villa_Hammerschmidt_Bonn_Seite_Adenauerallee_20080831.jpg/220px-Villa_Hammerschmidt_Bonn_Seite_Adenauerallee_20080831.jpg",description:"Bonn"}]},{id:7,name:"Como",description:"Its proximity to Lake Como and to the Alps has made Como a tourist destination, and the city contains numerous works of art, churches, gardens, museums, theatres, parks, and palaces: the Duomo, seat of the Diocese of Como; the Basilica of Sant'Abbondio; the Villa Olmo; the public gardens with the Tempio Voltiano; the Teatro Sociale; the Broletto or the city's medieval town hall; and the 20th-century Casa del Fascio.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Como_and_its_lake.jpg/250px-Como_and_its_lake.jpg",description:"Como"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/La_citt%C3%A0_di_Como_e_il_suo_lago.jpg/220px-La_citt%C3%A0_di_Como_e_il_suo_lago.jpg",description:"Como"},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Comofontanawiki.JPG/250px-Comofontanawiki.JPG",description:"Como"}]},{id:8,name:"Edinburgh ",description:"\"Edin\", the root of the city's name, derives from Eidyn, the name for this region in Cumbric, the Brittonic Celtic language formerly spoken there. The name's meaning is unknown.[16] The district of Eidyn is centred on the stronghold of Din Eidyn, the dun or hillfort of Eidyn.",pictures:[{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Edinburgh%2C_Scott_Monument_%2837729400005%29.jpg/81px-Edinburgh%2C_Scott_Monument_%2837729400005%29.jpg",description:"Edinburgh "},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/The_Shore%2C_Leith.JPG/220px-The_Shore%2C_Leith.JPG",description:"Edinburgh "},{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Edinburgh_New_College_%288594473141%29.jpg/220px-Edinburgh_New_College_%288594473141%29.jpg",description:"Edinburgh "}]}],b=document.querySelector(".page-header"),w=document.querySelector(".page-main"),$=b.querySelector(".trip-main"),k=$.querySelector(".trip-controls__filters"),M=w.querySelector(".trip-events"),T=new class{points=Array.from({length:4},v);getPoints(){return this.points}},C=new class{offers=function(){return g}();getOffers(){return this.offers}getOfferByType(e){return this.offers.filter((t=>t.type===e)).reduce(((e,t)=>(t.offers.forEach((t=>e.push(t))),e)),[])}},D=new class{destinations=function(){return y}();getDestinations(){return this.destinations}getById(e){return this.destinations.find((t=>t.id===e))}},S=new class{listSort=new n;listEvents=new s;constructor({eventsContainer:e,pointModel:t,offerModel:i,destinationModel:n}){this.eventsContainer=e,this.pointModel=t,this.offerModel=i,this.destinationModel=n}init(){this.pointsList=[...this.pointModel.getPoints()],this.offersList=[...this.offerModel.getOffers()],this.destinationsList=[...this.destinationModel.getDestinations()],t(this.listSort,this.eventsContainer),t(this.listEvents,this.eventsContainer),t(new f({point:this.pointsList[0],offers:this.offerModel.getOfferByType(this.pointsList[0].type),destination:this.destinationModel.getById(this.pointsList[0].id)}),this.listEvents.getElement()),this.pointsList.slice(1).forEach((e=>{t(new u({point:e,offer:this.offerModel.getOfferByType(e.type),destination:this.destinationModel.getById(e.id)}),this.listEvents.getElement())}))}}({eventsContainer:M,pointModel:T,offerModel:C,destinationModel:D});t(new class{getTemplate(){return'\n  <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},$,"afterbegin"),t(new class{getTemplate(){return'\n    <form class="trip-filters" action="#" method="get">\n      <div class="trip-filters__filter">\n        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n        <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n        <label class="trip-filters__filter-label" for="filter-future">Future</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n        <label class="trip-filters__filter-label" for="filter-present">Present</label>\n      </div>\n\n      <div class="trip-filters__filter">\n        <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n        <label class="trip-filters__filter-label" for="filter-past">Past</label>\n      </div>\n\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n  '}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},k),S.init()})()})();
//# sourceMappingURL=bundle.55c9042e36955b9dbc7f.js.map