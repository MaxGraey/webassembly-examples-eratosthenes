"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=m(n),d=a,c=g["".concat(l,".").concat(d)]||g[d]||u[d]||i;return n?r.createElement(c,o(o({ref:t},p),{},{components:n})):r.createElement(c,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="Build WASM",s={unversionedId:"go/build-wasm",id:"go/build-wasm",title:"Build WASM",description:"Build for Browsers",source:"@site/docs/go/build-wasm.md",sourceDirName:"go",slug:"/go/build-wasm",permalink:"/webassembly-examples-eratosthenes/go/build-wasm",draft:!1,editUrl:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs/docs/go/build-wasm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Write Program",permalink:"/webassembly-examples-eratosthenes/go/write-program"},next:{title:"Run WASM",permalink:"/webassembly-examples-eratosthenes/go/run-wasm"}},l={},m=[{value:"Build for Browsers",id:"build-for-browsers",level:2},{value:"with go",id:"with-go",level:3},{value:"with tinygo",id:"with-tinygo",level:3},{value:"Build for Standalone",id:"build-for-standalone",level:2},{value:"tinygo",id:"tinygo",level:3}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"build-wasm"},"Build WASM"),(0,a.kt)("h2",{id:"build-for-browsers"},"Build for Browsers"),(0,a.kt)("h3",{id:"with-go"},"with go"),(0,a.kt)("p",null,"Build WebAssembly using go command.",(0,a.kt)("br",{parentName:"p"}),"\n","Following two files are used in this section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"prime.go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"main_go.go"))),(0,a.kt)("p",null,"Set the environmental variables for targeting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="set target"',title:'"set','target"':!0},"// Windows\nset GOOS=js\nset GOARCH=wasm\n\n// Linux\nGOOS=js\nGOARCH=wasm\n")),(0,a.kt)("p",null,"Build WebAssembly with command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build for browsers with go"',title:'"build',for:!0,browsers:!0,with:!0,'go"':!0},'go build -o prime.wasm -tags=release -ldflags="-s -w" src/main_go.go src/prime.go\n')),(0,a.kt)("p",null,"These command generate ",(0,a.kt)("inlineCode",{parentName:"p"},"prime.wasm"),".",(0,a.kt)("br",{parentName:"p"}),"\n","JavaScript should be fetched from ",(0,a.kt)("inlineCode",{parentName:"p"},"${GOROOT}/misc/wasm/wasm_exec.js"),".",(0,a.kt)("br",{parentName:"p"}),"\n","(js is renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm_exec_go.js")," in this repository)"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"select ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm_exec_go.js")," in index.html before running on browser")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/index.html#L109-L110\n")),(0,a.kt)("h3",{id:"with-tinygo"},"with tinygo"),(0,a.kt)("p",null,"Build WebAssembly using tinygo.",(0,a.kt)("br",{parentName:"p"}),"\n","Following two files are used in this section."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"prime.go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"main_tinygo.go"))),(0,a.kt)("p",null,"Before build, we need to uncomment ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," function for build."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/pkg/prime.go#L74-L78\n")),(0,a.kt)("p",null,"Let's build WebAssembly with this command.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build for browsers with tinygo"',title:'"build',for:!0,browsers:!0,with:!0,'tinygo"':!0},"tinygo build -opt=2 -wasm-abi=generic -target=wasm -tags=release -o prime.wasm src/prime.go\n")),(0,a.kt)("p",null,"These command generate ",(0,a.kt)("inlineCode",{parentName:"p"},"prime.wasm"),".",(0,a.kt)("br",{parentName:"p"}),"\n","JavaScript should be fetched from ",(0,a.kt)("inlineCode",{parentName:"p"},"${TINYGOROOT}/targets/wasm_exec.js"),".",(0,a.kt)("br",{parentName:"p"}),"\n","(js is renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm_exec_tinygo.js")," in this repository)"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"select ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm_exec_tinygo.js")," in index.html before running on browser")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/index.html#L109-L110\n")),(0,a.kt)("h2",{id:"build-for-standalone"},"Build for Standalone"),(0,a.kt)("h3",{id:"tinygo"},"tinygo"),(0,a.kt)("p",null,"Buildgin go program to standalone wasm is not currently supported by go command.",(0,a.kt)("br",{parentName:"p"}),"\n","So, ",(0,a.kt)("inlineCode",{parentName:"p"},"tinygo")," is used here.\nMake sure ",(0,a.kt)("a",{parentName:"p",href:"https://tinygo.org/"},"tinygo")," is installed. Binaries can be downloaded at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tinygo-org/tinygo/releases"},"github releases"),"."),(0,a.kt)("p",null,"Before build, ",(0,a.kt)("inlineCode",{parentName:"p"},"main()")," function have to be uncommented."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:"reference",reference:!0},"https://github.com/t-katsumura/webassembly-examples-eratosthenes/blob/main/go/pkg/prime.go#L74-L78\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build with minimal"',title:'"build',with:!0,'minimal"':!0},"tinygo build -wasm-abi=generic -target=wasi -o prime.wasm prime.go\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build with optimize options"',title:'"build',with:!0,optimize:!0,'options"':!0},"tinygo build -opt=2 -wasm-abi=generic -target=wasi -tags=release -o prime.wasm prime.go\n")),(0,a.kt)("p",null,"Those commands generate ",(0,a.kt)("inlineCode",{parentName:"p"},"prime.wasm"),"."))}u.isMDXComponent=!0}}]);