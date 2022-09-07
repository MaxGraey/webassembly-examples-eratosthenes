"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,b=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(b,a(a({ref:t},m),{},{components:r})):n.createElement(b,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},a="Build WASM",s={unversionedId:"cpp/build-wasm",id:"cpp/build-wasm",title:"Build WASM",description:"Build for Browsers",source:"@site/docs/cpp/build-wasm.md",sourceDirName:"cpp",slug:"/cpp/build-wasm",permalink:"/webassembly-examples-eratosthenes/cpp/build-wasm",draft:!1,editUrl:"https://github.com/t-katsumura/webassembly-examples-eratosthenes/tree/main/website/docs/docs/cpp/build-wasm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Write Program",permalink:"/webassembly-examples-eratosthenes/cpp/write-program"},next:{title:"Run WASM",permalink:"/webassembly-examples-eratosthenes/cpp/run-wasm"}},l={},p=[{value:"Build for Browsers",id:"build-for-browsers",level:2},{value:"Build for Standalone",id:"build-for-standalone",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build-wasm"},"Build WASM"),(0,o.kt)("h2",{id:"build-for-browsers"},"Build for Browsers"),(0,o.kt)("p",null,"Build webassembly from prime.cpp using ",(0,o.kt)("a",{parentName:"p",href:"https://emscripten.org/"},"Emscripten"),"."),(0,o.kt)("p",null,"This is the minimal command to build .wasm from .c for browsers.\nThis command generate ",(0,o.kt)("inlineCode",{parentName:"p"},"prime.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"prime.wasm")," files. We need both to run the webassembly on browsers."),(0,o.kt)("p",null,"Note this commands increasing initial wasm memory size to 512 MB.\nIf the sample program is to consume memory over this size, it will stop because it does not implement the growing memory function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="minimal build command"',title:'"minimal',build:!0,'command"':!0},"emcc prime.cpp -o prime.js -sWASM=1 -sEXIT_RUNTIME=1 -sEXPORTED_FUNCTIONS=_prime,_malloc -sINITIAL_MEMORY=512mb\n")),(0,o.kt)("p",null,"Build with more options."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="build with more options"',title:'"build',with:!0,more:!0,'options"':!0},"emcc prime.cpp -o prime.js -O2 -sWASM=1 -sEXIT_RUNTIME=1 -sEXPORTED_FUNCTIONS=_prime,_malloc -sINITIAL_MEMORY=512mb\n")),(0,o.kt)("p",null,"If optimization options is ",(0,o.kt)("inlineCode",{parentName:"p"},"-O3")," or higher, function names would be broken and the sample won't work on browser.\nOther important options like ",(0,o.kt)("inlineCode",{parentName:"p"},"-sEXPORTED_RUNTIME_METHODS=ccall,cwrap"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-sINVOKE_RUN=1")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-sALLOW_MEMORY_GROWTH=1")," can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://emscripten.org/docs/tools_reference/emcc.html"},"Emscripten Compiler Frontend (emcc)"),"."),(0,o.kt)("h2",{id:"build-for-standalone"},"Build for Standalone"),(0,o.kt)("p",null,"When building the program for standalone runtime, ",(0,o.kt)("inlineCode",{parentName:"p"},"-sSTANDALONE_WASM=1")," option is used.\nBecause main function is commented out, ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-entry")," option is used here.\nWe need to tell the commands what function should be exported so that we can call them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"emcc prime.cpp -o prime.js -O3 -sWASM=1 -sEXPORTED_FUNCTIONS=_prime -sSTANDALONE_WASM=1 --no-entry\n")))}c.isMDXComponent=!0}}]);