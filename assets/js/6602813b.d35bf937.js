"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69623],{15680:(e,r,t)=>{t.d(r,{xA:()=>h,yg:()=>u});var a=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},h=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),g=c(t),d=n,u=g["".concat(p,".").concat(d)]||g[d]||s[d]||i;return t?a.createElement(u,l(l({ref:r},h),{},{components:t})):a.createElement(u,l({ref:r},h))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[g]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66550:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(58168),n=(t(96540),t(15680));const i={id:"BarData",title:"Interface: BarData",sidebar_label:"BarData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/BarData",id:"version-3.8/api/interfaces/BarData",title:"Interface: BarData",description:"Structure describing a single item of data for bar series",source:"@site/versioned_docs/version-3.8/api/interfaces/BarData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/BarData",permalink:"/lightweight-charts/docs/3.8/api/interfaces/BarData",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"BarData",title:"Interface: BarData",sidebar_label:"BarData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"time",id:"time",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"open",id:"open",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"high",id:"high",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"low",id:"low",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"close",id:"close",level:3},{value:"Inherited from",id:"inherited-from-4",level:4}],h={toc:c},g="wrapper";function s(e){let{components:r,...t}=e;return(0,n.yg)(g,(0,a.A)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Structure describing a single item of data for bar series"),(0,n.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData"},(0,n.yg)("inlineCode",{parentName:"a"},"OhlcData"))),(0,n.yg)("p",{parentName:"li"},"\u21b3 ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"BarData"))))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"color"},"color"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.yg)("strong",{parentName:"p"},"color"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"string")),(0,n.yg)("p",null,"Optional color value for certain data item. If missed, color from options is used"),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"time"},"time"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"time"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time"))),(0,n.yg)("p",null,"The bar time."),(0,n.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData#time"},"time")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"open"},"open"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"open"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The open price."),(0,n.yg)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData#open"},"open")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"high"},"high"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"high"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The high price."),(0,n.yg)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData#high"},"high")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"low"},"low"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"low"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The low price."),(0,n.yg)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData#low"},"low")),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"close"},"close"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"close"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"number")),(0,n.yg)("p",null,"The close price."),(0,n.yg)("h4",{id:"inherited-from-4"},"Inherited from"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData"},"OhlcData"),".",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/OhlcData#close"},"close")))}s.isMDXComponent=!0}}]);