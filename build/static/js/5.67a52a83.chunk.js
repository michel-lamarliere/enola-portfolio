(this["webpackJsonpreact-version"]=this["webpackJsonpreact-version"]||[]).push([[5],{51:function(t,e,r){"use strict";r.d(e,"e",(function(){return u})),r.d(e,"a",(function(){return s})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return f})),r.d(e,"b",(function(){return h}));var n=r(5),o=r(52),i=r.n(o),a=r(9),c=r(0);function u(t){var e={together:Object(a.b)()?"Let's work together":"Travaillons ensemble"};return Object(c.jsx)(n.b,{to:"/contact",className:[i.a.together,t.className].join(" "),children:e.together})}function s(t){var e={contact:Object(a.b)()?"Contact me":"Contactez-moi"};return Object(c.jsx)(n.b,{to:"/contact",className:[i.a.contact,t.className].join(" "),children:e.contact})}function l(t){var e={portfolio:Object(a.b)()?"Check my portfolio":"Voir mon portfolio"};return Object(c.jsx)(n.b,{to:"/portfolio",className:[i.a.portfolio,t.className].join(" "),children:e.portfolio})}function f(t){var e={more:Object(a.b)()?"See More":"Voir Plus"};return Object(c.jsx)(n.b,{to:"/portfolio",className:[i.a.more,t.className].join(" "),children:e.more})}function h(){var t={send:Object(a.b)()?"Send":"Envoyer"};return Object(c.jsx)("button",{type:"submit",children:t.send})}},52:function(t,e,r){t.exports={together:"Buttons_together__44Kwp",contact:"Buttons_contact__3BHsb",portfolio:"Buttons_portfolio__2BzZa",more:"Buttons_more__3WAl6"}},53:function(t,e,r){"use strict";var n=r(60),o=(r(64),n.a.initializeApp({apiKey:"AIzaSyCniVfWt6VM8LfejRI1EuWqdhqv335uiY8",authDomain:"mon-portfolio-e9d2a.firebaseapp.com",projectId:"mon-portfolio-e9d2a",storageBucket:"mon-portfolio-e9d2a.appspot.com",messagingSenderId:"1039741393766",appId:"1:1039741393766:web:35bc023f2de36fa3e946a7",measurementId:"G-DP50S7DCJE"}).firestore());e.a=o},63:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(19);var o=r(26);function i(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},72:function(t,e,r){t.exports=r(73)},73:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(I){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function v(){}function y(){}function g(){}var b={};b[i]=function(){return this};var j=Object.getPrototypeOf,w=j&&j(j(P([])));w&&w!==r&&n.call(w,i)&&(b=w);var _=g.prototype=v.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return y.prototype=_.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(_),u(_,c,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},74:function(t,e,r){t.exports={portfolio:"Portfolio_portfolio__1yGfK",link:"Portfolio_link__2hmOL"}},75:function(t,e,r){t.exports={container:"PortfolioImage_container__10s5M",image:"PortfolioImage_image__28_Ov",placeholder:"PortfolioImage_placeholder__3DpB9",overlay:"PortfolioImage_overlay__3BZ4K"}},89:function(t,e,r){"use strict";r.r(e);var n=r(72),o=r.n(n),i=r(63);function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}var u=r(15),s=r(1),l=r(5),f=r(74),h=r.n(f),p=r(53),d=r(25),m=r(24),v=r(51),y=r(75),g=r.n(y),b=(r.p,r(0));var j=function(t){return Object(b.jsxs)("div",{className:g.a.container,children:[Object(b.jsx)("img",{src:t.main_image,alt:"Project",className:g.a.image}),Object(b.jsx)("div",{className:"".concat(g.a.overlay," ").concat(t.className),children:t.overlay_text})]})};e.default=function(){var t,e=Object(s.useState)(),r=Object(u.a)(e,2),n=r[0],a=r[1],f=Object(s.useState)(!1),y=Object(u.a)(f,2),g=y[0],w=y[1],_=Object(s.useCallback)(c(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.collection("portfolio").orderBy("id","desc").get().then((function(t){var e=t.docs.map((function(t){return t.data()})),r=[];r.push.apply(r,Object(i.a)(e)),a(r)})).catch((function(t){console.error(t)}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)}))),[]);return Object(s.useEffect)((function(){_(),setTimeout((function(){w(!0)}),1e3)}),[]),n&&n.length>0&&(t=n.map((function(t){return Object(b.jsx)(l.b,{className:h.a.link,to:"/portfolio/:".concat(t.project_url),children:Object(b.jsx)(j,{overlay_text:t.overlay_text,main_image:t.main_image},t.id)},Math.random())}))),Object(b.jsxs)(m.b,{children:[Object(b.jsx)("div",{className:h.a.portfolio,style:g?{display:"flex"}:{display:"none"},children:t}),!g&&Object(b.jsx)(d.a,{}),Object(b.jsx)(v.e,{})]})}}}]);
//# sourceMappingURL=5.67a52a83.chunk.js.map