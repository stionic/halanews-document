(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{143:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(1),a=t(9),o=(t(0),t(151)),i={id:"ios-prepare",title:"iOS Prepare",sidebar_label:"Prepare"},c={id:"ios-prepare",title:"iOS Prepare",description:"## Add iOS platform\r",source:"@site/docs\\ios-prepare.md",permalink:"/halanews-document/docs/ios-prepare",sidebar_label:"Prepare",sidebar:"docs",previous:{title:"iOS Installation",permalink:"/halanews-document/docs/ios-installation"},next:{title:"iOS Deploy",permalink:"/halanews-document/docs/ios-deploy"}},p=[{value:"Add iOS platform",id:"add-ios-platform",children:[]},{value:"Change Icons and Splash screens",id:"change-icons-and-splash-screens",children:[]}],l={rightToc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"add-ios-platform"},"Add iOS platform"),Object(o.b)("p",null,"For build Ionic/Cordova sources to iOS XCode project simple run follow command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"ionic cordova platform add ios\n")),Object(o.b)("p",null,"After run command, it will create ",Object(o.b)("inlineCode",{parentName:"p"},"/platforms/ios")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/halanews-document/docs/assets/build-ios-add-platform.png",alt:null}))),Object(o.b)("h2",{id:"change-icons-and-splash-screens"},"Change Icons and Splash screens"),Object(o.b)("p",null,"Icons means that the image represents your application, while the splash screens is the image that shows when you open the application."),Object(o.b)("p",null,"In essence you just change the image in the ",Object(o.b)("inlineCode",{parentName:"p"},"/resources/ios")," folder."),Object(o.b)("p",null,"It\u2019s great that Ionic offers a tool for creating icons and splash screens automatically."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install cordova-res IF not installed yet by run ",Object(o.b)("inlineCode",{parentName:"p"},"npm i -g cordova-res"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Replace ",Object(o.b)("inlineCode",{parentName:"p"},"/resources/ios/icon.png")," and ",Object(o.b)("inlineCode",{parentName:"p"},"/resources/splash.png")," by your image."))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"IMPORTANT! icon in iOS need ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/"}),Object(o.b)("inlineCode",{parentName:"a"},"avoid transparency")),", so replace icon.png in ",Object(o.b)("inlineCode",{parentName:"p"},"/resources/ios"))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"ionic cordova resources ios")," create image assets")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"cordova prepare ios")," update image assets to iOS platform"))))}s.isMDXComponent=!0},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return t?a.a.createElement(m,c({ref:n},l,{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);