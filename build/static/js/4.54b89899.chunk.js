(this["webpackJsonpmelalie-graph"]=this["webpackJsonpmelalie-graph"]||[]).push([[4],{672:function(e,t,n){"use strict";var r=n(3),o=n(12),i=n(5),a=n(124),s=n(96),f=n(60);function c(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function p(e){return e instanceof c(e).Element||e instanceof Element}function u(e){return e instanceof c(e).HTMLElement||e instanceof HTMLElement}function l(e){return"undefined"!==typeof ShadowRoot&&(e instanceof c(e).ShadowRoot||e instanceof ShadowRoot)}var d=Math.max,m=Math.min,h=Math.round;function v(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(u(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=h(n.width)/a||1),i>0&&(o=h(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function b(e){var t=c(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function y(e){return e?(e.nodeName||"").toLowerCase():null}function g(e){return((p(e)?e.ownerDocument:e.document)||window.document).documentElement}function w(e){return v(g(e)).left+b(e).scrollLeft}function x(e){return c(e).getComputedStyle(e)}function O(e){var t=x(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function j(e,t,n){void 0===n&&(n=!1);var r=u(t),o=u(t)&&function(e){var t=e.getBoundingClientRect(),n=h(t.width)/e.offsetWidth||1,r=h(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=g(t),a=v(e,o),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==y(t)||O(i))&&(s=function(e){return e!==c(e)&&u(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:b(e);var t}(t)),u(t)?((f=v(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=w(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function E(e){var t=v(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function P(e){return"html"===y(e)?e:e.assignedSlot||e.parentNode||(l(e)?e.host:null)||g(e)}function D(e){return["html","body","#document"].indexOf(y(e))>=0?e.ownerDocument.body:u(e)&&O(e)?e:D(P(e))}function R(e,t){var n;void 0===t&&(t=[]);var r=D(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=c(r),a=o?[i].concat(i.visualViewport||[],O(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(R(P(a)))}function A(e){return["table","td","th"].indexOf(y(e))>=0}function k(e){return u(e)&&"fixed"!==x(e).position?e.offsetParent:null}function M(e){for(var t=c(e),n=k(e);n&&A(n)&&"static"===x(n).position;)n=k(n);return n&&("html"===y(n)||"body"===y(n)&&"static"===x(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&u(e)&&"fixed"===x(e).position)return null;var n=P(e);for(l(n)&&(n=n.host);u(n)&&["html","body"].indexOf(y(n))<0;){var r=x(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var L="top",W="bottom",B="right",T="left",H="auto",S=[L,W,B,T],C="start",q="end",V="viewport",N="popper",I=S.reduce((function(e,t){return e.concat([t+"-"+C,t+"-"+q])}),[]),U=[].concat(S,[H]).reduce((function(e,t){return e.concat([t,t+"-"+C,t+"-"+q])}),[]),F=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function z(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function _(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var J={placement:"bottom",modifiers:[],strategy:"absolute"};function X(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function Y(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?J:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},J,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:p(e)?R(e):e.contextElement?R(e.contextElement):[],popper:R(t)};var u=function(e){var t=z(e);return F.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(X(t,n)){o.rects={reference:j(t,M(n),"fixed"===o.options.strategy),popper:E(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,p=void 0===c?{}:c,u=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:u,instance:f})||o)}else o.reset=!1,r=-1}}},update:_((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!X(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var G={passive:!0};function K(e){return e.split("-")[0]}function Q(e){return e.split("-")[1]}function Z(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function $(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?K(o):null,a=o?Q(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case L:t={x:s,y:n.y-r.height};break;case W:t={x:s,y:n.y+n.height};break;case B:t={x:n.x+n.width,y:f};break;case T:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?Z(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case C:t[c]=t[c]-(n[p]/2-r[p]/2);break;case q:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};function te(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,p=e.adaptive,u=e.roundOffsets,l=e.isFixed,d=a.x,m=void 0===d?0:d,v=a.y,b=void 0===v?0:v,y="function"===typeof u?u({x:m,y:b}):{x:m,y:b};m=y.x,b=y.y;var w=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),j=T,E=L,P=window;if(p){var D=M(n),R="clientHeight",A="clientWidth";if(D===c(n)&&"static"!==x(D=g(n)).position&&"absolute"===s&&(R="scrollHeight",A="scrollWidth"),o===L||(o===T||o===B)&&i===q)E=W,b-=(l&&D===P&&P.visualViewport?P.visualViewport.height:D[R])-r.height,b*=f?1:-1;if(o===T||(o===L||o===W)&&i===q)j=B,m-=(l&&D===P&&P.visualViewport?P.visualViewport.width:D[A])-r.width,m*=f?1:-1}var k,H=Object.assign({position:s},p&&ee),S=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:h(t*r)/r||0,y:h(n*r)/r||0}}({x:m,y:b}):{x:m,y:b};return m=S.x,b=S.y,f?Object.assign({},H,((k={})[E]=O?"0":"",k[j]=w?"0":"",k.transform=(P.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",k)):Object.assign({},H,((t={})[E]=O?b+"px":"",t[j]=w?m+"px":"",t.transform="",t))}var ne={left:"right",right:"left",bottom:"top",top:"bottom"};function re(e){return e.replace(/left|right|bottom|top/g,(function(e){return ne[e]}))}var oe={start:"end",end:"start"};function ie(e){return e.replace(/start|end/g,(function(e){return oe[e]}))}function ae(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&l(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function fe(e,t){return t===V?se(function(e){var t=c(e),n=g(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+w(e),y:s}}(e)):p(t)?function(e){var t=v(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):se(function(e){var t,n=g(e),r=b(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=d(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=d(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+w(e),f=-r.scrollTop;return"rtl"===x(o||n).direction&&(s+=d(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(g(e)))}function ce(e,t,n){var r="clippingParents"===t?function(e){var t=R(P(e)),n=["absolute","fixed"].indexOf(x(e).position)>=0&&u(e)?M(e):e;return p(n)?t.filter((function(e){return p(e)&&ae(e,n)&&"body"!==y(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=fe(e,n);return t.top=d(r.top,t.top),t.right=m(r.right,t.right),t.bottom=m(r.bottom,t.bottom),t.left=d(r.left,t.left),t}),fe(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function pe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ue(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function le(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,f=void 0===s?V:s,c=n.elementContext,u=void 0===c?N:c,l=n.altBoundary,d=void 0!==l&&l,m=n.padding,h=void 0===m?0:m,b=pe("number"!==typeof h?h:ue(h,S)),y=u===N?"reference":N,w=e.rects.popper,x=e.elements[d?y:u],O=ce(p(x)?x:x.contextElement||g(e.elements.popper),a,f),j=v(e.elements.reference),E=$({reference:j,element:w,strategy:"absolute",placement:o}),P=se(Object.assign({},w,E)),D=u===N?P:j,R={top:O.top-D.top+b.top,bottom:D.bottom-O.bottom+b.bottom,left:O.left-D.left+b.left,right:D.right-O.right+b.right},A=e.modifiersData.offset;if(u===N&&A){var k=A[o];Object.keys(R).forEach((function(e){var t=[B,W].indexOf(e)>=0?1:-1,n=[L,W].indexOf(e)>=0?"y":"x";R[e]+=k[n]*t}))}return R}function de(e,t,n){return d(e,m(t,n))}function me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function he(e){return[L,B,W,T].some((function(t){return e[t]>=0}))}var ve=Y({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=c(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,G)})),s&&f.addEventListener("resize",n.update,G),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,G)})),s&&f.removeEventListener("resize",n.update,G)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=$({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:K(t.placement),variation:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];u(o)&&y(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});u(r)&&y(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=U.reduce((function(e,n){return e[n]=function(e,t,n){var r=K(e),o=[T,L].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[T,B].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,b=K(v),y=f||(b===v||!m?[re(v)]:function(e){if(K(e)===H)return[];var t=re(e);return[ie(e),t,ie(t)]}(v)),g=[v].concat(y).reduce((function(e,n){return e.concat(K(n)===H?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?U:f,p=Q(r),u=p?s?I:I.filter((function(e){return Q(e)===p})):S,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=le(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[K(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=g[0],P=0;P<g.length;P++){var D=g[P],R=K(D),A=Q(D)===C,k=[L,W].indexOf(R)>=0,M=k?"width":"height",q=le(t,{placement:D,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),V=k?A?B:T:A?W:L;w[M]>x[M]&&(V=re(V));var N=re(V),F=[];if(i&&F.push(q[R]<=0),s&&F.push(q[V]<=0,q[N]<=0),F.every((function(e){return e}))){E=D,j=!1;break}O.set(D,F)}if(j)for(var z=function(e){var t=g.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},_=m?3:1;_>0;_--){if("break"===z(_))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,p=n.altBoundary,u=n.padding,l=n.tether,h=void 0===l||l,v=n.tetherOffset,b=void 0===v?0:v,y=le(t,{boundary:f,rootBoundary:c,padding:u,altBoundary:p}),g=K(t.placement),w=Q(t.placement),x=!w,O=Z(g),j="x"===O?"y":"x",P=t.modifiersData.popperOffsets,D=t.rects.reference,R=t.rects.popper,A="function"===typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,k="number"===typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(P){if(i){var q,V="y"===O?L:T,N="y"===O?W:B,I="y"===O?"height":"width",U=P[O],F=U+y[V],z=U-y[N],_=h?-R[I]/2:0,J=w===C?D[I]:R[I],X=w===C?-R[I]:-D[I],Y=t.elements.arrow,G=h&&Y?E(Y):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[V],te=$[N],ne=de(0,D[I],G[I]),re=x?D[I]/2-_-ne-ee-k.mainAxis:J-ne-ee-k.mainAxis,oe=x?-D[I]/2+_+ne+te+k.mainAxis:X+ne+te+k.mainAxis,ie=t.elements.arrow&&M(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(q=null==H?void 0:H[O])?q:0,fe=U+oe-se,ce=de(h?m(F,U+re-se-ae):F,U,h?d(z,fe):z);P[O]=ce,S[O]=ce-U}if(s){var pe,ue="x"===O?L:T,me="x"===O?W:B,he=P[j],ve="y"===j?"height":"width",be=he+y[ue],ye=he-y[me],ge=-1!==[L,T].indexOf(g),we=null!=(pe=null==H?void 0:H[j])?pe:0,xe=ge?be:he-D[ve]-R[ve]-we+k.altAxis,Oe=ge?he+D[ve]+R[ve]-we-k.altAxis:ye,je=h&&ge?function(e,t,n){var r=de(e,t,n);return r>n?n:r}(xe,he,Oe):de(h?xe:be,he,h?Oe:ye);P[j]=je,S[j]=je-he}t.modifiersData[r]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=K(n.placement),f=Z(s),c=[T,B].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return pe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ue(e,S))}(o.padding,n),u=E(i),l="y"===f?L:T,d="y"===f?W:B,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=M(i),b=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,g=p[l],w=b-u[c]-p[d],x=b/2-u[c]/2+y,O=de(g,x,w),j=f;n.modifiersData[r]=((t={})[j]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&ae(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=le(t,{elementContext:"reference"}),s=le(t,{altBoundary:!0}),f=me(a,r),c=me(s,o,i),p=he(f),u=he(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}),be=n(1),ye=n(489),ge=n(2),we=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],xe=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Oe(e){return"function"===typeof e?e():e}var je={},Ee=be.forwardRef((function(e,t){var n=e.anchorEl,f=e.children,c=e.direction,p=e.disablePortal,u=e.modifiers,l=e.open,d=e.placement,m=e.popperOptions,h=e.popperRef,v=e.TransitionProps,b=Object(i.a)(e,we),y=be.useRef(null),g=Object(a.a)(y,t),w=be.useRef(null),x=Object(a.a)(w,h),O=be.useRef(x);Object(s.a)((function(){O.current=x}),[x]),be.useImperativeHandle(h,(function(){return w.current}),[]);var j=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(d,c),E=be.useState(j),P=Object(o.a)(E,2),D=P[0],R=P[1];be.useEffect((function(){w.current&&w.current.forceUpdate()})),Object(s.a)((function(){if(n&&l){Oe(n);var e=[{name:"preventOverflow",options:{altBoundary:p}},{name:"flip",options:{altBoundary:p}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;R(t.placement)}}];null!=u&&(e=e.concat(u)),m&&null!=m.modifiers&&(e=e.concat(m.modifiers));var t=ve(Oe(n),y.current,Object(r.a)({placement:j},m,{modifiers:e}));return O.current(t),function(){t.destroy(),O.current(null)}}}),[n,p,u,l,m,j]);var A={placement:D};return null!==v&&(A.TransitionProps=v),Object(ge.jsx)("div",Object(r.a)({ref:g,role:"tooltip"},b,{children:"function"===typeof f?f(A):f}))})),Pe=be.forwardRef((function(e,t){var n=e.anchorEl,a=e.children,s=e.container,c=e.direction,p=void 0===c?"ltr":c,u=e.disablePortal,l=void 0!==u&&u,d=e.keepMounted,m=void 0!==d&&d,h=e.modifiers,v=e.open,b=e.placement,y=void 0===b?"bottom":b,g=e.popperOptions,w=void 0===g?je:g,x=e.popperRef,O=e.style,j=e.transition,E=void 0!==j&&j,P=Object(i.a)(e,xe),D=be.useState(!0),R=Object(o.a)(D,2),A=R[0],k=R[1];if(!m&&!v&&(!E||A))return null;var M=s||(n?Object(f.a)(Oe(n)).body:void 0);return Object(ge.jsx)(ye.a,{disablePortal:l,container:M,children:Object(ge.jsx)(Ee,Object(r.a)({anchorEl:n,direction:p,disablePortal:l,modifiers:h,ref:t,open:E?!A:v,placement:y,popperOptions:w,popperRef:x},P,{style:Object(r.a)({position:"fixed",top:0,left:0,display:v||!m||E&&!A?null:"none"},O),TransitionProps:E?{in:v,onEnter:function(){k(!1)},onExited:function(){k(!0)}}:null,children:a}))})})),De=n(156),Re=n(9),Ae=n(19),ke=Object(Re.a)(Pe,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),Me=be.forwardRef((function(e,t){var n=Object(De.a)(),o=Object(Ae.a)({props:e,name:"MuiPopper"});return Object(ge.jsx)(ke,Object(r.a)({direction:null==n?void 0:n.direction},o,{ref:t}))}));t.a=Me}}]);
//# sourceMappingURL=4.54b89899.chunk.js.map