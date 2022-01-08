"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[5885],{4841:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var i=n(7462),r=n(3366),o=n(7294),a=n(3905),l=n(6266),s=function(e){var t=e.lightImage,n=e.darkImage,i=e.className,r=e.style,a=e.alt,s=e.width,p=e.height,c=(0,l.Z)().isDarkTheme;return o.createElement("img",{style:r,className:i,src:c?n:t,alt:a,width:s,height:p})},p=["components"],c={id:"apple-silicon",title:"Apple Silicon",sidebar_label:"Apple Silicon",original_id:"apple-silicon"},u=void 0,d={unversionedId:"guides/apple-silicon",id:"guides/apple-silicon",title:"Apple Silicon",description:"Overview",source:"@site/docs/guides/apple-silicon.md",sourceDirName:"guides",slug:"/guides/apple-silicon",permalink:"/docs/guides/apple-silicon",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/apple-silicon.md",tags:[],version:"current",frontMatter:{id:"apple-silicon",title:"Apple Silicon",sidebar_label:"Apple Silicon",original_id:"apple-silicon"},sidebar:"docsSidebar",previous:{title:"Analytics",permalink:"/docs/guides/analytics"},next:{title:"Build Hooks",permalink:"/docs/guides/build_hooks"}},m=[{value:"Overview",id:"overview",children:[],level:2},{value:"AndroidTV, Android Wear",id:"androidtv-android-wear",children:[],level:2},{value:"Tizen",id:"tizen",children:[],level:2},{value:"WebOS",id:"webos",children:[],level:2}],h={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(s,{className:"header-image",lightImage:"/img/light/apple.png",darkImage:"/img/dark/apple.png",width:"40",height:"50",mdxType:"Image"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"While ReNative works perfectly well on Apple's new ARM CPUs you should be aware of some limitations given by the current state of M1 support by the various SDKs that the each indivitual platforms use. Platforms not specified here are supposed to be working so if you encounter any issues please raise it on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/renative-org/renative"},"GitHub"),"."),(0,a.kt)("h2",{id:"androidtv-android-wear"},"AndroidTV, Android Wear"),(0,a.kt)("p",null,"Running apps on physical devices or just building/exporting them are expected to work. Doing so you're only using ",(0,a.kt)("inlineCode",{parentName:"p"},"adb")," and that has no dependencies on x86 CPUs."),(0,a.kt)("p",null,"For emulators, Google does not provide ",(0,a.kt)("inlineCode",{parentName:"p"},"arm64")," images for TV or wear at the time of writing this article. You can always check Android Studio's AVD Manager if you can download ",(0,a.kt)("inlineCode",{parentName:"p"},"arm64")," images for something other than phone. The phone image selection looks something like this. "),(0,a.kt)("img",{src:"/img/android-studio-arch.png"}),(0,a.kt)("h2",{id:"tizen"},"Tizen"),(0,a.kt)("p",null,"Running apps on physical devices or just building/exporting them are expected to work. Doing so you're only using ",(0,a.kt)("inlineCode",{parentName:"p"},"sdb")," and that has no dependencies on x86 CPUs."),(0,a.kt)("p",null,"Tizen emulators require ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/intel/haxm"},"Intel HAXM")," installed but that's not possible to do on Apple Silicon."),(0,a.kt)("h2",{id:"webos"},"WebOS"),(0,a.kt)("p",null,"Running apps on physical devices or just building/exporting them are expected to work."),(0,a.kt)("p",null,"WebOS emulators require VirtualBox to be installed but that's not possible to do on Apple Silicon. ",(0,a.kt)("a",{parentName:"p",href:"https://discussions.apple.com/thread/253292128"},"More Info")))}g.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);