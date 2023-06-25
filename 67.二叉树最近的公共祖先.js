/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 内存溢出
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null
    let res = []
    function dfs(node, target, path) {
        if (!node) return
        if (node.val == target.val) {
            res.push([...path])
            return
        }
        if (node.left) dfs(node.left, target, [...path, node.left])
        if (node.right) dfs(node.right, target, [...path, node.right])
    }
    dfs(root, p, [root])
    dfs(root, q, [root])
    let [p_path, q_path] = res
    console.log(res);
    let ans = null
    for (let i = 0; i < p_path.length && i < q_path.length; i++) {
        if (p_path[i].val == q_path[i].val)
            ans = p_path[i]
    }
    return ans
};

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}


let node = new TreeNode(1, new TreeNode(2))

lowestCommonAncestor(node)

var lowestCommonAncestor = function (root, p, q) {
    function dfs(root, p, q) {
        if (root == null || root == p || root == q) return root
        let left = dfs(root.left, p, q)
        let right = dfs(root.right, p, q)
        if (left && right) return root
        if (left == null) return right
        if (right == null) return left

    }
    return dfs(root, p, q)
}