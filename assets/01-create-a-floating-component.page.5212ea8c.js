var ut=Object.defineProperty,ft=Object.defineProperties;var pt=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable;var X=(t,e,n)=>e in t?ut(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,h=(t,e)=>{for(var n in e||(e={}))dt.call(e,n)&&X(t,n,e[n]);if(I)for(var n of I(e))ht.call(e,n)&&X(t,n,e[n]);return t},v=(t,e)=>ft(t,pt(e));import{d as P,l as y,m as Y,n as gt,o as b,f as x,q as R,j as W,t as U,v as $,w as q,x as G,y as S,F as mt,k as O,z as vt,A as wt,B as yt,h as r}from"./vendor.c72f9abb.js";import{a as D}from"./_default.page.client.ts.065b90ac.js";function J(t){return t.split("-")[0]}function bt(t){return t.split("-")[1]}function xt(t){return["top","bottom"].includes(J(t))?"x":"y"}function kt(t){return t==="y"?"height":"width"}function K(t){let{reference:e,floating:n,placement:o}=t;const i=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2;let c;switch(J(o)){case"top":c={x:i,y:e.y-n.height};break;case"bottom":c={x:i,y:e.y+e.height};break;case"right":c={x:e.x+e.width,y:a};break;case"left":c={x:e.x-n.width,y:a};break;default:c={x:e.x,y:e.y}}const l=xt(o),s=kt(l);switch(bt(o)){case"start":c[l]=c[l]-(e[s]/2-n[s]/2);break;case"end":c[l]=c[l]+(e[s]/2-n[s]/2);break}return c}const Et=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:c}=n;let l=await c.getElementRects({reference:t,floating:e,strategy:i}),{x:s,y:u}=K(v(h({},l),{placement:o})),f=o,C={};for(let T=0;T<a.length;T++){const{name:at,fn:ct}=a[T],{x:V,y:A,data:z,reset:L}=await ct({x:s,y:u,initialPlacement:o,placement:f,strategy:i,middlewareData:C,rects:l,platform:c,elements:{reference:t,floating:e}});if(s=V!=null?V:s,u=A!=null?A:u,C=v(h({},C),{[at]:z!=null?z:{}}),L){typeof L=="object"&&L.placement&&(f=L.placement),l=await c.getElementRects({reference:t,floating:e,strategy:i}),{x:s,y:u}=K(v(h({},l),{placement:f})),T=-1;continue}}return{x:s,y:u,placement:f,strategy:i,middlewareData:C}};function Q(t){return v(h({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function j(t){return(t==null?void 0:t.toString())==="[object Window]"}function g(t){if(t==null)return window;if(!j(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function k(t){return g(t).getComputedStyle(t)}function p(t){return j(t)?"":t?(t.nodeName||"").toLowerCase():""}function d(t){return t instanceof g(t).HTMLElement}function H(t){return t instanceof g(t).Element}function _t(t){return t instanceof g(t).Node}function Z(t){const e=g(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function N(t){const{overflow:e,overflowX:n,overflowY:o}=k(t);return/auto|scroll|overlay|hidden/.test(e+o+n)}function Ct(t){return["table","td","th"].includes(p(t))}function tt(t){const e=navigator.userAgent.toLowerCase().includes("firefox"),n=k(t);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||e&&n.willChange==="filter"||e&&(n.filter?n.filter!=="none":!1)}function w(t,e){e===void 0&&(e=!1);const n=t.getBoundingClientRect();let o=1,i=1;return e&&d(t)&&(o=t.offsetWidth>0&&Math.round(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&Math.round(n.height)/t.offsetHeight||1),{width:n.width/o,height:n.height/i,top:n.top/i,right:n.right/o,bottom:n.bottom/i,left:n.left/o,x:n.left/o,y:n.top/i}}function m(t){return((_t(t)?t.ownerDocument:t.document)||window.document).documentElement}function F(t){return j(t)?{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}:{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function et(t){return w(m(t)).left+F(t).scrollLeft}function Tt(t){const e=w(t);return Math.round(e.width)!==t.offsetWidth||Math.round(e.height)!==t.offsetHeight}function Lt(t,e,n){const o=d(e),i=m(e),a=w(t,o&&Tt(e));let c={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(o||!o&&n!=="fixed")if((p(e)!=="body"||N(i))&&(c=F(e)),d(e)){const s=w(e,!0);l.x=s.x+e.clientLeft,l.y=s.y+e.clientTop}else i&&(l.x=et(i));return{x:a.left+c.scrollLeft-l.x,y:a.top+c.scrollTop-l.y,width:a.width,height:a.height}}function M(t){return p(t)==="html"?t:t.assignedSlot||t.parentNode||(Z(t)?t.host:null)||m(t)}function nt(t){return!d(t)||getComputedStyle(t).position==="fixed"?null:t.offsetParent}function Pt(t){let e=M(t);for(;d(e)&&!["html","body"].includes(p(e));){if(tt(e))return e;e=e.parentNode}return null}function B(t){const e=g(t);let n=nt(t);for(;n&&Ct(n)&&getComputedStyle(n).position==="static";)n=nt(n);return n&&(p(n)==="html"||p(n)==="body"&&getComputedStyle(n).position==="static"&&!tt(n))?e:n||Pt(t)||e}function ot(t){return{width:t.offsetWidth,height:t.offsetHeight}}function Rt(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=d(n),a=m(n);if(n===a)return e;let c={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((i||!i&&o!=="fixed")&&((p(n)!=="body"||N(a))&&(c=F(n)),d(n))){const s=w(n,!0);l.x=s.x+n.clientLeft,l.y=s.y+n.clientTop}return v(h({},e),{x:e.x-c.scrollLeft+l.x,y:e.y-c.scrollTop+l.y})}function Wt(t){const e=g(t),n=m(t),o=e.visualViewport;let i=n.clientWidth,a=n.clientHeight,c=0,l=0;return o&&(i=o.width,a=o.height,Math.abs(e.innerWidth/o.scale-o.width)<.001&&(c=o.offsetLeft,l=o.offsetTop)),{width:i,height:a,x:c,y:l}}const it=Math.min,E=Math.max;function $t(t){var e;const n=m(t),o=F(t),i=(e=t.ownerDocument)==null?void 0:e.body,a=E(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),c=E(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let l=-o.scrollLeft+et(t);const s=-o.scrollTop;return k(i||n).direction==="rtl"&&(l+=E(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:c,x:l,y:s}}function lt(t){return["html","body","#document"].includes(p(t))?t.ownerDocument.body:d(t)&&N(t)?t:lt(M(t))}function _(t,e){var n;e===void 0&&(e=[]);const o=lt(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),a=g(o),c=i?[a].concat(a.visualViewport||[],N(o)?o:[]):o,l=e.concat(c);return i?l:l.concat(_(M(c)))}function St(t,e){const n=e.getRootNode==null?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&Z(n)){let o=e;do{if(o&&t===o)return!0;o=o.parentNode||o.host}while(o)}return!1}function Ht(t){const e=w(t),n=e.top+t.clientTop,o=e.left+t.clientLeft;return{top:n,left:o,x:o,y:n,right:o+t.clientWidth,bottom:n+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}function st(t,e){return e==="viewport"?Q(Wt(t)):H(e)?Ht(e):Q($t(m(t)))}function Nt(t){const e=_(M(t)),n=["absolute","fixed"].includes(k(t).position),o=n&&d(t)?B(t):t;return H(o)?e.filter(i=>H(i)&&St(i,o)&&p(i)!=="body"&&(n?k(i).position!=="static":!0)):[]}function Ft(t){let{element:e,boundary:n,rootBoundary:o}=t;const a=[...n==="clippingParents"?Nt(e):[].concat(n),o],c=a[0],l=a.reduce((s,u)=>{const f=st(e,u);return s.top=E(f.top,s.top),s.right=it(f.right,s.right),s.bottom=it(f.bottom,s.bottom),s.left=E(f.left,s.left),s},st(e,c));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}const Mt={getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t;return{reference:Lt(e,B(n),o),floating:v(h({},ot(n)),{x:0,y:0})}},convertOffsetParentRelativeRectToViewportRelativeRect:t=>Rt(t),getOffsetParent:t=>{let{element:e}=t;return B(e)},isElement:t=>H(t),getDocumentElement:t=>{let{element:e}=t;return m(e)},getClippingClientRect:t=>Ft(t),getDimensions:t=>{let{element:e}=t;return ot(e)}},rt=(t,e,n)=>Et(t,e,h({platform:Mt},n)),Ot=P({setup(t){const e=y(null),n=y(null),o=Y({x:0,y:0});async function i(){D(e.value!==null&&n.value!==null);const{x:a,y:c}=await rt(e.value,n.value,{placement:"top"});Object.assign(o,{x:a,y:c})}return gt(async()=>{D(e.value!==null&&n.value!==null),i(),_(e.value).forEach(a=>{a.addEventListener("scroll",i),a.addEventListener("resize",i)})}),(a,c)=>(b(),x("span",q({ref_key:"reference",ref:e},a.$attrs),[R(a.$slots,"default"),W("div",{ref_key:"floating",ref:n,class:"absolute top-0 left-0",style:U({transform:`translate(${$(o).x}px, ${$(o).y}px)`})},[R(a.$slots,"floating")],4)],16))}}),Dt=O(" Result: demo sentence with "),jt=O(" floating "),Bt=W("div",{class:"px-2 py-1 bg-white border rounded-lg"},"tooltip",-1),Vt=O(" element. "),At=P({setup(t){return(e,n)=>(b(),x(mt,null,[Dt,G(Ot,{class:"inline-block underline"},{floating:S(()=>[Bt]),default:S(()=>[jt]),_:1}),Vt],64))}}),zt=P({props:{visible:{type:Boolean}},setup(t){const e=t,n=y(null),o=y(null),i=Y({x:0,y:0});async function a(){D(n.value!==null&&o.value!==null);const{x:s,y:u}=await rt(n.value,o.value,{placement:"top"});Object.assign(i,{x:s,y:u})}function c(){n.value!==null&&_(n.value).forEach(s=>{s.addEventListener("scroll",a),s.addEventListener("resize",a)})}function l(){n.value!==null&&_(n.value).forEach(s=>{s.removeEventListener("scroll",a),s.removeEventListener("resize",a)})}return vt(()=>e.visible,s=>{s?yt(()=>{a(),c()}):l()},{immediate:!0}),(s,u)=>(b(),x("span",q({ref_key:"reference",ref:n},s.$attrs),[R(s.$slots,"default"),t.visible?(b(),x("div",{key:0,ref_key:"floating",ref:o,class:"absolute top-0 left-0",style:U({transform:`translate(${$(i).x}px, ${$(i).y}px)`})},[R(s.$slots,"floating")],4)):wt("",!0)],16))}});const It={class:"text-center py-2"},Xt=W("div",{class:"px-2 py-1 bg-white border rounded-lg"},"tooltip",-1),Yt=P({setup(t){const e=y(!1);return(n,o)=>(b(),x("div",It,[G(zt,{visible:e.value,class:"inline-block"},{floating:S(()=>[Xt]),default:S(()=>[W("button",{class:"btn",onClick:o[0]||(o[0]=i=>e.value=!e.value)},"click to toggle")]),_:1},8,["visible"])]))}}),Ut=[r("h1",{},["Create a floating component"]),r("h2",{},["Problem"]),r("p",{},["You want to show a menu or tooltip, after user clicks / hovers a button."]),r("h2",{},["Solution"]),r("p",{},["Floating components doesn\u2019t disrupt the flow of the main content. Therefore, we actually don\u2019t have to make any modification to the main content. The biggest concerns of building a floating component are about the floating element itself:"]),r("ol",{},[r("li",{},["We should decide the position of the floating element relative to the reference element."]),r("li",{},["We want to control when and how it appears / disappears."])]),r("p",{},["For the first concern, there is a dedicated library specifically for floating element positioning called ",r("a",{href:"http://floating-ui.com"},["Floating UI"])," (formerly ",r("a",{href:"https://popper.js.org"},["Popper.js"]),"). It helps us to calculate the relative position of the floating element to the reference, with a handy collection of positioning strategies supported. While it is good to use it as the documentation demonstrates, we may still want to integrate it into a Vue component, in order to have a more consistent API with better organization and control of logic."]),r("h3",{},["Take #1"]),r("p",{},["For convenience, we want our Vue component to wrap the reference element, and also be able to write the floating component within it. We can achieve this by using ",r("a",{href:"https://v3.vuejs.org/guide/component-slots.html#named-slots"},["named slots"]),". The inital API design would be like this:"]),r("pre",{},[`<Float class="inline-block underline">
  floating
  <template #floating>
    <div class="px-2 py-1 bg-white border rounded-lg">tooltip</div>
  </template>
</Float>
`]),r("p",{},["We write a basic component positioning logic:"]),r("pre",{},[`<template>
  <span ref="reference" v-bind="$attrs">
    <slot />
    <div
      ref="floating"
      class="absolute top-0 left-0"
      :style="{ transform: \`translate(\${position.x}px, \${position.y}px)\` }"
    >
      <slot name="floating" />
    </div>
  </span>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, Ref } from 'vue'
import { computePosition, getScrollParents } from '@floating-ui/dom'
const reference: Ref<HTMLElement | null> = ref(null)
const floating: Ref<HTMLElement | null> = ref(null)
const position = reactive({ x: 0, y: 0 })
async function update() {
  assert(reference.value !== null && floating.value !== null)
  const { x, y } = await computePosition(reference.value, floating.value, {
    placement: 'top',
  })
  Object.assign(position, { x, y })
}
onMounted(() => {
  assert(reference.value !== null && floating.value !== null)
  update()
  getScrollParents(reference.value).forEach((el) => {
    el.addEventListener('scroll', update)
    el.addEventListener('resize', update)
  })
})
<\/script>
`]),r(At,{}),r("p",{},["Some key features in this implementation:"]),r("ol",{},[r("li",{},["We put the floating element intially at top-left corner with ",r("code",{},["position: absolute"]),", to make sure it can be moved correctly and efficiently using CSS transform ",r("code",{},["translate()"]),"."]),r("li",{},["We use reactive variable ",r("code",{},["position"])," to track position change, and use inline style binding to actually set position. The position is calculated by Floating UI in function ",r("code",{},["update"]),"."]),r("li",{},["It is made explicit that the position of the floating element is recalculated whenever the reference element changes position (when scroll or resize happens to one of its ancestors)."])]),r("h3",{},["Take #2"]),r("p",{},["Now we want to control whether the floating element is visible. Our first implementation is a simple one: click to toggle visibility."]),r(Yt,{}),r("pre",{},[`<template>
  <Float :visible="visible" class="inline-block">
    <button class="btn" @click="visible = !visible">click to toggle</button>
    <template #floating>
      <div class="px-2 py-1 bg-white border rounded-lg">tooltip</div>
    </template>
  </Float>
</template>
<style lang="postcss">
.btn {
  @apply px-3 py-1 bg-gray-800 text-white font-semibold rounded-lg;
}
</style>
`]),r("pre",{},[`<template>
  <span ref="reference" v-bind="$attrs">
    <slot />
    <div
      v-if="visible"
      ref="floating"
      class="absolute top-0 left-0"
      :style="{ transform: \`translate(\${position.x}px, \${position.y}px)\` }"
    >
      <slot name="floating" />
    </div>
  </span>
</template>
<script lang="ts" setup>
import { watch, ref, reactive, Ref, nextTick } from 'vue'
import { computePosition, getScrollParents } from '@floating-ui/dom'
import { assert } from 'vpage/utils'

const props = defineProps<{
  visible: boolean
}>()
const reference: Ref<HTMLElement | null> = ref(null)
const floating: Ref<HTMLElement | null> = ref(null)
const position = reactive({ x: 0, y: 0 })

async function update() {
  assert(reference.value !== null && floating.value !== null)
  const { x, y } = await computePosition(reference.value, floating.value, {
    placement: 'top',
  })
  Object.assign(position, { x, y })
}
function addHooks() {
  reference.value !== null &&
    getScrollParents(reference.value).forEach((el) => {
      el.addEventListener('scroll', update)
      el.addEventListener('resize', update)
    })
}
function removeHooks() {
  reference.value !== null &&
    getScrollParents(reference.value).forEach((el) => {
      el.removeEventListener('scroll', update)
      el.removeEventListener('resize', update)
    })
}

watch(
  () => props.visible,
  (v) => {
    if (v)
      nextTick(() => {
        update()
        addHooks()
      })
    else removeHooks()
  },
  { immediate: true },
)
<\/script>
`]),r("p",{},["Here we use ",r("code",{},["v-if"])," on ",r("code",{},["visible"])," prop to control the visibility of the floating element. Each time ",r("code",{},["props.visible"])," is set or changed, we should recalculate the position and maintain the update hooks. We achieve this by using ",r("a",{href:"https://v3.vuejs.org/guide/reactivity-computed-watchers.html#watching-reactive-objects"},[r("code",{},["watch"])]),". Notice that we use ",r("code",{},["{ immediate: true }"])," to setup on inital state. We also use ",r("code",{},["nextTick"])," to ensure floating element is rendered before we update its position."]),r("h3",{},["Take #3"]),r("p",{},["We want to support more natural interactions like click outside to hide."])];var Kt={render(){return Ut}};const Qt={title:"Create a floating component",layout:"book"};export{Kt as default,Qt as frontmatter,Ut as nodes};
