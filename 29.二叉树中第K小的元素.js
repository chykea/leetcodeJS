/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 遍历+排序
// var kthSmallest = function (root, k) {
//     if (!root) return
//     let tmpArr = []
//     function dfs(node) {
//         if (!node) return
//         tmpArr.push(node.val)
//         if (node.left == null && node.right == null) return
//         dfs(node.left)
//         dfs(node.right)
//     }
//     dfs(root)
//     tmpArr.sort((a, b) => a - b)
//     return tmpArr[k - 1]
// };


var kthSmallest = function (root, k) {
    let cnt = 0;
    let ans = 0;

    function dfs(node, k) {
        if (node == null) return
        dfs(node.left, k);
        cnt++;
        if (cnt == k) {
            ans = node.val
            return
        }
        dfs(node.right, k)
    }
    dfs(root, k)
    return ans
};
