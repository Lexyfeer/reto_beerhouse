(this.webpackJsonpreto_beerhouse=this.webpackJsonpreto_beerhouse||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(6),a=n.n(o),s=(n(11),n(3)),i=n.n(s),u=n(5),j=n(2),d="QSss48gu1Q2XXUkLR4e8276MNqJR0hKr4D2mWuWK",l=n(0);var p=function(){var e="https://1crd6sdyg2.execute-api.us-east-1.amazonaws.com/dev/form",t=Object(r.useState)({form_id:0,form_name:"Cargando...",questions:[]}),n=Object(j.a)(t,2),c=n[0],o=n[1],a=Object(r.useState)(""),s=Object(j.a)(a,2),p=s[0],b=s[1],h=Object(r.useState)(""),m=Object(j.a)(h,2),f=m[0],O=m[1],x=Object(r.useState)(!0),g=Object(j.a)(x,2),v=g[0],y=g[1],k=Object(r.useState)(!1),S=Object(j.a)(k,2),_=S[0],q=S[1],C=Object(r.useState)(""),w=Object(j.a)(C,2),E=w[0],B=w[1],F=Object(r.useState)("10 am"),N=Object(j.a)(F,2),J=N[0],R=N[1];Object(r.useEffect)((function(){(function(){var t=Object(u.a)(i.a.mark((function t(){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,{method:"GET",headers:{"x-api-key":d,"Content-Type":"application/json"}});case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,console.log(r),o(r),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Error"+t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var T=function(){var t=Object(u.a)(i.a.mark((function t(n){var r,o,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=1===c.form_id?{form_id:c.form_id,responses:{1:p,2:f,3:v,4:E,5:J}}:{form_id:c.form_id,responses:{1:E,2:f,3:v}},t.prev=2,t.next=5,fetch(e,{method:"POST",headers:{"x-api-key":d,"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:return o=t.sent,t.next=8,o.json();case 8:a=t.sent,console.log(a),a.message&&alert(a.message),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log("Error"+t.t0);case 16:D();case 17:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}(),D=function(){b(""),O(""),y(!0),q(!1),B(""),R("10 am")},K=function(e,t,n){switch(e){case"String":return Object(l.jsx)(M,{id:t});case"Numeric":return Object(l.jsx)(Q,{id:t});case"Boolean":return Object(l.jsx)(U,{id:t});case"Checkbox":return Object(l.jsx)(W,{options:n});case"Dropdown":return Object(l.jsx)(X,{options:n});default:return"foo"}},M=function(e){var t=e.id;return Object(l.jsx)("input",{type:"text",id:t,name:"nombre",value:p||"",onChange:function(e){b(e.target.value)},required:!0})},Q=function(e){var t=e.id;return Object(l.jsx)("input",{type:"number",id:t,name:"edad",min:"1",max:"99",value:f||"",onChange:function(e){O(e.target.value)},required:!0})},U=function(e){var t=e.id;return Object(l.jsxs)("section",{children:[Object(l.jsx)("label",{htmlFor:"si",children:"Si"}),Object(l.jsx)("input",{type:"radio",id:t,name:"grpBool",value:!0,onClick:function(e){return y(e.target.checked)}}),Object(l.jsx)("label",{htmlFor:"no",children:"No"}),Object(l.jsx)("input",{type:"radio",id:t,name:"grpBool",value:!1,onClick:function(e){return y(!e.target.checked)}})]})},W=function(e){return e.options.map((function(e,t){return Object(l.jsxs)("label",{htmlFor:"html",children:[Object(l.jsx)("input",{type:"checkbox",value:e,checked:_,onChange:function(t){q(t.target.checked),B(e)}}),e]},t)}))},X=function(e){var t=e.options;return Object(l.jsx)("select",{name:"appoinment",value:J,onChange:function(e){return R(e.target.value)},required:!0,children:t.map((function(e,t){return Object(l.jsx)("option",{id:t,children:e},t)}))})};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:c.form_name}),Object(l.jsxs)("form",{id:c.form_id,className:"people_form",onSubmit:T,children:[1===c.form_id?Object(l.jsx)("h4",{children:"Bienvenido muchas gracias por querer registrarte para darle un hogar y mucho cari\xf1o a un hermoso gatito."}):Object(l.jsx)("h4",{children:"Sabemos que este puede ser un proceso muy duro, pero muchas gracias por darte el tiempo para registrar a este hermoso gatito, ver\xe1s que pronto le encontraremos hogar y una familia que le de mucho cari\xf1o."}),c.questions.map((function(e){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("label",{htmlFor:"",children:e.question}),K(e.type,e.question_id,e.options)]},e.question_id)})),Object(l.jsx)("button",{type:"submit",children:"Enviar"})]})]})};var b=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Reto BEERHOUSE"}),Object(l.jsx)(p,{})]})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4e49305c.chunk.js.map