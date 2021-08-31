/**
 * @title Binary Tree Path Sum
 * @prompt Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 * @course Grokking the Coding Interview
 * @link https://www.educative.io/courses/grokking-the-coding-interview/B815A0y2Ajn
 *
 * @diagram
 //#region diag
 * Sum 23
 *           *12
 *          /   \
 *        7     *1
 *      /       / \
 *     9     *10   5
 //#endregion diag
 */

// import { TreeNode } from '../methods'

// const root = new TreeNode(12)
// root.left = new TreeNode(7)
// root.right = new TreeNode(1)
// root.left.left = new TreeNode(9)
// root.right.left = new TreeNode(10)
// root.right.right = new TreeNode(5)

/**
 * @pitfalls
 * 1. must be leaf before returning, check by &&
 * 2. root === null is base case since if it isn't a leaf, or the values dont match, keep traversing
 *    #TODO complex case of we check if val > sum, then stop, as long as there is no negative numbers.
 */

//#region path
export const hasPath = (root, sum) => {
  if (root === null) return false

  if (root.val === sum && root.left === null && root.right === null) return true

  return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
}
//#endregion path

// console.log(hasPath(root, 23)) // true: 12 + 1 + 10
// console.log(hasPath(root, 19)) // false
