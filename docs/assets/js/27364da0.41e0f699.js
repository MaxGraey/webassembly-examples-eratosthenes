"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),o=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=o(r),d=n,b=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return r?a.createElement(b,s(s({ref:t},m),{},{components:r})):a.createElement(b,s({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const l={sidebar_position:1},s="Write Program",i={unversionedId:"assemblyscript/write-program",id:"assemblyscript/write-program",title:"Write Program",description:"Write",source:"@site/docs/assemblyscript/write-program.md",sourceDirName:"assemblyscript",slug:"/assemblyscript/write-program",permalink:"/webassembly-examples-eratosthenes/assemblyscript/write-program",draft:!1,editUrl:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs/docs/assemblyscript/write-program.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AssemblyScript",permalink:"/webassembly-examples-eratosthenes/category/assemblyscript"},next:{title:"Build WASM",permalink:"/webassembly-examples-eratosthenes/assemblyscript/build-wasm"}},p={},o=[{value:"Write",id:"write",level:2},{value:"Build for Test",id:"build-for-test",level:2},{value:"Run and Test",id:"run-and-test",level:2}],m={toc:o};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"write-program"},"Write Program"),(0,n.kt)("h2",{id:"write"},"Write"),(0,n.kt)("p",null,"In AssemblyScript, the Sieve of Eratosthenes can be written as"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/c/src/prime.c\n")),(0,n.kt)("h2",{id:"build-for-test"},"Build for Test"),(0,n.kt)("p",null,"Build AssemblyScript to JavaScript and WebAssembly.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"asc")," command is used here to build which is installed by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AssemblyScript/assemblyscript"},"assemblyscript"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build with asc command"',title:'"build',with:!0,asc:!0,'command"':!0},"asc assembly/prime.ts --target release -Ospeed\n")),(0,n.kt)("p",null,"Or, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"npm")," command.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"asbuild:release")," wchich runs the same command above is defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build with npm command"',title:'"build',with:!0,npm:!0,'command"':!0},"npm run asbuild:release\n")),(0,n.kt)("p",null,"asc command options can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://www.assemblyscript.org/compiler.html"},"Using the compiler"),"."),(0,n.kt)("h2",{id:"run-and-test"},"Run and Test"),(0,n.kt)("p",null,"Now, run the test codes written in ",(0,n.kt)("inlineCode",{parentName:"p"},"tests/index.js"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="run tests"',title:'"run','tests"':!0},"node tests\n")),(0,n.kt)("p",null,"or, alternatively"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="run tests"',title:'"run','tests"':!0},"npm run test\n")),(0,n.kt)("p",null,"Output would be"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"(Use `node --trace-warnings ...` to show where the warning was created)\ntest ok\nmax prime = 9973\nduration [ms] = 2.88\n")),(0,n.kt)("p",null,'The following table shows the calculated prime for given "N".'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"given N"),(0,n.kt)("th",{parentName:"tr",align:null},"prime"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"100"),(0,n.kt)("td",{parentName:"tr",align:null},"97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1000"),(0,n.kt)("td",{parentName:"tr",align:null},"997")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10000"),(0,n.kt)("td",{parentName:"tr",align:null},"9973")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"100000"),(0,n.kt)("td",{parentName:"tr",align:null},"99991")))))}u.isMDXComponent=!0}}]);