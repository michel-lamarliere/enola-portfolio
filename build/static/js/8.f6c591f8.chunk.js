(this["webpackJsonpreact-version"]=this["webpackJsonpreact-version"]||[]).push([[8],{51:function(t,e,o){"use strict";o.d(e,"e",(function(){return s})),o.d(e,"a",(function(){return u})),o.d(e,"c",(function(){return j})),o.d(e,"d",(function(){return b})),o.d(e,"b",(function(){return m}));var c=o(5),n=o(52),a=o.n(n),r=o(9),i=o(0);function s(t){var e={together:Object(r.b)()?"Let's work together":"Travaillons ensemble"};return Object(i.jsx)(c.b,{to:"/contact",className:[a.a.together,t.className].join(" "),children:e.together})}function u(t){var e={contact:Object(r.b)()?"Contact me":"Contactez-moi"};return Object(i.jsx)(c.b,{to:"/contact",className:[a.a.contact,t.className].join(" "),children:e.contact})}function j(t){var e={portfolio:Object(r.b)()?"Check my portfolio":"Voir mon portfolio"};return Object(i.jsx)(c.b,{to:"/portfolio",className:[a.a.portfolio,t.className].join(" "),children:e.portfolio})}function b(t){var e={more:Object(r.b)()?"See More":"Voir Plus"};return Object(i.jsx)(c.b,{to:"/portfolio",className:[a.a.more,t.className].join(" "),children:e.more})}function m(){var t={send:Object(r.b)()?"Send":"Envoyer"};return Object(i.jsx)("button",{type:"submit",children:t.send})}},52:function(t,e,o){t.exports={together:"Buttons_together__44Kwp",contact:"Buttons_contact__3BHsb",portfolio:"Buttons_portfolio__2BzZa",more:"Buttons_more__3WAl6"}},53:function(t,e,o){"use strict";var c=o(60),n=(o(64),c.a.initializeApp({apiKey:"AIzaSyCniVfWt6VM8LfejRI1EuWqdhqv335uiY8",authDomain:"mon-portfolio-e9d2a.firebaseapp.com",projectId:"mon-portfolio-e9d2a",storageBucket:"mon-portfolio-e9d2a.appspot.com",messagingSenderId:"1039741393766",appId:"1:1039741393766:web:35bc023f2de36fa3e946a7",measurementId:"G-DP50S7DCJE"}).firestore());e.a=n},83:function(t,e,o){t.exports={images:"Project_images__1W2Ch",image:"Project_image__1P9q4"}},86:function(t,e,o){"use strict";o.r(e);var c=o(15),n=o(1),a=o(83),r=o.n(a),i=o(53),s=o(24),u=o(51),j=o(25),b=o(3),m=o(0);e.default=function(){var t=Object(n.useState)(!1),e=Object(c.a)(t,2),o=e[0],a=e[1],f=Object(n.useState)(!1),l=Object(c.a)(f,2),p=l[0],d=l[1],h=window.location.pathname.slice(12),O=Object(n.useState)(),g=Object(c.a)(O,2),_=g[0],v=g[1];Object(n.useEffect)((function(){i.a.collection("portfolio").doc("".concat(h)).get().then((function(t){for(var e=t.data(),o=Object.keys(e.project_images).length,c=[],n=0;n<o;n++)c.push(e.project_images[Object.keys(e.project_images)[n]]);v(c)})).catch((function(t){a(!0)}));setTimeout((function(){d(!0)}),1500)}),[]);var x=Object(m.jsx)(m.Fragment,{children:_&&_.map((function(t,e){return Object(m.jsx)("img",{className:r.a.image,src:t,alt:"project ".concat(e)},Math.random())}))});return o&&(x=Object(m.jsx)(b.a,{to:"/error"})),Object(m.jsxs)(s.a,{children:[Object(m.jsxs)("div",{className:r.a.images,children:[!p&&Object(m.jsx)(j.a,{}),x]}),Object(m.jsx)(u.e,{})]})}}}]);
//# sourceMappingURL=8.f6c591f8.chunk.js.map