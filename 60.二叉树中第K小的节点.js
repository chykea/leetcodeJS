/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    if (!root) return -1;
    let arr = [];
    function dfs(node) {
        if (!node) return
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    return arr[k - 1]
};



function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let node = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4))
kthSmallest(node, 1)