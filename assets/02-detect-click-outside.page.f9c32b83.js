import{h as e}from"./vendor.1ba3453e.js";const n=[e("h1",{},["Detect click outside"]),e("p",{},["You want to detect clicks outside an element."]),e("p",{},["The basic idea is to globally capture clicks, and check whether the clicked element is inside the element of our concern. We need a ",e("a",{href:"https://v3.vuejs.org/guide/composition-api-template-refs.html"},["template ref"])," to specify the element, and a callback function. Event listener is loaded / removed along with the Vue component."]),e("pre",{},[`function useClickOutside(
  el: Ref<HTMLElement | null>,
  onClickOutside: () => void,
  mouseEvent: 'click' | 'dblclick' | 'mouseup' = 'click',
) {
  const listener = (e: Event) => {
    if (el.value && !el.value.contains(e.target as HTMLElement)) {
      onClickOutside()
    }
  }
  onMounted(() => {
    document.addEventListener(mouseEvent, listener)
  })
  onBeforeUnmount(() => {
    document.removeEventListener(mouseEvent, listener)
  })
}
`]),e("p",{},["Another way is to provide a custom ",e("code",{},["v-click-outside"])," ",e("a",{href:"https://v3.vuejs.org/guide/custom-directive.html"},["directive"]),":"]),e("pre",{},[`app.directive('click-outside', {
  mounted(el, binding) {
    document.addEventListener(binding.arg || 'click', binding.value)
  }
  beforeUnmount(el) {
    document.removeEventListener(binding.arg || 'click', binding.value)
  }
})
`]),e("p",{},["Usage:"]),e("pre",{},[`<div v-click-outside:mouseup="onClickOutside"></div>
`])];var i={render(){return n}};const o={title:"Detect click outside",layout:"book"};export{i as default,o as frontmatter,n as nodes};
