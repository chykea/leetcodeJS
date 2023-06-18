/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 超时
var maxSlidingWindow = function (nums, k) {
    if (!nums.length) return []
    let ans = []
    for (let i = 0; i <= nums.length - k; i++) {
        let arr = nums.slice(i, i + k)

        ans.push(Math.max(...arr))
    }
    return ans
};
maxSlidingWindow([1], 1)