/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];
    let list = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let res = [''];
    function dfs(n, res) {
        if (n == digits.length) return
        let str = list[digits.charAt(n)];
        let size = res.length;
        while (size > 0) {
            let s = res.shift();

            for (let i = 0; i < str.length; i++) {
                let c = str.charAt(i);
                res.push(s + c);
            }
            size--;
        }
        dfs(n + 1, res)
    }
    dfs(0, res);
    return res
};
letterCombinations('23')