---
title: Async Week
editLink: true
draft: true
---

<script setup>
// console.log($frontmatter)
// useData()
import { useData } from 'vitepress'
const { frontmatter } = useData()
console.log(frontmatter.editLink)
console.log(frontmatter.title)

</script>

<style>
  h1 {
    color: pink;
  }
</style>

# {{ $frontmatter.title }}

Async Week links are here:

```js
const omg = 'OMG'
```

<img src="/ss1.png">
