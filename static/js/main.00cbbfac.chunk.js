(this["webpackJsonp02-gift-app"]=this["webpackJsonp02-gift-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=n(2),s=n(9),u=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)("Ingrese categoria"),r=Object(i.a)(n,2),a=r[0],o=r[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))},children:[Object(u.jsx)("h2",{children:a}),Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)},onFocus:function(t){t.target.value=""}})]})},j=n(10),d=n(6),l=n.n(d),b=n(8),p=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,c,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=9&api_key=j7Xha4PEZxpqubMv0nouiHmLGxMJWcp7"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),r},h=function(t){var e=t.url,n=t.title;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:e,alt:n}),Object(u.jsx)("p",{children:n})]})},O=function(t){var e=t.category,n=f(e),c=n.data,r=n.loading;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e}),r&&Object(u.jsx)("p",{children:"Cargando..."}),Object(u.jsx)("div",{className:"grid-cards",children:c.map((function(t){return Object(u.jsx)(h,Object(j.a)({},t),t.id)}))})]})},x=function(){var t=Object(c.useState)(["One punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GiftExpertApp"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};n(17);a.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.00cbbfac.chunk.js.map