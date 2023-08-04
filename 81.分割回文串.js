/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function (s) {
    const res = [];
    let path = [];
    function dfs(n) {
        if (n === s.length) {
            res.push([...path])
            return
        }
        for (let i = n; i < s.length; i++) {
            if (!judge(s, n, i))
                continue;
            path.push(s.slice(n, i + 1))
            dfs(i + 1);
            path.pop()
        }

    }
    function judge(str, l, r) {
        for (let i = l, j = r; i < j; i++, j--) {
            if (str[i] !== str[j]) return false;
        }
        return true;
    }
    dfs(0)
    return res
};

partition('aab')