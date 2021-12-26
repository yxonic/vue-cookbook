---
title: Assert with type assertion
layout: book
---

# Assert with type assertions

## Problem
You want to assert something is true, while let the typings of the related variables reflects your assertion. For example:

```ts
let x: number | null = 3
assert(x !== null)
x++ // here x is guaranteed to be `number`
```

## Solution
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
