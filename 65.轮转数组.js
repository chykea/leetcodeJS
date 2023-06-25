/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (!nums.length) return
    let cnt = k % nums.length;

    function reserve(start, end) {
        while (start < end) {
            let tmp = nums[start]
            nums[start] = nums[end]
            nums[end] = tmp
            start++;
            end--
        }
    }

    reserve(0, nums.length - 1)
    reserve(0, cnt - 1)
    reserve(cnt, nums.length - 1)
    console.log(nums);
};
rotate([1, 2, 3, 4, 5, 6, 7], 3)