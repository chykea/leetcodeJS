/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (right >= left && nums[left] == target && nums[right] == target) {
            return [left, right]
        }
        if (right >= left && nums[right] != target) right--
        if (right >= left && nums[left] != target) left++
    }
    return [-1, -1]
};