import { hasPath } from './binary-tree-path-sum'
import { TreeNode } from '../methods'

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
