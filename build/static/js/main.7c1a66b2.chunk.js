(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(17),o=t.n(c),a=t(8),r=t(3),u=t(1),i=t(0),s=function(e){var n=e.value,t=e.onChange;return Object(i.jsxs)("div",{children:["filter show with",Object(i.jsx)("input",{value:n,onChange:t})]})},l=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(i.jsxs)("div",{children:["name: ",Object(i.jsx)("input",{value:e.valueName,onChange:e.onChangePerson})]}),Object(i.jsxs)("div",{children:["number: ",Object(i.jsx)("input",{value:e.valuePhone,onChange:e.onChangePhone})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"Add"})})]})})},d=function(e){var n=e.person,t=e.onClick;return Object(i.jsxs)("div",{children:[n.name," ",n.number," ",Object(i.jsx)("button",{onClick:t,children:"delete"})]})},j=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"success",children:n})},h=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},b=t(4),f=t.n(b),m="/api/persons",O=function(){return f.a.get(m).then((function(e){return e.data}))},v=function(e){return f.a.post(m,e).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},x=function(e,n){return f.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},g=(t(41),function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],o=Object(u.useState)(""),b=Object(r.a)(o,2),f=b[0],m=b[1],g=Object(u.useState)(""),C=Object(r.a)(g,2),k=C[0],w=C[1],S=Object(u.useState)(""),P=Object(r.a)(S,2),y=P[0],N=P[1],A=Object(u.useState)(null),T=Object(r.a)(A,2),U=T[0],E=T[1],I=Object(u.useState)(null),J=Object(r.a)(I,2),B=J[0],D=J[1];Object(u.useEffect)((function(){O().then((function(e){c(e)}))}),[]);var W=""===y?t:t.filter((function(e){return e.name.toUpperCase().startsWith(y.toUpperCase())}));return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(j,{message:U}),Object(i.jsx)(h,{message:B}),Object(i.jsx)(s,{value:y,onChange:function(e){N(e.target.value)}}),Object(i.jsx)(l,{onSubmit:function(e){if(e.preventDefault(),t.find((function(e){return e.name===f&e.phone===k})))alert("".concat(f," is already added to phonebook"));else if(t.find((function(e){return e.name===f&e.phone!==k}))){var n=t.find((function(e){return e.name===f&e.phone!==k}));if(window.confirm("".concat(n.name," is already added to the notebook, replace the old number with a new one?"))){var o=Object(a.a)(Object(a.a)({},n),{},{phone:k});x(o.id,o).then((function(e){c(t.map((function(n){return n.id!==e.id?n:e}))),E("Updated '".concat(o.name,"' phone to '").concat(o.phone,"'")),setTimeout((function(){E(null)}),5e3)})).catch((function(e){D("Information of '".concat(o.name,"' has already been removed from server")),setTimeout((function(){D(null)}),5e3),c(t.filter((function(e){return e.id!==o.id})))}))}}else{v({name:f,number:k}).then((function(e){c(t.concat(e)),w(""),m(""),E("Added '".concat(e.name,"'")),setTimeout((function(){E(null)}),5e3)}))}},valueName:f,onChangePerson:function(e){m(e.target.value)},valuePhone:k,onChangePhone:function(e){w(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),W.map((function(e){return Object(i.jsx)(d,{person:e,onClick:function(){return n=e.id,void(window.confirm("Are you sure?")&&p(n).then((function(e){c(t.filter((function(e){return e.id!==n})))})));var n}},e.id)}))]})});o.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7c1a66b2.chunk.js.map