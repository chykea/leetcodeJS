/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let tmp = 0, cnt = 0;
    let right = 0;
    let map = new Map([[0, 1]])
    for (; right < nums.length; right++) {
        tmp += nums[right]
        if (map.get(tmp - k)) {
            cnt += map.get(tmp - k);
        }
        let value = map.get(tmp)
        if (value) {
            map.set(tmp, value++)
        } else {
            map.set(tmp, 1)
        }
    }
    return cnt;
};
console.log(subarraySum([1, 2, 3], 3));