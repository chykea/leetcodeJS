/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (n == 0) return []

    let res = [];
    function dfs(tmpStr, left, right) {
        if (left === 0 && right === 0) {
            res.push(tmpStr);
            return
        }
        if (left > right) {
            return
        }

        if (left > 0) dfs(tmpStr + '(', left - 1, right)
        if (right > 0) dfs(tmpStr + ')', left, right - 1)
    }
    dfs('', n, n)
    return res
};
