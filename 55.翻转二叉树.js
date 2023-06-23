/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归做法
var invertTree = function (root) {
    if (!root) return root
    let tmpTree = root.left;
    root.left = root.right;
    root.right = tmpTree;

    invertTree(root.left)
    invertTree(root.right)
    return root
};