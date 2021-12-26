import{z as y,A as w,c,d as _,l as m,n as k,B as v,o as u,C,y as l,q as p,D as d,v as P,f as g,j as e,x as a,E as S,k as n}from"./vendor.1ba3453e.js";import{u as B}from"./_default.page.client.ts.fc04be00.js";y();V();w();let N=!1;function V(){b(),j(b),E(()=>N)}function b(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function j(s){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&s()})}function E(s){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&s()})}function L(){const s=B();return{origin:c(()=>{var t;return((t=s.urlParsedServer)==null?void 0:t.origin)||s.urlParsed.origin}),pathname:c(()=>{var o;const t=((o=s.urlParsedServer)==null?void 0:o.pathname)||s.urlParsed.pathname;return t!=="/"&&t.endsWith("/")?t.slice(0,t.length-1):t}),search:c(()=>{var t;return((t=s.urlParsedServer)==null?void 0:t.search)||s.urlParsed.search}),hash:c(()=>s.urlParsed.hash)}}const r=_({props:{href:null,activeClass:null},setup(s){const t=s,{pathname:o}=L(),i=m(null);return k(()=>{o.value===t.href&&i.value!==null&&i.value.$el.scrollIntoView({block:"nearest"})}),(f,h)=>{const x=v("a-router");return u(),C(x,{ref_key:"link",ref:i,href:s.href,class:d({[s.activeClass||"text-blue-700"]:P(o)===s.href})},{default:l(()=>[p(f.$slots,"default")]),_:3},8,["href","class"])}}}),R={class:"absolute inset-0 grid grid-cols-[auto,1fr] grid-rows-[auto,1fr]"},z={class:"flex justify-center"},D=n(" Vue Cookbook "),I=e("hr",{class:"mt-4"},null,-1),U={class:"mt-6 overflow-hidden"},$={class:"space-y-4"},A=n(" Introduction "),F=e("li",null,[e("div",{class:"font-semibold",href:"/content"},"Content")],-1),H=e("li",null,[e("div",{class:"font-semibold",href:"/effects"},"Effects")],-1),M=e("li",null,[e("div",{class:"font-semibold",href:"/layouts"},"Layouts")],-1),W=e("div",{class:"font-semibold",href:"/interactive"},"Interactive",-1),q={class:"ml-4 mt-2 space-y-2 leading-tight"},T=n(" Create a floating component "),G=e("div",{class:"font-semibold",href:"/utilities"},"Utilities",-1),J={class:"ml-4 mt-2 space-y-2 leading-tight"},K=n(" Assert with type assertion "),O=n(" Detect click outside "),Q=n(" Pass data along tree "),X=e("a",{class:"h-6",href:"https://github.com/lem0nle/vpage",target:"_blank",rel:"noopener"},[e("svg",{class:"h-6 text-gray-400 fill-current","aria-hidden":"true",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})])],-1),Y={class:"col-start-2 overflow-scroll"},Z={class:"prose mx-auto p-6"},ee=e("footer",{class:"h-16"},null,-1),oe=_({setup(s){const t=m(!0),o=()=>t.value=!t.value;return(i,f)=>{const h=v("a-router");return u(),g("article",R,[e("div",{class:d(["row-span-2 overflow-hidden",{"md:w-0":!t.value,"w-0 md:w-64":t.value}])},[e("aside",{class:d(["fixed inset-0 md:w-64 overflow-scroll bg-gray-50 z-10 p-6 transition ease-in-out transform",{"md:-translate-x-64":!t.value,"hidden md:block md:translate-x-0":t.value}])},[e("div",z,[a(h,{href:"/",class:"font-bold"},{default:l(()=>[D]),_:1}),t.value?S("",!0):(u(),g("button",{key:0,class:"md:hidden absolute top-5 left-6 text-2xl text-gray-400 hover:text-gray-300 focus:outline-none",onClick:o}," \xD7 "))]),I,e("nav",U,[e("ul",$,[e("li",null,[a(r,{class:"font-semibold",href:"/"},{default:l(()=>[A]),_:1})]),F,H,M,e("li",null,[W,e("ul",q,[e("li",null,[a(r,{href:"/interactive/01-create-a-floating-component","active-class":"text-blue-700 font-medium"},{default:l(()=>[T]),_:1})])])]),e("li",null,[G,e("ul",J,[e("li",null,[a(r,{href:"/utilities/01-assert-with-type-assertion","active-class":"text-blue-700 font-medium"},{default:l(()=>[K]),_:1})]),e("li",null,[a(r,{href:"/utilities/02-detect-click-outside","active-class":"text-blue-700 font-medium"},{default:l(()=>[O]),_:1})]),e("li",null,[a(r,{href:"/utilities/03-pass-data-along-tree","active-class":"text-blue-700 font-medium"},{default:l(()=>[Q]),_:1})])])])])])],2)],2),e("header",{class:"col-start-2 px-6 py-4 flex items-center justify-between"},[e("button",{class:"-ml-2.5 text-2xl font-medium text-gray-400 px-3 py-1 rounded hover:bg-gray-100 focus:outline-none",onClick:o}," \u2261 "),X]),e("main",Y,[e("article",Z,[p(i.$slots,"default")]),ee])])}}});export{oe as default};