import{h as e}from"./vendor.c72f9abb.js";const n=[e("h1",{},["Pass data along tree"]),e("h2",{},["Problem"]),e("p",{},["You have a homogeneous component tree (e.g. nested comments, menus), and you want to pass data from parent to children."]),e("h2",{},["Solution"]),e("p",{},["Typical way of passing data to child components is to use props. However, this would expose implementation details in public API, and sometimes is not what you want. This also requires component user to correctly fill in props, if the component tree is composed by user:"]),e("pre",{},[`<menu-item title="File">
  <menu-item parent-title="File" title="Open..."></menu-item>
  <menu-item parent-title="File" title="Save..."></menu-item>
</menu-item>
`]),e("p",{},["Another way of passing data is to use provide/inject. To pass data from parent to children, we combine provide and inject in the same function, and put data under the same name:"]),e("pre",{},[`export function useParentData<T>(name: string, v: T) {
  const s = inject(name, undefined)
  provide(name, v)
  return s
}
`]),e("p",{},["We can also allow an optional default value with function overloading:"]),e("pre",{},[`export function useParentData<T>(name: string, v: T): T | undefined
export function useParentData<T>(name: string, v: T, defaultValue: T): T
export function useParentData<T>(name: string, v: T, defaultValue?: T) {
  const s = inject(name, defaultValue)
  provide(name, v)
  return s
}
`])];var a={render(){return n}};const o={title:"Pass data along tree",layout:"book"};export{a as default,o as frontmatter,n as nodes};
