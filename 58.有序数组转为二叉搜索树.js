/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null

    const buildTree = (left, right) => {
        if (left > right) return null
        let mid = Math.floor((left + right) / 2);
        let node = new TreeNode(nums[mid])
        node.left = buildTree(left, mid - 1)
        node.right = buildTree(mid + 1, right)
        return node
    }
    return buildTree(0, nums.length - 1)
};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));