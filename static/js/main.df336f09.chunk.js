(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,t){"use strict";t.r(a);var c=t(4),n=t.n(c),i=t(2),r=t(1),l=(t(9),t(0)),s=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,i=Math.ceil(a/t),r=Array.from({length:i},(function(e,a){return a+1})),s=r[0],o=r[r.length-1],j=c-1,d=c+1;return Object(l.jsxs)("ul",{className:"pagination",children:[Object(l.jsx)("li",{className:c===r[0]?"page-item disabled":"page-item",children:Object(l.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":c===s,onClick:function(){c!==s&&n(j)},children:"\xab"})}),r.map((function(e){return Object(l.jsx)("li",{className:e===c?"page-item active":"page-item",children:Object(l.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#1",onClick:function(){return n(e)},children:e})},e)})),Object(l.jsx)("li",{className:c===o?"page-item disabled":"page-item",children:Object(l.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===o,onClick:function(){c!==o&&n(d)},children:"\xbb"})})]})};var o=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),j=function(){var e=Object(r.useState)(1),a=Object(i.a)(e,2),t=a[0],c=a[1],n=Object(r.useState)(5),j=Object(i.a)(n,2),d=j[0],u=j[1],b=Object(r.useState)(42),p=Object(i.a)(b,1)[0],h=(t-1)*d,m=h+d,g=o.slice(h,m);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Items with Pagination"}),Object(l.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(h+1," - ").concat(m>p?p:m," of ").concat(p,")")}),Object(l.jsxs)("div",{className:"form-group row",children:[Object(l.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(l.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:d,onChange:function(e){u(Number(e.target.value)),c(1)},children:[Object(l.jsx)("option",{value:"3",children:"3"}),Object(l.jsx)("option",{value:"5",children:"5"}),Object(l.jsx)("option",{value:"10",children:"10"}),Object(l.jsx)("option",{value:"20",children:"20"})]})}),Object(l.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(l.jsx)(s,{total:p,perPage:d,currentPage:t,onPageChange:function(e){return c(e)}}),Object(l.jsx)("ul",{children:g.map((function(e){return Object(l.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))},9:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.df336f09.chunk.js.map