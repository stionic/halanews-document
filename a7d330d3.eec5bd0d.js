(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(154)),i={id:"build",title:"Build Notes",sidebar_label:"Notes"},l={id:"build",title:"Build Notes",description:"## Only build after done all config step\r",source:"@site/docs\\build.md",permalink:"/halanews-document/docs/build",sidebar_label:"Notes",sidebar:"docs",previous:{title:"Customize",permalink:"/halanews-document/docs/customize"},next:{title:"Android Installation",permalink:"/halanews-document/docs/android-installation"}},c=[{value:"Only build after done all config step",id:"only-build-after-done-all-config-step",children:[]},{value:"Do Installation and Prepare step one time",id:"do-installation-and-prepare-step-one-time",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"only-build-after-done-all-config-step"},"Only build after done all config step"),Object(a.b)("p",null,"Build step take long time, computer will cache for save time. So you need make sure that already done all ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/halanews-document/docs/config"}),"Config step")," before build."),Object(a.b)("p",null,"Because after first time build your changes in ",Object(a.b)("inlineCode",{parentName:"p"},"/package.json > .cordova")," will not update."),Object(a.b)("p",null,"If you want change ",Object(a.b)("inlineCode",{parentName:"p"},"/package.json > .cordova")," after first build then need remove ",Object(a.b)("inlineCode",{parentName:"p"},"/platforms"),", ",Object(a.b)("inlineCode",{parentName:"p"},"/plugins")," folder then do all step in Build section again."),Object(a.b)("h2",{id:"do-installation-and-prepare-step-one-time"},"Do Installation and Prepare step one time"),Object(a.b)("p",null,"Document below for each platforms will have ",Object(a.b)("inlineCode",{parentName:"p"},"Installation"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Prepare")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy")),Object(a.b)("p",null,"Only ",Object(a.b)("inlineCode",{parentName:"p"},"Deploy")," step can do loop. Other just do one time."))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},d=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(i,".").concat(b)]||d[b]||s[b]||a;return n?o.a.createElement(f,l({ref:t},p,{components:n})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);