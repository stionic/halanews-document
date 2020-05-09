(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return c}));var r=n(1),o=n(9),a=(n(0),n(154)),i={id:"android-installation",title:"Android Installation",sidebar_label:"Installation"},l={id:"android-installation",title:"Android Installation",description:"This guide shows how to set up your SDK environment to deploy apps for Android devices. You need to install the Android SDK regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read [Official document](https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html)\r",source:"@site/docs\\android-installation.md",permalink:"/halanews-document/docs/android-installation",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Build Notes",permalink:"/halanews-document/docs/build"},next:{title:"Android Prepare",permalink:"/halanews-document/docs/android-prepare"}},d=[{value:"Install Android Studio",id:"install-android-studio",children:[]},{value:"Adding SDK Packages",id:"adding-sdk-packages",children:[]}],s={rightToc:d};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This guide shows how to set up your SDK environment to deploy apps for Android devices. You need to install the Android SDK regardless of whether you want to use these platform-centered shell tools or cross-platform Cordova CLI for development. For detail more please read ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html"}),"Official document")),Object(a.b)("h2",{id:"install-android-studio"},"Install Android Studio"),Object(a.b)("p",null,"Install ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.android.com/studio/index.html"}),"Android Studio"),". Follow the instructions at the linked Android Developer site to get started. Opening Android Studio for the first time will guide you through the process of installing the Android SDK."),Object(a.b)("h2",{id:"adding-sdk-packages"},"Adding SDK Packages"),Object(a.b)("p",null,"After installing the Android SDK, you must also install the packages for whatever API level you wish to target. It is ",Object(a.b)("inlineCode",{parentName:"p"},"recommended that you install the highest SDK version")," that your version of cordova-android supports (see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html#requirements-and-support"}),"Requirements and Support"),")."),Object(a.b)("p",null,"Open the Android SDK Manager (Tools > SDK Manager in Android Studio), and make sure the following are installed:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In tab ",Object(a.b)("inlineCode",{parentName:"p"},"SDK Platforms")," install Android Platform SDK for your targeted version of Android")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"In tab ",Object(a.b)("inlineCode",{parentName:"p"},"SDK Tools")," install/update follow:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Android SDK Build-Tools version 19.1.0 or higher"),Object(a.b)("li",{parentName:"ul"},"Android SDK Platform-Tools"),Object(a.b)("li",{parentName:"ul"},"Android SDK Tools"),Object(a.b)("li",{parentName:"ul"},"Android Support Repository")))),Object(a.b)("p",null,"See Android's documentation on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.android.com/studio/intro/update#sdk-manager"}),"Installing SDK Packages")," for more details."))}c.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(m,l({ref:t},s,{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);