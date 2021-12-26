---
title: Assert with type assertion
layout: book
---

# Assert with type assertions

```ts
export function assert(
  condition: boolean,
  message?: string,
): asserts condition {
  if (!condition) {
    throw new Error(message ?? 'assertion error')
  }
}
```
