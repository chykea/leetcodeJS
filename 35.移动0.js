/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (!nums.length) return
    let f = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) continue;
        nums[f] = nums[i];
        f++;
    }
    for (let c = f; c < nums.length; c++) {
        nums[c] = 0
    }
    return nums
};