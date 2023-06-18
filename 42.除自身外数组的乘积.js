/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    if (!nums.length) return
    let res = [], k = 1;
    let left = new Array(nums.length).fill(1), right = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        k *= nums[i - 1]
        left[i] = k;
    }

    k = 1;
    for (let i = nums.length - 1; i > 0; i--) {
        k *= nums[i];
        right[i - 1] = k;
    }

    for (let i = 0; i < nums.length; i++) {
        res[i] = left[i] * right[i]
    }
    return res
};
productExceptSelf([1, 2, 3, 4])