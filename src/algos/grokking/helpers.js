export function buildCharCounter(str) {
  const hash = {}
  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = (hash[str[i]] || 0) + 1
  }
  return hash
}

/* for of loop works with hash builder */
export function buildCharCounterForOfLoop(str) {
  const hash = {}
  for (const c of str) {
    hash[c] = (hash[c] || 0) + 1
  }
  return hash
}

export function decrementOrDeleteKey(obj, key) {
  if (key in obj) {
    const obj2 = { ...obj }
    obj2[key] -= 1

    if (!obj2[key]) console.log(0)
    return obj2
  }
  return { ...obj }
}
