var Ce=Object.defineProperty,Pe=Object.defineProperties;var Le=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var re=(e,t,n)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))le.call(t,n)&&re(e,n,t[n]);if(N)for(var n of N(t))se.call(t,n)&&re(e,n,t[n]);return e},_=(e,t)=>Pe(e,Le(t));var ae=(e,t)=>{var n={};for(var o in e)le.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&N)for(var o of N(e))t.indexOf(o)<0&&se.call(e,o)&&(n[o]=e[o]);return n};import{d as F,l as E,m as U,n as ce,o as L,f as T,j as v,q as H,t as q,v as R,w,x as ue,y as G,z as O,A as fe,T as Te,F as J,B as pe,C as K,D as Me,k as de,h as r}from"./vendor.4c9b330d.js";function j(e){return e.split("-")[0]}function $e(e){return e.split("-")[1]}function Q(e){return["top","bottom"].includes(j(e))?"x":"y"}function Re(e){return e==="y"?"height":"width"}function me(e){let{reference:t,floating:n,placement:o}=e;const i=t.x+t.width/2-n.width/2,a=t.y+t.height/2-n.height/2;let l;switch(j(o)){case"top":l={x:i,y:t.y-n.height};break;case"bottom":l={x:i,y:t.y+t.height};break;case"right":l={x:t.x+t.width,y:a};break;case"left":l={x:t.x-n.width,y:a};break;default:l={x:t.x,y:t.y}}const s=Q(o),c=Re(s);switch($e(o)){case"start":l[s]=l[s]-(t[c]/2-n[c]/2);break;case"end":l[s]=l[s]+(t[c]/2-n[c]/2);break}return l}const Se=async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:l}=n;let s=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:d}=me(_(b({},s),{placement:o})),f=o,u={};for(let m=0;m<a.length;m++){const{name:h,fn:p}=a[m],{x,y:g,data:y,reset:k}=await p({x:c,y:d,initialPlacement:o,placement:f,strategy:i,middlewareData:u,rects:s,platform:l,elements:{reference:e,floating:t}});if(c=x!=null?x:c,d=g!=null?g:d,u=_(b({},u),{[h]:y!=null?y:{}}),k){typeof k=="object"&&k.placement&&(f=k.placement),s=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:d}=me(_(b({},s),{placement:f})),m=-1;continue}}return{x:c,y:d,placement:f,strategy:i,middlewareData:u}};function Fe(e){return b({top:0,right:0,bottom:0,left:0},e)}function He(e){return typeof e!="number"?Fe(e):{top:e,right:e,bottom:e,left:e}}function Z(e){return _(b({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function Oe(e,t){t===void 0&&(t={});const{x:n,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:c="clippingParents",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:u=!1,padding:m=0}=t,h=He(m),x=l[u?f==="floating"?"reference":"floating":f],g=await i.getClippingClientRect({element:await i.isElement(x)?x:x.contextElement||await i.getDocumentElement({element:l.floating}),boundary:c,rootBoundary:d}),y=Z(await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f==="floating"?_(b({},a.floating),{x:n,y:o}):a.reference,offsetParent:await i.getOffsetParent({element:l.floating}),strategy:s}));return{top:g.top-y.top+h.top,bottom:y.bottom-g.bottom+h.bottom,left:g.left-y.left+h.left,right:y.right-g.right+h.right}}const We=Math.min,Ae=Math.max;function he(e,t,n){return Ae(e,We(t,n))}function De(e){let{placement:t,rects:n,value:o}=e;const i=j(t),a=["left","top"].includes(i)?-1:1,l=typeof o=="function"?o(_(b({},n),{placement:t})):o,{mainAxis:s,crossAxis:c}=typeof l=="number"?{mainAxis:l,crossAxis:0}:b({mainAxis:0,crossAxis:0},l);return Q(i)==="x"?{x:c,y:s*a}:{x:s*a,y:c}}const ee=function(e){return e===void 0&&(e=0),{name:"offset",fn(t){const{x:n,y:o,placement:i,rects:a}=t,l=De({placement:i,rects:a,value:e});return{x:n+l.x,y:o+l.y,data:l}}}};function Ne(e){return e==="x"?"y":"x"}const te=function(e){return e===void 0&&(e={}),{name:"shift",async fn(t){const{x:n,y:o,placement:i}=t,x=e,{mainAxis:a=!0,crossAxis:l=!1,limiter:s=g=>{let{x:y,y:k}=g;return{x:y,y:k}}}=x,c=ae(x,["mainAxis","crossAxis","limiter"]),d={x:n,y:o},f=await Oe(t,c),u=Q(j(i)),m=Ne(u);let h=d[u],p=d[m];if(a){const g=u==="y"?"top":"left",y=u==="y"?"bottom":"right",k=h+f[g],Y=h-f[y];h=he(k,h,Y)}if(l){const g=m==="y"?"top":"left",y=m==="y"?"bottom":"right",k=p+f[g],Y=p-f[y];p=he(k,p,Y)}return s(_(b({},t),{[u]:h,[m]:p}))}}};function ne(e){return(e==null?void 0:e.toString())==="[object Window]"}function M(e){if(e==null)return window;if(!ne(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function A(e){return M(e).getComputedStyle(e)}function C(e){return ne(e)?"":e?(e.nodeName||"").toLowerCase():""}function P(e){return e instanceof M(e).HTMLElement}function z(e){return e instanceof M(e).Element}function je(e){return e instanceof M(e).Node}function ve(e){const t=M(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function V(e){const{overflow:t,overflowX:n,overflowY:o}=A(e);return/auto|scroll|overlay|hidden/.test(t+o+n)}function ze(e){return["table","td","th"].includes(C(e))}function ge(e){const t=navigator.userAgent.toLowerCase().includes("firefox"),n=A(e);return n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].includes(n.willChange)||t&&n.willChange==="filter"||t&&(n.filter?n.filter!=="none":!1)}function W(e,t){t===void 0&&(t=!1);const n=e.getBoundingClientRect();let o=1,i=1;return t&&P(e)&&(o=e.offsetWidth>0&&Math.round(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Math.round(n.height)/e.offsetHeight||1),{width:n.width/o,height:n.height/i,top:n.top/i,right:n.right/o,bottom:n.bottom/i,left:n.left/o,x:n.left/o,y:n.top/i}}function $(e){return((je(e)?e.ownerDocument:e.document)||window.document).documentElement}function B(e){return ne(e)?{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}:{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function ye(e){return W($(e)).left+B(e).scrollLeft}function Ve(e){const t=W(e);return Math.round(t.width)!==e.offsetWidth||Math.round(t.height)!==e.offsetHeight}function Be(e,t,n){const o=P(t),i=$(t),a=W(e,o&&Ve(t));let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(o||!o&&n!=="fixed")if((C(t)!=="body"||V(i))&&(l=B(t)),P(t)){const c=W(t,!0);s.x=c.x+t.clientLeft,s.y=c.y+t.clientTop}else i&&(s.x=ye(i));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}function I(e){return C(e)==="html"?e:e.assignedSlot||e.parentNode||(ve(e)?e.host:null)||$(e)}function be(e){return!P(e)||getComputedStyle(e).position==="fixed"?null:e.offsetParent}function Ie(e){let t=I(e);for(;P(t)&&!["html","body"].includes(C(t));){if(ge(t))return t;t=t.parentNode}return null}function oe(e){const t=M(e);let n=be(e);for(;n&&ze(n)&&getComputedStyle(n).position==="static";)n=be(n);return n&&(C(n)==="html"||C(n)==="body"&&getComputedStyle(n).position==="static"&&!ge(n))?t:n||Ie(e)||t}function we(e){return{width:e.offsetWidth,height:e.offsetHeight}}function Xe(e){let{rect:t,offsetParent:n,strategy:o}=e;const i=P(n),a=$(n);if(n===a)return t;let l={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if((i||!i&&o!=="fixed")&&((C(n)!=="body"||V(a))&&(l=B(n)),P(n))){const c=W(n,!0);s.x=c.x+n.clientLeft,s.y=c.y+n.clientTop}return _(b({},t),{x:t.x-l.scrollLeft+s.x,y:t.y-l.scrollTop+s.y})}function Ye(e){const t=M(e),n=$(e),o=t.visualViewport;let i=n.clientWidth,a=n.clientHeight,l=0,s=0;return o&&(i=o.width,a=o.height,Math.abs(t.innerWidth/o.scale-o.width)<.001&&(l=o.offsetLeft,s=o.offsetTop)),{width:i,height:a,x:l,y:s}}const xe=Math.min,D=Math.max;function Ue(e){var t;const n=$(e),o=B(e),i=(t=e.ownerDocument)==null?void 0:t.body,a=D(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),l=D(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let s=-o.scrollLeft+ye(e);const c=-o.scrollTop;return A(i||n).direction==="rtl"&&(s+=D(n.clientWidth,i?i.clientWidth:0)-a),{width:a,height:l,x:s,y:c}}function ke(e){return["html","body","#document"].includes(C(e))?e.ownerDocument.body:P(e)&&V(e)?e:ke(I(e))}function S(e,t){var n;t===void 0&&(t=[]);const o=ke(e),i=o===((n=e.ownerDocument)==null?void 0:n.body),a=M(o),l=i?[a].concat(a.visualViewport||[],V(o)?o:[]):o,s=t.concat(l);return i?s:s.concat(S(I(l)))}function qe(e,t){const n=t.getRootNode==null?void 0:t.getRootNode();if(e.contains(t))return!0;if(n&&ve(n)){let o=t;do{if(o&&e===o)return!0;o=o.parentNode||o.host}while(o)}return!1}function Ge(e){const t=W(e),n=t.top+e.clientTop,o=t.left+e.clientLeft;return{top:n,left:o,x:o,y:n,right:o+e.clientWidth,bottom:n+e.clientHeight,width:e.clientWidth,height:e.clientHeight}}function _e(e,t){return t==="viewport"?Z(Ye(e)):z(t)?Ge(t):Z(Ue($(e)))}function Je(e){const t=S(I(e)),n=["absolute","fixed"].includes(A(e).position),o=n&&P(e)?oe(e):e;return z(o)?t.filter(i=>z(i)&&qe(i,o)&&C(i)!=="body"&&(n?A(i).position!=="static":!0)):[]}function Ke(e){let{element:t,boundary:n,rootBoundary:o}=e;const a=[...n==="clippingParents"?Je(t):[].concat(n),o],l=a[0],s=a.reduce((c,d)=>{const f=_e(t,d);return c.top=D(f.top,c.top),c.right=xe(f.right,c.right),c.bottom=xe(f.bottom,c.bottom),c.left=D(f.left,c.left),c},_e(t,l));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}const Qe={getElementRects:e=>{let{reference:t,floating:n,strategy:o}=e;return{reference:Be(t,oe(n),o),floating:_(b({},we(n)),{x:0,y:0})}},convertOffsetParentRelativeRectToViewportRelativeRect:e=>Xe(e),getOffsetParent:e=>{let{element:t}=e;return oe(t)},isElement:e=>z(e),getDocumentElement:e=>{let{element:t}=e;return $(t)},getClippingClientRect:e=>Ke(e),getDimensions:e=>{let{element:t}=e;return we(t)}},ie=(e,t,n)=>Se(e,t,b({platform:Qe},n)),X=F({props:{type:null,placement:null},setup(e){const t=e,n=E(!1),o=E(null),i=E(null),a=U({x:0,y:0});async function l(){if(o.value===null||i.value===null)return;const{x:p,y:x}=await ie(o.value,i.value,{placement:t.placement,middleware:[ee(5),te()]});Object.assign(a,{x:Math.round(p),y:Math.round(x)})}function s(){o.value!==null&&S(o.value).forEach(p=>{p.addEventListener("scroll",l),p.addEventListener("resize",l)})}function c(){o.value!==null&&S(o.value).forEach(p=>{p.removeEventListener("scroll",l),p.removeEventListener("resize",l)})}function d(){n.value!==!0&&(n.value=!0,pe(()=>{l(),s()}))}function f(){n.value!==!1&&(c(),n.value=!1)}const u=E(!1);function m(){t.type==="hover"&&(u.value=!0,d())}function h(){t.type==="hover"&&(u.value=!1,setTimeout(()=>{u.value||f()},50))}return(p,x)=>{const g=ce("click-outside");return L(),T(J,null,[v("div",q({ref_key:"reference",ref:o},p.$attrs,{onClick:d,onMouseover:m,onMouseleave:h}),[H(p.$slots,"default",{active:n.value,show:d,hide:f})],16),R(Te,{"enter-active-class":"transition-opacity duration-100 ease-out","leave-active-class":"transition-opacity duration-100 ease-out","enter-from-class":"opacity-0","leave-to-class":"opacity-0"},{default:w(()=>[n.value?ue((L(),T("div",{key:0,ref_key:"floating",ref:i,class:"absolute top-0 left-0",style:G({transform:`translate(${O(a).x}px, ${O(a).y}px)`}),onMouseover:m,onMouseleave:h},[H(p.$slots,"floating",{visible:n.value,show:d,hide:f})],36)),[[g,f,"mouseup"]]):fe("",!0)]),_:3})],64)}}});const Ze={class:"relative text-center py-4"},et=v("button",{class:"btn"},"show menu",-1),tt={class:"menu"},nt={class:"menu -mt-1"},ot={class:"menu -mt-1"},it=["onClick"],lt=["onClick"],st=v("div",{class:"menu -mt-1"},[v("button",{class:"menu-item text-gray-400 cursor-not-allowed"}," disabled ")],-1),Ee=F({setup(e){return(t,n)=>(L(),T("div",Ze,[R(X,{class:"inline-block",placement:"bottom-start"},{default:w(()=>[et]),floating:w(o=>[v("div",tt,[R(X,{class:"block",type:"hover",placement:"right-start"},{default:w(i=>[v("button",{class:K(["menu-item",{"bg-gray-100":i.active}])}," menu 1 ",2)]),floating:w(()=>[v("div",nt,[R(X,{class:"block",type:"hover",placement:"right-start"},{default:w(i=>[v("button",{class:K(["menu-item",i.active?"bg-gray-100":"bg-white"])}," submenu 1 ",2)]),floating:w(()=>[v("div",ot,[v("button",{class:"menu-item",onClick:o.hide}," close ",8,it)])]),_:2},1024),v("button",{class:"menu-item",onClick:o.hide},"close",8,lt)])]),_:2},1024),R(X,{class:"block",type:"hover",placement:"right-start"},{default:w(i=>[v("button",{class:K(["menu-item",i.active?"bg-gray-100":"bg-white"])}," menu 2 ",2)]),floating:w(()=>[st]),_:1})])]),_:1})]))}}),rt=F({setup(e){const t=E(null),n=E(null),o=U({x:0,y:0});async function i(){if(t.value===null||n.value===null)return;const{x:a,y:l}=await ie(t.value,n.value,{placement:"top",middleware:[ee(5),te()]});Object.assign(o,{x:Math.round(a),y:Math.round(l)})}return Me(async()=>{t.value===null||n.value===null||(i(),S(t.value).forEach(a=>{a.addEventListener("scroll",i),a.addEventListener("resize",i)}))}),(a,l)=>(L(),T(J,null,[v("div",q({ref_key:"reference",ref:t},a.$attrs),[H(a.$slots,"default")],16),v("div",{ref_key:"floating",ref:n,class:"absolute top-0 left-0 z-auto",style:G({transform:`translate(${O(o).x}px, ${O(o).y}px)`})},[H(a.$slots,"floating")],4)],64))}});const at={class:"relative text-center py-4"},ct=de(" button "),ut=v("div",{class:"tooltip"},"tooltip",-1),ft=F({setup(e){return(t,n)=>(L(),T("div",at,[R(rt,{class:"inline-block btn",placement:"top"},{floating:w(()=>[ut]),default:w(()=>[ct]),_:1})]))}}),pt=F({props:{placement:null},setup(e){const t=e,n=E(!1),o=E(null),i=E(null),a=U({x:0,y:0});async function l(){if(o.value===null||i.value===null)return;const{x:u,y:m}=await ie(o.value,i.value,{placement:t.placement,middleware:[ee(5),te()]});Object.assign(a,{x:Math.round(u),y:Math.round(m)})}function s(){o.value!==null&&S(o.value).forEach(u=>{u.addEventListener("scroll",l),u.addEventListener("resize",l)})}function c(){o.value!==null&&S(o.value).forEach(u=>{u.removeEventListener("scroll",l),u.removeEventListener("resize",l)})}function d(){n.value!==!0&&(n.value=!0,pe(()=>{l(),s()}))}function f(){n.value!==!1&&(c(),n.value=!1)}return(u,m)=>{const h=ce("click-outside");return L(),T(J,null,[v("div",q({ref_key:"reference",ref:o},u.$attrs,{onClick:d}),[H(u.$slots,"default")],16),n.value?ue((L(),T("div",{key:0,ref_key:"floating",ref:i,class:"absolute top-0 left-0",style:G({transform:`translate(${O(a).x}px, ${O(a).y}px)`})},[H(u.$slots,"floating")],4)),[[h,f,"mouseup"]]):fe("",!0)],64)}}});const dt={class:"relative text-center py-4"},mt=de(" button "),ht=v("div",{class:"tooltip"},"tooltip",-1),vt=F({setup(e){return(t,n)=>(L(),T("div",dt,[R(pt,{class:"inline-block btn",placement:"top"},{floating:w(()=>[ht]),default:w(()=>[mt]),_:1})]))}}),gt=[r("h1",{},["Create a floating component"]),r("h2",{},["Problem"]),r("p",{},["You want to show a menu or tooltip like this, after user clicks / hovers a button:"]),r(Ee,{}),r("h2",{},["Solution"]),r("p",{},["Floating components doesn\u2019t disrupt the flow of the main content. Therefore, we actually don\u2019t have to make any modification to the main content. The biggest concerns of building a floating component are about the floating element itself:"]),r("ol",{},[r("li",{},["We should decide the position of the floating element relative to the reference element."]),r("li",{},["We want to control when and how it appears / disappears."])]),r("p",{},["For the first concern, there is a dedicated library specifically for floating element positioning called ",r("a",{href:"http://floating-ui.com"},["Floating UI"])," (formerly ",r("a",{href:"https://popper.js.org"},["Popper.js"]),"). It helps us to calculate the relative position of the floating element to the reference, with a handy collection of positioning strategies supported. While it is good to use it as the documentation demonstrates, we may still want to integrate it into a Vue component, in order to have a more consistent API with better organization and control of logic."]),r("h3",{},["Take #1"]),r("p",{},["For convenience, we want our Vue component to wrap the reference element, and also be able to write the floating component within it. We can achieve this by using ",r("a",{href:"https://v3.vuejs.org/guide/component-slots.html#named-slots"},["named slots"]),". The inital API design would be like this:"]),r("pre",{},[`<template>
  <div class="relative text-center py-4">
    <Float class="inline-block btn" placement="top">
      button
      <template #floating>
        <div class="tooltip">tooltip</div>
      </template>
    </Float>
  </div>
</template>
<script lang="ts" setup>
import Float from './Float1.vue'
<\/script>
<style lang="postcss">
.btn {
  @apply px-3 py-1 bg-gray-800 text-white font-semibold rounded-lg cursor-pointer;
}
.tooltip {
  @apply px-2 py-1 bg-white ring-1 ring-gray-200 rounded-lg shadow-sm;
}
</style>
`]),r("p",{},["We write a basic component positioning logic:"]),r("pre",{},[`<template>
  <div ref="reference" v-bind="$attrs">
    <slot />
  </div>
  <div
    ref="floating"
    class="absolute top-0 left-0 z-auto"
    :style="{ transform: \`translate(\${position.x}px, \${position.y}px)\` }"
  >
    <slot name="floating" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, Ref } from 'vue'
import {
  computePosition,
  getScrollParents,
  offset,
  shift,
} from '@floating-ui/dom'
const reference: Ref<HTMLElement | null> = ref(null)
const floating: Ref<HTMLElement | null> = ref(null)
const position = reactive({ x: 0, y: 0 })
async function update() {
  if (reference.value === null || floating.value === null) return
  const { x, y } = await computePosition(reference.value, floating.value, {
    placement: 'top',
    middleware: [offset(5), shift()],
  })
  Object.assign(position, {
    x: Math.round(x),
    y: Math.round(y),
  })
}
onMounted(async () => {
  if (reference.value === null || floating.value === null) return
  update()
  getScrollParents(reference.value).forEach((el) => {
    el.addEventListener('scroll', update)
    el.addEventListener('resize', update)
  })
})
<\/script>
`]),r("p",{},["The result looks like:"]),r(ft,{}),r("p",{},["Some key features in this implementation:"]),r("ol",{},[r("li",{},["We put the floating element intially at top-left corner with ",r("code",{},["position: absolute"]),", to make sure it can be moved correctly and efficiently using CSS transform ",r("code",{},["translate()"]),"."]),r("li",{},["We use reactive variable ",r("code",{},["position"])," to track position change, and use inline style binding to actually set position. The position is calculated by Floating UI in function ",r("code",{},["update"]),". Notice that we rounded the position for reason described ",r("a",{href:"https://floating-ui.com/docs/misc#subpixel-and-accelerated-positioning"},["here"]),"."]),r("li",{},["It is made explicit that the position of the floating element is recalculated whenever the reference element changes position (when scroll or resize happens to one of its ancestors). Details are described ",r("a",{href:"https://floating-ui.com/docs/computePosition#scrollparents"},["here"]),"."])]),r("h3",{},["Take #2"]),r("p",{},["Now we want to control whether the floating element is visible. Our first implementation is a simple one: click to show tooltip, and click outside to hide it."]),r("p",{},["Basically, our new component maintains an internal state (",r("code",{},["visible"]),") for the visibility of the tooltip. On reference element clicking, we modify ",r("code",{},["visible"])," to be true, and register update hooks. We also add a event listener for clicking outside as described ",r("a",{href:"/vue-cookbook/utilities/02-detect-click-outside"},["here"]),"."]),r("pre",{},[`<template>
  <div ref="reference" v-bind="$attrs" @click="show">
    <slot />
  </div>
  <div
    v-if="visible"
    ref="floating"
    v-click-outside:mouseup="hide"
    class="absolute top-0 left-0"
    :style="{ transform: \`translate(\${position.x}px, \${position.y}px)\` }"
  >
    <slot name="floating" />
  </div>
</template>
<script lang="ts" setup>
import { ref, reactive, Ref, nextTick } from 'vue'
import {
  computePosition,
  getScrollParents,
  offset,
  shift,
} from '@floating-ui/dom'
import { Placement } from '@floating-ui/core'

const props = defineProps<{
  placement?: Placement
}>()
const visible = ref(false)
const reference: Ref<HTMLElement | null> = ref(null)
const floating: Ref<HTMLElement | null> = ref(null)
const position = reactive({ x: 0, y: 0 })

async function update() {
  if (reference.value === null || floating.value === null) return
  const { x, y } = await computePosition(reference.value, floating.value, {
    placement: props.placement,
    middleware: [offset(5), shift()],
  })
  Object.assign(position, {
    x: Math.round(x),
    y: Math.round(y),
  })
}

function addHooks() {
  if (reference.value === null) return
  getScrollParents(reference.value).forEach((el) => {
    el.addEventListener('scroll', update)
    el.addEventListener('resize', update)
  })
}
function removeHooks() {
  if (reference.value === null) return
  getScrollParents(reference.value).forEach((el) => {
    el.removeEventListener('scroll', update)
    el.removeEventListener('resize', update)
  })
}
function show() {
  if (visible.value === true) return
  visible.value = true
  nextTick(() => {
    update()
    addHooks()
  })
}
function hide() {
  if (visible.value === false) return
  removeHooks()
  visible.value = false
}
<\/script>
`]),r("p",{},["The result looks like:"]),r(vt,{}),r("h3",{},["Take #3"]),r("p",{},["The final version includes more features to make it even more usable:"]),r("ol",{},[r("li",{},["We support different types of triggering condition (hover). We do this by attaching hooks to mouseover and mouseleave events."]),r("li",{},["We allow the user to access and change the internal visibility state (See ",r("a",{href:"https://v3.vuejs.org/guide/component-slots.html#scoped-slots"},["scoped slots"]),")."]),r("li",{},["We support a smooth transition on visibility change. We do this according to ",r("a",{href:"https://v3.vuejs.org/guide/transitions-enterleave.html#custom-transition-classes"},["Vue documentation"]),"."])]),r("p",{},["The implementation looks like this:"]),r("pre",{},[`<template>
  <div
    ref="reference"
    v-bind="$attrs"
    @click="show"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <slot :active="visible" :show="show" :hide="hide" />
  </div>
  <transition
    enter-active-class="transition-opacity duration-100 ease-out"
    leave-active-class="transition-opacity duration-100 ease-out"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="visible"
      ref="floating"
      v-click-outside:mouseup="hide"
      class="absolute top-0 left-0"
      :style="{ transform: \`translate(\${position.x}px, \${position.y}px)\` }"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >
      <slot name="floating" :visible="visible" :show="show" :hide="hide" />
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { ref, reactive, Ref, nextTick } from 'vue'
import {
  computePosition,
  getScrollParents,
  offset,
  shift,
} from '@floating-ui/dom'
import { Placement } from '@floating-ui/core'

const props = defineProps<{
  type?: 'click' | 'hover' | 'manual'
  placement?: Placement
}>()

const visible = ref(false)
const reference: Ref<HTMLElement | null> = ref(null)
const floating: Ref<HTMLElement | null> = ref(null)
const position = reactive({ x: 0, y: 0 })

async function update() {
  if (reference.value === null || floating.value === null) return
  const { x, y } = await computePosition(reference.value, floating.value, {
    placement: props.placement,
    middleware: [offset(5), shift()],
  })
  Object.assign(position, {
    x: Math.round(x),
    y: Math.round(y),
  })
}

function addHooks() {
  if (reference.value === null) return
  getScrollParents(reference.value).forEach((el) => {
    el.addEventListener('scroll', update)
    el.addEventListener('resize', update)
  })
}
function removeHooks() {
  if (reference.value === null) return
  getScrollParents(reference.value).forEach((el) => {
    el.removeEventListener('scroll', update)
    el.removeEventListener('resize', update)
  })
}

function show() {
  if (visible.value === true) return
  visible.value = true
  nextTick(() => {
    update()
    addHooks()
  })
}
function hide() {
  if (visible.value === false) return
  removeHooks()
  visible.value = false
}

const protect = ref(false)
function onMouseOver() {
  if (props.type !== 'hover') return
  protect.value = true
  show()
}
function onMouseLeave() {
  if (props.type !== 'hover') return
  protect.value = false
  setTimeout(() => {
    if (!protect.value) hide()
  }, 50)
}
<\/script>
`]),r("pre",{},[`<template>
  <div class="relative text-center py-4">
    <Float class="inline-block" placement="bottom-start">
      <template #default>
        <button class="btn">show menu</button>
      </template>
      <template #floating="root">
        <div class="menu">
          <Float class="block" type="hover" placement="right-start">
            <template #default="props">
              <button
                class="menu-item"
                :class="{ 'bg-gray-100': props.active }"
              >
                menu 1
              </button>
            </template>
            <template #floating>
              <div class="menu -mt-1">
                <Float class="block" type="hover" placement="right-start">
                  <template #default="props">
                    <button
                      class="menu-item"
                      :class="props.active ? 'bg-gray-100' : 'bg-white'"
                    >
                      submenu 1
                    </button>
                  </template>

                  <template #floating>
                    <div class="menu -mt-1">
                      <button class="menu-item" @click="root.hide">
                        close
                      </button>
                    </div>
                  </template>
                </Float>
                <button class="menu-item" @click="root.hide">close</button>
              </div>
            </template>
          </Float>
          <Float class="block" type="hover" placement="right-start">
            <template #default="props">
              <button
                class="menu-item"
                :class="props.active ? 'bg-gray-100' : 'bg-white'"
              >
                menu 2
              </button>
            </template>
            <template #floating>
              <div class="menu -mt-1">
                <button class="menu-item text-gray-400 cursor-not-allowed">
                  disabled
                </button>
              </div>
            </template>
          </Float>
        </div>
      </template>
    </Float>
  </div>
</template>
<script lang="ts" setup>
import Float from './Float3.vue'
<\/script>
<style lang="postcss">
.btn {
  @apply px-3 py-1 bg-gray-800 text-white font-semibold rounded-lg;
}
.menu {
  @apply w-32 py-1 bg-white ring-1 ring-gray-200 rounded shadow-sm;
}
.menu-item {
  @apply inline-block text-left w-full px-2 py-1 hover:bg-gray-100 focus:outline-none;
}
</style>
`]),r("p",{},["And the final result looks like this:"]),r(Ee,{})];var wt={render(){return gt}};const xt={title:"Create a floating component",layout:"book"};export{wt as default,xt as frontmatter,gt as nodes};
