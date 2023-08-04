/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = [];
    function dfs(str, left, right) {
        if (left === right && left === 0) {
            res.push(str)
            return
        }
        if (left > right) return
        if (left > 0) dfs(str + '(', left - 1, right)
        if (right > 0) dfs(str + ')', left, right - 1)
    }
    dfs('', n, n)
    return res
};
generateParenthesis(8)