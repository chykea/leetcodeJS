/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let a_left = 0, a_right = matrix.length - 1;
    while (a_left <= a_right) {
        let mid = Math.floor((a_left + a_right) / 2)
        if (matrix[mid][0] == target) return true
        if (matrix[mid][0] > target) a_right = mid - 1
        else a_left = mid + 1
    }
    return matrix[a_right] ? matrix[a_right].includes(target) : false
};
console.log(searchMatrix([[1], [3]], 0));