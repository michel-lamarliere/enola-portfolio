(this["webpackJsonpreact-version"]=this["webpackJsonpreact-version"]||[]).push([[7],{51:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(5),c=n(52),o=n.n(c),r=n(9),i=n(0);function s(e){var t={together:Object(r.b)()?"Let's work together":"Travaillons ensemble"};return Object(i.jsx)(a.b,{to:"/contact",className:[o.a.together,e.className].join(" "),children:t.together})}function l(e){var t={contact:Object(r.b)()?"Contact me":"Contactez-moi"};return Object(i.jsx)(a.b,{to:"/contact",className:[o.a.contact,e.className].join(" "),children:t.contact})}function u(e){var t={portfolio:Object(r.b)()?"Check my portfolio":"Voir mon portfolio"};return Object(i.jsx)(a.b,{to:"/portfolio",className:[o.a.portfolio,e.className].join(" "),children:t.portfolio})}function m(e){var t={more:Object(r.b)()?"See More":"Voir Plus"};return Object(i.jsx)(a.b,{to:"/portfolio",className:[o.a.more,e.className].join(" "),children:t.more})}function d(){var e={send:Object(r.b)()?"Send":"Envoyer"};return Object(i.jsx)("button",{type:"submit",children:e.send})}},52:function(e,t,n){e.exports={together:"Buttons_together__44Kwp",contact:"Buttons_contact__3BHsb",portfolio:"Buttons_portfolio__2BzZa",more:"Buttons_more__3WAl6"}},55:function(e,t,n){"use strict";t.a=n.p+"static/media/questionnaire.81b55232.pdf"},58:function(e,t,n){"use strict";var a=n(59),c=n.n(a),o=n(9),r=n(0);t.a=function(e){var t=Object(o.b)(),n={thankyou:t?"THANK YOU":"MERCI",visit:t?"for your visit!":"pour votre visite !"};return Object(r.jsxs)("div",{className:[c.a.merci,e.className].join(" "),children:[Object(r.jsx)("div",{className:c.a.merci_title,children:n.thankyou}),Object(r.jsx)("div",{className:c.a.merci_text,children:n.visit})]})}},59:function(e,t,n){e.exports={merci:"Merci_merci__1Rvoq",merci_title:"Merci_merci_title__2M9w-",merci_text:"Merci_merci_text__25t17"}},62:function(e,t,n){"use strict";t.a=n.p+"static/media/english_questionnaire.8e320658.pdf"},79:function(e,t,n){e.exports={container:"Contact_container__3806I",email:"Contact_email__2XANq",form:"Contact_form__1TwDC",pdf:"Contact_pdf__2nUam",pdf_logo:"Contact_pdf_logo__vR6Mr",pdf_link:"Contact_pdf_link__r_acT",envoye:"Contact_envoye__M1Udr"}},90:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t);var r=n(15),i=n(1),s=n(79),l=n.n(s),u=n(24),m=n(9),d=n(58),j=n(51),p=n(0),b=function(e){return Object(p.jsx)("textarea",{id:e.id,type:e.type,value:e.value,name:e.name,rows:e.rows,placeholder:e.placeholder,onChange:e.onChange})},f=function(e){return Object(p.jsx)("input",{type:e.type,id:e.id,placeholder:e.placeholder,value:e.value,name:e.name,onChange:e.onChange,multiple:e.multiple,accept:e.accept})},_=n(55),h=n(62);t.default=function(e){var t=Object(m.b)(),n=Object(i.useState)(!1),c=Object(r.a)(n,2),s=c[0],O=c[1],v=Object(i.useState)({name:"",email:"",attachment:"",message:""}),g=Object(r.a)(v,2),x=g[0],y=g[1],N=function(e){y((function(t){return o(o({},t),{},a({},e.target.name,e.target.value))}))},C={input_name:t?"Name":"Nom",input_email:t?"Email Address":"Email",button_send:t?"Send":"Envoyer",sent:t?"Message Sent!":"Message Envoy\xe9",pdf:t?"Client questionnaire to download":"Questionnaire client \xe0 t\xe9l\xe9charger"};return Object(p.jsx)(u.a,{children:Object(p.jsxs)("div",{className:l.a.container,children:[Object(p.jsx)("div",{className:l.a.email,children:"contact@enolalouge.com"}),Object(p.jsxs)("form",{className:l.a.form,onSubmit:function(e){O(!0),setTimeout((function(){O(!1),y((function(){return{name:"",email:"",attachments:"",message:""}}))}),2e3)},action:"https://formsubmit.co/enola.louge@icloud.com",method:"POST",encType:"multipart/form-data",target:"frame",children:[Object(p.jsx)(f,{type:"hidden",name:"_captcha",value:"false"}),Object(p.jsx)(f,{type:"hidden",name:"_subject",value:"Nouveau message !"}),Object(p.jsx)(f,{type:"text",id:"name",name:"name",placeholder:C.input_name,onChange:N,value:x.name,required:!0}),Object(p.jsx)(f,{type:"email",id:"email",name:"email",placeholder:C.input_email,onChange:N,value:x.email,required:!0}),Object(p.jsx)(b,{id:"message",name:"message",rows:"4",placeholder:"Message",onChange:N,value:x.message,required:!0}),Object(p.jsx)(f,{type:"file",id:"attachment",name:"attachment",multiple:"multiple",accept:"image/png, image/jpeg pdf",onChange:N,value:x.attachments}),Object(p.jsxs)("div",{className:l.a.envoye,children:[Object(p.jsx)(j.b,{}),s&&Object(p.jsx)("div",{className:l.a.envoye_text,children:C.sent})]})]}),Object(p.jsxs)("div",{className:l.a.pdf,children:[C.pdf,Object(p.jsx)("div",{className:l.a.pdf_logo,children:t?Object(p.jsx)("a",{href:h.a,className:l.a.pdf_link,download:!0}):Object(p.jsx)("a",{href:_.a,className:l.a.pdf_link,download:!0})})]}),Object(p.jsx)(d.a,{}),Object(p.jsx)("iframe",{name:"frame",title:"frame"})]})})}}}]);
//# sourceMappingURL=7.054eb57e.chunk.js.map