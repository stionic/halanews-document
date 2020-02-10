(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{149:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return c}));var n=o(1),r=o(9),a=(o(0),o(153)),l={id:"ios-installation",title:"iOS Installation",sidebar_label:"Installation"},i={id:"ios-installation",title:"iOS Installation",description:"This guide shows how to set up your SDK development environment to deploy Cordova apps for iOS devices such as iPhone and iPad. You need to install the SDK tools regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read [Official document](https://cordova.apache.org/docs/en/9.x/guide/platforms/ios/index.html)\r",source:"@site/docs\\ios-installation.md",permalink:"/halanews-document/docs/ios-installation",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Android Deploy",permalink:"/halanews-document/docs/android-deploy"},next:{title:"iOS Prepare",permalink:"/halanews-document/docs/ios-prepare"}},p=[{value:"Requirements and Support",id:"requirements-and-support",children:[]},{value:"Install XCode",id:"install-xcode",children:[]},{value:"Deployment Tools",id:"deployment-tools",children:[]},{value:"Install Cocoapods",id:"install-cocoapods",children:[]}],s={rightToc:p};function c(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide shows how to set up your SDK development environment to deploy Cordova apps for iOS devices such as iPhone and iPad. You need to install the SDK tools regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://cordova.apache.org/docs/en/9.x/guide/platforms/ios/index.html"}),"Official document")),Object(a.b)("h2",{id:"requirements-and-support"},"Requirements and Support"),Object(a.b)("p",null,"Apple\xae tools required to build iOS applications only run on the OS X operating system on Intel-based Macs. Xcode\xae 8.0 (the minimum required version) runs only on OS X version 10.11.5 (El Capitan) or greater, and includes the iOS 10 SDK (Software Development Kit). To submit apps to the Apple App Store\u2120 requires the latest versions of the Apple tools."),Object(a.b)("p",null,"You can test many of the Cordova features using the iOS simulator installed with the iOS SDK and Xcode, but you need an actual device to fully test all of the app's device features before submitting to the App Store. The device must have at least iOS 9 installed, the minimum iOS version supported since the release of cordova-ios v4.4.0."),Object(a.b)("h2",{id:"install-xcode"},"Install XCode"),Object(a.b)("p",null,"There are two ways to download Xcode:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"from the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://itunes.apple.com/us/app/xcode/id497799835?mt=12"}),"App Store"),', available by searching for "Xcode" in the App Store application.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"from ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/downloads/index.action"}),"Apple Developer Downloads"),", which requires registration as an Apple Developer."))),Object(a.b)("p",null,"Once Xcode is installed, several command-line tools need to be enabled for Cordova to run. From the command line, run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"xcode-select --install\n")),Object(a.b)("h2",{id:"deployment-tools"},"Deployment Tools"),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.org/package/ios-deploy"}),"ios-deploy")," tools allow you to launch iOS apps on an iOS Device from the command-line."),Object(a.b)("p",null,"To install it, run the following from command-line terminal:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install -g ios-deploy\n")),Object(a.b)("h2",{id:"install-cocoapods"},"Install Cocoapods"),Object(a.b)("p",null,"If your Mac don't have Cocoapods so you need install it first for OneSignal Push Notification Cordova plugin."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"sudo gem install cocoapods\npod setup\npod repo update\n")),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"assets/build-ios-pod-repo-update.png",alt:null}))))}c.isMDXComponent=!0},153:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return m}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i({},t,{},e)),o},d=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(o),b=n,m=d["".concat(l,".").concat(b)]||d[b]||u[b]||a;return o?r.a.createElement(m,i({ref:t},s,{components:o})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);