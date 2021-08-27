import { hasPath } from './binary-tree-path-sum'
import { TreeNode } from '../methods'

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

describe('binary-tree-path-sum', () => {
  test('should work', () => {
    hasPath(root, 23)
    hasPath(root, 19)
  })
})
