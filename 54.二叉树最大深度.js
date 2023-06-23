/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    let mam_l = maxDepth(root.left);
    let mam_r = maxDepth(root.right);
    return Math.max(mam_l, mam_r) + 1
};