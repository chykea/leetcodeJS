/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    if (!height.length) return 0
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    while (left <= right) {
        if (height[left] > height[right]) {
            maxArea = Math.max(maxArea, (right - left) * height[right])
            right--;
        } else {
            maxArea = Math.max(maxArea, (right - left) * height[left])
            left++;
        }
    }
    return maxArea
};