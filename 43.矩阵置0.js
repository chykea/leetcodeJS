/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    if (!matrix.length) return;
    let m = matrix.length
    let n = matrix[0].length
    let row = new Array(m).fill(false)
    let col = new Array(n).fill(false)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                row[i] = col[j] = true
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (col[j] || row[i]) {
                matrix[i][j] = 0;
            }
        }
    }
    console.log(matrix);
};

setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])