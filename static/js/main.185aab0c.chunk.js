(this["webpackJsonptechnical-test-simulation"]=this["webpackJsonptechnical-test-simulation"]||[]).push([[0],{29:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(23),j=c.n(i),r=c(7),s=c(2),d=c(10),l=c(13),a=c(5),b=(c(29),c(6)),h=c.n(b),o="https://exs-request.herokuapp.com/products/",O=(c(14),c(24),c(0)),x=function(){var e=Object(n.useState)({name:"",description:"",price:"",image:""}),t=Object(a.a)(e,2),c=t[0],i=t[1],j=function(e){var t=e.target;i(Object(l.a)(Object(l.a)({},c),{},Object(d.a)({},t.name,t.value)))};return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{id:"formulario",onSubmit:function(e){e.preventDefault()},children:[Object(O.jsx)("h2",{children:"Product Register"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("center",{children:Object(O.jsx)("label",{children:"Item"})}),Object(O.jsx)("input",{id:"inputName",name:"name",onChange:j})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("center",{children:Object(O.jsx)("label",{children:"Description"})}),Object(O.jsx)("input",{id:"inputDescription",name:"description",onChange:j})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("center",{children:Object(O.jsx)("label",{children:"Price"})}),Object(O.jsx)("input",{id:"inputPrice",type:"number",name:"price",onChange:j})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("center",{children:Object(O.jsx)("label",{children:"Image"})}),Object(O.jsx)("input",{id:"inputImage",name:"image",onChange:j})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{id:"btnRegistro",onClick:function(){h.a.post(o,c).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))},children:"ADD"})})]})})},u=(c(50),function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];Object(n.useEffect)((function(){j()}),[]);var j=function(){h.a.get(o).then((function(e){return i(e.data)})).catch((function(e){return console.log(e)}))};return Object(O.jsx)("div",{children:Object(O.jsxs)("table",{className:"tabla",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Id"}),Object(O.jsx)("th",{children:"Item"}),Object(O.jsx)("th",{children:"Photo"}),Object(O.jsx)("th",{children:"Description"}),Object(O.jsx)("th",{children:"Price"}),Object(O.jsx)("th",{children:"Acti\xf3n"})]})}),Object(O.jsx)("tbody",{children:c.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:Object(O.jsx)("img",{src:e.image,alt:"",width:"80",height:"80"})}),Object(O.jsx)("td",{children:e.description}),Object(O.jsx)("td",{children:e.price}),Object(O.jsx)("td",{children:Object(O.jsx)("button",{onClick:function(){return t=e.id,void h.a.delete(o+t).then((function(e){j(),console.log(e)})).catch((function(e){return console.log(e)}));var t},children:"Delete"})})]},e.id)}))})]})})}),m=(c(51),function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("nav",{children:[Object(O.jsx)(r.b,{className:"link",to:"/Registro",children:"Add_To_Cart"}),Object(O.jsx)(r.b,{className:"link",to:"/Listar",children:"Shop_Cart"})]})}),Object(O.jsx)("hr",{})]})}),p=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(r.a,{children:[Object(O.jsx)(m,{}),Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/Registro",element:Object(O.jsx)(x,{})}),Object(O.jsx)(s.a,{exact:!0,path:"/Listar",element:Object(O.jsx)(u,{})})]})]})})};j.a.render(Object(O.jsx)(p,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.185aab0c.chunk.js.map