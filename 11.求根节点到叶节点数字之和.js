/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var sumNumbers = function (root) {
    if (root == null) return

    function sumDeepNumber(node, Count) {
        if (node == null) return 0
        let tmpCount = Count * 10 + node.val;
        if (node.left == null && node.right === null) return tmpCount
        return (sumDeepNumber(node.left, tmpCount)) + (sumDeepNumber(node.right, tmpCount))
    }
    return sumDeepNumber(root, 0)
};

var root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
// var root = new TreeNode(4, new TreeNode(9, new TreeNode(5), new TreeNode(1)), new TreeNode(0))
console.log(sumNumbers(root));