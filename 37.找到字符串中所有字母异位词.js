/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (p.length > s.length) return []
    let pLen = p.length, sLen = s.length, ans = [];
    let c1 = [], c2 = [];
    console.log(c2.length);
    for (let i = 0; i < pLen; i++) c2[p.charCodeAt(i) - 'a'.charCodeAt]++;

    for (let l = 0, r = 0; r < sLen; r++) {
        c1[s.charCodeAt(r) - 'a'.charCodeAt]++;
        if (r - l + 1 > pLen) c1[s.charCodeAt(l++) - 'a'.charCodeAt]--
        if (check(c1, c2)) ans.push(l)
    }
    function check(c1, c2) {
        for (let i = 0; i < 26; i++) {
            if (c1[i] != c2[i]) return false;
        }
        return true
    }
    return ans
};

// 超时
// var findAnagrams = function (s, p) {
//     if (!p.length || !s.length) return
//     let pLen = p.length;
//     let pArr = p.split('').sort();
//     let ptmp = pArr.toString().replaceAll(',', '')
//     let ans = [];
//     for (let i = 0; i <= s.length - pLen; i++) {

//         let str = s.substring(i, i + pLen).split('')
//         str.sort()
//         let stmp = str.toString().replaceAll(',', '')

//         if (stmp == ptmp) ans.push(i)
//     }
//     return ans
// };
// console.log(findAnagrams("cbaebabacd", "abc"));
console.log('b' - 'a');