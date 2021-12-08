(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={container:"Container_container__2P1n4",title:"Container_title__Niqdx"}},15:function(t,e,n){t.exports={section:"Section_section__1F-7t",title:"Section_title__1XUDD"}},16:function(t,e,n){t.exports={filter:"Filter_filter__dKLFL",input:"Filter_input__1Oqev"}},17:function(t,e,n){t.exports={box:"Spinner_box__1DxaC",spinner:"Spinner_spinner__1km-J"}},49:function(t,e,n){},5:function(t,e,n){t.exports={form:"ContactForm_form__rnE7t",label:"ContactForm_label__23emk",title:"ContactForm_title__3tJTD",input:"ContactForm_input__yg3tm",btn:"ContactForm_btn__j3PnA"}},50:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var c,a=n(0),r=n.n(a),i=n(9),s=n.n(i),o=n(3),l=n(21),b=n(4),u=n(18),j=n(22),d=n.n(j),m=n(23),O=n.n(m),_=n(11),f=n(26),p=n(2),x=n(24),h=n.n(x),C={addContact:Object(b.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:h.a.generate(),name:e,number:n}}})),deleteContact:Object(b.b)("contacts/delete"),changeFilter:Object(b.b)("contacts/changeFilter")},v=Object(b.c)([],(c={},Object(_.a)(c,C.addContact,(function(t,e){var n=e.payload;return[].concat(Object(f.a)(t),[n])})),Object(_.a)(c,C.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),N=Object(b.c)("",Object(_.a)({},C.changeFilter,(function(t,e){return e.payload}))),g=Object(p.b)({items:v,filter:N}),k={key:"contacts",storage:d.a,blacklist:["filter"]},F=Object(b.a)({reducer:{contacts:Object(u.a)(k,g)},middleware:function(t){return t({serializableCheck:!1}).concat(O.a)},devTools:!1}),y={configStore:F,persistor:Object(u.b)(F)},z=n(14),S=n.n(z),L=n(1);function w(t){var e=t.title,n=t.children;return Object(L.jsxs)("div",{className:S.a.container,children:[e&&Object(L.jsx)("h1",{className:S.a.title,children:e}),n]})}var A=n(15),D=n.n(A);function J(t){var e=t.title,n=t.children;return Object(L.jsxs)("section",{className:D.a.section,children:[e&&Object(L.jsx)("h2",{className:D.a.title,children:e}),n]})}var q=n(19),P=function(t){return t.contacts.items},T=function(t){return t.contacts.filter},B=function(t){var e=P(t),n=T(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},M=n(5),Z=n.n(M);function E(){var t=Object(a.useState)(""),e=Object(q.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(q.a)(r,2),s=i[0],l=i[1],b=Object(o.c)(P),u=Object(o.b)(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":l(a);break;default:return}},d=function(){c(""),l("")};return Object(L.jsx)("form",{onSubmit:function(t){t.preventDefault(),b.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts.")):u(C.addContact({name:n,number:s})),d()},className:Z.a.form,children:Object(L.jsxs)("label",{className:Z.a.label,children:[Object(L.jsx)("p",{className:Z.a.title,children:"Name"}),Object(L.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:j,className:Z.a.input}),Object(L.jsx)("p",{className:Z.a.title,children:"Number"}),Object(L.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:s,onChange:j,className:Z.a.input}),Object(L.jsx)("button",{className:Z.a.btn,children:"Add contact"})]})})}var I=n(16),K=n.n(I);function U(){var t=Object(o.c)(T),e=Object(o.b)();return Object(L.jsxs)("label",{className:K.a.filter,children:["Find contacts by name:",Object(L.jsx)("input",{type:"text",value:t,className:K.a.input,onChange:function(t){return e(C.changeFilter(t.target.value))}})]})}var V=n(7),W=n.n(V);function X(){var t=Object(o.c)(B),e=Object(o.b)();return Object(L.jsx)("ul",{className:W.a.list,children:t.map((function(t){return Object(L.jsxs)("li",{className:W.a.item,children:[Object(L.jsx)("p",{className:W.a.text,children:"".concat(t.name,": ").concat(t.number)}),Object(L.jsx)("button",{type:"button",className:W.a.btn,onClick:function(){return n=t.id,e(C.deleteContact(n));var n},children:"Delete"})]},t.id)}))})}n(49);function $(){return Object(L.jsxs)(w,{title:"Phonebook",children:[Object(L.jsx)(J,{children:Object(L.jsx)(E,{})}),Object(L.jsxs)(J,{title:"Contacts",children:[Object(L.jsx)(U,{}),Object(L.jsx)(X,{})]})]})}var G=n(25),H=n(17),Q=n.n(H);function R(t){var e=t.size;return Object(L.jsx)("div",{className:Q.a.box,children:Object(L.jsx)(G.a,{size:e,className:Q.a.spinner})})}n(50);s.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(o.a,{store:y.configStore,children:Object(L.jsx)(l.a,{loading:Object(L.jsx)(R,{size:200}),persistor:y.persistor,children:Object(L.jsx)($,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={list:"ContactList_list__MlfzV",item:"ContactList_item__CTgCP",text:"ContactList_text__BzTpm",btn:"ContactList_btn__1uWkL"}}},[[51,1,2]]]);
//# sourceMappingURL=main.40bd2640.chunk.js.map