var flatten = function (root) {
    if (!root) return []
    let res = []
    function dfs(node) {
        if (!node) return
        res.push(node)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    for (let i = 0; i < res.length - 1; i++) {
        res[i].left = null;
        res[i].right = res[i + 1]
    }
    return res[0]
};
let arr = [1, 2, 5, 3, 4, null, 6]
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let root = new TreeNode(arr[0], new TreeNode(arr[1], new TreeNode(3), new TreeNode(4)), new TreeNode(arr[2], null, new TreeNode(arr[6])))
flatten(root)