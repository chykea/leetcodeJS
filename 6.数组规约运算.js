/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    if (nums.length <= 0) return init;
    for (let i = 0; i < nums.length; i++) {
        init = fn(init, nums[i])
    }

    return init
};
console.log(reduce(nums = [1, 2, 3, 4],
    fn = function sum(accum, curr) { return accum + curr; },
    init = 0));