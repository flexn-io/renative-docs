"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[6929],{6458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={},u=void 0,p={unversionedId:"changelog/0.32.0-feat-rnwin-5",id:"changelog/0.32.0-feat-rnwin-5",title:"0.32.0-feat-rnwin-5",description:"v0.32.0-feat-rnwin-5 (2021-8-26)",source:"@site/docs/changelog/0.32.0-feat-rnwin-5.md",sourceDirName:"changelog",slug:"/changelog/0.32.0-feat-rnwin-5",permalink:"/docs/changelog/0.32.0-feat-rnwin-5",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/changelog/0.32.0-feat-rnwin-5.md",tags:[],version:"current",frontMatter:{}},s=[{value:"v0.32.0-feat-rnwin-5 (2021-8-26)",id:"v0320-feat-rnwin-5-2021-8-26",children:[{value:"Fixed",id:"fixed",children:[],level:3},{value:"Added Features",id:"added-features",children:[],level:3},{value:"Breaking Changes",id:"breaking-changes",children:[],level:3}],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"v0320-feat-rnwin-5-2021-8-26"},"v0.32.0-feat-rnwin-5 (2021-8-26)"),(0,r.kt)("h3",{id:"fixed"},"Fixed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fix(platformAssets): Platform assets not getting copied over to the project, because default ones exist fix"),(0,r.kt)("li",{parentName:"ul"},"0.32.0-feat-rnwin-4"),(0,r.kt)("li",{parentName:"ul"},"fix(Logs): Remove console.logs accidentally added by the previous commit"),(0,r.kt)("li",{parentName:"ul"},"improvement(Docs): Updated documentation for configuration properties accepted by RN Windows"),(0,r.kt)("li",{parentName:"ul"},"fix(clean): Fix rnv clean cache command on Windows machines"),(0,r.kt)("li",{parentName:"ul"},"0.32.0-feat-rnwin-3"),(0,r.kt)("li",{parentName:"ul"},"Merge branch 'feat/react-native-windows' of github.com:pavjacko/renative into feat/react-native-windows"),(0,r.kt)("li",{parentName:"ul"},"fix(RN Windows): Fix namespace being assigned a title with spaces in between"),(0,r.kt)("li",{parentName:"ul"},"0.32.0-feat-rnwin-2"),(0,r.kt)("li",{parentName:"ul"},"fix(RN Windows): Fix existing metro config in project getting overriden"),(0,r.kt)("li",{parentName:"ul"},"fix(RN Windows): Fix overrides of the default project files"),(0,r.kt)("li",{parentName:"ul"},"0.32.0-feat-rnwin-1"),(0,r.kt)("li",{parentName:"ul"},"fix(RN Windows): Fix documentation of RN Windows engine"),(0,r.kt)("li",{parentName:"ul"},"0.32.0-feat-rnwin-0"),(0,r.kt)("li",{parentName:"ul"},"fix(RN Windows): Fixes for RN Windows engine copied over from engines merged branch"),(0,r.kt)("li",{parentName:"ul"},"refactor(RN): Downgrade react native version to the maximum supported one by the tvos engine"),(0,r.kt)("li",{parentName:"ul"},"fix(Export): Fix some issues with exporting a package"),(0,r.kt)("li",{parentName:"ul"},"improve(Export): Add install and sign scripts as part of of export function for now"),(0,r.kt)("li",{parentName:"ul"},"feat(Windows Export): Added export command logic for RN Windows engine"),(0,r.kt)("li",{parentName:"ul"},"feat(App Title): getAppTitle from renative is now used to set the title of the application"),(0,r.kt)("li",{parentName:"ul"},"feat(App Icons): ReNative icons added for RN Windows applications as the default icons"),(0,r.kt)("li",{parentName:"ul"},"fix(Icons): Fixed linking for icon files"),(0,r.kt)("li",{parentName:"ul"},"fix(Plugins): Update navigation and reanimated plugins to versions, which support react native windows"),(0,r.kt)("li",{parentName:"ul"},"fix(Windows Builds): Fixed renative build cli function for Windows"),(0,r.kt)("li",{parentName:"ul"},"fix(Reanimated plugin): Bump up version for the plugin as it causes a crash within react navigation"),(0,r.kt)("li",{parentName:"ul"},"fix(Windows Release): Cleaned up cache clearing command"),(0,r.kt)("li",{parentName:"ul"},"fix(Windows Release): Added additional cache clearing which seems to have fixed release builds via CLI"),(0,r.kt)("li",{parentName:"ul"},"fix(Windows Build): Fixing debug builds via CLI"),(0,r.kt)("li",{parentName:"ul"},"improvement(Windows Clean): Added temporary files cleaning to the build process"),(0,r.kt)("li",{parentName:"ul"},"fix(Windows Run): Fixing -r flag run process hang on Windows"),(0,r.kt)("li",{parentName:"ul"},"fix(Windows Navigation): Fix issues with react navigation"),(0,r.kt)("li",{parentName:"ul"},"fix(Windows Metro): Fix bundle placing"),(0,r.kt)("li",{parentName:"ul"},"fix(Windows Metro): Fix the issue with packager running in a separate window"),(0,r.kt)("li",{parentName:"ul"},"fix(Windows Metro): Fix custom server port config via renative for app to run"),(0,r.kt)("li",{parentName:"ul"},"improve(Run): Updated Windows SDK to allow for more configuration via renative.json"),(0,r.kt)("li",{parentName:"ul"},"fix(Run): Windows application launches and runs using rnv"),(0,r.kt)("li",{parentName:"ul"},"fix(Run): Initial issues fixing for metro, that prevent bundler from starting"),(0,r.kt)("li",{parentName:"ul"},"fix(Run): Windows builds the project successfully with rnv"),(0,r.kt)("li",{parentName:"ul"},"fix(Configure): Don't override the metro config by default"),(0,r.kt)("li",{parentName:"ul"},"feat(Configure): Initial version of configure command for RN WIndows Engine"),(0,r.kt)("li",{parentName:"ul"},"temp(RN Windows): Rewriting configure from RN Windows CLI"),(0,r.kt)("li",{parentName:"ul"},"improvement(Configure): Working on Windows configure task"),(0,r.kt)("li",{parentName:"ul"},"improvement(Windows Engine): Copied the generated logic into templates and prepared for initial setup"),(0,r.kt)("li",{parentName:"ul"},"feat(RNW): Added packages needed for react native windows"),(0,r.kt)("li",{parentName:"ul"},"0.32.0-alpha.45"),(0,r.kt)("li",{parentName:"ul"},"optimise project bootstrap"),(0,r.kt)("li",{parentName:"ul"},"0.32.0-alpha.44"),(0,r.kt)("li",{parentName:"ul"},"app config merges"),(0,r.kt)("li",{parentName:"ul"},"scoped plugin builds merges"),(0,r.kt)("li",{parentName:"ul"},"[feat]"," support for plugin root path"),(0,r.kt)("li",{parentName:"ul"},"lint fixes"),(0,r.kt)("li",{parentName:"ul"},"Merge branch 'feat/esbuild_for_hooks' into feat/auto-init-template"),(0,r.kt)("li",{parentName:"ul"},"Merge branch 'feat/packageManager_option' into feat/auto-init-template"),(0,r.kt)("li",{parentName:"ul"},"[feat]"," auto init project"),(0,r.kt)("li",{parentName:"ul"},"let's see how this goes"),(0,r.kt)("li",{parentName:"ul"},"extra check"),(0,r.kt)("li",{parentName:"ul"},"added packageManager cli option support")),(0,r.kt)("h3",{id:"added-features"},"Added Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"none")),(0,r.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"none")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),p=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||r;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);