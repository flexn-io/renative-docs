"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[9836],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=i,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6502:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={id:"tvos",title:"tvOS Platform",sidebar_label:"tvOS",original_id:"tvos"},p=void 0,s={unversionedId:"platforms/tvos",id:"platforms/tvos",isDocsHomePage:!1,title:"tvOS Platform",description:"Overview",source:"@site/docs/platforms/tvos.md",sourceDirName:"platforms",slug:"/platforms/tvos",permalink:"/renative-website/docs/platforms/tvos",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/tvos.md",tags:[],version:"current",frontMatter:{id:"tvos",title:"tvOS Platform",sidebar_label:"tvOS",original_id:"tvos"},sidebar:"tutorialSidebar",previous:{title:"Tizen Watch",permalink:"/renative-website/docs/platforms/tizenwatch"},next:{title:"Web",permalink:"/renative-website/docs/platforms/web"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"File Extension Support",id:"file-extension-support",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Project Configuration",id:"project-configuration",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Advanced",id:"advanced",children:[],level:2},{value:"App Config",id:"app-config",children:[],level:2}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Windows-n/a-lightgrey.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Linux-n/a-lightgrey.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/HostMode-n/a-lightgrey.svg"})))),(0,a.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_tvos.gif",height:"250"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Latest swift based Xcode project"),(0,a.kt)("li",{parentName:"ul"},"Cocoapods Workspace ready"),(0,a.kt)("li",{parentName:"ul"},"Swift 4.1 Support")),(0,a.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,a.kt)("p",null,"Extenstions are defined via engines. Engines with tvos support: "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cocoapods.org"},"CocoaPods")," ",(0,a.kt)("inlineCode",{parentName:"li"},"1.5.3")," or newer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Xcode")," for iOS development")),(0,a.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Swift"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"4.1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Deployment Target"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"11.4"))))),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv start\nrnv run -p tvos\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("p",null,"Clean and Re-build platform project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tvos -r\n")),(0,a.kt)("p",null,"Launch with specific tvOS simulator"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'rnv run -p tvos -t "Apple TV 4K"\n')),(0,a.kt)("h2",{id:"app-config"},"App Config"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/renative-website/docs/api/config#ios-props"},"see: iOS based config")))}d.isMDXComponent=!0}}]);