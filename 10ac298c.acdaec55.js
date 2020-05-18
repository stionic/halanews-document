(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var o=t(1),r=t(9),a=(t(0),t(151)),l={id:"installation",title:"Installation",sidebar_label:"Installation"},i={id:"installation",title:"Installation",description:"> You need to connect to the network\r",source:"@site/docs\\getting-started-installation.md",permalink:"/halanews-document/docs/installation",sidebar_label:"Installation",sidebar:"docs",previous:{title:"Document",permalink:"/halanews-document/docs/introduction"},next:{title:"Config",permalink:"/halanews-document/docs/config"}},c=[{value:"New to the Command Line?",id:"new-to-the-command-line",children:[]},{value:"Install Cordova and Ionic framework",id:"install-cordova-and-ionic-framework",children:[]},{value:"Install WordPress plugin",id:"install-wordpress-plugin",children:[]},{value:"Install Node modules",id:"install-node-modules",children:[]},{value:"Verifying Installation",id:"verifying-installation",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You need to connect to the network")),Object(a.b)("h2",{id:"new-to-the-command-line"},"New to the Command Line?"),Object(a.b)("p",null,"This product was developed based on the Ionic framework, so you need to know about command-line tools. Something like Windows Command Prompt, PowerShell, Terminal,\u2026"),Object(a.b)("p",null,"If you\u2019re new to the command line, please read ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"http://blog.ionicframework.com/new-to-the-command-line/"}),"Ionic Command line tutorial"),"."),Object(a.b)("h2",{id:"install-cordova-and-ionic-framework"},"Install Cordova and Ionic framework"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Goto ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Download page Node.js")," get LTS version (make sure is LTS version).")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Once the download is complete, open Node.js installer.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Simply follow the prompts in the installer.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Run the Terminal installation script: ",Object(a.b)("inlineCode",{parentName:"p"},"npm install -g cordova ionic")))),Object(a.b)("h2",{id:"install-wordpress-plugin"},"Install WordPress plugin"),Object(a.b)("p",null,"As you know, our news application was designed for WordPress. If you already have a WordPress website, it is too simple! Otherwise, take a moment to learn about ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://wordpress.org/"}),"WordPress"),"."),Object(a.b)("p",null,"Then just install plugin ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://wordpress.org/plugins/stionic-core/"}),"Stionic core")," to complete Backend process."),Object(a.b)("h2",{id:"install-node-modules"},"Install Node modules"),Object(a.b)("p",null,"Extract Sources folder in .zip you get when purchase to wherever you want, you also can change Sources folder name."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/halanews-document/docs/assets/extract-sources.png",alt:null}))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"All Terminal commands from now should run in Sources folder")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"cd Sources"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Run the Node modules initialization script ",Object(a.b)("inlineCode",{parentName:"p"},"npm install")))),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/halanews-document/docs/assets/node-modules-install.png",alt:null}))),Object(a.b)("h2",{id:"verifying-installation"},"Verifying Installation"),Object(a.b)("p",null,"After installation process you need check and verify that all working fine by run ",Object(a.b)("inlineCode",{parentName:"p"},"ionic info")),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/halanews-document/docs/assets/verifying-installation.png",alt:null}))),Object(a.b)("p",null,"Along with previously existing files and directories, your root project directory will now contain a structure similar to:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"root-directory\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 resources\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u251c\u2500\u2500 components\n\u2502   \u2502   \u251c\u2500\u2500 home\n\u2502   \u2502   \u251c\u2500\u2500 pages\n\u2502   \u2502   \u251c\u2500\u2500 pipes\n\u2502   \u2502   \u251c\u2500\u2500 services\n\u2502   \u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 environments\n\u2502   \u251c\u2500\u2500 theme\n\u2502   \u251c\u2500\u2500 global.scss\n\u2502   \u251c\u2500\u2500 index.html\n\u2502   \u251c\u2500\u2500 main.ts\n\u2502   \u2514\u2500\u2500 test.ts\n\u251c\u2500\u2500 config.xml\n\u251c\u2500\u2500 ionic.config.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 tslint.json\n")))}p.isMDXComponent=!0},151:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=o,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||a;return t?r.a.createElement(m,i({ref:n},s,{components:t})):r.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);