(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,n){},117:function(e,t,n){},124:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(34),i=n.n(r),o=(n(116),n(16)),l=n(13),s=(n(117),n(188)),u=n(187),d=n(186),b=n(191),j=n(180),h=n(182),f=n(184),p=n(179),m=n(190),x=n(61),O=n.n(x),g=(n(89),n(172),n(173)),v=n(199),w=n(200),S=n(194),y=n(198),k=n(192),P=n(185),C=n(193),A=n(189),E=(n(195),n(64),n(197)),I=(n(196),n(181),n(90),n(91),n(174)),F=n(2);function N(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function B(e,t){return"desc"===e?function(e,n){return N(e,n,t)}:function(e,n){return-N(e,n,t)}}function D(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var J=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"artist",numeric:!1,disablePadding:!1,label:"Artist"},{id:"album",numeric:!1,disablePadding:!1,label:"Album"}];function M(e){e.onSelectAllClick;var t=e.order,n=e.orderBy,a=(e.numSelected,e.rowCount,e.onRequestSort);return Object(F.jsx)(k.a,{children:Object(F.jsx)(C.a,{children:J.map((function(e){return Object(F.jsx)(S.a,{align:e.numeric?"right":"left",padding:"normal",sortDirection:n===e.id&&t,children:Object(F.jsxs)(A.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(c=e.id,function(e){a(e,c)}),children:[e.label,n===e.id?Object(F.jsx)(g.a,{component:"span",sx:I.a,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var c}))})})}function R(e){var t=e.rows,n=e.cellClick,c=a.useState("asc"),r=Object(l.a)(c,2),i=r[0],o=r[1],s=a.useState("calories"),u=Object(l.a)(s,2),d=u[0],b=u[1],j=a.useState([]),h=Object(l.a)(j,2),f=h[0],p=h[1],m=a.useState(0),x=Object(l.a)(m,2),O=x[0],k=x[1],A=a.useState(10),I=Object(l.a)(A,2),N=I[0],J=I[1],R=O>0?Math.max(0,(1+O)*N-t.length):0;return Object(F.jsx)(g.a,{sx:{width:"calc(100% - 64px)",mb:2},children:Object(F.jsxs)(E.a,{sx:{width:"100%"},elevation:4,children:[Object(F.jsx)(y.a,{children:Object(F.jsxs)(v.a,{sx:{minWidth:750},size:"small",children:[Object(F.jsx)(M,{numSelected:f.length,order:i,orderBy:d,onSelectAllClick:function(e){if(e.target.checked){var n=t.map((function(e){return e.name}));p(n)}else p([])},onRequestSort:function(e,t){o(d===t&&"asc"===i?"desc":"asc"),b(t)},rowCount:t.length}),Object(F.jsxs)(w.a,{children:[D(t,B(i,d)).slice(O*N,O*N+N).map((function(e,t){var a,c=(a=e.name,-1!==f.indexOf(a)),r="enhanced-table-checkbox-".concat(t);return Object(F.jsxs)(C.a,{hover:!0,onClick:function(t){return function(e,t){p([t]),n(t)}(0,e.name)},role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[Object(F.jsx)(S.a,{id:r,scope:"row",style:{width:200},children:Object(F.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",width:200,whiteSpace:"nowrap"},children:e.name})}),Object(F.jsx)(S.a,{align:"left",style:{width:200},children:Object(F.jsx)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",width:200,whiteSpace:"nowrap"},children:e.artist})}),Object(F.jsx)(S.a,{align:"left",children:e.album}),Object(F.jsx)(S.a,{align:"right",children:e.protein})]},e.name)})),R>0&&Object(F.jsx)(C.a,{style:{height:33*R},children:Object(F.jsx)(S.a,{colSpan:6})})]})]})}),Object(F.jsx)(P.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:N,page:O,onPageChange:function(e,t){k(t)},onRowsPerPageChange:function(e){J(parseInt(e.target.value,10)),k(0)}})]})})}var G={PaperProps:{style:{maxHeight:224,width:250}}};function q(e,t,n,a,c){return{name:e,calories:t,fat:n,carbs:a,protein:c}}q("Frozen yoghurt",159,6,24,4),q("Ice cream sandwich",237,9,37,4.3),q("Eclair",262,16,24,6),q("Cupcake",305,3.7,67,4.3),q("Gingerbread",356,16,49,3.9);var z=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=c.a.useState(""),i=Object(l.a)(r,2),x=i[0],g=i[1],v=c.a.useState([]),w=Object(l.a)(v,2),S=w[0],y=w[1],k=c.a.useState([]),P=Object(l.a)(k,2),C=P[0],A=P[1],E=c.a.useState([]),I=Object(l.a)(E,2),N=I[0],B=I[1];c.a.useEffect((function(){O.a.parse("predictions.csv",{download:!0,complete:function(e){var t=[];e.data.forEach((function(e,n){0!==n&&t.push({id:e[0],artist:e[1],name:e[2],album:e[3],genres:JSON.parse(e[12].replaceAll("'",'"'))})})),A(t),B([].concat(t)),O.a.parse("dev_tags.csv",{download:!0,complete:function(e){var t=new Set;e.data.forEach((function(e,n){0!==n&&JSON.parse(e[1].replaceAll("'",'"')).forEach((function(e){return t.add(e)}))})),y(Array.from(t))}}),O.a.parse("id_youtube.csv",{download:!0,complete:function(e){e.data.forEach((function(e,n){if(0!==n){var a=t.find((function(t){return t.id===e[0]}));a&&(a.youtube=e[1])}}))}})}})}),[]);var D=function(e){0===e.length?B(C):B(C.filter((function(t){return void 0!==t.genres.find((function(t){return e.includes(t)}))})))};return Object(F.jsx)("div",{className:"App",children:Object(F.jsxs)("header",{className:"App-header",children:[Object(F.jsxs)(b.a,{sx:{m:2,width:500},children:[Object(F.jsx)(u.a,{id:"demo-multiple-checkbox-label",children:"Genres"}),Object(F.jsx)(h.a,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:n,onChange:function(e){a(e.target.value),D(e.target.value)},input:Object(F.jsx)(s.a,{label:"Genres"}),renderValue:function(e){return Object(F.jsx)(p.a,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){return Object(F.jsx)(m.a,{onMouseDown:function(e){e.stopPropagation()},label:e,onDelete:function(){return function(e){var t=Object(o.a)(n);t.splice(t.indexOf(e),1),a(t),D(t)}(e)}},e)}))})},MenuProps:G,children:S.map((function(e){return Object(F.jsxs)(d.a,{disableRipple:!0,value:e,children:[Object(F.jsx)(f.a,{checked:n.indexOf(e)>-1}),Object(F.jsx)(j.a,{primary:e})]},e)}))})]}),Object(F.jsx)(R,{cellClick:function(e){var t=C.find((function(t){return t.name===e}));g(t.youtube)},rows:N},N.length),Object(F.jsx)("iframe",{id:"player",width:"640",height:"250",src:"http://www.youtube.com/embed/".concat(x.substr(32),"?enablejsapi=1&origin=http://example.com")})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(z,{})}),document.getElementById("root")),L()}},[[124,1,2]]]);
//# sourceMappingURL=main.651a2262.chunk.js.map