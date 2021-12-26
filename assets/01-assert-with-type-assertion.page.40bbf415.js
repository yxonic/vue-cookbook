import{h as t}from"./vendor.1ba3453e.js";const e=[t("h1",{},["Assert with type assertions"]),t("pre",{},[`export function assert(
  condition: boolean,
  message?: string,
): asserts condition {
  if (!condition) {
    throw new Error(message ?? 'assertion error')
  }
}
`])];var r={render(){return e}};const s={title:"Assert with type assertion",layout:"book"};export{r as default,s as frontmatter,e as nodes};
