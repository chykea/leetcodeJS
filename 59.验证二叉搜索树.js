/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    function dfs(node, left, right) {
        if (!node) return true
        let x = node.val
        return left < x && x < right && dfs(node.left, left, x) && dfs(node.right, x, right)
    }
    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
