/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归做法
// 该二叉树为二叉搜索树，如果目标节点的值大于当前节点的值，即目标节点在当前节点的右子树中
// 反之为左子树
// 如果都不满足，即在一左一右，当前节点为分叉点，返回当前节点即可
// var lowestCommonAncestor = function (root, p, q) {
//     if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
//     if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)
//     return root
// };

var lowestCommonAncestor = function (root, p, q) {
    function dfs(node, target) {
        let path = [];
        let root = node;
        while (root.val != target.val) {
            path.push(root)
            if (target.val < root.val) {
                root = root.left
            } else {
                root = root.right
            }
        }
        path.push(root)
        return path
    }
    let path1 = dfs(root, p)
    let path2 = dfs(root, q)
    let ans = null
    for (let i = 0; i < path1.length && i < path2.length; i++) {
        if (path1[i].val == path2[i].val) {
            ans = path1[i]
        } else {
            break;
        }
    }
    return ans

};
