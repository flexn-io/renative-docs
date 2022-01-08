"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[4250],{2383:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],l={id:"kaios",title:"KaiOS Platform",sidebar_label:"KaiOS",original_id:"kaios"},s=void 0,p={unversionedId:"platforms/kaios",id:"platforms/kaios",title:"KaiOS Platform",description:"File Extension Support",source:"@site/docs/platforms/kaios.md",sourceDirName:"platforms",slug:"/platforms/kaios",permalink:"/docs/platforms/kaios",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/kaios.md",tags:[],version:"current",frontMatter:{id:"kaios",title:"KaiOS Platform",sidebar_label:"KaiOS",original_id:"kaios"},sidebar:"docsSidebar",previous:{title:"iOS",permalink:"/docs/platforms/ios"},next:{title:"Linux",permalink:"/docs/platforms/linux"}},u=[{value:"File Extension Support",id:"file-extension-support",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"App Config",id:"app-config",children:[],level:2}],c={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,o.kt)("img",{src:"https://img.shields.io/badge/Windows-yes-brightgreen.svg"}),(0,o.kt)("img",{src:"https://img.shields.io/badge/Linux-yes-brightgreen.svg"}),(0,o.kt)("img",{src:"https://img.shields.io/badge/HostMode-yes-brightgreen.svg"})))),(0,o.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_kaios.gif",height:"250"}),(0,o.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,o.kt)("p",null,"Extenstions are defined via engines. Engines with kaios support:"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.kaiostech.com/simulator"},"KaiOSrt")," for emulator")),(0,o.kt)("p",null,"After installation you can launch it via Applications:"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,(0,o.kt)("img",{src:"https://renative.org/img/kaios1.png"})))),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"Run on Simulator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv run -p kaios\n")),(0,o.kt)("p",null,"Run on Device"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv run -p kaios -d\n")),(0,o.kt)("p",null,"Run in Browser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv run -p kaios --hosted\n")),(0,o.kt)("h2",{id:"app-config"},"App Config"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/json-config"},"see: Web based config")))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,d=f["".concat(s,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);