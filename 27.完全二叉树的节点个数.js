/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) return 0
    let count = 0;
    function dfs(node) {
        if (!node) return;
        count++;
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return count
};
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6)))

console.log(countNodes(root));