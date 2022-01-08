"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[8508],{778:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],l={id:"ios",title:"iOS Platform",sidebar_label:"iOS",original_id:"ios"},p=void 0,s={unversionedId:"platforms/ios",id:"platforms/ios",title:"iOS Platform",description:"Overview",source:"@site/docs/platforms/ios.md",sourceDirName:"platforms",slug:"/platforms/ios",permalink:"/docs/platforms/ios",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/ios.md",tags:[],version:"current",frontMatter:{id:"ios",title:"iOS Platform",sidebar_label:"iOS",original_id:"ios"},sidebar:"docsSidebar",previous:{title:"FireTV",permalink:"/docs/platforms/firetv"},next:{title:"KaiOS",permalink:"/docs/platforms/kaios"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"File Extension Support",id:"file-extension-support",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Project Configuration",id:"project-configuration",children:[],level:2},{value:"Run on Simulator",id:"run-on-simulator",children:[],level:2},{value:"Run on Device",id:"run-on-device",children:[],level:2},{value:"Deploy on Device",id:"deploy-on-device",children:[],level:2},{value:"Advanced",id:"advanced",children:[],level:2},{value:"App Store Releases",id:"app-store-releases",children:[],level:2},{value:"Advanced configuration examples",id:"advanced-configuration-examples",children:[],level:2},{value:"App Config",id:"app-config",children:[],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,o.kt)("img",{src:"https://img.shields.io/badge/Windows-n/a-lightgrey.svg"}),(0,o.kt)("img",{src:"https://img.shields.io/badge/Linux-n/a-lightgrey.svg"}),(0,o.kt)("img",{src:"https://img.shields.io/badge/HostMode-n/a-lightgrey.svg"})))),(0,o.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_ios.gif",height:"250"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Latest swift based Xcode project"),(0,o.kt)("li",{parentName:"ul"},"Cocoapods Workspace ready"),(0,o.kt)("li",{parentName:"ul"},"Swift 4.1 Support")),(0,o.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,o.kt)("p",null,"Extenstions are defined via engines. Engines with ios support:"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cocoapods.org"},"CocoaPods")," ",(0,o.kt)("inlineCode",{parentName:"li"},"1.5.3")," or newer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/xcode/"},"Xcode")," for iOS development")),(0,o.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Swift"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"4.1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deployment Target"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"11.4"))))),(0,o.kt)("h2",{id:"run-on-simulator"},"Run on Simulator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv start\nrnv run -p ios\n")),(0,o.kt)("h2",{id:"run-on-device"},"Run on Device"),(0,o.kt)("p",null,"IMPORTANT: before you run ReNative app on the actual iOS device you MUST:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"renative.json")," scheme snippet for ad-hoc build (capable to run on device) with Automatic Signing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "platforms": {\n    "ios": {\n      "buildSchemes": {\n        "ad-hoc": {\n          "teamID": "YOUR_APPLE_TEAM_ID",\n          "provisioningStyle": "Automatic",\n          "runScheme": "Release",\n          "bundleAssets": true,\n          "bundleIsDev": false\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"renative.json")," scheme snippet for ad-hoc build (capable to run on device) with Manual Signing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "platforms": {\n    "ios": {\n      "buildSchemes": {\n        "ad-hoc": {\n          "teamID": "YOUR_APPLE_TEAM_ID",\n          "provisioningStyle": "Manual",\n          "codeSignIdentity": "iPhone Developer",\n          "provisionProfileSpecifier": "YOUR_PROVISIONING_PROFILE_NAME"\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv start\nrnv run -p ios -s ad-hoc -d\n")),(0,o.kt)("h2",{id:"deploy-on-device"},"Deploy on Device"),(0,o.kt)("p",null,"This will run production version on your device (not connected to metro bundler)\nSame prerequisite as above applies here"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv start\nrnv run -p ios -s release -d\n")),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,"Clean and Re-build platform project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv run -p ios -r\n")),(0,o.kt)("p",null,"Launch app with specific iOS simulator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'rnv run -p ios -t "iPhone 6 Plus"\n')),(0,o.kt)("p",null,"Launch app with specific iOS simulator (let ReNative to give you the list of available options):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv run -p ios -t ?\n")),(0,o.kt)("p",null,"Launch specific emulator :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'rnv target launch -p ios -t "iPhone 8"\n')),(0,o.kt)("p",null,"Launch specific emulator (let ReNative to give you the list of available options):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv target launch -p ios -t ?\n")),(0,o.kt)("p",null,"Get list of all available devices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv target list -p ios\n")),(0,o.kt)("p",null,"Get device/simulator logs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv log -p ios\n")),(0,o.kt)("p",null,"Get device/simulator logs with filter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv log -p ios -f com.myapp\n")),(0,o.kt)("h2",{id:"app-store-releases"},"App Store Releases"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"renative.json")," scheme snippet for automatic signing releases"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "platforms": {\n    "ios": {\n      "buildSchemes": {\n        "appstore": {\n          "teamID": "YOUR_APPLE_TEAM_ID",\n          "runScheme": "Release",\n          "bundleAssets": true,\n          "bundleIsDev": false,\n          "exportOptions": {\n            "method": "app-store",\n            "uploadBitcode": true,\n            "compileBitcode": false,\n            "uploadSymbols": true,\n            "signingStyle": "automatic",\n            "signingCertificate": "iPhone Distribution"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"renative.json")," scheme snippet for manual signing releases"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "platforms": {\n    "ios": {\n      "buildSchemes": {\n        "appstore": {\n          "teamID": "YOUR_APPLE_TEAM_ID",\n          "runScheme": "Release",\n          "bundleAssets": true,\n          "provisioningStyle": "Manual",\n          "codeSignIdentity": "iPhone Distribution",\n          "provisionProfileSpecifier": "YOUR_PROVISIONING_PROFILE_NAME",\n          "exportOptions": {\n            "method": "app-store",\n            "uploadBitcode": true,\n            "compileBitcode": false,\n            "uploadSymbols": true,\n            "signingStyle": "manual",\n            "signingCertificate": "iPhone Distribution",\n            "provisioningProfiles": {\n              "YOUR_BUNDLE_ID": "YOUR_PROVISIONING_PROFILE_NAME"\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Create IPA:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rnv export -p ios -s appstore\n")),(0,o.kt)("h2",{id:"advanced-configuration-examples"},"Advanced configuration examples"),(0,o.kt)("p",null,"Adding new props to plist:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "platforms": {\n    "ios": {\n      "plist": {\n        "UIBackgroundModes": ["audio", "remote-notification"],\n        "ITSAppUsesNonExemptEncryption": false\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"app-config"},"App Config"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/json-config#ios-props"},"see: iOS based config")))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(v,a(a({ref:n},u),{},{components:t})):r.createElement(v,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);