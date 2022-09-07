"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(r),c=a,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:1},i="Write Program",o={unversionedId:"go/write-program",id:"go/write-program",title:"Write Program",description:"Write",source:"@site/docs/go/write-program.md",sourceDirName:"go",slug:"/go/write-program",permalink:"/webassembly-examples-eratosthenes/go/write-program",draft:!1,editUrl:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs/docs/go/write-program.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/webassembly-examples-eratosthenes/category/go"},next:{title:"Build WASM",permalink:"/webassembly-examples-eratosthenes/go/build-wasm"}},p={},m=[{value:"Write",id:"write",level:2},{value:"Build for Test",id:"build-for-test",level:2},{value:"Run and Test",id:"run-and-test",level:2}],s={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"write-program"},"Write Program"),(0,a.kt)("h2",{id:"write"},"Write"),(0,a.kt)("p",null,"Go program becomes like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/4a867b918e191abd059d9a31addabfe7db02875c/go/prime.go#L22-L72\n")),(0,a.kt)("h2",{id:"build-for-test"},"Build for Test"),(0,a.kt)("p",null,"Build Go program to executable file ",(0,a.kt)("inlineCode",{parentName:"p"},"prime.exe"),".  "),(0,a.kt)("p",null,"Uncomment ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," function in the program before build."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/4a867b918e191abd059d9a31addabfe7db02875c/go/prime.go#L99-L119\n")),(0,a.kt)("p",null,"Then build the program.",(0,a.kt)("br",{parentName:"p"}),"\n","These commands generate ",(0,a.kt)("inlineCode",{parentName:"p"},"prime.exe"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build without optimization"',title:'"build',without:!0,'optimization"':!0},"go build prime.go\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build with optimization"',title:'"build',with:!0,'optimization"':!0},'go build -tags=release -ldflags="-s -w" prime.go\n')),(0,a.kt)("p",null,"Go command line arguments can be found at ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/cmd/go"},"here"),"."),(0,a.kt)("h2",{id:"run-and-test"},"Run and Test"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="invoke prime function"',title:'"invoke',prime:!0,'function"':!0},"prime.exe 100000\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="output"',title:'"output"'},"given number = 100000\nmax prime = 99991\nduration [ns] = 63042700\n")),(0,a.kt)("p",null,"Or, ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," command can directly invoke the program and results in same output."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="directly invoke prime function"',title:'"directly',invoke:!0,prime:!0,'function"':!0},'go run prime.go 100000\n\nor\n\ngo run -tags=release -ldflags="-s -w" prime.go 100000\n')),(0,a.kt)("p",null,'The following table shows the calculated prime for given "N".'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"given N"),(0,a.kt)("th",{parentName:"tr",align:null},"prime"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"7")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"97")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1000"),(0,a.kt)("td",{parentName:"tr",align:null},"997")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10000"),(0,a.kt)("td",{parentName:"tr",align:null},"9973")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100000"),(0,a.kt)("td",{parentName:"tr",align:null},"99991")))))}u.isMDXComponent=!0}}]);