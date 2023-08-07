/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows <= 1) return [[1]];
    const dp = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        dp.push(Array(i + 1).fill(0))
        dp[i][0] = 1;
        dp[i][i] = 1;
    }
    for (let i = 2; i < numRows; i++) {
        for (let j = 1; j < i; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }
    return dp;
};
generate(4)