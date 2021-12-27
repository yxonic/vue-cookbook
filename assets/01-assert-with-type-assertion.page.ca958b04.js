import{h as e}from"./vendor.4c9b330d.js";const t=[e("h1",{},["Assert with type assertions"]),e("h2",{},["Problem"]),e("p",{},["You want to assert something is true, while let the typings of the related variables reflects your assertion. For example:"]),e("pre",{},[`let x: number | null = 3
assert(x !== null)
x++ // here x is guaranteed to be \`number\`
`]),e("h2",{},["Solution"]),e("pre",{},[`export function assert(
  condition: boolean,
  message?: string,
): asserts condition {
  if (!condition) {
    throw new Error(message ?? 'assertion error')
  }
}
`])];var n={render(){return t}};const s={title:"Assert with type assertion",layout:"book"};export{n as default,s as frontmatter,t as nodes};
