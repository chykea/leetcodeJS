/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let queue = [root],
        res = [];
    while (queue.length) {
        let size = queue.length;
        let list = [];
        while (size > 0) {
            let node = queue.shift()
            list.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            size--
        }
        res.push(list)
        list = []
    }
    return res
};
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
console.log(levelOrder(new TreeNode(1)));