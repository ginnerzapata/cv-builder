(this["webpackJsonpcv-builder"]=this["webpackJsonpcv-builder"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(2),c=n.n(a),l=n(7),r=n.n(l),s=(n(13),n(14),n(15),n(16),n(4)),d=n(1),o=n(5);var u=function(e){return console.log(e),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("form",{onSubmit:function(t){return e.onSubmit(t)},children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("label",{htmlFor:"name",children:"Full Name"}),Object(i.jsx)("input",{required:!0,type:"text",className:"u-full-width",id:"name",placeholder:"Enter your full name",value:e.name,onChange:function(t){return e.handleOnChange(t.target.id,t.target.value)}}),Object(i.jsx)("label",{htmlFor:"bio",children:"Bio"}),Object(i.jsx)("textarea",{required:!0,className:"u-full-width",id:"bio",placeholder:"What do you do",value:e.bio,onChange:function(t){return e.handleOnChange(t.target.id,t.target.value)}})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"button-primary",children:"Save"})})]})})};var j=function(){var e=Object(a.useState)({name:"Ginner Zapata",bio:"i'm a Frontend Developer and Graphic Designer",isEditing:!1}),t=Object(o.a)(e,2),n=t[0],c=t[1];function l(){c(Object(d.a)(Object(d.a)({},n),{},{isEditing:!n.isEditing}))}var r=n.name,j=n.bio;return Object(i.jsxs)("section",{children:[Object(i.jsx)("h2",{className:"section-title",children:"Introduction"}),n.isEditing?Object(i.jsx)(u,Object(d.a)(Object(d.a)({},n),{},{onSubmit:function(e){e.preventDefault(),c(Object(d.a)(Object(d.a)({},n),{},{isEditing:!1}))},handleIsEditing:l,handleOnChange:function(e,t){c(Object(d.a)(Object(d.a)({},n),{},Object(s.a)({},e,t))),console.log(n[e])}})):Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"twelve column",children:[Object(i.jsxs)("h1",{children:["Hello, I'm ",r]}),Object(i.jsx)("p",{className:"description",children:j}),Object(i.jsx)("button",{className:"button-primary",onClick:l,children:"Edit"})]})})]})};var h=function(e){return console.log(e),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("label",{htmlFor:e.type,children:e.type}),Object(i.jsx)("input",{required:!0,type:"text",className:"u-full-width",id:e.type,name:e.type,placeholder:"Enter your ".concat(e.type," name"),value:e[e.type],onChange:function(t){return e.handleOnChange(e.id,t.target.name,t.target.value)}})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"six columns",children:[Object(i.jsx)("label",{htmlFor:"startDate",children:"Start date"}),Object(i.jsx)("input",{required:!0,type:"month",name:"startDate",id:"startDate",className:"u-full-width",value:e.startDate,onChange:function(t){return e.handleOnChange(e.id,t.target.name,t.target.value)}})]}),Object(i.jsxs)("div",{className:"six columns",children:[Object(i.jsx)("label",{htmlFor:"endDate",children:"End date"}),Object(i.jsx)("input",{required:!0,type:"month",name:"endDate",id:"endDate",className:"u-full-width",value:e.endDate,onChange:function(t){return e.handleOnChange(e.id,t.target.name,t.target.value)}})]})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("label",{htmlFor:"title",children:"Title"}),Object(i.jsx)("input",{required:!0,type:"text",className:"u-full-width",id:"title",name:"title",placeholder:"what did you study",value:e.title,onChange:function(t){return e.handleOnChange(e.id,t.target.name,t.target.value)}})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"button-primary",onClick:function(){return e.handleIsEditing(e.id)},children:"Save"})})]})})};var b=function(e){return e.isEditing?Object(i.jsx)(h,Object(d.a)({},e)):Object(i.jsxs)("article",{id:e.id,children:[Object(i.jsxs)("h3",{children:[e[e.type]," (",e.startDate," to ",e.endDate,")"]}),Object(i.jsx)("p",{children:e.title}),Object(i.jsx)("button",{className:"button-primary",onClick:function(){return e.handleIsEditing(e.id)},children:"Edit"}),Object(i.jsx)("button",{className:"button",onClick:function(){return e.handleDelete(e.id)},children:"Delete"})]})},m=n(3),O=n.n(m);var g=function(e){var t=Object(a.useState)(e.data),n=Object(o.a)(t,2),c=n[0],l=n[1];function r(e){l(c.map((function(t){return t.id===e&&(t.isEditing=!t.isEditing,console.log(t.isEditing)),t})))}function s(e){l(c.filter((function(t){if(t.id!==e)return t})))}function u(e,t,n){l(c.map((function(i){return i.id===e&&(i[t]=n),i})))}return Object(i.jsxs)("section",{children:[Object(i.jsx)("h2",{className:"section-title",children:e.sectionTitle}),c.map((function(e){return Object(i.jsx)(b,Object(d.a)({handleIsEditing:r,handleDelete:s,handleOnChange:u},e),e.id)})),Object(i.jsx)("button",{className:"button-primary",onClick:function(){var e=c[0].type;l(c.concat({id:O()(),isEditing:!0,type:e}))},children:"Add new"})]})},x=[{id:O()(),type:"school",school:"Centro de Dise\xf1o Digital",startDate:"2012-02",endDate:"2015-09",title:"Especializacion en Dise\xf1o Grafico",isEditing:!1},{id:O()(),type:"school",school:"funval",startDate:"2010-01",endDate:"2013-08",title:"Tecnico en reparacion de celulares",isEditing:!1}],p=[{id:O()(),type:"company",company:"Centro de Dise\xf1o Digital",startDate:"2012-02",endDate:"2015-09",title:"Profesor",isEditing:!1},{id:O()(),type:"company",company:"funval",startDate:"2010-01",endDate:"2013-08",title:"Dise\xf1ador",isEditing:!1}];var f=function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(j,{}),Object(i.jsx)(g,{sectionTitle:"Studies",data:x}),Object(i.jsx)(g,{sectionTitle:"Work",data:p})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),i(e),a(e),c(e),l(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.1a4b2c94.chunk.js.map