"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8870],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3528:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={id:"tizenwatch",title:"Tizen Watch Platform",sidebar_label:"Tizen Watch",original_id:"tizenwatch"},c=void 0,p={unversionedId:"platforms/tizenwatch",id:"platforms/tizenwatch",isDocsHomePage:!1,title:"Tizen Watch Platform",description:"Overview",source:"@site/docs/platforms/tizenwatch.md",sourceDirName:"platforms",slug:"/platforms/tizenwatch",permalink:"/renative-website/docs/platforms/tizenwatch",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/tizenwatch.md",tags:[],version:"current",frontMatter:{id:"tizenwatch",title:"Tizen Watch Platform",sidebar_label:"Tizen Watch",original_id:"tizenwatch"},sidebar:"tutorialSidebar",previous:{title:"Tizen Mobile",permalink:"/renative-website/docs/platforms/tizenmobile"},next:{title:"tvOS",permalink:"/renative-website/docs/platforms/tvos"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"File Extension Support",id:"file-extension-support",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Project Configuration",id:"project-configuration",children:[],level:2},{value:"Emulator",id:"emulator",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Advanced",id:"advanced",children:[],level:2},{value:"App Config",id:"app-config",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Windows-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Linux-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/HostMode-yes-brightgreen.svg"})))),(0,a.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_tizenwatch.gif",height:"250"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Latest Tizen project"),(0,a.kt)("li",{parentName:"ul"},"Support for Tizen 5.0")),(0,a.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,a.kt)("p",null,"Extenstions are defined via engines. Engines with tizenwatch support: "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.tizen.org/ko/development/tizen-studio/configurable-sdk"},"Tizen SDK")," ",(0,a.kt)("inlineCode",{parentName:"li"},"5.0"))),(0,a.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tizen Studio"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"2.5"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tizen SDK"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"5.0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"react-native-web"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"0.9.9"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Babel Core"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"7.1.2"))))),(0,a.kt)("h2",{id:"emulator"},"Emulator"),(0,a.kt)("p",null,"Make sure you have at least 1 TV VM setup"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("img",{src:"https://renative.org/img/tizenwatch1.png"})))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv target launch -p tizenwatch -t W-5.0-circle-x86\n")),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenwatch\n")),(0,a.kt)("p",null,"Run on Device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenwatch -d\n")),(0,a.kt)("p",null,"Run in Browser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenwatch --hosted\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"Clean and Re-build platform project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenwatch -r\n")),(0,a.kt)("p",null,"Launch with specific Tizen Watch simulator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizenwatch -t W-5.0-circle-x86\n")),(0,a.kt)("h2",{id:"app-config"},"App Config"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/renative-website/docs/api/config"},"see: Web based config")))}d.isMDXComponent=!0}}]);