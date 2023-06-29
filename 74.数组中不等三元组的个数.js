/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
    if (!nums.length) return
    let cnt = 0;
    nums.sort((a, b) => a - b)
    console.log(nums);
    return cnt;
};
console.log(unequalTriplets([4, 4, 2, 4, 3]));