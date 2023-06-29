/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    if (n <= 1) return 1
    for (let i = 2; i <= n; i++) {
        // 等差数列求和  
        if (((1 + i) * i) / 2 === ((i + n) * (n - i + 1)) / 2) return i
    }
    return -1
};
console.log(pivotInteger(4));

// var sortArray = function (nums) {
//     if (!nums.length) return
//     function quick(l, r) {
//         if (l >= r) return
//         let left = l, right = r;
//         let base = nums[l];
//         while (left < right) {
//             while (right > left && nums[right] <= base) right--;
//             while (right > left && nums[left] >= base) left++;
//             let tmp = nums[left];
//             nums[left] = nums[right];
//             nums[right] = tmp;
//         }
//         nums[l] = nums[left];
//         nums[left] = base;
//         quick(l, left - 1)
//         quick(left + 1, r)
//     }
//     quick(0, nums.length - 1)
//     return nums
// };
// console.log(sortArray([1, 2, 3, 4, 5]));