(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),i=n.n(r),s=(n(12),n(7)),u=n(2),o=n(0);function j(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(""),j=Object(u.a)(s,2),b=j[0],l=j[1],d=Object(c.useState)(""),O=Object(u.a)(d,2),f=O[0],h=O[1],m={id:r,name:b,number:f},p=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"id":i(c);break;case"name":l(c);break;case"number":h(c);break;default:return}},x=function(){i(""),l(""),h("")};return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(m),x()},children:[Object(o.jsxs)("label",{children:["\u0418\u043c\u044f",Object(o.jsx)("input",{type:"text",name:"name",value:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:p,required:!0})]}),Object(o.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(o.jsx)("input",{type:"tel",name:"number",value:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:p,required:!0})]}),Object(o.jsx)("button",{type:"submit",children:"Add contact"})]})}var b=function(e){var t=e.contacts,n=e.handleDelete;return Object(o.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(o.jsxs)("li",{children:[c,": ",a,Object(o.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},l=function(e){var t=e.handleChange,n=e.filter;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:"Find contacts by name"}),Object(o.jsx)("input",{type:"text",onChange:t,value:n})]})},d=n(17);n(14);function O(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(u.a)(r,2),O=i[0],f=i[1];Object(c.useEffect)((function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&a(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)("h1",{children:"Phonebook"})}),Object(o.jsx)(j,{onAdd:function(e){var t=Object(d.a)();e.id=t,n.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts.")):a((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"CONTACTS"}),Object(o.jsx)(l,{handleChange:function(e){f(e.currentTarget.value)},filter:O}),Object(o.jsx)(b,{contacts:function(){var e=O.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),handleDelete:function(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})}i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a72f4248.chunk.js.map