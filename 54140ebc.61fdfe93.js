(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),o=(n(0),n(153)),r={id:"guides-notification",title:"Guides Notification",sidebar_label:"Push Notification"},c={id:"guides-notification",title:"Guides Notification",description:"OneSignal is a multi-platform push notifications service. You can use this to send notifications to users on mobile WordPress app. In addition supports a lot of great features. And it is free, so we should thank OneSignal.\r",source:"@site/docs\\guides-push-notification.md",permalink:"/halanews-document/docs/guides-notification",sidebar_label:"Push Notification",sidebar:"docs",previous:{title:"Guides Google Analytics",permalink:"/halanews-document/docs/guides-google-analytics"},next:{title:"Others Guides",permalink:"/halanews-document/docs/guides-others"}},l=[{value:"Create and Config OneSignal",id:"create-and-config-onesignal",children:[]},{value:"Send notification with OneSignal dashboard (optional)",id:"send-notification-with-onesignal-dashboard-optional",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"OneSignal is a multi-platform push notifications service. You can use this to send notifications to users on mobile WordPress app. In addition supports a lot of great features. And it is free, so we should thank OneSignal."),Object(o.b)("h2",{id:"create-and-config-onesignal"},"Create and Config OneSignal"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"First, login to ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://onesignal.com/"}),"OneSignal"),", click ",Object(o.b)("inlineCode",{parentName:"li"},"Add a new app")," to create new project. Then input App name and click ",Object(o.b)("inlineCode",{parentName:"li"},"Create"))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"assets/guides-push-notification-create.png",alt:null}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"After successfully creating, you need to configure project."),Object(o.b)("p",{parentName:"li"},"  \u2013 ",Object(o.b)("inlineCode",{parentName:"p"},"Platform"),": your project can support multiple platforms (you can add later) but you first need to choose a platform."),Object(o.b)("p",{parentName:"li"},"  \u2013 ",Object(o.b)("inlineCode",{parentName:"p"},"Config Platform"),": each platform has a different way of sending messages, OneSignal has document detailed for configuration. Open in new tab ",Object(o.b)("inlineCode",{parentName:"p"},"Read the documentation")),Object(o.b)("p",{parentName:"li"},"  Once you have all the necessary information, go back to OneSignal and fill in the form, click ",Object(o.b)("inlineCode",{parentName:"p"},"Save")),Object(o.b)("p",{parentName:"li"},"  \u2013 ",Object(o.b)("inlineCode",{parentName:"p"},"SDK"),": select PhoneGap, Cordova, Ionic, Index XDK click ",Object(o.b)("inlineCode",{parentName:"p"},"Next")))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"assets/guides-push-notification-config.png",alt:null}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Once the configuration is complete, you will receive the OneSignal App ID. config it in ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/halanews-document/docs/guides-setting#onesignal-setting"}),"OneSignal Setting"))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"assets/guides-push-notification-done.png",alt:null}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"So whenever you select \u201cSend notifications on Save\u201d on Stionic application panel, it will send a notifications to the user.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"assets/guides-push-notification-send.png",alt:null}))),Object(o.b)("h2",{id:"send-notification-with-onesignal-dashboard-optional"},"Send notification with OneSignal dashboard (optional)"),Object(o.b)("p",null,"You can also use the OneSignal Dashboard to send notifications manually with more customize."),Object(o.b)("p",null,"For open post when click notification you need use ",Object(o.b)("inlineCode",{parentName:"p"},"Additional data")," when send notification with follow key and value:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"link: any url you want to open, if is url of post then app will open post, also support page, category,.. "),Object(o.b)("li",{parentName:"ul"},"type: (optional) 'post' or 'page'"),Object(o.b)("li",{parentName:"ul"},"id: (required if have 'type' data) id of post or page")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"assets/guides-push-notification-additional-data.png",alt:null}))))}p.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(r,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(f,c({ref:t},s,{components:n})):i.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);