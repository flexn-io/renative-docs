"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[133],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5103:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={id:"tizenmobile",title:"Tizen Mobile Platform",sidebar_label:"Tizen Mobile",original_id:"tizenmobile"},p=void 0,u={unversionedId:"platforms/tizenmobile",id:"platforms/tizenmobile",isDocsHomePage:!1,title:"Tizen Mobile Platform",description:"Overview",source:"@site/docs/platforms/tizenmobile.md",sourceDirName:"platforms",slug:"/platforms/tizenmobile",permalink:"/renative-website/docs/platforms/tizenmobile",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/tizenmobile.md",tags:[],version:"current",frontMatter:{id:"tizenmobile",title:"Tizen Mobile Platform",sidebar_label:"Tizen Mobile",original_id:"tizenmobile"},sidebar:"tutorialSidebar",previous:{title:"Tizen TV",permalink:"/renative-website/docs/platforms/tizen"},next:{title:"Tizen Watch",permalink:"/renative-website/docs/platforms/tizenwatch"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"File Extension Support",id:"file-extension-support",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Project Configuration",id:"project-configuration",children:[],level:2},{value:"Emulator",id:"emulator",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Advanced",id:"advanced",children:[],level:2},{value:"App Config",id:"app-config",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Windows-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Linux-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/HostMode-yes-brightgreen.svg"})))),(0,a.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_tizenmobile.gif",height:"250"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Latest Tizen project"),(0,a.kt)("li",{parentName:"ul"},"Support for Tizen 5.0, 4.0, 3.0")),(0,a.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,a.kt)("p",null,"Extenstions are defined via engines. Engines with tizenmobile support: "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.tizen.org/ko/development/tizen-studio/configurable-sdk"},"Tizen SDK")," ",(0,a.kt)("inlineCode",{parentName:"li"},"5.0")),(0,a.kt)("li",{parentName:"ul"},"Make sure your CPU supports virtualization. Otherwise Tizen emulator might not start."),(0,a.kt)("li",{parentName:"ul"},"If you are deploying to a TV, follow this guide to set your TV in developer mode ",(0,a.kt)("a",{parentName:"li",href:"https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device"},"Link"))),(0,a.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tizen Studio"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"2.5"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tizen SDK"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"5.0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"react-native-web"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"0.9.9"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Babel Core"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"7.1.2"))))),(0,a.kt)("h2",{id:"emulator"},"Emulator"),(0,a.kt)("p",null,"Make sure you have at least 1 TV VM setup"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("img",{src:"https://renative.org/img/tizen_mobile1.png"})))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv target launch -p tizenmobile -t M-5.0-x86\n")),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("p",null,"Run on Simulator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenmobile\n")),(0,a.kt)("p",null,"Run on Device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenmobile -d\n")),(0,a.kt)("p",null,"Run in Browser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenmobile --hosted\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"Clean and Re-build platform project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenmobile -r\n")),(0,a.kt)("p",null,"Launch with specific Tizen simulator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenmobile -t M-5.0-x86\n")),(0,a.kt)("h2",{id:"app-config"},"App Config"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/renative-website/docs/api/config"},"see: Web based config")))}m.isMDXComponent=!0}}]);