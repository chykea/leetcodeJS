/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1;
    let tmp = 0;
    while (left < right) {
        if (numbers[left] === numbers[right]) continue
        tmp = numbers[left] + numbers[right];
        if (tmp < target) left++;
        else if (tmp > target) right--;
        else return [left + 1, right + 1]
    }
    return []
};