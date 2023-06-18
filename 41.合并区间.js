/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (!intervals.length) return []
    intervals.sort((a, b) => a[0] - b[0])
    let res = []
    let pre = intervals[0];
    for (let i = 0; i < intervals.length; i++) {
        let cur = intervals[i];
        if (cur[0] > pre[1]) {
            res.push(pre);
            pre = cur
        } else {
            pre[1] = Math.max(cur[1], pre[1])
        }
    }
    res.push(pre)
    return res
};
console.log(merge(intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]));