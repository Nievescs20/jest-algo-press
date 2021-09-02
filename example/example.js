  import { blue, red } from 'chalk'
import { readdirSync } from 'fs'
import path from 'path'

export const example = () => {
  return 1
}

export const sayHi = name => {
  return `Hello ${name}`
}

// Regex
export const matchHey = (str = '') => {
  const regex = /hey/g
  return str.match(regex)
}

// Walk the dom
export const fsFn = () => {
  // let's return an array of things such as
  // __dirname,
  const dirPath = path.join(__dirname)
  const joined = path.join(__dirname, 'yolo')
  const dirs = readdirSync(dirPath, { withFileTypes: true })

  return {
    dirPath,
    joined,
    dirs,
  }
}
