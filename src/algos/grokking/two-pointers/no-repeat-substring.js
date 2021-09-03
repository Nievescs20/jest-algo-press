/* Given a string "aabc", expect it to be 3 */

//#region main
const noRepeatSubstring = (str = '') => {
  let left = 0,
    right = 0,
    length = 0,
    charHash = {}

  while (right < str.length) {
    if (str[right] in charHash) {
      left = Math.max(left, charHash[str[right]] + 1)
    }
    charHash[str[right]] = right
    length = Math.max(length, right - left + 1)
    right++
  }

  return length
}
//#endregion main

export default noRepeatSubstring
