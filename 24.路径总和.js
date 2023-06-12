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
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (root == null) return false
    function dfs(root, sum) {
        if (sum === 0 && (root.left == null && root.right == null)) {
            return true
        }
        if (root.left == null && root.right == null) {
            return false
        }
        if (root.left && dfs(root.left, sum - root.left.val)) return
        if (root.right && dfs(root.right, sum - root.right.val)) return
    }

    return dfs(root, targetSum)
};

function TreeBuilder(trees) {
    let nodes = [];
    for (let i = 0; i < trees.length; i++) {
        nodes[i] = new TreeNode(trees[i], null, null)
    }
    for (let i = 0; i < Math.floor(trees.length / 2) - 1; i++) {
        let node = nodes[i];
        node.left = nodes[i * 2 + 1]
        node.right = nodes[i * 2 + 2]
    }

    let index = (Math.floor(trees.length / 2)) - 1
    let lastNode = nodes[index]
    lastNode.left = nodes[index * 2 + 1]
    if (trees.length % 2 != 0) {
        lastNode.right = nodes[index * 2 + 2]
    }
    return nodes[0]
}
let root = TreeBuilder([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
console.log(root);
console.log(hasPathSum(root, 22));


