/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return []
    let arr = [];
    let queue = [root];
    while (queue.length !== 0) {
        let size = queue.length;
        let list = []
        while (size > 0) {
            let node = queue.shift();
            node == null ? list.push(null) : list.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            size--;
        }
        for (let i = list.length - 1; i >= 0; i--) {
            if (list[i] != null) {
                arr.push(list[i])
                break;
            }
        }
        list = [];
    }
    return arr
};

var rightSideView = function (root) {
    if (!root) return []
    let arr = [];
    function dfs(node, depth) {
        if (!node) return
        if (arr.length == depth) {
            arr.push(node.val)
        }
        depth++
        dfs(node.right, depth)
        dfs(node.left, depth)
    }
    dfs(root, 0)
    return arr
};