(this["webpackJsonpmelalie-graph"]=this["webpackJsonpmelalie-graph"]||[]).push([[24],{658:function(t,e,a){"use strict";var o=a(17),i=a(8),r=(a(1),a(70)),s=a(191),n=a(2);e.a=function(t){var e=t.height,a=t.color,l=void 0===a?[]:a,c=Object(r.a)(),h={grid:{top:"10%",bottom:"10%",left:"5%",right:"5%"},legend:{itemGap:20,icon:"circle",textStyle:{color:c.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:c.palette.text.secondary,fontSize:14,fontFamily:"roboto"}},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:c.palette.text.secondary,opacity:.15}},axisLabel:{color:c.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{data:[30,40,20,50,40,80,90],type:"line",stack:"This month",name:"This month",smooth:!0,symbolSize:4,lineStyle:{width:4}},{data:[20,50,15,50,30,70,95],type:"line",stack:"Last month",name:"Last month",smooth:!0,symbolSize:4,lineStyle:{width:4}}]};return Object(n.jsx)(s.a,{style:{height:e},option:Object(i.a)(Object(i.a)({},h),{},{color:Object(o.a)(l)})})}},659:function(t,e,a){"use strict";var o=a(17),i=a(8),r=(a(1),a(191)),s=a(2),n={grid:{left:0,top:0,right:0,bottom:0},legend:{},tooltip:{},xAxis:{show:!1,type:"category",showGrid:!1,boundaryGap:!1},yAxis:{show:!1,type:"value",splitLine:{show:!1}},series:[{data:[25,18,20,30,40,43],type:"line",areaStyle:{},smooth:!0}]};e.a=function(t){var e=t.height,a=t.color;return Object(s.jsx)(r.a,{style:{height:e},option:Object(i.a)(Object(i.a)({},n),{},{color:Object(o.a)(a)})})}},660:function(t,e,a){"use strict";var o=a(17),i=a(8),r=(a(1),a(70)),s=a(191),n=a(2);e.a=function(t){var e=t.height,a=t.color,l=void 0===a?[]:a,c=Object(r.a)(),h={legend:{show:!0,itemGap:20,icon:"circle",bottom:0,textStyle:{color:c.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Traffic Rate",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:c.palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"normal"},formatter:"{b} \n{c} ({d}%)"}},labelLine:{normal:{show:!1}},data:[{value:65,name:"Google"},{value:20,name:"Facebook"},{value:15,name:"Others"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return Object(n.jsx)(s.a,{style:{height:e},option:Object(i.a)(Object(i.a)({},h),{},{color:Object(o.a)(l)})})}},661:function(t,e,a){"use strict";var o=a(8),i=(a(1),a(70)),r=a(191),s=a(2);e.a=function(t){var e=t.height,a=(t.color,Object(i.a)()),n={grid:{top:"10%",bottom:"10%",right:"5%"},legend:{show:!1},color:["#223388","rgba(34, 51, 136, 0.8)"],barGap:0,barMaxWidth:"64px",tooltip:{},dataset:{source:[["Month","Website","App"],["Jan",2200,1200],["Feb",800,500],["Mar",700,1350],["Apr",1500,1250],["May",2450,450],["June",1700,1250]]},xAxis:{type:"category",axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{color:a.palette.text.secondary,opacity:.15}},axisLabel:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},series:[{type:"bar"},{type:"bar"}]};return Object(s.jsx)(r.a,{style:{height:e},option:Object(o.a)({},n)})}},809:function(t,e,a){"use strict";a.r(e);var o=a(6),i=(a(1),a(658)),r=a(659),s=a(48),n=a(70),l=a(186),c=a(660),h=a(661),p=a(198),b=a(197),x=a(2),m=Object(s.a)("div")((function(t){var e,a=t.theme;return e={margin:"30px"},Object(o.a)(e,a.breakpoints.down("sm"),{margin:"16px"}),Object(o.a)(e,"& .breadcrumb",Object(o.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),e}));e.default=function(){var t=Object(n.a)();return Object(x.jsxs)(m,{children:[Object(x.jsx)("div",{className:"breadcrumb",children:Object(x.jsx)(b.a,{routeSegments:[{name:"Charts",path:"/charts"},{name:"Echarts"}]})}),Object(x.jsx)(p.a,{title:"Doughnut Chart",children:Object(x.jsx)(c.a,{height:"350px",color:[t.palette.primary.dark,t.palette.primary.main,t.palette.primary.light]})}),Object(x.jsx)(l.a,{sx:{py:"12px"}}),Object(x.jsx)(p.a,{title:"Line Chart",children:Object(x.jsx)(i.a,{height:"350px",color:[t.palette.primary.main,t.palette.primary.light]})}),Object(x.jsx)(l.a,{sx:{py:"12px"}}),Object(x.jsx)(p.a,{title:"Comparison Chart",children:Object(x.jsx)(h.a,{height:"350px",color:[t.palette.primary.dark,t.palette.primary.light]})}),Object(x.jsx)(l.a,{sx:{py:"12px"}}),Object(x.jsx)(p.a,{title:"Area Chart",children:Object(x.jsx)(r.a,{height:"350px",color:[t.palette.primary.main]})})]})}}}]);