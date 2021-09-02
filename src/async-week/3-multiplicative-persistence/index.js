//#region iterative
const multiplicativePersistence = num => {
  let count = 0

  while (num >= 10) {
    let product = 1
    while (num > 0) {
      const digit = num % 10
      product = product * digit
      num = (num - digit) / 10
    }
    num = product
    count++
  }

  return count
}
//#endregion iterative

//#region recursive
export const recursive = num => (num < 10 ? 0 : 1 + recursive(product(num)))
//#endregion recursive

//#region helper
export function product(num) {
  let product = 1
  while (num > 0) {
    const digit = num % 10
    product *= digit
    num = (num - digit) / 10
  }
  return product
}
//#endregion helper
export default multiplicativePersistence
