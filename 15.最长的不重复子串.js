/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s.length) return 0
    let maxLen = 0, start = 0;
    let map = new Map();
    for (let end = 0; end < s.length; end++) {
        let c = s.charAt(end)
        if (map.get(c)) {
            start = Math.max(map.get(c), start)
        }
        map.set(c, end + 1)
        maxLen = Math.max(maxLen, end + start - 1)

    }

};