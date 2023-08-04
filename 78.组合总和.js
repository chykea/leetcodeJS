/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    if (!candidates.length) return [];
    let res = [];
    let path = [];
    candidates.sort((a, b) => a - b)
    function dfs(n, t) {
        if (t == 0) {
            let tmp = [...path].sort((a, b) => a - b)
            res.push(tmp);
            return
        }
        if (n == candidates.length + 1 || t < 0) {
            return
        }
        for (let i = 0; i < candidates.length; i++) {
            path.push(candidates[i]);
            dfs(i + 1, t - candidates[i]);
            path.pop(candidates[i])
        }
    }
    dfs(0, target)
    res = Array.from(new Set(res.map(JSON.stringify))).map(JSON.parse);
    return res
};
combinationSum([2, 3], 6)