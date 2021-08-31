import { hasPath } from './binary-tree-path-sum'
import { TreeNode } from '../../methods'
import smallestSubarray from './smallest-subarray-sum'
describe('binary-tree-path-sum', () => {
  const root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)

  test('should find the sum', () => {
    expect(hasPath(root, 23)).toBe(true)
  })

  test('should not find the sum', () => {
    expect(hasPath(root, 19)).toBe(false)
  })
})

describe('smallest subarray sum', () => {
  let a = [2, 1, 5, 2, 3, 2]
  let t = 7

  let a2 = [3, 4, 1, 1, 6]
  let t2 = 8
  test('should pass... smallest', () => {
    expect(smallestSubarray(a, t)).toBe(2)
    expect(smallestSubarray(a2, t2)).toBe(3)
  })
})
