var p=Object.defineProperty,d=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var c=(e,o,t)=>o in e?p(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,u=(e,o)=>{for(var t in o||(o={}))m.call(o,t)&&c(e,t,o[t]);if(s)for(var t of s(o))w.call(o,t)&&c(e,t,o[t]);return e},l=(e,o)=>d(e,y(o));import{d as v,h as n,_,p as b,r as k,i as $,s as g,c as h,a as P,b as q,e as M,u as E,g as R}from"./vendor.3053af72.js";var x=v({props:{href:{type:String,required:!0}},setup(e,{slots:o}){const t="/vue-cookbook/";return()=>n("a",l(u({},e),{href:e.href.startsWith("/")?t+e.href.slice(1):e.href}),o)}});function I(e){switch(e){default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function T(e){switch(e){default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function D(e){switch(e){default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function S(e){switch(e){default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function A(e){switch(e){case"../../src/layouts/book.layout.vue":return _(()=>import("./book.layout.38c07866.js"),["assets/book.layout.38c07866.js","assets/vendor.3053af72.js"]);default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function U(e){switch(e){default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}async function C(e,o){let t=o.split("/");switch(t=t.slice(1,t.lastIndexOf("pages")),t.length){case 0:return(await U(`../../layouts/${e}.layout.vue`)).default;case 1:return(await A(`../../${t[0]}/layouts/${e}.layout.vue`)).default;case 2:return(await S(`../../${t[0]}/${t[1]}/layouts/${e}.layout.vue`)).default;case 3:return(await D(`../../${t[0]}/${t[1]}/${t[2]}/layouts/${e}.layout.vue`)).default;case 4:return(await T(`../../${t[0]}/${t[1]}/${t[2]}/${t[3]}/layouts/${e}.layout.vue`)).default;case 5:return(await I(`../../${t[0]}/${t[1]}/${t[2]}/${t[3]}/${t[4]}/layouts/${e}.layout.vue`)).default;default:throw new Error("cannot assign layout to page with depth more than 5")}}function j(e,o){if(!e)throw new Error(o!=null?o:"assertion error")}const f=Symbol();function L(e){b(f,k(e))}function B(){const e=$(f);return j(e!==void 0),e}async function O(e){const o=g(e),t=h(()=>u({title:"VPage"},o.pageExports.frontmatter)),a=P(t.value.layout?await C(t.value.layout,o._pageId):o.pageExports.Layout),r=q({setup(){return L(o),E(t),()=>a.value?n(a.value,{},{default:()=>n(o.Page,o.pageProps)}):n(o.Page,o.pageProps)}}),i=M();return r.use(i),r.component("ARouter",x),{app:r,head:i,context:o,frontmatter:t,layout:a}}async function H(){const e=await R(),{app:o}=await O(e);o.mount("#app")}H();var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module"});export{F as _,B as u};
