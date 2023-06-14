/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length) return 0
    let sets = new Set();
    for (let num of nums) {
        sets.add(num)
    }
    let count = 0;
    for (let num of sets) {
        let cur = num;
        if (!sets.has(cur - 1)) {
            while (sets.has(cur + 1)) {
                cur++;
            }
        }
        count = Math.max(count, cur - num + 1)
    }
    return count
};