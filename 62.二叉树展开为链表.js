/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return []
    flatten(root.left)
    flatten(root.right)
    let tmp = root.right
    root.right = root.left
    root.right.right = tmp;
    root.left = null
    return root
};