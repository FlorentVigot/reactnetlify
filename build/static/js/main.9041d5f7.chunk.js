(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),s=n(15),j=n.n(s),o=(n(22),n(9));var a=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Vous avez cliquez ",n," fois"]}),Object(c.jsx)("button",{onClick:function(){return i(0)},children:"R\xe9intialise"}),Object(c.jsx)("button",{onClick:function(){return i((function(e){return e+1}))},children:"Ajouter +"}),Object(c.jsx)("button",{onClick:function(){return i((function(e){return e-1}))},children:"Enlever -"})]})};var u=function(){var e=Object(r.useState)(0),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){document.title="vous avez cliqu\xe9 ${count} fois"})),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Vous avez cliquez ",n," fois"]}),Object(c.jsx)("button",{onClick:function(){return i(n+1)},children:"Cliquez ici"})]})},b=(n(23),n(7));var l=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){window.addEventListener("scroll",(function(){i(window.scrollY>800)}))}),[]),Object(c.jsx)("header",{role:"banner",className:n?"banner-scroll":"banner",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(b.b,{to:"/",children:"Home"}),Object(c.jsx)(b.b,{to:"/card",children:"Card"}),Object(c.jsx)(b.b,{to:"/",children:"Home"})]})})},d=n(2),O={firstname:"florent",lastname:"vigot"};var h=function(){return function(e){return e.firstname+" "+e.lastname}(O)},x=function(e){var t=e.title,n=e.desc,r=e.image;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:[" Titre : ",t," "]}),Object(c.jsxs)("p",{children:["Description : ",n," "]}),Object(c.jsx)("img",{src:r,alt:t}),Object(c.jsx)(b.b,{to:"/card",children:"Lien vers card"})]})};var f=function(){var e=Object(d.f)();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Page introuvable"}),Object(c.jsx)(b.b,{to:"/",title:"Revenir sur la page principale",children:"Retour sur la page d'accueil"}),Object(c.jsx)("br",{}),Object(c.jsxs)("code",{children:["Page : ",e.pathname]})]})},v=function(){return Object(c.jsx)(b.a,{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:h}),Object(c.jsx)(d.a,{exact:!0,path:"/card",component:x}),Object(c.jsx)(d.a,{path:"*",component:f})]})})};var p=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{}),Object(c.jsx)(l,{}),Object(c.jsx)(a,{}),Object(c.jsx)(u,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};j.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),m()}},[[32,1,2]]]);
//# sourceMappingURL=main.9041d5f7.chunk.js.map