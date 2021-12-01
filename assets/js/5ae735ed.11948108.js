"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[629],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9073:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"installation",title:"Installation",sidebar_label:"Installation",original_id:"installation"},p=void 0,s={unversionedId:"overview/installation",id:"overview/installation",isDocsHomePage:!1,title:"Installation",description:"Requirements",source:"@site/docs/overview/installation.md",sourceDirName:"overview",slug:"/overview/installation",permalink:"/renative-website/docs/overview/installation",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/overview/installation.md",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",original_id:"installation"},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/renative-website/docs/overview/features"},next:{title:"Migrating react-native",permalink:"/renative-website/docs/overview/migrating_react_native"}},u=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Install ReNative CLI (rnv)",id:"install-renative-cli-rnv",children:[],level:2},{value:"Create new app",id:"create-new-app",children:[],level:2},{value:"Run first app",id:"run-first-app",children:[],level:2},{value:"NPX",id:"npx",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_quickstart.png",width:"50",height:"50"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node")," ",(0,i.kt)("inlineCode",{parentName:"li"},"10.13.0")," or newer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://npmjs.com/"},"NPM")," ",(0,i.kt)("inlineCode",{parentName:"li"},"6.4.1")," or newer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/studio"},"Android Studio")," (if you want to develop for Android)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Xcode")," (if you want to develop for iOS/tvOS)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.tizen.org/ko/development/tizen-studio/configurable-sdk"},"Tizen Studio")," (if you want to develop for Tizen)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://webostv.developer.lge.com/sdk/installation/"},"WebOS SDK")," (if you want to develop for WebOS)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.kaiostech.com"},"KaiOS SDK")," (if you want to develop for KaiOS)")),(0,i.kt)("h2",{id:"install-renative-cli-rnv"},"Install ReNative CLI (rnv)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install rnv -g\n")),(0,i.kt)("h2",{id:"create-new-app"},"Create new app"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("img",{src:"https://renative.org/img/cli_app_create1.gif"})))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rnv new\n")),(0,i.kt)("p",null,"Follow steps in the terminal"),(0,i.kt)("h2",{id:"run-first-app"},"Run first app"),(0,i.kt)("p",null,"Run your first ",(0,i.kt)("inlineCode",{parentName:"p"},"ios")," app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rnv run -p ios\n")),(0,i.kt)("p",null,"Run your first ",(0,i.kt)("inlineCode",{parentName:"p"},"android")," app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rnv run -p android\n")),(0,i.kt)("p",null,"Run your first ",(0,i.kt)("inlineCode",{parentName:"p"},"web")," app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ rnv run -p web\n")),(0,i.kt)("p",null,"... and so on"),(0,i.kt)("p",null,"All app code is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"./src")," directory"),(0,i.kt)("h2",{id:"npx"},"NPX"),(0,i.kt)("p",null,"\u26a0\ufe0f"),(0,i.kt)("p",null,"It is recommended that after initial project setup you start using ",(0,i.kt)("inlineCode",{parentName:"p"},"npx rnv ...")," prefix instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"rnv ...")),(0,i.kt)("p",null,"This ensures that every project uses correct version of ",(0,i.kt)("inlineCode",{parentName:"p"},"rnv")," to avoid potential compatibility issues"),(0,i.kt)("p",null,"make sure you have npx installed globally via ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install npx -g")))}d.isMDXComponent=!0}}]);