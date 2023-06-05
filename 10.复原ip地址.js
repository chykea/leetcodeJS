/**
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function (s) {
    if (s.length < 4 || s.length > 12) return []
    let ans = []; // 用于存储结果
    let tmpArr = []; // 用于存储分支
    function dfs(i) {
        if (tmpArr.length === 4 && i === s.length) {
            ans.push(tmpArr.join('.'))
            return
        }
        if (tmpArr.length === 4 && i < s.length) {
            return
        }
        for (let j = 1; j <= 3; j++) {
            if (i + j - 1 >= s.length) return // 一个位可以取一位数到三位数
            if (j !== 1 && s[i] === '0') return;  // 
            let str = s.substring(i, i + j);
            if (parseInt(str) > 255) return

            tmpArr.push(str)
            dfs(i + j)
            tmpArr.pop()
        }
    }
    dfs(0);
    return ans
}

console.log(restoreIpAddresses('255255255255'));
console.log(restoreIpAddresses('100100'));