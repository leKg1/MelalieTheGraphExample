(this["webpackJsonpmelalie-graph"]=this["webpackJsonpmelalie-graph"]||[]).push([[22],{509:function(e,t,n){"use strict";var a=n(540);t.a=a.a},513:function(e,t,n){"use strict";var a=n(1);t.a=function(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},540:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(12),r=n(1);function i(e){var t=e.controlled,n=e.default,i=(e.name,e.state,r.useRef(void 0!==t).current),c=r.useState(n),o=Object(a.a)(c,2),l=o[0],s=o[1];return[i?t:l,r.useCallback((function(e){i||s(e)}),[])]}},655:function(e,t,n){"use strict";var a=n(516);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(517)),i=n(2),c=(0,r.default)((0,i.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=c},656:function(e,t,n){"use strict";var a=n(516);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(517)),i=n(2),c=(0,r.default)((0,i.jsx)("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");t.default=c},657:function(e,t,n){"use strict";var a=n(516);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(517)),i=n(2),c=(0,r.default)((0,i.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"}),"MoveToInbox");t.default=c},730:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(1),i=n.n(r),c=n(12),o=n(451),l=n(467),s=n(617),u=n(2);var j=function(){var e=i.a.useState(null),t=Object(c.a)(e,2),n=t[0],a=t[1];function r(){a(null)}return Object(u.jsxs)("div",{children:[Object(u.jsx)(o.a,{variant:"outlined","aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},children:"Open Menu"}),Object(u.jsxs)(l.a,{id:"simple-menu",anchorEl:n,open:Boolean(n),onClose:r,children:[Object(u.jsx)(s.a,{onClick:r,children:"Profile"}),Object(u.jsx)(s.a,{onClick:r,children:"My account"}),Object(u.jsx)(s.a,{onClick:r,children:"Logout"})]})]})},d=n(43),b=n(500),m=n(734),h=n(715),x=Object(d.a)("div")((function(e){return{width:"100%",maxWidth:360,backgroundColor:e.theme.palette.background.paper}})),O=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function p(){var e=i.a.useState(null),t=Object(c.a)(e,2),n=t[0],a=t[1],r=i.a.useState(1),o=Object(c.a)(r,2),j=o[0],d=o[1];return Object(u.jsxs)(x,{children:[Object(u.jsx)(b.a,{component:"nav","aria-label":"Device settings",children:Object(u.jsx)(m.a,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"When device is locked",onClick:function(e){a(e.currentTarget)},children:Object(u.jsx)(h.a,{primary:"When device is locked",secondary:O[j]})})}),Object(u.jsx)(l.a,{id:"lock-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){a(null)},children:O.map((function(e,t){return Object(u.jsx)(s.a,{disabled:0===t,selected:t===j,onClick:function(e){return function(e,t){d(t),a(null)}(0,t)},children:e},e)}))})]})}var f=n(5),v=n(3),g=n(7),k=n(436),y=n(9),C=n(19),M=n(583),S=n(170),I=["className"],w=Object(y.a)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.theme,n=e.ownerState;return Object(v.a)({minWidth:56,color:(t.vars||t).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===n.alignItems&&{marginTop:8})})),z=r.forwardRef((function(e,t){var n=Object(C.a)({props:e,name:"MuiListItemIcon"}),a=n.className,i=Object(f.a)(n,I),c=r.useContext(S.a),o=Object(v.a)({},n,{alignItems:c.alignItems}),l=function(e){var t=e.alignItems,n=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return Object(k.a)(a,M.b,n)}(o);return Object(u.jsx)(w,Object(v.a)({className:Object(g.a)(l.root,a),ownerState:o,ref:t},i))})),H=n(657),L=n.n(H),P=n(656),T=n.n(P),_=n(655),B=n.n(_),E=Object(d.a)(s.a)((function(e){var t=e.theme;return{"&:focus":{backgroundColor:t.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:t.palette.common.white}}}}));var N=function(){var e=i.a.useState(null),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(o.a,{"aria-owns":n?"simple-menu":void 0,"aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){a(e.currentTarget)},children:"Open Menu"}),Object(u.jsxs)(l.a,{id:"simple-menu",anchorEl:n,open:Boolean(n),onClose:function(){a(null)},elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},sx:{border:"1px solid #d3d4d5"},children:[Object(u.jsxs)(E,{children:[Object(u.jsx)(z,{children:Object(u.jsx)(B.a,{})}),Object(u.jsx)(h.a,{primary:"Sent mail"})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)(z,{children:Object(u.jsx)(T.a,{})}),Object(u.jsx)(h.a,{primary:"Drafts"})]}),Object(u.jsxs)(E,{children:[Object(u.jsx)(z,{children:Object(u.jsx)(L.a,{})}),Object(u.jsx)(h.a,{primary:"Inbox"})]})]})]})},D=n(501),R=n(263),V=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];var W=function(){var e=i.a.useState(null),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Boolean(n);function o(){a(null)}return Object(u.jsxs)("div",{children:[Object(u.jsx)(D.a,{"aria-label":"More","aria-owns":r?"long-menu":void 0,"aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},children:Object(u.jsx)(R.a,{children:"more_vert"})}),Object(u.jsx)(l.a,{id:"long-menu",anchorEl:n,open:r,onClose:o,PaperProps:{style:{maxHeight:216,width:200}},children:V.map((function(e){return Object(u.jsx)(s.a,{selected:"Pyxis"===e,onClick:o,children:e},e)}))})]})},A=n(69),F=n(161),J=Object(d.a)("div")((function(e){var t,n=e.theme;return t={margin:"30px"},Object(a.a)(t,n.breakpoints.down("sm"),{margin:"16px"}),Object(a.a)(t,"& .breadcrumb",Object(a.a)({marginBottom:"30px"},n.breakpoints.down("sm"),{marginBottom:"16px"})),t}));t.default=function(){return Object(u.jsxs)(J,{children:[Object(u.jsx)("div",{className:"breadcrumb",children:Object(u.jsx)(A.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Menu"}]})}),Object(u.jsx)(A.h,{title:"simple menu",children:Object(u.jsx)(j,{})}),Object(u.jsx)(F.a,{py:"12px"}),Object(u.jsx)(A.h,{title:"selected menu",children:Object(u.jsx)(p,{})}),Object(u.jsx)(F.a,{py:"12px"}),Object(u.jsx)(A.h,{title:"customized menu",children:Object(u.jsx)(N,{})}),Object(u.jsx)(F.a,{py:"12px"}),Object(u.jsx)(A.h,{title:"max height menu",children:Object(u.jsx)(W,{})})]})}}}]);
//# sourceMappingURL=22.3e07078d.chunk.js.map