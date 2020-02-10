(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(9),l=(n(0),n(153)),o={id:"guides-setting",title:"Guides Setting",sidebar_label:"Setting on Website"},r={id:"guides-setting",title:"Guides Setting",description:"The application is built for easy configuration and flexibility, settings on the website will sync with the application.\r",source:"@site/docs\\guides-setting.md",permalink:"/halanews-document/docs/guides-setting",sidebar_label:"Setting on Website",sidebar:"docs",previous:{title:"iOS Deploy",permalink:"/halanews-document/docs/ios-deploy"},next:{title:"Guides AdMob",permalink:"/halanews-document/docs/guides-admob"}},p=[{value:"General Setting",id:"general-setting",children:[]},{value:"Categories Setting",id:"categories-setting",children:[]},{value:"Media Setting",id:"media-setting",children:[]},{value:"Deeplinks Setting",id:"deeplinks-setting",children:[]},{value:"OneSignal Setting",id:"onesignal-setting",children:[]}],c={rightToc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The application is built for easy configuration and flexibility, settings on the website will sync with the application."),Object(l.b)("p",null,"Login to the WordPress Dashboard, then choose Stionic menu"),Object(l.b)("h2",{id:"general-setting"},"General Setting"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Maintenance: show alert maintenance and disable endpoint WP REST API")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/halanews-document/docs/guides-admob"}),"Google Admob"),": config Google Admob Ad Unit ID will display in the application")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Testing Ads: check to show Testing ads")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Ads after: After how many views the post will display ads (for Interstitial)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/halanews-document/docs/guides-google-analytics"}),"Google Analytics"),": Tracking ID tracks customer usage of the app")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Application: configuration Android package and Apple app id, for Rate App, Update application and DeepLinks.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Request timeout: maximum time per request in application (ms). The application canceled the request and notifies the user if the requested time is up to the limit.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Root endpoint: useful in case you change website but don't want to update website in translated file ","[language]",".json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Share: content when using the Share application function")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Version: the latest version of the app, older versions will display an update prompt.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Header Allow Origin: customize Origin header, if empty will be ",Object(l.b)("inlineCode",{parentName:"p"},"'*'"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Extended Config: Other config in JSON format can get in application for easy customize"))),Object(l.b)("pre",null,Object(l.b)("code",Object(i.a)({parentName:"pre"},{}),"import { CoreProvider } from '../../providers/core/core';\n\nconstructor(core: CoreProvider) {\n  let extended = core.getConfig('extended') || {}\n}\n")),Object(l.b)("h2",{id:"categories-setting"},"Categories Setting"),Object(l.b)("p",null,"Allow control categories page in application"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Show all categories in categories page")," option, if check it categories page in application will list all categories included all parents and all childs. Else show parents only.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Selected categories below will show in application")," option, if check it only categories selected in list below will show in categories page. Else will hide all categories checked in categories list.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Drag and drop then Update to sort the categories shown in the app")," you can drag and drop list categories for sorting in categories page. Sorting by users in application will override it."),Object(l.b)("p",{parentName:"li"},"  Check on checkbox categories will affect by ",Object(l.b)("inlineCode",{parentName:"p"},"Selected categories below will show in application")," option above."))),Object(l.b)("h2",{id:"media-setting"},"Media Setting"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Thumbnail size")," size of thumbnail image for list posts in application. Template ",Object(l.b)("inlineCode",{parentName:"p"},"Column"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Card"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Thumbnail square size")," size of thumbnail image for list posts in application. Template ",Object(l.b)("inlineCode",{parentName:"p"},"List"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Reverse")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Small size for performance, Big size for quality. After change need ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.google.com/search?q=wordpress+regenerate+thumbnails"}),"regenerate thumbnail")," old images")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Disable featured images in application detail page")," option, if check it will default hide Thumbnail image on top of Detail posts page in application. Setting in posts will override it.")),Object(l.b)("h2",{id:"deeplinks-setting"},"Deeplinks Setting"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Required ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/halanews-document/docs/guides-setting#general-setting"}),"General setting")," Application package or App ID")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"URL SCHEME")," (required) which you define in ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"/halanews-document/docs/config#deeplinks-optional"}),"Config Deeplinks"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},'Show button "Application" on bottom screen')," option, if check will show deeplinks button in your website")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Auto open application")," option, if check when open your website in browser, will auto open your application"))),Object(l.b)("h2",{id:"onesignal-setting"},"OneSignal Setting"),Object(l.b)("p",null,"Configure OneSignal to send notifications when saving posts."),Object(l.b)("p",null,"To get Keys and IDs, you need login to ",Object(l.b)("a",Object(i.a)({parentName:"p"},{href:"https://onesignal.com/"}),"OneSignal"),". Then select your app -> App Settings -> Keys & IDs."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Message format")," is message when send notification, use ",Object(l.b)("inlineCode",{parentName:"p"},"{{title}}")," for placeholder post title. If empty message will be post title."),Object(l.b)("p",{parentName:"li"},"  Example you want default add ",Object(l.b)("inlineCode",{parentName:"p"},"New post added:")," prefix to message when send notification then setting it to ",Object(l.b)("inlineCode",{parentName:"p"},"New post added: {{title}}")),Object(l.b)("p",{parentName:"li"},"  Setting when add/edit post will override it.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"Include Player IDs")," use for Testing only, when publishing need to delete this field. Player Id get in the OneSignal ",Object(l.b)("inlineCode",{parentName:"p"},"App Dashboard -> Audience -> VIEW ALL USERS"),', separated by ","'),Object(l.b)("p",{parentName:"li"},"  When setting it, notification will only send to users match Player ID."))))}b.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=i,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||l;return n?a.a.createElement(m,r({ref:t},c,{components:n})):a.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);