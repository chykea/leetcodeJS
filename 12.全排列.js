/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (!nums.length) return nums;
    let ans = [];
    let tmpArr = [];

    function dfs(n) {
        if (n === nums.length) {
            ans.push(Array.from(tmpArr))
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (!tmpArr.includes(nums[i])) { // 每次添加完进行下一次dfs时，要判断临时存储数组有无该数据，有就跳过
                tmpArr.push(nums[i])
                dfs(n + 1)
                tmpArr.pop()
            }
        }
    }
    dfs(0)
    return ans
};
console.log(permute([1, 2, 3]));
// console.log(permute([0, 1]));
// console.log(permute([1, 2, 3]));