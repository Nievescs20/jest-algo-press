const smallestSubarray = (arr, s) => {
  let i = 0,
    sum = 0,
    minLength = Infinity

  for (let j = 0; j < arr.length; j++) {
    sum += arr[j]
    while (sum >= s) {
      minLength = Math.min(minLength, j - i + 1)
      sum -= arr[i]
      i++
    }
  }

  return minLength === Infinity ? 0 : minLength
}

export default smallestSubarray
